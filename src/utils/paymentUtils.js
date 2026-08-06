const INVOICE_PREFIX = "INV";
const PAYMENT_PREFIX = "PAY";

function random(length = 8) {
  const chars =
    "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";

  let value = "";

  for (let i = 0; i < length; i++) {
    value += chars[Math.floor(Math.random() * chars.length)];
  }

  return value;
}

export function generateInvoiceId() {
  return `${INVOICE_PREFIX}-${Date.now()}-${random(5)}`;
}

export function generatePaymentId() {
  return `${PAYMENT_PREFIX}-${Date.now()}-${random(6)}`;
}

export function generateVerifyToken() {
  if (
    typeof crypto !== "undefined" &&
    crypto.randomUUID
  ) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${random(20)}`;
}

export function generateVerifyUrl(token) {
  return `${window.location.origin}/verify/${token}`;
}

export function calculateTotal(cartItems = []) {

  if (!Array.isArray(cartItems)) {
    return 0;
  }

  return cartItems.reduce(
    (total, item) =>
      total +
      (Number(item?.price) || 0) *
        (Number(item?.quantity) || 1),
    0
  );
}

export function calculateQuantity(cartItems = []) {

  if (!Array.isArray(cartItems)) {
    return 0;
  }

  return cartItems.reduce(
    (total, item) =>
      total + (Number(item?.quantity) || 1),
    0
  );
}

export function formatPrice(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);
}

export function createPayment(cartItems = []) {

  const items = Array.isArray(cartItems)
    ? cartItems
    : [];

  const total = calculateTotal(items);

  return {
    invoiceId: generateInvoiceId(),

    paymentId: generatePaymentId(),

    verifyToken: generateVerifyToken(),

    verifyUrl: generateVerifyUrl(
      generateVerifyToken()
    ),

    createdAt: new Date().toISOString(),

    items,

    subtotal: total,

    total,

    totalItems: calculateQuantity(items),

    status: "pending",

    paymentStatus: "pending",

    receiptUrl: "",

    receiptImage: "",

    verified: false,

    verifiedAt: null,

    verifiedBy: "",

    customer: {},
  };
}

export function getPaymentItemCount(payment) {
  return calculateQuantity(payment?.items || []);
}

export function getPaymentTotal(payment) {
  return calculateTotal(payment?.items || []);
}