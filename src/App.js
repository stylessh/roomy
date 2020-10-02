import React from "react";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";

import { AnimatePresence } from "framer-motion";

import "./sass/index.scss";

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <AnimatePresence>
          <Home />
        </AnimatePresence>
      </main>
    </>
  );
};

export default App;
