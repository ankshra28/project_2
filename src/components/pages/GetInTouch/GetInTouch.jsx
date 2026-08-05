import React from "react";
import styles from "./GetInTouch.module.css";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUpload,
} from "react-icons/fa";

const GetInTouch = () => {
  return (
    <div className={styles.getTouch}>

      {/* Hero Section */}

      <section className={styles.hero}>

        <h1>Let's Plan Your Dream Celebration 🎉</h1>

        <p>
          Fill out the form below and our decoration experts will
          contact you shortly with the best decoration ideas and pricing.
        </p>

      </section>

      {/* Form Section */}

      <section className={styles.formSection}>

        <div className={styles.formContainer}>

          <div className={styles.left}>

            <h2>Book Your Decoration</h2>

            <p>
              Whether it's a Birthday, Baby Shower, Anniversary,
              Proposal, Wedding or any special occasion, we are here
              to make it memorable.
            </p>

            <ul>

              <li>✅ Free Consultation</li>

              <li>✅ Affordable Packages</li>

              <li>✅ Customized Decorations</li>

              <li>✅ Same Day Booking Available</li>

              <li>✅ Professional Decoration Team</li>

            </ul>

          </div>

          {/* Right */}

          <div className={styles.right}>

            <form>

              <div className={styles.row}>

                <input
                  type="text"
                  placeholder="Full Name"
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                />

              </div>

              <div className={styles.row}>

                <input
                  type="email"
                  placeholder="Email Address"
                />

                <input
                  type="text"
                  placeholder="City"
                />

              </div>

              <div className={styles.row}>

                <select required>

                  <option>Select Event</option>

                  <option>Birthday Decoration</option>

                  <option>Anniversary Decoration</option>

                  <option>Baby Shower</option>

                  <option>Baby Welcome</option>

                  <option>Wedding Decoration</option>

                  <option>Proposal Decoration</option>

                  <option>Room Decoration</option>

                </select>

                <input
                  type="date"
                  required
                />

              </div>

              <div className={styles.row}>

                <input
                  type="text"
                  placeholder="Decoration Location"
                />

                <select>

                  <option>Select Budget</option>

                  <option>₹2,000 - ₹5,000</option>

                  <option>₹5,000 - ₹10,000</option>

                  <option>₹10,000 - ₹20,000</option>

                  <option>₹20,000+</option>

                </select>

              </div>

              <textarea
                rows="5"
                placeholder="Tell us about your event..."
              ></textarea>

              <label className={styles.upload}>

                <FaUpload />

                Upload Inspiration Image

                <input
                  type="file"
                  hidden
                />

              </label>

              <button>

                <FaPaperPlane />

                Send Inquiry

              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Bottom CTA */}

      <section className={styles.cta}>

        <h2>Need Immediate Assistance?</h2>

        <p>
          Call or WhatsApp us for instant booking support.
        </p>

        <a href="tel:+91 abc">
          📞 Call Now
        </a>

      </section>

    </div>
  );
};

export default GetInTouch;