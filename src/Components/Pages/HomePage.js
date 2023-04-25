import React, { useState, useEffect } from "react";
import { IMAGES_PATH } from "../../Constants/ImagesConst";
import "../../assets/css/Home.css";
import HomeSecond from "./HomeSecond";
import { useNavigate } from "react-router-dom";

import Slider from "react-slick";
// import "react-slick/dist/react-slick.css";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Carousel from "react-multi-carousel";
import AppDownloadPopUP from "../PopUp/AppDownloadPopUP";

// import "./styles.css";

const HomePage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const Navigate = useNavigate();
  function handleDowload() {
    window.scrollTo(0, 0);
    Navigate("/downloadapp");
  }
  function handleDigitalPage() {
    window.scrollTo(0, 0);
    Navigate("/digitalPayment");
  }
  function handlePremium() {
    window.scrollTo(0, 0);
    Navigate("/premium");
  }
  const [showModal, setShowModal] = useState(false);
  const [cashBackModel, setCashBackModel] = useState(false);
  const [show, setShow] = useState(false);

  function toggleModal() {
    setShow(!show);
  }
  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const hideModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
      setCashBackModel(true);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const cancle = () => {
    setCashBackModel(false);
  };
  // Model of PremiumPage
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 300 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 10,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 10,
    },
  };

  const images = [
    { src: "/Group 575.png", class: "img-small" },
    { src: "/Rectangle 8.png", class: "img-large" },
    { src: "/Group 572.png", class: "img-small" },
    { src: "/Rectangle 8.png", class: "img-large" },
    { src: "/Group 576.png", class: "img-small" },
    { src: "/Rectangle 8.png", class: "img-large" },
    { src: "/Group 574.png", class: "img-small" },
    { src: "/Rectangle 8.png", class: "img-large" },
    { src: "/Group 573.png", class: "img-small" },
    { src: "/Rectangle 8.png", class: "img-large" },
    { src: "/Group (2).png", class: "img-small" },
    { src: "/Rectangle 8.png", class: "img-large" },
    { src: "/Group (1).png", class: "img-small" },
    { src: "/Rectangle 8.png", class: "img-large" },
    { src: "/Group.png", class: "img-small" },
    { src: "/Rectangle 8.png", class: "img-large" },
  ];

  const desktopSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 15,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  const isMobile = window.innerWidth <= 768;
  const settings = isMobile ? mobileSettings : desktopSettings;
  // const settings = window.innerWidth < 768 ? mobileSettings : desktopSettings;
  return (
    <>
      <AppDownloadPopUP />
      {/* {cashBackModel && <LeavingPopUP cancle={cancle} />} */}
      <div className="container pt-2">
        <div className="rupeeIcon">
          <img src={IMAGES_PATH + "/rupee 1.png"} />
        </div>
      </div>

      {/* dash back start  */}

      <div
        className="col-xl-12 row d-flex align-items-center justify-content-center "
        style={{ marginBottom: "70px" }}
      >
        <div className="col-lg-6 col-md-6 order_mbile  ">
          <div className="dash_text d-none d-lg-block">
            <img src={IMAGES_PATH + "/DASH.png"} className="dash_icon" />
          </div>
          <div className="dash_header  text-center">
            <h1>The Cashback App</h1>
            <p className="secure_text">Convenient. Trustworthy. Secure.</p>
            <div className="">
              <p className="shopping_text">
                A shopping and payments platform that encourages wealth-building
                via transparent cashback and <br />
                financial solutions.
              </p>
            </div>
            <div>
              <button className="downloadButtons" onClick={handleDowload}>
                Download the app
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 order_mbile_reverse  ">
          <div>
            <img src={IMAGES_PATH + "/1 673388.png"} className="phone_icon" />
          </div>
          <div className="back  d-none d-lg-block">
            <img src={IMAGES_PATH + "/BACK.png"} className="back_icons" />
          </div>
        </div>
      </div>

      {/* we keep your data secure section start  */}

      <div style={{ paddingBottom: 90 }}>
        <div className="text-center pb-5">
          <div className="we_keep_data">
            <h1>We keep your data secure</h1>
          </div>
        </div>
        <div className="container">
          <div
            className="row "
            style={{ marginLeft: "10%", marginRight: "10%" }}
          >
            <div className="brand-img  ">
              <img src={IMAGES_PATH + "/Group 905.png"} className="img-fluid" />
              <img
                src={IMAGES_PATH + "/Rectangle 8.png"}
                className="img-fluid desktop-tablet"
              />
              <img
                src={IMAGES_PATH + "/Group 884.png"}
                className="img-fluid "
              />
              <img
                src={IMAGES_PATH + "/Rectangle 8.png"}
                className="img-fluid desktop-tablet"
              />
              <img
                src={IMAGES_PATH + "/Group 885.png"}
                className="img-fluid "
              />
              <img
                src={IMAGES_PATH + "/Rectangle 8.png"}
                className="img-fluid desktop-tablet"
              />
              <img
                src={IMAGES_PATH + "/Group 886.png"}
                className="img-fluid "
              />
            </div>
          </div>
        </div>
      </div>

      {/* what section start  */}

      <div className="col-xl-12  row d-flex align-items-center justify-content-center mt-5 padding_for_div ">
        <div
          className="col-lg-6 col-md-6 
         text-center "
        >
          <div className="d-none d-lg-block">
            <img src={IMAGES_PATH + "/WHAT.png"} className="dash_icon" />
          </div>

          <div className="">
            <img
              src={IMAGES_PATH + "/Group 1127.png"}
              className="waht_phone_icon"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-5 text-center padding_for_div">
          <div className="begin_header text-center  pt-lg-2 ">
            <h1>
              Begin your journey
              <br /> today
            </h1>
            <h5 className="digital-text">Digital Payments</h5>
            <h5 className="digital-text"> Online Shopping </h5>
            <h5 className="digital-text mb-3">Wealth-Building</h5>
            <p>Use DashBack to pay your bills. </p>
            <p>Get access to exclusive products.</p>
            <p> Invest in profitable financial solutions.</p>

            <div>
              <button
                className="downloadButton mt-3"
                onClick={handleDigitalPage}
              >
                Learn more
              </button>
            </div>
          </div>
          <div className="we-do-icon">
            <div className="d-none d-lg-block">
              <img src={IMAGES_PATH + "/WE DO.png"} className="we_do_img" />
            </div>
          </div>
        </div>
      </div>

      {/* Special offers from brands you love start   ++++  */}
      <div style={{ marginTop: "4%" }}>
        <div className="text-center brandHeader">
          <h1>Special offers from brands you love</h1>
        </div>
        <div>
          <div className="container" style={{ marginBottom: "100px" }}>
            <div className="slider_new">
              <Slider {...settings}>
                {images.map((img, index) => (
                  <div key={index} className={`slider-image ${img.class}`}>
                    <img src={IMAGES_PATH + img.src} alt={`img-${index}`} />
                  </div>
                ))}
              </Slider>
            </div>

            {/* <div className="brand-img_all " style={{ width: "" }}>
              <Slider {...settings}>
                <img src={IMAGES_PATH + "/Group 575.png"} className=" width " />
                <img
                  src={IMAGES_PATH + "/Rectangle 8.png"}
                  className="img-fluid desktop-tablet"
                />
                <img src={IMAGES_PATH + "/Group 572.png"} className=" width" />
                <img
                  src={IMAGES_PATH + "/Rectangle 8.png"}
                  className="img-fluid desktop-tablet"
                />

                <img
                  src={IMAGES_PATH + "/Group 576.png"}
                  className="img-fluid width "
                />
                <img
                  src={IMAGES_PATH + "/Rectangle 8.png"}
                  className="img-fluid desktop-tablet"
                />

                <img
                  src={IMAGES_PATH + "/Group 574.png"}
                  className="img-fluid width"
                />
                <img
                  src={IMAGES_PATH + "/Rectangle 8.png"}
                  className="img-fluid desktop-tablet"
                />

                <img
                  src={IMAGES_PATH + "/Group 573.png"}
                  className="img-fluid width"
                />
                <img
                  src={IMAGES_PATH + "/Rectangle 8.png"}
                  className="img-fluid desktop-tablet "
                />
                <img
                  src={IMAGES_PATH + "/Group (2).png"}
                  className="img-fluid width "
                />
                <img
                  src={IMAGES_PATH + "/Rectangle 8.png"}
                  className="img-fluid desktop-tablet"
                />

                <img
                  src={IMAGES_PATH + "/Group (1).png"}
                  className="img-fluid width"
                />
                <img
                  src={IMAGES_PATH + "/Rectangle 8.png"}
                  className="img-fluid desktop-tablet"
                />

                <img
                  src={IMAGES_PATH + "/Group.png"}
                  className="img-fluid width"
                />
              </Slider>
            </div> */}
          </div>
        </div>
      </div>

      {/* premium section start  */}
      <div className="padding_for_div">
        <div
          className=" col-xl-12 row premimun_secrion_start d-flex align-items-center justify-content-center "
          style={{ marginBottom: "10%" }}
        >
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="premium_first d-none d-lg-block">
              <img src={IMAGES_PATH + "/Premium.png"} />
            </div>
            <div className="text-center dash_headers ">
              <h1 className="premium_header">Premium Membership</h1>
              <h5 className="premium_text">More benefits, more rewards.</h5>
              <div className="premium_testss">
                <p>
                  You may unleash the full potential of DashBack by signing up
                  to become a Premium member. Avail of exclusive offers, extra
                  cashback and exciting investment opportunities with guaranteed
                  returns through an affordable yearly subscription. 
                </p>
              </div>
              <div>
                <button
                  className="downloadButton order_button mt-3"
                  onClick={handlePremium}
                >
                  Unlock Premium
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center  mt-5 order-lg-2 order-1">
            <div className="phone-icon_2">
              <img src={IMAGES_PATH + "/1 673388.png"} />
            </div>
            <div className=" preimium_last d-none d-lg-block">
              <img src={IMAGES_PATH + "/Premium.png"} />
            </div>
          </div>
        </div>
      </div>
      <HomeSecond />
    </>
  );
};

export default HomePage;
