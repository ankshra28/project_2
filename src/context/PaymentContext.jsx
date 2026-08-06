import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { toast } from "react-toastify";

const PaymentContext = createContext();

export function PaymentProvider({ children }) {
  // ===========================
  // Payments History
  // ===========================

  const [payments, setPayments] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("payments")) || [];
    } catch {
      return [];
    }
  });

  // ===========================
  // Current Checkout
  // ===========================

  // FIX: always an array, never undefined/null, so every consumer
  // (Payment.jsx in particular) can safely call .reduce/.map/.length
  // on it without guarding every single time.
  const [checkoutItems, setCheckoutItems] = useState([]);

  // ===========================
  // Local Storage
  // ===========================

  useEffect(() => {
    localStorage.setItem(
      "payments",
      JSON.stringify(payments)
    );
  }, [payments]);

  // ===========================
  // Checkout
  // ===========================

  const startSingleCheckout = (product) => {
    if (!product) {
      setCheckoutItems([]);
      return;
    }

    setCheckoutItems([
      {
        ...product,
        quantity: product.quantity || 1,
      },
    ]);
  };

  const startCartCheckout = (cart) => {
    // FIX: guard against cart being undefined/null so
    // checkoutItems can never be set to a non-array value.
    const items = Array.isArray(cart) ? cart : [];

    setCheckoutItems(
      items.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
      }))
    );
  };

  const clearCheckout = () => {
    setCheckoutItems([]);
  };

  // ===========================
  // Payments
  // ===========================

  const createPayment = (payment) => {
    setPayments((prev) => [payment, ...prev]);
    return payment;
  };

  const updatePayment = (invoiceId, updates) => {
    setPayments((prev) =>
      prev.map((payment) =>
        payment.invoiceId === invoiceId
          ? {
              ...payment,
              ...updates,
            }
          : payment
      )
    );
  };

  const removePayment = (invoiceId) => {
    setPayments((prev) =>
      prev.filter(
        (payment) =>
          payment.invoiceId !== invoiceId
      )
    );
  };

  const clearPayments = () => {
    setPayments([]);
  };

  const getPayment = (invoiceId) => {
    return payments.find(
      (payment) =>
        payment.invoiceId === invoiceId
    );
  };

  const verifyPayment = (
    invoiceId,
    receiptUrl = ""
  ) => {
    const payment = getPayment(invoiceId);

    if (!payment) {
      toast.error("Payment not found.");
      return false;
    }

    updatePayment(invoiceId, {
      paymentStatus: "submitted",
      receiptUrl,
      submittedAt: new Date().toISOString(),
    });

    toast.success(
      "Payment submitted successfully."
    );

    return true;
  };

  const markVerified = (
    invoiceId,
    verifiedBy = "Admin"
  ) => {
    const payment = getPayment(invoiceId);

    if (!payment) {
      toast.error("Payment not found.");
      return false;
    }

    updatePayment(invoiceId, {
      paymentStatus: "verified",
      verified: true,
      verifiedBy,
      verifiedAt: new Date().toISOString(),
    });

    toast.success("Payment verified.");

    return true;
  };

  // ===========================
  // Context Value
  // ===========================

  const value = useMemo(
    () => ({
      payments,

      checkoutItems,

      startSingleCheckout,
      startCartCheckout,
      clearCheckout,

      createPayment,
      updatePayment,
      removePayment,
      clearPayments,
      getPayment,
      verifyPayment,
      markVerified,
    }),
    [payments, checkoutItems]
  );

  return (
    <PaymentContext.Provider value={value}>
      {children}
    </PaymentContext.Provider>
  );
}

export function usePayment() {
  const context = useContext(PaymentContext);

  if (!context) {
    throw new Error(
      "usePayment must be used inside PaymentProvider"
    );
  }

  return context;
}