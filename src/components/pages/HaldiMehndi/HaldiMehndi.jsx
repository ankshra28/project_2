import React from "react";
import styles from "./HaldiMehndi.module.css";
import haldiMehndiData from "./haldiMehndiData";
import { useCart } from "../../../context/CartContext";

import {
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

const HaldiMehndi = () => {

  const { addToCart } = useCart();

  return (
    <div className={styles.haldiMehndi}>

      {/* Hero Section */}

      <section className={styles.hero}>

        <h1>Haldi & Mehndi Decorations</h1>

        <p>
          Make your Haldi and Mehndi ceremonies colorful and memorable
          with our beautiful decoration packages designed for every
          wedding celebration.
        </p>

      </section>

      {/* Product Section */}

      <section className={styles.productSection}>

        <div className={styles.productGrid}>

          {haldiMehndiData.map((item) => (

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

        <h2>Why Choose EventDecor?</h2>

        <div className={styles.featureGrid}>

          <div className={styles.feature}>
            🌼
            <h3>Fresh Floral Decoration</h3>
            <p>
              Premium marigold flowers, floral backdrops,
              and elegant wedding décor.
            </p>
          </div>

          <div className={styles.feature}>
            🎊
            <h3>Customized Themes</h3>
            <p>
              Traditional, Royal, Modern and Luxury
              Haldi & Mehndi decoration themes.
            </p>
          </div>

          <div className={styles.feature}>
            💰
            <h3>Affordable Packages</h3>
            <p>
              Decoration packages available for
              every budget.
            </p>
          </div>

          <div className={styles.feature}>
            ⭐
            <h3>Trusted Service</h3>
            <p>
              Hundreds of happy wedding clients
              across India.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className={styles.cta}>

        <h2>Celebrate Your Wedding Functions Beautifully</h2>

        <p>
          Book your Haldi & Mehndi decoration today
          and create unforgettable memories.
        </p>

        <button>
          Book Now
        </button>

      </section>

    </div>
  );
};

export default HaldiMehndi;