import { footerData } from "../data";
import logo from "../images/cta/Logo (1).png"
import { FcCheckmark } from "react-icons/fc";


export default function Footer() {
    return (
        <footer className="w-[70%] my-0 mx-auto">
            <div className="border-y border-[#E0E0E0] py-6">
                <div className="flex justify-between items-center">
                    <img
                        className="w-[100px] md:w-[150px]"
                        src={logo}
                        alt="logo"
                    />
                    <button className="py-[8px] px-[24px] border border-[#E0E0E0] rounded-[62px] cursor-pointer text-[#2F2F2F] font-bold">See our Case Studies</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
                <div className="border-r border-[#E0E0E0]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate temporibus sed rem libero eius dolor natus magnam adipisci ab cupiditate, in reiciendis, hic ipsa facere sapiente molestiae eum dolore omnis!</div>
                <div className="bg-[#2F2F2F] rounded-2xl grid grid-cols-2 gap-2 p-6">
                    <div className="border-r border-[#E0E0E0] grid place-content-center align-middle">
                        <button className="bg-gradient-to-r from-[#5956E9] to-[#E541ED] py-2 px-3 rounded-full text-white">Click</button>
                        <div className="flex items-center gap-2 my-4 font-[Mulish] text-white">
                            <h2 className="align-middle text-2xl font-bold capitalize">startup</h2>
                            <span className="font-extrabold text-4xl">$25</span>
                        </div>
                        <button className="bg-[#424242] text-white px-3 py-2 rounded-full">Popular</button>
                    </div>
                    <div className="py-6 px-2">
                        {footerData.map((item) => (
                            <div key={item.id} className="flex gap-2 items-center my-1">
                                <FcCheckmark className="text-white" />
                                <p className="text-white font-semibold">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
