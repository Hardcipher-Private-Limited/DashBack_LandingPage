import React from "react";
import "../../assets/css/DownloadPopup.css";
import { IMAGES_PATH_POPUP } from "../../Constants/ImagesConst";
const DowloadTheApp = ({ hideModal }) => {
  return (
    <>
      <div className="modal-wrapper" onClick={() => hideModal()}>
        <div className="modalBackdrop" />
        <div className="modal-box">
          <div className="cancle">
            <span>
              <img
                src={IMAGES_PATH_POPUP + "/Cancle.png"}
                onClick={() => hideModal()}
              />
            </span>
          </div>
          <div className="moadl-content">
            <h1>Enter your phone number to receive the link via SMS</h1>
            <div className="mt-4 INputs_responsive">
              <input
                type="text"
                placeholder="Enter Your NUmber"
                className="form-control"
              />
            </div>
            <div className="Send_button">
              <button className="btn bg-dark text-white m-4">Send</button>
            </div>
            <div className="logo">
              <span>
                <img src={IMAGES_PATH_POPUP + "/apple 1.png"} />
              </span>
              <span>
                <img src={IMAGES_PATH_POPUP + "/Vector.png"} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(DowloadTheApp);
