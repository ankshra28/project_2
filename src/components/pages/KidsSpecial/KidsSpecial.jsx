import React from "react";
import styles from "./KidsSpecial.module.css";
import kidsSpecialData from "./kidsSpecialData";
import { useCart } from "../../../context/CartContext";

import {
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

const KidsSpecial = () => {
  const { addToCart } = useCart();

  return (
    <div className={styles.kidsSpecial}>

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Kids Special Decorations</h1>

        <p>
          Make every child's celebration magical with our premium themed
          decoration packages. From Welcome Baby to Jungle Safari themes,
          we create unforgettable memories for your little ones.
        </p>
      </section>

      {/* Products */}
      <section className={styles.productSection}>

        <div className={styles.productGrid}>

          {kidsSpecialData.map((item) => (

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
                {/* <button */}
  {/* // onClick={() => { */}
  {/* //   console.log(item); */}
  {/* //   addToCart(item); */}
  {/* // }} */}
{/* ></button> */}

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
            🎈
            <h3>Creative Themes</h3>

            <p>
              Unique birthday and kids decoration themes customized for
              every celebration.
            </p>
          </div>

          <div className={styles.feature}>
            🧸
            <h3>Premium Decorations</h3>

            <p>
              High-quality balloons, backdrops, props and personalized
              decorations for every event.
            </p>
          </div>

          <div className={styles.feature}>
            ⭐
            <h3>Experienced Team</h3>

            <p>
              Our decoration experts ensure every setup is perfect and
              beautifully arranged.
            </p>
          </div>

          <div className={styles.feature}>
            💖
            <h3>Happy Customers</h3>

            <p>
              Trusted by hundreds of families for creating memorable
              celebrations across India.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className={styles.cta}>

        <h2>Create Magical Memories for Your Kids</h2>

        <p>
          Book your favourite Kids Special decoration package today and
          make every celebration unforgettable.
        </p>

        <button>Book Now</button>

      </section>

    </div>
  );
};

export default KidsSpecial;