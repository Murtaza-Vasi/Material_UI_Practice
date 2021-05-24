import React from "react";

import Intro from "./components/Intro";
import About from "./components/About";
import Services1 from "./components/Services1";
import Services2 from "./components/Services2";
import Reviews from "./components/Reviews";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

const HomeScreen = () => {
  return (
    <>
      <Intro />
      <About />
      <Services1 />
      <Services2 />
      <Reviews />
      <Signup />
      <Footer />
    </>
  );
};

export default HomeScreen;
