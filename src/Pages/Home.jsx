import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Destinations from "../Components/Destination";
import AboutUs from "../Components/AboutUs";
import Contact from "../Components/Contact";
import { Footer } from "../Components/Footer";
const Home = ({ mode }) => {
  return (
    <>
      <Hero />
      <Destinations showAll={false} />
      <AboutUs mode={mode} />
      <Contact mode={mode} />
      <Footer mode={mode} />
    </>
  );
};

export default Home;
