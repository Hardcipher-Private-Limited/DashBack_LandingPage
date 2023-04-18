import React from "react";
import "../../assets/css/Premium.css";
import { IMAGES_PATH_DIGITAL_PAYMENT } from "../../Constants/ImagesConst";

const PremiumPage = () => {
  return (
    <>
      <div className="container">
        <div className="premium_header text-center">
          <h1>More benefits, more rewards</h1>
        </div>
        <div>
          <img
            src={IMAGES_PATH_DIGITAL_PAYMENT + "/Group 978.png"}
            style={{ width: "100%", padding: 20 }}
          />
        </div>
        <div className="col-lg-12 row text-center">
          <div className="col-lg-1"></div>
          <div className="col-lg-10 premium_texts ">
            Avail of additional benefits and unlock more features by signing up
            for the DashBack Premium Membership.
          </div>
          <div className="premium_text_two">Extra cashback, extra fast.</div>
          <div className="premium_lines">
            1. Cashback-20% extra on every transaction.
          </div>
          <div className="premium_lines">
            2.First wallet recharge 100% cashback.
          </div>
          <div className="premium_lines">3.Avail of prosperity plans.</div>
          <div className="premium_lines">
            4.Instant withdrawals with one time charge
          </div>
          <div className="premium_lines">5.Instantly usable cashback.</div>
          <div className="premium_last_line  ">Prosperity Plans:</div>
          <div className="premium_last_line">
            Earn a passive income of up to 24% pa through our Prosperity Plans,
            exclusively available only to Premium Members
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumPage;
