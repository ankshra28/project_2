


import React, { useState } from "react";
import styles from "./Contact.module.css";

import emailjs from "@emailjs/browser";

import { toast } from "react-toastify";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  eventType: "",
  eventDate: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (formData.fullName.trim().length < 3) {
      toast.error("Please enter your full name.");
      return false;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid 10 digit phone number.");
      return false;
    }

    if (formData.message.trim().length < 10) {
      toast.error("Message should contain at least 10 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (e.target.website.value.trim() !== "") {
      return;
    }

    if (loading) return;

    if (!validateForm()) return;

    const lastSubmit =
      Number(localStorage.getItem("contact-last-submit")) || 0;

    const now = Date.now();

    if (now - lastSubmit < 60000) {
      toast.warning(
        "Please wait 60 seconds before sending another inquiry."
      );
      return;
    }

    setLoading(true);

    const currentDate = new Date();

  const templateParams = {
    form_type: "Contact Inquiry",

    full_name: formData.fullName,

    email: formData.email,

    phone: formData.phone,

    details: `🎉 EVENT DETAILS

  Event Type:
  ${formData.eventType}

  Preferred Event Date:
  ${formData.eventDate || "Not Mentioned"}

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  💬 MESSAGE

  ${formData.message}`,

    submitted_date: currentDate.toLocaleDateString(),

    submitted_time: currentDate.toLocaleTimeString(),

    attachment_note: "",
  };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      localStorage.setItem(
        "contact-last-submit",
        now.toString()
      );

      toast.success(
        "Message sent successfully. We'll contact you shortly."
      );

      setFormData(INITIAL_FORM);
    } catch (error) {
      console.error(error);

      toast.error(
        "Unable to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.contact}>

      {/* ================= HERO ================= */}

      <section className={styles.hero}>
        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you. Contact our team for bookings,
          inquiries, or any assistance.
        </p>
      </section>

      {/* ================= CONTACT ================= */}

      <section className={styles.contactContainer}>

        {/* LEFT */}

        <div className={styles.contactInfo}>

          <h2>Get In Touch</h2>

          <div className={styles.infoBox}>
            <div className={styles.iconWrapper}>
              <FaPhoneAlt className={styles.icon} />
            </div>

            <div>
              <h4>Phone</h4>

              <p>+91 9876543210</p>
            </div>
          </div>

          <div className={styles.infoBox}>
            <div className={styles.iconWrapper}>
              <FaEnvelope className={styles.icon} />
            </div>

            <div>
              <h4>Email</h4>

              <p>support@Balloon Decoration in Varanasi & Haldi Mehndi.com</p>
            </div>
          </div>

          <div className={styles.infoBox}>
            <div className={styles.iconWrapper}>
              <FaWhatsapp className={styles.icon} />
            </div>
            <div>
              <h4>WhatsApp</h4>

              <p>+91 08115397264</p>
            </div>
          </div>

          <div className={styles.infoBox}>
            <div className={styles.iconWrapper}>
              <FaMapMarkerAlt className={styles.icon} />
            </div>
            <div>
              <h4>Address</h4>

              <p>Varanasi, India</p>
            </div>
          </div>

          <div className={styles.infoBox}>
            <div className={styles.iconWrapper}>
              <FaClock className={styles.icon} />
            </div>
            <div>
              <h4>Working Hours</h4>

              <p>24 Hours</p>
            </div>
          </div>

        </div>

        {/* RIGHT */}

        <div className={styles.contactForm}>

          <h2>Contact for Booking or Inquiry</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              autoComplete="name"
              maxLength={60}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              inputMode="numeric"
              maxLength={10}
              required
            />

            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
            >
              <option value="" disabled >Select Event</option>

              <option value="Birthday Decoration">
                Birthday Decoration
              </option>

              <option value="Anniversary Decoration">
                Anniversary Decoration
              </option>

              <option value="Baby Shower">
                Baby Shower
              </option>

              <option value="Baby Welcome">
                Baby Welcome
              </option>

              <option value="Wedding Decoration">
                Wedding Decoration
              </option>

              <option value="Proposal Decoration">
                Proposal Decoration
              </option>

              <option value="Room Decoration">
                Room Decoration
              </option>
            </select>

            {/* NEW OPTIONAL FIELD */}

            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Write Your Message..."
              value={formData.message}
              onChange={handleChange}
              maxLength={1000}
              required
            />

            {/* Honeypot field */}

            <input
              type="text"
              name="website"
              autoComplete="off"
              tabIndex="-1"
              className={styles.honeypot}
            />

            <button
              type="submit"
              disabled={loading}
              className={loading ? styles.loadingBtn : ""}
            >
              {loading
                ? "Sending..."
                : "Send Message"}
            </button>

          </form>

        </div>

      </section>

      {/* ================= MAP ================= */}

      <section className={styles.mapSection}>

        <h2>Find Us</h2>

        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.9059902050426!2d82.9773126!3d25.273747699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e336f88bbfc17%3A0xf47bb4b25a390ee8!2sBalloon%20Decoration%20in%20Varanasi%20and%20Haldi%20mahendi!5e0!3m2!1sen!2sin!4v1786026440799!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.9059902050426!2d82.9773126!3d25.273747699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e336f88bbfc17%3A0xf47bb4b25a390ee8!2sBalloon%20Decoration%20in%20Varanasi%20and%20Haldi%20mahendi!5e0!3m2!1sen!2sin!4v1786026440799!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin">
        </iframe> */}

      </section>

    </div>
  );
};

export default Contact;