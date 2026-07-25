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
      "Our Internet advertising services help businesses reach their target audience and increase their online visibility. We offer customized digital marketing solutions, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, and email marketing.",
    icon: <FiBarChart2 aria-hidden="true" />,
  },
  {
    number: "02",
    title: "Social Media Marketing",
    description:
      "Managing your Social presence to increase Engagement through Creative Strategies.",
    icon: <FiSmartphone aria-hidden="true" />,
  },
  {
    number: "03",
    title: "Website Development",
    description:
      "Our software development team specializes in creating high-quality web applications for businesses of all sizes. From front-end design to back-end development, we provide end-to-end web development services using the latest technologies and frameworks.",
    icon: <FiCode aria-hidden="true" />,
  },
  {
    number: "04",
    title: "SEO",
    description:
      "Improve your Search Engine Visibility through White Hat On-Page and Off-Page SEO.",
    icon: <FiGlobe aria-hidden="true" />,
  },
  {
    number: "05",
    title: "E-commerce Solutions",
    description:
      "Our e-commerce development solutions help businesses establish a strong online presence. We offer customized e-commerce services using popular platforms like Shopify, Magento and WooCommerce.",
    icon: <FiEdit3 aria-hidden="true" />,
  },
  {
    number: "06",
    title: "Lead Generation",
    description:
      "Optimize your Marketing Strategy to generate High-Converting Leads and improve your ROI.",
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
            From your first idea to your next big milestone, we bring everything
            together to help your business grow with confidence.
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
