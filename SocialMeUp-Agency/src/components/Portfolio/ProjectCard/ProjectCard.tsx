import {
  FiCode,
  FiExternalLink,
} from "react-icons/fi";

import type {
  PortfolioProject,
} from "../../../data/PortfolioData";

import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: PortfolioProject;
}

function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div
        className={styles.visual}
        style={{
          background: project.gradient,
        }}
      >
        <div className={styles.gridPattern} />

        <span className={styles.type}>
          <FiCode />

          {project.category}
        </span>

        <button
          type="button"
          className={styles.external}
          aria-label={`Open ${project.title}`}
        >
          <FiExternalLink />
        </button>

        <div className={styles.abstractShape}>
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className={styles.body}>
        <span className={styles.client}>
          {project.client}
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <ul className={styles.stats}>
          {project.stats.map((stat) => (
            <li key={stat}>
              {stat}
            </li>
          ))}
        </ul>

        <div className={styles.tags}>
          {project.technologies.map(
            (technology) => (
              <span key={technology}>
                {technology}
              </span>
            )
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;