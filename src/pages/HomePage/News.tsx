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
        </div>
    )
}
