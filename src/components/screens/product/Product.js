import React from "react";
import "./Index.css";
import Header from "../header/Index.js";
import ClosingBook from "../../themes/images/ClosingBook.png";
import Reporting from "../../themes/images/Reporting.png";
import Consolidate from "../../themes/images/Consolidate.png";
import RiskManagement from "../../themes/images/RiskManagement.png";
import Footer from "../footer/Footer.js";

const Close = () => {
  return (
    <>
      <Header />
      <div className="mainContainer">
        <div className="closePageMainContent">
          <div className="closePageFirstContent">
            <div className="closePageFirstContentTextFeild">
              <p className="closePageFirstContentTextFeildHeader">
                Reporting Reimagined</p>
              <p className="closePageFirstContentText">
              Happy close is built to be a one stop solution for managing your book close and reporting .  Happy close helps you manage your book close across various jurisdictions, consolidate at multiple levels and enables.
              </p>
              <p className="closePageFirstContentText">
              collaborative reporting. And because its all built on one platform never worry about your data integrity Happy close platform will ensure data consistency for effortless and seamless reporting.
              </p>
            </div>
          </div>
          <div className="homePageTransformYouWork">
            <h2 className="homePageTransformYouWorkText">Our Modules</h2>
            <div className="homePageTransformYouWorkcartContainer">
              <div className="homePageTransformYouWorkFirstCart">
                <div className="homePageTransformYouWorkFirstCartcontent">
                  <p className="homePageTransformYouWorkFirstCartcontentHeading">
                    BOOK CLOSE
                  </p>
                  <p className="homePageTransformYouWorkFirstCartcontentContent">
                    Extended working hours to ensure timely book close burning
                    you out? We will ensure happy book close !
                  </p>
                </div>
                <img
                  src={ClosingBook}
                  className="homePageTransformYouWorkFirstCartImage"
                  alt=""
                />
                <p className="bookcloseTextOne">
                  <i class="bi bi-journal-bookmark" />
                  Every task created results in an action
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="bookcloseTextTwo">
                  <i class="bi bi-hourglass-split" />
                  Control tower to ensure timely preparation and review{" "}
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="bookcloseTextThree">
                  <i class="bi bi-bookmarks" />
                  Integrated book close analytics
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="bookcloseTextFour">
                  <i class="bi bi-escape" />
                  ERP agnostic solution
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="bookcloseTextFive">
                  <i class="bi bi-geo-fill" />
                  Automates reconciliation
                  <i class="bi bi-check2-circle" />
                </p>
              </div>
              <div className="homePageTransformYouWorkSecondCart">
                <div className="homePageTransformYouWorkSecondCartcontent">
                  <p className="homePageTransformYouWorkSecondCartcontentHeading">
                    REPORTING
                  </p>
                  <p className="homePageTransformYouWorkSecondCartcontentContent">
                    Adherence to ever-changing standards becoming cumbersome and
                    chaotic? We will ensure happy reporting !
                  </p>
                </div>
                <img
                  src={Reporting}
                  className="homePageTransformYouWorkFirstCartImage"
                  alt=""
                />
                <p className="reportingTextOne">
                  <i class="bi bi-file-earmark-text" />
                  Manage multi GAAP reporting
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="reportingTextTwo">
                  <i class="bi bi-hourglass-top" />
                  One source of data - connected platform
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="reportingTextThree">
                  <i class="bi bi-arrow-down-up" />
                  Collaborate and work on deliverables
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="reportingTextFour">
                  <i class="bi bi-bezier2" />
                  Create approval workflows
                  <i class="bi bi-check2-circle" />
                </p>
              </div>
              <div className="homePageTransformYouWorkThirdCart">
                <div className="homePageTransformYouWorkSecondCartcontent">
                  <p className="homePageTransformYouWorkSecondCartcontentHeading">
                    CONSOLIDATE
                  </p>
                  <p className="homePageTransformYouWorkSecondCartcontentContent">
                    Manual preparation of consolidated financial statements
                    leading to delays? We will ensure happy consolidation !
                  </p>
                </div>
                <img
                  src={Consolidate}
                  className="homePageTransformYouWorkFirstCartImage"
                  alt=""
                />
                <p className="consolidateTextOne">
                  <i class="bi bi-link-45deg" />
                  US GAAP/ IFRS  compliant consolidation engine
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="consolidateTextTwo">
                  <i class="bi bi-pin-map-fill" />
                  Consolidate and multiple levels
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="consolidateTextThree">
                  <i class="bi bi-bell-fill" />
                  Automated ICO reconciliation
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="consolidateTextFour">
                  <i class="bi bi-buildings-fill" />
                  Visibility on component close status
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="consolidateTextFive">
                  <i class="bi bi-buildings-fill" />
                  Set up and manage group reporting policies
                  <i class="bi bi-check2-circle" />
                </p>
              </div>
              <div className="homePageTransformYouWorkFourCart">
                <div className="homePageTransformYouWorkSecondCartcontent">
                  <p className="homePageTransformYouWorkSecondCartcontentHeading">
                    RISK MANAGEMENT
                  </p>
                  <p className="homePageTransformYouWorkFoutCartcontentContent">
                    Duplication of efforts for control testing? We will ensure
                    happy risk management !
                  </p>
                </div>
                <img
                  src={RiskManagement}
                  className="homePageTransformYouWorkFirstCartImage"
                  alt=""
                />
                <p className="riskManagementTextOne">
                  <i class="bi bi-chevron-bar-contract" />
                   US GAAP/ IFRS compliant 
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="riskManagementTextTwo">
                  <i class="bi bi-clipboard-minus-fill" />
                  consolidation engine
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="riskManagementTextThree">
                  <i class="bi bi-clipboard-minus-fill" />
                  Consolidate at multiple levels
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="riskManagementTextFour">
                  <i class="bi bi-clipboard-minus-fill" />
                  Automated ICO reconciliation
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="riskManagementTextFive">
                  <i class="bi bi-clipboard-minus-fill" />
                  Visibility on component close status
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="riskManagementTextSix">
                  <i class="bi bi-clipboard-minus-fill" />
                  Set up and manage group reporting policies
                  <i class="bi bi-check2-circle" />
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Close;
