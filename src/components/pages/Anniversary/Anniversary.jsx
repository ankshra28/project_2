import React from "react";
import styles from "./Anniversary.module.css";
import { anniversaryData } from "../../../data/products";
import { useCart } from "../../../context/cartContext";

import {
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

const Anniversary = () => {
  const { addToCart } = useCart();

  return (
    <div className={styles.anniversary}>
      {/* Hero Section */}

      <section className={styles.hero}>
        <h1>Anniversary Decorations</h1>

        <p>
          Celebrate your special day with beautiful and romantic
          anniversary decoration packages.
        </p>
      </section>

      {/* Products */}

      <section className={styles.productGrid}>
        {anniversaryData.map((item) => (
          <div
            className={styles.card}
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.name}
            />

            <div className={styles.content}>
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
      </section>

      {/* Bottom CTA */}

      <section className={styles.cta}>
        <h2>Make Your Anniversary Memorable ❤️</h2>

        <p>
          Book your decoration today and surprise your loved one
          with a beautiful celebration.
        </p>

        <button>Book Now</button>
      </section>
    </div>
  );
};

export default Anniversary;