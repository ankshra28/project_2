import { Link } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>

        <FaExclamationTriangle className={styles.icon} />

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you are looking for doesn't exist
          or may have been moved.
        </p>

        <Link
          to="/"
          className={styles.button}
        >
          <FaHome />

          Back to Home
        </Link>

      </div>
    </section>
  );
}