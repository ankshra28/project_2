import React from "react";
import styles from "./Birthday.module.css";
// import birthdayData from "./birthdayData";
import { birthdayData } from "../../../data/products";
import { useCart } from "../../../context/cartContext";
import {Link} from "react-router-dom";

import {
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

const Birthday = () => {

  const { addToCart } = useCart();

  return (

    <div className={styles.birthday}>

      {/* Hero Section */}

      <section className={styles.hero}>

        <h1>Birthday Decorations</h1>

        <p>
          Celebrate birthdays with beautiful balloon decorations,
          themed setups, customized backdrops, and memorable party experiences.
        </p>

      </section>

      {/* Product Cards */}

      <section className={styles.productSection}>

        <div className={styles.productGrid}>

          {birthdayData.map((item) => (

            <div
              className={styles.card}
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div className={styles.cardContent}>

                <h3>{item.name}</h3>

                <p>{item.description}</p>

                <div className={styles.rating}>

                  <FaStar />

                  <span>{item.rating}</span>

                  <small>
                    ({item.reviews} Reviews)
                  </small>

                </div>

                <h2>₹ {item.price}</h2>

                <button
                  onClick={() => addToCart(item)}
                >

                  <FaShoppingCart />

                  Add To Cart

                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Why Choose Us */}

      <section className={styles.features}>

        <h2>Why Choose Balloon Decoration in Varanasi & Haldi Mehndi?</h2>

        <div className={styles.featureGrid}>

          <div className={styles.feature}>
            🎈
            <h3>Premium Decorations</h3>
            <p>
              Beautiful birthday decoration themes
              for kids and adults.
            </p>
          </div>

          <div className={styles.feature}>
            ⏰
            <h3>On Time Setup</h3>
            <p>
              Our team reaches your location
              before the celebration starts.
            </p>
          </div>

          <div className={styles.feature}>
            💰
            <h3>Affordable Packages</h3>
            <p>
              Budget-friendly birthday decoration
              packages for everyone.
            </p>
          </div>

          <div className={styles.feature}>
            ⭐
            <h3>Trusted Service</h3>
            <p>
              Thousands of happy customers
              across India.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className={styles.cta}>

        <h2>Make Your Birthday Special 🎂</h2>

        <p>
          Book your birthday decoration today and
          create unforgettable memories.
        </p>

        <button>
          <Link to="/get-in-touch">
            Book Now
          </Link>
        </button>

      </section>

    </div>

  );

};

export default Birthday;