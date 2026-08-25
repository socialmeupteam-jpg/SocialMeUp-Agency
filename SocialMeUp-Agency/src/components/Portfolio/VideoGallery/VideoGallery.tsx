import { FiPlay } from "react-icons/fi";
import { motion } from "framer-motion";

import styles from "./VideoGallery.module.css";

interface VideoItem {
  title: string;
  thumbnail: string;
}

interface VideoGalleryProps {
  videos: VideoItem[];
}

function VideoGallery({
  videos,
}: VideoGalleryProps) {
  return (
    <section className={styles.gallery}>
      {videos.map((video, index) => (
        <motion.article
          key={video.title}
          className={styles.card}
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * .1,
          }}
          viewport={{ once: true }}
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            loading="lazy"
          />

          <button
            className={styles.playButton}
            aria-label={`Play ${video.title}`}
          >
            <FiPlay />
          </button>

          <div className={styles.info}>
            <h3>{video.title}</h3>
          </div>
        </motion.article>
      ))}
    </section>
  );
}

export default VideoGallery;