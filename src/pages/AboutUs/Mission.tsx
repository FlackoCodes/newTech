import { FaCheck } from "react-icons/fa";
import missionImg from "../../images/img/Mission_1.jpg";
import missionImgTwo from "../../images/img/Mission_2.jpg";
import { valueData } from "../../data";

export default function Mission() {
  return (
    <div className="w-[78%] my-0 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-2.5">
          <div>
            <header>
              <h4 className="text-lg md:text-3xl text-[#2f2f2f] tracking-tight font-bold">
                Our Mission
              </h4>
            </header>
          </div>
          <div>
            <p className="text-[#808080] tracking-tight  w-auto md:w-[250px] lg:w-[450px]">
              Building an enterprise level site doesn't need nightmare or cost
              your thousands. Felix is purpose built for ease of use and
              completxability to create.
            </p>
          </div>
          <div>
            <ul className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <FaCheck className="text-green-400 p-1 rounded-full border-green-400 border" />
                <li className="text-black font-medium text-sm md:text-[16px]">
                  Posting to social media, blogs, and messengers
                </li>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-green-400 p-1 rounded-full border-green-400 border text-sm lg:text-lg" />
                <li className="text-black font-medium text-sm md:text-[16px]">
                  Working with images and videos
                </li>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-green-400 p-1 rounded-full border-green-400 border text-sm lg:text-lg" />
                <li className="text-black font-medium text-sm md:text-[16px]">
                  The Future of Writing Blog Articles
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 flex-col md:flex-row">
          <img
            src={missionImg}
            alt="team image"
            className="rounded  w-auto md:w-[130px] lg:w-[280px]"
          />
          <img
            src={missionImgTwo}
            alt="team image"
            className="rounded w-auto md:w-[130px] lg:w-[280px]"
          />
        </div>
      </div>
      <div className="my-6 md:my-12 lg:my-16">
        <div>
          <header className="text-center font-bold text-lg md:text-2xl my-6 md:my-16">
            <h5>Our Values</h5>
          </header>
        </div>
        <div className="w-auto md:w-[77%] my-0 mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
            {valueData.map((data, id) => (
              <div
                className="flex justfiy-center items-center gap-4 md:gap-6 flex-col"
                key={id}
              >
                <img src={data.icon} alt="logo" className="w-[40px]" />
                <h6 className="text-[#2f2f2f] font-mdeium md:font-bold md:text-2xl">
                  {data.title}
                </h6>
                <p className="text-[#808080] text-sm md:text-lg font-normal">
                  {data.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
