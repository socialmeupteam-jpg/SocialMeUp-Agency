import { FiTarget, FiTrendingUp, FiUsers } from "react-icons/fi";
import { GoLightBulb } from "react-icons/go";
import { motion, type Variants } from "framer-motion";

import styles from "./About.module.css";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function About() {
  return (
    <section
      id="about"
      className={styles.about}
      aria-labelledby="about-heading"
    >
      <div className={styles.container}>
        <motion.div
          className={styles.sectionLabel}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <span>About Us</span>
        </motion.div>

        <motion.div
          className={styles.content}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Left Side */}
          <motion.div variants={fadeUp} className={styles.textContent}>
            <h2 id="about-heading" className={styles.heading}>
              Best Digital Marketing Agency in Lucknow – SocialMeUp
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
          </motion.div>

          {/* Right Side */}
          <motion.div variants={fadeUp} className={styles.rightContent}>
            {/* Image */}
            <div className={styles.aboutImageContainer}>
              <div className={styles.aboutImageWrapper}>
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                  alt="SocialMeUp Team"
                  className={styles.aboutImage}
                  width={800}
                  height={533}
                  loading="lazy"
                  decoding="async"
                />

                <div className={styles.aboutImageOverlay}></div>
              </div>

              {/* Floating Badge */}
              <div className={styles.aboutFloatingBadge}>
                <div className={styles.badgeContent}>
                  <div className={styles.badgeLogo}>
                    <img
                      src="/Logo-2.webp"
                      alt="SocialMeUp Logo"
                      className={styles.badgeLogoImage}
                      width={590}
                      height={589}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className={styles.badgeText}>
                    <h4>Since 2021</h4>
                    <p>Trusted by 20+ Clients</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className={styles.stats}>
              <div className={styles.statCard}>
                <FiTarget />
                <strong>Strategy</strong>
                <span>Result-oriented approaches</span>
              </div>

              <div className={styles.statCard}>
                <FiUsers />
                <strong>Expert Team</strong>
                <span>20+ Skilled Professionals</span>
              </div>

              <div className={styles.statCard}>
                <GoLightBulb />
                <strong>Innovation</strong>
                <span>Creative Digital Solutions</span>
              </div>

              <div className={styles.statCard}>
                <FiTrendingUp />
                <strong>Track Record</strong>
                <span>Proven Success Stories</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
