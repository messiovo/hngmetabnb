import React from "react";

const image = ["hero2", "hero1", "hero4", "hero3"];
const Hero = () => {
  return (
    <main className="flex lg:flex-row flex-col-reverse items-center lg:px-10 px-4 py-20">
      <div className="flex lg:w-2/4 w-full flex-col gap-10">
        <h1 className="text-[2.5rem] font-semibold text-black leading-[5rem]">
          Rent a <span className="text-dark">Place</span> away from <span className="text-dark">Home</span> in the
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
          <button type="submit" className="text-center bg-dark w-1/4 rounded-r-lg text-white">
            Search
          </button>
        </form>
      </div>
      <div className="">
        {image.map((image) => (
          <img
            src={`${image}.png`}
            className=""
            alt="hero"
            key={image.replace("/", "")}
          />
        ))}
      </div>
    </main>
  );
};

export default Hero;
