import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import DestinationsPage from "./Pages/DestinationsPage";
import DestinationDetailPage from "./Pages/DestinationDetailPage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactPage from "./Pages/ContactPage";
import Header from "./Components/Header";
import PageNotFound from "./Pages/PageNotFound";
import { useState } from "react";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/destination/:id" element={<DestinationDetailPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
