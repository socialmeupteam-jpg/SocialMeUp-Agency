import { motion } from "framer-motion";
import styles from "./PortfolioHero.module.css";

function PortfolioHero() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          OUR WORK
        </motion.div>

        <h1>
          Results That
          <span> Speak</span>
        </h1>

        <p>
          A showcase of measurable results we've delivered across websites,
          branding, video content, social media campaigns, and e-commerce
          platforms.
        </p>
      </motion.div>
    </section>
  );
}

export default PortfolioHero;
