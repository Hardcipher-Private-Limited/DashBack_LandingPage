import React, { useEffect, useState } from "react";
import "../../assets/css/DownloadPopup.css";
import {
  IMAGES_PATH_DOWNLOAD,
  IMAGES_PATH_POPUP,
} from "../../Constants/ImagesConst";
const AppDownloadPopUP = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  const hideModal = () => {
    setIsVisible(false);
  };
  return (
    <>
      {isVisible && (
        <div className="modal-wrapper" onClick={() => hideModal()}>
          <div className="modalBackdrop" />
          <div className="modal-boxs_mobile">
            <div className="cancle">
              <span>
                <img
                  src={IMAGES_PATH_POPUP + "/Cancle.png"}
                  onClick={() => hideModal()}
                />
              </span>
            </div>
            <div className="moadl-content ">
              <div className="col-md-12 pt-4 row">
                <div className="col-md-6 left_order_icon">
                  <div className="popup_phone">
                    <img src={IMAGES_PATH_DOWNLOAD + "/popup 1.png"} />
                  </div>
                </div>
                <div className="col-md-6 text-center right_order_icon ">
                  <div className="pupUP-text">
                    <h1>Download the mobile app</h1>
                    <div
                    // style={{ marginTop: 29, marginBottom: 29 }}
                    >
                      <span>
                        Pay your bills, get access to exclusive products and
                        profitable financial solutions. Avail of real cashback
                        on every transaction.
                      </span>
                    </div>
                  </div>
                  <div className="logoOfDowload">
                    <span>
                      <img
                        src={
                          IMAGES_PATH_DOWNLOAD +
                          "/app-store-png-logo-33116 1.png"
                        }
                        // style={{ width: 10 }}
                      />
                    </span>
                    <span>
                      <img
                        src={
                          IMAGES_PATH_DOWNLOAD +
                          "/google-play-png-logo-3799 1.png"
                        }
                        // style={{ width: 10 }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppDownloadPopUP;
