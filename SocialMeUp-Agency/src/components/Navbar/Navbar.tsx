import { useEffect, useState } from "react";
import { FiMenu, FiX, FiArrowLeft } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

import styles from "./Navbar.module.css";

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "#contact" },
  { label: "Academy", href: "https://socialmeupacademy.in/" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleMenuToggle = () => {
    setIsMenuOpen((previousState) => !previousState);
  };

  // Handles normal navigation links
  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // External links
    if (href.startsWith("http")) {
      return;
    }

    // Portfolio route
    if (href === "/portfolio") {
      return;
    }

    // Section links
    if (href.startsWith("#")) {
      event.preventDefault();

      // If already on homepage, scroll directly
      if (location.pathname === "/") {
        const section = document.querySelector(href);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        setIsMenuOpen(false);
        return;
      }

      // If on another page, go to homepage first
      window.location.href = `/${href}`;
    }
  };

  // Handles logo navigation to Hero section
  const handleLogoClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    // If already on homepage, smoothly scroll to Hero
    if (location.pathname === "/") {
      const heroSection = document.querySelector("#hero");

      if (heroSection) {
        heroSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // If on another page, navigate to homepage Hero
    window.location.href = "/#hero";
  };

  // Calendly should ONLY be used for the consultation button
  const handleBookConsultation = () => {
    window.open(
      "https://calendly.com/prashantsocialmeup/30min",
      "_blank",
      "noopener,noreferrer"
    );
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Logo */}
        <a
          href="#hero"
          className={styles.logo}
          aria-label="SocialMeUp home"
          onClick={handleLogoClick}
        >
          <span className={styles.logoMark} aria-hidden="true">
            <img
              src="/Logo.png"
              alt="SocialMeUp-logo"
              className="logo"
            />
          </span>
        </a>

        {isHome ? (
          <>
            {/* Navigation */}
            <nav
              id="main-navigation"
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
                  onClick={(event) =>
                    handleNavigation(event, link.href)
                  }
                >
                  {link.label}
                </a>
              ))}

              {/* Consultation Button */}
              <button
                type="button"
                className={styles.consultationButton}
                onClick={handleBookConsultation}
              >
                Book free Consultation
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className={styles.menuButton}
              onClick={handleMenuToggle}
              aria-label={
                isMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="main-navigation"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </>
        ) : (
          <Link to="/" className={styles.backHomeButton}>
            <FiArrowLeft />
            Back to Home
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;