import React from "react";
import "../../assets/css/Footer.css";
import { IMAGES_PATH_FOOTER } from "../../Constants/ImagesConst";
import { animateScroll as scroll } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const Navigate = useNavigate();
  function handleContect() {
    window.scrollTo(0, 0);
    Navigate("./contact_us");
  }
  function handleCareer() {
    window.scrollTo(0, 0);
    Navigate("/career");
  }
  function handlePrivancy() {
    window.scrollTo(0, 0);
    Navigate("/privacy_policy");
  }
  function handleTerms() {
    window.scrollTo(0, 0);
    Navigate("/terms_condition");
  }
  function handleAbout() {
    window.scrollTo(0, 0);
    Navigate("/about_us");
  }
  function handleTutorial() {
    window.scrollTo(0, 0);
    Navigate("/tutorial");
  }
  function handleBlogs() {
    window.scrollTo(0, 0);
    Navigate("/blog");
  }
  function handleHome() {
    window.scrollTo(0, 0);
    Navigate("/");
  }

  function handlepartners() {
    window.scrollTo(0, 0);
    Navigate("/our_partners");
  }
  return (
    <>
      <div className="container_footer ">
        <div className="lineWidth"></div>
        <div className="row">
          <div className="col-md-6 order-md-1">
            <div className="FooterHeading">
              <h2 className="FooterHeading_h2">Subscribe to our newsletter</h2>
              <p className="FooterHeading_h2">
                Stay up to date with the latest news, announcements, and
                articles.
              </p>
            </div>
          </div>
          <div className="col-md-6 order-md-2 ">
            <div className="row flex-column flex-sm-row rowa">
              <div className="col-sm-8 order-1 order-sm-1 subscribe_btns ">
                <input
                  type="text"
                  className=" form-controls"
                  placeholder="Enter your email"
                />
              </div>
              <div className="col-sm-4 subscribe_btns mt-3 mt-sm-0 order-1 order-sm-2">
                <button className=" subscribe btn-block">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        {/* detail start  */}
        <div className="col-lg-12 detsilsFooter row pt-5">
          <div className="col-lg-3">
            <div className="fOOTER_LOGO" onClick={handleHome}>
              <img
                src={IMAGES_PATH_FOOTER + "/DB_LOGO 1.png"}
                style={{ width: "25%" }}
              />
              <span>DASHBACK</span>
            </div>
          </div>
          <div className="col-lg-9">
            <div className=" fotter_detailsss">
              <div className="">
                <h3>Company</h3>
                <p onClick={handleAbout}>About Us</p>
                <p onClick={handlepartners}>Our Partners</p>
                <p onClick={handleContect}>Contact Us</p>
              </div>
              <div className="">
                <h3>Tools</h3>
                <p>Cashback Calculator</p>
                <p>Prosperity Plans</p>
              </div>
              <div className="">
                <h3>Resources</h3>
                <p onClick={handleCareer}>Careers</p>
                <p onClick={handleBlogs}>Blog</p>
                <p onClick={handleTutorial}>Tutorials</p>
                {/* <p to="/#blogs">FAQs</p> */}
                <p>FAQs</p>
              </div>
              <div className="">
                <h3>Legal</h3>
                <p onClick={handleTerms}> Terms & Conditions</p>
                <p onClick={handlePrivancy}>Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lineWidth"></div>
        <div className="d-flex  justify-content-between  mt-0 footer_iconssss">
          <div className="d-flex text-center Footer_bottom ">
            <div className="footer_responsive">
              <img src={IMAGES_PATH_FOOTER + "/Group.png"} />
              <span>HardCipher Pvt. Ltd. 2020-23, </span>
              <div>
                <p className="ps-1"> All Rights Reserved</p>
              </div>
            </div>
          </div>
          <div className="social_medai m-0">
            <span>
              <img src={IMAGES_PATH_FOOTER + "/Vector (3).png"} />
            </span>
            <span>
              <img src={IMAGES_PATH_FOOTER + "/icons8-linkedin 1.png"} />
            </span>
            <span>
              <img src={IMAGES_PATH_FOOTER + "/icons8-facebook 1.png"} />
            </span>
            <span>
              <img src={IMAGES_PATH_FOOTER + "/icons8-instagram 1.png"} />
            </span>
            <span>
              <img src={IMAGES_PATH_FOOTER + "/icons8-twitter 1.png"} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
