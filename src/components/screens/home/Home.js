import React from "react";
import "./Index.css";
import Header from "../header/Index.js";
// import BannerDesktopImage from "../../images/home_banner_desktop.jpg";
// import Betterment from "../../images/betterment.png";
// import Heap from "../../images/heap.png";
// import Public_Com from "../../images/public.com.png";
// import Therapeutics from "../../images/therapeutics.png";
// import Masterworks from "../../images/masterworks.png";
// import Rating from "../../images/rating.png";
import ManWorkFlow from "../../images/manWorkFlow.png";
// import One from "../../images/one.png";
// import Two from "../../images/two.png";
// import Three from "../../images/three.png";
import FirtCart from "../../images/firstcart.png";
import SecondCart from "../../images/secondcart.png";
import Thirdcart from "../../images/thirdcart.png";
import Stepone from "../../images/stepone.png";
import Steptwo from "../../images/steptwo.png";
import Stepthree from "../../images/stepthree.png";
import RotateBackgroundImage from "../../images/rotateBackgroundImage.png";
import Logo from "../../images/logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Quote from "../../images/quote.png";
import DarylAllen from "../../images/Daryl-Allen.jpg";
import JakeLeibersohn from "../../images/Jake-Leibersohn.jpg";
import MichaelOleis from "../../images/michael-oleis.png";
import ShawnGordon from "../../images/Shawn-Gordon.jpg";
import BrianWeisberg from "../../images/brian-weisberg.jpg";
import JeffGlovsky from "../../images/jeff-glovsky.jpg";
import JeremyTrujillo from "../../images/Jeremy-Trujillo.jpg";
import AlysseLundgren from "../../images/alysse-lundgren.jpg";
import MaryCaiello from "../../images/Mary-Caiello.jpg";
import PeteDinapole from "../../images/pete-dinapole.jpg";
import Check from "../../images/check.png";
import Footer from "../footer/Footer";
import FooterCartOne from "../../images/footerCartOne.jpg";
import FooterCartTwo from "../../images/footerCartTwo.jpg";
import FooterCartThree from "../../images/footerCartThree.jpg";
import Numaric from "../../images/numaric.png";
import PublilImage from "../../images/public_com.png";
import Soundstrip from "../../images/soundstrip.png";
import Laika from "../../images/laika.png";
import HappyClose from "../../images/happyClose.png";
import CartImageOne from "../../images/CartImageOne.png"
import CartImageTwo from "../../images/CartImageTwo.png"
import CartImageThree from "../../images/CartImageThree.png"
import ProblumsOne from "../../images/ProblumsOne.png"
import ProblumsTwo from "../../images/ProblumsTwo.png"
import ProblumsThree from "../../images/ProblumsThree.png"
import ProblumsFour from "../../images/ProblumsFour.png"
import ProblumsFive from "../../images/ProblumsFive.png"
import ProblumsSix from "../../images/ProblumsSix.png"




