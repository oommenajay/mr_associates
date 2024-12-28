import * as React from "react";

export default function ComingSoonCard({ icon }) {
  return (
    <div className="flex flex-col px-16 py-10 text-xl font-semibold tracking-normal leading-tight bg-white rounded-xl min-w-[240px] w-[416px] max-md:px-5">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain w-10 aspect-square fill-lime-300"
      />
      <div className="mt-5 w-full">Coming Soon</div>
    </div>
  );
}