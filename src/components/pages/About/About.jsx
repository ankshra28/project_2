import React from "react";
import styles from "./About.module.css";

// import aboutBanner from "../../assets/image/aboutBanner.png";
import aboutBanner from "../../../assets/image/aboutBanner.png";

import {
  FaUsers,
  FaAward,
  FaHeart,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

function About() {
  return (
    <div className={styles.about}>

      {/* Hero Section */}

      {/* <section className={styles.hero}>
        <div className={styles.heroContent}>

          <div className={styles.left}>
            <span className={styles.badge}>
              A Trusted Party and events  Planning
               Platform
            </span>

            <h1>
              Making your day special and beautiful<br />
              Truly Unforgettable memory
            </h1>

            <p>
              EventDecor is India's trusted decoration company offering
              Birthday Decorations, Anniversary Setups, Baby Showers,
              Weddings, Surprise Parties, Corporate Events and much more.
            </p>

            <div className={styles.buttons}>
              <button>Explore Decorations</button>
              <button className={styles.contactBtn}>
                Get In Touch
              </button>
            </div>
          </div>

          <div className={styles.right}>
            <img src={aboutBanner} alt="About EventDecor" />
          </div>

        </div>
      </section> */}

      {/* About */}

      <section className={styles.aboutSection}>

        <div className={styles.aboutImage}>
          <img src={aboutBanner} alt="" />
        </div>

        
          
        <div className={styles.aboutText}>

          <h2>About EventDecor</h2>

          <p>
            At EventDecor, we transform ordinary spaces into unforgettable
            celebrations. Our experienced decorators specialize in
            Birthday Decorations, Baby Showers, Wedding Decor,
            Anniversary Celebrations, Proposal Setups and many more.
          </p>

          <p>
            Our mission is to provide premium quality decoration
            services with creative ideas, affordable pricing,
            and professional execution.
          </p>

          

          <div className={styles.features}>

            <div>
              <FaCheckCircle />
              Premium Decoration
            </div>

            <div>
              <FaCheckCircle />
              Affordable Pricing
            </div>

            <div>
              <FaCheckCircle />
              Same Day Booking
            </div>

            <div>
              <FaCheckCircle />
              Professional Team
            </div>

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className={styles.stats}>

        <div className={styles.card}>
          <FaUsers />
          <h2>5000+</h2>
          <p>Happy Clients</p>
        </div>

        <div className={styles.card}>
          <FaCheckCircle/>
          <h2>100+</h2>
          <p>Decoration Theme</p>
        </div>

        <div className={styles.card}>
          <FaAward />
          <h2>100%</h2>
          <p>Premium Quality</p>
        </div>

        <div className={styles.card}>
          <FaHeart />
          <h2>4.9★</h2>
          <p>Customer Rating</p>
        </div>

      </section>

      {/* Why Choose Us */}

      <section className={styles.why}>

        <h2>Why Choose EventDecor?</h2>

        <div className={styles.whyGrid}>

          <div className={styles.whyCard}>
            <h3>Creative Designs</h3>
            <p>
              Unique decoration themes for every celebration.
            </p>
          </div>

          <div className={styles.whyCard}>
            <h3>Experienced Team</h3>
            <p>
              Skilled decorators with years of experience.
            </p>
          </div>

          <div className={styles.whyCard}>
            <h3>Affordable Packages</h3>
            <p>
              Beautiful decorations at budget-friendly prices.
            </p>
          </div>

          <div className={styles.whyCard}>
            <h3>Customer Satisfaction</h3>
            <p>
              Thousands of happy customers across India.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;