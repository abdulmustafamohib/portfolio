"use client";

import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { WavyBackground } from './ui/WavyBackground'

const Hero = () => {
  return (
    <WavyBackground 
      className="pb-0 pt-10"
      colors={[
        "#000000",
        "#991b1b", // dark red
        "rgba(255, 255, 255, 0.7)", // very light white
        "#b91c1c", // medium red
        "rgba(255, 255, 255, 0.4)", // very light white
        "#dc2626", // lighter red
        "#404040"
      ]}
      waveWidth={35}
      backgroundFill="black"
      blur={5}
      speed="slow"
      waveOpacity={0.3}
    >
      <div className='flex justify-center relative my-2 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl
        lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xl text-center
          text-red-800 max-w-80 font-bold'>
            software | firmware robotics | ai
          </h2>

          <TextGenerateEffect 
            className='text-center text-[60px] md:text-7xl lg:text-8xl'
            words='transforming dreams into reality'
          />

          <p className='text-white text-center md:tracking-wider mb-2 text-sm md:text-lg lg:text-2xl'>
            hey! i&apos;m <span className='text-red-800 font-bold'> Mohib</span>, a mechatronics engineering student at the university of waterloo.
          </p>

          <a href="#projects" className="mt-10">
          <MagicButton
            title="show my work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        </div>
      </div>
    </WavyBackground>
  )
}

export default Hero