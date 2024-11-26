import React from "react";

export default function ServiceCard({ title, description, iconSrc }) {
  return (
    <article className="flex flex-col grow shrink self-stretch px-16 py-10 my-auto rounded-xl bg-neutral-100 min-w-[240px] w-[333px] max-md:px-5">
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="object-contain w-10 aspect-square fill-indigo-950"
      />
      <div className="flex flex-col mt-5 w-full">
        <h2 className="text-xl font-semibold tracking-normal leading-tight">
          {title}
        </h2>
        <p className="mt-2.5 text-base leading-6">
          {description}
        </p>
      </div>
    </article>
  );
}