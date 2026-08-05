import React from "react";
import styles from "./RefundPolicy.module.css";
import { FaUndoAlt } from "react-icons/fa";

const RefundPolicy = () => {
  return (
    <div className={styles.refundContainer}>

      {/* Hero Section */}
      <section className={styles.hero}>
        <FaUndoAlt className={styles.heroIcon} />

        <h1>Refund Policy</h1>

        <p>
          We value our customers and strive to provide the best decoration
          services. Please read our refund policy carefully before making
          a booking.
        </p>
      </section>

      {/* Content */}
      <section className={styles.content}>

        <div className={styles.card}>
          <h2>1. Booking Confirmation</h2>
          <p>
            A booking is confirmed only after receiving the required
            advance payment. Once confirmed, our team begins preparing
            for your event.
          </p>
        </div>

        <div className={styles.card}>
          <h2>2. Cancellation by Customer</h2>
          <p>
            Customers may cancel their booking by contacting our support
            team. Refund eligibility depends on the cancellation time
            before the scheduled event.
          </p>
        </div>

        <div className={styles.card}>
          <h2>3. Refund Eligibility</h2>
          <p>
            • Cancellation more than 48 hours before the event may be
            eligible for a partial or full refund.
          </p>

          <p>
            • Cancellation within 48 hours of the event may not be
            eligible for a refund due to preparation costs.
          </p>
        </div>

        <div className={styles.card}>
          <h2>4. Non-Refundable Charges</h2>
          <p>
            Customized decorations, special orders, travel expenses, and
            materials purchased specifically for your event are generally
            non-refundable.
          </p>
        </div>

        <div className={styles.card}>
          <h2>5. Cancellation by Balloon Decoration in Varanasi and Haldi mahendi</h2>
          <p>
            If Balloon Decoration in Varanasi and Haldi mahendi is unable to provide the booked service due to
            unforeseen circumstances, customers will receive an
            appropriate refund or the option to reschedule.
          </p>
        </div>

        <div className={styles.card}>
          <h2>6. Refund Processing Time</h2>
          <p>
            Approved refunds are usually processed within 7–10 business
            days through the original payment method.
          </p>
        </div>

        <div className={styles.card}>
          <h2>7. Force Majeure</h2>
          <p>
            Refunds may not be applicable for cancellations caused by
            natural disasters, government restrictions, strikes, or other
            events beyond our reasonable control.
          </p>
        </div>

        <div className={styles.card}>
          <h2>8. Changes to Booking</h2>
          <p>
            Customers may request changes to the booking date or
            decoration package. Approval depends on availability and may
            involve additional charges.
          </p>
        </div>

        <div className={styles.card}>
          <h2>9. Contact Us</h2>

          <p>
            If you have any questions regarding our Refund Policy,
            please contact us.
          </p>

          <p>📞 +91 abc</p>

          <p>📧 support@eventdecor.com</p>

        </div>

      </section>

    </div>
  );
};

export default RefundPolicy;