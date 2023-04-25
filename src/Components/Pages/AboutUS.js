import React from "react";
import NavBar from "./NavBar";
import "../../assets/css/AboutUs.css";
import { IMAGES_PATH_DIGITAL_PAYMENT } from "../../Constants/ImagesConst";
import { Helmet } from "react-helmet";

const AboutUS = () => {
  return (
    <>
      <Helmet>
        <title>
          Learn About DashBack - Your Go-To Destination for Cashback and Savings
        </title>
        <meta
          name="description"
          content="Learn more about DashBack - the top-rated cashback app that helps you save money and earn rewards while you shop! Our mission is to help consumers make smarter financial decisions and build wealth through cashback, and exclusive investment opportunities. Discover the story behind our app and get started with DashBack today."
        />
      </Helmet>
      <div className="container ">
        <div className="AboutUs_header">About Us</div>
        <div className="About_text">
          DashBack is a cashback app designed to help shoppers save money on
          their everyday expenditures. With DashBack, users earn cashback
          rewards on every financial transaction made at various retailers, both
          online and offline.
        </div>
        <div className="about-img mt-4 text-center ">
          <img
            src={IMAGES_PATH_DIGITAL_PAYMENT + "/GRAPHIC 1.png"}
            className="img_"
          />
        </div>
        <div className="about_read mt-5">
          In addition to cashback rewards, we offer a variety of products
          designed to help you save money, including our very own investment
          plans.
        </div>
        <div className="about_read">
          Apart from aiding in growing your savings, we're committed to
          providing you with the best possible user experience. Our designers,
          developers, and marketers constantly work behind the scenes to improve
          DashBack, and our customer support team is always available to assist
          you with any questions or concerns.
        </div>
        <div className="about_read">At DashBack, we take care of our own.</div>
        <div className="about_read">
          So, why wait? Download DashBack today and start filling your dash with
          real, usable cash.
        </div>
        <div className="AboutUs_header">Our Story</div>
        <div className="about_read">
          Three years ago, DashBack began as a third-party tie-up for those who
          were looking to build for themselves a comfortable nest egg by
          investing in the market via DEMAT accounts. Working as a facilitator
          to help open DEMAT accounts, we at DashBack enjoyed high commissions
          and re-distributed those commissions amongst our customers as
          cashback.
        </div>
        <div className="about_read">
          We established DashBack with one mission and one mission only- to help
          our customers save and earn more by giving them real, usable cashback
          as a reward for allowing us to invest their money for them.  Unlike
          our competitors, we kept only a sliver of these commissions for
          ourselves to help keep our lights on.
        </div>
        <div className="about_read">
          When Covid struck and markets all over the world took a hit, we
          started to feel the brunt of it much like every other business.
        </div>
        <div className="about_read">
          The lockdowns gave us time to think. And boy did we do some thinking.
          People lost their jobs, inflation grew steadily, and for most, it was
          becoming difficult to manage day-to-day expenses.
          <br /> So, we did what we knew (and still know) how to do best- we
          figured out more ways to give cash back to those who earned it in the
          first place. 
        </div>
        <div className="about_read">
          Thus, the all-new DashBack was born. We now offer cashback on every
          transaction conducted on our app, be it a bill payment, a purchase, or
          even an investment. Every drop counts, and a decrease in expenditure
          means our customers can spend that “extra” cash where they’d like. 
        </div>
        <div className="about_last_line">
          We are committed to providing easier eCommerce, transparent cashback,
          and lucrative investment options to our customers.
        </div>
      </div>
    </>
  );
};

export default AboutUS;
