import React from "react";
import "./Index.css";
// import FooterGirlImage from "../../images/footerGirlImage.png";
import FooterLogo from "../../images/footerLogo.png";
import Twitter from "../../images/twitter.jpg";
import LinkedIn from "../../images/linkedIn.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="HomePageFooterContent">
        {/* <div>
          <img src={FooterGirlImage} alt="" className="homePageFooterImage" />
          <div className="homePageFooterImageTextContent">
            <p className="homePageFooterImageTextHeading">
              Supercharge your <br />
              month-end close
            </p>
            <button className="homePageFooterImageTextInputButton">
              Schedule Demo
            </button>
            <input
              tyoe="text"
              placeholder="your email"
              className="homePageFooterImageTextInput"
            />
          </div>
        </div> */}
        <div className="homePageFooter">
          <div className="homePageFooterTextContainer">
            <img src={FooterLogo} alt="" />
            <div className="homePageFooterTextContent">
              <div className="homePageFooterTextContentCart">
                <p className="homePageFooterTextContentHeading">Product</p>
                <p className="homePageFooterTextContentfeild">
                  <Link to="/product/close" className="LinkItems">
                    Close
                  </Link>
                </p>
                <p className="homePageFooterTextContentfeild">
                  <Link to="/product/reconcile" className="LinkItems">
                    Reconcile
                  </Link>
                </p>
                <p className="homePageFooterTextContentfeild">
                  <Link to="/product/analyze" className="LinkItems">
                    Analyze
                  </Link>
                </p>
              </div>
              <div className="homePageFooterTextContentCart">
                <p className="homePageFooterTextContentHeading">Company</p>
                <p className="homePageFooterTextContentfeild">Careers</p>
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
              © 2022 numeric.io All right reserved.
            </p>
            <p className="homePageFooterTextContentFinaltextfeild">
              {" "}
              Privacy Policy{" "}
              <span className="homePageTermsOfServices">Terms of Service</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
