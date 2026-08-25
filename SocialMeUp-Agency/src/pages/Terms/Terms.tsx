import { motion } from "framer-motion";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import styles from "./Terms.module.css";

function Terms() {
  return (
    <main className={styles.page}>
      <Navbar />
      <div className={styles.backgroundGlowOne} />
      <div className={styles.backgroundGlowTwo} />
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className={styles.badge}>LEGAL</span>

            <h1>Terms &amp; Conditions</h1>

            <p className={styles.updated}>Last Updated: 26 August 2026</p>
          </motion.div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the SocialMeUp website and services, you
              agree to be bound by these Terms &amp; Conditions. If you do not
              agree with any part of these terms, please do not use our website
              or services.
            </p>

            <h2>2. Services</h2>
            <p>
              SocialMeUp provides digital marketing services including SEO,
              social media marketing, website development, advertising, content
              marketing, and related services. The specific scope, deliverables,
              and timelines for any project will be outlined in a separate
              agreement or proposal.
            </p>

            <h2>3. Use of Website</h2>
            <p>
              You agree to use our website for lawful purposes only and in a way
              that does not infringe the rights of, restrict, or inhibit
              anyone&apos;s use and enjoyment of the website. You must not
              misuse our website by knowingly introducing viruses or other
              malicious content.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos,
              images, and software, is the property of SocialMeUp or its content
              suppliers and is protected by intellectual property laws. You may
              not reproduce, distribute, or use any content without prior
              written permission.
            </p>

            <h2>5. Payments and Billing</h2>
            <p>
              Payment terms for services are defined in individual agreements.
              Unless otherwise specified, all payments are due as per the agreed
              schedule and are non-refundable once work has commenced.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              SocialMeUp shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of
              profits or revenues, whether incurred directly or indirectly, or
              any loss of data, use, goodwill, or other intangible losses
              resulting from the use of our services.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These Terms &amp; Conditions shall be governed by and construed in
              accordance with the laws of India. Any disputes arising under
              these terms shall be subject to the exclusive jurisdiction of the
              courts of Lucknow, Uttar Pradesh.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about these Terms &amp; Conditions,
              please contact us at:
            </p>
            <p>
              <strong>Email:</strong> info@socialmeup.in ,
              socialmeup.co@gmail.com
              <br />
              <strong>Phone:</strong> +91 8004857390 , 9599064721 , 9559618555
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Terms;
