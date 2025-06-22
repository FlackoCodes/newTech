import Hero from "./HomePage/Hero"
import SubFoot from "./HomePage/SubFoot"
import heroBg from "../images/img/Hero-Image.jpg";
import { FaCheck } from "react-icons/fa6";

export default function PricingSingle() {
  return (
    <div>
      <Hero
        heading="Super Plan"
        paragraph="Lorem Ipsum is simply dummy text of the printing
          and typesetting industry."
        backgroundImage={heroBg}
      />
      <div className="w-[70%] my-0 mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="bg-[#F6F6F6] rounded-xl p-6 md:p-8 w-full max-w-md mx-auto shadow-sm flex flex-col items-start space-y-4">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
              Choose Your Plan Duration
            </h1>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Building an enterprise-level site doesn't need to be a nightmare or cost thousands.
            </p>

            <span className="text-lg md:text-xl font-bold text-[#5956E9]">
              $14.99 / month
            </span>

            <button className="w-full bg-[#5956E9] hover:bg-[#4a47d1] transition-colors duration-200 text-white font-medium py-2 px-6 rounded-full mt-2">
              Add to Cart
            </button>
          </div>


          <div className="p-4">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800 md:font-bold">
              Automated Google Search
              <br />
              Ads Autopilot
            </h1>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed my-2">
              Building an enterprisecompletxability to create  level site doesn't need nightmare cost your thousands. Felix is purpose built for ease of use and completxability to create even the most powerful of products.            </p>

            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" />
                All in Basic, plus
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" />
                Up to 10 credit cards
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" />
                Invest in stocks, ETFs and cryptos
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" />
                Premium customer support
              </li>
            </ul>
          </div>
        </div>
      </div>
      <SubFoot />
    </div>
  )
}
