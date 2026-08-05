import React from "react";
import styles from "./Terms.module.css";
import { FaFileContract } from "react-icons/fa";

const Terms = () => {
  return (
    <div className={styles.termsContainer}>
      {/* Hero */}
      <section className={styles.hero}>
        <FaFileContract className={styles.heroIcon} />
        <h1>Terms & Conditions</h1>
        <p>
          Please read these Terms & Conditions carefully before using our
          EventDecor services.
        </p>
      </section>

      {/* Content */}
      <section className={styles.content}>

        <div className={styles.card}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or booking any decoration service through EventDecor,
            you agree to comply with these Terms & Conditions.
          </p>
        </div>

        <div className={styles.card}>
          <h2>2. Booking Policy</h2>
          <p>
            All bookings are subject to availability. A booking is confirmed
            only after successful payment or advance confirmation.
          </p>
        </div>

        <div className={styles.card}>
          <h2>3. Payment Policy</h2>
          <p>
            Customers must pay the required booking amount before the event.
            Remaining payment should be completed before decoration begins.
          </p>
        </div>

        <div className={styles.card}>
          <h2>4. Cancellation & Refund</h2>
          <p>
            Cancellation requests must be made at least 24 hours before the
            scheduled event. Refunds are processed according to our Refund
            Policy.
          </p>
        </div>

        <div className={styles.card}>
          <h2>5. Customer Responsibilities</h2>
          <p>
            Customers must provide accurate event details, venue access, and
            ensure a safe environment for our decoration team.
          </p>
        </div>

        <div className={styles.card}>
          <h2>6. Decoration Timing</h2>
          <p>
            Decoration timings may vary depending on venue permissions,
            weather conditions, or unforeseen circumstances.
          </p>
        </div>

        <div className={styles.card}>
          <h2>7. Intellectual Property</h2>
          <p>
            All website content, images, logos, and designs belong to
            EventDecor and may not be copied without permission.
          </p>
        </div>

        <div className={styles.card}>
          <h2>8. Limitation of Liability</h2>
          <p>
            EventDecor is not responsible for delays or cancellations caused
            by natural disasters, government restrictions, venue issues, or
            circumstances beyond our control.
          </p>
        </div>

        <div className={styles.card}>
          <h2>9. Privacy</h2>
          <p>
            Customer information is used only for booking and service purposes.
            We never sell or misuse personal information.
          </p>
        </div>

        <div className={styles.card}>
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions regarding these Terms & Conditions,
            please contact our support team.
          </p>

          <p>
            📞 +91 9876543210
          </p>

          <p>
            📧 support@eventdecor.com
          </p>
        </div>

      </section>
    </div>
  );
};

export default Terms;