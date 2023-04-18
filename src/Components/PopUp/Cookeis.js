import React from "react";
import "../../assets/css/DownloadPopup.css";
import {
  IMAGES_PATH_DOWNLOAD,
  IMAGES_PATH_POPUP,
} from "../../Constants/ImagesConst";
const Cookeis = ({ hideModal }) => {
  return (
    <>
      <div className="modal-wrapper">
        <div
          className="modalBackdrop"
          // onClick={() => setOpenModal(!openModal)}
        />
        <div className="modal-box">
          <div className="cancle">
            <span>
              <img
                src={IMAGES_PATH_POPUP + "/Cancle.png"}
                onClick={() => hideModal()}
              />
            </span>
          </div>
          <div className="moadl-content ">
            <div className="popup_logo">
              <img src={IMAGES_PATH_DOWNLOAD + "/DB_LOGO 1.PNG"} />
            </div>
            <h1 className="pt-4">We value your privacy</h1>
            <div className="mt-4">
              <p>
                Lorem ipsum dolor sit amet consectetur. Vulputate dui at nulla
                mattis tellus tempor pretium nunc. Arcu nisl aenean congue
                phasellus egestas.Lorem ipsum dolor sit amet consectetur.
                Vulputate dui at nulla mattis tellus tempor pretium nunc. Arcu
                nisl aenean congue phasellus egestas.Lorem ipsum dolor sit amet
                consectetur. Vulputate dui at nulla mattis tellus tempor pretium
                nunc. Arcu nisl aenean congue phasellus egestas*
              </p>
            </div>
            <div className="">
              <button
                className=" m-4 Accpect_all"
                style={{ width: 450, marginLeft: 0 }}
                onClick={() => hideModal()}
              >
                Accept all
              </button>
            </div>
            <div className="">
              <button
                className="  m-1 reject_button"
                style={{ width: 450, marginLeft: 0 }}
                onClick={() => hideModal()}
              >
                Reject all
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cookeis;
