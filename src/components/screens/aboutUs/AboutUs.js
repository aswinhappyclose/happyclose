import React from "react";
import Header from "../header/Index.js";
import "./Index.css";
import Footer from "../footer/Footer.js";
import homePageCartOne from "../../images/homePageCartOne.png";
import homePageCartTwo from "../../images/homePageCartTwo.png";
import homePageCartThree from "../../images/homePageCartThree.png";
import homePageCartFour from "../../images/homePageCartFour.png";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SepImage from "../../images/Sep-2022.png";
import OctImage from "../../images/Oct-2022.png";
import NovImageOne from "../../images/Nov-2022-1.png";
import NovImageTwo from "../../images/Nov-2022-2.png";
import ClosingBook from "../../images/ClosingBook.png";
import Reporting from "../../images/Reporting.png";
import BannerImage1 from "../../images/BannerImage1.png";

const AboutUs = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Header />
      <div className="newsPapperClippes">
        <div className="newsPapperClippesCart">
          <div id="overlay">
            <img src={homePageCartOne} alt="" />
            <p className="newsPapperClippesCartText">
              Byju’s Reports Widening Losses After Prolonged Audit Delay -
              Bloomberg
            </p>
          </div>
        </div>
        <div className="newsPapperClippesCart">
          <div className="overlay One">
            <img src={homePageCartTwo} alt="" />
            <p className="newsPapperClippesCartText">
              The new reporting requirements under the Companies (Auditors’
              Report) Order will only make the audit report lengthier and
              complex for shareholders - Business Line
            </p>
          </div>
        </div>
        <div className="newsPapperClippesCart">
          <div className="overlay Two">
            <img src={homePageCartFour} alt="" />
            <p className="newsPapperClippesCartText">
              {" "}
              Indian Regulator SEBI Mulls Mandatory Audit for ESG Disclosures -
              Bloomberg Tax
            </p>
          </div>
        </div>
        <div className="newsPapperClippesCart">
          <div className="overlay Three">
            <img src={homePageCartThree} alt="" />
            <p className="newsPapperClippesCartText">
              MCA mulls imposing fines on unicorns over delay in filing
              financials - Business Standard
            </p>
          </div>
        </div>
      </div>
      <div className="aboutHappyCloseHistory">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Sep 2022" value="1" />
                <Tab label="Oct 2022" value="2" />
                <Tab label="Nov 2022" value="3" />
                <Tab label="Dec 2022" value="4" />
                <Tab label="May 2023" value="5" />
                <Tab label="July 2023" value="6" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div className="aboutUsTabPanelContent">
                <p className="aboutUsTabPanelContentText">
                  Casual coffee meet between two best friends turns into intense
                  discussion about problems faced by them in their role as
                  financial controllers. "Expensive reporting modules and lack
                  of tech driven close & consolidation is the problem", they
                  conclude.
                </p>
                <img
                  src={SepImage}
                  alt=""
                  className="aboutUsTabPanelContentImage"
                />
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div className="aboutUsTabPanelContent">
                <p className="aboutUsTabPanelContentText">
                  They decide to put a stop to the long working hours of
                  financial controllers and conceive an idea to bring a paradigm
                  shift in the world of book close to reporting process.
                </p>
                <img
                  src={OctImage}
                  alt=""
                  className="aboutUsTabPanelContentImage"
                />
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div className="aboutUsTabPanelContent">
                <p className="aboutUsTabPanelContentText">
                  The two best friends finally begin to pursue their dream -
                  solve the greatest challenges of controllers together. Years
                  of big four experience coupled with experience as financial
                  controllers was their investment.{" "}
                </p>
                <div>
                  <img src={NovImageOne} alt="" />
                  <img src={NovImageTwo} alt="" />
                </div>
              </div>
            </TabPanel>
            <TabPanel value="4">
              <div className="aboutUsTabPanelContent">
                <div className="aboutUsTabPanelContentText">
                  <h2>Happy Close was born.</h2>
                  <p>
                    Not sure if the name is because "simplicity is new
                    sophistication" or we couldn't come up with a better one at
                    the moment.
                  </p>
                </div>
                <img
                  src={BannerImage1}
                  alt=""
                  className="aboutUsTabPanelContentImageHappyClose"
                />
              </div>
            </TabPanel>
            <TabPanel value="5">
              <div className="aboutUsTabPanelContent">
                <p className="aboutUsTabPanelContentText">
                  Book Close module of happy close is scheduled to be rolled out
                </p>
                <img
                  src={ClosingBook}
                  alt=""
                  className="aboutUsTabPanelContentImage"
                />
              </div>
            </TabPanel>
            <TabPanel value="6">
              <div className="aboutUsTabPanelContent">
                <p className="aboutUsTabPanelContentText">
                  Consolidation and Reporting modules of happy close are
                  scheduled to be rolled out
                </p>
                <img
                  src={Reporting}
                  alt=""
                  className="aboutUsTabPanelContentImage"
                />
              </div>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
      <div className="aboutUsLeftandRightContent">
        <div className="aboutUsLeftandRightCart">
          <p className="textFeildContent">
            {" "}
            Established products generate more than 70% of revenue from US and
            focus on SEC reporting.{" "}
          </p>
          <p className="textFeildContentRight">
            Happy Close is an automated platform that supports Indian reporting
            requirements.
          </p>
        </div>
        <div className="aboutUsLeftandRightCart">
          <p className="textFeildContentTwo">
            Large solutions are currentlty fragmented
          </p>
          <p className="textFeildContentTwoRight">
            Happy Close is a one stop integrated platform can improve efficiency
            and collaboration among teams.
          </p>
        </div>
        <div className="aboutUsLeftandRightCart">
          <p className="textFeildContent">
            Tech investment in finance is majorly in planning and not on
            reporting and existing solutions are expensive.
          </p>
          <p className="textFeildContentRight">
            Happy Close is inexpensive and can support both planning and
            reporting
          </p>
        </div>
        <div className="aboutUsLeftandRightCart">
          <p className="textFeildContentTwo">
            Lack of advanced user-friendly UI which is also GAAP and ERP
            agnostic
          </p>
          <p className="textFeildContentTwoRight">
            Happy Close brings a fresh perspective to book close process as the
            user can integrate basic excel workings to the reporting process. It
            reduces the need to learn new technologies and eliminates resistance
            to change.
          </p>
        </div>
      </div>
      <div className="aboutUsOurModuleContent">
        <div className="aboutUsOurModuleCart">
          <p className="aboutUsOurModuleCartText">Book Close</p>
        </div>
        <div className="aboutUsOurModuleCart">
          <p className="aboutUsOurModuleCartText">Consolidation</p>
        </div>{" "}
        <div className="aboutUsOurModuleCart">
          <p className="aboutUsOurModuleCartText">Reporting</p>
        </div>{" "}
        <div className="aboutUsOurModuleCart">
          <p className="aboutUsOurModuleCartText">Risk Management</p>
        </div>
      </div>
      <div className="aboutUsMainContainer">
        <div className="aboutUsBannerCantainer">
          <h1 className="aboutUsBannerCantainerHeading">Arjun Parthasarathy</h1>
          <p className="aboutUsBannerCantainerText">CO-FOUNDER</p>
          <p className="aboutUsBannerCantainerText">
            CHARTERED ACCOUNTANT | DATA SCIENTIST ‍EX-EY
          </p>
          <p className="aboutUsBannerCantainerText">
            Jay is a thinker and problem-solver. He enjoys reading & learning
            across a wide span of topics. His current interests are Scrabble,
            visual design, and video games.
          </p>
          <div className="aboutUsPageSocialMediaContent">
            <i class="bi bi-envelope-at-fill Message"></i>
            <i class="bi bi-linkedin LinkedIn"></i>
          </div>
        </div>
        <div className="aboutUsBannerCantainer">
          <h1 className="aboutUsBannerCantainerHeading">RJ Narayanan</h1>
          <p className="aboutUsBannerCantainerText">CO-FOUNDER</p>
          <p className="aboutUsBannerCantainerText">
            CHARTERED ACCOUNTANT | DATA SCIENTIST ‍EX-EY
          </p>
          <p className="aboutUsBannerCantainerText">
            Sri is heart-led and instinctive. A sports enthusiast and a die-hard
            Liverpool FC fan. He likes to live a full life – playing badminton,
            long drives, moonlight treks, or wildlife safaris – he loves it all.
          </p>
          <div className="aboutUsPageSocialMediaContent">
            <i class="bi bi-envelope-at-fill Message"></i>
            <i class="bi bi-linkedin LinkedIn"></i>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AboutUs;
