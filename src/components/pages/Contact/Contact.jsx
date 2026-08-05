import React from "react";
import styles from "./Contact.module.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.contact}>

      {/* Hero Section */}

      <section className={styles.hero}>
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Contact our team for bookings,
          inquiries, or any assistance.
        </p>
      </section>

      {/* Contact Section */}

      <section className={styles.contactContainer}>

        {/* Left Side */}

        <div className={styles.contactInfo}>

          <h2>Get In Touch</h2>

          <div className={styles.infoBox}>
            <FaPhoneAlt className={styles.icon} />
            <div>
              <h4>Phone</h4>
              <p>+91 9876543210</p>
            </div>
          </div>

          <div className={styles.infoBox}>
            <FaEnvelope className={styles.icon} />
            <div>
              <h4>Email</h4>
              <p>support@eventdecor.com</p>
            </div>
          </div>

          <div className={styles.infoBox}>
            <FaWhatsapp className={styles.icon} />
            <div>
              <h4>Contact</h4>
              <p>+91 08115397264</p>
            </div>
          </div>

          <div className={styles.infoBox}>
            <FaMapMarkerAlt className={styles.icon} />
            <div>
              <h4>Address</h4>
              <p>Varanasi, India</p>
            </div>
          </div>

          <div className={styles.infoBox}>
            <FaClock className={styles.icon} />
            <div>
              <h4>Working Hours</h4>
              <p>24 hours</p>
            </div>
          </div>

        </div>

        {/* Right Side */}

        <div className={styles.contactForm}>

          <h2>Send Message</h2>

          <form>

            <input
              type="text"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
            />

            <input
              type="text"
              placeholder="Event Type"
            />

            <textarea
              rows="6"
              placeholder="Write Your Message..."
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

      {/* Google Map */}

      <section className={styles.mapSection}>

        <h2>Find Us</h2>

        <iframe
          title="Google Map"
          src="link"
          loading="lazy"
          allowFullScreen
        ></iframe>

      </section>

    </div>
  );
};

export default Contact;