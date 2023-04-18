import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import DownloadPage from "./Components/Pages/DownloadPage";
import Footer from "./Components/Pages/Footer";
import ContectUS from "./Components/Pages/ContectUS";
import BlogsPage from "./Components/Pages/BlogsPage";
import Career from "./Components/Pages/Career";
import DigitalPayment from "./Components/Pages/DigitalPayment";
import PremiumPage from "./Components/Pages/PremiumPage";
import PrivacyPolicy from "./Components/Pages/PrivacyPolicy";
import NavBar from "./Components/Pages/NavBar";
import TermsAndCondition from "./Components/Pages/TermsAndCondition";
import AboutUS from "./Components/Pages/AboutUS";
import Tutorial from "./Components/Pages/Tutorial";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/downloadapp" element={<DownloadPage />} />
          <Route path="/contect" element={<ContectUS />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/career" element={<Career />} />
          <Route path="/digitalPayment" element={<DigitalPayment />} />
          <Route path="/premium" element={<PremiumPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms&condition" element={<TermsAndCondition />} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/tutorial" element={<Tutorial />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
