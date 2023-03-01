import React from "react";
import "./Index.css";
import homePageCartOne from "../../themes/images/homePageCartOne.png";
import homePageCartTwo from "../../themes/images/homePageCartTwo.png";
import homePageCartThree from "../../themes/images/homePageCartThree.png";
import homePageCartFour from "../../themes/images/homePageCartFour.png";
// import SepImage from "../../themes/images/Sep-2022.png";
// import OctImage from "../../themes/images/Oct-2022.png";
// import NovImageOne from "../../themes/images/Nov-2022-1.png";
// import NovImageTwo from "../../themes/images/Nov-2022-2.png";
// import ClosingBook from "../../themes/images/ClosingBook.png";
// import Reporting from "../../themes/images/Reporting.png";
// import BannerImage1 from "../../themes/images/BannerImage1.png";
// import ZFLogo from "../../themes/images/ZFLogo.jpg";
// import Consolidate from "../../themes/images/Consolidate.png";

const AboutUs = () => {
  // useEffect(() => {
  //   document.getElementById("defaultOpen").click();
  // });

  // const openCity = (evt, cityName) => {
  //   var i, tabcontent, tablinks;
  //   tabcontent = document.getElementsByClassName("tabcontent");
  //   for (i = 0; i < tabcontent.length; i++) {
  //     tabcontent[i].style.display = "none";
  //   }
  //   tablinks = document.getElementsByClassName("tablinks");
  //   for (i = 0; i < tablinks.length; i++) {
  //     tablinks[i].className = tablinks[i].className.replace(" active", "");
  //   }
  //   document.getElementById(cityName).style.display = "block";
  //   evt.currentTarget.className += " active";
  // };

  return (
    <>
      {/* <div className="aboutHappyCloseHistory">
        <h1 className="aboutHappyCloseHistoryHeading">
          Seamless book close to reporting process by accountants for
          accountants…
        </h1>
        <p className="aboutHappyCloseHistoryText">
          Let's solve our greatest challenges together
        </p>
        <div className="aboutHappyCloseHistoryContent">
          <div class="tab">
            <button
              class="tablinks"
              onClick={(event) => openCity(event, "London")}
              id="defaultOpen"
            >
              Sep 2022
            </button>
            <button
              class="tablinks"
              onClick={(event) => openCity(event, "Paris")}
            >
              {" "}
              Oct 2022
            </button>
            <button
              class="tablinks"
              onClick={(event) => openCity(event, "Tokyo")}
            >
              {" "}
              Nov 2022
            </button>
            <button
              class="tablinks"
              onClick={(event) => openCity(event, "india")}
            >
              Dec 2022
            </button>
            <button class="tablinks" onClick={(event) => openCity(event, "us")}>
              May 2023
            </button>
            <button class="tablinks" onClick={(event) => openCity(event, "uk")}>
              July 2023
            </button>
          </div>
          <div id="London" class="tabcontent">
            <div className="aboutUsTabPanelContent">
              <p className="aboutUsTabPanelContentText">
                Casual coffee meet between two best friends turns into intense
                discussion about problems faced by them in their role as
                financial controllers. "Expensive reporting modules and lack of
                tech driven close & consolidation is the problem", they
                conclude.
              </p>
              <img
                src={SepImage}
                alt=""
                className="aboutUsTabPanelContentImage"
              />
            </div>
          </div>
          <div id="Paris" class="tabcontent">
            <div className="aboutUsTabPanelContent">
              <p className="aboutUsTabPanelContentText">
                They decide to put a stop to the long working hours of financial
                controllers and conceive an idea to bring a paradigm shift in
                the world of book close to reporting process.
              </p>
              <img
                src={OctImage}
                alt=""
                className="aboutUsTabPanelContentImage"
              />
            </div>
          </div>
          <div id="Tokyo" class="tabcontent">
            <div className="aboutUsTabPanelContent">
              <p className="aboutUsTabPanelContentText">
                The two best friends finally begin to pursue their dream - solve
                the greatest challenges of controllers together. Years of big
                four experience coupled with experience as financial controllers
                was their investment.{" "}
              </p>
              <div className="aboutUsNovContentImages">
                <img
                  src={NovImageOne}
                  alt=""
                  className="aboutUsNovContentImageOne"
                />
                <img
                  src={NovImageTwo}
                  alt=""
                  className="aboutUsNovContentImageTwo"
                />
                <img src={ZFLogo} alt="" className="ZFLogo" />
              </div>
            </div>
          </div>
          <div id="india" class="tabcontent">
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
          </div>
          <div id="us" class="tabcontent">
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
          </div>
          <div id="uk" class="tabcontent">
            <div className="aboutUsTabPanelContent">
              <p className="aboutUsTabPanelContentText">
                Consolidation and Reporting modules of happy close are scheduled
                to be rolled out
              </p>
              <img
                src={Reporting}
                alt=""
                className="aboutUsTabPanelContentImageJuly"
              />
              <img
                src={Consolidate}
                alt=""
                className="aboutUsTabPanelContentImageJuly"
              />
            </div>
          </div>
        </div>
      </div> */}
      <p className="newsPapperClippesHeading">
        Factors that led to the birth of happy close
      </p>
      <div className="newsPapperClippes">
        <div className="newsPapperClippesCart">
          <div id="overlay">
            <img
              src={homePageCartOne}
              alt=""
              className="newsPapperClippesCartImage"
            />
            <p className="newsPapperClippesCartText">
              Remote / Hybrid working is here to stay
            </p>
          </div>
        </div>
        <div className="newsPapperClippesCart">
          <div className="overlay One">
            <img
              src={homePageCartTwo}
              alt=""
              className="newsPapperClippesCartImageTwo"
            />
            <p className="newsPapperClippesCartText">
              High Cost of incorrect/ delayed reporting
            </p>
          </div>
        </div>
        <div className="newsPapperClippesCart">
          <div className="overlay Two">
            <img
              src={homePageCartThree}
              alt=""
              className="newsPapperClippesCartImageThree"
            />
            <p className="newsPapperClippesCartText">
              {" "}
              Spreadsheets are no longer a viable alternative for a growing
              company
            </p>
          </div>
        </div>
        <div className="newsPapperClippesCart">
          <div className="overlay Three">
            <img
              src={homePageCartFour}
              alt=""
              className="newsPapperClippesCartImageFour"
            />
            <p className="newsPapperClippesCartText">
              Reporting solutions need to be local{" "}
            </p>
          </div>
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
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">
              <i class="bi bi-envelope-at-fill Message"></i>
            </a>
            <a href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAAX1uf8BAIFovyeNjUH3ag2bCzpWM1IxRi0&keywords=arjun%20parthasarathy&origin=RICH_QUERY_SUGGESTION&position=1&searchId=1be60506-c83e-4ef1-a604-b01b7492d065&sid=S()">
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
            <a href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAAyuZk4Begwgfb9raAElWYoSXPPonlpUJ4c&keywords=rj%20narayanan&origin=RICH_QUERY_SUGGESTION&position=1&searchId=2cf0b7e8-3e2c-4c58-a724-da1c4fdc6532&sid=%3AVs">
              <i class="bi bi-linkedin LinkedIn"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
