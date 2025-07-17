import { investorsData } from "../../data";

export default function Outro() {
  return (
    <div>
      <header>
        <h4 className="text-center justify-start text-zinc-800 text-5xl font-extrabold font-['Mulish'] leading-[55px] my-4">
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
  );
}
