import { LuDot } from "react-icons/lu";
import React from "react";

interface HeroProps {
  heading?: string;
  paragraph?: string;
  paragraphTwo?: string;
  buttonText?: string;
  graphicsImage?: string;
  formsComponent?: React.ComponentType;
  backgroundImage?: string;
  profileImage?: string;
  name?: string;
  date?: number | string;
  time?: string;
  quote?: string;
  heightClass?: string;
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  heading,
  paragraph,
  // paragraphTwo,
  buttonText,
  graphicsImage,
  formsComponent,
  profileImage,
  date,
  time,
  name,
  quote,
  heightClass,
}) => {
  const FormsComponent = formsComponent;

  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "auto 1500px",
        }}
        className={`w-[90%] my-0 mx-auto relative bg-cover bg-center bg-no-repeat rounded-lg mt-4 mb-8 ${
          heightClass || "auto"
        }`}
      >
        <div className="flex flex-col items-center px-4 py-8 md:px-12 md:py-16 lg:px-24 lg:py-24">
          {quote && (
            <img src={quote} className="rounded-full" alt="quote icon" />
          )}

          <h1 className="py-2 text-white font-bold md:text-2xl lg:text-3xl md:w-[600px] text-center">
            {heading}
          </h1>

          <div className="flex gap-2">
            <p className="text-white text-sm md:text-lg font-normal my-2 font-[poppins] text-center w-auto md:w-[500px]">
              {paragraph}
            </p>
          </div>

          {profileImage && (
            <div className="flex flex-col md:flex-row gap-0 justify-center items-center md:gap-2 font-bold text-white">
              <div className="flex gap-2 items-center">
                <img
                  className="rounded-full"
                  src={profileImage}
                  alt="profile"
                />
                <span>{name}</span>
                <LuDot className="text-white hidden md:block" />
              </div>
              <span>{date}</span>
              <LuDot className="text-white hidden md:block" />
              <span>{time}</span>
            </div>
          )}

          {buttonText && (
            <button
              type="button"
              className="bg-white rounded-full mb-8 font-normal py-2 px-6 md:text-lg"
            >
              {buttonText}
            </button>
          )}
        </div>

        <div
          className={`absolute  left-1/2 transform -translate-x-1/2  lg:h-[200px] my-40 ${
            graphicsImage
              ? "top-40 lg:w-[800px] hidden lg:block"
              : "-top-12 md:top-10 w-[250px]  md:w-[700px] lg:w-[1200px]"
          }`}
        >
          {graphicsImage ? (
            <img src={graphicsImage} alt="media icons" className="rounded" />
          ) : (
            FormsComponent && <FormsComponent />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
