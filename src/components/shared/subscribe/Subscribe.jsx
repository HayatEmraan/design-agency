import React from "react";

const Subscribe = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-[#20B15A] font-medium text-xl mb-5">SUBSCRIBE</h2>
        <h1 className="uppercase text-[#000000] font-semibold text-[24px]">
          Subscribe to get the latest <br /> news about us
        </h1>
        <p className="text-[#8B8B8B] font-medium">
          Please drop your email below to get daily update about what we do
        </p>

        <div className="relative max-w-[32rem] mx-auto mt-6">
          <input
            className="border-[1px] w-full text-[#8B8B8B] focus:border-[#F55F1D] focus:outline-none border-[#000000] rounded-xl py-[8px] px-[24px]"
            type="email"
            placeholder="Enter your email"
            id=""
          />
          <button className="bg-[#F55F1D] absolute right-0 top-0 bottom-0 text-white rounded-xl py-[8px] px-[24px]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
