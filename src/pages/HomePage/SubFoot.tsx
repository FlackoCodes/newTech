import subBg from "../../images/img/sub-foot-bg.png"
import subImg from "../../images/img/sub-foot.png"

export default function SubFoot() {
    return (
        <section className="w-[78%] my-0 mx-auto mt-2 md:mt-10" >
            <div style={{ backgroundImage: `url(${subBg})` }} className="bg-cover bg-no-repeat bg-center rounded p-20">
                <div className="flex flex-col font-bold">
                    <h3 className="my-2 font-bold text-white md:text-xl">Start your 7-day free trial</h3>
                    <p className="my-4 font-bold text-white md:text-2xl">Felix can help bring your dream website to life with ease.</p>
                    <div>
                        <input type="text" className="bg-white py-2 px-10 outline-0 rounded-full" placeholder="Enter your email" />
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    )
}
