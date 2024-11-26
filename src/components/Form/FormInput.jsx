import * as React from "react";

export function FormInput({ label, type = "text", id }) {
  return (
    <div className="flex flex-col mt-6 w-full whitespace-nowrap max-md:max-w-full">
      <label htmlFor={id} className="font-semibold tracking-normal leading-5 text-[color:var(--sds-color-text-default-default)] max-md:max-w-full">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="overflow-hidden flex-1 shrink self-stretch px-4 py-3 mt-2 w-full bg-white rounded-lg border border-solid border-zinc-300 min-w-[240px] text-[color:var(--sds-color-text-default-tertiary)] max-md:max-w-full"
        aria-label={label}
      />
    </div>
  );
}