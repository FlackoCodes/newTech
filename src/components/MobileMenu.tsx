import { FaTimes } from "react-icons/fa";
import { PiShoppingCartThin } from "react-icons/pi";
import { Link } from "react-router-dom";

interface ModalPopupProps {
  closeModal: () => void;
}

export default function MobileMenu({
  closeModal: closeModal,
}: ModalPopupProps) {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 transition-transform transform animate-slide-in">
      <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-6">
        <button onClick={closeModal} className="absolute top-4 right-4">
          <FaTimes className="text-2xl" />
        </button>
        <ul className="flex flex-col items-center gap-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/feeatures"}>Features</Link>
          <Link to={"/resources"}>Resources</Link>
          <Link to={"/pricing"}>Pricing</Link>
          <Link to={"/blog"}>Blog</Link>
        </ul>
        <div className="flex flex-col items-center gap-2 mt-8">
          <div className="bg-[#5956E9] p-1 gap-10 flex justify-center rounded-full">
            <PiShoppingCartThin className=" text-white" />
          </div>
          <button className="py-[8px] px-[24px] border border-[#E0E0E0] rounded-[62px] cursor-pointer text-[#2F2F2F] font-bold">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
