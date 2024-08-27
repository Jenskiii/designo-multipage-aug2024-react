import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useLink } from "../../hooks/useLink";

export function Navigation({ isPrimaryNav = false, isOpen, setIsOpen }) {
  return (
    <nav
      className={`${styles.nav} | ${
        isPrimaryNav ? styles["primary-nav"] : styles["secondary-nav"]
      } ${isOpen ? styles.active : ""}`}
      role="navigation"
      aria-label="Main menu"
      onClick={() => setIsOpen(false)}>
      {/* LINKS */}
      <ul>
        <li>
          <Link {...useLink("/about")}>Our company</Link>
        </li>
        <li>
          <Link {...useLink("/locations")}>Locations</Link>
        </li>
        <li>
          <Link {...useLink("/contact")}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
