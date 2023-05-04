import React, { useState, useEffect } from "react";
import { IMAGES_PATH, IMAGES_PATH_NAVBAR } from "../../Constants/ImagesConst";
import "../../assets/css/Home.css";
import "../../assets/css/NavBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const Navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setScrollPosition(currentPosition);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  function handleHome() {
    window.scrollTo(0, 0);
    Navigate("/");
  }
  function handlePremium() {
    window.scrollTo(0, 0);
    Navigate("/premium");
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div className=" " style={{ marginBottom: 10, marginTop: 80 }}>
        <nav
          className={`navbar fixed-top   navbar-dark d-flex justify-content-between pt-3 pb-3 pe-5 ps-5 ${
            scrollPosition > 0 ? "navbar--shadow" : ""
          }`}
        >
          <div className="d-flex">
            <div className="">
              <img
                src={IMAGES_PATH + "/DB_LOGO 1.png"}
                alt="logo"
                className="db_logo_icon"
                onClick={handleHome}
              />
            </div>
            <div className="navbar__icons">
              <div className="navbar__menu-toggle" onClick={toggleMenu}>
                <img
                  src={IMAGES_PATH + "/Vector (4).png"}
                  onClick={toggleMenu}
                />
              </div>
            </div>
          </div>
          <div className={`navbar__menu  ${showMenu ? "show-menu" : ""}`}>
            <div>
              {showMenu && (
                <img
                  src={IMAGES_PATH + "/Vector (5).png"}
                  onClick={toggleMenu}
                  className="cancle_icon"
                />
              )}
            </div>
            <ul className="_ul_alignmate">
              <div className="containerOk ">
                <div className="slide">
                  <li className="King_icon  m-2">
                    <a
                      href="#"
                      className=""
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img
                        src={IMAGES_PATH + "/Group 850.png"}
                        alt="icon"
                        // className="premimum_icon "
                      />
                      <span
                        className="king-text"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        Become Premium Member
                      </span>

                      <div className={`content ${isOpen ? "open" : ""}`}>
                        <div className="myCard">
                          <div className="card-header">
                            <h2>Premium Member</h2>
                            <hr />
                            <div className="card-body">
                              <div className="card_body_texts">
                                <p>Extra Cashback</p>
                                <p>Instant Usability</p>
                                <p>Lucrative Investments</p>
                              </div>
                              <button
                                className="model_button"
                                onClick={handlePremium}
                                // onMouseLeave={handleMouseLeave}
                              >
                                Try now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </div>
              </div>
              <li className="playStore">
                <a className="">
                  <img src={IMAGES_PATH_NAVBAR + "/apple 1.png"} />
                  <span className="">App Store</span>
                </a>
              </li>
              <li className="playStore">
                <a href="#">
                  <img src={IMAGES_PATH + "/Vector (1).png"} />
                  <span>Play Store</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
