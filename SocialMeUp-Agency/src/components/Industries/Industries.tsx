import {
  FiBookOpen,
  FiHeart,
  FiHome,
  FiBriefcase,
  FiShoppingBag,
  FiShoppingCart,
  FiCpu,
  FiCoffee,
} from "react-icons/fi";
import { motion, type Variants } from "framer-motion";

import styles from "./Industries.module.css";

interface Industry {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const industries: Industry[] = [
  {
    title: "Education",
    description:
      "Promoting courses, increasing enrollments, and building brand authority.",
    icon: <FiBookOpen />,
  },
  {
    title: "Healthcare",
    description:
      "Driving patient inquiries, building trust, and promoting health-related services or products.",
    icon: <FiHeart />,
  },
  {
    title: "Real Estate",
    description:
      "Generating qualified leads for property sales and enhancing brand visibility.",
    icon: <FiHome />,
  },
  {
    title: "Hospitality & Tourism",
    description:
      "Increasing bookings, promoting seasonal offers, and enhancing customer experience.",
    icon: <FiBriefcase />,
  },
  {
    title: "E-commerce & Retail",
    description:
      "Boosting online sales, increasing  website traffic, and managing product advertisements.",
    icon: <FiShoppingCart />,
  },
  {
    title: "Fashion & Lifestyle",
    description:
      "Increasing brand awareness, driving sales, and building a loyal customer base.",
    icon: <FiShoppingBag />,
  },
  {
    title: "Tech Startups & MSME Companies",
    description:
      "Increasing awareness, acquiring users, and retaining customers effectively.",
    icon: <FiCpu />,
  },
  {
    title: "Food & Beverage Industry",
    description:
      "Promoting dine-in, takeaways, home deliveries, and building community engagement.",
    icon: <FiCoffee />,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Industries() {
  return (
    <section
      id="industries"
      className={styles.industries}
      aria-labelledby="industries-heading"
    >
      <div className={styles.container}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span variants={fadeUp} className={styles.badge}>
            INDUSTRIES
          </motion.span>

          <motion.h2
            variants={fadeUp}
            id="industries-heading"
            className={styles.heading}
          >
            Sectors We
            <br />
            <span>Empower</span>
          </motion.h2>

          <motion.p variants={fadeUp} className={styles.description}>
            Result-driven branding solutions across diverse industries that we
            know inside out.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {industries.map((industry) => (
            <motion.article
              key={industry.title}
              variants={fadeUp}
              className={styles.card}
            >
              <div className={styles.icon}>{industry.icon}</div>

              <h3>{industry.title}</h3>

              <p>{industry.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Industries;
