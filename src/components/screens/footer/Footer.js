import React from "react";
import "./Index.css";
import BannerImageFooter from "../../themes/images/BannerImageFooter.png";
import Twitter from "../../themes/images/twitter.jpg";
import LinkedIn from "../../themes/images/linkedIn.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="HomePageFooterContent">
        <div className="homePageFooter">
          <div className="homePageFooterTextContainer">
            <img src={BannerImageFooter} alt="" className="FooterLogoImageContent"/>
            <div className="homePageFooterTextContent">
              <div className="homePageFooterTextContentCart">
                <p className="homePageFooterTextContentHeading">Product</p>
                <p className="homePageFooterTextContentfeild">
                  <Link to="/product" className="LinkItems">
                    Book Close
                  </Link>
                </p>
                <p className="homePageFooterTextContentfeild">
                  <Link to="/product" className="LinkItems">
                    Reporting
                  </Link>
                </p>
                <p className="homePageFooterTextContentfeild">
                  <Link to="/product" className="LinkItems">
                    Consolidate
                  </Link>
                </p>
                <p className="homePageFooterTextContentfeild">
                  <Link to="/product" className="LinkItems">
                    Risk Management
                  </Link>
                </p>
              </div>
              <div className="homePageFooterTextContentCart">
                <p className="homePageFooterTextContentHeading">Company</p>
                <p className="homePageFooterTextContentfeild">
                  <Link to="/about" className="LinkItems">
                    About Us
                  </Link>
                </p>
                <p className="homePageFooterTextContentfeild">
                  <Link to="/blog" className="LinkItems">
                    Blog
                  </Link>
                </p>
              </div>
              <div className="homePageFooterTextContentCart">
                <p className="homePageFooterTextContentHeading">Get in Touch</p>
                <img
                  src={Twitter}
                  alt=""
                  className="homePageFooterTextContentSocialIcon"
                />
                <img
                  src={LinkedIn}
                  alt=""
                  className="homePageFooterTextContentSocialIcon"
                />
              </div>
            </div>
          </div>
          <div className="homePageFooterTextContentFinalFeild">
            <p className="homePageFooterTextContentFinaltextfeild">
              © 2022 happyclose.io All right reserved.
            </p>
            <p className="homePageFooterTextContentFinaltextfeild">
              Privacy Policy
              <span className="homePageTermsOfServices">Terms of Service</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
