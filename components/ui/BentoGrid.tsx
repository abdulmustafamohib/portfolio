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
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
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
        "row-span-1 relative overflow-hidden rounded-3xl border text-black border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        id === 6 ? "bg-red-950 text-white" : "bg-red-400",
        className
      )}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
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
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          {(id !== 3) && (
            <>
              <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-black z-10">
                {description}
              </div>
              <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
                {title}
              </div>
            </>
          )}


          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex flex-col lg:flex-row items-center justify-between mt-6 z-10 w-full gap-6">
              {/* Left text block - centered vertically */}
              <div className="flex flex-col justify-center items-start h-full lg:pr-6">
                <p className="text-sm text-black/70 mb-1">
                  Yes, I do know all of these
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-black">
                  My tech stack
                </h2>
              </div>

              {/* Tech stack grid on the right */}
              <div className="grid grid-cols-2 gap-3">
                {[...leftLists, ...rightLists].map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm lg:text-base opacity-80 rounded-lg text-center bg-black text-red-400 whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
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