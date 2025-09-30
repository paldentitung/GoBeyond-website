import { useState, useEffect } from "react";
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
import Title from "./Components/Title";
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const splashTimer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(splashTimer);
  }, []);

  if (showSplash) {
    return (
      <div className="min-h-screen flex justify-center items-center flex-col">
        <span>Welcome to </span>
        <div className="flex gap-1 items-center">
          <span className="bg-cyan-500 text-white p-2 rounded-[50%]">GB</span>
          <Title title="GoBeyond" />
        </div>
        <div className="w-[50px] h-[50px] border-cyan-500 border-2 border-dotted rounded-[50%]  animate-spin"></div>
      </div>
    );
  }

  return (
    <div className={mode ? "bg-white" : "bg-gray-800 text-white"}>
      <Header mode={mode} setMode={setMode} />
      <ScrollToTop /> {/* Add this */}
      <Routes>
        <Route path="/" element={<Home mode={mode} />} />
        <Route
          path="/destinations"
          element={<DestinationsPage mode={mode} />}
        />
        <Route path="/destination/:id" element={<DestinationDetailPage />} />
        <Route path="/about" element={<AboutUsPage mode={mode} />} />
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
