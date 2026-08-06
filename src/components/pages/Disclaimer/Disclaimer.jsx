import React from "react";
import styles from "./Disclaimer.module.css";
import { FaExclamationTriangle } from "react-icons/fa";

const Disclaimer = () => {
  return (
    <div className={styles.disclaimerContainer}>

      {/* Hero Section */}

      <section className={styles.hero}>
        <FaExclamationTriangle className={styles.heroIcon} />

        <h1>Disclaimer</h1>

        <p>
          Please read this disclaimer carefully before using our website
          or booking any services from Balloon Decoration in Varanasi & Haldi Mehndi.
        </p>
      </section>

      {/* Content */}

      <section className={styles.content}>

        <div className={styles.card}>
          <h2>1. General Information</h2>
          <p>
            The information provided on Balloon Decoration in Varanasi & Haldi Mehndi is for general
            informational purposes only. While we strive to keep all
            information accurate and up to date, we make no guarantees
            regarding its completeness or accuracy.
          </p>
        </div>

        <div className={styles.card}>
          <h2>2. Service Availability</h2>
          <p>
            All decoration services are subject to availability,
            location coverage, weather conditions, and operational
            requirements.
          </p>
        </div>

        <div className={styles.card}>
          <h2>3. Pricing</h2>
          <p>
            Prices displayed on our website are subject to change
            without prior notice. Final pricing may vary depending on
            customization, location, and event requirements.
          </p>
        </div>

        <div className={styles.card}>
          <h2>4. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites such
            as payment gateways or social media platforms. We are not
            responsible for the content or privacy practices of those
            websites.
          </p>
        </div>

        <div className={styles.card}>
          <h2>5. Limitation of Liability</h2>
          <p>
            Balloon Decoration in Varanasi & Haldi Mehndi shall not be held responsible for any direct,
            indirect, incidental, or consequential damages arising from
            the use of our website or services.
          </p>
        </div>

        <div className={styles.card}>
          <h2>6. Event Delays</h2>
          <p>
            We are not liable for delays caused by traffic, weather,
            venue restrictions, government regulations, or any
            circumstances beyond our reasonable control.
          </p>
        </div>

        <div className={styles.card}>
          <h2>7. Intellectual Property</h2>
          <p>
            All logos, designs, photographs, graphics, and website
            content are the property of Balloon Decoration in Varanasi & Haldi Mehndi and may not be
            reproduced without written permission.
          </p>
        </div>

        <div className={styles.card}>
          <h2>8. Changes to Disclaimer</h2>
          <p>
            We reserve the right to update or modify this Disclaimer at
            any time. Any changes will be posted on this page.
          </p>
        </div>

        <div className={styles.card}>
          <h2>9. Contact Us</h2>

          <p>
            If you have any questions regarding this Disclaimer, please
            contact us.
          </p>

          <p>📞 +91 9876543210</p>

          <p>📧 support@Balloon Decoration in Varanasi & Haldi Mehndi.com</p>
        </div>

      </section>

    </div>
  );
};

export default Disclaimer;