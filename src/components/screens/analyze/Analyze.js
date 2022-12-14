import React from "react";
import Header from "../header/Index.js";
import "./Index.css";
import BannerDesktopImage from "../../images/home_banner_desktop.jpg";
import AnalyticsAutoPilotOne from "../../images/AnalyticsAutoPilotOne.png";
import AnalyticsAutoPilotTwo from "../../images/AnalyticsAutoPilotTwo.png";
import AnalyticsAutoPilotThree from "../../images/AnalyticsAutoPilotThree.png";
import ContextFingertipsOne from "../../images/ContextFingertipsOne.png";
import ContextFingertipsTwo from "../../images/ContextFingertipsTwo.png";
import CollaborAtiveDesignOne from "../../images/CollaborAtiveDesignOne.png";
import CollaborAtiveDesignTwo from "../../images/CollaborAtiveDesignTwo.png";
import CollaborAtiveDesignThree from "../../images/CollaborAtiveDesignThree.png";
import Footer from "../footer/Footer.js";
import FirtCart from "../../images/firstcart.png";
import SecondCart from "../../images/secondcart.png";


const Analyze = () => {
  return (
    <>
      <Header />
      <div className="analyzePageBannerContainer">
        <div className="analyzePageBannerContent">
          <h1 className="analyzePageBannerContentHeading">Analyze</h1>
          <p className="analyzePageBannerContentText">
            Unify your entire close process with integrated <br />
            analytics, to capture flux analysis procedures
            <br /> and to ensure data integrity.
          </p>
          <button className="analyzePageBannerButton">Schedule Demo</button>
        </div>
        <img
          src={BannerDesktopImage}
          alt=""
          className="analyzePageBannerImage"
        />
      </div>
      <div className="analyticsPageAutoPilot">
        <h1 className="analyticsPageAutoPilotHeading">Analytics on auto-pilot</h1>
        <p className="analyticsPageAutoPilotText">
          Build flexible analytics reports in Numeric as part of your close in
          order to streamline your work and have
          <br /> unparalleled insights into your financials.
        </p>
        <div className="analyticsPageAutoPilotCartContainer">
            <div className="analyticsPageAutoPilotCartTextContainer">
                <p className="analyticsPageAutoPilotCartHeading">Build customizable flux reports</p>
                <p className="analyticsPageAutoPilotCartText">Create reports and automatically run each period with assignments, due dates, thresholds, and more – all ready to go. Build your own personal views with flexible configurations.</p>
            </div>
            <img src={AnalyticsAutoPilotOne} alt="" className="analyticsPageAutoPilotCartOneImage"/>
        </div>
        <div className="analyticsPageAutoPilotCantainer">
            <div className="analyticsPageAutoPilotCantainerCartOne">
                <div className="analyticsPageAutoPilotCantainerCartOneText">
                <p className="analyticsPageAutoPilotCantainerCartOneHeading">Set thresholds and roll forward</p>
                <p className="analyticsPageAutoPilotCartOneText">Set materiality thresholds, so you know exactly which accounts need explaining and when they are ready to be submitted and reviewed.</p>
                </div>
                <img src={AnalyticsAutoPilotTwo} alt="" className="analyticsPageAutoPilotCantainerCartOneImage"/>
            </div>
            <div className="analyticsPageAutoPilotCantainerCartTwo">
                <div className="analyticsPageAutoPilotCantainerCartOneText">
                <p className="analyticsPageAutoPilotCantainerCartOneHeading">Provide detailed explanations</p>
                <p className="analyticsPageAutoPilotCartOneText">Use rich text editing to provide detailed descriptions and commentary for the rest of your team.</p>
                </div>
                <img src={AnalyticsAutoPilotThree} alt="" className="analyticsPageAutoPilotCantainerCartOneImage"/>
            </div>
        </div>
      </div>
      <div className="analyzeContextFingertips">
        <h1 className="analyzeContextFingertipsHeading">All of the context, at your <br/>fingertips</h1>
        <p className="analyzeContextFingertipsText">Numeric analytics are blazingly fast and infinitely explorable with transaction-level details, so you don't need<br/> to go back to the general ledger to understand changes or identify errors.</p>
        <div className="analyzeContextFingertipsTextCart">
            <div>
                <h1 className="analyzeContextFingertipsTextCartHeading">Drill into transaction-level details</h1>
                <p className="analyzeContextFingertipsTextCartText">No additional clicks, pages, exports, or pivots are required. With Numeric, all the data is visible and accessible via a single screen, so it's always right where you need it.</p>
            </div>
            <img src={ContextFingertipsOne} alt="" className="analyzeContextFingertipsTextCartImage"/>
        </div>
        <div className="analyzeContextFingertipsTextCartTwo">
            <div>
                <h1 className="analyzeContextFingertipsTextCartTwoHeading">Quickly view trends and prior explanations</h1>
                <p className="analyzeContextFingertipsTextCartTwoText">Instantly view trends and prior-period explanations, so you have all of the information required to better understand changes in your financials.</p>
            </div>
            <img src={ContextFingertipsTwo} alt="" className="analyzeContextFingertipsTextCartImage"/>
        </div>
      </div>
      <div className="analyzPAgeCollaborAtiveDesign">
        <h1 className="analyzPAgeCollaborAtiveDesignHeading">Collaborative by design</h1>
        <p className="analyzPAgeCollaborAtiveDesignText">
        Track workflows from start to finish, gain full visibility and a continuous overview of your team's progress,<br/> and receive live updates.
        </p>
        <div className="analyticsPageAutoPilotCartContainer">
            <div className="analyticsPageAutoPilotCartTextContainer">
                <p className="analyticsPageAutoPilotCartHeading">Work in real-time with your team</p>
                <p className="analyticsPageAutoPilotCartText">Get real-time notifications and chat.</p>
            </div>
            <img src={CollaborAtiveDesignOne} alt="" className="analyticsPageAutoPilotCartOneImage"/>
        </div>
        <div className="analyticsPageAutoPilotCantainer">
            <div className="analyticsPageAutoPilotCantainerCartOne">
                <div className="analyticsPageAutoPilotCantainerCartOneText">
                <p className="analyticsPageAutoPilotCantainerCartOneHeading">Ensure your review never holds up the close</p>
                <p className="analyticsPageAutoPilotCartOneText">With daily digests, everyone on your team knows if there are overdue items and what’s on deck for the day.</p>
                </div>
                <img src={CollaborAtiveDesignTwo} alt="" className="analyticsPageAutoPilotCantainerCartOneImage"/>
            </div>
            <div className="analyticsPageAutoPilotCantainerCartTwo">
                <div className="analyticsPageAutoPilotCantainerCartOneText">
                <p className="analyticsPageAutoPilotCantainerCartOneHeading">See all of your close work in one place</p>
                <p className="analyticsPageAutoPilotCartOneText">Your analytics are unified within your close workflow, so you have one place for all of your close activities.</p>
                </div>
                <img src={CollaborAtiveDesignThree} alt="" className="analyticsPageAutoPilotCantainerCartOneImage"/>
            </div>
        </div>
      </div>
      <div className="analyzeTransformYouWork">  
        <div className="homePageTransformYouWorkcartContainer">
          <div className="homePageTransformYouWorkFirstCart">
            <div className="homePageTransformYouWorkFirstCartcontent">
              <p className="homePageTransformYouWorkFirstCartcontentHeading">
                Close
              </p>
              <p className="homePageTransformYouWorkFirstCartcontentContent">
                Design Your
                <br />
                Month-end playbook
              </p>
              <p className="homePageTransformYouWorkFirstCartcontentLearnMore">
                Learn More
              </p>
            </div>
            <img
              src={FirtCart}
              className="homePageTransformYouWorkFirstCartImage"
              alt=""
            />
          </div>
          <div className="homePageTransformYouWorkSecondCart">
            <div className="homePageTransformYouWorkSecondCartcontent">
              <p className="homePageTransformYouWorkSecondCartcontentHeading">
                Reconcile
              </p>
              <p className="homePageTransformYouWorkSecondCartcontentContent">
                Always be audit Ready
              </p>
              <p className="homePageTransformYouWorkSecondCartcontentLearnMore">
                Learn More
              </p>
            </div>
            <img
              src={SecondCart}
              className="homePageTransformYouWorkFirstCartImage"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Analyze;
