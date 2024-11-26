import React from 'react'
import ServiceCard from './ServiceCard';
import icon1 from "../Services/assests/audit.png"


const services = [
    {
        id: 1,
        title: "Audit & Assurance",
        description: "Comprehensive audit services to ensure accuracy and compliance with regulatory standards.",
        iconSrc: icon1
    },
    {
        id: 2,
        title: "Audit & Assurance",
        description: "Comprehensive audit services to ensure accuracy and compliance with regulatory standards.",
        iconSrc: icon1
    },
    {
        id: 3,
        title: "Audit & Assurance",
        description: "Comprehensive audit services to ensure accuracy and compliance with regulatory standards.",
        iconSrc: icon1
    },
    {
        id: 4,
        title: "Audit & Assurance",
        description: "Comprehensive audit services to ensure accuracy and compliance with regulatory standards.",
        iconSrc: icon1
    },
    {
        id: 5,
        title: "Audit & Assurance",
        description: "Comprehensive audit services to ensure accuracy and compliance with regulatory standards.",
        iconSrc: icon1
    },
    {
        id: 6,
        title: "Audit & Assurance",
        description: "Comprehensive audit services to ensure accuracy and compliance with regulatory standards.",
        iconSrc: icon1
    }
];

const Services = () => {
    return (
        <>
            <main className="flex flex-col justify-center items-center px-20 py-16 bg-white  max-md:px-5">
                <header className="flex flex-col justify-center items-center max-w-full text-center  w-[634px]">
                    <h1 className="text-3xl font-semibold leading-none  text-indigo-950 max-md:max-w-full">
                        Our all-in-one accounting services
                    </h1>
                    <p className="mt-2.5 text-base leading-6 text-[color:var(--sds-color-text-default-default)] max-md:max-w-full">
                        We have customised finance package for all your individual and
                        business financial needs
                    </p>
                </header>
                <section className="flex flex-wrap gap-4 items-start self-stretch mt-10 w-full text-black max-md:max-w-full">
                    <div className="flex flex-wrap grow shrink gap-4 items-center min-w-[240px] w-[1034px]">
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
