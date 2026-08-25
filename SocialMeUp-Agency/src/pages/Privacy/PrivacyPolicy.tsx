import { motion } from "framer-motion";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import styles from "./PrivacyPolicy.module.css";

function PrivacyPolicy() {
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

            <h1>Privacy Policy</h1>

            <p className={styles.updated}>Last Updated: January 2025</p>
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
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy describes the policies of SocialMeUp, B, B,
              Mohan Cooperative Industrial Estate, Badarpur, News Delhi, New
              Delhi, Delhi 110044, Delhi 110044, India, email:
              socialmeup.co@gmail.com, phone: 8004857390 on the collection, use
              and disclosure of your information that we collect when you use
              our website ( https://socialmeup.in/ ). (the “Service”). By
              accessing or using the Service, you are consenting to the
              collection, use and disclosure of your information in accordance
              with this Privacy Policy. If you do not consent to the same,
              please do not access or use the Service.
              <br />
              We may modify this Privacy Policy at any time without any prior
              notice to you and will post the revised Privacy Policy on the
              Service. The revised Policy will be effective 180 days from when
              the revised Policy is posted in the Service and your continued
              access or use of the Service after such time will constitute your
              acceptance of the revised Privacy Policy. We therefore recommend
              that you periodically review this page.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as
              when you fill out a contact form, sign up for our services, or
              communicate with us. This may include your name, email address,
              phone number, and any other information you choose to provide.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>
              We will use the information that we collect about you for the
              following purposes:
              <ul>
                <li>Marketing/ Promotional</li>
                <li>Creating user account</li>
                <li>Testimonials</li>
                <li>Customer feedback collection</li>
                <li>Targeted advertising</li>
                <li>Site protection</li>
              </ul>
              If we want to use your information for any other purpose, we will
              ask you for consent and will use your information only on
              receiving your consent and then, only for the purpose(s) for which
              grant consent unless we are required to do otherwise by law.
            </p>

            <h2>4. Retention of your Information</h2>
            <p>
              We will retain your personal information with us for 90 days to 2
              years after users terminate their accounts or for as long as we
              need it to fulfill the purposes for which it was collected as
              detailed in this Privacy Policy. We may need to retain certain
              information for longer periods such as record-keeping / reporting
              in accordance with applicable law or for other legitimate reasons
              like enforcement of legal rights, fraud prevention, etc. Residual
              anonymous information and aggregate information, neither of which
              identifies you (directly or indirectly), may be stored
              indefinitely.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet is 100% secure.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              Depending on the law that applies, you may have a right to access
              and rectify or erase your personal data or receive a copy of your
              personal data, restrict or object to the active processing of your
              data, ask us to share (port) your personal information to another
              entity, withdraw any consent you provided to us to process your
              data, a right to lodge a complaint with a statutory authority and
              such other rights as may be relevant under applicable laws.
              <br />
              To exercise these rights, you can write to us at
              socialmeup.co@gmail.com. We will respond to your request in
              accordance with applicable law. You may opt-out of direct
              marketing communications or the profiling we carry out for
              marketing purposes by writing to us at socialmeup.co@gmail.com. Do
              note that if you do not allow us to collect or process the
              required personal information or withdraw the consent to process
              the same for the required purposes, you may not be able to access
              or use the services for which your information was sought.
            </p>

            <h2>7. Cookies & Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to track activity
              on our website and hold certain information. Cookies are files
              with a small amount of data which may include an anonymous unique
              identifier.
              <br />
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our website.
            </p>

            <h2>8. Security</h2>
            <p>
              The security of your information is important to us and we will
              use reasonable security measures to prevent the loss, misuse or
              unauthorized alteration of your information under our control.
              However, given the inherent risks, we cannot guarantee absolute
              security and consequently, we cannot ensure or warrant the
              security of any information you transmit to us and you do so at
              your own risk.
            </p>
            <h2>9. Grievance / Data Protection Officer:</h2>
            <p>
              If you have any queries or concerns about the processing of your
              information that is available with us, you may email our Grievance
              Officer at SocialMeUp, B, B, Mohan Cooperative Industrial Estate,
              Badarpur, News Delhi, New Delhi, Delhi 110044, email:
              socialmeup.co@gmail.com. We will address your concerns in
              accordance with applicable law.
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

export default PrivacyPolicy;
