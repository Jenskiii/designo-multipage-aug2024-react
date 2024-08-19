import { useState } from "react";
import { Navigation } from "../Navigation/Navigation";
import styles from "./Header.module.css";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={`${styles.header} | container`}>
      {/* LOGO */}
      <img src="/assets/shared/desktop/logo-dark.png" alt="Logo of designo" />

      {/* HAMBURGER */}
      <button
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen ? true : false}
      />
      {/* NAV */}
      <Navigation isPrimaryNav isOpen={isOpen}/>
    </header>
  );
}
