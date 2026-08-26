import styles from "./Footer.module.css";

import logo from "/Logo.png";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company */}
          <div className={styles.company}>
            <img src={logo} alt="SocialMeUp" />

            <p>
              Established in 2021, Social Me Up is a dynamic digital marketing
              agency with operations in Delhi and Lucknow. We specialize in
              providing innovative solutions across social media management,
              Meta Ads, SEO, and content marketing to help businesses grow and
              succeed online.
            </p>

            <div className={styles.socials}>
              <a
                href="https://www.facebook.com/SocialMeUp.offical"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/socialmeup_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/company/socialmeup/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.youtube.com/@SocialMeUp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4>Quick Links</h4>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/#about">About</Link>
              </li>

              <li>
                <Link to="/#services">Services</Link>
              </li>

              <li>
                <Link to="/#blog">Blog</Link>
              </li>

              <li>
                <Link to="/#portfolio">Portfolio</Link>
              </li>

              <li>
                <Link to="/#contact">Contact</Link>
              </li>

              <li>
                <Link to="/#academy">Academy</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.contact}>
            <h4>Contact</h4>

            <p>
              <b>Delhi Office:</b>
              B, Mohan Cooperative Industrial Estate, Badarpur, New Delhi 110044
            </p>

            <p>
              <b>Lucknow Office:</b>
              Aurangabad Jageer, KN-839, Bijnor Rd, near Manish Yadav Gate,
              Sarojini Nagar, Lucknow 226014
            </p>

            <p>
              <b>Contact No:</b>
              +91 8004857390, 9599064721, 9559618555, 6306085100
            </p>

            <p>
              <b>Email:</b>
              info@socialmeup.in, socialmeup.co@gmail.com
            </p>
          </div>

          {/* Map */}
          <div className={styles.map}>
            <h4>Find Us</h4>

            <iframe
              title="SocialMeUp Lucknow Office Location"
              src="https://www.google.com/maps?q=Aurangabad+Jageer%2C+KN-839%2C+Bijnor+Rd%2C+near+Manish+Yadav+Gate%2C+Sarojini+Nagar%2C+Lucknow%2C+Uttar+Pradesh+226002%2C+India&z=16&output=embed"
              width="100%"
              height="260"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className={styles.bottom}>
          <p>
            &copy; 2016 SocialMeUp - Best Digital Marketing Company | All Rights
            Reserved.
          </p>

          <div>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms</Link>

            <button
              onClick={scrollTop}
              className={styles.topButton}
              aria-label="Back to top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
