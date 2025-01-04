import { FaAnglesDown } from "react-icons/fa6";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Pinning = () => {
  useEffect(() => {
    const orange = ScrollTrigger.create({
      trigger: "#orange",
      start: "top 30%",
      end: "+=3090px",
      pinSpacing: false,
      pin: true,
      markers: true,
    });

    const purple = ScrollTrigger.create({
      trigger: "#purple",
      start: "top 30%",
      end: "+=2090px",
      pinSpacing: false,
      pin: true,
      markers: true,
    });

    const blue = ScrollTrigger.create({
      trigger: "#blue",
      start: "top 30%",
      end: "+=1090px",
      pinSpacing: false,
      pin: true,
      markers: true,
    });

    return () => {
      orange.kill();
      purple.kill();
      blue.kill();
    };
  }, []);

  return (
    <div
      id="pinning"
      className="w-full max-w-[1440px] mx-auto p-20 flex flex-col justify-center items-center"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="flex justify-center items-center gap-5 mb-20">
        <p className="text-5xl">Scroll Down</p>
        <FaAnglesDown size={32} />
      </div>
      <div className="bg-transparent w-1/2 h-96 flex justify-center items-center font-bold text-3xl"></div>
      <div
        id="orange"
        className="orange bg-orange-400 w-1/2 h-96 flex justify-center items-center font-bold text-3xl"
      >
        orange
      </div>
      <div className="bg-transparent w-1/2 h-96 flex justify-center items-center font-bold text-3xl"></div>
      <div
        id="purple"
        className="purple bg-purple-400 w-1/2 h-96 flex justify-center items-center font-bold text-3xl z-10"
      >
        purple
      </div>
      <div className="bg-transparent w-1/2 h-96 flex justify-center items-center font-bold text-3xl"></div>
      <div
        id="blue"
        className="blue bg-blue-400 w-1/2 h-96 flex justify-center items-center font-bold text-3xl z-30"
      >
        purple
      </div>
    </div>
  );
};

export default Pinning;
