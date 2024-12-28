import * as React from "react";
import { TeamMember } from "./TeamMember";
import imgRineesh from "./assest/Rineesh2.png"
import imgManesh from "./assest/Maneesh2.png"
const teamData = [
    {
        name: "CA. Rineesh Kumar C.K., FCA, DISA (ICAI)",
        title: "Partner – Manesh Rineesh & Associates",
        description: `CA. Rineesh Kumar C.K. is a distinguished Fellow Chartered Accountant (FCA) and DISA (ICAI) holder, seamlessly combining financial expertise with digital innovation. As a partner at Manesh Rineesh & Associates, he specializes in integrating traditional financial practices with cutting-edge technology, enabling businesses to navigate the complexities of modern finance.\n\nWith a career marked by strategic foresight, risk management, and digital transformation, CA. Rineesh Kumar has earned a reputation as a trusted advisor in the financial landscape. His meticulous attention to detail and client-centric approach define his professional ethos.\n\nBeyond his career, he is a proponent of holistic growth and lifelong learning, drawing inspiration from his diverse interests in cricket, music, and personal development. At Manesh Rineesh & Associates, he is a driving force for innovation and sustainable growth, empowering clients to thrive in an ever-evolving financial world.`,
        imageSrc: imgRineesh
    },
    {
        name: "CA. Rineesh Kumar C.K., FCA, DISA (ICAI)",
        title: "Partner – Manesh Rineesh & Associates",
        description: `CA. Rineesh Kumar C.K. is a distinguished Fellow Chartered Accountant (FCA) and DISA (ICAI) holder, seamlessly combining financial expertise with digital innovation. As a partner at Manesh Rineesh & Associates, he specializes in integrating traditional financial practices with cutting-edge technology, enabling businesses to navigate the complexities of modern finance.\n\nWith a career marked by strategic foresight, risk management, and digital transformation, CA. Rineesh Kumar has earned a reputation as a trusted advisor in the financial landscape. His meticulous attention to detail and client-centric approach define his professional ethos.\n\nBeyond his career, he is a proponent of holistic growth and lifelong learning, drawing inspiration from his diverse interests in cricket, music, and personal development. At Manesh Rineesh & Associates, he is a driving force for innovation and sustainable growth, empowering clients to thrive in an ever-evolving financial world.`,
        imageSrc: imgManesh
    }
];

export function TeamSection2() {
    return (
        <div className="flex flex-col items-center p-16 bg-slate-50 max-md:px-5">
            <div className="flex flex-col justify-center items-center max-w-full text-center w-[634px]">
                <div className="text-3xl font-semibold leading-none text-indigo-500 max-md:max-w-full">
                    Team, led by the best
                </div>
                <div className="mt-2.5 text-base leading-6 text-[color:var(--sds-color-text-default-default)] max-md:max-w-full">
                    We have customised finance package for all your your individual and
                    business financial needs
                </div>
            </div>
            <div className="flex flex-col self-stretch p-8 mt-10 w-full bg-white rounded-xl max-md:px-5 max-md:max-w-full">
                {teamData.map((member, index) => (
                    <div key={index} className={index > 0 ? "mt-16 max-md:mt-10" : ""}>
                        <TeamMember {...member} />
                    </div>
                ))}
            </div>
            <div className="flex gap-4 items-center mt-10 text-base font-semibold tracking-normal leading-5 text-center">
                <button className="gap-2.5 self-stretch px-8 py-3.5 my-auto bg-lime-300 rounded-xl border border-black border-solid text-indigo-950 max-md:px-5">
                    Contact Us
                </button>
                <button className="gap-2.5 self-stretch px-8 py-3.5 my-auto rounded-xl border border-solid border-indigo-950 text-indigo-950 max-md:px-5">
                    View full team
                </button>
            </div>
        </div>
    );
}