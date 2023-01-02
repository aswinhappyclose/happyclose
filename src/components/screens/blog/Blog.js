import React from "react";
import Header from "../header/Index.js";
import "./Index.css";
import BlogImage from "../../themes/images/blogImage.png";
import Footer from "../footer/Footer.js";

const Blog = () => {
  return (
    <div className="blogPageMainContainer">
      <Header />
      <div className="blogPageContent">
        <div className="blogPageContentTextFeild">
          <p className="blogPageContentTextFeildDate">
            November 9, 2022 - 2 Min Read
          </p>
          <h1 className="blogPageContentTextFeildHeading">
            Velocity is now
            <br /> Numeric!
          </h1>
          <p className="blogPageContentFeildText">
            Velocity has changed its name to Numeric
          </p>
          <div className="blogPageParkerContent">
            <p className="blogPageParkerName">Parker Gilbert</p>
          </div>
        </div>
        <img src={BlogImage} alt="" className="blogPageContentImage" />
      </div>
      <Footer />
    </div>
  );
};
export default Blog;
