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
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum, deleniti nesciunt laboriosam quibusdam mollitia maxime, optio consectetur rem a eaque inventore, aspernatur quasi ullam iusto fugiat dolor deserunt culpa.
                    Sit, magni itaque quasi nobis soluta magnam hic nesciunt corporis provident assumenda officiis, eveniet doloribus eligendi! Consectetur ullam at eius! Excepturi porro harum, quibusdam placeat maiores fugit odio consectetur soluta?</div>
            </div>
        </footer>
    )
}
