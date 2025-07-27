import Hero from "./HomePage/Hero";
import bgImage from "../images/img/Hero-Image.jpg";
import PricingComp from "../components/PricingComp";
import priceIcon from "../images/img/priceIcon.svg";
import Comparison from "../components/Comparison";

export default function Pricing() {
  return (
    <>
      <Hero
        backgroundImage={bgImage}
        heading="This is Our Pricing Table"
        paragraph="Lorem Ipsum is simply dummy text of the printing
        and typesetting industry"
      />
      <div className="my-2">
        <PricingComp />
        <div className="w-[78%] my-0 mx-auto">
          <div className="my-2 md:my-4 bg-[#F6F6F6] text-white rounded-[5px] flex flex-col md:flex-row gap-4 md:gap-6 items-center p-4">
            <div className="bg-[#5956E9] rounded flex py-2 md:py-4 px-4 md:px-8  flex-col gap-2.5 md:gap-6">
              <div className="text-center">
                <img src={priceIcon} className="w-[100px]" alt="price-icon" />
              </div>
              <p className="font-bold text-lg text-center">
                100% <span className="block">No-Risk</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="tracking-tighter font-bold text-lg md:text-3xl text-gray-950">
                Our 100% No-Risk Money Back Guarantee
              </h4>
              <p className="text-[#808080] w-auto md:w-[800px]">
                Over the next 5 days, make an informed decision if Thech meets
                the hype. If you're not whistling with joy from the content
                Jarvis wrote for you, then simply email we'll instantly refund
                100% of your money... I'm confident that when you sign up today,
                you'll get exactly what you need to write content at scale,
                fast.
              </p>
              <span className="font-bold text-gray-950">Co-Founder, CEO</span>
            </div>
          </div>
        </div>
        <Comparison />
      </div>
    </>
  );
}
