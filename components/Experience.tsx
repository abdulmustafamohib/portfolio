import React from "react";
import { workExperience } from "@/Data";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="py-20 w-full text-white" id="experience">
      <h1 className="heading">
        my <span className="text-red-800">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-black bg-red-400 border-neutral-200 overflow-hidden"
            style={{
              background: "white",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-4">
              {/* Thumbnail with visual wrapper */}
              <div className="p-3 bg-red-800 rounded-xl shadow-md">
                <Image
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  width={112}
                  height={112}
                  className="lg:w-28 md:w-20 w-16 object-contain"
                  unoptimized
                />
              </div>

              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold text-red-800">
                  {card.title}
                </h1>
                <p className="text-start text-black mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
