import { FiCode, FiExternalLink } from "react-icons/fi";

import type { PortfolioProject } from "../../../data/PortfolioData";

import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: PortfolioProject;
}

function ProjectCard({ project }: ProjectCardProps) {
  const hasLink = project.link && project.link !== "#";

  const cardContent = (
    <>
      <div className={styles.visual}>
        <img
          src={project.image}
          alt={`${project.client} - ${project.title}`}
          className={styles.projectImage}
          loading="lazy"
        />

        <div className={styles.overlay} />

        <span className={styles.type}>
          <FiCode />
          {project.category}
        </span>

        {hasLink && (
          <span className={styles.external}>
            <FiExternalLink />
          </span>
        )}
      </div>

      <div className={styles.body}>
        <span className={styles.client}>{project.client}</span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className={styles.tags}>
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </>
  );

  if (hasLink) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
        aria-label={`View ${project.title}`}
      >
        {cardContent}
      </a>
    );
  }

  return <article className={styles.card}>{cardContent}</article>;
}

export default ProjectCard;
