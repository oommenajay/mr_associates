import * as React from "react";
import { FinanceForm } from "./FinanceForm";


export function FinancePage() {
    return (
        <main className="flex overflow-hidden flex-col  bg-indigo-950 max-md:pb-24">
            <section className="flex flex-wrap gap-10 items-center px-20 py-16 max-md:px-5 max-md:max-w-full">
                <article className="flex flex-col self-stretch px-16 my-auto min-w-[240px] w-[519px] max-md:px-5 max-md:max-w-full">
                    <h1 className="text-6xl font-medium text-lime-300 capitalize leading-[65px] max-md:text-4xl max-md:leading-[53px]">
                        Its a good day
                        <br />
                        to start your finance
                    </h1>
                    <p className="mt-6 text-base leading-6 text-white">
                        We're here to help You. We'd love to hear from you
                        <br />
                        Schedule time to talk with an expert matched to your Accounting and
                        tax related needs.
                    </p>
                </article>
                <FinanceForm />
            </section>
        </main>
    );
}