import mainOne from "../../images/img/mainOne.jpg";
import groupPic from "../../images/img/Maingroup.jpg";
import icon from "../../images/img/mainIcon.png";
import iconTwo from "../../images/img/icon2.png";
import { stats } from "../../data";

export default function Main() {
  return (
    <div className="w-[78%] my-0 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col items-start gap-2.5 md:gap-8">
          <img
            src={mainOne}
            className="rounded"
            alt="image of two staff members"
          />
          <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-4">
            <div className="bg-[#5956E9] rounded text-[#ffffff]  p-4 md:p-6 flex flex-col justify-center items-center align-middle">
              <h4 className="text-lg md:text-3xl font-bold">500K</h4>
              <span className="font-medium">Daily Active Users</span>
            </div>
            <div>
              <img src={groupPic} className="rounded" alt="group picture" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:gap-6 p-4">
          <h4 className="text-2xl md:text-3xl  font-bold font-['Mullish'] tracking-tight">
            We're on a mission to bring ideas to life.
          </h4>
          <p className="text-[#808080] font-normal text-lg border-b border-gray-200 pb-6">
            Building an enterprise level site doesn't need nightmare or cost
            your thousands. Felix is purpose built for ease of use and
            completxability to create even the most powerful of products.
          </p>
          <div className="flex flex-col md:flex-row gap-2..5 items-center border-none my-4">
            <img src={icon} className="w-[60px]" alt="icon" />
            <div>
              <h5 className="text-lg md:text-2xl font-normal md:font-semibold">
                How technology started
              </h5>
              <p className="text-[#808080]">
                Building an enterprise doesn't need your thousands.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2.5 items-center">
            <img src={iconTwo} className="w-[60px]" alt="icon" />
            <div>
              <h5 className="text-lg  md:text-2xl font-normal md:font-semibold">
                Endless Possibilities
              </h5>
              <p className="text-[#808080]">
                Building an enterprise doesn't need your thousands.
              </p>
            </div>
          </div>
          <div className="bg-[#2F2F2F] rounded-full text-white p-4 w-fit text-lg md:text-xl my-4">
            <button>Join Our Team</button>
          </div>
        </div>
      </div>
      <div className="text-center my-4 md:my-24">
        <div className="my-8 items-center">
          <h4 className="font-[Poppins] text-lg md:text-2xl font-normal md:font-bold  md:w-[400px] my-0 mx-auto">
            Businesses all over the world trust Buffer to build their brand
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-2 md:my-8 border-b border-[#DCDCDC]">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center gap-2">
                <h4 className="font-[Poppins] text-3xl font-bold text-[#5956E9]">
                  {stat.title}
                </h4>
                <p className="text-[#808080] font-normal font-[Montserrat] capitalize mb-2 md:mb-12">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
