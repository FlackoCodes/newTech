import { articles } from "../../data"


export default function News() {
    return (
        <div className="w-[78%] my-0 mx-auto">
            <div className="flex flex-col gap-4 md:flex-row items-center justify-between">
                <div className="flex flex-col gap-2 md:gap-4">
                    <h6 className="text-[#2F2F2F] font-sans text-2xl font-bold">
                        Latest News and Articles
                    </h6>
                    <p className="font-sans text-bold text-[#808080] md:w-[300px] lg:w-[650px]">We currently support Facebook, Instagram, LinkedIn and Twitter. More to come. Felix is purpose built for ease of use and complete flexability.</p>
                </div>
                <button className="bg-gray-100 text-[#2F2F2F] px-3 py-2 rounded-full cursor-pointer font-normal my-4 md:my-0">See More News</button>
            </div>
            <div className="grid grid-cols-1 md:justify-items-start md:text-start lg:grid-cols-3 gap-2 my-4">
                {
                    articles.map((item) => (
                        <div key={item.id} className="flex gap-3 flex-col items-center my-2">
                            <img src={item.Image} alt="computer" className="rounded-sm w-[330px] h-[300px]" />
                            <div className="hidden md:flex justify-between  border-b border-[#E0E0E0] w-auto md:w-[330px]">
                                <p className="text-[#808080] font-bold text-sm">{item.date}</p>
                                <span className="text-[#808080] font-bold text-sm">{item.read}</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-[#2F2F2F] text-xl font-bold font-[Poppins]">{item.title}</h4>
                                <p className="text-[16px] text-[#808080]">{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
