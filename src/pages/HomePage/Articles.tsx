import { articles } from "../../data";

export default function Articles() {
    return (
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
                            <h4 className="text-[#2F2F2F] text-xl font-bold font-[Poppins] md:w-[330px]">{item.title}</h4>
                            <p className="text-[16px] text-[#808080] md:w-[330px]">{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
