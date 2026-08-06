import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import {
    FaCheckCircle,
    FaLock,
} from "react-icons/fa";

import styles from "./PaymentVerify.module.css";

import { usePayment } from "../../../context/PaymentContext";

const VerifyPayment = () => {

    const { token } = useParams();

    const navigate = useNavigate();

    const {
        payments,
        markVerified,
    } = usePayment();

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const payment = payments.find(
        (item) => item.verifyToken === token
    );

    if (!payment) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <h2>Invalid Verification Link</h2>
                </div>
            </div>
        );
    }

    const verify = async () => {

        if (
            password !==
            import.meta.env.VITE_VERIFY_PASSWORD
        ) {
            toast.error("Invalid password.");
            return;
        }

        setLoading(true);

        try {

            markVerified(
                payment.invoiceId,
                "Owner"
            );

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_PAYMENT_TEMPLATE2,
                {
                    to_email: payment.customer.email,

                    receiver_name: payment.customer.fullName,

                    intro_message:
                        "Thank you for your payment. Your booking has been confirmed successfully.",

                    invoice_id: payment.invoiceId,

                    payment_id: payment.paymentId,

                    payment_status: "Verified",

                    amount: payment.total,

                    customer_name: payment.customer.fullName,

                    customer_phone: payment.customer.phone,

                    customer_email: payment.customer.email,

                    customer_city: payment.customer.city || "-",

                    products: payment.items
                        .map(
                            (item) =>
                                `${item.name} × ${item.quantity || 1}`
                        )
                        .join("\n"),

                    quantity: payment.items.reduce(
                        (sum, item) => sum + (item.quantity || 1),
                        0
                    ),

                    event_type: payment.eventType || "-",

                    event_date: payment.eventDate || "-",

                    message:
                        "Your payment has been verified successfully. We look forward to making your event special.",

                    verification_section: "",

                    footer_message:
                        "Thank you for choosing Balloon Decoration in Varanasi & Haldi Mehndi."
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            toast.success(
                "Payment verified."
            );

            navigate("/history");

        } catch {

            toast.error(
                "Unable to verify payment."
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className={styles.wrapper}>

            <div className={styles.card}>

                <FaLock className={styles.icon} />

                <h1>Verify Payment</h1>

                <div className={styles.info}>

                    <p>

                        <strong>Invoice</strong>

                        {payment.invoiceId}

                    </p>

                    <p>

                        <strong>Name</strong>

                        {payment.customer.fullName}

                    </p>

                    <p>

                        <strong>Phone</strong>

                        {payment.customer.phone}

                    </p>

                    <p>

                        <strong>Email</strong>

                        {payment.customer.email || "-"}

                    </p>

                </div>

                <input
                    type="password"
                    placeholder="Verification Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                <button
                    onClick={verify}
                    disabled={loading}
                >

                    <FaCheckCircle />

                    {loading
                        ? "Verifying..."
                        : "Verify Payment"}

                </button>

            </div>

        </div>

    );

};

export default VerifyPayment;