import subBg from "../../images/img/sub-foot-bg.png"
import subImg from "../../images/img/sub-foot.png"

export default function SubFoot() {
    return (
        <section className="w-[78%] my-0 mx-auto mt-2 md:mt-10" >
            <div style={{ backgroundImage: `url(${subBg})` }} className="bg-cover bg-no-repeat bg-center rounded p-16">
                <div className="flex flex-col">
                    <h3>Start your 7-day free trial</h3>
                    <p>Felix can help bring your dream website to life with ease.</p>
                    <div>
                        <input type="text" className="bg-white rounded py-2 px-4" />
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    )
}
