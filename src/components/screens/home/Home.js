import React from "react";
import "./Index.css";
import Header from "../header/Index.js";
import Footer from "../footer/Footer";
// import BannerImage from "../../themes/images/BannerImage.png";
import HomePageBookCloseCartImage from "../../themes/images/ClosingBook.png";
import HomePageReportCartImage from "../../themes/images/Reporting.png";
import HomePageConsolidateCartImage from "../../themes/images/Consolidate.png";
// import HomePageRiskManagementCartImage from "../../themes/images/RiskManagement.png";
import { Link } from "react-router-dom";
import Close from "../product/Product";
import AboutUs from "../aboutUs/AboutUs";
import Blog from "../blog/Blog";

const Home = () => {
  const Product = () => {
    window.scrollBy(0, 1020);
  };

  return (
    <div className="MainContainer">
      <Header />
      <div className="homePageFirstContent">
        <div className="homePageFirstContentTextFeild">
          <p className="homePageFirstContentTextFeildHeader">
            One solution for all your reporting needs
          </p>
          <Link to="/scheduledemo" className="buttonLink">
            <div className="homePageBannerButton">
              <button className="homePageFirstContentButton">
                Schedule Demo
              </button>
            </div>
          </Link>
        </div>
        <div className="bannerImageContent">
          <div className="bookcloseAndReporting">
            <p className="bannerImageContentTextOne">Book Close</p>
            <p className="bannerImageContentTextThree">Consolidation</p>
          </div>
          <div className="bookcloseAndReportingArrows">
            <svg id="more-arrows">
              <polygon
                class="arrow-top"
                points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
              />
              <polygon
                class="arrow-middle"
                points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
              />
              <polygon
                class="arrow-bottom"
                points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
              />
            </svg>
            <svg className="arrowFour">
              <polygon
                class="arrow-top Four"
                points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
              />
              <polygon
                class="arrow-middle"
                points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
              />
              <polygon
                class="arrow-bottom"
                points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
              />
            </svg>
          </div>

          <p className="homeMainContainerContentHeaderText">
            <span className="hoemMainContainerContentHeaderTextHappy">
              Happy
            </span>{" "}
            Close
          </p>

          <div className="ReportAndRiskmanagementArrows">
            <svg className="arrowTwo">
              <polygon
                class="arrow-top Two"
                points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
              />
              <polygon
                class="arrow-middle"
                points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
              />
              <polygon
                class="arrow-bottom"
                points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
              />
            </svg>
            {/* <svg className="arrowThree">
              <polygon
                class="arrow-top Three"
                points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
              />
              <polygon
                class="arrow-middle"
                points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
              />
              <polygon
                class="arrow-bottom"
                points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
              />
            </svg>
           */}
          </div>
          <div className="ReportAndRiskmanagement">
            <p className="bannerImageContentTextTwo">Reporting</p>
            {/* <p className="bannerImageContentTextFour">Risk Management</p> */}
          </div>
        </div>
      </div>
      <div className="aboutUsOurModuleContent">
        <Link className="aboutUsOurModuleCart" onClick={Product}>
          <div>
            <img
              src={HomePageBookCloseCartImage}
              alt=""
              className="aboutUsOurModuleCartTextImage"
            />
            <p className="aboutUsOurModuleCartText">Book Close</p>
          </div>
        </Link>
        <Link className="aboutUsOurModuleCart" onClick={Product}>
          <div>
            <img
              src={HomePageConsolidateCartImage}
              alt=""
              className="aboutUsOurModuleCartTextImage"
            />
            <p className="aboutUsOurModuleCartText">Consolidation</p>
          </div>
        </Link>
        <Link className="aboutUsOurModuleCart" onClick={Product}>
          <div>
            <img
              src={HomePageReportCartImage}
              alt=""
              className="aboutUsOurModuleCartTextImage"
            />
            <p className="aboutUsOurModuleCartText">Reporting</p>
          </div>
        </Link>
        {/* <Link  className="aboutUsOurModuleCart" onClick={Product}>
          <div>
            <img
              src={HomePageRiskManagementCartImage}
              alt=""
              className="aboutUsOurModuleCartTextImage"
            />
            <p className="aboutUsOurModuleCartText">Risk Management</p>
          </div>
        </Link> */}
      </div>
      <Close />
      <AboutUs />
      <Blog />
      <Footer />
    </div>
  );
};
export default Home;
