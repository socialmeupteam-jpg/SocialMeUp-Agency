import { FiArrowRight, FiPlay } from "react-icons/fi";
import { motion, type Variants } from "framer-motion";

import styles from "./Hero.module.css";

const homepageHero = "/homepage-hero.webp";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function Hero() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${homepageHero})` }}
      aria-labelledby="hero-heading"
    >
      <div className={styles.overlay} />

      <motion.div
        className={styles.heroContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.heroContent}>
          <motion.div variants={itemVariants} className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>Best Digital Marketing Agency</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            id="hero-heading"
            className={styles.heading}
          >
            Best <span>Digital</span>
            <br />
            Marketing Agency
            <br />
            in Lucknow
          </motion.h1>

          <motion.p variants={itemVariants} className={styles.description}>
            One of the top digital marketing agency in Lucknow you can believe
            on.
            <br className={styles.desktopBreak} />
            SocialMeUp has been working with some of the huge businesses from
            <br className={styles.desktopBreak} />
            Lucknow &amp; Delhi and has delivered the businesses an impactful
            results.
          </motion.p>

          <motion.div variants={itemVariants} className={styles.actions}>
            <a href="#contact" className={styles.primaryButton}>
              <span>Let&apos;s Build Something Remarkable</span>
              <FiArrowRight aria-hidden="true" />
            </a>

            <a href="#services" className={styles.secondaryButton}>
              <FiPlay aria-hidden="true" />
              <span>Explore Services</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.aside
          variants={itemVariants}
          className={styles.statsCard}
          aria-label="Company statistics"
        >
          <div className={styles.stat}>
            <strong>
              100<span>+</span>
            </strong>
            <span>Projects Delivered</span>
          </div>

          <div className={styles.stat}>
            <strong>
              20<span>+</span>
            </strong>
            <span>Active Clients</span>
          </div>

          <div className={styles.stat}>
            <strong>
              7<span>+</span>
            </strong>
            <span>Years of Excellence</span>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
}

export default Hero;

