import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Destinations from "./Pages/Destinations";
import DestinationDetail from "./Pages/DestinationDetail";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
