import React from "react";
import "../../assets/css/ContectUS.css";
import "../../assets/css/Slider.css";
import { IMAGES_PATH } from "../../Constants/ImagesConst";
import { Helmet } from "react-helmet";

const Career = () => {
  return (
    <>
      <Helmet>
        <title>
          Join the DashBack Team | Explore Exciting Career Opportunities Today
        </title>
        <meta
          name="description"
          content="Join the DashBack team and help us revolutionize the world of cashback and rewards! Our growing company is seeking talented individuals to join our team and drive innovation. Explore our career opportunities now and take the first step towards a rewarding career with DashBack."
        />
      </Helmet>
      <div className="container">
        <div className="contect-text text-center">
          <h1>Careers</h1>
          <p>
            At DashBack, we are constantly on the lookout for new talent to
            become a part of our team. If you’d like to join us in
            revolutionizing the Indian digital payments market, drop us your
            résumé below.
          </p>
        </div>
        <div className="col-lg-12 mb-5  row">
          <div className="col-lg-12 mb-5  row">
            <div className="col-lg-3"></div>
            <div
              className="col-lg-6   lable-text shadow"
              style={{
                paddingBottom: 25,
                paddingTop: 15,
                paddingLeft: 30,
                paddingRight: 30,
              }}
            >
              <div className="Form-text_head">
                <h1>Details</h1>
              </div>
              <div className="col-lg-12 row ">
                <div className="col-lg-6 mt-4" style={{}}>
                  <label>
                    Name<span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="form-control "
                  />
                </div>
                <div className=" col-lg-6 mt-4 " style={{}}>
                  <label>
                    Contact no<span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your contact number"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-8 mt-4 ">
                <label>
                  Email<span>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control"
                />
              </div>
              {/* <div className="col-lg-6 mt-4">
                <label>
                  Subject<span>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Add subject"
                  className="form-control"
                />
              </div> */}
              <div className="col-lg-6 mt-4">
                <label>
                  Upload file<span>*</span>
                </label>
                <div class="file file--upload">
                  <label for="file " className="UploadFilr">
                    Upload
                    <img
                      src={IMAGES_PATH + "/Vector (3).png"}
                      class="material-icons"
                    />
                  </label>
                  <input id="file" type="file" className="form-control" />
                </div>
              </div>
              <div className="col-lg-12 mt-4">
                <label>
                  Message<span>*</span>
                </label>
                <textarea
                  type="email"
                  placeholder="Type your message..."
                  className="form-control"
                />
              </div>
              <div className="col-lg-12 contect_button mt-4">
                <button className="">Send</button>
              </div>
            </div>

            <div className="col-lg-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
