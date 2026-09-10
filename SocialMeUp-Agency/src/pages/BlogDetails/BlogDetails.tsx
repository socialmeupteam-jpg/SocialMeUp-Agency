import { Navigate, useParams } from "react-router-dom";

import { getBlogBySlug } from "../../data/blogData";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import BlogArticle from "../../components/Blog/BlogArticle/BlogArticle";
import BlogContent from "../../components/Blog/BlogContent/BlogContent";
import BlogComments from "../../components/Blog/BlogComments/BlogComments";
import RelatedBlogs from "../../components/Blog/RelatedBlogs/RelatedBlogs";
import BlogSidebar from "../../components/Blog/BlogSidebar/BlogSidebar";
import Seo from "../../components/Seo";

import styles from "./BlogDetails.module.css";

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();

  const blog = slug ? getBlogBySlug(slug) : undefined;

  if (!blog) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Seo
        title={`${blog.title} | SocialMeUp`}
        description={blog.excerpt}
        path={`/blog/${blog.slug}`}
        image={blog.image}
        type="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: blog.title,
          description: blog.excerpt,
          image: blog.image,
          author: { "@type": "Organization", name: blog.author },
          publisher: { "@type": "Organization", name: "SocialMeUp" },
          mainEntityOfPage: `https://socialmeup.in/blog/${blog.slug}`,
        }}
      />
      <Navbar />
      <main className={styles.page}>
        <div className={styles.backgroundGlowOne} />
        <div className={styles.backgroundGlowTwo} />

        <div className={styles.container}>
          <BlogArticle blog={blog} />

          <div className={styles.contentLayout}>
            <article className={styles.articleColumn}>
              <BlogContent blog={blog} />
            </article>

            <aside className={styles.sidebarColumn}>
              <BlogSidebar blog={blog} />
            </aside>
          </div>

          <BlogComments blogTitle={blog.title} />
          
          <RelatedBlogs blogs={blog.relatedBlogs} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogDetails;
