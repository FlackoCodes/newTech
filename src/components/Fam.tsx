import testimonialImg from "../images/img/mickG.png";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import Star from "./Star";

const Fam = () => {
  return (
    <div className="bg-[#F6F6F6] rounded py-6 md:py-16 w-[80%] my-0 mx-auto">
      <div className="w-[75%] my-0 mx-auto">
        <header>
          <h4 className="text-[#2F2F2F] font-bold text-center  tracking-tight font-[Poppins] text-lg md:text-3xl my-2">
            Our Happy Family
          </h4>
        </header>
        <div className="my-4 border-b border-[#DCDCDC]">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center">
            <div className="hidden md:flex justify-start">
              <LuChevronLeft className="text-[#ffffff] text-2xl md:text-3xl bg-[#5956E9] rounded-full" />
            </div>

            <div className="relative flex flex-col gap-2 items-center justify-center px-4 md:px-0">
              <img
                src={testimonialImg}
                alt="testimonial image"
                className="rounded-full w-14 md:w-16"
              />
              <p className="text-[#2f2f2f] font-bold font-[Poppins] text-center">
                Mick G.,
                <span className="text-[#2f2f2f8d] text-xs font-[Montserrat] block md:inline md:ml-1">
                  Head of Sales and Marketing
                </span>
              </p>
              <Star />
              <div className="text-[#2f2f2f] font-normal font-[Montserrat] text-center mb-4 md:mb-8 text-sm md:text-base">
                <p className="text-[#808080] text-lg">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>
            </div>

            <div className="hidden md:flex justify-end">
              <LuChevronRight className="text-[#2F2F2F] text-2xl md:text-3xl bg-gray-200 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fam;
