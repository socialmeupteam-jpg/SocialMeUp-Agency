import { useState } from "react";
import { motion } from "framer-motion";

import ServicesHero from "./components/ServicesHero";
import ServiceShowcase from "./components/ServiceShowcase";
import ServicesCTA from "./components/ServicesCTA";

import { servicesPageData } from "../../data/servicesPageData";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import styles from "./ServicePage.module.css";

const INITIAL_VISIBLE_SERVICES = 4;

const ServicesPage = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll
    ? servicesPageData
    : servicesPageData.slice(0, INITIAL_VISIBLE_SERVICES);

  return (
    <>
    <Navbar />
    <main className={styles.page}>
          <div className={styles.backgroundGlowOne} />
        <div className={styles.backgroundGlowTwo} />

        <div className={styles.container}>
      <ServicesHero />

      <section
        className={styles.servicesSection}
        aria-labelledby="services-list-title"
      >
        <div className={styles.container}>
          <h2 id="services-list-title" className={styles.visuallyHidden}>
            Our Digital Marketing and IT Services
          </h2>

          <div className={styles.servicesList}>
            {visibleServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ServiceShowcase
                  service={service}
                  index={index}
                />
              </motion.div>
            ))}
          </div>

          {servicesPageData.length > INITIAL_VISIBLE_SERVICES && (
            <motion.div
              className={styles.readMoreWrapper}
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <button
                type="button"
                className={styles.readMoreButton}
                onClick={() => setShowAll((previous) => !previous)}
                aria-expanded={showAll}
              >
                <span>
                  {showAll ? "Show Less Services" : "Read More Services"}
                </span>

                <span
                  className={`${styles.readMoreIcon} ${
                    showAll ? styles.rotated : ""
                  }`}
                >
                  ↓
                </span>
              </button>
            </motion.div>
          )}
<ServicesCTA/>

        </div>
      </section>
      </div>
    </main>
    <Footer />
    </>
  );
};

export default ServicesPage;