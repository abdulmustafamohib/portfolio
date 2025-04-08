"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { projects } from "@/Data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id = 'projects'>
      <h1 className="heading text-white">
        check out some {" "}
        <span className="text-red-800">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((item) => (
          <div
            className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={item.id}
          >
          <PinContainer
            title={new URL(item.link).pathname}
            href={item.link}
          >
              <div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] h-[30vh] w-[80vw] overflow-hidden lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image 
                    src="/bg.png" 
                    alt="background image" 
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <Image
                  src={item.img}
                  alt={`${item.title} cover`}
                  fill
                  className="z-10 absolute bottom-0 object-cover"
                  unoptimized
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-red-800">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal text-sm line-clamp-2"
                style={{
                  color: "#000000",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-end mt-7 mb-3">
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-red-800">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3 text-red-800" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;