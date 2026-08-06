import React from "react";
import styles from "./BabyCeremony.module.css";
import { babyCeremonyData } from "../../../data/products";
import { useCart } from "../../../context/cartContext";

import {
  FaShoppingCart,
  FaStar,
  FaBaby,
  FaGift,
  FaHeart,
  FaSmile,
} from "react-icons/fa";

const BabyCeremony = () => {
  const { addToCart } = useCart();

  return (
    <div className={styles.babyCeremony}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Baby & Traditional Ceremony Decorations</h1>

          <p>
            Celebrate your little one's special milestones with beautifully
            designed decoration themes. From Baby Shower and Welcome Baby to
            Annaprashan, Namkaran and Cradle Ceremony, we create unforgettable
            memories with elegant décor.
          </p>

          {/* <button className={styles.heroBtn}>
            Book Your Celebration
          </button> */}
        </div>
      </section>

      {/* Product Section */}

      <section className={styles.productSection}>
        <div className={styles.heading}>
          <h2>Our Decoration Packages</h2>
          <p>
            Choose your favourite baby ceremony decoration package.
          </p>
        </div>

        <div className={styles.productGrid}>
          {babyCeremonyData.map((item) => (
            <div className={styles.card} key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className={styles.cardContent}>
                <h3>{item.name}</h3>

                <p>{item.description}</p>

                <div className={styles.rating}>
                  <FaStar className={styles.star} />

                  <span>{item.rating}</span>

                  <small>({item.reviews} Reviews)</small>
                </div>

                <h2>₹ {item.price}</h2>

                <button
                  onClick={() => addToCart(item)}
                  className={styles.cartBtn}
                >
                  <FaShoppingCart />
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}

      <section className={styles.gallery}>
        <h2>Our Recent Decorations</h2>

        <p>
          Elegant setups designed for Baby Shower, Welcome Baby,
          Annaprashan, Namkaran and other memorable occasions.
        </p>

        <div className={styles.galleryGrid}>
          {babyCeremonyData.slice(0, 6).map((item) => (
            <div className={styles.galleryCard} key={item.id}>
              <img src={item.image} alt={item.name} />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}

      <section className={styles.features}>
        <h2>Why Choose Balloon Decoration in Varanasi & Haldi Mehndi?</h2>

        <div className={styles.featureGrid}>
          <div className={styles.feature}>
            <FaBaby className={styles.icon} />

            <h3>Premium Baby Themes</h3>

            <p>
              Customized decorations specially designed for newborn and
              baby ceremonies.
            </p>
          </div>

          <div className={styles.feature}>
            <FaGift className={styles.icon} />

            <h3>Personalized Setups</h3>

            <p>
              Name boards, welcome signs, balloon arches and premium
              backdrops.
            </p>
          </div>

          <div className={styles.feature}>
            <FaHeart className={styles.icon} />

            <h3>Beautiful Floral Designs</h3>

            <p>
              Fresh flowers and elegant balloon combinations for every
              celebration.
            </p>
          </div>

          <div className={styles.feature}>
            <FaSmile className={styles.icon} />

            <h3>100% Customer Satisfaction</h3>

            <p>
              Professional decorators ensuring your celebration looks
              perfect from every angle.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}

      <section className={styles.services}>
        <h2>Our Baby Ceremony Services</h2>

        <div className={styles.serviceGrid}>
          <div>👶 Baby Shower Decoration</div>

          <div>🍼 Welcome Baby Decoration</div>

          <div>🌸 Annaprashan Decoration</div>

          <div>🎈 Namkaran Ceremony</div>

          <div>🧸 Cradle Ceremony</div>

          <div>🎀 Welcome Home Baby</div>

          <div>💙 Baby Boy Theme</div>

          <div>💖 Baby Girl Theme</div>
        </div>
      </section>

      {/* CTA */}

      <section className={styles.cta}>
        <h2>Create Beautiful Memories</h2>

        <p>
          Let Balloon Decoration in Varanasi & Haldi Mehndi transform your special occasion into an unforgettable
          celebration with premium decorations and creative themes.
        </p>

        <button>Book Now</button>
      </section>
    </div>
  );
};

export default BabyCeremony;