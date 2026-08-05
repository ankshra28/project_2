import React from "react";
import styles from "./Privacy.module.css";
import { FaUserShield } from "react-icons/fa";

const Privacy = () => {
  return (
    <div className={styles.privacyContainer}>

      {/* Hero Section */}

      <section className={styles.hero}>
        <FaUserShield className={styles.heroIcon} />

        <h1>Privacy Policy</h1>

        <p>
          Your privacy is important to us. This Privacy Policy explains
          how EventDecor collects, uses, and protects your personal
          information.
        </p>
      </section>

      {/* Content */}

      <section className={styles.content}>

        <div className={styles.card}>
          <h2>1. Information We Collect</h2>
          <p>
            We collect your name, phone number, email address, event
            details, delivery location, and payment information when
            you book our decoration services.
          </p>
        </div>

        <div className={styles.card}>
          <h2>2. How We Use Your Information</h2>
          <p>
            Your information is used to process bookings, provide
            decoration services, improve customer support, and send
            booking confirmations.
          </p>
        </div>

        <div className={styles.card}>
          <h2>3. Information Security</h2>
          <p>
            We use reasonable security measures to protect your
            personal information from unauthorized access,
            alteration, or disclosure.
          </p>
        </div>

        <div className={styles.card}>
          <h2>4. Cookies</h2>
          <p>
            Our website may use cookies to improve your browsing
            experience and remember your preferences.
          </p>
        </div>

        <div className={styles.card}>
          <h2>5. Third-Party Services</h2>
          <p>
            We may use trusted third-party services for payment
            processing, analytics, and communication. These providers
            have their own privacy policies.
          </p>
        </div>

        <div className={styles.card}>
          <h2>6. Sharing of Information</h2>
          <p>
            We do not sell, rent, or trade your personal information.
            Your data is shared only when necessary to complete your
            booking or comply with legal requirements.
          </p>
        </div>

        <div className={styles.card}>
          <h2>7. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of
            your personal information by contacting our support team.
          </p>
        </div>

        <div className={styles.card}>
          <h2>8. Policy Updates</h2>
          <p>
            A may update this Privacy Policy from time to
            time. Changes will be published on this page with the
            updated effective date.
          </p>
        </div>

        <div className={styles.card}>
          <h2>9. Contact Us</h2>

          <p>
            If you have any questions regarding this Privacy Policy,
            please contact us.
          </p>

          <p>📞 +91 </p>

          <p>📧 support</p>
        </div>

      </section>

    </div>
  );
};

export default Privacy;