import React from "react";
import "./Index.css";
import { Link } from "react-router-dom";
import Logo from "../../themes/images/BannerImage.png";

const Index = () => {
  const Product = () => {
    window.scrollBy(0, 1020);
  };
  const AboutUs = () => {
    var a = window.scrollBy(0, 1020);
    if (a === window.scrollBy(0, 1020)) {
      window.scrollBy(0, 3400);
    } else {
      alert("come");
      window.scrollBy(0, 4400);
    }
  };
  

  return (
    <div className="headerMainContainer">
      {/* <div className="headerTreadingHeadilines">
        Watch this space to know what's #trending @ Happy Close !!!
      </div> */}
      <div className="headerMainContainerContent">
        <p className="headerMainContainerContentHeaderText"><span  className="headerMainContainerContentHeaderTextHappy" >Happy</span> Close</p>
        <div className="headerTextContainer">
          <Link to="/" className="headerLinkItems">
            <p className="headerTexContainertagsContnents">Home</p>
          </Link>
          <Link className="headerLinkItems" onClick={Product}>
            <p className="headerTexContainertagsContnents">Product</p>
          </Link>
          <Link className="headerLinkItems">
            <p className="headerTexContainertagsContnents" onClick={AboutUs}>
              About Us
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Index;
