import { FaTimes } from "react-icons/fa";
import { PiShoppingCartThin } from "react-icons/pi";

interface ModalPopupProps {
    closeModal: () => void;
}

export default function MobileMenu({ closeModal: closeModal }: ModalPopupProps) {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 transition-transform transform animate-slide-in">
            <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-6">
                <button onClick={closeModal} className="absolute top-4 right-4">
                    <FaTimes className="text-2xl" />
                </button>
                <ul className="flex flex-col items-center gap-4">
                    <li>Home</li>
                    <li>Features</li>
                    <li>Resources</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
                <div className="flex flex-col items-center gap-2 mt-8">
                    <div className="bg-[#5956E9] p-1 gap-10 flex justify-center rounded-full">
                        <PiShoppingCartThin className=" text-white" />
                    </div>
                    <button className="py-[8px] px-[24px] border border-[#E0E0E0] rounded-[62px] cursor-pointer text-[#2F2F2F] font-bold">Sign In</button>
                </div>
            </div>

        </div>
    );
}
