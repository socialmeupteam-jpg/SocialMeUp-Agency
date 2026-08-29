import { FiMapPin, FiPhone, FiMail, FiArrowRight } from "react-icons/fi";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

import styles from "./Contact.module.css";

function Contact() {
  const navigate = useNavigate();
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>CONTACT</span>

          <h2>
            Let's Start Something
            <span> Great</span>
          </h2>

          <p>
            Ready to grow your business? Reach out and let's discuss how we can
            help you achieve your digital goals.
          </p>
        </motion.div>

        <div className={styles.grid}>
          <div className={styles.infoGrid}>
            <article className={styles.card}>
              <FiMapPin />

              <h4>Delhi Office</h4>

              <p>
                B, B, Mohan Cooperative Industrial Estate, Badarpur, News Delhi,
                New Delhi, Delhi 110044
              </p>
            </article>

            <article className={styles.card}>
              <FiMapPin />

              <h4>Lucknow Office</h4>

              <p>
                Aurangabad Jageer, KN-839, Bijnor Rd, near Manish Yadav Gate,
                Sarojini Nagar, Lucknow, Uttar Pradesh 226014
              </p>
            </article>

            <article className={styles.card}>
              <FiPhone />

              <h4>Phone</h4>

              <p>+91 8004857390</p>

              <p>+91 9599064721</p>

              <p>+91 9559618555</p>

              <p>+91 9238341904</p>
            </article>

            <article className={styles.card}>
              <FiMail />

              <h4>Email</h4>

              <p>info@socialmeup.in</p>

              <p>socialmeup.co@gmail.com</p>
            </article>
          </div>

          <motion.div
            className={styles.consultation}
            whileHover={{
              y: -8,
            }}
          >
            <h3>Contact For Any Query</h3>

            <p>
              Tell us about your goals and we'll create the perfect strategy for your business.
            </p>

            <button onClick={() => navigate("/contact")}>
              Contact us now
              <FiArrowRight />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
