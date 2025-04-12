import { GrStrikeThrough } from "react-icons/gr";
import { FaHome, FaProjectDiagram, FaBriefcase, FaEnvelope } from "react-icons/fa";

export const navItems = [
    { name: "About", link: "#about", icon: <FaHome /> },
    { name: "Projects", link: "#projects", icon: <FaProjectDiagram /> },
    { name: "Experience", link: "#experience", icon: <FaBriefcase /> },
    { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Trying to bring AI concepts to real life" ,
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end text-red-400",
      img: "/humanoid.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I also specialize in 3D modeling",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "Yes, I do know all of these",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Robotics enthusiast with a passion for software",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start text-center",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a smart home security system",
      description: "What's New",
      className: "md:col-span-3 md:row-span-2 font-bold",
      imgClassName: "w-full h-full object-cover absolute top-0 left-0 z-0",
      titleClassName: "justify-center md:justify-start lg:justify-center text-red-400",
      img: "/security.jpg",
      spareImg: "",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Image Classification CNN",
      des: "Created an image classification program for the CIFAR-10 dataset with complete data augmentation and normalization, capable of achieving 90%+ model accuracy",
      img: "/imagecnn.png",
      link: "https://github.com/abdulmustafamohib/cifar-10-classifier"
    },
    {
      id: 2,
      title: "X Sentiment Analysis System",
      des: "Built a sentiment analysis system using X's v2 API, Tweepy and Textblob, making it easy to identify the number of positive, negative, and neutral tweets for any topic",
      img: "/twittersentiment.png",
      link: "https://github.com/abdulmustafamohib/twitter-sentiment-analysis"
    },
    {
      id: 3,
      title: "STM32 Timer Module",
      des: "Designed and programmed a device driver module in C/C++ for an STM32 processor board, responsible for keeping track of the hardware timer through HAL functions",
      img: "/timer.png",
      link: "https://github.com/abdulmustafamohib/Timer-Module"
    },
    {
      id: 4,
      title: "Battleship Game",
      des: "Made a player vs computer game of battleship in Java with a complete GUI produced from scratch, complete with an easy, medium and hard mode",
      img: "/battleship.png",
      link: "https://github.com/abdulmustafamohib/Battleship-Game"
    },
    {
      id: 5,
      title: "Roll-A-Ball Game",
      des: "Used Unity to create a dynamic ball game with enemy AI navigation by writing scripts in C#",
      img: "/rollaball.png",
      link: "https://github.com/abdulmustafamohib/Roll-A-Ball-Game"
    },
    {
      id: 6,
      title: "Autonomous Faucet Robot",
      des: "Engineered a robot capable of automating the hand-washing process and then programmed it in ROBOTC for complete autonmous functionality through ultrasonic sensors",
      img: "/faucet.png",
      link: "https://github.com/abdulmustafamohib/Autonomous-Faucet"
    }
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "AI Developer",
      desc: "Working with Neolific to deploy impactful AI driven projects solving real-world issues",
      className: "md:col-span-2",
      thumbnail: "/neolific.svg",
    },
    {
      id: 2,
      title: "Software Developer",
      desc: "Building core processing logic for humanoid teleoperation and helping caption VR environments in real-time for Waterloo Reality Labs",
      className: "md:col-span-2",
      thumbnail: "/realitylabs.svg",
    },
    {
      id: 3,
      title: "Firmware Developer",
      desc: "Designed critical device driver modules for STM32 processor board with Waterloo Rocketry",
      className: "md:col-span-2",
      thumbnail: "/rocketry.svg",
    },
    {
      id: 4,
      title: "Programming and Controls Lead",
      desc: "Led software development on FRC Team 1241, a top 10 ranked robotics team in Ontario",
      className: "md:col-span-2",
      thumbnail: "/theory6.svg",
    },
    {
      id: 5,
      title: "Workshop Host",
      desc: "Hosted workshdops for new programmers to teach fundamental coding concepts on behalf of Hour of Code",
      className: "md:col-span-2",
      thumbnail: "/hoc.svg",
    },
    {
      id: 6,
      title: "Tutor",
      desc: "Tutored over 200+ students at Rick Hansen Secondary School for advanced concepts in computer science, math, and physics",
      className: "md:col-span-2",
      thumbnail: "/rick.svg",
    }
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/abdulmustafamohib"
    },
    {
      id: 2,
      img: "/linkedin.svg",
      link: "https://www.linkedin.com/in/ammmohib"
    },
    {
      id: 3,
      img: "/x.svg",
      link: "https://x.com/ammmohib"
    },
  ];