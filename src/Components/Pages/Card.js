import React from "react";
import { IMAGES_PATH_BLOGS } from "../../Constants/ImagesConst";
import "../../assets/css/singleCard.css";
import { useParams } from "react-router-dom";
import { Data } from "../MockData/Blogs";

const Card = () => {
  const { index } = useParams();
  const blogPostData = Data[parseInt(index)];

  return (
    <div className="container">
      <div className="text-center pt-5 ">
        <img src={blogPostData.imgSrc} className="card_imggg" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "10px",
        }}
      >
        {/* <p>04/25/2023</p> */}
        <p>{blogPostData.date}</p>
        <p style={{ display: "flex", gap: "20px" }}>
          <img
            src={IMAGES_PATH_BLOGS + "/Vector (1).png"}
            className="social_iconss"
          />
          <img
            src={IMAGES_PATH_BLOGS + "/Vector (1).png"}
            className="social_iconss"
          />
          <img
            src={IMAGES_PATH_BLOGS + "/Vector (1).png"}
            className="social_iconss"
          />
        </p>
      </div>
      <div
        className="d-flex"
        style={{
          gap: "20px",
        }}
      >
        <div>
          <img
            src={IMAGES_PATH_BLOGS + "/Rectangle 361.png"}
            className="reactngle_bar"
          />
        </div>
        <div
          className="main_header"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {blogPostData.main_head}
        </div>
      </div>

      <div className="pargram_head">{blogPostData.Introduction}</div>
      <div className="all_text">{blogPostData.Introduction_text}</div>
      <div>
        <span className="pargram_head">{blogPostData.Paytm}</span>
        <span>
          <img src={blogPostData.PaytmImg} style={{ width: "10%" }} />
        </span>
      </div>
      <div className="all_text">{blogPostData.payment_text}</div>
      <div className="">{blogPostData.payment_text1}</div>
      <div className="">{blogPostData.payment_text2}</div>
      <div className="">{blogPostData.payment_text3}</div>
      <div className="">{blogPostData.payment_text4}</div>
      <div className="">{blogPostData.payment_text5}</div>
      <div className="">{blogPostData.payment_text6}</div>
      <div className="">{blogPostData.payment_text7}</div>
      <div className="all_text">{blogPostData.phonepay_sub}</div>
      <div className="googlepay_text">{blogPostData.blogs_extra_1}</div>
      <div className="googlepay_text">{blogPostData.blogs_extra_2}</div>
      <div className="pargram_head"> {blogPostData.Advantages}</div>
      <div className="all_text">{blogPostData.Advantages_text1}</div>
      <div className="pargram_head">{blogPostData.Disadvantages}</div>
      <div className="all_text pt-0">{blogPostData.Disadvantages1}</div>
      <div>
        <span className="pargram_head">{blogPostData.phonepay}</span>
        <span>
          <img src={blogPostData.PhonepayImg} style={{ width: "10%" }} />
        </span>
      </div>

      <div className="all_text">{blogPostData.phonepay_text}</div>
      <div className="pargram_head"> {blogPostData.Advantages}</div>
      <div className="all_text pt-0">{blogPostData.Advantages_text1}</div>
      <div className="pargram_head">{blogPostData.Disadvantages}</div>
      <div className="all_text pt-0">{blogPostData.Disadvantages1}</div>

      <div className="googlepay_text">{blogPostData.GooglePay_text}</div>
      <div>
        <span className="pargram_head">{blogPostData.GooglePay}</span>
        <span>
          <img src={blogPostData.GooglePayImg} style={{ width: "10%" }} />
        </span>
      </div>
      <div className="all_text">{blogPostData.GooglePay_pargrph}</div>
      <div className="pargram_head">{blogPostData.GooglePay_Advantages}</div>
      <div className="all_text pt-0">{blogPostData.GooglePay_Advantage1}</div>
      <div className="pargram_head ">
        {blogPostData.GooglePay_Disadvantages}
      </div>
      <div className="all_text pt-0">
        {blogPostData.GooglePay_Disadvantages1}
      </div>
      <div>
        <span className="pargram_head">{blogPostData.AmazonPay}</span>
        <span>
          <img src={blogPostData.AmazonPayImg} style={{ width: "10%" }} />
        </span>
      </div>
      <div className="all_text">{blogPostData.AmazonPay_text}</div>
      <div className="pargram_head"> {blogPostData.Advantages}</div>
      <div className="all_text pt-0">{blogPostData.Advantages_text1}</div>
      <div className="pargram_head ">
        {blogPostData.GooglePay_Disadvantages}
      </div>
      <div className="all_text pt-0">
        {blogPostData.GooglePay_Disadvantages1}
      </div>
      <div
        style={{
          // display: "flex",
          alignItems: "center",
          gap: "30px",
          paddingTop: "0px",
        }}
      >
        <span className="pargram_head " style={{ float: "left" }}>
          {blogPostData.DashBack}
        </span>
        <span className="">
          <img
            src={blogPostData.DashBackImg}
            style={{ width: "10%", paddingTop: "10px", paddingLeft: "20px" }}
          />
        </span>
      </div>
      <div className="all_text">{blogPostData.DashBack_text}</div>
      <div className="all_text">{blogPostData.DashBack_text1}</div>
      <div className="pargram_head">{blogPostData.DashBack_Advantages}</div>
      <div className="all_text pt-0">{blogPostData.DashBack_Advantages1}</div>
      <div className="pargram_head">{blogPostData.DashBack_Disadvantages}</div>
      <div className="all_text pt-0">
        {blogPostData.DashBack_Disadvantages1}
      </div>
      <div className="all_text">{blogPostData.summery}</div>
      <div className="blogs3_summery">{blogPostData.blog_summery}</div>
      <div className="pargram_head">
        <span>{blogPostData.CashbackRewards}</span>
        <span>
          {" "}
          <img src={blogPostData.CashbackRewardsImg} style={{ width: "10%" }} />
        </span>
      </div>
      <div className="all_text">{blogPostData.CashbackRewards_text}</div>
      <div className="pargram_head">
        <span>{blogPostData.IncreasedSecurity}</span>
        <span>
          <img
            src={blogPostData.IncreasedSecurityImg}
            style={{ width: "10%" }}
          />
        </span>
      </div>
      <div className="all_text">{blogPostData.IncreasedSecurity_text}</div>
      <div className="pargram_head">
        <span>{blogPostData.InvestmentOptions}</span>
        <span>
          <img
            src={blogPostData.InvestmentOptionsImg}
            style={{ width: "10%" }}
          />
        </span>
      </div>
      <div className="all_text">{blogPostData.InvestmentOptions_text}</div>
      <div className="pargram_head">{blogPostData.summery_head}</div>
      {/* <div className="blogs3_summery">{blogPostData.blog_summery}</div> */}
    </div>
  );
};

export default Card;
