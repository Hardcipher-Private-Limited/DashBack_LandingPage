import React from "react";
import "../../assets/css/Premium.css";
import { IMAGES_PATH_DIGITAL_PAYMENT } from "../../Constants/ImagesConst";
import { Helmet } from "react-helmet";

const PremiumPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Unlock Premium Benefits with DashBack | Get Even More Cashback and
          Avail of Investment Opportunities
        </title>
        <meta
          name="description"
          content="Upgrade to DashBack Premium and start earning even more cashback. With DashBack Premium, you'll maximize your savings like never before. Don't wait - unlock premium now!
            "
        />
      </Helmet>
      <div className="container_premium">
        <div className="premium_header text-center">
          <h1>More benefits, more rewards</h1>
        </div>
        <div className="d-flex justify-content-center">
          <img
            src={IMAGES_PATH_DIGITAL_PAYMENT + "/Group.png"}
            style={{ width: "75%" }}
          />
        </div>
        <div className="col-lg-12 row text-center mt-5">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 ">
            <div className="premium_texts ">
              Avail of additional benefits and unlock more features by signing
              up for the DashBack Premium Membership.
            </div>
            <div className="premium_liness m-4">Extra perks, extra fast.</div>
            <div className="button_premimum">
              <button>Become a Premium Member</button>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </>
  );
};

export default PremiumPage;
