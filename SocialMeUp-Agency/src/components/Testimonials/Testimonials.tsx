import {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, type Variants } from "framer-motion";
import styles from "./Testimonials.module.css";

const TestimonialCarousel = lazy(
  () => import("./TestimonialCarousel/TestimonialCarousel"),
);

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

function DeferredTestimonialCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const target = containerRef.current;

    if (!target || !("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "1200px 0px" },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      {shouldLoad && (
        <Suspense fallback={null}>
          <TestimonialCarousel />
        </Suspense>
      )}
    </div>
  );
}

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

          <DeferredTestimonialCarousel />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
