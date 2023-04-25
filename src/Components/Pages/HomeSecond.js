import React, { useState } from "react";
import {
  IMAGES_PATHTWO,
  IMAGES_PATH,
  IMAGES_PATH_BLOGS,
} from "../../Constants/ImagesConst";
import "../../assets/css/HomeSecond.css";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./styles.css";

const HomeSecond = () => {
  const Navigate = useNavigate();
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswe2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);
  const [imgSrc, setImgSrc] = useState(IMAGES_PATHTWO + "/Group 74.png");
  const [imgSrc1, setImgSrc1] = useState(IMAGES_PATHTWO + "/Group 74.png");
  const [imgSrc2, setImgSrc2] = useState(IMAGES_PATHTWO + "/Group 74.png");
  const [imgSrc3, setImgSrc3] = useState(IMAGES_PATHTWO + "/Group 74.png");
  const [imgSrc4, setImgSrc4] = useState(IMAGES_PATHTWO + "/Group 74.png");

  const handleClick = () => {
    setShowAnswer(!showAnswer);
    setImgSrc(
      showAnswer
        ? IMAGES_PATHTWO + "/Group 74.png"
        : IMAGES_PATHTWO + "/Group 74 copy.png"
    );
  };
  const handleClick1 = () => {
    setShowAnswer1(!showAnswer1);
    setImgSrc1(
      showAnswer1
        ? IMAGES_PATHTWO + "/Group 74.png"
        : IMAGES_PATHTWO + "/Group 74 copy.png"
    );
  };
  const handleClick2 = () => {
    setShowAnswe2(!showAnswer2);
    setImgSrc2(
      showAnswer2
        ? IMAGES_PATHTWO + "/Group 74.png"
        : IMAGES_PATHTWO + "/Group 74 copy.png"
    );
  };
  const handleClick3 = () => {
    setShowAnswer3(!showAnswer3);
    setImgSrc3(
      showAnswer3
        ? IMAGES_PATHTWO + "/Group 74.png"
        : IMAGES_PATHTWO + "/Group 74 copy.png"
    );
  };
  const handleClick4 = () => {
    setShowAnswer4(!showAnswer4);
    setImgSrc4(
      showAnswer4
        ? IMAGES_PATHTWO + "/Group 74.png"
        : IMAGES_PATHTWO + "/Group 74 copy.png"
    );
  };

  function handleBlogs() {
    window.scrollTo(0, 0);
    Navigate("/blogs");
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0%",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "0%",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "0%",
        },
      },
    ],
  };

  function handleDigital() {
    window.scrollTo(0, 0);
    Navigate("/digitalPayment");
  }
  return (
    <>
      <div className="background_explor p-5">
        <div className="row row_between">
          <div className="col-lg-6  col-md-6  d-flex justify-content-center align-items-center Left_row">
            <div className="text_right ">
              <img src={IMAGES_PATHTWO + "/Shopping online.png"} />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 Right_row  Explore_section ">
            <div className=" ">
              <h1 className="expore_h1">
                We offer cashback on <br />
                every transaction.
              </h1>
              {/* <button className="botton_Explore">Explore</button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Blogs start  */}

      <div className="container">
        <div className="bolgs_text text-center">Blogs</div>
        <div className="home_blogss">
          <div className="card p-0 cardssss pb-4">
            <img src={IMAGES_PATH_BLOGS + "/Rectangle 40 (1).png"} />
            <div>
              <span className="pt-2 pb-2 p-1">Name, 23 Feb, 2023</span>
              <div
                className="p-1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "10px",
                }}
              >
                <p className="card_head_text p-0">Lorem ipsum </p>
                <p>
                  <img
                    src={IMAGES_PATH_BLOGS + "/Line 4 (1).png"}
                    style={{ width: "25px" }}
                  />
                </p>
              </div>
              <span className="p-1">
                In recent years, digital payment options have become
                increasingly popular in India, with many providers offering
                users a variety of services.
              </span>
            </div>
          </div>
          <div className="card cardssss pb-4">
            <img src={IMAGES_PATH_BLOGS + "/Rectangle 40 (1).png"} />
            <div>
              <span className="pt-2 pb-2 p-1">Name, 23 Feb, 2023</span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "10px",
                }}
              >
                <p className="card_head_text p-1">Lorem ipsum </p>
                <p>
                  <img
                    src={IMAGES_PATH_BLOGS + "/Line 4 (1).png"}
                    style={{ width: "25px" }}
                  />
                </p>
              </div>
              <span className="p-1">
                {" "}
                In recent years, digital payment options have become
                increasingly popular in India, with many providers offering
                users a variety of services.
              </span>
            </div>
          </div>
          <div className="card cardssss pb-4">
            <img src={IMAGES_PATH_BLOGS + "/Rectangle 40 (1).png"} />
            <div>
              <span className="pt-2 pb-2 p-1">Name, 23 Feb, 2023</span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "10px",
                }}
              >
                <p className="card_head_text p-1">Lorem ipsum </p>
                <p>
                  <img
                    src={IMAGES_PATH_BLOGS + "/Line 4 (1).png"}
                    style={{ width: "25px" }}
                  />
                </p>
              </div>
              <span className="p-1">
                {" "}
                In recent years, digital payment options have become
                increasingly popular in India, with many providers offering
                users a variety of services.
              </span>
            </div>
          </div>
        </div>
        <div className="text-center" style={{ margin: "90px" }}>
          <button className="ReadButton" onClick={handleBlogs}>
            Read more
            <img
              src={IMAGES_PATHTWO + "/Vector.png"}
              style={{ width: 8, height: 12, marginLeft: 5 }}
            />
          </button>
        </div>
      </div>

      {/* what our clint say */}

      <div className=" container-fluid mb-5" style={{ marginTop: "8%" }}>
        <div className="clint_section">
          <div className="Clint_heading">What Our Clients Say</div>
        </div>
        <div class="container-fluid ">
          <div
            class="row  row-cols-md-12"
            // style={{ display: "flex", gap: "20px" }}
          >
            <Slider {...settings}>
              <div>
                <div class="col mb-4 mt-1 ms-1">
                  <div class="card hover " style={{ width: "96%" }}>
                    <div className="main__card  pt-4 ps-5">
                      <img
                        class="card-img-top"
                        src={IMAGES_PATHTWO + "/Ellipse 29.png"}
                        style={{ width: "20%" }}
                        alt="Card image cap"
                      />
                      <div className="card_name ps-3">
                        <span>Akshat Aggarwal</span>
                        <p className="card_country">India</p>
                      </div>
                    </div>
                    <div class="card-body ps-5 pe-5">
                      <p class="card-text">
                        When a friend told me about DashBack and their cashback
                        reward system, I didn’t believe her. Cashback on mobile
                        recharge, online shopping, and even gas booking? It
                        sounded too good to be true. But to my surprise,
                        DashBack does exactly that. I’ve already saved so much
                        by using just DashBack rather than any other digital
                        wallet. It's safe, convenient and so rewarding.
                      </p>
                      <p class="card-text">
                        <small class="text-muted">
                          <img src={IMAGES_PATHTWO + "/Group 104 (1).png"} />
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="col mb-4 mt-1">
                  <div class="card  shadow" style={{ width: "96%" }}>
                    <div className="d-flex pt-4 ps-5">
                      <img
                        class="card-img-top"
                        src={IMAGES_PATHTWO + "/Ellipse 29.png"}
                        style={{ width: "20%" }}
                        alt="Card image cap"
                      />
                      <div className="card_name ps-3">
                        <span>Shivank Varshney</span>
                        <p className="card_country">India</p>
                      </div>
                    </div>
                    <div class="card-body ps-5 pe-5">
                      <p class="card-text">
                        I was tired of companies sending me cashback that I
                        would never be able to use. Searching for a better
                        alternative, I came across DashBack and I wasn’t
                        disappointed. Not only do I get cash back on every
                        single transaction, but I can use that cashback without
                        spending any more money. Thank you, DashBack!
                      </p>
                      <p class="card-text">
                        <small class="text-muted">
                          <img src={IMAGES_PATHTWO + "/Group 104 (1).png"} />
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="col mb-4 mt-1">
                  <div class="card hover " style={{ width: "96%" }}>
                    <div className="d-flex pt-4 ps-5">
                      <img
                        class="card-img-top"
                        src={IMAGES_PATHTWO + "/Ellipse 29.png"}
                        style={{ width: "20%" }}
                        alt="Card image cap"
                      />
                      <div className="card_name ps-3">
                        <span>Sagar Dhama</span>
                        <p className="card_country">India</p>
                      </div>
                    </div>
                    <div class="card-body ps-5 pe-5">
                      <p class="card-text">
                        DashBack is an awesome app to manage all my online
                        payment needs and even online shopping, which you don’t
                        get in most digital wallets out there. Along with
                        cashback on all possible transactions, I got to open a
                        savings account, and to my surprise, I got cashback on
                        that too. This is truly the best digital wallet out
                        there.
                      </p>
                      <p class="card-text">
                        <small class="text-muted">
                          <img src={IMAGES_PATHTWO + "/Group 104 (1).png"} />
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* Frequently Asked Questions start  */}
      <div className="container pb-5">
        <div className="Frequent_text">
          <h1>Frequently Asked Questions</h1>
          <h6>Have questions? We’re here to help.</h6>
        </div>
        <div className="text-center p-4">
          <input type="text" placeholder="Search" className="control" />
        </div>
        <div className="col-lg-12">
          <div className="Questions_text pt-2">
            <div>
              <div className="flex_direction">
                <h5>Who can use DashBack?</h5>
                <div style={{ paddingRight: 50 }} onClick={handleClick}>
                  <img src={imgSrc} />
                </div>
              </div>

              <p style={{ display: showAnswer ? "block" : "none" }}>
                Any person residing in India can use DashBack. Some of its
                features will be available only to those who complete their KYC.
              </p>
            </div>
          </div>
          <div className="Questions_text pt-2">
            <div>
              <div className="flex_direction">
                <h5>Is the cashback real?</h5>
                <div style={{ paddingRight: 50 }} onClick={handleClick1}>
                  <img src={imgSrc1} />
                </div>
              </div>
              <p style={{ display: showAnswer1 ? "block" : "none" }}>
                Unlike our competitors, DashBack offers its users real, usable
                cashback. So yes, the cashback is real.
              </p>
            </div>
          </div>

          <div className="Questions_text pt-2">
            <div>
              <div className="flex_direction">
                <h5>Who can become a Premium Member?</h5>
                <div style={{ paddingRight: 50 }} onClick={handleClick2}>
                  <img src={imgSrc2} />
                </div>
              </div>
              <p style={{ display: showAnswer2 ? "block" : "none" }}>
                Any person above the age of 18, residing in India with completed
                KYC may become a DashBack Premium Member.
              </p>
            </div>
          </div>
          <div className="Questions_text pt-2">
            <div>
              <div className="flex_direction">
                <h5>How much cashback may be attained?</h5>
                <div style={{ paddingRight: 50 }} onClick={handleClick3}>
                  <img src={imgSrc3} />
                </div>
              </div>
              <p style={{ display: showAnswer3 ? "block" : "none" }}>
                As a DashBack user, you are entitled to up to 100% cashback on
                your transactions. Pretty cool, right?
              </p>
            </div>
          </div>
          <div className="Questions_text  pt-2" style={{ border: "none" }}>
            <div>
              <div className="flex_direction">
                <h5>What type of payments can I make using DashBack?</h5>
                <div style={{ paddingRight: 50 }} onClick={handleClick4}>
                  <img src={imgSrc4} />
                </div>
              </div>
              <p style={{ display: showAnswer4 ? "block" : "none" }}>
                Bill payments, recharges, FASTag payments and so much more!
                <b className="learn_more_btn" onClick={handleDigital}>
                  Learn more here.
                </b>
              </p>
            </div>
          </div>
          <div className="Questions_text_last pt-2"></div>
        </div>
      </div>
    </>
  );
};

export default HomeSecond;
