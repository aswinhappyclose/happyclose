import React from "react";
import "./Index.css";
import Header from "../header/Index.js";
import Footer from "../footer/Footer";
import BannerImage from "../../images/BannerImage.png";
import ProblumsFour from "../../images/ProblumsFour.png";
import ProblumsFive from "../../images/ProblumsFive.png";
import ProblumsSix from "../../images/ProblumsSix.png";

import { Link } from "react-router-dom";

const Home = () => {
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
          <p className="bannerImageContentTextOne">Book Close</p>
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
          <p className="bannerImageContentTextTwo">Reporting</p>
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

          <img
            src={BannerImage}
            className="homePageFirstContentDesktopImage"
            alt=""
          />
          <p className="bannerImageContentTextThree">Consolidation</p>
          <svg className="arrowThree">
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
          <p className="bannerImageContentTextFour">Risk Management</p>
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
      </div>
      <div className="homePageNewsPapperContent">
        <div className="homePageNewsPapperContentCart">
          <p>Bloomberg</p>
        </div>
        <div className="homePageNewsPapperContentCart">
          <p>Business Line</p>
        </div>
        <div className="homePageNewsPapperContentCart">
          <p>Bloomberg Tax</p>
        </div>
        <div className="homePageNewsPapperContentCart">
          <p>Business Standard</p>
        </div>
      </div>
      <div className="SolutionsResults">
        <div className="happyCloseProblumSolutionsCart">
          <img
            src={ProblumsFour}
            alt=""
            className="happyCloseProblumSolutionsOneCartImageOne"
          />
          <p className="happyCloseProblumSolutionsOneCartText">
            Intelligent close manager with - real time PL, Easy workflow, Audit
            trail
          </p>
        </div>
        <div className="happyCloseProblumSolutionsCart">
          <img
            src={ProblumsFive}
            alt=""
            className="happyCloseProblumSolutionsOneCartImageOne"
          />
          <p className="happyCloseProblumSolutionsOneCartText">
            Smart (GAAP agnostic) consolidation engine-automate consolidation
            adjustments
          </p>
        </div>
        <div className="happyCloseProblumSolutionsCart">
          <img
            src={ProblumsSix}
            alt=""
            className="happyCloseProblumSolutionsCartImageOne"
          />
          <p className="happyCloseProblumSolutionsCartText">
            Connected solution with customisable templates to avoid errors,
            duplication of effort, enable one source of truth, walk the last
            mile (XBRL conversion)
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
