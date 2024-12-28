import * as React from "react";

export const TeamMember = ({ name, title, description, imageSrc }) => {
  return (
    <div className="flex gap-10 items-start w-full max-md:max-w-full">
      <img
        loading="lazy"
        src={imageSrc}
        alt={`Portrait of ${name}`}
        className="object-contain rounded-none aspect-[1.23] min-w-[240px] w-[587px] max-md:max-w-full"
      />
      <div className="flex flex-col min-w-[240px] w-[632px] max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="text-2xl font-semibold leading-none text-stone-900 max-md:max-w-full">
            {name}
          </div>
          <div className="gap-2.5 self-start px-4 py-1.5 mt-2.5 text-base text-white bg-indigo-500 rounded-xl">
            {title}
          </div>
        </div>
        <div className="mt-6 text-base leading-6 text-[color:var(--sds-color-text-default-default)] max-md:max-w-full">
          {description}
        </div>
      </div>
    </div>
  );
}