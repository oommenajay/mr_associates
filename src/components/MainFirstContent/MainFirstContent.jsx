import * as React from "react";
import { Button } from "../Button/Button";

export function MainFirstContent() {
    return (
        <main className="flex flex-col justify-center px-20 pt-24 pb-16 text-base max-md:px-5">
            <section className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
                <article className="flex flex-col grow shrink py-12 pl-16 min-w-[240px] w-[441px] max-md:max-w-full">
                    <h1 className="text-6xl font-medium capitalize leading-[65px] text-indigo-950 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
                        Expert financial solutions for personal and business success
                    </h1>
                    <p className="mt-6 leading-6 text-stone-900 max-md:max-w-full">
                        From tax planning and audits to financial consulting, our trusted
                        team is here to simplify your path to financial clarity and growth.
                    </p>
                    <div className="flex gap-4 items-center self-start mt-6 font-semibold tracking-normal leading-5 text-center">
                        <Button variant="primary">Schedule A Call</Button>
                        <Button variant="secondary">Contact Us</Button>
                    </div>
                </article>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b546aa910c1425dd06b7c2f45db971c3fa2d271358e74e7a23f0c8663325be32?placeholderIfAbsent=true&apiKey=0f44f0e85cd14078bb35cd551110e240"
                    alt="Financial solutions illustration"
                    className="object-contain grow shrink aspect-[1.09] min-w-[240px] w-[538px] max-md:max-w-full"
                />
            </section>
        </main>
    );
}