import testimonialImg from "../../images/img/testimonial.jpg";
import { LuChevronLeft } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";
import Star from "../../components/Star";
import { stats } from "../../data";

export default function OurRefs() {
  return (
    <div className="bg-[#F6F6F6] p-6 md:p-16 lg:p-24 rounded my-4 w-[90%] md:w-[78%] mx-auto mt-10 md:mt-48">
      <header>
        <h4 className="text-[#2F2F2F] font-bold text-center font-[Poppins] text-xl md:text-2xl">
          Our Happy Family
        </h4>
      </header>

      <div className="my-6 border-b border-[#DCDCDC] pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center">
          {/* Left Arrow (hidden on small screens) */}
          <div className="hidden md:flex justify-start">
            <LuChevronLeft className="text-white text-2xl md:text-3xl bg-[#5956E9] rounded-full" />
          </div>

          {/* Testimonial Section */}
          <div className="relative flex flex-col gap-3 items-center justify-center px-4 md:px-0">
            <img
              src={testimonialImg}
              alt="testimonial image"
              className="rounded-full w-12 md:w-16"
            />
            <p className="text-[#2f2f2f] font-bold font-[Poppins] text-center text-sm md:text-base">
              Mick G.
              <span className="text-[#2f2f2f8d] text-xs font-[Montserrat] block md:inline md:ml-1">
                Head of Sales and Marketing
              </span>
            </p>
            <Star />
            <div className="text-[#808080] font-normal font-[Montserrat] text-center mb-4 md:mb-8 text-sm md:text-base leading-relaxed">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          {/* Right Arrow (hidden on small screens) */}
          <div className="hidden md:flex justify-end">
            <LuChevronRight className="text-[#2F2F2F] text-2xl md:text-3xl bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="my-8 text-center">
        <h4 className="font-[Poppins] text-lg md:text-2xl font-semibold md:font-bold md:w-[400px] my-0 mx-auto leading-snug">
          Businesses all over the world trust Buffer to build their brand
        </h4>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 border-b border-[#DCDCDC] pb-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center gap-2">
              <h4 className="font-[Poppins] text-2xl md:text-3xl font-bold text-[#5956E9]">
                {stat.title}
              </h4>
              <p className="text-[#808080] font-normal font-[Montserrat] text-xs md:text-sm capitalize">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col justify-center items-center gap-3 my-4">
        <h6 className="font-[Poppins] text-[#2F2F2F] text-sm md:text-lg font-normal text-center">
          Join 160,000+ small businesses like yours
        </h6>
        <button className="my-2 rounded-full bg-black text-white py-2 px-6 md:py-3 md:px-8 font-[Poppins] text-sm md:text-base hover:bg-gray-800 transition">
          Select a Plan
        </button>
      </div>
    </div>
  );
}
