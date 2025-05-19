import heroBg from "../../images/img/hero-bg.jpg"

export default function Hero() {
    return (
        <div className="w-[90%] my-0 mx-auto relative">
            <div style={{ backgroundImage: `url(${heroBg})` }} className="bg-cover bg-center bg-no-repeat rounded mt-4 mb-8">
                <div className="flex items-center flex-col p-10">
                    <h1 className="py-2 text-white font-bold md:text-2xl lg:text-3xl md:w-[600px] text-center">All In One Social Media Management Solution For Businesses</h1>
                    <p className="text-white text-lg font-normal my-2 font-[poppins]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button type="button" className="bg-white rounded-full my-2 font-normal py-2 px-6 md:text-lg">Create Free Account</button>
                </div>
            </div>
        </div>
    )
}

