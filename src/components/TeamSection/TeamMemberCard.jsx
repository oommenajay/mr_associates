import * as React from "react";

export function TeamMemberCard({ name, role, image, highlighted }) {
  return (
    <article className={`flex flex-col ${highlighted ? 'min-w-[240px] w-[265px]' : 'w-[231px]'}`}>
      <img
        loading="lazy"
        src={image}
        alt={`${name} - ${role}`}
        className={`object-contain max-w-full ${highlighted ? 'rounded-xl' : 'rounded-none'} aspect-[0.81] w-full`}
      />
      <div className="flex flex-col mt-5 w-full">
        <h3 className="text-xl font-semibold tracking-normal leading-tight text-[color:var(--sds-color-text-default-default)]">
          {name}
        </h3>
        <p className="mt-1 text-base text-black">{role}</p>
      </div>
    </article>
  );
}