import React from "react";

import Slider from "../../components/Slider";
import About from '../../components/About'

import "./home.scss";

const Home = () => {
  return (
    <section className="home">
      <Slider />
      
      <About />
    </section>
  );
};

export default Home;
