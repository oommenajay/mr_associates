import * as React from "react";
import upArrow from "./assests/UpArrow.png";
import downArrow from "./assests/downarrow.png";

export function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = React.useState(false); // Initialize isOpen as false

  return (
    <article
      className={`flex flex-col p-5 w-full rounded-xl border border-solid border-zinc-300 ${isOpen ? "bg-white" : "bg-neutral-100"
        }`}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)} // Toggle isOpen state
        className="flex flex-wrap gap-2 items-center w-full text-base font-semibold tracking-normal leading-5 max-md:max-w-full"
      >
        <span className="flex-1 shrink self-stretch my-auto basis-0 text-left max-md:max-w-full">
          {question}
        </span>
        <img
          loading="lazy"
          src={isOpen ? upArrow : downArrow}
          alt={isOpen ? "Collapse" : "Expand"}
          className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
        />
      </button>
      {isOpen && (
        <p className="flex-1 shrink self-stretch mt-2.5 w-full leading-6 font-[number:var(--sds-typography-body-font-weight-regular)] text-[length:var(--sds-typography-body-size-medium)] max-md:max-w-full">
          {answer}
        </p>
      )}
    </article>
  );
}
