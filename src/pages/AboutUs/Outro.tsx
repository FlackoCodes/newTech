import { investorsData } from "../../data";
import bg from "../../images/img/Photo.png";
import { teamData } from "../../data";

export default function Outro() {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
        className="bg-cover bg-center bg-no-repeat p-12 md:p-20 lg:p-36"
      >
        <div className="flex flex-col justify-start gap-4 lg:flex-row lg:justify-between lg:items-center my-12">
          <div className="flex flex-col gap-2">
            <h4 className="text-white text-lg md:text-4xl font-bold tracking-tight">
              Our Team
            </h4>
            <p className="text-lg md:text-xl font-normal text-white w-full lg:w-[600px]">
              Building an enterprise level site doesn't need nightmare or cost
              your thousands. Felix is purpose built for.....
            </p>
          </div>
          <button type="button" className="bg-white rounded-full text-lg p-4">
            Join Our Team
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.map((data, id) => (
            <div className="flex flex-col gap-2" key={id}>
              <img
                src={data.img}
                alt={data.name + "image"}
                className="rounded"
              />
              <div className="text-white font-bold text-center">
                <p>{data.name}</p>
                <p>{data.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-12 md:mt-24">
        <header>
          <h4 className="text-center justify-start text-zinc-800 text-2xl md:text-5xl font-extrabold font-['Mulish'] leading-[55px] my-4">
            Our Investors
          </h4>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 w-[85%] my-0 mx-auto">
          {investorsData.map((data, id) => (
            <div className="m-6" key={id}>
              <div className="flex flex-col gap-2 p-12 justify-items-start rounded bg-[#F6F6F6]">
                <img src={data.img} className="w-16" alt="brand_logo" />
                <p className="justify-start text-zinc-500 text-sm  md:text-xl font-normal font-['Mulish']">
                  {data.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
