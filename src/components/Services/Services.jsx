import React from 'react'
import ServiceCard from './ServiceCard';
import icon1 from "../Services/assests/audit.png"
import CorporateImg from "./assests/briefcase.png"
import directTaxImg from "./assests/Group1.png"
import indirectTaxImg from "./assests/10-tag.png"
import AuditAndAssuranceImg from "./assests/Group2.png"
import OutsourcingImg from "./assests/outsourcing.png"



const services = [
    {
        id: 1,
        title: "Corporate Advisory",
        description: "Comprehensive audit services to ensure accuracy and compliance with regulatory standards.",
        iconSrc: CorporateImg
    },
    {
        id: 2,
        title: "Direct Tax Advisory",
        description: "Comprehensive audit services to ensure accuracy and compliance with regulatory standards.",
        iconSrc: directTaxImg
    },
    {
        id: 3,
        title: "Indirect Tax",
        description: "Comprehensive audit services to ensure accuracy and compliance with regulatory standards.",
        iconSrc: indirectTaxImg
    },
    {
        id: 4,
        title: "Audit & Assurance",
        description: "Comprehensive audit services to ensure accuracy and compliance with regulatory standards.",
        iconSrc: AuditAndAssuranceImg
    },
    {
        id: 5,
        title: "Outsourcing",
        description: "Comprehensive audit services to ensure accuracy and compliance with regulatory standards.",
        iconSrc: OutsourcingImg
    }
];

const Services = () => {
    return (
        <>
            <main className="flex flex-col justify-center items-center py-16 bg-white">
                <header className="flex flex-col justify-center items-center max-w-full text-center  w-[634px]">
                    <h1 className="text-3xl font-semibold leading-none  text-[#5175EC] max-md:max-w-full">
                        Our all-in-one accounting services
                    </h1>
                    <p className="mt-2.5 text-base leading-6 text-[color:var(--sds-color-text-default-default)] max-md:max-w-full">
                        We have customised finance package for all your individual and
                        business financial needs
                    </p>
                </header>
                <section className="flex flex-wrap items-start self-center mt-10 w-full text-black max-md:max-w-full">
                    <div className="flex sm:flex-col md:flex-row flex-wrap grow shrink justify-center sm:items-center gap-4">
                        {services.map((service) => (
                            <ServiceCard key={service.id} {...service} />
                        ))}
                    </div>
                </section>
                <nav className="flex gap-4 items-center mt-10 text-base font-semibold tracking-normal leading-5 text-center text-indigo-950">
                    <button className="gap-2.5 self-stretch px-8 py-3.5 my-auto bg-lime-300 rounded-xl border border-black border-solid max-md:px-5">
                        Contact Us
                    </button>
                    <button className="gap-2.5 self-stretch px-8 py-3.5 my-auto rounded-xl border border-solid border-indigo-950 max-md:px-5">
                        Browse all Services
                    </button>
                </nav>
            </main>
        </>
    )
}

export default Services
