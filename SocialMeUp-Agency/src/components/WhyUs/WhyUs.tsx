import { FiCheckCircle } from "react-icons/fi";
import { motion, type Variants } from "framer-motion";

import styles from "./WhyUs.module.css";

interface Stat {
  value: string;
  label: string;
}

interface Feature {
  title: string;
  description: string;
}

const stats: Stat[] = [
  {
    value: "100+",
    label: "Projects Delivered",
  },
  {
    value: "20+",
    label: "Active Clients",
  },
  {
    value: "7+",
    label: "Years of Excellence",
  },
];

const features: Feature[] = [
  {
    title: "Proven Track Record",
    description:
      "7+ years delivering measurable results for 20+ clients across diverse industries.",
  },
  {
    title: "Expert Team",
    description:
      "20+ skilled professionals across SEO, design, development, and marketing.",
  },
  {
    title: "Custom Strategy",
    description:
      "Tailored strategies that align with your specific goals and budget.",
  },
  {
    title: "Result Oriented",
    description:
      "Data-driven campaigns with transparent reporting and ROI-focused execution.",
  },
  {
    title: "Transparent Communication",
    description:
      "Regular updates, clear reporting, and open communication throughout every project.",
  },
  {
    title: "End-to-End Solutions",
    description:
      "SEO, social media, web development, content, and advertising under one roof.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
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

function WhyUs() {
  return (
    <section
      id="why-us"
      className={styles.whyUs}
      aria-labelledby="why-us-heading"
    >
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          <motion.div
            className={styles.leftColumn}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span variants={fadeUp} className={styles.sectionLabel}>
              WHY US
            </motion.span>

            <motion.h2
              variants={fadeUp}
              id="why-us-heading"
              className={styles.heading}
            >
              We Don&apos;t Just
              <br />
              <span>Promise.</span> We Deliver.
            </motion.h2>

            <motion.div variants={staggerContainer} className={styles.stats}>
              {stats.map((stat) => (
                <motion.div
                  variants={fadeUp}
                  className={styles.statCard}
                  key={stat.label}
                >
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.rightColumn}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p variants={fadeUp} className={styles.introduction}>
              We understand how important it is to market your business online
              with innovation and uniqueness. We strive to provide the best of
              both for all our clients.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className={styles.featuresGrid}
            >
              {features.map((feature) => (
                <motion.article
                  variants={fadeUp}
                  className={styles.featureCard}
                  key={feature.title}
                >
                  <FiCheckCircle
                    className={styles.featureIcon}
                    aria-hidden="true"
                  />

                  <div className={styles.featureContent}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
