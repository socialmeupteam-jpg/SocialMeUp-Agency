import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import styles from "../ServicePage.module.css";

const ServicesCTA = () => {
   const handleStartProject = () => {
    window.open(
      "https://calendly.com/prashantsocialmeup/30min",
      "_blank",
      "noopener,noreferrer",
    );
  };
  return (
     <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.glow} />

        <div className={styles.content}>
          <h2> Ready to Grow Your Business?</h2>

          <p>
              Partner with SocialMeUp and let us help you achieve your
            business goals with smart strategies and innovative solutions.
          </p>

          <button
            type="button"
            onClick={handleStartProject}
            className={styles.button}
          >
            Get Free Consultation
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;

{/* <motion.section
      className={styles.ctaSection}
      aria-labelledby="services-cta-title"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className={styles.ctaGlow} />

      <div className={styles.ctaContent}>
        <div className={styles.ctaText}>
          <h2 id="services-cta-title">
            Ready to Grow Your Business?
          </h2>

          <p>
            Partner with SocialMeUp and let us help you achieve your
            business goals with smart strategies and innovative solutions.
          </p>
        </div>

        <motion.a
          href="/contact"
          className={styles.ctaButton}
          whileHover={{
            y: -2,
            scale: 1.01,
          }}
          whileTap={{
            scale: 0.98,
          }}
        >
          <span>Get Free Consultation</span>
          <FiArrowRight size={17} />
        </motion.a>
      </div>
    </motion.section> */}