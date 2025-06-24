import Hero from "./HomePage/Hero"
import heroBg from "../images/img/Hero-Image.jpg"
import { FaCheck } from "react-icons/fa"
import careerImg from "../images/img/careerNew.png"

export default function CareerSingle() {
    return (
        <div>
            <Hero heading="Copywriter (Intermediate)"
                paragraph="San Francisco, CA   |  Part Time"
                backgroundImage={heroBg}
            />
            <div className=" w-[75%] mx-auto my-0">
                <div className="my-2 md:my-8">
                    <div className="flex justify-center flex-col md:flex-row gap-4 md:gap-6">
                        <div className="flex flex-col gap-2">
                            <h1 className="my-2 md:my-4 text-[#242331] font-bold text-lg md:text-3xl tracking-tight">Job Responsibilities</h1>
                            <p className="text-[#808080] my-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the 1500s, when an unknown printegalley of type</p>
                            <ul className="space-y-2 text-sm text-[#808080]">
                                <li className="flex items-center gap-2 my-2 md:my-4 md:text-xl">
                                    <FaCheck className="text-green-500 bg-[#F6F6F6] rounded-full p-.5 text-sm" />
                                    Listen to what they say about you
                                </li>
                                <li className="flex items-center gap-2  my-2 md:my-4 md:text-xl">
                                    <FaCheck className="text-green-500 text-sm" />
                                    Randomised words which.
                                </li>
                                <li className="flex items-center gap-2 my-2 md:my-4 md:text-xl">
                                    <FaCheck className="text-green-500 text-sm" />
                                    Internet tend to repeat predefined chunks
                                </li>
                                <li className="flex items-center gap-2 my-2 md:my-4 md:text-xl">
                                    <FaCheck className="text-green-500 text-sm" />
                                    Automate multiple scenarios
                                </li>
                            </ul>
                            <div>
                                <p className="my-2 text-lg text-[#808080]">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy
                                </p>
                            </div>
                        </div>
                        <div className="rounded bg-[#F6F6F6] flex flex-col gap-2 justify-center items-center p-4">
                            <h2 className="font-semibold tracking-tight text-[#242331] text-lg md:text-2xl md:font-bold">Apply today</h2>
                            <p className="text-[#808080] text-lg font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been  standard dummy .</p>
                            <button type="button" className="bg-[black] text-white rounded-full py-4 px-8 cursor-none font-semibold">Apply now</button>
                        </div>
                    </div>
                    <div className="my-2 md:my-4">
                        <img src={careerImg} className="rounded w-auto md:w-[450px]" alt="lady behind a desktop makig a phone call" />
                        <div className="flex flex-col gap-2 my-4">
                            <h1 className="my-2 text-[#242331] font-bold leading-1 text-lg md:text-2xl">Job Responsibilities</h1>
                            <div className="text-[#808080]">
                                <p className="my-2 w-auto md:w-[550px] lg:w-2xl"> remaining essentially unchanged. It was popularised in the 1960s with theLetrsheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <p className="my-2 w-auto md:w-[550px] lg:w-2xl">remaining essentially unchanged. It was popularised in the 1960s with theLetrsheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
