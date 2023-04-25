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
        <img
          src={blogPostData.imgSrc}
          //   src={IMAGES_PATH_BLOGS + "/Rectangle 40 (1).png"}
          className="card_imggg"
        />
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
      <div className="d-flex" style={{ gap: "20px" }}>
        <div>
          <img
            src={IMAGES_PATH_BLOGS + "/Rectangle 361.png"}
            className="reactngle_bar"
          />
        </div>
        <div className="main_header">
          Lorem ipsum dolor sit amet consectetur. A fermentum sed lacinia cursus
          nibh enim. Amet tempus morbi quis neque quis odio in purus.
        </div>
      </div>

      <div className="pargram_head">{blogPostData.text}</div>
      <div className="all_text">{blogPostData.paragraph}</div>
      <div className="all_text">
        Lorem ipsum dolor sit amet consectetur. Aliquam magna sem dictum
        dignissim massa odio tincidunt mauris eget. Tristique arcu sodales mi
        consequat metus etiam. Sagittis est risus orci eget sodales sagittis.
        Morbi mattis lorem pellentesque nisl consequat velit interdum at lectus.
        Augue viverra convallis tortor scelerisque odio. Risus gravida dolor
        quam ut condimentum magna iaculis varius bibendum. Imperdiet eros odio
        lacinia diam sem gravida sagittis. Est molestie tempor id vel pretium.
        Aliquet sollicitudin nullam at risus amet a convallis velit.Lorem ipsum
        dolor sit amet consectetur. Aliquam magna sem dictum dignissim massa
        odio tincidunt mauris eget. Tristique arcu sodales mi consequat metus
        etiam. Sagittis est risus orci eget sodales sagittis. Morbi mattis lorem
        pellentesque nisl consequat velit interdum at lectus. Augue viverra
        convallis tortor scelerisque odio. Risus gravida dolor quam ut
        condimentum magna iaculis varius bibendum. Imperdiet eros odio lacinia
        diam sem gravida sagittis. Est molestie tempor id vel pretium. Aliquet
        sollicitudin nullam at risus amet a convallis velit.
      </div>
    </div>
  );
};

export default Card;
