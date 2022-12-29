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
import ProblumsFour from "../../images/ProblumsFour.png";
import ProblumsFive from "../../images/ProblumsFive.png";
import ProblumsSix from "../../images/ProblumsSix.png";
import SECReportQustion from "../../images/SECReportQustion.jpg";
import SECReportQustionTwo from "../../images/SECReportQustionTwo.png";
import LargeSolutions from "../../images/LargeSolutions.png";
import LargeSolutionsTwo from "../../images/LargeSolutionsTwo.png";
import Inversment from "../../images/Inversment.png";
import InversmentTwo from "../../images/InversmentTwo.png";
import friendly from "../../images/friendly.png";
import friendlyTwo from "../../images/friendlyTwo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const AboutUs = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const problumAndSolution = [
    {
      img: SECReportQustion,
      text: " Established products generate more than 70% of revenue from US and focus on SEC reporting.",
      image: SECReportQustionTwo,
      textOne:
        "Happy Close is an automated platform that supports Indian reporting requirements.",
    },
    {
      img: LargeSolutions,
      text: "Large solutions are currentlty fragmented",
      image: LargeSolutionsTwo,
      textOne:
        " Happy Close is a one stop integrated platform can improve efficiency and collaboration among teams.",
    },
    {
      img: Inversment,
      text: "Tech investment in finance is majorly in planning and not on reporting and existing solutions are expensive.",
      image: InversmentTwo,
      textOne:
        " Happy Close is inexpensive and can support both planning and reporting",
    },
    {
      img: friendly,
      text: " Lack of advanced user-friendly UI which is also GAAP and ERP agnostic",
      image: friendlyTwo,
      textOne:
        " Happy Close brings a fresh perspective to book close process as the user can integrate basic excel workings to the reporting process. It reduces the need to learn new technologies and eliminates resistance to change.",
    },
  ];
  return (
    <>
      <Header />
      <div className="aboutHappyCloseHistory">
        <h1 className="aboutHappyCloseHistoryHeading">
          Seamless book close to reporting process by accountants for
          accountants…
        </h1>
        <p className="aboutHappyCloseHistoryText">
          Let's solve our greatest challenges together
        </p>
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
      <p className="newsPapperClippesHeading">
        Key metrics that led to the birth of happy close
      </p>
      <div className="newsPapperClippes">
        <div className="newsPapperClippesCart">
          <div id="overlay">
            <img src={homePageCartOne} alt="" />
            <p className="newsPapperClippesCartText">
              High cost of delayed reporting
            </p>
          </div>
        </div>
        <div className="newsPapperClippesCart">
          <div className="overlay One">
            <img src={homePageCartTwo} alt="" />
            <p className="newsPapperClippesCartText">
              Ever changing disclosure requirements
            </p>
          </div>
        </div>
        <div className="newsPapperClippesCart">
          <div className="overlay Two">
            <img src={homePageCartFour} alt="" />
            <p className="newsPapperClippesCartText">
              {" "}
              Lack of integration between teams
            </p>
          </div>
        </div>
        <div className="newsPapperClippesCart">
          <div className="overlay Three">
            <img src={homePageCartThree} alt="" />
            <p className="newsPapperClippesCartText">Abundance of data</p>
          </div>
        </div>
      </div>
      <div className="aboutUsKeymetrics">
        <header>Newspost HappyClose</header>
        <div class="subhead">
          Chennai - Thursday February 14, 1997 - Seven Pages
        </div>
        <div class="content">
          <div class="collumns">
            <div class="collumn">
              <div class="head">
                <span class="headline hl3">
                  Byju’s Reports Widening Losses After Prolonged Audit Delay
                </span>
                <p>
                  <span class="headline hl4">Bloomberg</span>
                </p>
              </div>
            </div>
            <div class="collumn">
              <div class="head">
                <span class="headline hl5">
                  {" "}
                  The new reporting requirements will only make the audit report
                  lengthier and complex for shareholders
                </span>
                <p>
                  <span class="headline hl6">Business Line</span>
                </p>
              </div>
            </div>
            <div class="collumn">
              <div class="head">
                <span class="headline hl1">
                  {" "}
                  Indian Regulator SEBI Mulls Mandatory Audit for ESG
                  Disclosures{" "}
                </span>
                <p>
                  <span class="headline hl2">Bloomberg Tax</span>
                </p>
              </div>
            </div>
            <div class="collumn">
              <div class="head">
                <span class="headline hl3">
                  {" "}
                  MCA mulls imposing fines on unicorns over delay in filing
                  financials
                </span>
                <p>
                  <span class="headline hl4"> Business Standard </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="SolutionsResultsHeading">Happyclose Modules</h1>
      <div className="SolutionsResults">
        <div className="happyCloseProblumSolutionsCart">
          <img
            src={ProblumsFour}
            alt=""
            className="happyCloseProblumSolutionsOneCartImageOne"
          />
          <p className="happyCloseProblumSolutionsOneCartText">
            Intelligent close manager with - real time PL, Easy workflow, Audit
            trail
          </p>
        </div>
        <div className="happyCloseProblumSolutionsCart">
          <img
            src={ProblumsFive}
            alt=""
            className="happyCloseProblumSolutionsOneCartImageOne"
          />
          <p className="happyCloseProblumSolutionsOneCartText">
            Smart (GAAP agnostic) consolidation engine-automate consolidation
            adjustments
          </p>
        </div>
        <div className="happyCloseProblumSolutionsCart">
          <img
            src={ProblumsSix}
            alt=""
            className="happyCloseProblumSolutionsCartImageOne"
          />
          <p className="happyCloseProblumSolutionsCartText">
            Connected solution with customisable templates to avoid errors,
            duplication of effort, enable one source of truth, walk the last
            mile (XBRL conversion)
          </p>
        </div>
      </div>
      <div className="aboutUsProblumAndSolutionsContainer">
        <Swiper spaceBetween={50} slidesPerView={3}>
          {problumAndSolution.map((data) => {
            return (
              <SwiperSlide>
                <div className="problumandSolutioncart">
                  <div className="problumandSolutioncartOne">
                    <img
                      src={data.img}
                      alt=""
                      className="problumandSolutioncartFirstImage"
                    />
                    <p className="problumandSolutioncartFirstText">
                      {data.text}
                    </p>
                  </div>
                  <div className="problumandSolutioncartTwo">
                    <img
                      src={data.image}
                      alt=""
                      className="problumandSolutioncartFirstImage"
                    />
                    <p className="problumandSolutioncartFirstText">
                      {data.textOne}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
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
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">
              <i class="bi bi-envelope-at-fill Message"></i>
            </a>
            <a href="https://in.linkedin.com/">
              <i class="bi bi-linkedin LinkedIn"></i>
            </a>
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
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">
              <i class="bi bi-envelope-at-fill Message"></i>
            </a>
            <a href="https://in.linkedin.com/">
              <i class="bi bi-linkedin LinkedIn"></i>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AboutUs;
