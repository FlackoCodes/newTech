import Hero from "./HomePage/Hero";
import heroBG from "../images/img/Hero-Image.jpg";
import { careerData } from "../data";

export const Career = () => {
  return (
    <>
      <Hero
        backgroundImage={heroBG}
        heading="Career"
        paragraph="Lorem Ipsum is simply dummy text of the printing
        and typesetting industry."
      />
      <div className="my-12 lg:my-20 text-center">
        <h1 className="#2F2F2F w-auto  lg:w-[450px] my-0 mx-auto font-bold text-lg md:text-3xl">
          Become a part of our big family to inspire and get inspired by
          <span className="text-[#5956E9] block">professional experts.</span>
        </h1>
      </div>
      <div className="w-[80%] my-0 mx-auto">
        {careerData.map((data, id) => (
          <div key={id}>
            <h1 className="text-[#2f2f2f] font-bold text-lg md:text-3xl">
              {data.name}
            </h1>
            <div className="w-[78%] my-0 mx-auto">
              <div className="flex flex-col gap-2">
                <div>
                  {data.features.map((feature, id) => (
                    <div key={id} className="my-4 lg:my-12">
                      <h4 className="my-4 text-[#2f2f2f] font-semibold text-lg tracking-tight">
                        {feature.jobTitle}
                      </h4>
                      <div className="flex flex-col md:flex-row my-2.5 gap-1.5 font-normal">
                        <span className="text-[#2f2f2f]">
                          {feature.location} |
                        </span>
                        <span className="text-[#5956E9]">
                          {feature.jobType}
                        </span>
                      </div>
                      <div className="flex flex-col lg:flex-row justify-start gap-4">
                        <p className="w-auto lg:w-[650px] text-[#808080]">
                          {feature.jobDescription}
                        </p>
                        <div className="my-2">
                          <button
                            type="button"
                            className={`rounded-full py-2 px-4 mr-auto lg:mr-16 border border-gray-300 cursor-pointer text-[#2f2f2f] text-small font-normal ${
                              feature.id === 3 && "bg-black"
                            } ${feature.id === 3 && "text-white"}`}
                          >
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
