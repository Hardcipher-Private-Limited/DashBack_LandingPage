import React, { useEffect, useState } from "react";
import "../../assets/css/DownloadPopup.css";
import {
  IMAGES_PATH_DOWNLOAD,
  IMAGES_PATH_POPUP,
} from "../../Constants/ImagesConst";
// const LeavingPopUP = ({ cancle }) => {
const LeavingPopUP = () => {
  return (
    <>
      <div
        className="modal-wrapper"
        // onClick={() => cancle()}
      >
        <div className="modalBackdrop" />
        <div className="modal-box">
          <div className="cancle">
            <span>
              <img
                src={IMAGES_PATH_POPUP + "/Cancle.png"}
                // onClick={() => cancle()}
                // onClick={handleLeaveClick}
              />
            </span>
          </div>
          <div className="moadl-content ">
            <div className="popup_logo">
              <img src={IMAGES_PATH_DOWNLOAD + "/DB_LOGO 1.png"} />
            </div>
            <h1 className="pt-3">Wait, before you go,</h1>
            <p className="newsletter_text">subscribe to our newsletter</p>
            <div className="">
              <input
                type="email"
                className="input_for_email"
                placeholder="Enter your email"
              />
            </div>
            <div class="checkBOxx ">
              <input type="checkbox" class="form-check-input" />
              <label class="form-check-label" style={{ paddingLeft: "5px" }}>
                I accept the
                <span
                  style={{ textDecoration: "underline" }}
                  className="ps-1 pe-1"
                >
                  Terms{" "}
                </span>{" "}
                &
                <span style={{ textDecoration: "underline" }} className="ps-1">
                  Conditions
                </span>
              </label>
            </div>

            <div>
              <button
                className="  m-1 Subscribe_button"
                style={{ width: 370, marginLeft: 0 }}
              >
                Subscribe
              </button>
            </div>
            <div className="no_thanks pt-2">
              <span>No thanks, I don’t want any cashback</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeavingPopUP;
