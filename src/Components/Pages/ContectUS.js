import React from "react";
import "../../assets/css/ContectUS.css";
const ContectUS = () => {
  return (
    <>
      <div className="container">
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
                  placeholder="Your Name"
                  className="form-control "
                />
              </div>
              <div className=" col-lg-6 mt-4 " style={{}}>
                <label>
                  Contect No.<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
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
                placeholder="Enter Your Email"
                className="form-control"
              />
            </div>
            <div className="col-lg-6 mt-4">
              <label>
                Subject<span>*</span>
              </label>
              <input
                type="email"
                placeholder="Subject"
                className="form-control"
              />
            </div>
            <div className="col-lg-12 mt-4">
              <label>
                Message<span>*</span>
              </label>
              <textarea
                type="email"
                placeholder="Subject"
                className="form-control"
              />
            </div>
            <div className="col-lg-12 contect_button mt-4">
              <button className="">send</button>
            </div>
          </div>

          <div className="col-lg-3"></div>
        </div>
      </div>
    </>
  );
};

export default ContectUS;
