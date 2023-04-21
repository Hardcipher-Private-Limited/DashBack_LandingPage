import React from "react";
import NavBar from "./NavBar";
import "../../assets/css/ContectUS.css";
import { IMAGES_PATHTWO, IMAGES_PATH_BLOGS } from "../../Constants/ImagesConst";
import { Helmet } from "react-helmet";

const BlogsPage = () => {
  return (
    <>
      <Helmet>
        <title>
          DashBack Blog | Expert Tips and Insights for Saving Money and Earning
          Cashback
        </title>
        <meta
          name="description"
          content="Stay up-to-date with the latest trends in saving money and earning cashback with DashBack's insightful and informative blogs! Our top-rated app offers exclusive cashback at hundreds of stores, and our blogs provide tips and tricks to help you get the most out of your earnings. Check out our blogs now."
        />
      </Helmet>
      <div className="container p-5 mb-5">
        <div className="col-lg-12 row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 blogs_text_input">
            <div className="blogs-text m-5">
              <h1>Blogs</h1>
              <div className="input_responsive">
                <input
                  type="search"
                  placeholder="Serach"
                  className="form-control controlss"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
        <div className="col-lg-12 row">
          <div className="col-lg-12">
            <span>
              <img
                src={IMAGES_PATH_BLOGS + "/Group 106.png"}
                style={{ width: "100%" }}
              />
            </span>
          </div>

          <div
            class="container-fluid mt-3"
            style={{
              // width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "center",
                // alignItems: "center",
                flexWrap: "wrap",
                gap: "0px",
              }}
            >
              <div class="col-lg-4 col-6 three_card mt-0">
                <div class="card mx-auto">
                  <img
                    src={IMAGES_PATHTWO + "/Rectangle22.png"}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body ps-0">
                    <div className="blog_text_head  d-flex justify-content-between">
                      Digital Payment
                      <span>
                        <img
                          src={IMAGES_PATH_BLOGS + "/Line 4.png"}
                          className="arrow_img"
                        />
                      </span>
                    </div>
                    {/* <p>January 9, 2021</p> */}
                    <p class="card-text textssssss">
                      In recent years, digital payment options have become
                      increasingly popular in India, with many providers
                      offering users a variety of services. In this article
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 mt-0  three_card ">
                <div class="card mx-auto">
                  <img
                    src={IMAGES_PATHTWO + "/Rectangle22.png"}
                    class="card-img-top middle_img"
                    alt="..."
                  />
                  <div class="card-body ps-0  ">
                    <div className="blog_text_head d-flex justify-content-between">
                      E Commerce
                      <span>
                        <img
                          src={IMAGES_PATH_BLOGS + "/Line 4.png"}
                          className="arrow_img"
                        />
                      </span>
                    </div>
                    {/* <p>January 9, 2021</p> */}
                    <p class="card-text textssssss">
                      In today's digital age, eCommerce has become an
                      increasingly popular way for businesses to reach a wider
                      audience and boost sales. However
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 three_card ">
                <div class="card mx-auto">
                  <img
                    src={IMAGES_PATHTWO + "/Rectangle 23.png"}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body ps-0">
                    <div className="blog_text_head  d-flex justify-content-between">
                      Investing
                      <span>
                        <img
                          src={IMAGES_PATH_BLOGS + "/Line 4.png"}
                          className="arrow_img"
                        />
                      </span>
                    </div>
                    {/* <p>January 9, 2021</p> */}
                    <p class="card-text textssssss">
                      Investing some of your earnings is a crucial aspect of
                      achieving financial success. However
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="Small_card">
            <div className=" col-lg-4 col-md-4 col-sm-4 col-12  ">
              <div class="cardss">
                <img
                  class="card-img-top"
                  src={IMAGES_PATH_BLOGS + "/Rectangle 38.png"}
                  alt="Card image cap"
                />
                <div class="card-body carddys">
                  <p className="dateofCards">January 9, 2021</p>
                  <div className="d-flex justify-content-between">
                    <h5 class="card-title ">Lorem ipsum</h5>
                    <span>
                      <img
                        src={IMAGES_PATH_BLOGS + "/Line 4.png"}
                        className="arrow_img"
                      />
                    </span>
                  </div>
                  <p class="card-text textsss">
                    Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet
                    facilisi neque aliquam quis enim egestas gravida.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div class="cardss">
                <img
                  class="card-img-top"
                  src={IMAGES_PATH_BLOGS + "/Rectangle 38.png"}
                  alt="Card image cap"
                />
                <div class="card-body cardbodys">
                  <p className="dateofCards">January 9, 2021</p>
                  <div className="d-flex justify-content-between">
                    <h5 class="card-title ">Lorem ipsum</h5>
                    <span>
                      <img
                        src={IMAGES_PATH_BLOGS + "/Line 4.png"}
                        className="arrow_img"
                      />
                    </span>
                  </div>
                  <p class="card-text  textsss">
                    Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet
                    facilisi neque aliquam quis enim egestas gravida.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 cards_below">
              <div class="cardss">
                <img
                  class="card-img-top"
                  src={IMAGES_PATH_BLOGS + "/Rectangle 38.png"}
                  alt="Card image cap"
                />
                <div class="card-body cardbodys">
                  <p className="dateofCards">January 9, 2021</p>
                  <div className="d-flex justify-content-between">
                    <h5 class="card-title ">Lorem ipsum</h5>
                    <span>
                      <img
                        src={IMAGES_PATH_BLOGS + "/Line 4.png"}
                        className="arrow_img"
                      />
                    </span>
                  </div>
                  <p class="card-text  textsss">
                    Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet
                    facilisi neque aliquam quis enim egestas gravida.
                  </p>
                </div>
              </div>
            </div>{" "}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
