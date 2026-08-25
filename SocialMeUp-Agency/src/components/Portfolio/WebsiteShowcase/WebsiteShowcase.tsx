import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import styles from "./WebsiteShowcase.module.css";

interface WebsiteProject {
  title: string;
  category: string;
  image: string;
}

interface WebsiteShowcaseProps {
  projects: WebsiteProject[];
}

function WebsiteShowcase({ projects }: WebsiteShowcaseProps) {
  return (
    <section className={styles.showcase}>
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.12,
          }}
          viewport={{ once: true }}
          className={styles.browser}
        >
          <div className={styles.browserTop}>
            <span />
            <span />
            <span />
          </div>

          <img src={project.image} alt={project.title} loading="lazy" />

          <div className={styles.overlay}>
            <h3>{project.title}</h3>

            <p>{project.category}</p>

            <button>
              View Website
              <FiExternalLink />
            </button>
          </div>
        </motion.article>
      ))}
    </section>
  );
}

export default WebsiteShowcase;
