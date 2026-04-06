//YEAH KAM KA HA 
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";

const PageBottomText = () => {
  const gsapRef = useRef(null);

 useGSAP(() => {
    gsap.from(gsapRef.current, {
      z: -300,           // 👈 element peeche se start kare
      rotateX: 180,      // 👈 fold hone ka 3D angle
      opacity: 0,
      duration: 3.4,
            repeat: -1,     // infinite repeat
  repeatDelay: 1.5, // har repeat ke beech 1.5 sec ka gap
  yoyo: true,     // optional: wapas reverse bhi ho

      ease: "bounce.inOut",
    });
  }, []);
  return (
    <div
      ref={gsapRef}
      className="absolute  top-1/2 lg:top-1/2 left-[92.5vw] lg:left-0 translate-y-1/2 rotate-270  lg:-translate-y-1/2 lg:rotate-90 gap-3 origin-bottom-left   -mt-[6vw] ml-4 px-[2.5vw]  py-[1.2vw] bg-sky-950 text-white flex justify-between text-center items-center shadow-lg w-auto lg:w-[11vw] lg:h-[6vh] lg:px-[1.2vw]"
    >
      <div className="text-blawhiteck  lg:text-[1.1vw] font-bold">HM.</div>
      <div className="lg:text-[1vw] font-bold">Honors</div>
    </div>
  );
};

export default PageBottomText;
