import {
  FiArrowUpRight,
  FiBarChart2,
  FiCode,
  FiEdit3,
  FiGlobe,
  FiMonitor,
  FiSmartphone,
} from "react-icons/fi";

import styles from "./Services.module.css";

interface Service {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    number: "01",
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that connect your brand with the right audience and drive meaningful growth.",
    icon: <FiBarChart2 aria-hidden="true" />,
  },
  {
    number: "02",
    title: "Social Media Marketing",
    description:
      "Build a powerful social presence with content and strategies that create genuine engagement.",
    icon: <FiSmartphone aria-hidden="true" />,
  },
  {
    number: "03",
    title: "Website Development",
    description:
      "High-performing, conversion-focused websites designed to turn visitors into customers.",
    icon: <FiCode aria-hidden="true" />,
  },
  {
    number: "04",
    title: "SEO",
    description:
      "Improve your visibility, reach the right audience, and grow your organic presence online.",
    icon: <FiGlobe aria-hidden="true" />,
  },
  {
    number: "05",
    title: "Content Creation",
    description:
      "Stories, visuals, and content that make your brand memorable and impossible to ignore.",
    icon: <FiEdit3 aria-hidden="true" />,
  },
  {
    number: "06",
    title: "Branding & Design",
    description:
      "Create a distinctive visual identity that makes your brand instantly recognizable.",
    icon: <FiMonitor aria-hidden="true" />,
  },
];

function Services() {
  return (
    <section
      id="services"
      className={styles.services}
      aria-labelledby="services-heading"
    >
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>
            <span className={styles.labelLine} />
            <span>What We Do</span>
          </div>

          <h2 id="services-heading" className={styles.heading}>
            Everything you need
            <br />
            to <span>move forward.</span>
          </h2>

          <p className={styles.intro}>
            From your first idea to your next big milestone, we bring
            everything together to help your business grow with confidence.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <article key={service.number} className={styles.serviceCard}>
              <div className={styles.cardTop}>
                <span className={styles.number}>{service.number}</span>

                <span className={styles.icon}>{service.icon}</span>
              </div>

              <div className={styles.cardContent}>
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a
                  href="#contact"
                  className={styles.serviceLink}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <span>Learn more</span>
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;