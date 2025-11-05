import { NavLink } from "react-router-dom";
import logo from "../images/cta/Logo (1).png";
import { PiShoppingCartThin } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RootState } from "../../store/store";
import { setActive } from "../../store/logSlice/logSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MobileMenu from "./MobileMenu";
import SignUp from "./SignUp";
import Login from "./Login";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";

function Navbar({ user }) {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const isActive = useSelector((state: RootState) => state.log.isActive);

  const [login, setLogin] = useState(false);

  const showLogs = () => {
    dispatch(setActive());
  };

  async function logout() {
    await signOut(auth);
  }

  const modalPopup = () => {
    setShowMenu(!showMenu);
    console.log("fired function");
  };

  return (
    <>
      <nav className="h-[65px] top-[36px] left-[100px]  flex justify-between items-center py-12">
        <div>
          <NavLink to={"/"}>
            <img className="w-[100px] md:w-[150px]" src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="hidden lg:flex md:justify-between items-center">
          <ul className="flex gap-8">
            <li className="">
              <div className="flex flex-col items-start">
                <span className="text-[9px] font-bold text-[#5236FF]">01</span>
                <NavLink
                  to={"/"}
                  className="text-[16px] font-bold text-[#2F2F2F]"
                >
                  Home
                </NavLink>
              </div>
            </li>
            <li className="">
              <div className="flex flex-col items-start">
                <span className="text-[9px] font-bold text-[#CFCFCF]">02</span>
                <div className="flex items-center gap-1">
                  <NavLink
                    to={"/features"}
                    className="text-[16px] font-bold text-[#2F2F2F]"
                  >
                    Features
                  </NavLink>
                  <FaAngleDown className="text-[#2F2F2F] text-[10px]" />
                </div>
              </div>
            </li>
            <li className="">
              <div className="flex flex-col items-start">
                <span className="text-[9px] font-bold text-[#CFCFCF]">03</span>
                <NavLink
                  to={"/pricing"}
                  className="text-[16px] font-bold text-[#2F2F2F]"
                >
                  Pricing
                </NavLink>
              </div>
            </li>
            <li className="">
              <div className="flex flex-col items-start">
                <span className="text-[9px] font-bold text-[#CFCFCF]">04</span>
                <NavLink
                  to={"/blog"}
                  className="text-[16px] font-bold text-[#2F2F2F]"
                >
                  Blog
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
        <div className="">
          <div className="hidden lg:flex justify-between items-center gap-6">
            <div className="bg-[#5956E9] p-1 gap-10 flex justify-center rounded-full">
              <PiShoppingCartThin className=" text-white" />
            </div>
            {user ? (
              <div className="flex items-center gap-x-3">
                <p className="text-[0046FF] font-serif text-sm md:text-lg font-bold ml-2">
                  Welcome, {user.displayName || "User"}
                </p>
                <button
                  onClick={logout}
                  className="border-none rounded-sm bg-[#3084A9] text-white py-0.5 px-1.5 md:py-1 md:px-4 capitalize cursor-pointer"
                >
                  logout
                </button>
              </div>
            ) : (
              <button
                onClick={showLogs}
                className="border-none rounded-sm bg-[#3084A9] text-white py-1 px-3 capitalize cursor-pointer"
              >
                login/signup
              </button>
            )}
          </div>
          <RxHamburgerMenu className="block lg:hidden" onClick={modalPopup} />
        </div>
      </nav>
      {showMenu && <MobileMenu closeModal={modalPopup} />}
      {isActive && <SignUp setLogin={setLogin} />}
      {login && <Login setLogin={setLogin} />}
    </>
  );
}

export default Navbar;
