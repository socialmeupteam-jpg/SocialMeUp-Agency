import { FiMessageCircle, FiSend } from "react-icons/fi";

import styles from "./BlogComments.module.css";
import type { FormEvent } from "react";

const BlogComments = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.heading}>
        <div className={styles.headingIcon}>
          <FiMessageCircle size={16} />
        </div>

        <div>
          <h2>Leave a Reply</h2>
          <p>Have thoughts on this article? Share your perspective below.</p>
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="name">Name *</label>
            <input id="name" type="text" placeholder="Your name" required />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="comment">Comment *</label>

          <textarea
            id="comment"
            placeholder="Share your thoughts..."
            rows={4}
            required
          />
        </div>

        <button type="submit" className={styles.submit}>
          <FiSend size={14} />
          <span>Submit Comment</span>
        </button>
      </form>
    </section>
  );
};

export default BlogComments;
