import React from "react";
import "./Index.css";
import Header from "../header/Index.js";
import BannerDesktopImage from "../../images/home_banner_desktop.jpg";
import ConsolidateOne from "../../images/ConsolidateOne.png";
import ConsolidateTwo from "../../images/ConsolidateTwo.png";
import ConsolidateThree from "../../images/ConsolidateThree.png";
import ConsolidateFour from "../../images/ConsolidateFour.png";
import ConsolidateFive from "../../images/ConsolidateFive.png";
import TotalVisibilityOne from "../../images/TotalVisibilityOne.png";
import TotalVisibilityTwo from "../../images/TotalVisibilityTwo.png";
import TotalVisibilityThree from "../../images/TotalVisibilityThree.png";
import TotalVisibilityFour from "../../images/TotalVisibilityFour.png";
import TotalVisibilityFive from "../../images/TotalVisibilityFive.png";
import AuditReadyOne from "../../images/Audit-readyOne.png";
import AuditReadyTwo from "../../images/Audit-readyTwo.png";
import AuditReadyThree from "../../images/Audit-readyThree.png";
import AuditReadyFour from "../../images/Audit-readyFour.png";
import BuildTeamWorkOne from "../../images/BuildTeamWorkOne.png";
import BuildTeamWorkTwo from "../../images/BuildTeamWorkTwo.png";
import BuildTeamWorkThree from "../../images/BuildTeamWorkThree.png";
import BuildTeamWorkFour from "../../images/BuildTeamWorkFour.png";
import WorkFasterOne from "../../images/WorkFasterOne.png";
import WorkFasterTwo from "../../images/WorkFasterTwo.png";
import WorkFasterThree from "../../images/WorkFasterThree.png";
import WorkFasterFour from "../../images/WorkFasterFour.png";
import WorkFasterFive from "../../images/WorkFasterFive.png";
import SecurityOne from "../../images/SecurityOne.png";
import SecurityTwo from "../../images/SecurityTwo.png";
import SecurityThree from "../../images/SecurityThree.png";
import Footer from "../footer/Footer.js";
import ClosePageFooterOne from "../../images/ClosePageFooterOne.png";
import ClosePageFooterTwo from "../../images/ClosePageFooterTwo.png";

