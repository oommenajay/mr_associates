import * as React from "react";
import { FAQItem } from "../FaqComponent/FAQItems";
import { faqData } from "../FaqComponent/FAQData";

export function FAQ() {
    return (
        <section className="flex flex-col items-center py-16 max-w-[850px] m-auto">
            <header className="flex flex-col justify-center max-w-full text-center w-[634px]">
                <h1 className="self-center text-3xl font-semibold leading-none text-indigo-950 max-md:max-w-full">
                    Recently asked questions
                </h1>
                <p className="mt-2.5 text-base leading-6 text-[color:var(--sds-color-text-default-default)] max-md:max-w-full">
                    We have customised finance package for all your your individual and
                    business financial needs
                </p>
            </header>
            <main className="flex flex-col justify-center mt-10 w-full text-[color:var(--sds-color-text-default-default)] max-md:max-w-full">
                {faqData.map((item, index) => (
                    <div key={index} className={index > 0 ? "mt-5" : ""}>
                        <FAQItem
                            question={item.question}
                            answer={item.answer}
                            isOpen={item.isOpen}
                        />
                    </div>
                ))}
            </main>
        </section>
    );
}