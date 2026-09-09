import { useEffect, useState } from "react";
import { FiMenu, FiX, FiArrowLeft } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Helper to scroll smoothly to a section by element ID
  const scrollToSectionId = (target: string) => {
    const cleanId = target.replace(/^#/, "");
    const section =
      document.getElementById(cleanId) ||
      document.querySelector(`#${CSS.escape(cleanId)}`);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return true;
    }
    return false;
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((previousState) => !previousState);
  };

  // Handles navigation links
  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // Allows external links to work normally
    if (href.startsWith("http")) {
      return;
    }

    // Allows route navigation to work normally
    if (href === "/portfolio") {
      setIsMenuOpen(false);
      return;
    }

    // Handles homepage section links
    if (href.startsWith("#")) {
      event.preventDefault();

      // Scrolls directly when already on homepage
      if (location.pathname === "/") {
        scrollToSectionId(href);
        setIsMenuOpen(false);
        return;
      }

      // Navigates to homepage section from another page using React Router
      setIsMenuOpen(false);
      navigate(`/${href}`, { state: { scrollTo: href } });
    }
  };

  // Handles logo navigation
  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    // Scrolls to hero when already on homepage
    if (location.pathname === "/") {
      scrollToSectionId("hero");
      setIsMenuOpen(false);
      return;
    }

    // Navigates to homepage hero from another page using React Router
    setIsMenuOpen(false);
    navigate("/", { state: { scrollTo: "#hero" } });
  };

  // Opens consultation booking page
  const handleBookConsultation = () => {
    window.open(
      "https://calendly.com/prashantsocialmeup/30min",
      "_blank",
      "noopener,noreferrer",
    );
  };

  // Closes mobile menu after route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Handles smooth scrolling to target section when navigating from another route
  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const stateTarget = (location.state as { scrollTo?: string } | null)
      ?.scrollTo;
    const target = stateTarget || location.hash;

    if (!target) {
      return;
    }

    let attempts = 0;
    const maxAttempts = 30;
    let timerId: ReturnType<typeof setTimeout>;

    const tryScroll = () => {
      const scrolled = scrollToSectionId(target);
      if (!scrolled && attempts < maxAttempts) {
        attempts++;
        timerId = setTimeout(tryScroll, 50);
      }
    };

    // Small initial delay to let React mount the route and ScrollToTop complete
    timerId = setTimeout(tryScroll, 100);

    return () => {
      clearTimeout(timerId);
    };
  }, [location.pathname, location.hash, location.state]);

  return (
    <header className={styles.navbar}>
      {" "}
      <div className={styles.navbarContainer}>
        {/* Logo */}{" "}
        <a
          href="#hero"
          className={styles.logo}
          aria-label="SocialMeUp home"
          onClick={handleLogoClick}
        >
          {" "}
          <span className={styles.logoMark}>
            {" "}
            <img
              src="/Logo.webp"
              alt="SocialMeUp logo"
              width={1234}
              height={1275}
            />{" "}
          </span>{" "}
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
                  onClick={(event) => handleNavigation(event, link.href)}
                >
                  {link.label}
                </a>
              ))}

              {/* Consultation button */}
              <button
                type="button"
                className={styles.consultationButton}
                onClick={handleBookConsultation}
              >
                Book free Consultation
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              className={styles.menuButton}
              onClick={handleMenuToggle}
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
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
