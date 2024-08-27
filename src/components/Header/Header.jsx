import { useState } from "react";
import { Navigation } from "../Navigation/Navigation";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={`${styles.header}  | container`}>
      {/* LOGO */}
      <Link to="/home">
        <img
          className="logo"
          src="/assets/shared/desktop/logo-dark.png"
          alt="Logo of designo"
        />
      </Link>

      {/* HAMBURGER */}
      <button
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen ? true : false}
      />
      {/* NAV */}
      <Navigation isPrimaryNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
