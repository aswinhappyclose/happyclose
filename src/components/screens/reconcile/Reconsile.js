import React from "react";
import Header from "../header/Index.js";
import "./Index.css";
import homeBannerDesktop from "../../images/home_banner_desktop.jpg";
import TieOutOne from "../../images/TieOutOne.png";
import TieOutTwo from "../../images/TieOutTwo.png";
import TieOutThree from "../../images/TieOutThree.png";
import AccelerateOne from "../../images/AccelerateOne.png";
import AccelerateTwo from "../../images/AccelerateTwo.png";
import AccelerateThree from "../../images/AccelerateThree.png";
import AccelerateFour from "../../images/AccelerateFour.png";
import InternalControlsOne from "../../images/InternalControlsOne.png";
import InternalControlsTwo from "../../images/InternalControlsTwo.png";
import InternalControlsThree from "../../images/InternalControlsThree.png";
import InternalControlsFour from "../../images/InternalControlsFour.png";
import Footer from "../footer/Footer.js";
import FirtCart from "../../images/firstcart.png";
import Thirdcart from "../../images/thirdcart.png";



const Reconcile = () => {
  return (
    <div>
      <Header />
      <div className="reconcilePagemainContainer">
        <div className="reconcileBannerContent">
          <h1 className="reconcileBannerContentHeading">Reconcile</h1>
          <p className="reconcileBannerContentText">
            Standardize and streamline account <br />
            reconciliations for a faster and more accurate
            <br /> close.
          </p>
          <button className="reconcileBannerContentButton">
            Schedule Demo
          </button>
        </div>
        <img src={homeBannerDesktop} alt="" className="reconcileBannerImage" />
      </div>
      <div className="reconcileTieOut">
        <h1 className="reconcileTieOutHeading">Tie out with ease</h1>
        <p className="reconcileTieOutText">
          Connect live data from your general ledger and supporting workpapers
          to ensure that your financials are <br />
          always correct and you are the first to know if anything changes.
        </p>
        <div className="reconcileTieOutCantainer">
            <div className="reconcileTieOutCart">
                <div className="reconcileTieOutCartOne">
                    <div className="reconcileTieOutCartOneTextContent">
                        <p className="reconcileTieOutCartOneTextContentHeading">Connect your existing workpapers</p>
                        <p className="reconcileTieOutCartOneTextContentText">Easily integrate with your file storage and existing workpapers to ensure they tie out against the general ledger.</p>
                    </div>
                    <img src={TieOutOne} alt="" className="reconcileTieOutCartOneImage"/>
                </div>
                <div className="reconcileTieOutCartTwo">
                    <div className="reconcileTieOutCartTwoTextContent">
                        <p className="reconcileTieOutCartTwoTextContentHeading">Never export a trial balance again</p>
                        <p className="reconcileTieOutCartTwoTextContentText">Real-time refreshes and native integrations ensure your numbers are always up to date.</p>
                    </div>
                    <img src={TieOutTwo} alt="" className="reconcileTieOutCartTwoImage"/>
                </div>
            </div>
            <div className="reconcileTieOutCartThree">
                <div className="reconcileTieOutCartThreeContent">
                    <p className="reconcileTieOutCartThreeContentHeader">Always be the first to <br/> know if a balance <br/>changes</p>
                    <p className="reconcileTieOutCartThreeContenttext">Automations and alerts ensure that unexpected changes in reconciliations are flagged so they can be proactively updated.</p>
                </div>
                <img src={TieOutThree} alt="" className="reconcileTieOutCartThreeImage"/>
            </div>
        </div>
      </div>
      <div className="reconcileAccelerate">
        <h1 className="reconcileAccelerateHeading">Accelerate your close</h1>
        <p className="reconcileAccelerateText">Reconciliations are deeply integrated with your close workflow, so you can easily add them to your process <br/> and manage all of your closing procedures in one place.</p>
        <div className="reconcileAccelerateCartContainer">
            <div className="reconcileAccelerateFirstCart">
                <p className="reconcileAccelerateFirstCartHeading">Build detailed workflows into your close checklist</p>
                <p className="reconcileAccelerateFirstCartText">Add reconciliations directly to your close process to track progress, procedures, and all of your close processes in one place.</p>
                <img src={AccelerateOne} alt="" className="reconcileAccelerateFirstCartImage"/>
            </div>
            <div className="reconcileAccelerateSecondCart">
                <div>
                    <p className="reconcileAccelerateSecondCartHeader"> Reconcile when ready </p>
                    <p className="reconcileAccelerateSecondCartText">Manage and track dependencies so you can begin account reconciliations earlier in your close.</p>
                </div>
                <img src={AccelerateTwo} alt=""/>
            </div>
        </div>
        <div className="reconcileAccelerateSecondCartContainer">
          <div className="reconcileAccelerateSecondCartContent">
            <div>
            <p className="reconcileAccelerateSecondCartTextFeild">
            Always know where your recs stand </p>
            <p className="reconcileAccelerateSecondCartFeild">Detailed progress breakdowns ensure everyone knows what accounts still need to be tied out to finish the close.</p>
            </div>
            <img src={AccelerateThree} alt="" className="reconcileAccelerateSecondCartContentImage"/>
          </div>
          <div className="reconcileAccelerateSecondCartContent">
            <div>
            <p className="reconcileAccelerateSecondCartTextFeild">
            Roll forward with ease </p>
            <p className="reconcileAccelerateSecondCartFeild">Simply open the next period and start working on up-to-date documents.</p>
            </div>
            <img src={AccelerateFour} alt="" className="reconcileAccelerateSecondCartContentImage"/>
          </div>
        </div>
      </div>
      <div className="reconcileiIternalControls">
        <h1 className="reconcileiIternalControlsHeading">Enhance internal controls</h1>
        <p className="reconcileiIternalControlsText">Maintain continuous audit readiness with built-in controls and a complete audit trail of the work performed.</p>
        <div className="reconcileAccelerateCartContainer">
            <div className="reconcileAccelerateFirstCart">
                <p className="reconcileAccelerateFirstCartHeading">Standardize processes and set thresholds</p>
                <p className="reconcileAccelerateFirstCartText">Easily build out standard processes for reconciliations and define materiality thresholds to ensure accuracy.</p>
                <img src={InternalControlsOne} alt="" className="reconcileInternalControlsFirstCartImage"/>
            </div>
            <div className="reconcileAccelerateSecondCart">
                <div>
                    <p className="reconcileAccelerateSecondCartHeader">Complete and detailed audit trail</p>
                    <p className="reconcileAccelerateSecondCartText">Track everything in Numeric with granular audit trails that show all activity.</p>
                </div>
                <img src={InternalControlsTwo} alt=""/>
            </div>
        </div>
        <div className="reconcileAccelerateSecondCartContainer">
          <div className="reconcileAccelerateSecondCartContent">
            <div>
            <p className="reconcileAccelerateSecondCartTextFeild">
            Close period and lock down changes </p>
            <p className="reconcileAccelerateSecondCartFeild">Ensure that no changes are made to reconciliations post-close.</p>
            </div>
            <img src={InternalControlsThree} alt="" className="reconcileInternalCantrolsSecondCartContentImage"/>
          </div>
          <div className="reconcileAccelerateSecondCartContent">
            <div>
            <p className="reconcileAccelerateSecondCartTextFeild">
            Manage segregation of duties </p>
            <p className="reconcileAccelerateSecondCartFeild">Reviews have never been easier. With Numeric, everyone can breeze through their close faster than ever.</p>
            </div>
            <img src={InternalControlsFour} alt="" className="reconcileAccelerateSecondCartContentImage"/>
          </div>
        </div>
      </div>
      <div className="reConsileTransformYouWork">
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
          <div className="homePageReconcilThirdCart">
            <div className="homePageTransformYouWorkSecondCartcontent">
              <p className="homePageTransformYouWorkSecondCartcontentHeading">
                Analyze
              </p>
              <p className="homePageTransformYouWorkSecondCartcontentContent">
                Drill into the details
              </p>
              <p className="homePageTransformYouWorkSecondCartcontentLearnMore">
                Learn More
              </p>
            </div>
            <img
              src={Thirdcart}
              className="homePageTransformYouWorkFirstCartImage"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default Reconcile;
