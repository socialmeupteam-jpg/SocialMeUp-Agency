import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import WhyUs from "../../components/WhyUs/WhyUs";
import Industries from "../../components/Industries/Industries";
import Blog from "../../components/Blog/Blog";
import Testimonials from "../../components/Testimonials/Testimonials";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Seo from "../../components/Seo";

import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Seo
        title="SocialMeUp | Digital Marketing Agency in Lucknow"
        description="SocialMeUp is a digital marketing agency in Lucknow and Delhi helping businesses grow through SEO, social media, paid ads, branding, and content marketing."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "SocialMeUp",
          url: "https://socialmeup.in/",
          email: "info@socialmeup.in",
          telephone: "+91-8004857390",
          areaServed: ["Lucknow", "Delhi", "India"],
          sameAs: [
            "https://www.facebook.com/SocialMeUp.offical",
            "https://www.instagram.com/socialmeup_/",
            "https://www.linkedin.com/company/socialmeup/",
            "https://www.youtube.com/@SocialMeUp",
          ],
        }}
      />
      <Navbar />
      <main className={styles.homePage}>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Industries />
        <Blog />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default Home;
