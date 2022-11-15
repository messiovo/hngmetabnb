import React from "react";
import { Close } from "../asset/icons";
import { MetaMask, WalletCollect } from "./atoms";

const PopUp = ({ popUp, close }) => {
  return (
    <div
      className={`${
        popUp ? `scale-100` : `scale-0`
      } bg-black/80 z-30 w-full h-full fixed inset-0 transition-transform duration-700 ease-in-out grid place-items-center`}
    >
      <div className="lg:w-[40%] w-[90%] bg-white py-10 rounded-lg z-30">
        <header className="flex items-center justify-between px-6 pb-4 mb-6 border-b border-black/[0.1]">
          <h3>Connect Wallet</h3>
          <Close onClick={close} className="cursor-pointer" />
        </header>
        <div className="px-6 flex flex-col gap-4">
          <h1>Choose your preferred wallet:</h1>
          <MetaMask />
          <WalletCollect />
        </div>
      </div>
    </div>
  );
};

export default PopUp;
