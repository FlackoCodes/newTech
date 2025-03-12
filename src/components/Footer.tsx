import { Link } from "react-router-dom";
import { footerData, utilityPages, resourcesPages, resourcesPageTwo } from "../data";
import logo from "../images/cta/Logo (1).png"
import { FcCheckmark } from "react-icons/fc";


export default function Footer() {
    return (
        <footer className="w-[78%] my-0 mx-auto">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-6">
                <div className="md:border-r border-[#E0E0E0] grid grid-cols-1 md:grid-cols-2 gap-24">
                    <div className="tracking-tight">
                        <header>
                            <h4 className="font-sans text-[#2F2F2F] text-2xl font-bold">Resources</h4>
                        </header>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                {
                                    resourcesPages.map((item) => (
                                        <div key={item.id} className="flex gap-2 items-center my-2">
                                            <Link to={`/${item.page}`} className="font-semibold font-sans  text-start text-[#808080]">{item.page}</Link>
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                {
                                    resourcesPageTwo.map((item) => (
                                        <div key={item.id} className="flex gap-2 items-center my-2">
                                            <Link to={`/${item.page}`} className="font-semibold font-sans  text-start text-[#808080]">{item.page}</Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="tracking-tight">
                        <header>
                            <h4 className="font-sans text-[#2F2F2F] text-2xl font-bold">Utility Pages</h4>
                        </header>
                        {
                            utilityPages.map((item) => (
                                <div key={item.id} className="flex gap-2 items-center my-2">
                                    <Link to={`/${item.page}`} className="font-semibold font-sans  text-start text-[#808080]">{item.page}</Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="bg-[#2F2F2F] rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-2 p-6">
                    <div className="md:border-r border-[#E0E0E0] grid place-content-center align-middle">
                        <button className="bg-gradient-to-r from-[#5956E9] to-[#E541ED] py-2 px-3 rounded-full text-white cursor-pointer font-bold">Click</button>
                        <div className="flex items-center gap-2 my-4 font-[Mulish] text-white">
                            <h2 className="align-middle text-2xl font-bold capitalize">startup</h2>
                            <span className="font-extrabold text-4xl">$25</span>
                        </div>
                        <button className="bg-[#424242] text-white px-3 py-2 rounded-full cursor-pointer font-bold">Popular</button>
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
