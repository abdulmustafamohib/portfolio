'use client'

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading text-white">
        my <span className="text-red-800">values</span>
      </h1>
      {/* remove bg-white dark:bg-black */}
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {/* add des prop */}
        <Card
          title="Clarity First"
          icon={<AceternityIcon order="Discover" />}
          des="Great solutions begin with clear thinking. I prioritize understanding your needs deeply — from goals to user journey — before writing a single line of code."
        >
          <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="rounded-3xl overflow-hidden transition-colors duration-300 group-hover/canvas-card:bg-red-100"
          colors={[[255, 255, 255]]}
          showGradient={false}
        />
        </Card>
        <Card
          title="Build with Intention"
          icon={<AceternityIcon order="Build" />}
          des="I don’t just ship features. I craft thoughtful, maintainable systems that are fast, scalable, and a joy to use — built with purpose, not just polish."
        >
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="rounded-3xl overflow-hidden transition-colors duration-300 group-hover/canvas-card:bg-red-100"
          colors={[[255, 255, 255]]}
          showGradient={false}
        />

          {/* Radial gradient for the cute fade */}
          {/* remove this one */}
          {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
        </Card>
        <Card
          title="Iterate & Launch"
          icon={<AceternityIcon order="Launch" />}
          des="Once live, it’s just the beginning. I keep refining based on feedback, optimizing performance, and evolving your site to meet real-world demands."
        >
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="rounded-3xl overflow-hidden transition-colors duration-300 group-hover/canvas-card:bg-red-100"
          colors={[[255, 255, 255]]}
          showGradient={false}
        />
          </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  // add this one for the desc
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // change h-[30rem] to h-[35rem], add rounded-3xl
      className="border group/canvas-card flex items-center justify-center
      border-gray-200 hover:bg-red-100 transition-colors duration-300
      max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl bg-red-400"    
    >
      {/* change to h-10 w-10 , add opacity-30  */}
      <Icon className="absolute h-10 w-10 -top-3 -left-3 text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          // add this for making it center
          // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2 className="text-red-800 text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
        relative z-10 mt-4 font-bold group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>

        {/* add this one for the description */}
        <p className="text-red-700 text-sm opacity-0 group-hover/canvas-card:opacity-100
        relative z-10 mt-4 text-center group-hover/canvas-card:-translate-y-2 transition duration-200">
          {des}
        </p>

      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
          bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
          justify-center rounded-full bg-white px-5 py-2 text-red-800 backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};


export const Icon = ({
  className,
  ...rest
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};