import * as React from "react";

const StatsCard = ({ value, suffix, label }) => {
  return (
    <div className="flex flex-col self-stretch my-auto w-[139px]">
      <div className="text-6xl font-medium leading-tight  bg-gradient-to-r from-[#CEFF68] to-[#FFFFFF] bg-clip-text text-transparent capitalize max-md:text-4xl">
        {value}<span className="text-white">{suffix}</span>
      </div>
      <div className="text-base text-lime-300">{label}</div>
    </div>
  );
};

export default StatsCard;