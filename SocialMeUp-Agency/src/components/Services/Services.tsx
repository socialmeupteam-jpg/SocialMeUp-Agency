import { useState } from "react";
import {
  FiArrowUpRight,
  FiBarChart2,
  FiCode,
  FiEdit3,
  FiGlobe,
  FiMonitor,
  FiSmartphone,
  FiBriefcase,
  FiMessageCircle,
  FiUsers,
  FiVideo,
  FiTarget,
  FiYoutube,
} from "react-icons/fi";

import { motion, type Variants } from "framer-motion";
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
    icon: <FiBarChart2 />,
  },

  {
    number: "02",
    title: "Website Development",
    description:
      "Our software development team specializes in creating high-quality web applications for businesses of all sizes. From front-end design to back-end development, we provide end-to-end web development services using the latest technologies and frameworks",
    icon: <FiCode />,
  },

  {
    number: "03",
    title: "SEO",
    description:
      "Improve your search engine visibility through White Hat On-Page SEO, Off-Page SEO, Technical SEO, Local SEO, Keyword Research, Content Optimization and Link Building strategies that generate sustainable organic traffic.",
    icon: <FiGlobe />,
  },

  {
    number: "04",
    title: "E-commerce Development",
    description:
      "Our e-commerce development solutions help businesses establish a strong online presence. We offer customized e-commerce services using popular platforms like Shopify, Magento and WooCommerce.",
    icon: <FiEdit3 />,
  },

  {
    number: "05",
    title: "Lead Generation",
    description:
      "Generate high-quality business leads through performance marketing, landing pages, Facebook Ads, Google Ads, LinkedIn campaigns, sales funnels and conversion optimization strategies.",
    icon: <FiMonitor />,
  },

  {
    number: "06",
    title: "Social Media Marketing",
    description:
      "Build your brand across Instagram, Facebook, LinkedIn, Twitter and YouTube through creative content, paid campaigns, audience engagement, influencer collaborations and consistent brand communication.",
    icon: <FiSmartphone />,
  },

  {
    number: "07",
    title: "Business Consultancy",
    description:
      "Strategic business consulting to help organizations improve branding, marketing strategy, business growth, digital transformation, customer acquisition and revenue generation.",
    icon: <FiBriefcase />,
  },

  {
    number: "08",
    title: "WhatsApp Chatbot",
    description:
      "Automate customer communication using AI-powered WhatsApp chatbot for lead qualification, customer support, booking appointments, order tracking and instant response management.",
    icon: <FiMessageCircle />,
  },

  {
    number: "09",
    title: "Influencer Marketing",
    description:
      "Connect your business with trusted influencer and content creators to improve brand awareness, reach new audiences and increase engagement through authentic collaborations.",
    icon: <FiUsers />,
  },

  {
    number: "10",
    title: "Video Marketing",
    description:
      "Increase your online visibility through professional promotional videos, reels, ad creatives, product showcases, corporate videos and social media video campaigns.",
    icon: <FiVideo />,
  },

  {
    number: "11",
    title: "Google Adwords",
    description:
      "Certified Google Ads management including Search Ads, Display Ads, Shopping Ads, YouTube Ads, Re-marketing campaigns and conversion tracking for maximum return on investment.",
    icon: <FiTarget />,
  },

  {
    number: "12",
    title: "YouTube Marketing",
    description:
      "Grow your YouTube channel through SEO optimization, video promotion, subscriber growth strategies, advertising campaigns, audience analysis and content planning.",
    icon: <FiYoutube />,
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function ServiceCard({ service }: { service: Service }) {
  const [expanded, setExpanded] = useState(false);

  const LIMIT = 145;

  const longText = service.description.length > LIMIT;

  const text =
    expanded || !longText
      ? service.description
      : service.description.slice(0, LIMIT) + "...";

  return (
    <motion.article variants={fadeUp} className={styles.serviceCard}>
      <div className={styles.cardTop}>
        <span className={styles.number}>{service.number}</span>

        <span className={styles.icon}>{service.icon}</span>
      </div>

      <div className={styles.cardContent}>
        <h3>{service.title}</h3>

        <p>{text}</p>

        {longText && (
          <button
            className={styles.readMore}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
        <a href="/services" className={styles.serviceLink}>
          Learn more
          <FiArrowUpRight />
        </a>
      </div>
    </motion.article>
  );
}

function Services() {
  return (
    <section
      id="services"
      className={styles.services}
      aria-labelledby="services-heading"
    >
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-80px",
          }}
        >
          <motion.div variants={fadeUp} className={styles.sectionLabel}>
            <span>What We Do</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            id="services-heading"
            className={styles.heading}
          >
            Everything you need
            <br />
            to <span>move forward.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className={styles.intro}>
            From your first idea to your next big milestone, we bring everything
            together to help your business grow with confidence.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.servicesGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-80px",
          }}
        >
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
