import { motion } from "framer-motion";

import { portfolioStats } from "../../../data/PortfolioData";

import styles from "./PortfolioStats.module.css";

function PortfolioStats() {
  return (
    <div className={styles.grid}>
      {portfolioStats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className={styles.card}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
        >
          <strong>{stat.value}</strong>

          <span>{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default PortfolioStats;
