import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
  FaPhone,
  FaGoogle,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>

        {/* Company Info */}
        <div className={styles.footerColumn}>
          <h2 className={styles.logo}>
            Balloon Decoration in Varanasi & Haldi Mehndi<span> and Haldi mehndi</span>
          </h2>

          <p className={styles.description}>
            A trusted home decoration service for birthdays,
            anniversaries, baby showers, weddings, and more.
            We provide beautiful decorations across Varanasi.
          </p>

          <div className={styles.contact}>
            <p>
              <FaPhoneAlt className={styles.icon} />
              +91 8981669666
            </p>

            <p>
              <FaEnvelope className={styles.icon} />
              abc
            </p>

            <a
              href="https://wa.me/918981669666"
              target="_blank"
              rel="noreferrer"
              className={styles.whatsapp}
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>
          </div>


        </div>

        {/* Categories */}
        <div className={styles.footerColumn}>
          <h3>Top Categories</h3>

          <Link to="/birthday">Birthday party planning</Link>

          <Link to="/anniversary">Anniversary party planning</Link>

          <Link to="/baby-shower">Baby Shower planning</Link>

          <Link to="/baby-welcome">Baby Welcome</Link>

          <Link to="/corporate">Corporate events</Link>

          <Link to="/Hen">Hen party planning</Link>

          <Link to="/religious">Religious events</Link>

          <Link to="/retirement">Retirement party planning</Link>

          <Link to="/school">School events</Link>

          <Link to="/theme">Theme party</Link>

          <Link to="/balloon">Balloon decoration at home</Link>

          <Link to="/kids">Kids birthday decorations</Link>

          <Link to="/surprise">Surprise balloon decoration</Link>


          {/* <Link to="/proposal"></Link> */}


          {/* <Link to="/candle-light">Candle Light Dinner</Link> */}
        </div>


        {/* Company */}
        <div className={styles.footerColumn}>
          <h3>Company</h3>

          <Link to="/about">About Us</Link>

          <Link to="/contact">Contact Us</Link>

          <Link to="/privacy-policy">Privacy Policy</Link>

          <Link to="/terms">Terms & Conditions</Link>

          <Link to="/refund-policy">RefundPolicy</Link>

          <Link to="/disclaimer">Disclaimer</Link>

          <Link to="/career">Career</Link>

          <Link to="/sitemap">Sitemap</Link>

          {/* <div className={styles.storeButtons}>
            <img
              src="/images/google-play.png"
              alt="Google Play"
            />

            <img
              src="/images/app-store.png"
              alt="App Store"
            />
          </div> */}
        </div>

        <div className={styles.footerColumn}>
          <h3>Serviced City</h3>

          <Link to="#">Varanasi</Link>

          <a
            href="https://maps.app.goo.gl/S11QgVRE7nTxDMQf9"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.locationBtn}
          >
            📍 Find Us on Google Maps

          </a>


          {/* Social Icons */}
          <div className={styles.socialIcons}>
            {/* <a href="#">
              <FaInstagram />
            </a> */}

            <a href="https://www.facebook.com/share/1FTKgp3pGx/?mibextid=wwXIfr">
              <FaFacebookF />
            </a>

            {/* <a href="#">
              <FaYoutube />
            </a> */}

            {/* <a href="#">
              <FaTwitter />
            </a> */}

            {/* <a href="#">
              <FaLinkedinIn />
            </a> */}

            <a href="https://wa.me/918981669666">
              <FaWhatsapp/>
            </a>
            
            <a href="https://maps.app.goo.gl/S11QgVRE7nTxDMQf9">
              <FaGoogle/>
            </a>
            <a href="tel+:918981669666">
              <FaPhone/>
            </a>
            <a href="mailto:@gmail.com">
              <FaEnvelope/>
            </a>
          </div>


        </div>

      </div>



      {/* Cities */}


      {/* Bottom Footer */}

      <div className={styles.bottomFooter}>
        <p>
          © {new Date().getFullYear()} Balloon decoation in varanasi and Haldi mehndi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;