import React from "react";
import "./Index.css";
import BlogImage from "../../themes/images/BannerImage.png";

const Blog = () => {
  return (
    <div className="blogPageMainContainer">
      <div className="blogPageContent">
        <div className="blogPageContentTextFeild">
          <p className="blogPageContentTextFeildDate">
            November 9, 2022 - 2 Min Read
          </p>
          <h1 className="blogPageContentTextFeildHeading">Happyclose</h1>
          <p className="blogPageContentFeildText">Happyclose It's Begin !!!</p>
        </div>
        <img src={BlogImage} alt="" className="blogPageContentImage" />
      </div>
    </div>
  );
};
export default Blog;
