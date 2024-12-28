import * as React from "react";
import LocationCard from "./LocationCard";
import ComingSoonCard from "./ComingSoonCard";
import LocationImg from "./assests/Location.png"

const locations = [
    {
        icon: LocationImg,
        title: "Calicut",
        description: "Comprehensive audit services to ensure accuracy and compliance with regulatory standards."
    },
    {
        icon: LocationImg,
        title: "Kochi",
        description: "Comprehensive audit services to ensure accuracy and compliance with regulatory standards."
    }
];

export default function LocationsSection() {
    return (
        <div className="flex flex-col py-16 bg-indigo-950">
            <div className="flex flex-col justify-center items-center self-center max-w-full text-center w-[634px]">
                <div className="text-3xl font-semibold leading-none text-lime-300 max-md:max-w-full">
                    We are expanding
                </div>
                <div className="mt-2.5 text-base leading-6 text-white max-md:max-w-full">
                    We have customised finance package for all your your individual and
                    business financial needs
                </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center items-start px-20 mt-10 w-full text-black max-md:px-5 max-md:max-w-full">
                {locations.map((location, index) => (
                    <LocationCard
                        key={index}
                        icon={location.icon}
                        title={location.title}
                        description={location.description}
                    />
                ))}
                <ComingSoonCard icon={LocationImg} />
            </div>
        </div>
    );
}