import { useEffect, useState } from "react";
import styles from "./HeroSlider.module.css";

const slides = [
  {
    image: "/images/hero1.jpg",
    title: "Premium Balloon Decorations",
    subtitle: "Birthday • Anniversary • Baby Shower",
    description:
      "Create unforgettable memories with beautiful event decorations in Varanasi.",
  },
  {
    image: "/images/hero2.jpg",
    title: "Haldi & Mehndi Decorations",
    subtitle: "Elegant Traditional Setups",
    description:
      "Creative floral themes and premium balloon decorations for every celebration.",
  },
  {
    image: "/images/hero3.jpg",
    title: "Surprise Your Loved Ones",
    subtitle: "Beautiful Home Decorations",
    description:
      "Same-day decoration service with professional decorators.",
  },
  {
    image: "/images/hero4.jpg",
    title: "Celebrate Every Occasion",
    subtitle: "Affordable Premium Packages",
    description:
      "From birthdays to weddings, we make every event memorable.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [pause]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className={styles.hero}
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            current === index ? styles.active : ""
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)), url(${slide.image})`,
          }}
        >
          <div className={styles.content}>
            <span>{slide.subtitle}</span>

            <h1>{slide.title}</h1>

            <p>{slide.description}</p>

            <div className={styles.buttons}>
              <a href="tel:+919999999999">Call Now</a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className={styles.secondary}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      ))}

      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={prevSlide}
      >
        ❮
      </button>

      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={nextSlide}
      >
        ❯
      </button>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={current === index ? styles.dotActive : ""}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}