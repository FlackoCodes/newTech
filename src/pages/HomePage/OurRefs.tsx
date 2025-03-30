import testimonialImg from "../../images/img/testimonial.jpg"
import { LuChevronLeft } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";
import Star from "../../components/Star";
import { stats } from "../../data";

export default function OurRefs() {
    return (
        <div className="bg-[#F6F6F6] p-24 rounded my-4 w-[78%] mx-auto">
            <header>
                <h4 className="text-[#2F2F2F] font-bold text-center font-[Poppins] text-2xl">Our Happy Family</h4>
            </header>
            <div className="my-4 border-b border-[#DCDCDC]">
                <div className="grid grid-cols-3 items-center">
                    <div className="hidden lg:flex justify-start">
                        <LuChevronLeft className="text-[#2F2F2F] text-3xl bg-[#5956E9] rounded-full" />
                    </div>
                    <div className="relative flex flex-col gap-2 items-center justify-center">
                        <img src={testimonialImg} alt="testimonial image" className="rounded-full w-16" />
                        <p className="text-[#2f2f2f] font-bold font-[Poppins]"> Mick G., <span className="text-[#2f2f2f8d] text-xs font-[Montserrat]"> Head of Sales and Marketing</span></p>
                        <Star />
                        <div className="text-[#2f2f2f] font-normal  font-[Montserrat] text-center mb-8">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
                    </div>
                    <div className="lg:flex justify-end hidden">
                        <LuChevronRight className="text-[#2F2F2F] text-3xl bg-white rounded-full" />
                    </div>
                </div>
            </div>
            <div className="my-8 items-center">
                <h4 className="font-[Poppins] md:text-2xl font-normal md:font-bold  md:w-[400px] my-0 mx-auto">Businesses all over the world trust Buffer to build their brand</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8 border-b border-[#DCDCDC]">
                    {stats.map((stat) => (
                        <div key={stat.id} className="flex flex-col items-center gap-2">
                            <h4 className="font-[Poppins] text-3xl font-bold text-[#5956E9]">{stat.title}</h4>
                            <p className="text-[#808080] font-normal font-[Montserrat] capitalize mb-12">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 my-4">
                <h6 className="font-[Poppins] text-[#2F2F2F] text-lg font-normal">Join 160,000+ small businesses like yours</h6>
                <button className="my-2 rounded-full bg-black text-white md:py-2 py-2 px-4 md:px-6 font-[Poppins] cursor-grab">Select a Plan</button>
            </div>
        </div>
    )
}
