import React from "react";
import "../../assets/css/ContectUS.css";
import { Helmet } from "react-helmet";
const ContectUS = () => {
  return (
    <>
      <Helmet>
        <title>
          Contact DashBack - Your Ultimate Cashback App Customer Support Team
        </title>
        <meta
          name="description"
          content="Need help or have a question about DashBack? Contact us today for quick and reliable support! Our friendly team is always here to assist you with any inquiries about our top-rated cashback app. Don't hesitate - get in touch now!"
        />
      </Helmet>
      <div className="container_contact">
        <div className="contect-text text-center">
          <h1>Let’s have a talk!</h1>
          <p>
            Reach out to us if you have questions or queries. We’d love to hear
            from you.
          </p>
        </div>
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
                  Contact no.<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder=" Add your contact number"
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
            <div className="col-lg-6 mt-4">
              <label>
                Subject<span>*</span>
              </label>
              <input
                type="email"
                placeholder="Add subject"
                className="form-control"
              />
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
    </>
  );
};

export default ContectUS;
