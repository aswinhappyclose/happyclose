import React from "react";
import "./Index.css";
import Header from "../header/Index.js";
import manWorkFlow from "../../images/manWorkFlow.png";
import ClosingBook from "../../images/ClosingBook.jpeg";
import Reporting from "../../images/Reporting.png";
import Consolidate from "../../images/Consolidate.jpg";
import RiskManagement from "../../images/RiskManagement.webp";
import Footer from "../footer/Footer.js";



const Close = () => {

  return (
    <div className="mainContainer">
      <Header />
      <div className="closePageMainContent">
        <div className="closePageFirstContent">
          <div className="closePageFirstContentTextFeild">
            <p className="closePageFirstContentTextFeildHeader">Reporting tasks reimagined …</p>
            <p className="closePageFirstContentText">
            Happy Close modules revolutionizes the way finance teams work and ensures timely reporting.
            </p>
            <p className="closePageFirstContentText">Here is a full stack of book close and reporting solutions – built for speed and scale around your unique business needs. All supported by dedicated, local teams, with expertise in every major market.</p>
          </div>
          <img
            src={manWorkFlow}
            className="closePageFirstContentDesktopImage"
            alt=""
          />
          <p className="ProductPageImageTextFeild"><i class="bi bi-list-check"></i>Seamlessly integrates with any ERP<i class="bi bi-check2-circle"></i></p>
          <p className="ProductPageImageTextFeildTwo"><i class="bi bi-list-check"></i>Create and manages tasks<i class="bi bi-check2-circle"></i></p>
          <p className="ProductPageImageTextFeildThree"><i class="bi bi-list-check"></i>Automates reconciliations<i class="bi bi-check2-circle"></i></p>
          <p className="ProductPageImageTextFeildFour"><i class="bi bi-list-check"></i>Compares Budget Vs Actuals<i class="bi bi-check2-circle"></i></p>
          <p className="ProductPageImageTextFeildFive"><i class="bi bi-list-check"></i>Generates Standalone and Consolidated financial statements<i class="bi bi-check2-circle"></i></p>
          <p className="ProductPageImageTextFeildSix"><i class="bi bi-list-check"></i>Integrates control testing<i class="bi bi-check2-circle"></i></p>
        </div>
        <div className="homePageTransformYouWork">
        <h2 className="homePageTransformYouWorkText">OUR MODULES</h2>
        <div className="homePageTransformYouWorkcartContainer">
          <div className="homePageTransformYouWorkFirstCart">
            <div className="homePageTransformYouWorkFirstCartcontent">
              <p className="homePageTransformYouWorkFirstCartcontentHeading">
                BOOK CLOSE
              </p>
              <p className="homePageTransformYouWorkFirstCartcontentContent">
              Extended working hours to ensure timely book close burning you out? We will ensure happy book close !
              </p>
            </div>
            <img
              src={ClosingBook}
              className="homePageTransformYouWorkFirstCartImage"
              alt=""
            />
          </div>
          <div className="homePageTransformYouWorkSecondCart">
            <div className="homePageTransformYouWorkSecondCartcontent">
              <p className="homePageTransformYouWorkSecondCartcontentHeading">
              REPORTING
              </p>
              <p className="homePageTransformYouWorkSecondCartcontentContent">
              Adherence to ever-changing standards becoming cumbersome and chaotic? We will ensure happy reporting !
              </p>
            </div>
            <img
              src={Reporting}
              className="homePageTransformYouWorkFirstCartImage"
              alt=""
            />
          </div>
          <div className="homePageTransformYouWorkThirdCart">
            <div className="homePageTransformYouWorkSecondCartcontent">
              <p className="homePageTransformYouWorkSecondCartcontentHeading">
              CONSOLIDATE 
              </p>
              <p className="homePageTransformYouWorkSecondCartcontentContent">
              Manual preparation of consolidated financial statements leading to delays? We will ensure happy consolidation !
              </p>
            </div>
            <img
              src={Consolidate}
              className="homePageTransformYouWorkFirstCartImage"
              alt=""
            />
          </div>
          <div className="homePageTransformYouWorkFourCart">
            <div className="homePageTransformYouWorkSecondCartcontent">
              <p className="homePageTransformYouWorkSecondCartcontentHeading">
                RISK MANAGEMENT
              </p>
              <p className="homePageTransformYouWorkFoutCartcontentContent">
              Duplication of efforts for control testing? We will ensure happy risk management !
              </p>
            </div>
            <img
              src={RiskManagement}
              className="homePageTransformYouWorkFirstCartImage"
              alt=""
            />
          </div>
        </div>
      </div>
        <Footer/>
      </div>
    </div>
  );
};
export default Close;
