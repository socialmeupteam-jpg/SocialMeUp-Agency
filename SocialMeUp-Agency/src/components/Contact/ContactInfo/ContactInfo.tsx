import { motion } from "framer-motion";
import styles from "./ContactInfo.module.css";
import ContactInfoCard from "../ContactInfoCard/ContactInfoCard";
import { contactCards } from "../../../data/contactData";

const ContactInfo = () => {
  return (
    <motion.aside
      className={styles.container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
    >
      {contactCards.map((card) => (
        <motion.div
          key={card.id}
          variants={{
            hidden: {
              opacity: 0,
              x: -40,
            },
            show: {
              opacity: 1,
              x: 0,
            },
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <ContactInfoCard card={card} />
        </motion.div>
      ))}
    </motion.aside>
  );
};

export default ContactInfo;
