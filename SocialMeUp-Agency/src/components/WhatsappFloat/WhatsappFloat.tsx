import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import styles from "./WhatsAppFloat.module.css";

const WHATSAPP_NUMBER = "918004857390";

const WHATSAPP_MESSAGE =
  "Hello SocialMeUp! I would like to know more about your services.";

function WhatsAppFloat() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      WHATSAPP_MESSAGE,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.wrapper}>
      {isPopupOpen && (
        <div
          className={styles.popup}
          role="button"
          tabIndex={0}
          onClick={openWhatsApp}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              openWhatsApp();
            }
          }}
        >
          <button
            type="button"
            className={styles.closeButton}
            aria-label="Close WhatsApp message"
            onClick={(event) => {
              event.stopPropagation();
              setIsPopupOpen(false);
            }}
          >
            <FaTimes />
          </button>

          <div className={styles.popupIcon}>
            <FaWhatsapp />
          </div>

          <div className={styles.popupContent}>
            <strong>Chat with us on WhatsApp</strong>
            <span>We're here to help!</span>
          </div>
        </div>
      )}

      <button
        type="button"
        className={styles.floatingButton}
        aria-label="Chat with SocialMeUp on WhatsApp"
        onClick={openWhatsApp}
      >
        <FaWhatsapp className={styles.whatsappIcon} />

        <span className={styles.pulse}></span>
      </button>
    </div>
  );
}

export default WhatsAppFloat;