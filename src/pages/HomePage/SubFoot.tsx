import subBg from "../../images/img/sub-foot-bg.png"
import subImg from "../../images/img/sub-foot.png"

export default function SubFoot() {
    return (
        <section className="w-full px-4 md:w-[78%] my-0 mx-auto mt-2 md:mt-10 lg:my-40 relative">
            <div style={{ backgroundImage: `url(${subBg})` }} className="bg-cover bg-no-repeat bg-center rounded-lg p-6 md:p-12 lg:p-20">
                <div className="flex flex-col font-bold max-w-2xl">
                    <h3 className="my-2 font-bold text-white text-2xl md:text-4xl">Start your 7-day free trial</h3>
                    <p className="my-4 font-normal text-white text-base md:text-lg">Felix can help bring your dream website to life with ease.</p>
                    <div className="relative w-full max-w-lg">
                        <input
                            type="text"
                            className="bg-white w-full py-3 md:py-4 px-4 pr-28 outline-0 rounded-full"
                            placeholder="Enter your email"
                        />
                        <button className="absolute right-0 top-0 bg-black text-white py-3 px-4 md:py-4 md:px-6 rounded-full text-sm md:text-base">
                            Get Started
                        </button>
                    </div>
                    <div className="mt-4">
                        <ul className="flex flex-wrap gap-x-4 text-xs md:text-sm text-[#FFFFFF]">
                            <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-white before:rounded-full">
                                Free 7-day trial
                            </li>
                            <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-white before:rounded-full">
                                No credit card required
                            </li>
                            <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-white before:rounded-full">
                                Cancel anytime
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <img src={subImg} alt="" className="absolute -top-12 right-6 w-[300px] lg:w-[450px] hidden lg:block" />
        </section>
    )
}
