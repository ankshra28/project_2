import React, { useRef, useState } from "react";
import styles from "./GetInTouch.module.css";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import {
  FaPaperPlane,
  FaUpload,
} from "react-icons/fa";

const INITIAL_FORM = {
  full_name: "",
  phone: "",
  email: "",
  city: "",
  event_type: "",
  event_date: "",
  location: "",
  budget: "",
  message: "",
};

function GetInTouch() {

  const formRef = useRef(null);

  const [formData, setFormData] = useState(INITIAL_FORM);

  const [loading, setLoading] = useState(false);

  const [selectedFile, setSelectedFile] = useState("");

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {

    const file = e.target.files[0];

    if (!file) {

      setSelectedFile("");

      return;

    }

    const allowedTypes = [

      "image/jpeg",

      "image/jpg",

      "image/png",

      "image/webp",

    ];

    if (!allowedTypes.includes(file.type)) {

      toast.error(
        "Only JPG, JPEG, PNG and WEBP images are allowed."
      );

      e.target.value = "";

      return;

    }

    if (file.size > 5 * 1024 * 1024) {

      toast.error(
        "Image size must be less than 5 MB."
      );

      e.target.value = "";

      return;

    }

    setSelectedFile(file.name);

  };

    const validateForm = () => {

    if (formData.full_name.trim().length < 3) {

      toast.error("Please enter your full name.");

      return false;

    }

    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(formData.phone)) {

      toast.error("Please enter a valid 10 digit phone number.");

      return false;

    }

    if (
      formData.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {

      toast.error("Please enter a valid email address.");

      return false;

    }

    if (!formData.event_type) {

      toast.error("Please select an event.");

      return false;

    }

    if (!formData.event_date) {

      toast.error("Please select an event date.");

      return false;

    }

    if (formData.message.trim().length < 10) {

      toast.error(
        "Please enter at least 10 characters in the message."
      );

      return false;

    }

    return true;

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    // Honeypot
    if (e.target.website.value.trim() !== "") {

      return;

    }

    if (loading) return;

    if (!validateForm()) return;

    const lastSubmit =
      Number(localStorage.getItem("booking-last-submit")) || 0;

    const now = Date.now();

    if (now - lastSubmit < 60000) {

      toast.warning(
        "Please wait 60 seconds before sending another booking inquiry."
      );

      return;

    }

    setLoading(true);

    const currentDate = new Date();

    formRef.current.form_type.value = "Booking Inquiry";

    formRef.current.submitted_date.value =
      currentDate.toLocaleDateString();

    formRef.current.submitted_time.value =
      currentDate.toLocaleTimeString();

    formRef.current.details.value = `
🎉 EVENT DETAILS

Event Type:
${formData.event_type}

Preferred Event Date:
${formData.event_date}

City:
${formData.city || "Not Mentioned"}

Decoration Location:
${formData.location || "Not Mentioned"}

Budget:
${formData.budget || "Not Mentioned"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 MESSAGE

${formData.message}
`;

    formRef.current.attachment_note.value =
      selectedFile
        ? "An inspiration image has been attached with this booking."
        : "";

    try {

      await emailjs.sendForm(

        import.meta.env.VITE_EMAILJS_SERVICE_ID,

        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

        formRef.current,

        import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      );

      localStorage.setItem(
        "booking-last-submit",
        now.toString()
      );

      toast.success(
        "Booking inquiry sent successfully."
      );

      setFormData(INITIAL_FORM);

      setSelectedFile("");

      formRef.current.reset();

    } catch (error) {

      console.error(error);

      toast.error(
        "Unable to send booking inquiry. Please try again."
      );

    } finally {

      setLoading(false);

    }

  };
    return (

    <div className={styles.getTouch}>

      {/* Hero Section */}

      <section className={styles.hero}>

        <h1>
          Let's Plan Your Dream Celebration 🎉
        </h1>

        <p>
          Fill out the form below and our decoration experts
          will contact you shortly with the best decoration
          ideas and pricing.
        </p>

      </section>

      {/* Form Section */}

      <section className={styles.formSection}>

        <div className={styles.formContainer}>

          {/* Left Side */}

          <div className={styles.left}>

            <h2>
              Book Your Decoration
            </h2>

            <p>
              Whether it's a Birthday, Baby Shower,
              Anniversary, Proposal, Wedding or any
              special occasion, we are here to make
              it memorable.
            </p>

            <ul>

              <li>✅ Free Consultation</li>

              <li>✅ Affordable Packages</li>

              <li>✅ Customized Decorations</li>

              <li>✅ Same Day Booking Available</li>

              <li>✅ Professional Decoration Team</li>

            </ul>

          </div>

          {/* Right Side */}

          <div className={styles.right}>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
            >

              {/* Hidden EmailJS Fields */}

              <input
                type="hidden"
                name="form_type"
              />

              <input
                type="hidden"
                name="submitted_date"
              />

              <input
                type="hidden"
                name="submitted_time"
              />

              <input
                type="hidden"
                name="details"
              />

              <input
                type="hidden"
                name="attachment_note"
              />

              {/* Honeypot */}

              <input
                type="text"
                name="website"
                autoComplete="off"
                tabIndex="-1"
                className={styles.honeypot}
              />

              <div className={styles.row}>

                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  required
                />

              </div>

              <div className={styles.row}>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />

              </div>

              <div className={styles.row}>

                <select
                  name="event_type"
                  value={formData.event_type}
                  onChange={handleChange}
                  required
                >

                  <option value="" disabled>
                    Select Event
                  </option>

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

                <input
                  type="date"
                  name="event_date"
                  value={formData.event_date}
                  onChange={handleChange}
                  required
                />

              </div>
                            <div className={styles.row}>

                <input
                  type="text"
                  name="location"
                  placeholder="Decoration Location"
                  value={formData.location}
                  onChange={handleChange}
                />

                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >

                  <option value="">
                    Select Budget
                  </option>

                  <option value="₹2,000 - ₹5,000">
                    ₹2,000 - ₹5,000
                  </option>

                  <option value="₹5,000 - ₹10,000">
                    ₹5,000 - ₹10,000
                  </option>

                  <option value="₹10,000 - ₹20,000">
                    ₹10,000 - ₹20,000
                  </option>

                  <option value="₹20,000+">
                    ₹20,000+
                  </option>

                </select>

              </div>

              <textarea
                rows="5"
                name="message"
                placeholder="Tell us about your event..."
                value={formData.message}
                onChange={handleChange}
                required
              />

              <label className={styles.upload}>

                <FaUpload />

                <span>

                  {selectedFile
                    ? selectedFile
                    : "Upload Inspiration Image"}

                </span>

                <input
                  type="file"
                  name="inspiration_image"
                  accept=".jpg,.jpeg,.png,.webp,image/*"
                  hidden
                  onChange={handleFileChange}
                />

              </label>

              <button
                type="submit"
                disabled={loading}
              >

                <FaPaperPlane />

                <span>

                  {loading
                    ? "Sending..."
                    : "Send Inquiry"}

                </span>

              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Bottom CTA */}

      <section className={styles.cta}>

        <h2>
          Need Immediate Assistance?
        </h2>

        <p>
          Call or WhatsApp us for instant booking support.
        </p>

        <a href="tel:+91XXXXXXXXXX">

          📞 Call Now

        </a>

      </section>

    </div>

  );

}

export default GetInTouch;

