import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/Data";
import MagicButton from "./ui/MagicButton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full py-20 bg-black" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw] text-center text-white">
            together we can build the next <span className="text-red-800">big</span> thing
          </h1>
          <p className="text-white/70 mt-6 text-center px-4 max-w-2xl">
            Feel free to reach out and connect!
          </p>
          <div className="mt-10">
            <a href="mailto:mohib.abdulmustafa@gmail.com">
              <MagicButton
                title="contact me"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 gap-8 md:gap-0">
          <p className="text-sm md:text-base font-light md:font-normal text-white/70 order-2 md:order-1">
            Copyright © 2025 Abdul Mustafa Muhammad Mohib
          </p>

          <div className="flex items-center gap-6 md:gap-3 order-1 md:order-2">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-transform hover:scale-110"
            >
              <Image 
                src={info.img} 
                alt="social icon" 
                width={20} 
                height={20}
                unoptimized
              />
            </a>
          ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;