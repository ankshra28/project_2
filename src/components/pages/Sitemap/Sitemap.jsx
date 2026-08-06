import React from "react";
import { Link } from "react-router-dom";
import { FaSitemap, FaChevronRight } from "react-icons/fa";
import styles from "./Sitemap.module.css";

const Sitemap = () => {
  return (
    <div className={styles.sitemapContainer}>

      {/* Hero Section */}
      <section className={styles.hero}>
        <FaSitemap className={styles.heroIcon} />
        <h1>Website Sitemap</h1>
        <p>
          Easily navigate through all the pages available on Balloon Decoration in Varanasi & Haldi Mehndi.
        </p>
      </section>

      {/* Sitemap Links */}
      <section className={styles.content}>

        <div className={styles.card}>
          <h2>Main Pages</h2>

          <Link to="/">
            <FaChevronRight /> Home
          </Link>

          <Link to="/about">
            <FaChevronRight /> About Us
          </Link>

          <Link to="/contact">
            <FaChevronRight /> Contact Us
          </Link>

          <Link to="/career">
            <FaChevronRight /> Career
          </Link>

          <Link to="/our-google-business">
            <FaChevronRight /> Our Google Business
          </Link>
        </div>

        <div className={styles.card}>
          <h2>Decoration Services</h2>

          <Link to="/birthday">
            <FaChevronRight /> Birthday Decoration
          </Link>

          <Link to="/anniversary">
            <FaChevronRight /> Anniversary Decoration
          </Link>

          <Link to="/baby-shower">
            <FaChevronRight /> Baby Shower
          </Link>

          <Link to="/baby-welcome">
            <FaChevronRight /> Baby Welcome
          </Link>

          <Link to="/proposal">
            <FaChevronRight /> Proposal Decoration
          </Link>

          <Link to="/wedding">
            <FaChevronRight /> Wedding Decoration
          </Link>

          <Link to="/room-decoration">
            <FaChevronRight /> Room Decoration
          </Link>

          <Link to="/balloon-decoration">
            <FaChevronRight /> Balloon Decoration
          </Link>
        </div>

        <div className={styles.card}>
          <h2>Legal Pages</h2>

          <Link to="/privacy-policy">
            <FaChevronRight /> Privacy Policy
          </Link>

          <Link to="/terms">
            <FaChevronRight /> Terms & Conditions
          </Link>

          <Link to="/refund-policy">
            <FaChevronRight /> Refund Policy
          </Link>

          <Link to="/disclaimer">
            <FaChevronRight /> Disclaimer
          </Link>
        </div>

        <div className={styles.card}>
          <h2>Customer Support</h2>

          <Link to="/faq">
            <FaChevronRight /> FAQs
          </Link>

          <Link to="/booking">
            <FaChevronRight /> Book Decoration
          </Link>

          <Link to="/gallery">
            <FaChevronRight /> Gallery
          </Link>

          <Link to="/reviews">
            <FaChevronRight /> Customer Reviews
          </Link>

          <Link to="/blog">
            <FaChevronRight /> Blog
          </Link>
        </div>

      </section>

    </div>
  );
};

export default Sitemap;