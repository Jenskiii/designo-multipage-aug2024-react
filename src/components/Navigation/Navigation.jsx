import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export function Navigation({ isPrimaryNav = false, isOpen }) {
  return (
    <nav
      className={`${styles.nav} | ${
        isPrimaryNav ? styles["primary-nav"] : styles["secondary-nav"]
      } ${isOpen ? styles.active : ""}`}
      role="navigation"
      aria-label="Main menu">
      {/* LINKS */}
      <ul>
        <li>
          <Link>Our company</Link>
        </li>
        <li>
          <Link>Locations</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
