import Hero from "./HomePage/Hero"
import careerProfile from "../images/img/careerProfile.png"
import heroBg from "../images/img/Hero-Image.jpg"
import blogImg from "../images/img/blog_overview.png"
import { blogList } from "../data"
import quote from "../images/img/quote.png"
import caro from "../images/img/caroline.jpg"
import {
    FaFacebook,
    FaTwitter, FaInstagram
} from "react-icons/fa"


const date = new Date();
const year = date.getFullYear();
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()];
const day = date.getDate();

export default function BlogSingle() {
    return (
        <div>
            <Hero heading="Making Social Media Marketing
                Even More Efficient"
                backgroundImage=
                {heroBg}
                profileImage={careerProfile}
                name="caroline Parker"
                date={day + " " + month + " " + year}
                time="3 min read"
            />
            <div className="my-6  md:my-16 flex flex-col items-center justify-center gap-4 ">
                <img src={blogImg} className="rounded w-[65%]" alt="blog overview" />
                <div className="my-4 flex flex-col items-center justify-center gap-4 p-4 md:p-0">
                    <header>
                        <h4 className="text-[#2f2f2f] font-bold tracking-tight text-xl md:text-3xl">Automated Google Search Ads Autopilot</h4>
                    </header>
                    <p className="text-[#808080] font-normal text-base md:text-base w-auto md:w-[550px] text-start">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the 1500s, when an unknown printegalley of type and scrambled it to make a type specimen book  It has survived not only five centuries, but also the leap into electronic typesetting.. </p>
                    <p className="text-[#808080] font-normal text-base md:text-base text-start w-auto md:w-[550px]">remaining essentially unchanged. It was popularised in the 1960s with the release of Letrsheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="my-12">
                    {blogList.map((list, _id) => (
                        <div key={_id} className="flex md:gap-4 gap-0.5 flex-col md:flex-row w-auto md:w-[450px] my-0 mx-auto items-center p-4 md:0">
                            <span className="font-bold text-black text-sm my-0.5 md:my-2">0{list.id}.</span>
                            <p className="font-normal text-sm text-[#808080]">{list.title}</p>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-4 p-4 md:p-0">
                    <p className="text-[#808080] md:w-[550px] text-start">When an unknown printegalley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                </div>
                <Hero
                    backgroundImage={heroBg}
                    quote={quote}
                    paragraph="When an unknown printegalley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
                />
                <div className="my-4 flex flex-col items-center justify-center gap-4 p-4 md:p-0">
                    <header>
                        <h4 className="text-[#2f2f2f] font-bold tracking-tight text-xl md:text-[25px]">What technology stack do we use at Technology?</h4>
                    </header>
                    <p className="text-[#808080] font-normal text-base md:text-base w-auto md:w-[550px] text-start">
                        It was popularised in the 1960s with the release of Letrsheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                         </p>
                </div>
                <div className="my-4 m-4 md:m-0 flex justify-center md:justify-between flex-col md:flex-row gap-0.5 md:gap-8 bg-[#F6F6F6] rounded-lg p-14 w-auto md:w-[700px]">
                    <div className="text-center my-2 md:my-0">
                        <img src={caro} className="rounded-full w-[150px] md:w-auto" alt="Caroline Parker Profile" />
                    </div>
                    <div className="flex flex-col gap-2 justify-center text-center md:text-start">
                        <h4 className="text-[#2f2f2f] font-bold tracking-tight text-lg md:text-xl">Caroline Parker</h4>
                        <p className="text-[#808080] font-normal text-sm md:text-base">Marketing Lead</p>
                        <p className="text-[#808080] font-normal text-sm md:text-base">Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the standard dummy.</p>
                        <div className="flex gap-2 items-center text-center justify-center md:justify-start">
                            <FaFacebook className="text-[#2f2f2f] text-lg cursor-pointer" />
                            <FaTwitter className="text-[#2f2f2f] text-lg cursor-pointer" />
                            <FaInstagram className="text-[#2f2f2f] text-lg cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
