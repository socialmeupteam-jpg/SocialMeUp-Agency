import { FiArrowRight, FiBookmark, FiShare2 } from "react-icons/fi";

import { useState } from "react";

import type { BlogPost } from "../../../data/blogData";

import styles from "./BlogSidebar.module.css";

interface BlogSidebarProps {
  blog: BlogPost;
}

const BlogSidebar = ({ blog }: BlogSidebarProps) => {
  const [shareMessage, setShareMessage] = useState("");

  const handleShare = async () => {
    const shareData = {
      title: document.title,
      text: "Check out this article from SocialMeUp.",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);

        setShareMessage("Thanks for sharing!");
      } else {
        await navigator.clipboard.writeText(window.location.href);

        setShareMessage("Article link copied!");
      }

      setTimeout(() => {
        setShareMessage("");
      }, 2500);
    } catch (error) {
      /*
       * User cancelled the native share dialog.
       * Don't show an error in that case.
       */
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }

      try {
        await navigator.clipboard.writeText(window.location.href);

        setShareMessage("Article link copied!");

        setTimeout(() => {
          setShareMessage("");
        }, 2500);
      } catch {
        setShareMessage("Unable to share this article.");
      }
    }
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.card}>
        <div className={styles.cardTitle}>
          <FiBookmark size={16} />
          <span>In This Article</span>
        </div>

        <nav className={styles.navigation}>
          {blog.sections.map((section) => (
            <a href={`#section-${section.number}`} key={section.number}>
              <span>{section.number}</span>
              <strong>{section.title}</strong>
            </a>
          ))}
        </nav>
      </div>

      <div className={styles.ctaCard}>
        <div className={styles.ctaIcon}>
          <FiShare2 />
        </div>
        <div className={styles.shareContent}>
          <h3>Enjoyed this article?</h3>

          <p>
            Share this article with your network and help someone discover
            useful marketing insights.
          </p>

          <button
            type="button"
            onClick={handleShare}
            className={styles.shareButton}
          >
            Share Article
            <FiArrowRight size={15} />
          </button>

          {shareMessage && (
            <span className={styles.shareMessage}>{shareMessage}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;