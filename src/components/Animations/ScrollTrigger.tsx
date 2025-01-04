import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { FaAnglesDown } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerComponent = () => {
  useEffect(() => {
    gsap.to(".b", {
      scrollTrigger: {
        trigger: ".b",
        toggleActions: "restart reverse none none",
        start: "20px 80%",
        end: "bottom 140px",
        scrub: 2,
      },
      x: 900,
      ease: "power2.out",
    });
  }, []);

  return (
    <div
      id="scroll-trigger"
      className="w-full max-w-[1440px] mx-auto p-32 flex flex-col gap-64"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="flex justify-center items-center gap-5">
        <p className="text-5xl">Scroll Down</p>
        <FaAnglesDown size={32} />
      </div>
      <div className="a font-bold text-5xl p-20 border w-fit">PAUSE</div>
      <div className="b font-bold text-5xl p-20 border w-fit">P L A Y</div>
      <div className="c font-bold text-5xl p-20 border w-fit">PAUSE</div>

      {/* Common Easing effects
          For smooth transitions: power2.out, expo.inOut, sine.inOut
          For playful or "bouncy" effects: bounce.out, elastic.out
          For dramatic entrances or exits: expo.out, power3.out
          For natural movement: back.out, elastic.inOut */}
    </div>
  );
};

export default ScrollTriggerComponent;
