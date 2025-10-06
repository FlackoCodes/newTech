import Hero from "./HomePage/Hero";
import bgImg from "../images/img/Hero-Image.jpg";
import featureImg from "../images/img/featuresImg.png";
import featureSocials from "../images/img/featureSocial.png";
import featIcon from "../images/img/mainIcon.png";
import hashtag from "../images/img/hashtag.png";
import smart from "../images/img/smart.png";
import plan from "../images/img/planMain.png";
import codent from "../images/img/codentMain.png";
import postIcon from "../images/img/post.png";
import profileIcon from "../images/img/profile.png";
import summaryIcon from "../images/img/summary.png";
import Fam from "../components/Fam";

export default function Features() {
  return (
    <>
      <Hero
        backgroundImage={bgImg}
        heading="Easily Schedule
        Your Social Media Posts"
        graphicsImage={featureImg}
        heightClass="lg:h-[500px]"
      />
      <div className="mt-auto  lg:mt-120">
        <div className="w-[75%] my-0 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <img
                src={featureSocials}
                className="rounded w-[500px]"
                alt="social media icons"
              />
            </div>
            <div className="flex flex-col gap-2.5 lg:gap-8 justify-items-center py-8 lg:py-26">
              <h4 className="font-normal md:font-bold text-zinc-900 tracking-tighttext-lg md:text-3xl w-auto md:w-[350px]">
                All your social media accounts at one place
              </h4>
              <p className="text-[#808080]">
                Building an enterprise level site doesn't need nightmare or cost
                your thousands. Felix is purpose built for ease of use and
                completxability to create even the most powerful of products.
              </p>
              <div className="flex flex-col md:flex-row gap-2.5 items-start md:items-center">
                <img src={featIcon} className="w-[60px]" alt="icon" />
                <div>
                  <h5 className="text-lg  md:text-2xl font-normal md:font-semibold">
                    SmartSchedule
                  </h5>
                  <p className="text-[#808080]">
                    Building an enterprise doesn't need your thousands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 1 */}
      <div className="w-[75%] my-0 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 md:my-16">
          <div className="flex flex-col items-start gap-2 5 md:gap-4">
            <h4 className="text-lg md:text-4xl w-auto md:w-[350px] tracking-tighter">
              Plan a month's worth of social media posts in minutes
            </h4>
            <p className="text-[#808080]">
              Building an enterprise level site doesn't need nightmare or cost
              your thousands. Felix is purpose built for ease of use and
              completxability to create even the most powerful of products.
            </p>
            <div className="flex flex-col md:flex-row gap-2.5 items-start md:items-center">
              <img src={smart} className="w-[60px]" alt="icon" />
              <div>
                <h5 className="text-lg  md:text-2xl font-normal md:font-semibold">
                  SmartSchedule
                </h5>
                <p className="text-[#808080]">
                  Building an enterprise doesn't need your thousands.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2.5 items-start md:items-center">
              <img src={hashtag} className="w-[60px]" alt="icon" />
              <div>
                <h5 className="text-lg  md:text-2xl font-normal md:font-semibold">
                  Hashtag Finder
                </h5>
                <p className="text-[#808080]">
                  Building an enterprise doesn't need your thousands.
                </p>
              </div>
            </div>
            <div className="p-6 bg-[#5956E9] rounded-[20px] shadow-[0px_19px_37px_0px_rgba(86,86,86,0.25)] flex justufy-center items-center text-white text-center gap-2.5">
              <span className="font-bold text-lg md:text-2xl">100%</span>
              <span className="font-medium">Safe to Use</span>
            </div>
          </div>
          <div>
            <img src={plan} alt="main plan image" className="rounded-[10px]" />
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="w-[75%] my-0 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 md:my-16">
          <div className="flex flex-col items-start gap-2 5 md:gap-4">
            <h4 className="text-lg md:text-4xl w-auto md:w-[350px] tracking-tighter">
              Condent Plan Do More of What’s Working
            </h4>
            <p className="text-[#808080]">
              Building an enterprise level site doesn't need nightmare or cost
              your thousands. Felix is purpose built for ease of use and
              completxability to create even the most powerful of products.
            </p>
            <p>
              Building an enterprise level site doesn't need nightmare or cost
              your thousands. Felix is purpose built for ease .
            </p>
            <div className="flex flex-col md:flex-row gap-2.5 items-start md:items-center">
              <img src={profileIcon} className="w-[60px]" alt="icon" />
              <div>
                <h5 className="text-lg  md:text-2xl font-normal md:font-semibold">
                  Profile Performance
                </h5>
                <p className="text-[#808080]">
                  Building an enterprise doesn't need your thousands.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2.5 items-start md:items-center">
              <img src={postIcon} className="w-[60px]" alt="icon" />
              <div>
                <h5 className="text-lg  md:text-2xl font-normal md:font-semibold">
                  Post Inspector
                </h5>
                <p className="text-[#808080]">
                  Building an enterprise doesn't need your thousands.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2.5 items-start md:items-center">
              <img src={summaryIcon} className="w-[60px]" alt="icon" />
              <div>
                <h5 className="text-lg  md:text-2xl font-normal md:font-semibold">
                  Summary Reports
                </h5>
                <p className="text-[#808080]">
                  Building an enterprise doesn't need your thousands.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={codent} alt="codet image" className="rounded-[10px]" />
          </div>
        </div>
      </div>
      {/* 3 */}
      <Fam />
      {/* use props for the last */}
    </>
  );
}
