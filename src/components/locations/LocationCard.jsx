import * as React from "react";

export default function LocationCard({ icon, title, description }) {
  return (
    <div className="flex flex-col px-16 py-10 bg-white rounded-xl min-w-[240px] w-[416px] max-md:px-5">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain w-10 aspect-square fill-lime-300"
      />
      <div className="flex flex-col mt-5 w-full">
        <div className="text-xl font-semibold tracking-normal leading-tight">
          {title}
        </div>
        <div className="mt-2.5 text-base leading-6">
          {description}
        </div>
      </div>
    </div>
  );
}