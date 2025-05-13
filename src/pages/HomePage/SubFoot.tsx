import subBg from "../../images/img/sub-foot-bg.png"
import subImg from "../../images/img/sub-foot.png"

export default function SubFoot() {
    return (
        <section className="w-[78%] my-0 mx-auto mt-2 md:mt-10 lg:my-40 relative" >
            <div style={{ backgroundImage: `url(${subBg})` }} className="bg-cover bg-no-repeat bg-center rounded-lg p-20">
                <div className="flex flex-col font-bold">
                    <h3 className="my-2 font-bold text-white md:text-4xl">Start your 7-day free trial</h3>
                    <p className="my-4 font-normal text-white md:text-lg">Felix can help bring your dream website to life with ease.</p>
                    <div className="relative">
                        <input type="text" className="bg-white py-4 px-16 outline-0 rounded-full" placeholder="Enter your email" />
                        <button className="absolute left-50 top-2.5 bg-black text-white py-2 px-4 rounded-full">Get Started</button>
                    </div>
                    <div >
                        <ul className="flex gap-1.5 mt-4 text-sm text-[#FFFFFF] list-disc list-inside">
                            <li>Free 7-day trial</li>
                            <li>No credit card required</li>
                            <li>Cancel anytime</li>
                        </ul>
                    </div>
                </div>
            </div>
            <img src={subImg} alt="" className="absolute -top-12 right-6 w-[450px] hidden lg:block" />

        </section>
    )
}
