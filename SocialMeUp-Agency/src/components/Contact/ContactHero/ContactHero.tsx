import { motion } from "framer-motion";
import styles from "./ContactHero.module.css";

const ContactHero = () => {
  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.span
        className={styles.badge}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        GET IN TOUCH
      </motion.span>

      <h1 className={styles.title}>
        Let's Start Something <span className={styles.gradient}>Great</span>
      </h1>

      <p className={styles.description}>
        We will love to hear from you and assist your branding needs. We, at
        SocialMeUp believe in growing with our clients. Your growth, is our
        priority.
      </p>

    </motion.section>
  );
};

export default ContactHero;
