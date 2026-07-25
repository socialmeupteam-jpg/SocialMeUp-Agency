import { FiArrowRight, FiPlay } from "react-icons/fi";

import styles from "./Hero.module.css";

function Hero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="hero-heading"
    >
      <div className={styles.overlay} />

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Digital Marketing Agency
          </p>

          <h1 id="hero-heading" className={styles.heading}>
            We Make Brands
            <br />
            <span>Impossible</span> to Ignore.
          </h1>

          <p className={styles.description}>
One of the top digital marketing agency in Lucknow you can believe on.
            <br className={styles.desktopBreak} />
            SocialMeUp has been working with some of the huge businesses
            <br className={styles.desktopBreak} />
            from Lucknow & Delhi and has delivered the businesses an impactful results.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={styles.primaryButton}>
              <span>Let&apos;s Talk</span>
              <FiArrowRight aria-hidden="true" />
            </a>

            <a href="#services" className={styles.secondaryButton}>
              <span className={styles.playIcon}>
                <FiPlay aria-hidden="true" />
              </span>
              <span>Explore Our Work</span>
            </a>
          </div>
        </div>

        <div className={styles.stats} aria-label="Company statistics">
          <div className={styles.stat}>
            <strong>500<span>+</span></strong>
            <span>Projects Delivered</span>
          </div>

          <div className={styles.statDivider} />

          <div className={styles.stat}>
            <strong>50<span>+</span></strong>
            <span>Happy Clients</span>
          </div>

          <div className={styles.statDivider} />

          <div className={styles.stat}>
            <strong>5<span>+</span></strong>
            <span>Years of Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

// import { FiArrowRight, FiPlay } from "react-icons/fi";

// import styles from "./Hero.module.css";

// function Hero() {
//   return (
//     <section
//       className={styles.hero}
//       aria-labelledby="hero-heading"
//     >
//       <div className={styles.overlay} />

//       <div className={styles.heroContainer}>
//         <div className={styles.heroContent}>
//           <div className={styles.badge}>
//             <span className={styles.badgeDot} aria-hidden="true" />
//             <span>Best Digital Marketing Agency in Lucknow</span>
//           </div>

//           <h1 id="hero-heading" className={styles.heading}>
//             Your Growth
//             <br />
//             Story Starts
//             <br />
//             <span>Here.</span>
//           </h1>

//           <p className={styles.description}>
//             A strategy that actually works. We combine creativity
//             <br className={styles.desktopBreak} />
//             with data-driven execution to deliver measurable
//             <br className={styles.desktopBreak} />
//             results for businesses across Lucknow &amp; Delhi.
//           </p>

//           <div className={styles.actions}>
//             <a href="#contact" className={styles.primaryButton}>
//               <span>Let&apos;s Build Something Remarkable</span>
//               <FiArrowRight aria-hidden="true" />
//             </a>

//             <a href="#services" className={styles.secondaryButton}>
//               <FiPlay aria-hidden="true" />
//               <span>Explore Services</span>
//             </a>
//           </div>
//         </div>

//         <div className={styles.statsCard} aria-label="Company statistics">
//           <div className={styles.stat}>
//             <strong>500<span>+</span></strong>
//             <span>Projects Delivered</span>
//           </div>

//           <div className={styles.stat}>
//             <strong>50<span>+</span></strong>
//             <span>Active Clients</span>
//           </div>

//           <div className={styles.stat}>
//             <strong>5<span>+</span></strong>
//             <span>Years of Excellence</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

