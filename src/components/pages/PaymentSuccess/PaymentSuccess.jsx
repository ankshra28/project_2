import { Link, useParams } from "react-router-dom";
import { FaCheckCircle, FaHome, FaHistory } from "react-icons/fa";

import styles from "./PaymentSuccess.module.css";

const PaymentSuccess = () => {
  const { invoiceId } = useParams();

  return (
    <div className={styles.success}>

      <div className={styles.card}>

        <FaCheckCircle className={styles.icon} />

        <h1>Payment Submitted</h1>

        <p>
          Thank you. Your payment has been submitted successfully.
        </p>

        <div className={styles.invoice}>

          <span>Invoice ID</span>

          <strong>{invoiceId}</strong>

        </div>

        <p className={styles.note}>
          Your payment will be verified manually.
          Once verified, you will receive confirmation
          on your registered phone number or email.
        </p>

        <div className={styles.actions}>

          <Link
            to="/history"
            className={styles.secondary}
          >
            <FaHistory />
            Payment History
          </Link>

          <Link
            to="/"
            className={styles.primary}
          >
            <FaHome />
            Back Home
          </Link>

        </div>

      </div>

    </div>
  );
};

export default PaymentSuccess;