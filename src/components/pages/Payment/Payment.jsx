import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

import { toast } from "react-toastify";

import {
    FaArrowLeft,
    FaCheckCircle,
    FaCopy,
    FaMoneyCheckAlt,
    FaReceipt,
    FaShieldAlt,
} from "react-icons/fa";

import styles from "./Payment.module.css";

import { useCart } from "../../../context/cartContext";
import { usePayment } from "../../../context/PaymentContext";

import {
    createPayment,
    formatPrice,
} from "../../../utils/paymentUtils";

const Payment = () => {

    const navigate = useNavigate();

    const {
        removeFromCart,
    } = useCart();

    const {
        checkoutItems,
        clearCheckout,
        createPayment: savePayment,
    } = usePayment();

    // ----------------------------------
    // Safe Checkout Items
    // ----------------------------------

    const safeItems = useMemo(() => {

        return Array.isArray(checkoutItems)
            ? checkoutItems
            : [];

    }, [checkoutItems]);

    // ----------------------------------
    // Payment Object
    // ----------------------------------

    const payment = useMemo(() => {

        return createPayment(safeItems);

    }, [safeItems]);

    // ----------------------------------
    // Loading
    // ----------------------------------

    const [loading, setLoading] = useState(false);

    const [showQR, setShowQR] = useState(false);

    // ----------------------------------
    // Customer
    // ----------------------------------

    const [customer, setCustomer] = useState({

        fullName: "",

        phone: "",

        email: "",

        city: "",

    });

    // ----------------------------------
    // Payment Details
    // ----------------------------------

    const [utr, setUtr] = useState("");

    const [receiptImage, setReceiptImage] = useState(null);

    const [receiptPreview, setReceiptPreview] = useState("");

    // ----------------------------------
    // Totals
    // ----------------------------------

    const totalItems = useMemo(() => {

        return safeItems.reduce(

            (sum, item) => sum + (item.quantity || 1),

            0

        );

    }, [safeItems]);

    // ----------------------------------
    // Redirect if Empty
    // ----------------------------------

    useEffect(() => {

        if (safeItems.length === 0) {

            toast.info("No product selected.");

            navigate("/cart");

        }

    }, [safeItems.length, navigate]);

    // ----------------------------------
    // QR Delay Animation
    // ----------------------------------

    useEffect(() => {

        const timer = setTimeout(() => {

            setShowQR(true);

        }, 2000);

        return () => clearTimeout(timer);

    }, []);

    // ----------------------------------
    // Customer Change
    // ----------------------------------

    const handleChange = (e) => {

        const { name, value } = e.target;

        setCustomer((prev) => ({

            ...prev,

            [name]: value,

        }));

    };

    // ----------------------------------
    // Receipt Upload
    // ----------------------------------

    const handleReceiptImage = (e) => {

        const file = e.target.files[0];

        if (!file) {

            setReceiptImage(null);

            setReceiptPreview("");

            return;

        }

        if (!file.type.startsWith("image/")) {

            toast.error("Only image files are allowed.");

            return;

        }

        if (file.size > 5 * 1024 * 1024) {

            toast.error("Maximum image size is 5 MB.");

            return;

        }

        setReceiptImage(file);

        setReceiptPreview(

            URL.createObjectURL(file)

        );

    };

    // ----------------------------------
    // Copy Invoice
    // ----------------------------------

    const copyInvoice = async () => {

        try {

            await navigator.clipboard.writeText(

                payment.invoiceId

            );

            toast.success("Invoice copied.");

        }

        catch {

            toast.error("Unable to copy invoice.");

        }

    };

    // ----------------------------------
    // Verify Token
    // ----------------------------------

    const generateVerifyToken = () => {

        return (

            Math.random()

                .toString(36)

                .substring(2, 10)

            +

            Date.now()

                .toString(36)

        );

    };

    // ----------------------------------
    // Validation
    // ----------------------------------

    const validate = () => {

        if (customer.fullName.trim().length < 3) {

            toast.error("Enter full name.");

            return false;

        }

        if (!/^[6-9]\d{9}$/.test(customer.phone)) {

            toast.error("Enter valid phone number.");

            return false;

        }

        if (

            customer.email &&

            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(

                customer.email

            )

        ) {

            toast.error("Invalid email.");

            return false;

        }

        if (utr.trim().length < 8) {

            toast.error(

                "Enter valid UTR / Transaction ID."

            );

            return false;

        }

        return true;

    };
    // ----------------------------------
    // Submit Payment
    // ----------------------------------

    const submitPayment = async () => {

        if (safeItems.length === 0) {

            toast.error("No product selected.");

            navigate("/cart");

            return;

        }

        if (!validate()) return;

        setLoading(true);

        try {

            // ------------------------------
            // Verification Token
            // ------------------------------

            const verifyToken = generateVerifyToken();

            // ------------------------------
            // Product List
            // ------------------------------

            const productList = safeItems
                .map((item) => {

                    const qty = item.quantity || 1;

                    return `${item.name} × ${qty}`;

                })
                .join("\n");

            // ------------------------------
            // Payment Object
            // ------------------------------

            const paymentData = {

                ...payment,

                verifyToken,

                customer,

                utr,

                receiptImage,

                items: safeItems,

                total: payment.total,

                status: "Pending Verification",

                paymentStatus: "Pending",

                createdAt: new Date().toISOString(),

            };

            // ------------------------------
            // Save Payment
            // ------------------------------

            await savePayment(paymentData);

            // ------------------------------
            // Send Admin Email
            // ------------------------------

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_PAYMENT_TEMPLATE2,
                {
                    to_email: "youradmin@gmail.com",

                    receiver_name: "Admin",

                    intro_message:
                        "A new payment has been submitted and is waiting for verification.",

                    invoice_id: payment.invoiceId,

                    payment_id: payment.paymentId,

                    payment_status: "Pending Verification",

                    amount: payment.total,

                    customer_name: customer.fullName,

                    customer_phone: customer.phone,

                    customer_email: customer.email || "Not Provided",

                    customer_city: customer.city || "Not Provided",

                    products: productList,

                    quantity: totalItems,

                    event_type: payment.eventType || "-",

                    event_date: payment.eventDate || "-",

                    message:
                        `UTR / Transaction ID : ${utr}`,

                    verification_section:
                        `Verify Payment\n${window.location.origin}/verify/${verifyToken}`,

                    footer_message:
                        "Please verify the payment from the admin panel."
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            // ------------------------------
            // Success
            // ------------------------------

            safeItems.forEach((item) => {

                removeFromCart(item.id);

            });

            clearCheckout();

            toast.success(

                "Payment submitted successfully. Waiting for verification."

            );

            navigate(

                `/payment/success/${payment.invoiceId}`

            );

        }

        catch (error) {

            console.error(error);

            toast.error(

                "Unable to submit payment. Please try again."

            );

        }

        finally {

            setLoading(false);

        }

    };

    // ----------------------------------
    // Empty Checkout
    // ----------------------------------

    if (safeItems.length === 0) {

        return null;

    }

    return (

        <div className={styles.payment}>

            <div className={styles.container}>
                {/* ===========================================
                    HEADER
                =========================================== */}

                <div className={styles.header}>

                    <button
                        className={styles.back}
                        onClick={() => navigate("/cart")}
                    >
                        <FaArrowLeft />
                        Back to Cart
                    </button>

                    <h1>Complete Payment</h1>

                    <p>
                        Review your booking details and
                        complete your payment securely.
                    </p>

                </div>

                <div className={styles.grid}>

                    {/* =======================================
                        LEFT SECTION
                    ======================================= */}

                    <div className={styles.left}>

                        {/* ===========================
                            CUSTOMER DETAILS
                        =========================== */}

                        <div className={styles.card}>

                            <h2>Customer Details</h2>

                            <div className={styles.formGrid}>

                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name *"
                                    value={customer.fullName}
                                    onChange={handleChange}
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number *"
                                    maxLength={10}
                                    value={customer.phone}
                                    onChange={handleChange}
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={customer.email}
                                    onChange={handleChange}
                                />

                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    value={customer.city}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                        {/* ===========================
                            INVOICE
                        =========================== */}

                        <div className={styles.card}>

                            <div className={styles.invoiceHeader}>

                                <h2>Invoice</h2>

                                <button
                                    type="button"
                                    onClick={copyInvoice}
                                >
                                    <FaCopy />
                                </button>

                            </div>

                            <div className={styles.invoiceRow}>
                                <span>Invoice ID</span>
                                <strong>
                                    {payment.invoiceId}
                                </strong>
                            </div>

                            <div className={styles.invoiceRow}>
                                <span>Payment ID</span>
                                <strong>
                                    {payment.paymentId}
                                </strong>
                            </div>

                            <div className={styles.invoiceRow}>
                                <span>Total Products</span>
                                <strong>
                                    {safeItems.length}
                                </strong>
                            </div>

                            <div className={styles.invoiceRow}>
                                <span>Total Quantity</span>
                                <strong>
                                    {totalItems}
                                </strong>
                            </div>

                            <div className={styles.invoiceRow}>
                                <span>Total Amount</span>

                                <strong>
                                    {formatPrice(payment.total)}
                                </strong>

                            </div>

                        </div>

                        {/* ===========================
                            ORDER SUMMARY
                        =========================== */}

                        <div className={styles.card}>

                            <h2>Order Summary</h2>

                            <div className={styles.items}>

                                {safeItems.map((item) => (

                                    <div
                                        key={item.id}
                                        className={styles.item}
                                    >

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                        />

                                        <div
                                            className={styles.itemInfo}
                                        >

                                            <h4>
                                                {item.name}
                                            </h4>

                                            <p>

                                                Quantity :
                                                {" "}
                                                {item.quantity || 1}

                                            </p>

                                            {item.category && (

                                                <small>
                                                    {item.category}
                                                </small>

                                            )}

                                        </div>

                                        <strong>

                                            {formatPrice(

                                                (item.price || 0) *

                                                (item.quantity || 1)

                                            )}

                                        </strong>

                                    </div>

                                ))}

                                

                            </div>
                            

                        </div>
                         <p className={styles.note}>

                            By clicking
                            <strong> Pay </strong>

                            you confirm that you
                            have already completed
                            the payment using
                            the QR code.

                            <br />
                            <br />

                            Your order will remain

                            <strong>
                                {" "}
                                Pending Verification
                                {" "}
                            </strong>

                            until our team verifies
                            your payment.

                            <br />
                            <br />

                            A verification email
                            will be sent to the
                            administrator immediately.
                            Customers will receive a
                            confirmation email only
                            after payment verification.

                        </p>

                    </div>

                    {/* =======================================
                        RIGHT SECTION STARTS
                    ======================================= */}

                    <div className={styles.right}>
                        {/* ===========================
                            QR PAYMENT
                        =========================== */}

                        <div className={styles.card}>

                            <h2>

                                <FaMoneyCheckAlt />

                                Scan & Pay

                            </h2>

                            {!showQR ? (

                                <div className={styles.loadingQR}>

                                    Preparing secure payment...

                                </div>

                            ) : (

                                <div className={styles.qrContainer}>

                                    <img
                                        src="/payment-qr.png"
                                        alt="Payment QR"
                                    />

                                    <small>

                                        Scan this QR using
                                        Google Pay,
                                        PhonePe,
                                        Paytm,
                                        BHIM or
                                        any UPI supported
                                        application.

                                    </small>

                                </div>

                            )}

                        </div>

                        {/* ===========================
                            PAYMENT DETAILS
                        =========================== */}

                        <div className={`${styles.card} ${styles.paymentDetails}`}>

                            <h2 className={styles.paymentTitle}>

                                <FaReceipt />

                                <span>Payment Details</span>

                            </h2>

                            <div className={styles.inputGroup}>

                                <label>
                                    UTR / Transaction ID
                                    <span className={styles.required}>*</span>
                                </label>

                                <input
                                    className={styles.utrInput}
                                    type="text"
                                    placeholder="Enter your UTR / Transaction ID"
                                    value={utr}
                                    onChange={(e) => setUtr(e.target.value)}
                                />

                            </div>

                            <div className={styles.inputGroup}>

                                <label>
                                    Payment Screenshot
                                    <span className={styles.optional}>
                                        (Optional)
                                    </span>
                                </label>

                                <input
                                    className={styles.fileInput}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleReceiptImage}
                                />

                            </div>

                            {receiptPreview && (

                                <div className={styles.preview}>

                                    <img
                                        src={receiptPreview}
                                        alt="Receipt Preview"
                                    />

                                </div>

                            )}

                            <div className={styles.paymentInfo}>

                                <strong>Note</strong>

                                <p>

                                    Enter your UTR / Transaction ID after completing the payment.

                                    <br /><br />

                                    Uploading a payment screenshot is optional,
                                    but it helps us verify your payment much faster.

                                </p>

                            </div>

                        </div>

                        {/* ===========================
                            SECURITY
                        =========================== */}

                        <div className={styles.security}>

                            <FaShieldAlt />

                            <span>

                                Every payment is manually
                                verified before your
                                booking is confirmed.

                                <br />
                                <br />

                                Please keep your
                                UTR / Transaction ID
                                until verification
                                is completed.

                            </span>

                        </div>

                        {/* ===========================
                            SUBMIT BUTTON
                        =========================== */}

                        <button

                            className={styles.payButton}

                            disabled={loading}

                            onClick={submitPayment}

                        >

                            <FaCheckCircle />

                            {loading

                                ? "Submitting..."

                                : `Pay ${formatPrice(payment.total)}`}

                        </button>

                       

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Payment;