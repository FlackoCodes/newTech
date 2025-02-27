import { NavLink } from "react-router-dom"
import logo from "../images/cta/Logo (1).png"
import { PiShoppingCartThin } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa";


function Navbar() {
    return (
        <nav className=" h-[65px] top-[36px] left-[100px] gap-[303px] flex justify-between items-center py-12">
            <div>
                <NavLink to={"/"}>
                    <img
                        className="w-[150px]"
                        src={logo}
                        alt="logo"
                    />
                </NavLink>
            </div>
            <div className="flex justify-between items-center">
                <ul className="flex gap-8">
                    <li className=""><div className="flex flex-col items-start">
                        <span className="text-[9px] font-bold text-[#5236FF]">01</span>
                        <NavLink to={"/"} className="text-[16px] font-bold text-[#2F2F2F]" >Home</NavLink>
                    </div>
                    </li>
                    <li className=""><div className="flex flex-col items-start">
                        <span className="text-[9px] font-bold text-[#CFCFCF]">02</span>
                        <div className="flex items-center gap-1">
                            <NavLink to={"/features"} className="text-[16px] font-bold text-[#2F2F2F]" >Features</NavLink>
                            <FaAngleDown className="text-[#2F2F2F] text-[10px]" />
                        </div>
                    </div>
                    </li>
                    <li className=""><div className="flex flex-col items-start">
                        <span className="text-[9px] font-bold text-[#CFCFCF]">03</span>
                        <NavLink to={"/resources"} className="text-[16px] font-bold text-[#2F2F2F]" >Resources</NavLink>
                    </div>
                    </li>
                    <li className=""><div className="flex flex-col items-start">
                        <span className="text-[9px] font-bold text-[#CFCFCF]">04</span>
                        <NavLink to={"/pricing"} className="text-[16px] font-bold text-[#2F2F2F]" >Pricing</NavLink>
                    </div>
                    </li>
                    <li className=""><div className="flex flex-col items-start">
                        <span className="text-[9px] font-bold text-[#CFCFCF]">05</span>
                        <NavLink to={"/blog"} className="text-[16px] font-bold text-[#2F2F2F]" >Blog</NavLink>
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
