import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioHero from "../../components/Portfolio/PortfolioHero/PortfolioHero";
import PortfolioFilters, {
  type PortfolioFilter,
} from "../../components/Portfolio/PortfolioFilters/PortfolioFilters";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PortfolioSection from "../../components/Portfolio/PortfolioSection/PortfolioSection";
import PortfolioCTA from "../../components/Portfolio/PortfolioCTA/PortfolioCTA";
import Seo from "../../components/Seo";

import {
  portfolioCategories,
  portfolioProjects,
} from "../../data/PortfolioData";

import styles from "./Portfolio.module.css";

function Portfolio() {
  const [activeFilter, setActiveFilter] =
    useState<PortfolioFilter>("All Projects");

  const visibleCategories = useMemo(() => {
    if (activeFilter === "All Projects") {
      return portfolioCategories;
    }

    return [activeFilter];
  }, [activeFilter]);

  return (
    <>
      <Seo
        title="Portfolio | SocialMeUp Digital Marketing Agency"
        description="Explore SocialMeUp's website, social media, reel, and brand identity work for businesses across India."
        path="/portfolio"
      />
      <Navbar />
      <main className={styles.page}>
        <div className={styles.backgroundGlowOne} />
        <div className={styles.backgroundGlowTwo} />

        <div className={styles.container}>
          <PortfolioHero />

          <section className={styles.controls}>
            <PortfolioFilters
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </section>

          <section className={styles.projects}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                {visibleCategories.map((category) => {
                  const projects = portfolioProjects.filter(
                    (project) => project.category === category,
                  );

                  return (
                    <PortfolioSection
                      key={category}
                      category={category}
                      projects={projects}
                    />
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </section>

          <PortfolioCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Portfolio;
