import { Link } from "react-router-dom";
import styles from "./Footer.module.sass";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <h2>Footer</h2>
      </div>
      <div className={`container ${styles.nav}`}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/about" className={styles.link}>
          About
        </Link>
        <a href="https://example.com" className={styles.link}>
          Example
        </a>
      </div>
    </footer>
  );
}
