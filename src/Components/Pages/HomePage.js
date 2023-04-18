import React, { useState, useEffect } from "react";
import { IMAGES_PATH } from "../../Constants/ImagesConst";
import "../../assets/css/Home.css";
import HomeSecond from "./HomeSecond";
import { useNavigate } from "react-router-dom";
import LeavingPopUP from "../PopUp/LeavingPopUP";
import "react-multi-carousel/lib/styles.css";

import Slider from "react-slick";

const HomePage = () => {
  const Navigate = useNavigate();
  function handleDowload() {
    Navigate("/downloadapp");
  }
  function handleDigitalPage() {
    Navigate("/digitalPayment");
  }
  function handlePremium() {
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
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
    },
  };
  return (
    <>
      {/* {cashBackModel && <LeavingPopUP cancle={cancle} />} */}
      <div className="container pt-2">
        <div className="rupeeIcon">
          {/* <img
            src={IMAGES_PATH + "/rupee 1.png"}
            style={{ width: 330, height: 380 }}
          /> */}
        </div>
      </div>

      {/* dash back start  */}

      <div className="col-lg-12 col-sm-12 col-12 row" style={{}}>
        <div className="col-lg-6 order_mbile col-sm-6 col-12">
          <div className="dash_text">
            <img src={IMAGES_PATH + "/DASH.png"} className="dash_icon" />
          </div>
          <div className="dash_header shopping_prpoerties text-center">
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
        <div className="col-lg-6 col-12 order_mbile_reverse col-sm-6">
          <div>
            <img
              src={IMAGES_PATH + "/mobile_mockup01 (1) 1.png"}
              className="phone_icon"
            />
          </div>
          <div className="back visible-xs-block">
            <img src={IMAGES_PATH + "/BACK.png"} className="back_icons" />
          </div>
        </div>
      </div>
      <div style={{ paddingBottom: 150 }}>
        <div className="text-center pb-5">
          <div className="we_keep_data">
            <h1>We keep your data secure</h1>
          </div>
        </div>
        <div className="col-lg-12 col-sm-6 col-md-8 row">
          <div className="col-lg-2 col-sm-2 col-md-2"></div>
          <div className="text-center col-lg-9 col-md-8 col-sm-12">
            <div className="brand_logos">
              <div className="brand-img">
                <img
                  src={IMAGES_PATH + "/Group 905.png"}
                  className="img-fluid"
                />
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
          <div className="col-lg-2 col-sm-2 col-md-1"></div>
        </div>
      </div>

      {/* what section start  */}

      <div className="col-lg-12  row d-flex align-items-center justify-content-center">
        <div className="col-lg-6 order-lg-1 order-2 order-1 order-lg-1 text-center mb-4 mb-lg-0">
          <div className="d-none d-lg-block">
            <img src={IMAGES_PATH + "/WHAT.png"} className="dash_icon" />
          </div>
          <div className="d-lg-none">
            <img
              src={IMAGES_PATH + "/WHAT.png"}
              className="dash_icon"
              style={{ display: "none" }}
            />
          </div>
          <div className="">
            <img
              src={IMAGES_PATH + "/Group 889.png"}
              className="waht_phone_icon"
            />
          </div>
        </div>
        <div
          className="col-lg-6 order-lg-2 order-1 order-2 order-lg-2 text-center"
          style={{ paddingTop: 90 }}
        >
          <div className="begin_header text-center  pt-lg-5 ">
            <h1>
              Begin your journey
              <br /> today
            </h1>
            <h5 className="digital-text">Digital Payments</h5>
            <h5 className="digital-text"> Online Shopping </h5>
            <h5 className="digital-text">Wealth-Building</h5>
            <p>
              Use DashBack to pay your bills, get access to exclusive
              <br /> products and profitable financial solutions.
            </p>
            <div>
              <button className="downloadButton" onClick={handleDigitalPage}>
                Learn more
              </button>
            </div>
          </div>
          <div className="we-do-icon pt-0">
            <div className="d-none d-lg-block">
              <img src={IMAGES_PATH + "/WE DO.png"} className="we_do_img" />
            </div>
            <div className="d-lg-none">
              <img
                src={IMAGES_PATH + "/WE DO.png"}
                className="we_do_img"
                style={{ display: "none" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Special offers from brands you love start   ++++  */}
      <div>
        <div className="text-center brandHeader">
          <h1>Special offers from brands you love</h1>
        </div>
        <div>
          <div className="col-lg-12 row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <div className="brand_logos">
                <div className="brand-img">
                  {/* <Carousel
                    swipeable={false}
                    draggable={false}
                    infinite={true}
                    responsive={responsive}
                    className="container"
                    style={{ width: "5%" }}
                  > */}
                  {/* <img src={IMAGES_PATH + "/Vector 13.jpg"} /> */}
                  <img
                    src={IMAGES_PATH + "/Group 575.png"}
                    className="img-fluid width "
                  />
                  <img
                    src={IMAGES_PATH + "/Rectangle 8.png"}
                    className="img-fluid desktop-tablet"
                  />
                  <img
                    src={IMAGES_PATH + "/Group 572.png"}
                    className="img-fluid width"
                  />
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
                  {/* </Carousel> */}
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>
      {/* premium section start  */}
      <div>
        <div
          className=" col-lg-12 row premimun_secrion_start"
          style={{ paddingTop: 220 }}
        >
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="preimium_text">
              <img src={IMAGES_PATH + "/Premium.png"} />
            </div>
            <div
              className="text-center dash_headers "
              style={{ paddingTop: 30 }}
            >
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
                  className="downloadButton order_button"
                  onClick={handlePremium}
                >
                  Unlock Premium
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1">
            <div className="phone-icon_2">
              <img src={IMAGES_PATH + "/mobile_mockup 2.png"} />
            </div>
            <div className="preimium_logo">
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
