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
    <nav className="">
      <Logo />
      <div>
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
