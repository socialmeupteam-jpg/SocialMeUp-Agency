import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./TestimonialSlider.module.css";

import { testimonials } from "../../../data/testimonialsData";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

function TestimonialSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, Keyboard]}
      slidesPerView={1}
      loop
      speed={800}
      keyboard={{
        enabled: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      className={styles.slider}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <TestimonialCard testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TestimonialSlider;
