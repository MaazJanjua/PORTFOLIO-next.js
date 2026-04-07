'use client'

import React, { useEffect, useRef } from 'react';
import Intro from "./components/intro/page.js";
import Home from './home/page.js';
import Page1 from "./components/Pages/page1.js";
// import Page2 from "./components/Pages/page2.js";
import Services from "./services/page.js";

const Page = () => {
  const scrollContainerRef = useRef(null);
  const introRef = useRef(null); 
  useEffect(() => {
    let locomotiveScroll;

    const initLocomotive = async () => {
      if (typeof window === 'undefined') return;

      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      // Wait until Intro is hidden
      const waitIntro = setInterval(() => {
        if (!introRef.current || introRef.current.style.display === 'none') {
          clearInterval(waitIntro);

          locomotiveScroll = new LocomotiveScroll({
            el: scrollContainerRef.current,
            smooth: true,
            multiplier: 1,
            class: 'is-reveal',
          });
        }
      }, 50);
    };

    initLocomotive();

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <>
      {/* Intro animation */}
     {/* <div ref={introRef}>
         <Intro /> 
      </div>*/}

      {/* Scrollable content */}
      <main className='bg-gray-950'
       ref={scrollContainerRef}
        >
        <Home />
        <Page1 />
        {/* <Page2 /> */}
        <Services />
      </main>
    </>
  );
};

export default Page;