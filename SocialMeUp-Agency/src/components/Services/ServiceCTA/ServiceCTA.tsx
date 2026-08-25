import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import styles from "./ServiceCTA.module.css";

const ServiceCTA = () => {
  return (
    <section
      className={styles.ctaSection}
      aria-labelledby="services-cta-heading"
    >
      <div className={styles.container}>
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <div className={styles.content}>
            <span className={styles.kicker}>
              SocialMeUp
            </span>

            <h2 id="services-cta-heading">
              Ready to Grow Your Business?
            </h2>

            <p>
              Partner with SocialMeUp and let us help you achieve your
              business goals with smart strategies and innovative solutions.
            </p>
          </div>

          <a
            href="/contact"
            className={styles.button}
            aria-label="Get free consultation from SocialMeUp"
          >
            Get Free Consultation
            <FiArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;