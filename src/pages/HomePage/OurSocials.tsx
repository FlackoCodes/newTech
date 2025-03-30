import background from "../../images/img/contact-bg.jpg"
import social from "../../images/img/socialImage.png"

export default function OurSocials() {
    return (
        <section style={{ backgroundImage: `url(${background})` }} className="bg-cover bg-center bg-no-repeat my-12 p-36">
            <div className="w-[78%] mx-auto flex justify-between items-center relative">
                <div className="flex flex-col gap-2">
                    <h6 className="w-[350px] text-start md:text-4xl md:font-bold text-[#FFFFFF]">Doing Everything Yourself is Difficult</h6>
                    <p className="text-[#FFFFFF] font-[Poppins]">Crush your social goals.Again and again</p>
                </div>
                <button className="my-2 rounded-full bg-white text-black md:py-2 py-2 px-4 md:px-6 font-[Poppins] cursor-grab w-fit">Get Started</button>
                <div className="absolute top-0 left-0 h-[300px]">  
                    <img src={social} alt="people connectiing" />
                </div>
            </div>
        </section>
    )
}
