'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { HomeIcon } from '@heroicons/react/24/solid';
import { Foldit } from 'next/font/google';
// import { useRouter } from 'next/navigation';


const foldit = Foldit({
    weight: ['400', '700'],
    subsets: ['latin']
});


const Page = () => {
    const introRef = useRef(null);
    const nameRef = useRef(null);
    const starRef = useRef(null);
    const homeRef = useRef(null);
    // const router = useRouter();


    useEffect(() => {
        const tl = gsap.timeline();
        // Make sure starRef exists
        if (!starRef.current) return;
        const star = starRef.current;

        tl.from(nameRef.current, {
            x: '-200',
            duration: 1.5,
            // ease: 'Power4.in',
            ease: "circ.inOut",
            opacity: 0
        })
        tl.to(starRef.current, {
            duration: 2,         // total animation time
            rotation: 360,       // one full rotation
            scale: 25,            // scale up to cover screen
            x: (window.innerWidth / 2) - star.getBoundingClientRect().right, // move to center horizontally
            y: (window.innerHeight / 2) - star.getBoundingClientRect().top, // move to center vertically
            ease: "power2.inOut",
            opacity: 0
        })
        // 2 sec wait + animation
        tl.to(introRef.current, {
            y: '-100%',
            duration: 1,
            // delay: .1,
            ease: 'power4.inOut'
        });

        tl.fromTo(homeRef.current,
            {
                x: 0,
                y: 0,
                scale: 12
            },
            {
                x: '-46vw',   // 300px left
                y: '-40vh',   // 200px up
                duration: 2,
                ease: "power2.inOut",
                scale: 2
            }
        );

    }, []);



    return (
        <>
            {/* Intro Screen */}
            <div
                ref={introRef}

                className="fixed  w-full h-screen bg-gray-950  z-999 text-white text-[4.3vw] uppercase font-extrabold"
            >
                <div ref={nameRef} className='flex items-center justify-center fixed  w-full h-screen top-0 left-0'>

                    <h1 className={foldit.className}>H a f i z </h1><svg ref={starRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-20 opacity-75" >
                        <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                    </svg>
                    <h1 className={foldit.className} > M a a z </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="bg-black text-white flex items-center justify-center">
                <h1 ref={homeRef}
                    className={`${foldit.className} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase`}>Full Stack Developer</h1>
            </div>
        </>
    );
};

export default Page;