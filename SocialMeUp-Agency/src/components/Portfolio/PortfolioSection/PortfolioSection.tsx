import {
  FiGlobe,
  FiImage,
  FiPlayCircle,
  FiTrendingUp,
} from "react-icons/fi";

import type {
  PortfolioCategory,
  PortfolioProject,
} from "../../../data/PortfolioData";

import ProjectCard from "../ProjectCard/ProjectCard";

import styles from "./PortfolioSection.module.css";

interface PortfolioSectionProps {
  category: PortfolioCategory;
  projects: PortfolioProject[];
}

const icons: Record<
  PortfolioCategory,
  React.ReactNode
> = {
  Websites: <FiGlobe />,
  Logos: <FiImage />,
  "Reels & Videos": <FiPlayCircle />,
  "Social Media": <FiTrendingUp />,
};

function PortfolioSection({
  category,
  projects,
}: PortfolioSectionProps) {
  if (!projects.length) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <div className={styles.icon}>
          {icons[category]}
        </div>

        <h2>{category}</h2>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;

// import {
//   FiCode,
//   FiGlobe,
//   FiImage,
//   FiPlayCircle,
//   FiTrendingUp,
// } from "react-icons/fi";

// import type {
//   PortfolioCategory,
//   PortfolioProject,
// } from "../../../data/PortfolioData";

// import ProjectCard from "../ProjectCard/ProjectCard";

// import styles from "./PortfolioSection.module.css";

// interface PortfolioSectionProps {
//   category: PortfolioCategory;
//   projects: PortfolioProject[];
// }

// const icons: Record<PortfolioCategory, React.ReactNode> = {
//   Websites: <FiGlobe />,
//   Logos: <FiImage />,
//   "Reels & Videos": <FiPlayCircle />,
//   "Social Media": <FiTrendingUp />,
//   "E-commerce": <FiCode />,
// };

// function PortfolioSection({ category, projects }: PortfolioSectionProps) {
//   if (!projects.length) {
//     return null;
//   }

//   return (
//     <section className={styles.section}>
//       <div className={styles.heading}>
//         <div className={styles.icon}>{icons[category]}</div>

//         <h2>{category}</h2>
//       </div>

//       <div
//         className={`${styles.grid} ${
//           category === "E-commerce" ? styles.threeColumns : ""
//         }`}
//       >
//         {projects.map((project) => (
//           <ProjectCard key={project.id} project={project} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default PortfolioSection;
