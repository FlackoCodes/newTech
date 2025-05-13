import background from "../../images/img/contact-bg.jpg"
import social from "../../images/img/socialImage.png"
import socials from "../../images/img/image-socials.jpg"
import mediaBackground from "../../images/img/social-Img.png"
import { socialsData } from "../../data"

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
                    <div className="absolute top-40 left-0 lg:w-[900px] lg:h-[200px] mb-20">
                        <img src={social} alt="people connecting " className="rounded" />
                    </div>
                </div>
            </section>
            <section className="mt-[450px]">
                <div className="md:w-[60%] my-0 mx-auto flex flex-col lg:flex-row justify-start lg:justify-center">
                    <div className="flex flex-col gap-2">
                        <p className="font-bold font-[Poppins] text-black md:text-2xl text-start w-[300px]">Connect all the social networks you love</p>
                        <p className="text-[#808080] font-[Poppins] text-sm text-start w-[400px]">
                            We currently support Facebook, Instagram, LinkedIn and Twitter. More to come. Felix is purpose built for ease of use and complete flexability.
                        </p>
                        <button className="my-2 rounded-full bg-black text-white md:py-2 py-2 px-4 md:px-6 font-[Poppins] cursor-grab w-fit">Get Started</button>
                    </div>
                    <div>
                        <img src={socials} alt="social media icons" />
                    </div>
                </div>
            </section>
            <section className="w-[78%] my-0 mx-auto">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr]">
                    <div style={{ backgroundImage: `url(${mediaBackground})` }} className="bg-cover bg-center bg-no-repeat p-8 flex flex-col gap-2 rounded">
                        <h5 className="md:font-bold text-2xl text-white font-[Poppins] w-[280px]">Our Working Process - How We Work For Our Customers</h5>
                        <p className="font-[Montserrat] text-white">We currently support Facebook, Instagram, LinkedIn and Twitter. More to come.</p>
                        <button className="my-2 rounded-full bg-white text-black md:py-2 py-2 px-4 md:px-6 font-[Poppins] cursor-grab w-fit">Get Started</button>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {
                            socialsData.map((data, index) =>
                                <div className="flex flex-col gap-2 font-bold" key={index}>
                                    <div className="font-normal font-[Poppins] md:text-2xl">
                                        <h2 className={index == 1 ? "text-[#5956E9]" : "text-black"}>{data.id}</h2>
                                    </div>
                                    <h3 className="font-bold text-[#2F2F2F] md:text-xl">{data.title}</h3>
                                    <p className="w-[350px] text-[#808080]">{data.description}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </div>

    )
}
