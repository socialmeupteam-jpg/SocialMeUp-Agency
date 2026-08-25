import { FaStar } from "react-icons/fa";
import styles from "./StarRating.module.css";

interface Props {
  rating: number;
}

function StarRating({ rating }: Props) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: rating }).map((_, index) => (
        <FaStar key={index} />
      ))}
    </div>
  );
}

export default StarRating;