const Home = () => {
  // const CartContent = [
  //   {
  //     src: CartImageOne,
  //     text: "BOOK CLOSE",
  //     content:
  //       "Project management, Auto reconciliation, Proforma FS,Budget vs Actuals, Analytics",
  //   },
  //   {
  //     src: CartImageThree,
  //     text: "RISK MANAGEMENT",
  //     content:
  //       "Control framework management.",
  //   },
  // ];
  const GetWorkcart = [
    {
      src: Stepone,
      text: "Step 01",
      textOne: "Connect",
      texttwo: "your systems",
    },
    {
      src: Steptwo,
      text: "Step 02",
      textOne: "Build your",
      texttwo: "ideal workflows",
    },
    {
      src: Stepone,
      text: "Step 03",
      textOne: "Close",
      texttwo: "with ease",
    },
    {
      src: Stepthree,
      text: "Step 04",
      textOne: "Streamline",
      texttwo: "your audit",
    },
  ];

  const AccountCart = [
    {
      src: Quote,
      text: "Numeric fundamentally changed the way my team approaches the month end close. Our tasks are organized, support docs are linked, and we always know what’s outstanding and who’s responsible. Numeric has given me a level of confidence in our close accuracy and completeness that I’ve never had before.",
      name: "Daryl Allen",
      description: "Gremlin • Senior Director of Finance",
      image: DarylAllen,
    },
    {
      src: Quote,
      text: "I use Numeric almost every day and love it. It’s simple and flexible, and Numeric enables us to easily identify bottlenecks in our month end close process and key in on exactly which process improvements can cut days out of our close process.",
      name: "Jake Liebersohn",
      description: "Laika • Finance Manager",
      image: JakeLeibersohn,
    },
    {
      src: Quote,
      text: "Numeric helps our team stay very efficient and agile. Onboarding was quick - the month we made the decision we were able to use it in our close - and the conciseness of our close is now unreal. The solution shaves days off of our close, and we don’t need to go out and add headcount just to service manual processes.",
      name: "Michael Oleis",
      description: "Soundstripe • Director of Finance and Accounting",
      image: MichaelOleis,
    },
    {
      src: Quote,
      text: "Numeric has been a game changer for our close. It is extremely powerful, well designed, and integration with NetSuite means we always have current data. We're a small, nimble team at Hearth, and Numeric helps us reach our operational goals and leaves us with more time for projects to support our stakeholders.",
      name: "Shawn Gordon",
      description: "Hearth • Controller",
      image: ShawnGordon,
    },
    {
      src: Quote,
      text: "The addition of Numeric to our stack has been a huge help. The product was easy to setup, is simple to make adjustments on the fly, and makes reviewing the close a breeze. Numeric has helped me and my team recapture hours of work each month.",
      name: "Brian Weisberg",
      description: "Tidelift • Head of Finance &amp; Business Operations",
      image: BrianWeisberg,
    },
    {
      src: Quote,
      text: "It’s a damn good system and the team has been fantastic to work with. Numeric makes it easy to track what is needed to close and where we are. Being able to attach notes and support makes it easy see and use files or reports regularly needed. The flux tool makes finding and booking accruals a breeze. Reconciliations makes it easy to set thresholds and uncover issues in GL accounts.",
      name: "Jeff Glovsky",
      description: "Knowde • Assistant Controller",
      image: JeffGlovsky,
    },
    {
      src: Quote,
      text: "I’ve been using Numeric for over a year and I highly recommend it as a necessary tool for accounting leaders and their teams. It is a powerful platform that ties everything together in an elegant and simple manner, giving quick insight to any blockers or delays. I’ve implemented and used a number of close management products, and Numeric is by far the most robust and provides the most value.",
      name: "Jeremy Trujillo",
      description: "HMBradley • Controller",
      image: JeremyTrujillo,
    },
    {
      src: AlysseLundgren,
      text: "We use Numeric and love it! Going from a spreadsheet led monthly close process to Numeric has been a game-changer. It saves me a lot of time and keeps me a lot more organized. And they are super receptive to feedback, which I love!",
      name: "Alysse Lundgren",
      description: "Gremlin • Accounting Manager",
      image: AlysseLundgren,
    },
    {
      src: Quote,
      text: "Numeric made it really, really easy for us. The checklist has been super useful for just staying on top of everything and not letting anything fall through the cracks and the user experience is inuitive. Being able to link excel sheets for our reconciliations has been super helpful to us. It makes it really, really easy and saves us a lot of time because we automatically see whether or not our schedules tie to the NetSuite balances.",
      name: "Mary Caiello",
      description: "Public • Senior Accountant",
      image: MaryCaiello,
    },
    {
      src: Quote,
      text: "Numeric has truly rethought the month-end close from the ground up. With Numeric we are able to close faster and have more confidence in the numbers. And the product is just awesome to use.",
      name: "Pete DiNapoli",
      description: "EBX Logistics • CFO",
      image: PeteDinapole,
    },
  ];
  const HighGrowthCompanies =[
    {
      title:"For startups",
      text:"Experience a more streamlined month-end close and move beyond spreadsheets.",
      img:Check,
      textOne:"Core month-end close modules",
      textTwo:"Real-time collaboration tools",
      textThree:"QBO & Xero integration",
    },
    {
      title:"For startups",
      text:"Experience a more streamlined month-end close and move beyond spreadsheets.",
      img:Check,
      textOne:"Core month-end close modules",
      textTwo:"Real-time collaboration tools",
      textThree:"QBO & Xero integration",
    },
    {
      title:"For startups",
      text:"Experience a more streamlined month-end close and move beyond spreadsheets.",
      img:Check,
      textOne:"Core month-end close modules",
      textTwo:"Real-time collaboration tools",
      textThree:"QBO & Xero integration",
    },
  ];
  // const responsiveSwiper=[
  //   {
  //     img:Betterment,
  //   },
  //   {
  //     img:Heap,
  //   },
  //   {
  //     img:Public_Com,
  //   },
  //   {
  //     img:Therapeutics,
  //   },
  //   {
  //     img:Masterworks,
  //   }
  // ]
  return (
    <div className="MainContainer">
      <Header />
      <div className="homePageFirstContent">
        <div className="homePageFirstContentTextFeild">
          <p className="homePageFirstContentTextFeildHeader">
          One solution for all your reporting needs
          </p>
          {/* <p className="homePageFirstContentText">
            Numeric enables teams to close faster and improve collaboration,
            visibility and control.
          </p> */}
          <div className="homePageFirstContentInputFeild">
            <input
              type="text"
              placeholder="Your email"
              className="homePageFirstContentTextFeildInputFeild"
            />
            <button className="homePageFirstContentButton">
              Schedule Demo
            </button>
          </div>
        </div>
        <img
          src={HappyClose}
          className="homePageFirstContentDesktopImage"
          alt=""
        />
        {/* <div className="homePageFirstContentsubContainer">
          <div className="homePageFirstContentsubFeild">
            <p className="homePageFirstContentsubFeildText">
              Trusted by startups <br />& large enterprises
            </p>
            <div className="homePageFirstContentsubFeildImages">
              <img src={Betterment} alt="" />
              <img src={Heap} alt="" />
              <img src={Public_Com} alt="" />
              <img src={Therapeutics} alt="" />
              <img src={Masterworks} alt="" />
            </div>
            <Swiper 
            className="resiponsiveSwiper"
          spaceBetween={10}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
             {responsiveSwiper.map((data) => {
            return (
              <SwiperSlide >
                <img
                  src={data.img}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
          </Swiper>
          </div>
          <div className="homePageFirstContentsubRatingContent">
            <p className="homePageFirstContentsubRatingContentText">G2 5/5</p>
            <img src={Rating} alt="" />
          </div>
        </div> */}
      </div>
      <div className="homePageAccountingWorkFlowsContainer">
        <div className="homePageAccountingWorkFlowsContainerText">
          <p className="homePageAccountingWorkFlowsHeading">
            Reporting Workflows All Your Works
          </p>
          <p className="homePageAccountingWorkFlowsSubHeading">
          Happy close is your one stop solution to meet all your reporting requirements. Manage your book close, consolidate as per generally accepted accounting rules and collaborate and report with Happy close our seamless one solution for all your reporting needs
          </p>
        </div>
        <img src={ManWorkFlow} alt="" className="homePageAccountingWorkFlowsContentImage"/>
      </div>
      <div className="homePageFirstCartContainer">
            <div className="homePageFirstCartContent">
              <img src={CartImageOne} alt="" />
              <p className="homePageFirstCartContentHeader">BOOK CLOSE</p>
              <p className="homePageFirstCartContentTextFeilds">Project management, Auto reconciliation, Proforma FS,Budget vs Actuals, Analytics</p>
            </div>
            <div className="homePageFirstCartContentTwo">
            <img src={CartImageTwo} alt="" className="homePageFirstCartContentTwoImage"/>
            <div className="homePageFirstCartContentTwoImageTextFeild">
              <div>
              <p className="homePageFirstCartContentHeader">CONSOLIDATION</p>
              <p className="homePageFirstCartContentTextFeilds">IFRS/ US GAAP compliant consolidation engine, Inter company eliminations, currency revaluation</p>
              </div>
              <div>
              <p className="homePageFirstCartContentHeader">REPORTING</p>
              <p className="homePageFirstCartContentTextFeilds">Disclosure management, XBRL tagging, Reporting templates and Collaborative reporting</p>
              </div>
              </div>
            </div>
            <div className="homePageFirstCartContent">
              <img src={CartImageThree} alt="" />
              <p className="homePageFirstCartContentHeader">RISK MANAGEMENT</p>
              <p className="homePageFirstCartContentTextFeilds">Control framework management</p>
            </div>
      </div>
      <div className="happyCloseProblumSolutions">
        <h1 className="happyCloseProblumSolutionsHeader">Happy Close Addressing Your Problums</h1>
        <div className="happyCloseProblumSolutionsCartContainer">
          <div className="happyCloseProblumSolutionsCart">
            <img src={ProblumsOne} alt="" className="happyCloseProblumSolutionsCartImageOne"/>
            <p className="happyCloseProblumSolutionsCartText">No proper documentation for close adjustments- Risk of/ from Attrition, Accountability, Manual errors</p>
            <img src={ProblumsTwo} alt="" className="happyCloseProblumSolutionsCartImageOne"/>
            <p className="happyCloseProblumSolutionsCartText">Consolidation on spreadsheets -Risk of/from Attrition, Accountability, Manual errors</p>
            <img src={ProblumsThree} alt="" className="happyCloseProblumSolutionsCartImageOne"/>
            <p className="happyCloseProblumSolutionsCartText">Changing Regulatory/ Investor reporting landscape warranting agility (ESG, Regulatory disclosures)</p>
          </div>
          <div className="happyCloseProblumSolutionsCart">
          <img src={ProblumsFour} alt="" className="happyCloseProblumSolutionsCartImageTwo"/>
            <p className="happyCloseProblumSolutionsCartTwoText">No proper documentation for close adjustments- Risk of/ from Attrition, Accountability, Manual errors</p>
            <img src={ProblumsFive} alt="" className="happyCloseProblumSolutionsCartImageTwo"/>
            <p className="happyCloseProblumSolutionsCartTwoText">Consolidation on spreadsheets -Risk of/from Attrition, Accountability, Manual errors</p>
            <img src={ProblumsSix} alt="" className="happyCloseProblumSolutionsCartImageTwo"/>
            <p className="happyCloseProblumSolutionsCartTwoText">Changing Regulatory/ Investor reporting landscape warranting agility (ESG, Regulatory disclosures)</p>
          </div>
        </div>

      </div>
      <div className="homePageTransformYouWork">
        <h2 className="homePageTransformYouWorkText">
          Transform the way you work
        </h2>
        <p className="homePageTransformYouWorkContent">
          Numeric brings everything you need to close into one unified solution.
          Learn how accounting teams
          <br /> everywhere are modernizing their approach to the close with
          Numeric.
        </p>
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
          <div className="homePageTransformYouWorkThirdCart">
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
      <div className="homePageGetStartedMinutes">
        <h2 className="homePageGetStartedMinutesHeader">
          Get started in minutes
        </h2>
        <p className="homePageGetStartedMinutesText">
          Getting started is simple. Numeric is designed to get you into your
          <br />
          flow fast and to save you days every month.
        </p>
        <div className="homePageGetStartedMinutesCartContainer">
          {GetWorkcart.map((data) => {
            return (
              <div className="homePageGetStartedMinutesCart">
                <div className="homePageGetStartedMinutesCartImageContent">
                  <p className="homePageGetStartedMinutesCartStep">
                    {data.text}
                  </p>
                  <img src={data.src} alt="" />
                </div>
                <p className="homePageGetStartedMinutesCartContent">
                  {data.textOne}
                </p>
                <p className="homePageGetStartedMinutesCartContent">
                  {data.texttwo}
                </p>
              </div>
            );
          })}
        </div>
        <button className="homePageGetStartedMinutesCartButton">
          Schedule Demo
        </button>
      </div>
      <div className="homePageAccountantsLoveNumeric">
        <p className="homePageAccountantsLoveNumericHeading">
          Accountants love Numeric
        </p>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {AccountCart.map((data) => {
            return (
              <SwiperSlide className="homePageAccountantsLoveNumericSwiperContent">
                <img
                  src={data.src}
                  alt=""
                  className="homePageAccountantsLoveNumericSwiperQuote"
                />
                <p className="homePageAccountantsLoveNumericSwiperText">
                  {data.text}
                </p>
                <div className="homePageAccountantsLoveNumericSwiperFooterContent">
                  <div className="homePageAccountantsLoveNumericSwiperNameContent">
                    <p className="homePageAccountantsLoveNumericSwiperPersonName">
                      {data.name}
                    </p>
                    <p className="homePageAccountantsLoveNumericSwiperPersonDescription">
                      {data.description}
                    </p>
                  </div>
                  <img
                    src={data.image}
                    alt=""
                    className="homePageAccountantsLoveNumericSwiperPersonImage"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="homePageIntagrstionsSofwares">
        <p className="homePageIntagrstionsSofwaresHeading">
          Seamless integration
          <br />
          with your favorite software
        </p>
        <div>
          <img
            src={RotateBackgroundImage}
            alt=""
            className="homePageIntagrstionsSofwaresBackgroundFirstImage"
          />
          <img
            src={RotateBackgroundImage}
            alt=""
            className="homePageIntagrstionsSofwaresBackgroundSecondImage"
          />
          <img
            src={RotateBackgroundImage}
            alt=""
            className="homePageIntagrstionsSofwaresBackgroundThirdImage"
          />
          <img
            src={Logo}
            alt=""
            className="homePageIntagrstionsSofwaresBackgroundLogo"
          />
        </div>
      </div>
      <div className="homePagePoweringHighGrowthCompanies">
        <p className="homePagePoweringHighGrowthCompaniesHeading">Powering high-growth<br/> companies at every stage</p>
        <div className="homePagePoweringHighGrowthCompaniesCartContent">
        {HighGrowthCompanies.map((data)=>{
          return(
            <div className="homePagePoweringHighGrowthCompaniesCart">
              <p className="homePagePoweringHighGrowthCompaniesTitle">{data.title}</p>
              <p className="homePagePoweringHighGrowthCompaniesText">{data.text}</p>
              <p className="homePagePoweringHighGrowthCompaniesContent"><img src={data.img} alt="" className="homePagePoweringHighGrowthCompaniesImage"/>{data.textOne}</p>
              <p><img src={data.img} alt="" className="homePagePoweringHighGrowthCompaniesImage"/>{data.textTwo}</p>
              <p><img src={data.img} alt="" className="homePagePoweringHighGrowthCompaniesImage"  />{data.textThree}</p>
            </div>
          )
        })}
        </div>
      </div>
      <div className="homePageCustomerStories">
      <p className="homePageCustomerHeader">Customer stories</p>
        <p className="homePageCustomerStoriesText">
          Dive into our case studies and learn more about how Numeric empowers
          businesses.
        </p>
        <div className="HomePageFooterContentCart">
          <div className="HomePageFooterContentCartOne">
            <img
              src={FooterCartOne}
              alt=""
              className="HomePageFooterContentCartHeaderImage"
            />
            <div className="HomePageFooterContentCartHeaderImageContent">
              <img
                src={Numaric}
                alt=""
                className="HomePageFooterContentCartHeaderImageOne"
              />
              <img
                src={PublilImage}
                alt=""
                className="HomePageFooterContentCartHeaderImageTwo"
              />
            </div>
            <p className="HomePageFooterContentCartOneHeading">
              Numeric X Public.com
            </p>
            <p className="HomePageFooterContentCartOneText">
              With Numeric, Public’s accounting team was
              <br /> able to cut days off their month-end close.
            </p>
          </div>
          <div className="HomePageFooterContentCartOne">
            <img
              src={FooterCartTwo}
              alt=""
              className="HomePageFooterContentCartHeaderImage"
            />
            <div className="HomePageFooterContentCartHeaderImageContent">
              <img
                src={Numaric}
                alt=""
                className="HomePageFooterContentCartHeaderImageOne"
              />
              <img
                src={Soundstrip}
                alt=""
                className="HomePageFooterContentCartHeaderImageTwo"
              />
            </div>
            <p className="HomePageFooterContentCartOneHeading">
              Numeric X Soundstripe
            </p>
            <p className="HomePageFooterContentCartOneText">
              Learn how Soundstripe implemented Numeric
              <br /> in minutes and gets days back every month.
            </p>
          </div>
          <div className="HomePageFooterContentCartOne">
            <img
              src={FooterCartThree}
              alt=""
              className="HomePageFooterContentCartHeaderImage"
            />
            <div className="HomePageFooterContentCartHeaderImageContent">
              <img
                src={Numaric}
                alt=""
                className="HomePageFooterContentCartHeaderImageOne"
              />
              <img
                src={Laika}
                alt=""
                className="HomePageFooterContentCartThreeHeaderImageTwo"
              />
            </div>
            <p className="HomePageFooterContentCartOneHeading">
              Numeric X Laika
            </p>
            <p className="HomePageFooterContentCartOneText">
              Numeric helps Laika identify bottlenecks and <br /> streamline
              their reconciliations.
            </p>
          </div>
        </div>
      </div>
     <Footer/>
    </div>
  );
};
export default Home;