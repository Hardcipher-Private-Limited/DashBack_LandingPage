import React from "react";
import "../../assets/css/DigitalPayment.css";
import { IMAGES_PATH_DIGITAL_PAYMENT } from "../../Constants/ImagesConst";
import { Helmet } from "react-helmet";

const DigitalPayment = () => {
  return (
    <>
      <Helmet>
        <title>
          DashBack | The Ultimate Digital Payments and Online Shopping Wealth
          Building Solution
        </title>
        <meta
          name="description"
          content="DashBack is the ultimate digital payment, online shopping, and wealth-building solution. Our top-rated app offers cashback at hundreds of stores and lucrative investment plans, helping you save money and build wealth while you shop. Discover the power of DashBack now!"
        />
      </Helmet>
      <div className="container mb-5">
        <div className="digital_header text-center p-5">
          <h1>Digital Payments. Online Shopping. Wealth Building</h1>
        </div>
        <div className="fill_dash_text">
          <h2>
            Fill Your Dash <br />
            With Cash<div className="line"></div>
          </h2>
        </div>
        <div className="col-lg-12 pt-4 row">
          <div className="col-lg-2">
            <div>
              <img
                src={IMAGES_PATH_DIGITAL_PAYMENT + "/Group 956.png"}
                style={{ width: "60%" }}
                className="arrow_marks d-none d-lg-block"
              />
            </div>
          </div>
          <div className="col-lg-5 " style={{ marginLeft: "0px" }}>
            <div>
              <img
                src={IMAGES_PATH_DIGITAL_PAYMENT + "/11.png"}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-lg-5 p-4">
            <div className="digital_card_text">
              <h1>Digital Payments</h1>
              <h3>Super fast, super secure.</h3>
              <p>
                State of the Art Service A cutting-edge digital payments app in
                India that allows you to send and receive money instantly with
                just a few taps on your mobile device. With a user-friendly
                interface and lightning-fast processing times, DashBack is the
                ultimate payments solution for people on the go. In addition to
                its speed and convenience, DashBack offers a unique cashback
                program that rewards you for every transaction you make. Whether
                you're buying groceries, paying bills, or shopping for a new
                outfit, DashBack gives you up to 100% of your purchase amount
                back in cash.
              </p>
              <p>
                Robust Security Protocols Your security is a top priority for
                us. At DashBack, we use advanced encryption technology to
                protect your information and ensure that all transactions are
                safe and secure.
              </p>
            </div>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-5 p-4 pt-5 padding_for_textss">
            <div className="digital_card_text ">
              <p>
                DashBack is that it is a cheaper option compared to other
                platforms. Instead of paying full price for goods and services,
                customers receive cashback for their purchases. This means that
                you can save money while still enjoying the same products and
                services.
              </p>
              <p>
                Additionally, DashBack is easy to use. You can simply download
                the app, browse the available deals and offers, buy your
                favorites through the app itself while earning real, usable
                cashback on all your transactions.
              </p>
              <p>
                DashBack is a great option for anyone looking to save money on
                their everyday purchases. With its wide range of partners and
                easy-to-use interface, it is a convenient and cost-effective way
                to shop.
              </p>
            </div>
          </div>
          <div className="col-lg-5 pt-5">
            <div>
              <img
                src={IMAGES_PATH_DIGITAL_PAYMENT + "/Online card payment.png"}
                style={{ width: "100%" }}
                // className="arrow_marks"
                className=""
              />
            </div>
          </div>
        </div>
        {/* second section start  */}
        <div
          className="col-lg-12  row section_second"
          style={{ paddingTop: 110 }}
        >
          <div className="col-lg-2">
            <div>
              <img
                src={IMAGES_PATH_DIGITAL_PAYMENT + "/Group 956 (1).png"}
                style={{ width: "60%" }}
                className="arrow_marks d-none d-lg-block"
              />
            </div>
          </div>

          <div className="col-lg-5">
            <div className="digital_card_text">
              <h1>Online Shopping</h1>
              <h3>
                Browse your favourite shopping <br />
                destinations with ease.
              </h3>
              <p>
                As an all-in-one shopping and payments platform, we have made it
                so much easier for you to shop online.
                <br />
                The seamless and secure shopping experience we offer is
                incredibly convenient for all, allowing you to browse and
                purchase products from multiple participating retailers within
                the app itself.
              </p>
              <p>
                You may choose between multiple payment options, including
                credit cards, debit cards, and your DashBack wallets. Each
                transaction is encrypted and processed securely, ensuring that
                your personal and financial information is protected.
              </p>
            </div>
          </div>
          <div className="col-lg-5 onlining_shopping">
            <div>
              <img
                src={IMAGES_PATH_DIGITAL_PAYMENT + "/12.png"}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-5 ">
            <div>
              <img
                src={
                  IMAGES_PATH_DIGITAL_PAYMENT + "/Online shopping discount.png"
                }
                style={{ width: "100%" }}
                className="arrow_marks "
              />
            </div>
          </div>
          <div className="col-lg-5 Onling_textsss">
            <div className="digital_card_text">
              <p>
                DashBack's cashback feature allows you to earn a percentage of
                your purchase amount as cashback. And yes, it is real and
                usable.
              </p>
              <p>
                In addition to our cashback offers, we also provide exclusive
                deals and discounts that are only available through the app.
                These deals are regularly updated and cover a wide range of
                products and services.
              </p>
              <p>
                Overall, DashBack is a great way for you to save money on their
                everyday purchases.
              </p>
            </div>
          </div>
        </div>
        {/* srction 3 strat  */}
        <div
          className="col-lg-12 row section_third"
          style={{ paddingTop: 110 }}
        >
          <div className="col-lg-2">
            <div>
              <img
                src={IMAGES_PATH_DIGITAL_PAYMENT + "/Group 961.png"}
                style={{ width: "60%" }}
                className="arrow_marks d-none d-lg-block"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div>
              <img
                src={IMAGES_PATH_DIGITAL_PAYMENT + "/13 1.png"}
                style={{ width: "100%" }}
                className="arrow_marks "
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="digital_card_text">
              <h1>Wealth Building</h1>
              <h3>
                Effortless savings, increased benefits. Secure your future with
                ease.
              </h3>
              <p>
                DashBack offers its Premium Members the opportunity to grow
                their savings through two investment plans. 
              </p>
              <p>
                Timed Plans: These plans are designed to provide investors with
                a guaranteed return on investment at the end of a fixed term.
                They may be suitable for investors who want a fixed return and
                are comfortable committing their funds to the plan for a
                specific period. The amount of the return is typically
                determined at the outset of the investment. These plans have a
                fixed duration or term. At DashBack, these terms are 6 months
                and 12 months. The returns are delivered in the form of cash
                that, depending on the amount, is deposited into the investor’s
                DashBack wallet or bank account.
              </p>
            </div>
          </div>

          <div className="col-lg-2 pt-5"></div>

          <div className="col-lg-5 pt-5">
            <div className="digital_card_text padding_for_texts">
              <p>
                Flexi-Term Plans: These plans are designed to provide investors
                with more flexibility and the potential for higher returns.
                Unlike Timed Plans, Flexi-Term Plans do not have a fixed
                investment term. Instead, investors are free to withdraw their
                funds at any desired point after 15 days without any penalty,
                making these plans a more flexible option for those who may need
                access to their funds in the short term.
              </p>
              <p>
                Both plans offered by DashBack are designed to help investors
                grow their wealth over time.
              </p>
              <p>
                The choice between the two types of plans will depend on the
                investor's tolerance, investment goals, and preferences.
              </p>
              <p>
                DashBack recommends that investors carefully consider their
                options and seek professional advice before making any
                investment decisions. For detailed information on these plans,
                visit
                <br />
                <b className="text-primary">Prosperity Plans T&Cs.</b>
              </p>
            </div>
          </div>
          <div className="col-lg-5 pt-5">
            <div>
              <img
                src={IMAGES_PATH_DIGITAL_PAYMENT + "/financier 1.png"}
                style={{ width: "100%" }}
                className="arrow_marks"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalPayment;
