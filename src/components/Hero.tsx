import heroBg from "../images/img/hero-bg.jpg";

export const Hero = () => {
  return (
    <div className="w-[90%] my-0 mx-auto mt-2 md:mt-10 relative rounded">
      <div
        style={{ backgroundImage: `url(${heroBg})` }}
        className="bg-cover bg-center bg-no-repeat text-center p-12 md:p-36"
      >
        <div className="flex flex-col text-white">
          <h4 className="text-lg md:text-2xl">About Us</h4>
          <p className="text-lg md:text-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
};
