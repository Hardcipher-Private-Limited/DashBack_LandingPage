import React, { useState, useEffect } from "react";
import { IMAGES_PATH, IMAGES_PATH_NAVBAR } from "../../Constants/ImagesConst";
import "../../assets/css/Home.css";
import "../../assets/css/NavBar.css";

const NavBar = () => {
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

  return (
    <>
      <div className="bg-success" style={{ marginBottom: 80, marginTop: 80 }}>
        <nav
          className={`navbar fixed-top navbar-expand-sm p-3 p-3 p navbar-dark bg-white  ${
            scrollPosition > 0 ? "navbar--shadow" : ""
          }`}
        >
          <div class="container d-flex  ">
            <div>
              <img
                src={IMAGES_PATH + "/DB_LOGO 1.png"}
                alt="logo"
                style={{ width: 50, height: 40, marginLeft: 0 }}
              />
            </div>

            <div
              className={`navbar__menu ${showMenu ? "show-menu" : ""}`}
              style={{ marginLeft: 700 }}
            >
              <div>
                {showMenu && (
                  <img
                    src={IMAGES_PATH + "/Vector (5).png"}
                    onClick={toggleMenu}
                  />
                )}
              </div>
              <ul>
                <div className="containerOk">
                  <div className="slide">
                    <li className="King_icon">
                      <a
                        href="#"
                        className="King_icon"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <img
                          src={IMAGES_PATH + "/Group 850.png"}
                          alt="icon"
                          style={{ width: "10%" }}
                          className="king_icon "
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
                                  onClick={() => alert()}
                                >
                                  Try Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </div>
                </div>
                <li className="Nav__menu_li_a">
                  <a href="#">
                    <img src={IMAGES_PATH_NAVBAR + "/apple 1.png"} alt="icon" />
                    <span>App Store</span>
                  </a>
                </li>
                <li className="Nav__menu_li_a">
                  <a href="#">
                    <img
                      src={IMAGES_PATH + "/Vector (1).png"}
                      className="playStore_icon"
                    />
                    <span>Play Store</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar__icons">
              <div className="navbar__menu-toggle" onClick={toggleMenu}>
                <div>
                  <img
                    src={IMAGES_PATH + "/Vector (4).png"}
                    onClick={toggleMenu}
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
