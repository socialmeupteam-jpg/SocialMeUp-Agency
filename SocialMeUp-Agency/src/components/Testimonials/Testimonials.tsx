import { motion, type Variants } from "framer-motion";
import styles from "./Testimonials.module.css";
import TestimonialCarousel from "./TestimonialCarousel/TestimonialCarousel";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.testimonialGlow} />
      <div className={styles.container}>
        <div className={styles.container}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span variants={fadeUp} className={styles.badge}>
              Testimonial
            </motion.span>

            <motion.h2
              variants={fadeUp}
              id="industries-heading"
              className={styles.heading}
            >
              Trusted by
              <br />
              <span>Clients</span>
            </motion.h2>
          </motion.div>

          {/* <TestimonialSlider />
           */}
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
