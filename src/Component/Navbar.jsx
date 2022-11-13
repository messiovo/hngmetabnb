import React from "react";
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
  return (
    <nav className="flex items-center justify-between sticky top-0 left-0 right-0 py-8 px-14">
      <Logo />
      <div className="flex">
        <div>
          {navLinks.map((items) => (
            <Links {...items} />
          ))}
        </div>
        <div>
          <button>Connect Wallet</button>
        </div>
      </div>
      <div>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
