'use client'
import "./page.css";

import React, { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Page2 = () => {

    const containerRef = useRef(null)

    useGSAP(() => {

        // =============================
        // Typing Animation
        // =============================
        gsap.to(".typing-text", {
            duration: 2,
            ease: "power4.out",
            text: {
                value: `<span class='text-cyan-500'>©</span>
                    2025 Hafiz Maaz.Studio<span class='text-cyan-950'>® </span> | 
                    <i class="ri-map-pin-line text-cyan-500"></i> PAKISTAN, ISLAMABAD |  
                    <i class="ri-gemini-fill text-cyan-500"></i> development`,
                delimiter: "",
                parseHTML: true
            },
            scrollTrigger: {
                trigger: ".typing-text",
                start: "top 90%",
                end: "top 35%",
                toggleActions: "play none none reverse"
            }
        });

        // =============================
        // 🔥 FLIP TEXT ANIMATION
        // =============================
        gsap.from(".rotateText", {
            rotateX: 100,
            y: 120,
            opacity: 0,
            transformOrigin: "top center",
            duration: 1.2,
            stagger: 0.25,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".rotateText",   // 👈 CHANGE THIS
                start: "top 85%",
                end: "top 40%",
                scrub: 1
            }
        });

    }, { scope: containerRef })

    return (
        <div
            ref={containerRef}
            id='quoteSection'
            className='uppercase bg-gray-950 text-center p-3 lg:p-20 text-sky-950'
        >

            <div>

                {/* Typing */}
                <div className="textdiv">
                    <h3 className="typing-text text-gray-500 text-[2.8vw] lg:text-[1.8vw] font-[anzo1] tracking-widest pt-3"></h3>
                </div>

                {/* Flip Text */}
                <div className='mt-[15vh] rotateText'>
                    <h1 className='text-[32vw] font-[anzo3] leading-[31vw]'>Clean Code</h1>
                </div>

                <div className='rotateText'>
                    <h1 className='text-[32vw] font-[anzo3] leading-[31vw]'>
                        <span className='border1'>defines</span>
                    </h1>
                </div>

                <div className='rotateText'>
                    <h1 className='text-[32vw] font-[anzo3] leading-[29vw]'>what</h1>
                </div>

                <div className='rotateText'>
                    <h1 className='text-[28vw] font-[anzo3] leading-[29vw]'>
                        <span className="border1">development</span>
                    </h1>
                </div>

                <div className='rotateText'>
                    <h1 className='text-[23vw] font-[anzo3] leading-[22vw]'>
                        <span className="border1">is</span> about !
                    </h1>
                </div>

            </div>
        </div>
    )
}

export default Page2