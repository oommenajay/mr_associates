import * as React from "react";
import StatsCard from "./StatsCard";
import bgImage from "./assests/Vector.png"

const statsData = [
    { value: "100", suffix: "+", label: "Happy clients" },
    { value: "50", suffix: "+", label: "team Members" },
    { value: "97", suffix: "%", label: "Success rate" }
];

function StatsSection() {
    return (
        <div className="relative flex overflow-hidden mx-20 flex-col justify-center py-16 rounded-xl bg-indigo-950">
            <img
                src={bgImage}
                alt="Top-right vector"
                className="absolute right-0   "
            />
            <div className="flex flex-wrap gap-10 items-center justify-between px-16 max-md:px-5 max-md:max-w-full">
                <div className="self-stretch my-auto text-3xl font-semibold leading-10 text-white">
                    We have impactful
                    <br />
                    numbers
                </div>
                <div className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
                    {statsData.map((stat, index) => (
                        <StatsCard
                            key={index}
                            value={stat.value}
                            suffix={stat.suffix}
                            label={stat.label}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StatsSection;