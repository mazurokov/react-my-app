import {Link} from "react-router-dom";
import styles from "./Header.module.sass";
export default function Header() {
    return <header className={styles.header}>
        <div className="container">
            <h2>Header</h2>
        </div>
        <div className={`container ${styles.nav}`}>
            <Link to="/" className={styles.link}>Home</Link>
            <Link to="/about" className={styles.link}>About</Link>
            <a href="https://example.com" className={styles.link}>Example</a>
        </div>
    </header>;
}