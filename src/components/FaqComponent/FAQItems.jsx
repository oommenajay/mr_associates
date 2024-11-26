import * as React from "react";

export function FAQItem({ question, answer, isOpen }) {
  return (
    <article className={`flex flex-col p-5 w-full rounded-xl border border-solid border-zinc-300 ${isOpen ? 'bg-white' : 'bg-neutral-100'}`}>
      <button className="flex flex-wrap gap-2 items-center w-full text-base font-semibold tracking-normal leading-5 max-md:max-w-full">
        <span className="flex-1 shrink self-stretch my-auto basis-0 text-left max-md:max-w-full">
          {question}
        </span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f10e1d095a3de92b7e2cb7c7a6aece65f801c6828bb3a013de45400e47cae40d?placeholderIfAbsent=true&apiKey=0f44f0e85cd14078bb35cd551110e240"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
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