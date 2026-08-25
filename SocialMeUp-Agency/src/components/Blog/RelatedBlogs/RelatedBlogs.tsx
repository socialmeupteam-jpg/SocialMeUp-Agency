import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import type { RelatedBlog } from "../../../data/blogData";

import styles from "./RelatedBlogs.module.css";

interface RelatedBlogsProps {
  blogs: RelatedBlog[];
}

const RelatedBlogs = ({ blogs }: RelatedBlogsProps) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.heading}>
        <h2>Related Articles</h2>
      </div>

      <div className={styles.grid}>
        {blogs.map((blog) => (
          <Link
            to={`/blog/${blog.slug}`}
            className={styles.card}
            key={blog.id}
          >
            <div className={styles.imageWrapper}>
              <img src={blog.image} alt={blog.title} />
            </div>

            <div className={styles.info}>
              <span className={styles.category}>{blog.category}</span>

              <h3>{blog.title}</h3>

              <span className={styles.readTime}>{blog.readTime}</span>
            </div>

            <div className={styles.arrow}>
              <FiArrowRight size={17} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedBlogs;