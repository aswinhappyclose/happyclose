import React from "react";
import Header from "../header/Index.js";
import "./Index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import OurValueOne from "../../images/OurValueOne.png";
import OurValueTwo from "../../images/OurValueTwo.png";
import OurValueThree from "../../images/OurValueThree.png";
import OurValueFour from "../../images/OurValueFour.png";
import Palantir from "../../images/Palantir.png";
import BlackRock from "../../images/BlackRock.png";
import Asana from "../../images/Asana.png";
import Segment from "../../images/Segment.png";
import ImageOne from "../../images/ImageOne.png";
import ImageTwo from "../../images/ImageTwo.png";
import ImageThree from "../../images/ImageThree.png";
import ImageFour from "../../images/ImageFour.png";
import ImageFive from "../../images/ImageFive.png";
import ImageSix from "../../images/ImageSix.png";
import FoundresFund from "../../images/FoundresFund.png";
import LongJourneyVentures from "../../images/LongJourneyVentures.png";
import FifthDown from "../../images/FifthDown.png";
import FriendsAndFamily from "../../images/FriendsAndFamily.png";
import Footer from "../footer/Footer.js";



const AboutUs = () => {
  const OurValues = [
    {
      img: OurValueOne,
      tittle: "Make It Easy",
      text: "Make it simple. Make it easy. We are constantly looking for new ways to make it easier for our customers to do their jobs. By reducing complexity and allowing our customers to work faster, we give them more time to focus on achieving their key objectives.",
    },
    {
      img: OurValueTwo,
      tittle: "Inspire Confidence",
      text: "Confidence is key. As a team, we inspire confidence in one another. As a partner to our customers, we inspire confidence by giving them greater visibility and control.",
    },
    {
      img: OurValueThree,
      tittle: "Enable Discovery",
      text: "Discovery is at the heart of everything we do, whether we are exploring ways of solving problems for customers or enabling them to make empowering discoveries.",
    },
    {
      img: OurValueFour,
      tittle: "Bring People Together",
      text: "We are dedicated to making it easier for co-workers to come together and work together. By designing for better collaboration, we ensure teams at companies everywhere profit from smoother and more rewarding experiences.",
    },
  ];
  return (
    <>
      <Header />
      <div className="aboutUsBannerCantainer">
        <h1 className="aboutUsBannerCantainerHeading">About Numeric</h1>
        <p className="aboutUsBannerCantainerText">
          Learn about the mission, vision, values, and <br />
          people behind Numeric.
        </p>
        <button className="aboutUsBannerCantainerButton">Schedule Demo</button>
      </div>
      <div className="aboutPageMissionAndVision">
        <div className="aboutPageMission">
          <h1 className="aboutPageMissionHeader"> Our mission </h1>
          <p className="aboutPageMissionTextOne">
            Numeric supercharges accounting workflows, increasing speed through
            efficiency, building confidence through accuracy, and delivering
            insight through detail.
          </p>
          <p className="aboutPageMissionTextTwo">
            We provide accounting teams with a centralized view of their
            month-end close, so they can work faster and close sooner.
          </p>
          <p className="aboutPageMissionTextTwo">
            More collaborative. More repeatable. More consistent. Numeric is
            where accounting teams work together and financial data comes
            together to find order.
          </p>
        </div>
        <div className="aboutPageVision">
          <h1 className="aboutPageMissionHeader"> Our vision </h1>
          <p className="aboutPageMissionTextOne">
            Numeric enables companies to have total trust in their financials
            and make better decisions with confidence.
          </p>
          <p className="aboutPageMissionTextTwo">
            We believe that every business should be equipped with the financial
            information they need — when they need it — freeing them to discover
            actionable and transformative insights.
          </p>
        </div>
      </div>
      <div className="aboutPageOurValues">
        <h1 className="aboutPageOurValuesHeading">Our values</h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {OurValues.map((data) => {
            return (
              <SwiperSlide className="aboutPageOurValuesSwiperContent">
                <img src={data.img} alt="" />
                <h2 className="aboutPageOurValuesSwiperHeading">
                  {data.tittle}
                </h2>
                <p className="aboutPageOurValuesSwiperText">{data.text}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="aboutUsInvestors">
        <h1 className="aboutUsInvestorsHeading">
          Built by startup veterans
          <br /> and backed by top-tier
          <br /> investors
        </h1>
        <p className="aboutUsInvestorsText">
          Our experienced team comes from building best-in-class data and
          productivity companies,
          <br /> including Palantir, Segment, Asana, and Blackrock.
        </p>
        <div className="aboutPageImageCartOne">
            <img src={Palantir} alt=""/>
            <img src={BlackRock} alt=""/>
            <img src={Asana} alt=""/>
            <img src={Segment} alt=""/>
        </div>
        <div className="aboutPageInvester">
        <img src={ImageOne} alt="" className="aboutPageInvesterImageOne"/>
        <img src={ImageTwo} alt="" className="aboutPageInvesterImageTwo"/>
        <img src={ImageThree} alt="" className="aboutPageInvesterImageThree"/>
        <img src={ImageFour} alt="" className="aboutPageInvesterImageFour"/>
        <img src={ImageFive} alt="" className="aboutPageInvesterImageFive"/>
        <img src={ImageSix} alt="" className="aboutPageInvesterImageSix"/>
        </div>
        <p className="aboutPageInvisiter">We are backed by Founders Fund, Long Journey Ventures, Friends & Family Capital, and the<br/> founders of Palantir, Segment, Ramp, Candid, Redesign Health, Better.com, Hearth,<br/> and many more.</p>
        <div className="aboutPageImageCartOne">
            <img src={FoundresFund} alt=""/>
            <img src={LongJourneyVentures} alt=""/>
            <img src={FifthDown} alt=""/>
            <img src={FriendsAndFamily} alt=""/>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default AboutUs;
