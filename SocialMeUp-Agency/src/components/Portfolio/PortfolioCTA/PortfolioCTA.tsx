import { FiArrowRight } from "react-icons/fi";

import styles from "./PortfolioCTA.module.css";

function PortfolioCTA() {
  const handleStartProject = () => {
    window.open(
      "https://calendly.com/prashantsocialmeup/30min",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.glow} />

        <div className={styles.content}>
          <h2>Want Results Like These?</h2>

          <p>
            Let's discuss how we can help your business achieve similar growth
            through strategic digital marketing.
          </p>

          <button
            type="button"
            onClick={handleStartProject}
            className={styles.button}
          >
            Start a Project
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default PortfolioCTA;
