import { FiTarget, FiTrendingUp, FiUsers } from "react-icons/fi";
import { GoLightBulb } from "react-icons/go";

import styles from "./About.module.css";

function About() {
  return (
    <section
      id="about"
      className={styles.about}
      aria-labelledby="about-heading"
    >
      <div className={styles.container}>
        <div className={styles.sectionLabel}>
          <span className={styles.labelLine} />
          <span>About Us</span>
        </div>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 id="about-heading" className={styles.heading}>
              Best Digital Marketing Agency in Lucknow– SocialMeUp
              <br />
              <span>stand out &amp; deliver.</span>
            </h2>

            <p className={styles.description}>
              In the constantly evolving world of digital marketing, where
              success relies on a combination of creativity, strategy, and
              skills, SocialMeUp unquestionably the pinnacle of perfection. As
              the best digital marketing company in Lucknow, our mission is to
              guide enterprises into unparalleled expansion and online presence.
              SocialMeUp provides exceptional Online promotion services that
              cover a broad range of needs for our clients.
            </p>

            <p className={styles.description}>
              Being exceptional in result-oriented SEO strategies, engaging
              social media campaigns, flawless web development and compelling
              content creation, we cater to all the aspects of Online visibility
              strategy with grace. As the best web development company in
              Lucknow, our skilled staff creates visually pleasing,
              easy-to-navigate, and high-performing websites. We combine
              creativity with the practicality of functionality to ensure each
              website is customized to reflect the uniqueness of the brand they
              represent.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <FiTarget aria-hidden="true" />
              <strong>Strategy</strong>
              <span>Result-oriented approaches</span>
            </div>

            <div className={styles.statCard}>
              <FiUsers aria-hidden="true" />
              <strong>Expert Team</strong>
              <span>50+ skilled professionals</span>
            </div>

            <div className={styles.statCard}>
              <GoLightBulb aria-hidden="true" />
              <strong>Innovation</strong>
              <span>Creative digital solutions</span>
            </div>

            <div className={styles.statCard}>
              <FiTrendingUp aria-hidden="true" />
              <strong>Track Record</strong>
              <span>Proven success stories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
