import React from "react";
import { motion } from "framer-motion";

import "./about.scss";

const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };

const About = () => {
  return (
    <section className="about">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        src="/images/image-about-dark.jpg"
        alt="dark room"
      />
      <article className="info">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ...transition,
            delay: 1.2,
          }}
        >
          About our furniture
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ...transition,
            delay: 1.4,
          }}
        >
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </motion.p>
      </article>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        src="/images/image-about-light.jpg"
        alt="light room"
      />
    </section>
  );
};

export default About;
