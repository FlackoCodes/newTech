import heroBg from "../../images/img/Hero-Image.jpg"
import graphics from "../../images/img/graphics-img.png"

export default function Hero() {
    return (
        <div>
            <section>
                <div style={{ backgroundImage: `url(${heroBg})` }} className="w-[90%] my-0 mx-auto relative bg-cover bg-center bg-no-repeat rounded mt-4 mb-8">
                    <div className="flex items-center flex-col p-30">
                        <h1 className="py-2 text-white font-bold md:text-2xl lg:text-3xl md:w-[600px] text-center">All In One Social Media Management Solution For Businesses</h1>
                        <p className="text-white text-lg font-normal my-2 font-[poppins]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button type="button" className="bg-white rounded-full mb-8 font-normal py-2 px-6 md:text-lg">Create Free Account</button>
                    </div>
                    <div className="absolute top-40 left-60 lg:w-[800px] lg:h-[200px] my-40">
                        <img src={graphics} alt="media icons" className="rounded" />
                    </div>
                </div>
            </section>
        </div>
    )
}

