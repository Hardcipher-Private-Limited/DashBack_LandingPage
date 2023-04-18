import React, { useState } from "react";
import { IMAGES_PATHTWO, IMAGES_PATH } from "../../Constants/ImagesConst";
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
          slidesToShow: 2,
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

  return (
    <>
      <div className="background_explor  p-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 Left_row">
              <div className="text_right ">
                <img src={IMAGES_PATHTWO + "/Shopping online.png"} />
              </div>
            </div>
            <div className="col-lg-6 Right_row ">
              <div className="text_right">
                <div className="postion">
                  <div className="position_adjust">
                    <h1>We offer cashback on every transaction</h1>
                    <button className="botton_Explore">Explore</button>
                  </div>
                  <img src={IMAGES_PATHTWO + "/transaction_logo.png"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blogs start  */}
      <div className="container blogs">
        <h1>Blogs</h1>
        <div className="col-lg-12 row flex_wrap_section">
          <div className="col-lg-3 ">
            <div class="cards">
              <img
                class="card-img-top"
                src={IMAGES_PATHTWO + "/Rectangle22.png"}
                alt="Card image cap"
              />
              <div class="card-body mt-1 cardbody">
                <h5 class="card-title ">Lorem ipsum</h5>
                <p className="dateofCard">January 9, 2021</p>
                <p class="card-text text-muted textss">
                  Lorem ipsum dolor sit amet consectetur. Sit nisi et curabitur
                  amet sit bibendum. Nulla eget nibh donec integer viverra
                  sapien pretium porta in. Mi adipiscing felis mattis ipsum
                  molestie dolor. Ut tristique justo sit morbi et tincidunt vel
                  gravida nisl. Lorem ipsum dolor sit amet consectetur. Sit nisi
                  et curabitur amet sit bibendum. Nulla eget nib.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div class="cards middle_card">
              <img
                class="card-img-top"
                src={IMAGES_PATHTWO + "/Rectangle 20.png"}
                alt="Card image cap"
              />
              <div class="card-body mt-1 cardbody">
                <h5 class="card-title ">Lorem ipsum</h5>
                <p className="dateofCard">January 9, 2021</p>
                <p class="card-text text-muted textss">
                  Lorem ipsum dolor sit amet consectetur. Sit nisi et curabitur
                  amet sit bibendum. Nulla eget nibh donec integer viverra
                  sapien pretium porta in. Mi adipiscing felis mattis ipsum
                  molestie dolor. Ut tristique justo sit morbi et tincidunt vel
                  gravida nisl. Lorem ipsum dolor sit amet consectetur. Sit nisi
                  et curabitur amet sit bibendum. Nulla eget nib amet sit
                  bibendum. Nulla eget nib.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div class="cards">
              <img
                class="card-img-top"
                src={IMAGES_PATHTWO + "/Rectangle 23.png"}
                alt="Card image cap"
              />
              <div class="card-body mt-1 cardbody">
                <h5 class="card-title ">Lorem ipsum</h5>
                <p className="dateofCard">January 9, 2021</p>
                <p class="card-text text-muted textss">
                  Lorem ipsum dolor sit amet consectetur. Sit nisi et curabitur
                  amet sit bibendum. Nulla eget nibh donec integer viverra
                  sapien pretium porta in. Mi adipiscing felis mattis ipsum
                  molestie dolor. Ut tristique justo sit morbi et tincidunt vel
                  gravida nisl. Lorem ipsum dolor sit amet consectetur. Sit nisi
                  et curabitur amet sit bibendum. Nulla eget nib.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <button className="ReadButton" onClick={handleBlogs}>
              Read more
              <img
                src={IMAGES_PATHTWO + "/Vector.png"}
                style={{ width: 8, height: 12, marginLeft: 5 }}
              />
            </button>
          </div>
        </div>
      </div>{" "}
      {/* what our clint say */}
      <div className="container mb-5">
        <div className="clint_section">
          <div className="Clint_heading">What Our Clients Say</div>
        </div>
        <div class="container">
          <div class="row  row-cols-md-12">
            <Slider {...settings}>
              <div>
                <div class="col mb-4">
                  <div class="card" style={{ width: "100%" }}>
                    <div className="main__card  pt-4 ps-5">
                      <img
                        class="card-img-top"
                        src={IMAGES_PATHTWO + "/Ellipse 29.png"}
                        style={{ width: "20%" }}
                        alt="Card image cap"
                      />
                      <div className="card_name ps-3">
                        <span>Anmol</span>
                        <p className="card_country">India</p>
                      </div>
                    </div>
                    <div class="card-body ps-5 pe-5">
                      <p class="card-text">
                        Lorem ipsum dolor sit amet consectetur. Sit nisi et
                        curabitur amet sit bibendum. Nulla eget nibh donec
                        integer viverra sapien pretium porta in. Mi adipiscing
                        felis mattis ipsum molestie dolor. Ut tristique justo
                        sit morbi et tincidunt vel gravida nisl. Lorem ipsum
                        dolor sit amet consectetur. Sit nisi et curabitur amet
                        sit bibendum. Nulla eget nib.
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
                {/* </Slider> */}
                {/* <Slider {...settings}> */}
                <div class="col mb-4">
                  <div class="card shadow" style={{ width: "100%" }}>
                    <div className="d-flex pt-4 ps-5">
                      <img
                        class="card-img-top"
                        src={IMAGES_PATHTWO + "/Ellipse 29.png"}
                        style={{ width: "20%" }}
                        alt="Card image cap"
                      />
                      <div className="card_name ps-3">
                        <span>Anmol</span>
                        <p className="card_country">India</p>
                      </div>
                    </div>
                    <div class="card-body ps-5 pe-5">
                      <p class="card-text">
                        Lorem ipsum dolor sit amet consectetur. Sit nisi et
                        curabitur amet sit bibendum. Nulla eget nibh donec
                        integer viverra sapien pretium porta in. Mi adipiscing
                        felis mattis ipsum molestie dolor. Ut tristique justo
                        sit morbi et tincidunt vel gravida nisl. Lorem ipsum
                        dolor sit amet consectetur. Sit nisi et curabitur amet
                        sit bibendum. Nulla eget nib.
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
              {/* </Slider> */}
              {/* <Slider {...settings}> */}
              <div>
                <div class="col mb-4">
                  <div class="card" style={{ width: "100%" }}>
                    <div className="d-flex pt-4 ps-5">
                      <img
                        class="card-img-top"
                        src={IMAGES_PATHTWO + "/Ellipse 29.png"}
                        style={{ width: "20%" }}
                        alt="Card image cap"
                      />
                      <div className="card_name ps-3">
                        <span>Anmol</span>
                        <p className="card_country">India</p>
                      </div>
                    </div>
                    <div class="card-body ps-5 pe-5">
                      <p class="card-text">
                        Lorem ipsum dolor sit amet consectetur. Sit nisi et
                        curabitur amet sit bibendum. Nulla eget nibh donec
                        integer viverra sapien pretium porta in. Mi adipiscing
                        felis mattis ipsum molestie dolor. Ut tristique justo
                        sit morbi et tincidunt vel gravida nisl. Lorem ipsum
                        dolor sit amet consectetur. Sit nisi et curabitur amet
                        sit bibendum. Nulla eget nib.
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
          <input type="text" placeholder="search" className="control" />
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
                Any person residing in India can use DashBack. Some of its
                features will be available only to those who complete their KYC.
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
                Any person residing in India can use DashBack. Some of its
                features will be available only to those who complete their KYC.
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
                Any person residing in India can use DashBack. Some of its
                features will be available only to those who complete their KYC.
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
                Any person residing in India can use DashBack. Some of its
                features will be available only to those who complete their KYC.
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
