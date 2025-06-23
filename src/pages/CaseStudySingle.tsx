import HeroBg from "../images/img/Hero-Image.jpg"
import Hero from "./HomePage/Hero"
import snap from "../images/img/snap.png"
import case1 from "../images/img/case_1.png"
import case2 from "../images/img/case_2.png"
import { FaCheck } from "react-icons/fa"


export default function CaseStudySingle() {
    return (
        <div>
            <Hero
                heading="Case Study Details"
                paragraph="Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry."
                backgroundImage={HeroBg} />
            <div className="w-[60%] my-0 mx-auto">
                <div className="grid grid-cols-1 place-items-center gap-4 my-2 md:my-8">
                    <div className="text-center">
                        <img className="rounded" src={snap} alt="group of social media icon images" />
                    </div>
                    <div className="text-center flex flex-col gap-2">
                        <div>
                            <h1 className="font-bold text-xl text-black text-start">Posting the right content at the right frequency</h1>
                            <div className="text-[#808080] font-semibold text-start">
                                <p className="my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the 1500s, when an unknown printegalley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                                </p>
                                <p>remaining essentially unchanged. It was popularised in the 1960s with the release of Letrsheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-2 md:my-6">
                                <div>
                                    <ul className="space-y-2 text-sm text-[#808080]">
                                        <li className="flex items-center gap-2 my-2 md:my-4 md:text-xl">
                                            <FaCheck className="text-[#5956E9] bg-[#F6F6F6] rounded-full p-.5 text-sm" />
                                            Listen to what they say about you
                                        </li>
                                        <li className="flex items-center gap-2  my-2 md:my-4 md:text-xl">
                                            <FaCheck className="text-[#5956E9] text-sm" />
                                            Randomised words which.
                                        </li>
                                        <li className="flex items-center gap-2 my-2 md:my-4 md:text-xl">
                                            <FaCheck className="text-[#5956E9] text-sm" />
                                            Internet tend to repeat predefined chunks
                                        </li>
                                        <li className="flex items-center gap-2 my-2 md:my-4 md:text-xl">
                                            <FaCheck className="text-[#5956E9] text-sm" />
                                            Automate multiple scenarios
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="space-y-2 text-sm text-[#808080]">
                                        <li className="flex items-center gap-2 my-2 md:my-4 md:text-xl">
                                            <FaCheck className="text-[#5956E9] bg-[#F6F6F6] rounded-full p-.5 text-sm" />
                                            Listen to what they say about you
                                        </li>
                                        <li className="flex items-center gap-2  my-2 md:my-4 md:text-xl">
                                            <FaCheck className="text-[#5956E9] text-sm" />
                                            Randomised words which.
                                        </li>
                                        <li className="flex items-center gap-2 my-2 md:my-4 md:text-xl">
                                            <FaCheck className="text-[#5956E9] text-sm" />
                                            Internet tend to repeat predefined chunks
                                        </li>
                                        <li className="flex items-center gap-2 my-2 md:my-4 md:text-xl">
                                            <FaCheck className="text-[#5956E9] text-sm" />
                                            Automate multiple scenarios
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="text-[#808080] my-6">
                            <p className="text-lg md:text-xl text-start font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the 1500s, when an unknown printegalley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <img src={case1} alt="photo of a lady with a MacBook" className="rounded" />
                            <img src={case2} alt="photo of a lady with an iPhone" className="rounded" />
                        </div>
                        <div>
                            <h1 className="text-[#2f2f2f] text-lg md:text-2xl font-bold text-start my-1 md:my-4">Our Working Proccess
                            </h1>
                            <div className="text-[#808080] font-semibold text-start">
                                <p className="my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the 1500s, when an unknown printegalley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                                </p>
                                <p>remaining essentially unchanged. It was popularised in the 1960s with the release of Letrsheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
