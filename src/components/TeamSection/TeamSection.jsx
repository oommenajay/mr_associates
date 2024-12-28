import * as React from "react";
import { TeamMemberCard } from "./TeamMemberCard";
import { teamMembers } from "./TeamData";

export function TeamSection() {
  return (
    <section className="flex flex-col items-center px-20 py-16 max-md:px-5">
      <header className="flex flex-col justify-center items-center max-w-full text-center w-[634px]">
        <h2 className="text-3xl font-semibold leading-none text-[#5175EC] max-md:max-w-full">
          Team, led by the best
        </h2>
        <p className="mt-2.5 text-base leading-6 text-[color:var(--sds-color-text-default-default)] max-md:max-w-full">
          We have customised finance package for all your your individual and
          business financial needs
        </p>
      </header>

      <div className="flex gap-4 items-center self-stretch mt-10 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-6 items-start self-stretch px-16 py-12 my-auto bg-lime-50 min-w-[240px] max-md:px-5 max-md:max-w-full">
          {teamMembers.slice(0, 2).map(member => (
            <TeamMemberCard key={member.id} {...member} />
          ))}
        </div>
        <div className="flex flex-wrap gap-4 items-start self-stretch my-auto min-w-[240px] max-md:max-w-full">
          {teamMembers.slice(2).map(member => (
            <TeamMemberCard key={member.id} {...member} />
          ))}
        </div>
      </div>

      <div className="flex gap-4 items-center mt-10 text-base font-semibold tracking-normal leading-5 text-center">
        <button className="gap-2.5 self-stretch px-8 py-3.5 my-auto bg-lime-300 rounded-xl border border-black border-solid text-indigo-950 max-md:px-5">
          Contact Us
        </button>
        <button className="gap-2.5 self-stretch px-8 py-3.5 my-auto rounded-xl border border-solid border-indigo-950 text-indigo-950 max-md:px-5">
          View full team
        </button>
      </div>
    </section>
  );
}