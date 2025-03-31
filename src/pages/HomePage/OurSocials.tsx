import background from "../../images/img/contact-bg.jpg"
import social from "../../images/img/socialImage.png"
import socials from "../../images/img/socials.png"

export default function OurSocials() {
    return (
        <div>
            <section style={{ backgroundImage: `url(${background})` }} className="bg-cover bg-center bg-no-repeat my-12 p-36">
                <div className="w-[78%] mx-auto flex justify-between items-center relative">
                    <div className="flex flex-col gap-2">
                        <h6 className="w-[350px] text-start md:text-4xl md:font-bold text-[#FFFFFF]">Doing Everything Yourself is Difficult</h6>
                        <p className="text-[#FFFFFF] font-[Poppins]">Crush your social goals.Again and again</p>
                    </div>
                    <button className="my-2 rounded-full bg-white text-black md:py-2 py-2 px-4 md:px-6 font-[Poppins] cursor-grab w-fit">Get Started</button>
                    <div className="absolute top-0 left-0 w-[800px] h-[300px] mb-20">
                        <img src={social} alt="people connecting " className="block" />
                    </div>
                </div>
            </section>
            <section className="mt-48">
                <div className="md:w-[60%] my-0 mx-auto grid grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                        <p className="font-bold font-[Poppins] text-black md:text-2xl text-start w-[300px]">Connect all the social networks you love</p>
                        <p className="text-[#808080] font-[Poppins] text-sm text-start w-[400px]">
                            We currently support Facebook, Instagram, LinkedIn and Twitter. More to come. Felix is purpose built for ease of use and complete flexability.
                        </p>
                        <button className="my-2 rounded-full bg-black text-white md:py-2 py-2 px-4 md:px-6 font-[Poppins] cursor-grab w-fit">Get Started</button>
                    </div>
                    <div>
                        {socials}
                    </div>
                </div>
            </section>
        </div>

    )
}