const Close = () => {
  const Consollidate = [
    {
      title: "Effortlessly roll forward",
      text: "Set tasks to recur at any frequency – monthly, quarterly, annually, or on a custom cadence – so you always have the right checklist at the right time.",
      src: ConsolidateThree,
    },
    {
      title: "Notification inbox",
      text: "View and resolve comments, get updates, perform reviews, and more from one dedicated place.",
      src: ConsolidateFour,
    },
    {
      title: "Capture all of the context",
      text: "Use rich-text procedures, pinned links, and more to document the details, so all the information is in one place.",
      src: ConsolidateFive,
    },
  ];
  const TotalVisibility = [
    {
      title: "Instant search",
      text: "Instantly find the answers to your questions using our incredibly fast search engine.",
      src: TotalVisibilityThree,
    },
    {
      title: "Powerful filters & views",
      text: "Zero in on what’s important to you and keep track of your work from any angle.",
      src: TotalVisibilityFour,
    },
    {
      title: "Daily digest",
      text: "Ensure your whole team knows what’s on deck for the day and if there are overdue items with personalized summaries.",
      src: TotalVisibilityFive,
    },
  ];
  const AuditReady = [
    {
      title: "Maintain a full audit trail",
      text: "Maintain a complete record of every activity in Numeric, so you can access every detail.",
      src: AuditReadyThree,
    },
    {
      title: "Lock periods to preserve the record",
      text: "Restrict editing in closed periods so you have total confidence in the records.",
      src: AuditReadyFour,
    },
  ];
  const BuildTeamWork = [
    {
      title: "Work in Slack",
      text: "Receive notifications when tasks are ready for you to review and when collaborators require your assistance. Instantly view previews of tasks mentioned in your Slack channels.",
      src: BuildTeamWorkThree,
    },
    {
      title: "Tag and notify",
      text: "Designate preparers and reviewers to ensure that compliance processes are properly followed.",
      src: BuildTeamWorkFour,
    },
  ];
  const WorkFastCloseFaster = [
    {
      title: "Easily make edits",
      text: "Whether making one-off changes or updating your procedures for future periods, fast in-line and bulk edits mean making changes is a breeze.",
      src: WorkFasterThree,
    },
    {
      title: "Keyboard shortcuts",
      text: "Discover a wide range of keyboard shortcuts designed to save your team time and energy.",
      src: WorkFasterFour,
    },
    {
      title: "Everything you need at a glance",
      text: "Know at a glance what tasks need to be completed each day, and see how the whole team is progressing.",
      src: WorkFasterFive,
    },
  ];
  const Security=[
    {
      src:SecurityOne,
      title:"SOC 2",
      text:"Numeric is SOC 2 certified, providing the highest level of security and control.",
    },
    {
      src:SecurityTwo,
      title:"SSO & SAML",
      text:"Restrict permissions for users whenever required. With Numeric, you are always in control.",
    },
    {
      src:SecurityThree,
      title:"End-to-end encryption",
      text:"Bank-level encryption provides the highest level of protection for your data.",
    },
  ]
  return (
    <div className="mainContainer">
      <Header />
      <div className="closePageMainContent">
        <div className="closePageFirstContent">
          <div className="closePageFirstContentTextFeild">
            <p className="closePageFirstContentTextFeildHeader">Close</p>
            <p className="closePageFirstContentText">
              Centralize and streamline the month-end close <br />
              with recurring workflows and collaboration tools.
            </p>
            <button className="closePageFirstContentButton">
              Schedule Demo
            </button>
          </div>
          <img
            src={BannerDesktopImage}
            className="closePageFirstContentDesktopImage"
            alt=""
          />
        </div>
        <div className="ClosePageConsolidate">
          <h1 className="ClosePageConsolidateHeader">Consolidate your close</h1>
          <p className="ClosePageConsolidateSubHader">
            Numeric is built to enable you to move as fast as possible.
            Streamline the month-end close with recurring
            <br /> workflows and automations built for speed and control.
          </p>
          <div className="ClosePageConsolidateCartContainer">
            <div className="ClosePageConsolidateFirstCartContent">
              <div>
                <h1 className="ClosePageConsolidateFirstCartHeader">
                  Purpose-built <br />
                  for month-end
                  <br /> activities
                </h1>
                <p className="ClosePageConsolidateFirstCartText">
                  Track and manage your whole close from one place, including
                  journal entries, reconciliations, flux analysis, review notes,
                  tasks, and subtasks.
                </p>
              </div>
              <img src={ConsolidateOne} alt="" />
            </div>
            <div className="ClosePageConsolidateSecondCartContent">
              <p className="ClosePageConsolidateSecondCartContentHeading">
                Flexibility <br />
                to fit how you work
              </p>
              <p className="ClosePageConsolidateSecondCartContentText">
                Choose how you want to structure your workflow, with the
                flexibility to manage your work by team, entity, and more.
              </p>
              <img
                src={ConsolidateTwo}
                alt=""
                className="ClosePageConsolidateSecondCartContentImage"
              />
            </div>
          </div>
          <div className="ClosePageConsolidateThirdCartContent">
            {Consollidate.map((data) => {
              return (
                <div className="ClosePageConsolidateThirdCart">
                  <div className="ClosePageConsolidateThirdCartHeadingcontent">
                    <p className="ClosePageConsolidateThirdCartHeading">
                      {data.title}
                    </p>
                    <p className="ClosePageConsolidateThirdCartText">
                      {data.text}
                    </p>
                  </div>
                  <img
                    src={data.src}
                    alt=""
                    className="ClosePageConsolidateThirdCartImage"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="closePageTotalVisibility">
          <h1 className="ClosePageTotalVisibilityHeader">Total visibility</h1>
          <p className="ClosePageTotalVisibilitySubHeader">
            Track workflows from start to finish, gain full visibility and a
            continuous overview of your team's progress, and <br />
            receive live updates. Always be the first to know if issues arise.
          </p>
          <div className="ClosePageTotalVisibilityCartContainer">
          <div className="ClosePageTotalVisibilitySecondCartContent">
              <p className="ClosePageTotalVisibilitySecondCartContentHeading">
              Slice and dice progress
              </p>
              <p className="ClosePageTotalVisibilitySecondCartContentText">
              Custom overview pages, notifications, and more so you know where you stand and what’s on deck.
              </p>
              <img
                src={TotalVisibilityOne}
                alt=""
                className="ClosePageTotalVisibilitySecondCartContentImage"
              />
            </div>
            <div className="ClosePageTotalVisibilityFirstCartContent">
              <div>
                <h1 className="ClosePageTotalVisibilityFirstCartHeader">
                Drill into Progress
                </h1>
                <p className="ClosePageTotalVisibilityFirstCartText">
                Stay up to date on the status of the close and easily identify bottlenecks and dependencies that are slowing things down.
                </p>
              </div>
              <img src={TotalVisibilityTwo} alt="" />
            </div>
           
          </div>
          <div className="ClosePageTotalVisibilityThirdCartContent">
            {TotalVisibility.map((data) => {
              return (
                <div className="ClosePageTotalVisibilityThirdCart">
                  <div className="ClosePageTotalVisibilityThirdCartHeadingcontent">
                    <p className="ClosePageTotalVisibilityThirdCartHeading">
                      {data.title}
                    </p>
                    <p className="ClosePageTotalVisibilityThirdCartText">
                      {data.text}
                    </p>
                  </div>
                  <img
                    src={data.src}
                    alt=""
                    className="ClosePageTotalVisibilityThirdCartImage"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="ClosePageAuditReady">
          <h1 className="ClosePageConsolidateHeader">Audit-ready controls</h1>
          <p className="ClosePageConsolidateSubHader">
          Unify, document, and execute comprehensive controls with detail, so you can efficiently implement best-in-<br/>class financial controls and be SOX-ready.
          </p>
          <div className="ClosePageConsolidateCartContainer">
            <div className="ClosePageConsolidateFirstCartContent">
              <div>
                <h1 className="ClosePageConsolidateFirstCartHeader">
                Implement <br />
                efficient 
                  <br /> reviews
                </h1>
                <p className="ClosePageConsolidateFirstCartText">
                Manage your segregation of duties with preparer and reviewer roles built in to ensure your work is complete and reviewed.
                </p>
              </div>
              <img src={AuditReadyOne} alt="" />
            </div>
            <div className="ClosePageConsolidateSecondCartContent">
              <p className="ClosePageConsolidateSecondCartContentHeading">
              Easily resolve <br />
              outstanding issues
              </p>
              <p className="ClosePageConsolidateSecondCartContentText">
              Quickly provide notes and collaborate on ongoing work to get to the bottom of any outstanding items.
              </p>
              <img
                src={AuditReadyTwo  }
                alt=""
                className="ClosePageConsolidateSecondCartContentImage"
              />
            </div>
          </div>
          <div className="ClosePageConsolidateThirdCartContent">
            {AuditReady.map((data) => {
              return (
                <div className="ClosePageAduitReadyThirdCart">
                  <div className="ClosePageAuditReadyThirdCartHeadingcontent">
                    <p className="ClosePageAduitReadyThirdCartHeading">
                      {data.title}
                    </p>
                    <p className="ClosePageConsolidateThirdCartText">
                      {data.text}
                    </p>
                  </div>
                  <img
                    src={data.src}
                    alt=""
                    className="ClosePageAduitReadyThirdCartImage"
                  />
                </div>
              );
            })}
          </div>
          <button className="ClosePageAduitReadyThirdCartButton">Schedule Demo</button>
        </div>
        <div className="closePageBuiltTeamWork">
          <h1 className="ClosePageBuildTeamWorkHeader">Built for teamwork</h1>
          <p className="ClosePageBuildTeamWorkSubHader">
          Numeric is designed to enable your team to do their best work and to provide best-in-class financial <br/>controls. Work together with ease and breeze through your next financial audit.
          </p>
          <div className="ClosePageConsolidateCartContainer">
          <div className="ClosePageConsolidateSecondCartContent">
              <p className="ClosePageBuildTeamWorkSecondCartContentHeading">
              Invite your team
              </p>
              <p className="ClosePageConsolidateSecondCartContentText">
              Instantly find specific tasks or a set of tasks that meet your criteria, using filters and full-text search.
              </p>
              <img
                src={BuildTeamWorkOne}
                alt=""
                className="ClosePageConsolidateSecondCartContentImage"
              />
            </div>
            <div className="ClosePageConsolidateFirstCartContent">
              <div>
                <h1 className="ClosePageConsolidateFirstCartHeader">
                Collaborate in real time
                </h1>
                <p className="ClosePageConsolidateFirstCartText">
                Enjoy rich messaging and team discussions that capture every detail.
                </p>
              </div>
              <img src={BuildTeamWorkTwo} alt="" />
            </div>
            
          </div>
          <div className="ClosePageConsolidateThirdCartContent">
            {BuildTeamWork.map((data) => {
              return (
                <div className="ClosePageAduitReadyThirdCart">
                  <div className="ClosePageAuditReadyThirdCartHeadingcontent">
                    <p className="ClosePageAduitReadyThirdCartHeading">
                      {data.title}
                    </p>
                    <p className="ClosePageConsolidateThirdCartText">
                      {data.text}
                    </p>
                  </div>
                  <img
                    src={data.src}
                    alt=""
                    className="ClosePageAduitReadyThirdCartImage"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="ClosePageWorkFastCloseFaster">
          <h1 className="ClosePageConsolidateHeader">Work fast, close faster</h1>
          <p className="ClosePageConsolidateSubHader">
          Numeric not only enables you to build out your close process but also empowers you by helping you close <br/> with greater efficiency.
          </p>
          <div className="ClosePageConsolidateCartContainer">
            <div className="ClosePageConsolidateFirstCartContent">
              <div>
                <h1 className="ClosePageConsolidateFirstCartHeader">
                Automate <br />
                routine 
                  <br /> procedures
                </h1>
                <p className="ClosePageConsolidateFirstCartText">
                Build flexible workflows that put recurring work on autopilot.
                </p>
              </div>
              <img src={WorkFasterOne} alt="" />
            </div>
            <div className="ClosePageConsolidateSecondCartContent">
              <p className="ClosePageWorkFastCloseFasterSecondCartContentHeading">
              Data that is always <br />
              up to date
              </p>
              <p className="ClosePageConsolidateSecondCartContentText">
              Blazingly fast integrations ensure that every time you view the numbers, they are good to go.
              </p>
              <img
                src={WorkFasterTwo}
                alt=""
                className="ClosePageConsolidateSecondCartContentImage"
              />
            </div>
          </div>
          <div className="ClosePageConsolidateThirdCartContent">
            {WorkFastCloseFaster.map((data) => {
              return (
                <div className="ClosePageConsolidateThirdCart">
                  <div className="ClosePageConsolidateThirdCartHeadingcontent">
                    <p className="ClosePageConsolidateThirdCartHeading">
                      {data.title}
                    </p>
                    <p className="ClosePageConsolidateThirdCartText">
                      {data.text}
                    </p>
                  </div>
                  <img
                    src={data.src}
                    alt=""
                    className="ClosePageWorkFastCloseFasterThirdCartImage"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="closePageSecurity">
          <h1 className="closePageSecurityHeading">Security at the core</h1>
          <p className="closePageSecurityText">Stay safe and secure with best-in-class security that keeps your data locked up tight.</p>
          <div className="closePageSecurityContainer">
            {Security.map((data)=>{
              return(
                <div className="closePageSecurityContent">
                  <img src={data.src} alt=""/>
                  <p className="closePageSecurityContentHeading">{data.title}</p>
                  <p className="closePageSecurityContentText">{data.text}</p>
                </div>
              )
            })}
          </div>
        </div>
        
        <div className="closePageTransformYouWork">
        <div className="closePageTransformYouWorkcartContainer">
          <div className="closePageTransformYouWorkSecondCart">
            <div className="closePageTransformYouWorkSecondCartcontent">
              <p className="closePageTransformYouWorkSecondCartcontentHeading">
                Reconcile
              </p>
              <p className="closePageTransformYouWorkSecondCartcontentContent">
              Always be audit ready
              </p>
              <p className="closePageTransformYouWorkSecondCartcontentLearnMore">
                Learn More
              </p>
            </div>
            <img
              src={ClosePageFooterOne}
              className="closePageTransformYouWorkFirstCartImage"
              alt=""
            />
          </div>
          <div className="closePageTransformYouWorkThirdCart">
            <div className="closePageTransformYouWorkSecondCartcontent">
              <p className="closePageTransformYouWorkSecondCartcontentHeading">
                Analyze
              </p>
              <p className="closePageTransformYouWorkSecondCartcontentContent">
              Drill into the details
              </p>
              <p className="closePageTransformYouWorkSecondCartcontentLearnMore">
                Learn More
              </p>
            </div>
            <img
              src={ClosePageFooterTwo}
              className="closePageTransformYouWorkFirstCartImage"
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
