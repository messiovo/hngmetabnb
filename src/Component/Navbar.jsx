import React, { useState } from "react";
import { Links, Logo } from "../asset/icons";

const navLinks = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Place to stay",
    to: "/place-to-stay",
  },
  {
    text: "NFTs",
    to: "/nfts",
  },
  {
    text: "Community",
    to: "/community",
  },
];
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mobileHandler = () => {
    setIsMobile(!isMobile);
  };
  return (
    <nav className="flex lg:px-12 py-6 px-4 justify-between items-center z-10 sticky top-0 left-0 right-0 w-full">
      <Logo />
      <div
        className={`${
          !isMobile ? `scale-y-0` : `scale-y-100 `
        } lg:scale-y-100 z-20 flex lg:flex-row flex-col   lg:relative lg:top-0  w-full fixed top-20 align-middle gap-12 lg:py-0 py-10 transition-transform duration-700 ease-in lg:h-auto h-screen lg:inset-auto lg:bg-[transparent] bg-[#c264cd]  inset-0 lg:px-0 px-4 lg:overflow-y-hidden overflow-y-visible lg:w-3/4`}
        onBlur={() => {
          setIsMobile(false);
        }}
        tabIndex={30}
      >
        <div className="m-0 lg:m-auto  flex flex-col lg:flex-row gap-14">
          {navLinks.map((items) => (
            <Links
              {...items}
              onClick={() => {
                setIsMobile(false);
              }}
            />
          ))}
        </div>
        <div>
          <button className="bg-dark block text-white  py-2 px-5 rounded-lg ">
            Connect Wallet
          </button>
        </div>
      </div>
      <div className="w-8 cursor-pointer lg:hidden" onClick={mobileHandler}>
        <span className="w-full h-1 bg-black block "></span>
        <span className="w-full h-1 bg-black block mt-1.5 "></span>
        <span className="w-full h-1 bg-black block mt-1.5   "></span>
      </div>
    </nav>
  );
};

export default Navbar;
//  className={'${isMobile ? ` `: `  `} z-10 bg-medium flex flex-col lg:items-center lg:flex-row  gap-14 lg:w-3/4 w-full relative lg:top-0  '}
