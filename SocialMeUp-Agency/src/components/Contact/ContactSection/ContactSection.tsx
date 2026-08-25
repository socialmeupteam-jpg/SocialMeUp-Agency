import styles from "./ContactSection.module.css";

import ContactHero from "../ContactHero/ContactHero";
import ContactInfo from "../ContactInfo/ContactInfo";
import ContactForm from "../ContactForm/ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      {/* Decorative Background */}
      <div className={styles.blurOne} />
      <div className={styles.blurTwo} />

      <div className={styles.container}>
        <ContactHero />

        <div className={styles.contactGrid}>
          <div className={styles.leftColumn}>
            <ContactInfo />
          </div>

          <div className={styles.rightColumn}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
