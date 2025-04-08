import React from 'react'

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses = '',
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      onClick={handleClick}
      className="relative inline-flex h-12 w-auto md:w-60 overflow-hidden 
        rounded-lg border-2 border-red-800 shadow-[0_0_10px_2px_rgba(127,29,29,0.6)] 
        focus:outline-none bg-red-800 transition-all duration-300 hover:shadow-[0_0_15px_4px_rgba(127,29,29,0.8)]"
    >
      {/* Button content */}
      <span
        className={`inline-flex h-full w-full items-center justify-center 
          rounded-lg bg-red-400 px-5 text-sm text-black font-bold 
          gap-2 z-10 ${otherClasses}`}
      >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
};

export default MagicButton;
