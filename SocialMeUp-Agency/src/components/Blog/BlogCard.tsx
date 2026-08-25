import { Link } from "react-router-dom";
import styles from "./BlogCard.module.css";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

interface BlogCardProps {
  post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <Link to={`/blog/${post.slug}`} className={styles.cardLink}>
      <article
        className={`${styles.card} ${post.featured ? styles.featured : ""}`}
      >
        {/* Image */}
        <div className={styles.imageWrapper}>
          <img src={post.image} alt={post.title} loading="lazy" />

          <span className={styles.category}>{post.category}</span>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.meta}>
            <span>{post.date}</span>

            <span className={styles.separator}>•</span>

            <span>{post.readTime}</span>
          </div>

          <h3>{post.title}</h3>

          <p>{post.description}</p>

          <span className={styles.readMore}>
            Read More
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </article>
    </Link>
  );
}

export default BlogCard;