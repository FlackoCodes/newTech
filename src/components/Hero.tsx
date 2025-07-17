import heroBg from "../images/img/hero-bg.jpg";

export const Hero = () => {
  return (
    <div className="w-[90%] my-0 mx-auto mt-2 md:mt-10 lg:my-40 relative">
      <div
        style={{ backgroundImage: `url(${heroBg})` }}
        className="bg-cover bg-center bg-no-repeat"
      >
        hero
      </div>
    </div>
  );
};
