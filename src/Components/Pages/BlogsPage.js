import React, { useState } from "react";
import "../../assets/css/ContectUS.css";
import { IMAGES_PATH_BLOGS } from "../../Constants/ImagesConst";
import { Helmet } from "react-helmet";
import { Data } from "../MockData/Blogs";
import { useNavigate } from "react-router-dom";

const ITEMS_PER_PAGE = 6;
const totalPages = Math.ceil(Data.length / ITEMS_PER_PAGE);
const BlogsPage = () => {
  const Navigate = useNavigate();
  function handleCard(url_name) {
    window.scrollTo(0, 0);
    Navigate(`/blog/${Data[url_name].url_name}`);
  }
  const [currentPage, setCurrentPage] = useState(1);
  const [displayData, setDisplayData] = useState(Data.slice(0, ITEMS_PER_PAGE));

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setDisplayData(Data.slice(startIndex, endIndex));
  };

  function handleInput(e) {
    const inputElement = document.getElementById("searchInput");

    if (e.target.value.length > 0) {
      inputElement.style.backgroundImage = `url('/Images/HomeSecond/_Compound Path_.png')`;
      inputElement.style.paddingLeft = "35px";
    } else {
      inputElement.style.backgroundImage = `url('/Images/HomeSecond/_Compound Path_.png')`;
      inputElement.style.backgroundPosition = "left 10px center";
      inputElement.style.backgroundRepeat = "no-repeat";
      inputElement.style.paddingLeft = "35px";
    }
  }

  // search input

  const [selectedIdx, setSelectedIdx] = useState(-1);
  const changeData = (e) => {
    const getChangeData = e.toLowerCase();
    if (getChangeData === "") {
      setDisplayData(Data.slice(0, ITEMS_PER_PAGE));
    } else {
      const filteredData = Data.filter((ele) => {
        return ele.main_head.toLowerCase().includes(getChangeData);
      });
      setDisplayData(filteredData);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          DashBack Blog | Expert Tips and Insights for Saving Money and Earning
          Cashback
        </title>
        <meta
          name="description"
          content="Stay up-to-date with the latest trends in saving money and earning cashback with DashBack's insightful and informative blogs! Our top-rated app offers exclusive cashback at hundreds of stores, and our blogs provide tips and tricks to help you get the most out of your earnings. Check out our blogs now."
        />
      </Helmet>
      <div className="container_blogs  mb-5">
        <div className="col-lg-12 row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 blogs_text_input">
            <div className="blogs-text m-5">
              <h1>Blog</h1>
              <div
                className="input_responsive"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSelectedIdx(-1);
                }}
              >
                <input
                  type="text"
                  placeholder="Search"
                  className="controlss form-control"
                  style={{
                    backgroundImage: `url('/Images/HomeSecond/_Compound Path_.png')`,
                    backgroundPosition: "left 9px center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "15px",
                    paddingLeft: "35px",
                  }}
                  id="searchInput"
                  onInput={handleInput}
                  onChange={(e) => changeData(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
        <div className="main_handle">
          {displayData.map((Data, url_name) => (
            <div
              className="card all_card_blogs "
              onClick={() => handleCard(url_name)}
            >
              <img src={Data.imgSrc} />
              <div className="p-3">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "5px",
                  }}
                >
                  <p className="card_head_text ">{Data.main_head}</p>
                  <p>
                    <img
                      src={IMAGES_PATH_BLOGS + "/Line 4 (1).png"}
                      style={{ width: "25px" }}
                    />
                  </p>
                </div>
                <span>{Data.paragraph}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            className="page-number-button "
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default BlogsPage;
