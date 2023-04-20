import React from "react";
import NavBar from "./NavBar";
import "../../assets/css/ContectUS.css";
import { IMAGES_PATH_BLOGS } from "../../Constants/ImagesConst";
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
            <div>
              <span>
                <img
                  src={IMAGES_PATH_BLOGS + "/Group 106.png"}
                  style={{ width: "98%" }}
                />
              </span>
            </div>
          </div>
          <div className="Small_card">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
