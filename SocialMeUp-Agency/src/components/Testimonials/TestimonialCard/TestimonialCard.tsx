import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";
import StarRating from "../StarRating/StarRating";
import styles from "./TestimonialCard.module.css";

import type { Testimonial } from "../../../data/testimonialsData";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
    >
      <div className={styles.topRow}>
        <span className={styles.quote}>❝</span>

        <div className={styles.google}>
          <FaGoogle />
          <span>Google Review</span>
        </div>
      </div>

      <div className={styles.profile}>


        <div>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.time}</p>
        </div>
      </div>

      <StarRating rating={testimonial.rating} />

      <p className={styles.review}>{testimonial.review}</p>

  
    </motion.article>
  );
}

export default TestimonialCard;
