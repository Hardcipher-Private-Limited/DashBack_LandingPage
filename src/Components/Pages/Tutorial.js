import React from "react";
import "../../assets/css/Tutorial.css";
import { IMAGES_PATH_TUTOEIAL } from "../../Constants/ImagesConst";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Tutorial = () => {
  //   const responsive = {
  //     superLargeDesktop: {
  //       breakpoint: { max: 4000, min: 300 },
  //       items: 5,
  //     },
  //     desktop: {
  //       breakpoint: { max: 3000, min: 1024 },
  //       items: 4,
  //     },
  //     tablet: {
  //       breakpoint: { max: 1024, min: 464 },
  //       items: 2,
  //     },
  //     mobile: {
  //       breakpoint: { max: 464, min: 0 },
  //       items: 2,
  //     },
  //   };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 300 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div>
        <div className="tutorial_header"> Tutorials</div>
        <div className="tutorial_input">
          <input type="Search" placeholder="Search" />
        </div>
        <div className="card_main">
          <Carousel
            swipeable={false}
            draggable={false}
            infinite={true}
            responsive={responsive}
            className="container"
            style={{ width: "100%" }}
          >
            <div class="card cardss" style={{ width: 250 }}>
              <img
                class="card-img-top p-3"
                src={IMAGES_PATH_TUTOEIAL + "/Rectangle 340 (1).png"}
                alt="Card image cap"
              />
              <div class="card-body card__body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
              </div>
            </div>
            <div class="card cardss" style={{ width: 250 }}>
              <img
                class="card-img-top p-3"
                src={IMAGES_PATH_TUTOEIAL + "/Rectangle 340 (1).png"}
                alt="Card image cap"
              />
              <div class="card-body card__body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
              </div>
            </div>
            <div class="card cardss" style={{ width: 250 }}>
              <img
                class="card-img-top p-3"
                src={IMAGES_PATH_TUTOEIAL + "/Rectangle 340 (1).png"}
                alt="Card image cap"
              />
              <div class="card-body card__body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
              </div>
            </div>
            <div class="card cardss" style={{ width: 250 }}>
              <img
                class="card-img-top p-3"
                src={IMAGES_PATH_TUTOEIAL + "/Rectangle 340 (1).png"}
                alt="Card image cap"
              />
              <div class="card-body card__body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
              </div>
            </div>
            <div class="card cardss" style={{ width: 250 }}>
              <img
                class="card-img-top p-3"
                src={IMAGES_PATH_TUTOEIAL + "/Rectangle 340 (1).png"}
                alt="Card image cap"
              />
              <div class="card-body card__body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
              </div>
            </div>
            <div class="card cardss" style={{ width: 250 }}>
              <img
                class="card-img-top p-3"
                src={IMAGES_PATH_TUTOEIAL + "/Rectangle 340 (1).png"}
                alt="Card image cap"
              />
              <div class="card-body card__body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
              </div>
            </div>
            <div class="card cardss" style={{ width: 250 }}>
              <img
                class="card-img-top p-3"
                src={IMAGES_PATH_TUTOEIAL + "/Rectangle 340 (1).png"}
                alt="Card image cap"
              />
              <div class="card-body card__body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
              </div>
            </div>
            <div class="card cardss" style={{ width: 250 }}>
              <img
                class="card-img-top p-3"
                src={IMAGES_PATH_TUTOEIAL + "/Rectangle 340 (1).png"}
                alt="Card image cap"
              />
              <div class="card-body card__body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Tutorial;
