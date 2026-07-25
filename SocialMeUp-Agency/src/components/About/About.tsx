import { FiTarget, FiTrendingUp, FiUsers } from "react-icons/fi";

import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-heading">
      <div className={styles.container}>
        <div className={styles.sectionLabel}>
          <span className={styles.labelLine} />
          <span>About Us</span>
        </div>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 id="about-heading" className={styles.heading}>
              We build brands that
              <br />
              <span>stand out &amp; deliver.</span>
            </h2>

            <p className={styles.description}>
              At SocialMeUp, we believe every brand has a unique story waiting to be
              told. We partner with businesses across Lucknow and Delhi to craft
              digital strategies that drive real, measurable growth.
            </p>

            <p className={styles.description}>
              Our team of strategists, designers, and developers work together to
              create seamless experiences that connect brands with their audiences.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <FiTarget aria-hidden="true" />
              <strong>50+</strong>
              <span>Projects Completed</span>
            </div>

            <div className={styles.statCard}>
              <FiUsers aria-hidden="true" />
              <strong>25+</strong>
              <span>Happy Clients</span>
            </div>

            <div className={styles.statCard}>
              <FiTrendingUp aria-hidden="true" />
              <strong>95%</strong>
              <span>Client Retention</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

