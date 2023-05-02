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
  function handleCard(index) {
    window.scrollTo(0, 0);
    // Navigate(`/card/${displayData[index].name}`);
    Navigate(`/card/${index}/${displayData[index].url_name}`);
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
      inputElement.style.backgroundImage = "none";
      inputElement.style.paddingLeft = "20px";
    } else {
      inputElement.style.backgroundImage = `url('/Images/HomeSecond/_Compound Path_.png')`;
      inputElement.style.backgroundPosition = "left 10px center";
      inputElement.style.backgroundRepeat = "no-repeat";
      inputElement.style.paddingLeft = "20px";
    }
  }

  // search input

  const [query, setQuery] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(-1);

  const filteredData = Data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  // const selectedData = selectedIdx !== -1 ? Data[selectedIdx] : null;

  const suggestion =
    query.length > 0 ? (
      <div className="map_for_sarch">
        {filteredData.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCard(index)}
            className={index === selectedIdx ? "selected" : ""}
          >
            {item.main_head}
          </div>
        ))}
      </div>
    ) : null;

  // const suggestion =
  //   query.length > 0 ? (
  //     <div className="map_for_sarch">
  //       {filteredData.map((item, index) => {
  //         const words = item.main_head.split(" ");
  //         return (
  //           <div
  //             key={index}
  //             onClick={() => handleCard(index)}
  //             className={index === selectedIdx ? "selected" : ""}
  //           >
  //             {words.map((word, i) => {
  //               const lowerCaseWord = word.toLowerCase();
  //               if (lowerCaseWord.includes(query.toLowerCase())) {
  //                 const startIndex = lowerCaseWord.indexOf(query.toLowerCase());
  //                 const endIndex = startIndex + query.length;
  //                 const match = word.substring(startIndex, endIndex);
  //                 return (
  //                   <span key={i} className="match">
  //                     {match}
  //                   </span>
  //                 );
  //               } else {
  //                 return <span key={i}>{word}</span>;
  //               }
  //             })}
  //           </div>
  //         );
  //       })}
  //     </div>
  //   ) : null;

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
      <div className="container p-5 mb-5">
        <div className="col-lg-12 row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 blogs_text_input">
            <div className="blogs-text m-5">
              <h1>Blogs</h1>
              <div
                className="input_responsive"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSelectedIdx(-1);
                }}
              >
                <input
                  type="text"
                  placeholder="     Search"
                  className="controlss form-control"
                  style={{
                    backgroundImage: `url('/Images/HomeSecond/_Compound Path_.png')`,
                    backgroundPosition: "left 9px center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "15px",
                  }}
                  id="searchInput"
                  onInput={handleInput}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              {suggestion}
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
        <div className="main_handle">
          {displayData.map((Data, index) => (
            <div
              key={index}
              className="card all_card_blogs"
              onClick={() => handleCard(index)}
            >
              <img src={Data.imgSrc} />
              <div>
                <span className="pt-0 pb-0 ">{Data.date}</span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "5px",
                  }}
                >
                  <p className="card_head_text p-0">{Data.text}</p>
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
        {/* <div>{Data.paragraph}</div> */}
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
