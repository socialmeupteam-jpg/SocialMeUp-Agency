import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./TestimonialCarousel.module.css";

import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { testimonials } from "../../../data/testimonialsData";

function TestimonialCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Keyboard, Autoplay]}
      className={styles.carousel}
      slidesPerView={3}
      slidesPerGroup={1}
      centeredSlides={false}
      spaceBetween={24}
      loop
      speed={600}
      grabCursor
      watchOverflow
      keyboard={{
        enabled: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      navigation
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
    >
      {testimonials.map((item) => (
        <SwiperSlide key={item.id}>
          <TestimonialCard testimonial={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TestimonialCarousel;
