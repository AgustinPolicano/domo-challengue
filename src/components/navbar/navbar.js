import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.css";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import imgLogo from "../../assets/imgs/logo-con-texto.png";
import navbarArrow from "../../assets/imgs/navbar-arrow.png";
import { useEffect, useState } from "react";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  if (!isMobile) {
    return (
      <section className="navbar-flex">
        <div className="flex-brand-navbar">
          <FontAwesomeIcon
            className="icon-brand"
            color="black"
            icon={faXTwitter}
          />
          <FontAwesomeIcon
            className="icon-brand"
            color="black"
            icon={faInstagram}
          />
          <FontAwesomeIcon
            className="icon-brand"
            color="black"
            icon={faLinkedinIn}
          />
          <FontAwesomeIcon
            className="icon-brand"
            color="black"
            icon={faDribbble}
          />
        </div>

        <div className="logo-container">
          <img src={imgLogo} className="logo-navbar" alt="Logo" />
        </div>

        <div className="arrow-container">
          <img src={navbarArrow} className="arrow-navbar" alt="Toggle Menu" />
        </div>
      </section>
    );
  } else {
    return (
      <div>
        <div className="navbar-flex">
          <div className="arrow-container" onClick={toggleMenu}>
            <img src={navbarArrow} className="arrow-navbar" alt="Toggle Menu" />
          </div>
        </div>
        {isMenuOpen === true && (
          <div className="navbar-open-mobile">
            <div className="arrow-container-navbar" onClick={toggleMenu}>
              <div className="logo-container">
                <img src={imgLogo} className="logo-navbar" alt="Logo" />
              </div>
              <a>
                <FontAwesomeIcon
                  className="close-icon"
                  color="black"
                  icon={faTimesCircle}
                />
              </a>
            </div>
            <div>
              <div className="flex-brand-navbar-open">
                <FontAwesomeIcon
                  className="icon-brand"
                  color="black"
                  icon={faXTwitter}
                />
                <FontAwesomeIcon
                  className="icon-brand"
                  color="black"
                  icon={faInstagram}
                />
                <FontAwesomeIcon
                  className="icon-brand"
                  color="black"
                  icon={faLinkedinIn}
                />
                <FontAwesomeIcon
                  className="icon-brand"
                  color="black"
                  icon={faDribbble}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default Navbar;
