import testimonialImg from "../../images/img/testimonial.jpg"
import { LuChevronLeft } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";
import Star from "../../components/Star";


export default function OurRefs() {
    return (
        <div className="bg-[#F6F6F6] p-12 rounded my-4">
            <header>
                <h4 className="text-[#2F2F2F] font-bold text-center font-[Poppins] text-2xl">Our Happy Family</h4>
            </header>
            <div className="my-4 border-b border-[#DCDCDC]">
                <div className="grid grid-cols-3 items-center">
                    <div className="flex justify-start">
                        <LuChevronLeft className="text-[#2F2F2F] text-3xl bg-[#5956E9] rounded-full" />
                    </div>
                    <div className="relative flex flex-col gap-2 items-center justify-center">
                        <img src={testimonialImg} alt="testimonial image" className="rounded-full w-16" />
                        <p className="text-[#2f2f2f] font-bold font-[Poppins]"> Mick G., <span className="text-[#2f2f2f8d] text-xs font-[Montserrat]"> Head of Sales and Marketing</span></p>
                        <Star />
                        <div className="text-[#2f2f2f] font-normal font-[Montserrat] text-center mb-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    </div>
                    <div className="flex justify-end">
                        <LuChevronRight className="text-[#2F2F2F] text-3xl bg-white rounded-full" />
                    </div>
                </div>
            </div>
            <div className="my-8 items-center">
                <h4 className="font-[Poppins] text-2xl font-bold  w-[400px] my-0 mx-auto">Businesses all over the world trust Buffer to build their brand</h4>
            </div>

        </div>
    )
}
