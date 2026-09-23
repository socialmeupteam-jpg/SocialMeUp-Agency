import { FiMessageCircle, FiSend } from "react-icons/fi";
import { useState, type FormEvent } from "react";

import styles from "./BlogComments.module.css";

interface BlogCommentsProps {
  blogTitle?: string;
}

const BlogComments = ({ blogTitle = "SocialMeUp Blog" }: BlogCommentsProps) => {
  const API_URL = import.meta.env.VITE_API_URL || "https://api.socialmeup.in";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage("");
    setIsSuccess(false);

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanComment = comment.trim();

    if (!cleanName || !cleanEmail || !cleanComment) {
      setMessage("Please fill in all required fields.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(`${API_URL}/api/blog-comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          comment: cleanComment,
          blogTitle,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit comment.");
      }

      setIsSuccess(true);
      setMessage("Thank you! Your comment has been submitted successfully.");

      setName("");
      setEmail("");
      setComment("");
    } catch (error) {
      console.error("Comment submission error:", error);

      setIsSuccess(false);

      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
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

            <input
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              disabled={isSubmitting}
              maxLength={100}
              autoComplete="name"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email *</label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              disabled={isSubmitting}
              maxLength={150}
              autoComplete="email"
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="comment">Comment *</label>

          <textarea
            id="comment"
            placeholder="Share your thoughts..."
            rows={4}
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            required
            disabled={isSubmitting}
            maxLength={5000}
          />
        </div>

        {message && (
          <p
            className={isSuccess ? styles.successMessage : styles.errorMessage}
            role="alert"
          >
            {message}
          </p>
        )}

        <button type="submit" className={styles.submit} disabled={isSubmitting}>
          <FiSend size={14} />

          <span>{isSubmitting ? "Sending..." : "Submit Comment"}</span>
        </button>
      </form>
    </section>
  );
};

export default BlogComments;
