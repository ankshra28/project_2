// function Home(){
//   return(
//     <h1>hello</h1>
//   )
// }

// export default Home;
import styles from "./Home.module.css";

const categories = [
  {
    title: "Birthday Decoration",
    // image: "/images/birthday.jpg",
  },
  {
    title: "Wedding Decoration",
    // image: "/images/wedding.jpg",
  },
  {
    title: "Anniversary Decoration",
    // image: "/images/anniversary.jpg",
  },
  {
    title: "Baby Shower Decoration",
    // image: "/images/babyshower.jpg",
  },
];

 function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.overlay}>
          <div className={styles.heroContent}>
            <h1>Make Every Celebration Magical ✨</h1>

            <p>
              Book beautiful decorations for Birthdays, Weddings,
              Baby Showers, Anniversaries and Corporate Events.
            </p>

            <button>Book Now</button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categories}>
        <h2>Our Decoration Services</h2>

        <div className={styles.grid}>
          {categories.map((item, index) => (
            <div className={styles.card} key={index}>
              <img src={item.image} alt={item.title} />

              <div className={styles.cardBody}>
                <h3>{item.title}</h3>

                <button>Explore</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.why}>
        <h2>Why Choose Us?</h2>

        <div className={styles.features}>
          <div>
            <h3>500+</h3>
            <p>Happy Customers</p>
          </div>

          <div>
            <h3>50+</h3>
            <p>Professional Decorators</p>
          </div>

          <div>
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>

          <div>
            <h3>100%</h3>
            <p>Quality Decoration</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready to Plan Your Event?</h2>

        <p>
          Let us make your special day unforgettable with beautiful decorations.
        </p>

        <button>Book Your Event</button>
      </section>
    </>
  );
}

export default Home;