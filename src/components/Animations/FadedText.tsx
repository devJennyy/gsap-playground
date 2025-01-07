import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const FadedText = () => {
  const comp = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        
        delay: 0.3,
      }).from(["#title-1","#title-2","#title-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      }).to(["#title-1","#title-2","#title-3"], {
        opacity: 0,
        y: "-=30",
        delay: 0.8,
        stagger: 0.5,
      }).to("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
      }).from("welcome", {
        opacity: 0,
        duration: 0.5,
      })
    }, comp)
    return () => ctx.revert()
  }, [])

  return (
    <div id="faded-text" className="relative" ref={comp}>
      <div id="intro-slider" className="flex flex-col items-start gap-10 w-full h-screen absolute top-0 left-0 z-10 text-7xl font-bold capitalize p-10 bg-[#00020F]">
        <h1 id="title-1">Hi there,</h1>
        <h1 id="title-2">Welcome to my creative space.</h1>
        <h1 id="title-3">Let’s explore GSAP animations.</h1>
      </div>

      <div className="flex justify-center items-center h-screen bg-red-300">
        <h1 id="outro" className="text-7xl font-bold capitalize">Welcome.</h1>
      </div>
    </div>
  );
};

export default FadedText;
