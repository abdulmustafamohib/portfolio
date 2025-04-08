import React from 'react'
import { Spotlight } from './Spotlight'

interface SpotlightLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const SpotlightLayout = ({ children, className = "" }: SpotlightLayoutProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Random positioned spotlights with varied orientations */}
      <Spotlight
        className="-top-40 -right-[10%] md:-right-[15%] md:-top-20 h-full"
        fill="white"
      />
      <Spotlight
        className="top-[20%] -left-[30%] h-full w-[50vw]"
        fill="red"
      />
      <Spotlight
        className="top-[50%] -right-[20%] h-full w-[50vw]"
        fill="white"
      />
      <Spotlight
        className="top-[70%] -left-[15%] h-full w-[50vw]"
        fill="red"
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default SpotlightLayout 