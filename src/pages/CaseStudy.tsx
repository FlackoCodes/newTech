import Hero from "./HomePage/Hero";
import heroBg from "../images/img/Hero-Image.jpg";
import { caseStudyData } from "../data";

export default function CaseStudy() {
  return (
    <>
      <Hero
        backgroundImage={heroBg}
        heading="Recent Case Studies"
        paragraph="Lorem Ipsum is simply dummy text of the printing
        and typesetting industry."
      />
      <div className="w-[75%] my-0 mx-auto">
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudyData.map((data, id) => (
            <div className={`rouded bg-${data.backgroud} relative p-4`}>
              <div key={id}>
                <img
                  src={data.image}
                  alt={`${data.name} image`}
                  className="rounded"
                />
                <div className="my-4 flex flex-col gap-2 text-[#2F2F2F]">
                  <p className="text-lg md:text-2xl tracking-tight font-semibold">
                    {data.name}
                  </p>
                  <span className="text-sm font-semibold ">{data.sub}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
