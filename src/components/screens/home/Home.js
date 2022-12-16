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
          <Link to="/scheduledemo"><button className="homePageFirstContentButton">Schedule Demo</button></Link>
        </div>
        <div className="bannerImageContent">
          <p className="bannerImageContentTextOne">Book Close</p>
          <i class="bi bi-chevron-up lineArrow"></i>
          <hr className="line" />
          {/* <></> */}
          <div id="arrowAnim">
            <div class="arrowSliding">
              <div class="arrow"></div>
            </div>
            <div class="arrowSliding delay1">
              <div class="arrow"></div>
            </div>
            <div class="arrowSliding delay2">
              <div class="arrow"></div>
            </div>
            <div class="arrowSliding delay3">
              <div class="arrow"></div>
            </div>
          </div>
          {/* <></> */}
          <p className="bannerImageContentTextTwo">Reporting</p>
          {/* <i class="bi bi-chevron-up lineArrowTwo"></i>
          <hr className="lineTwo" /> */}
          <img
            src={BannerImage}
            className="homePageFirstContentDesktopImage"
            alt=""
          />
          <p className="bannerImageContentTextThree">Consolidation</p>
          <i class="bi bi-chevron-up lineArrowThree"></i>
          <hr className="lineThree" />
          <p className="bannerImageContentTextFour">Risk Management</p>
          <i class="bi bi-chevron-up lineArrowFour"></i>
          <hr className="lineFour" />
        </div>
      </div>
      <div className="SolutionsResults">
        <div className="happyCloseProblumSolutionsCart">
          <img
            src={ProblumsFour}
            alt=""
            className="happyCloseProblumSolutionsCartImageOne"
          />
          <p className="happyCloseProblumSolutionsCartText">
            Intelligent close manager with - real time PL, Easy workflow, Audit
            trail
          </p>
        </div>
        <div className="happyCloseProblumSolutionsCart">
          <img
            src={ProblumsFive}
            alt=""
            className="happyCloseProblumSolutionsCartImageOne"
          />
          <p className="happyCloseProblumSolutionsCartText">
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
