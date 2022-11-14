import React from "react";
import hero1 from "../asset/images/hero1.jpg";
import hero2 from "../asset/images/hero2.jpg";
import hero3 from "../asset/images/hero3.jpg";
import hero4 from "../asset/images/hero4.jpg";

const Hero = () => {
  return (
    <main className="mt-20 flex lg:flex-row flex-col-reverse items-center lg:gap-[8rem]  lg:px-14 px-4 py-20 ">
      <div className="flex lg:w-[55%] w-full flex-col gap-10 lg:p-0 p-6">
        <h1 className="lg:text-[2.5rem] text-2xl font-semibold text-black leading-[5rem]">
          Rent a <span className="text-dark">Place</span> away from{" "}
          <span className="text-dark">Home</span> in the
          <span className="text-dark"> Metaverse</span>
        </h1>
        <p className="text-lg">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <form className="flex  w-full text-lg  ">
          <input
            type="text"
            placeholder="Search for location"
            className="w-3/4 py-4 border-[1px] pl-4 rounded-l-lg border-black/[0.1] outline-none"
          />
          <button
            type="submit"
            className="text-center bg-dark w-1/4 rounded-r-lg text-white"
          >
            Search
          </button>
        </form>
      </div>
      <div className="lg:w-[40%] w-full flex gap-3 lg:items-start items-center lg:justify-start justify-center">
        <div className="flex flex-col gap-3 pt-20">
          <img src={hero2} alt="" />
          <img src={hero4} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <img src={hero1} alt="" />
          <img src={hero3} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
