import { motion } from "framer-motion";
import styles from "./Blog.module.css";

import BlogCard from "./BlogCard";
import { blogPosts } from "../../data/blogData";

function Blog() {
  return (
    <section
      className={styles.blogSection}
      id="blog"
      aria-labelledby="blog-heading"
    >
      <div className={styles.container}>
        <motion.div
          className={styles.heading}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <span className={styles.labelLine}></span>

          <span className={styles.badge}>INSIGHTS</span>

          <h2 id="blog-heading">
            Digital Marketing <br />
            <span>Insights &amp; Strategies</span>
          </h2>

          <p>
            Explore practical digital marketing insights, social media trends,
            and proven growth strategies to help your brand reach more
            customers online.
          </p>
        </motion.div>

        <div className={styles.blogGrid}>
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <BlogCard
                post={{
                  ...post,
                  description: `Discover digital marketing insights and growth strategies in ${post.title}.`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
