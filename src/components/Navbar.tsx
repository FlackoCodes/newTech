import { Link, NavLink } from "react-router-dom"
import logo from "../images/cta/Logo (1).png"
import { PiShoppingCartThin } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa";


function Navbar() {
    return (
        <nav className="w-[88%] my-0 mx-auto h-[65px] top-[36px] left-[100px] gap-[303px] flex justify-between items-center py-12">
            <div>
                <img
                    className="w-[150px]"
                    src={logo}
                    alt="logo"
                />
            </div>
            <div className="flex justify-between items-center">
                <ul className="flex gap-8">
                    <li className=""><div className="flex flex-col items-start">
                        <span className="text-[9px] font-bold text-[#5236FF]">01</span>
                        <a href="/" className="text-[16px] font-bold text-[#2F2F2F]" >Home</a>
                    </div>
                    </li>
                    <li className=""><div className="flex flex-col items-start">
                        <span className="text-[9px] font-bold text-[#CFCFCF]">02</span>
                        <div className="flex items-center gap-1">
                            <a href="/" className="text-[16px] font-bold text-[#2F2F2F]" >Features</a>
                            <FaAngleDown className="text-[#2F2F2F] text-[10px]" />
                        </div>
                    </div>
                    </li>
                    <li className=""><div className="flex flex-col items-start">
                        <span className="text-[9px] font-bold text-[#CFCFCF]">03</span>
                        <a href="/" className="text-[16px] font-bold text-[#2F2F2F]" >Resources</a>
                    </div>
                    </li>
                    <li className=""><div className="flex flex-col items-start">
                        <span className="text-[9px] font-bold text-[#CFCFCF]">04</span>
                        <a href="/" className="text-[16px] font-bold text-[#2F2F2F]" >Pricing</a>
                    </div>
                    </li>
                    <li className=""><div className="flex flex-col items-start">
                        <span className="text-[9px] font-bold text-[#CFCFCF]">05</span>
                        <a href="/" className="text-[16px] font-bold text-[#2F2F2F]" >Blog</a>
                    </div>
                    </li>
                </ul>
            </div>
            <div>
                <div className="flex justify-between items-center gap-6">
                    <div className="bg-[#5956E9] p-1 gap-10 flex justify-center rounded-full">
                        <PiShoppingCartThin className=" text-white" />
                    </div>
                    <button className="py-[8px] px-[24px] border border-[#E0E0E0] rounded-[62px] cursor-pointer text-[#2F2F2F] font-bold">Sign In</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
