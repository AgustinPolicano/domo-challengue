import imgHome from "../../assets/imgs/img-body.png";
import huellaIcon from "../../assets/imgs/logo-huella.png";
import telofonoIcon from "../../assets/imgs/icon-telofono.png";
import "./home.css";
import { ReactComponent as Icon } from "../../assets/imgs/arrow_outward_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"; // Asegúrate de usar el alias ReactComponent
import { useState } from "react";
import useScreenWidth from "../hooks/widthScreenDetect";

function Home() {
  const isSmallScreen = useScreenWidth(900);
  return (
    <section className="home-flex main-content">
      <div className="container-home-text">
        <h4 className="text-h3">Core features</h4>
        <h1 className="title-text">Develop systematically with Comet.</h1>
        <h2 className="subtitle-text">
          Adaptable sections are ideal
          <span className="subtitle-span"> for crafting versatile layotus</span>
        </h2>
        <div className="container-logos-home">
          <div>
            <img src={huellaIcon} className="icon-img-home"/>
            <h3 className="h3-subtitle">System analyze your data</h3>
            <p className="subtitle-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="learn-text">
              <h4>
              Learn more
              </h4>
              <Icon className="icon-arrow" fill="black" />
            </div>
            <hr className="hr-low"></hr>
          </div>
          <div>
            <img src={telofonoIcon} className="icon-img-home"/>
            <h3 className="h3-subtitle">System analyze your data</h3>
            <p className="subtitle-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <h4 className="learn-text">
              Learn more <Icon className="icon-arrow" fill="black" />
            </h4>
            <hr className="hr-low"></hr>
          </div>
        </div>
      </div>
      <div className={`container-home-img ${isSmallScreen ? "delete-img" : ""}`}>
        <img src={imgHome} className="img-home" />
      </div>
    </section>
  );
}

export default Home;
