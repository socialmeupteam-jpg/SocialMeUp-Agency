import { FiArrowRight } from "react-icons/fi";

import styles from "./PortfolioCTA.module.css";

function PortfolioCTA() {
  const handleStartProject = () => {
    const whatsappNumber = "919238341904";

    const whatsappMessage = `
*Hello SocialMeUp! 👋*

I came across your portfolio and I'm interested in starting a project with your team.

I'd like to discuss how SocialMeUp can help my business achieve similar growth through strategic digital marketing.

Please let me know the next steps.

Thank you!
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.location.href = whatsappUrl;
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