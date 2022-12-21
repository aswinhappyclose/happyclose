import React from "react";
import "./Index.css";
import Header from "../header/Index.js";
import ClosingBook from "../../images/ClosingBook.png";
import Reporting from "../../images/Reporting.png";
import Consolidate from "../../images/Consolidate.png";
import RiskManagement from "../../images/RiskManagement.png";
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
                Reporting tasks reimagined …
              </p>
              <p className="closePageFirstContentText">
                Happy Close modules revolutionizes the way finance teams work
                and ensures timely reporting.
                <br />
                The cloud based solution automates and speeds up your period-end
                close workflow acting as a centralized repository for the
                month-end close activites. It incorporates all the essential
                components to ensure regulatory compliance, streamlined close
                process, improved visibility and audit readiness.
              </p>
              <p className="closePageFirstContentText">
                Here is a full stack of book close and reporting solutions –
                built for speed and scale around your unique business needs. All
                supported by dedicated, local teams, with expertise in every
                major market.
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
                  <i class="bi bi-file-earmark-spreadsheet-fill" />
                  Generates proforma Income Statement and Balance Sheet
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="reportingTextTwo">
                  <i class="bi bi-hourglass-top" />
                  Real time visibility for every financial caption
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="reportingTextThree">
                  <i class="bi bi-arrow-down-up" />
                  There is a push and pull feature between ERP and solution
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="reportngTextFour">
                  <i class="bi bi-bezier2" />
                  Compare actuals Vs budgets and understand reasons for key
                  variances
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="reportingTextFive">
                  <i class="bi bi-file-earmark-text" />
                  Generates standalone financial statements
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
                  Group accounting policies are automatically linked to
                  workflows
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="consolidateTextTwo">
                  <i class="bi bi-pin-map-fill" />
                  Assign consolidation tasks to regional controllers and track
                  the status real time
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="consolidateTextThree">
                  <i class="bi bi-bell-fill" />
                  Triggers timely notifications
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="consolidateTextFour">
                  <i class="bi bi-buildings-fill" />
                  Intercompany engine
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
                  <i class="bi bi-chevron-bar-contract" /> Integrates control
                  testing
                  <i class="bi bi-check2-circle" />
                </p>
                <p className="riskManagementTextTwo">
                  <i class="bi bi-clipboard-minus-fill" />
                  Eliminates duplication of efforts for SOX compliance
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
