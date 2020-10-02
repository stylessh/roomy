import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Navigation, EffectFade, Swiper } from "swiper";

import images from "../../data";

import "./slider.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

Swiper.use([EffectFade, Navigation]);

const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };

const Carousel = () => {
  const [slide, setSlide] = useState({});
  const swiper = useRef(null);

  useEffect(() => {
    swiper.current = new Swiper(".swiper-container", {
      effect: "fade",
      lazy: true,
      direction: "horizontal",
      speed: 500,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          allowTouchMove: true,
          resistance: 0.9,
        },
        1024: {
          allowTouchMove: false,
        },
      },
      on: {
        slideChange: (e) => {
          const id = e.realIndex;

          changeInfo(id);
        },
      },
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: "#next",
        prevEl: "#prev",
      },
    });
  }, []);

  const changeInfo = (id) => {
    setSlide(images[id]);
  };

  return (
    <article className="slider">
      <ul className="swiper-container">
        <div className="swiper-wrapper">
          {images.map((img) => (
            <li className="swiper-slide" key={img.id}>
              <motion.img
                src={img.url}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={transition}
                alt={img.title}
              />
            </li>
          ))}
        </div>

        <div className="nav-buttons">
          <div id="prev">
            <img src="/images/icon-angle-left.svg" alt="Previous arrow" />
          </div>
          <div id="next">
            <img src="/images/icon-angle-right.svg" alt="Next arrow" />
          </div>
        </div>
      </ul>

      <div className="slider-info">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ...transition,
            delay: 0.5,
          }}
        >
          {slide.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ...transition,
            delay: 0.8,
          }}
        >
          {slide.content}
        </motion.p>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ...transition,
            delay: 1,
          }}
          href="/shop"
          className="btn"
        >
          Shop now
          <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
              fill-rule="nonzero"
            />
          </svg>
        </motion.a>
      </div>
    </article>
  );
};

export default Carousel;
