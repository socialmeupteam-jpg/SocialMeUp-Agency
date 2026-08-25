import {
  FiCode,
  FiGlobe,
  FiImage,
  FiPlayCircle,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

import type { PortfolioCategory } from "../../../data/PortfolioData";

import styles from "./PortfolioFilters.module.css";

export type PortfolioFilter = "All Projects" | PortfolioCategory;

interface PortfolioFiltersProps {
  activeFilter: PortfolioFilter;
  onFilterChange: (filter: PortfolioFilter) => void;
}

const filters: {
  label: PortfolioFilter;
  icon: React.ReactNode;
}[] = [
  {
    label: "All Projects",
    icon: <FiZap />,
  },
  {
    label: "Websites",
    icon: <FiGlobe />,
  },
  {
    label: "Logos",
    icon: <FiImage />,
  },
  {
    label: "Reels & Videos",
    icon: <FiPlayCircle />,
  },
  {
    label: "Social Media",
    icon: <FiTrendingUp />,
  },
  {
    label: "E-commerce",
    icon: <FiCode />,
  },
];

function PortfolioFilters({
  activeFilter,
  onFilterChange,
}: PortfolioFiltersProps) {
  return (
    <div className={styles.filters}>
      {filters.map((filter) => (
        <button
          key={filter.label}
          type="button"
          onClick={() => onFilterChange(filter.label)}
          className={`${styles.button} ${
            activeFilter === filter.label ? styles.active : ""
          }`}
        >
          <span>{filter.icon}</span>
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default PortfolioFilters;
