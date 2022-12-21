import React from "react";
import "./Index.css";
import { Link } from "react-router-dom";
import Logo from "../../images/BannerImage.png";

const Index = () => {
  return (
    <div className="headerMainContainer">
      <div className="headerTreadingHeadilines">
        Watch this space to know what's #trending @ Happy Close !!
      </div>
      <div className="headerMainContainerContent">
        <img src={Logo} alt="" className="HeaderLogo" />
        <div className="headerTextContainer">
          <Link to="/" className="headerLinkItems">
            {" "}
            <p className="headerTexContainertagsContnents">Home</p>
          </Link>
          <Link to="/product" className="headerLinkItems">
            {" "}
            <p className="headerTexContainertagsContnents">Product</p>
          </Link>

          <Link to="/about" className="headerLinkItems">
            {" "}
            <p className="headerTexContainertagsContnents">About Us</p>
          </Link>
          <Link to="/blog" className="headerLinkItems">
            {" "}
            <p className="headerTexContainertagsContnents">Blog</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Index;
