import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
        <div>
            <Spotlight className='-top-40 -left-10 
            md:-left-32 md:-top-20 h-screen' fill = "red"/>
            <Spotlight className='top-10 left-full h-[80vh] 
            w-[50vw]' fill="red"/>
            <Spotlight className='top-28 left-80 
            h-[80vh] w-[50vw]' fill = "black"/>
        </div>

        <div className="h-screen w-full flex items-center justify-center absolute top-0 left-0">
        
        <div className="h-screen w-full absolute top-0 left-0 flex items-center justify-center"></div>
           
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center
         [mask-image:radial-gradient(ellipse_at_center,transparent_50%,white)]"/>

        </div>

        <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl
          lg:max-w-[60vw] flex flex-col items-center justify-center'>

            <h2 className='uppercase tracking-widest text-xl text-center
            text-red-800 max-w-80'>
              software | firmware robotics | ai
            </h2>

            <TextGenerateEffect 
            className='text-center text-[60px] md:text-7xl lg:text-8xl'
            words='transforming dreams into reality'
            />

            <p className='text-black text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
              hi, i&apos;m <span className='text-red-800 font-bold'> Mohib</span>, a developer based in Mississauga.
            </p>

            <a href="#about">
              <MagicButton
                title = "show my work"
                icon={<FaLocationArrow/>}
                position='right'
              />
            </a>
            
          </div>
        </div>
    </div>
  )
}

export default Hero