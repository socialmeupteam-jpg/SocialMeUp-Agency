import styles from "./ContactPage.module.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactHero from "../../components/Contact/ContactHero/ContactHero";
import ContactInfo from "../../components/Contact/ContactInfo/ContactInfo";
import ContactForm from "../../components/Contact/ContactForm/ContactForm";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main className={styles.contactPage}>
        {/* Decorative Background */}
        <div className={styles.blurOne} />
        <div className={styles.blurTwo} />

        <div className={styles.container}>
          <ContactHero />

          <section className={styles.contactSection}>
            <div className={styles.leftColumn}>
              <ContactInfo />
            </div>

            <div className={styles.rightColumn}>
              <ContactForm />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
