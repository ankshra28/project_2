import React from "react";
import styles from "./BabyShower.module.css";
import { babyShowerData } from "../../../data/products";
import { useCart } from "../../../context/CartContext";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const BabyShower = () => {
  const { addToCart } = useCart();

  return (
    <div className={styles.babyShower}>

      {/* Hero */}
      <section className={styles.hero}>
        <h1>Baby Shower Decorations</h1>

        <p>
          Celebrate the arrival of your little bundle of joy with beautiful
          baby shower decorations. We create dreamy themes, elegant balloon
          setups and memorable backdrops for your special day.
        </p>
      </section>

      {/* Products */}
      <section className={styles.productSection}>

        <div className={styles.productGrid}>

          {babyShowerData.map((item) => (

            <div className={styles.card} key={item.id}>

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
                  <small>({item.reviews} Reviews)</small>
                </div>

                <h2>₹ {item.price}</h2>

                <button onClick={() => addToCart(item)}>
                  <FaShoppingCart />
                  Add To Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Features */}
      <section className={styles.features}>

        <h2>Why Choose Us?</h2>

        <div className={styles.featureGrid}>

          <div className={styles.feature}>
            👶
            <h3>Unique Themes</h3>
            <p>
              Beautiful baby boy, baby girl and gender reveal decorations.
            </p>
          </div>

          <div className={styles.feature}>
            🎈
            <h3>Premium Balloons</h3>
            <p>
              High-quality balloon arches, pastel themes and customized décor.
            </p>
          </div>

          <div className={styles.feature}>
            📸
            <h3>Photo Friendly</h3>
            <p>
              Stunning backdrops designed to create unforgettable memories.
            </p>
          </div>

          <div className={styles.feature}>
            ⭐
            <h3>Professional Team</h3>
            <p>
              Experienced decorators ensuring every celebration looks perfect.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className={styles.cta}>

        <h2>Let's Make Your Baby Shower Special</h2>

        <p>
          Book your favourite decoration package today and celebrate the
          happiest beginning with style.
        </p>

        <button>Book Now</button>

      </section>

    </div>
  );
};

export default BabyShower;