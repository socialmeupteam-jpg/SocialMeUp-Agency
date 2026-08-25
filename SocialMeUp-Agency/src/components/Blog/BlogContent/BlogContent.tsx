import type { BlogPost } from "../../../data/blogData";

import styles from "./BlogContent.module.css";

interface BlogContentProps {
  blog: BlogPost;
}

const BlogContent = ({ blog }: BlogContentProps) => {
  return (
    <div className={styles.content}>
      {blog.content.map((paragraph, index) => (
        <p key={index} className={styles.paragraph}>
          {paragraph}
        </p>
      ))}

      {blog.quote && (
        <blockquote className={styles.quote}>
          <div className={styles.quoteMark}>“</div>

          <p>{blog.quote}</p>

          <div className={styles.quoteSpark}>✦</div>
        </blockquote>
      )}

      <div className={styles.sections}>
        {blog.sections.map((section) => (
          <section
            className={styles.section}
            key={section.number}
            id={`section-${section.number}`}
          >
            <div className={styles.number}>{section.number}</div>

            <div className={styles.sectionBody}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default BlogContent;

