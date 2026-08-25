import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";

import type { ServicePageItem } from "../../../data/servicesPageData";

import styles from "../ServicePage.module.css";

interface ServiceShowcaseProps {
  service: ServicePageItem;
  index: number;
}

const ServiceShowcase = ({
  service,
  index,
}: ServiceShowcaseProps) => {
  const Icon = service.icon;

  const isReversed = index % 2 !== 0;

  return (
    <article
      className={`${styles.serviceCard} ${
        isReversed ? styles.serviceCardReverse : ""
      }`}
    >
      {/* IMAGE */}
      <motion.div
        className={styles.serviceImageWrapper}
        whileHover={{
          y: -3,
        }}
        transition={{
          duration: 0.25,
        }}
      >
        <img
          src={service.image}
          alt={`${service.title} - SocialMeUp`}
          className={styles.serviceImage}
          loading={index < 2 ? "eager" : "lazy"}
        />

        <div className={styles.imageShade} />

        <div
          className={`${styles.serviceIcon} ${
            service.accent === "purple"
              ? styles.iconPurple
              : styles.iconPink
          }`}
        >
          <Icon size={27} strokeWidth={1.8} />
        </div>
      </motion.div>

      {/* CONTENT */}
      <div className={styles.serviceContent}>
        <div className={styles.serviceNumber}>
          {String(service.id).padStart(2, "0")}
        </div>

        <h2 className={styles.serviceTitle}>
          {service.title}
        </h2>

        <h3
          className={`${styles.serviceSubtitle} ${
            service.accent === "purple"
              ? styles.subtitlePurple
              : styles.subtitlePink
          }`}
        >
          {service.subtitle}
        </h3>

        <p className={styles.serviceDescription}>
          {service.description}
        </p>

        <ul
          className={styles.featureList}
          aria-label={`${service.title} features`}
        >
          {service.features.map((feature) => (
            <li key={feature}>
              <span
                className={`${styles.checkCircle} ${
                  service.accent === "purple"
                    ? styles.checkPurple
                    : styles.checkPink
                }`}
              >
                <FiCheck size={11} strokeWidth={3} />
              </span>

              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <motion.a
          href={`/services/${service.title
            .toLowerCase()
            .replace(/&/g, "and")
            .replace(/\s+/g, "-")}`}
          className={`${styles.exploreButton} ${
            service.accent === "purple"
              ? styles.buttonPurple
              : styles.buttonPink
          }`}
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
        >
          <span>{service.buttonText}</span>
          <FiArrowRight size={16} />
        </motion.a>
      </div>
    </article>
  );
};

export default ServiceShowcase;