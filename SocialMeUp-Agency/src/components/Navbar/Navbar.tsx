import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import styles from "./Navbar.module.css";

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Blog", href: "#blog" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
  { label: "Academy", href: "#academy" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((previousState) => !previousState);
  };

  const handleNavigation = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <a
          href="/"
          className={styles.logo}
          aria-label="SocialMeUp home"
        >
          <span className={styles.logoMark} aria-hidden="true">
            <img src="/Logo.png" alt="SocialMeUp-logo" className="logo" />
          </span>

          <span className={styles.logoText}>
            Social<span>Me</span>Up
          </span>
        </a>

        <nav
          className={`${styles.navigation} ${
            isMenuOpen ? styles.navigationOpen : ""
          }`}
          aria-label="Main navigation"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.navigationLink}
              onClick={handleNavigation}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#consultation"
            className={styles.consultationButton}
            onClick={handleNavigation}
          >
            Free Consultation
          </a>
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          onClick={handleMenuToggle}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
