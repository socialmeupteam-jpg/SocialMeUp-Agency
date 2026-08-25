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

import styles from "./Home.module.css";

function Home() {
  return (
    <>
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
