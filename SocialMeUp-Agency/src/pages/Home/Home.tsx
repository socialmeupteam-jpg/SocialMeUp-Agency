import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";

import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.homePage}>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </main>
  );
}

export default Home;
