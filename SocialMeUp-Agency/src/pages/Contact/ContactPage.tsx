import styles from "./ContactPage.module.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactHero from "../../components/Contact/ContactHero/ContactHero";
import ContactInfo from "../../components/Contact/ContactInfo/ContactInfo";
import ContactForm from "../../components/Contact/ContactForm/ContactForm";
import Seo from "../../components/Seo";

const ContactPage = () => {
  return (
    <>
      <Seo
        title="Contact SocialMeUp | Digital Marketing Agency"
        description="Contact SocialMeUp for SEO, social media, performance marketing, branding, and content marketing services in Lucknow, Delhi, and across India."
        path="/contact"
      />
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
