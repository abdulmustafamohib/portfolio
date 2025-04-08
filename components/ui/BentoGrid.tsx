'use client'

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from "next/dynamic";
import Image from "next/image";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

import { cn } from "@/lib/utils";


import GridGlobe from "./GridGlobe";
import animationData from "@/Data/confetti.json";
import MagicButton from "./MagicButton";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  titleClassName,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  titleClassName?: string;
}) => {
  const leftLists = ["C/C++", "Python", "Java", "Tailwind"];
  const rightLists = ["TypeScript", "JavaScript", "NextJS", "React"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "mohib.abdulmustafa@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border text-black border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col",
        id === 6 ? "bg-red-950 text-white" : "bg-red-400",
        id === 1 ? "md:col-span-3 lg:col-span-3 md:row-span-2" : "",
        id === 2 ? "md:col-span-2 lg:col-span-2 md:row-span-2" : "",
        id === 3 ? "md:col-span-1 lg:col-span-2 md:row-span-2" : "",
        id === 4 ? "md:col-span-3 lg:col-span-2 md:row-span-1" : "",
        id === 5 ? "md:col-span-2 lg:col-span-3 md:row-span-2" : "",
        id === 6 ? "md:col-span-1 lg:col-span-2 md:row-span-1" : "",
        className
      )}
    >
      <div className={cn("h-full w-full relative min-h-[200px]", id === 6 && "flex justify-center")}>
        {img && (
          <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
            <div className="relative w-full h-full">
              <Image
                src={img}
                alt="background"
                fill
                className="object-cover object-center transition-all duration-300 scale-110 blur-md"
                unoptimized
              />
            </div>
            <div className="absolute inset-0" />
          </div>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-sm lg:text-base text-sm text-black z-10">
            {description}
          </div>
          <div className="font-sans text-xl lg:text-3xl max-w-96 font-bold z-10 mt-2">
            {title}
          </div>

          {id === 2 && (
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <GridGlobe />
            </div>
          )}

          {id === 3 && (
            <div className="absolute inset-y-0 right-5 flex items-center gap-4 lg:gap-6">
              <div className="flex flex-col gap-3">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 text-xs lg:text-sm opacity-90 rounded-lg text-center bg-black text-red-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 text-xs lg:text-sm opacity-90 rounded-lg text-center bg-black text-red-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}>
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-black text-red-400"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};