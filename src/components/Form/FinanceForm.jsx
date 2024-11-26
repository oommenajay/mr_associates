import * as React from "react";
import { FormInput } from "./FormInput";

export function FinanceForm() {
    const formInputs = [
        { label: "Full Name", id: "fullName" },
        { label: "Email", id: "email", type: "email" },
        { label: "Phone", id: "phone", type: "tel" },
        { label: "Company", id: "company" }
    ];

    return (
        <form className="flex flex-col self-stretch p-10 my-auto text-base bg-white rounded-xl border border-solid border-zinc-300 min-w-[320px] w-[639px] max-md:px-5 max-md:max-w-full">
            {formInputs.map((input) => (
                <FormInput key={input.id} {...input} />
            ))}

            <div className="flex flex-col mt-6 w-full max-md:max-w-full">
                <label htmlFor="service" className="font-semibold tracking-normal leading-5 text-[color:var(--sds-color-text-default-default)] max-md:max-w-full">
                    Service you are interested in
                </label>
                <div className="flex overflow-hidden relative gap-1 items-start px-4 py-3 mt-2 w-full whitespace-nowrap bg-white rounded-lg border border-solid border-zinc-300 min-h-[80px] min-w-[240px] text-[color:var(--sds-color-text-default-tertiary)] max-md:max-w-full">
                    <select
                        id="service"
                        className="z-0 flex-1 shrink basis-0 max-md:max-w-full bg-transparent border-none outline-none"
                        aria-label="Select a service"
                    >
                        <option value="">Select a service</option>
                    </select>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c095b3d85aeea067dcde1b5e80aa5fff6053475ff4534c96008246c33fa4dc1e?placeholderIfAbsent=true&apiKey=0f44f0e85cd14078bb35cd551110e240"
                        className="object-contain absolute bottom-1.5 z-0 shrink-0 aspect-square h-[7px] right-[5px] w-[7px]"
                        alt=""
                    />
                </div>
            </div>

            <button type="submit" className="gap-2.5 self-start px-8 py-3.5 mt-6 font-semibold tracking-normal leading-5 text-center whitespace-nowrap bg-lime-300 rounded-xl border border-black border-solid text-indigo-950 max-md:px-5">
                Submit
            </button>
        </form>
    );
}