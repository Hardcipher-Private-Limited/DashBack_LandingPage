import React, { useState, useEffect } from "react";
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
import { Helmet } from "react-helmet";
import OurPartner from "./Components/Pages/OurPartner";
import Card from "./Components/Pages/Card";
import LeavingPopUP from "./Components/PopUp/LeavingPopUP";
import HomeSecond from "./Components/Pages/HomeSecond";
function App() {
  // const [cashBackModel, setCashBackModel] = useState(true);

  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     event.preventDefault();
  //     event.returnValue = "";
  //     setCashBackModel(true);
  //   };
  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  // const cancle = () => {
  //   setCashBackModel(false);
  // };

  return (
    <>
      <BrowserRouter>
        {/* {cashBackModel && <LeavingPopUP cancle={cancle} />} */}
        {/* <LeavingPopUP /> */}
        <NavBar />
        <Helmet>
          <title>
            Shop Smarter and Save More with DashBack: The Cashback App
          </title>

          <meta
            name="description"
            content=" Maximize your savings with Dash Back, the top-rated cashback app. Shop at hundreds of your favorite stores and earn cashback on every purchase."
          />
        </Helmet>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/downloadapp" element={<DownloadPage />} />
          <Route path="/contact_us" element={<ContectUS />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:url_name" element={<Card />} />
          <Route path="/career" element={<Career />} />
          <Route path="/digital_payment_options" element={<DigitalPayment />} />
          <Route path="/premium" element={<PremiumPage />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/terms_condition" element={<TermsAndCondition />} />
          <Route path="/about_us" element={<AboutUS />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/our_partners" element={<OurPartner />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
