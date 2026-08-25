import styles from "./ContactInfoCard.module.css";
import type { ContactCard } from "../../../data/contactData";

interface ContactInfoCardProps {
  card: ContactCard;
}

const ContactInfoCard = ({ card }: ContactInfoCardProps) => {
  const Icon = card.icon;

  return (
    <article className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{card.title}</h3>

        <div className={styles.lines}>
          {card.lines.map((line, index) => (
            <p key={index} className={styles.line}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ContactInfoCard;
