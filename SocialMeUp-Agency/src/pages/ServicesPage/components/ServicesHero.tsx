import { motion } from "framer-motion";

import styles from "../ServicePage.module.css";

const ServicesHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGlowOne} />
      <div className={styles.heroGlowTwo} />

      <div className={styles.heroPattern} />

      <div className={styles.container}>
        <motion.div
          className={styles.heroContent}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className={styles.heroBadge}
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.45,
              delay: 0.15,
            }}
          >
            <span>Our Services</span>
          </motion.div>

          <h1 className={styles.heroTitle}>
            Plan, Promote, Progress
            <br />
            <span>With SocialMeUp</span>
          </h1>

          <p className={styles.heroDescription}>
            At SocialMeUp, our extensive digital marketing solutions are crafted
            to propel your business forward. From tailored marketing strategies
            to impactful social media management, we ensure that your online
            presence shines. Let’s partner to achieve exceptional outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
