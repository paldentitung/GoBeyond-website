import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";

import Home from "./Pages/Home";
import DestinationsPage from "./Pages/DestinationsPage";
import DestinationDetailPage from "./Pages/DestinationDetailPage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactPage from "./Pages/ContactPage";
import FAQsPage from "./Pages/FAQsPage";
import BookingGuidePage from "./Pages/BookingGuidePage";
import TermsPage from "./Pages/TermsPage";
import PrivacyPage from "./Pages/PrivacyPage";
import PageNotFound from "./Pages/PageNotFound";
import Header from "./Components/Header";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Header />
      <ScrollToTop /> {/* Add this */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/destination/:id" element={<DestinationDetailPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/booking-guide" element={<BookingGuidePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
