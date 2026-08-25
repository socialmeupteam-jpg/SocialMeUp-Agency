import { FiCalendar, FiClock, FiUser } from "react-icons/fi";

import type { BlogPost } from "../../../data/blogData";

import styles from "./BlogArticle.module.css";

interface BlogArticleProps {
  blog: BlogPost;
}

const BlogArticle = ({ blog }: BlogArticleProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.category}>{blog.category}</div>

      <h1 className={styles.title}>{blog.title}</h1>

      <p className={styles.excerpt}>{blog.excerpt}</p>

      <div className={styles.meta}>
        <div className={styles.metaItem}>
          <span className={styles.authorIcon}>
            <FiUser size={13} />
          </span>
          <span>{blog.author}</span>
        </div>

        <span className={styles.separator}>•</span>

        <div className={styles.metaItem}>
          <FiCalendar size={15} />
          <span>{blog.date}</span>
        </div>

        <span className={styles.separator}>•</span>

        <div className={styles.metaItem}>
          <FiClock size={15} />
          <span>{blog.readTime}</span>
        </div>
      </div>

      <div className={styles.heroWrapper}>
        <img src={blog.image} alt={blog.title} className={styles.heroImage} />

        <div className={styles.heroOverlay}>
          <div className={styles.heroLabel}>Digital Marketing</div>
          <div className={styles.heroTagline}>
            Grow. Connect. <span>Scale.</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogArticle;