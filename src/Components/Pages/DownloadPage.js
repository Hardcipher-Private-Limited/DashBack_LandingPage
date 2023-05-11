import React, { useState, useEffect } from "react";
import "../../assets/css/Download.css";
import { IMAGES_PATH_DOWNLOAD } from "../../Constants/ImagesConst";
import DowloadTheApp from "../PopUp/DowloadTheApp";
import { Helmet } from "react-helmet";

const DownloadPage = () => {
  const [displayModal, setDisplayModal] = useState(true);
  const hideModal = () => {
    setDisplayModal(false);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayModal(false);
    }, 30000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Helmet>
        <title>
          Title - Get the DashBack App - Start Earning Cashback and Saving Money
          Today!
        </title>
        <meta
          name="description"
          content="Get cashback on all your purchases with our easy-to-use app. Shop at your favorite stores and earn real cashback. Download our app today."
        />
      </Helmet>
      {displayModal && <DowloadTheApp hideModal={hideModal} />}
      <div className="container_dowloadPage pt-5" style={{ marginBottom: 150 }}>
        <div className="col-lg-12 row ">
          <div
            className="col-lg-6 order_of_left text-center "
            style={{ paddingLeft: 80, paddingRight: 100 }}
          >
            <div className="dash_with_text">
              <div className="text_section">
                <h1>Fill Your Dash With Cash</h1>
                <p>
                  Pay your bills, get access to exclusive products and
                  profitable financial solutions. Avail of real cashback on
                  every transaction.
                </p>
              </div>
              <div className="logo_play_store order____">
                <span>
                  <img
                    src={
                      IMAGES_PATH_DOWNLOAD + "/app-store-png-logo-33116 1.png"
                    }
                  />
                </span>
                <span>
                  <img
                    src={
                      IMAGES_PATH_DOWNLOAD + "/google-play-png-logo-3799 1.png"
                    }
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order_of_right">
            <div className="playstore_mobile">
              <img src={IMAGES_PATH_DOWNLOAD + "/Group 948.png"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadPage;
