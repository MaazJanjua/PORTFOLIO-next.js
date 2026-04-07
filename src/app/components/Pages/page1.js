// 'use client'
// import "./page1.css";

// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { TextPlugin } from "gsap/TextPlugin";

// gsap.registerPlugin(ScrollTrigger, TextPlugin);


// const Page2 = () => {
//     gsap.registerPlugin(ScrollTrigger, TextPlugin);
//     useGSAP(() => {
//         gsap.to(".typing-text", {
//             duration: 2,
//             ease: "power4.out",
//             onUpdate: function () {

//             },
//             text: {
//                 value: `<span class='text-cyan-500'>©</span>
//                     2025 Hafiz Maaz.Studio<span class='text-cyan-950'>® </span> | 
//                     <i class="ri-map-pin-line text-cyan-500"></i> PAKISTAN, ISLAMABAD |  
//                     <i class="ri-gemini-fill text-cyan-500"></i> development`,
//                 delimiter: "",
//                 parseHTML: true     
//             },
//             scrollTrigger: {
//                 trigger: ".typing-text",
//                 scroller: "[data-scroll-container]",
//                 start: "top 90%",
//                 end: "top 35%",
//                 invalidateOnRefresh: true  

//             }
//         });
//         gsap.from(".svganimtion-div", {
//             duration: 1,
//             opacity: 0,
//             y: 100,
//             ease: "power4.inOut",
//             scrollTrigger: {
//                 trigger: ".svganimtion-div ",
//                 scroller: "[data-scroll-container]",
//                 start: "top 70%",
//                 end: "top 30%",
//                 scrub: true,
//             }
//         })
//     }, []);

//     useGSAP(function () {
//         gsap.from(".rotateText", {
//             transform: "rotateX(-75deg)",
//             opacity: 0,
//             duration: 1.5,
//             stagger: 1,
//             scrollTrigger: {
//                 trigger: ".rotateText",
//                 scroller: "[data-scroll-container]",
//                 start: "top 70%",
//                 end: "top -250%",
//                 scrub: 2
//             }
//         })
//     })




//     return (

//         <div

//             id='quoteSection' className=' uppercase bg-white text-center p-3 lg:p-20 text-black'>
//             <div

//             >
//                 <div className="textdiv"
//                 >

//                     <h3
//                         className="typing-text text-gray-500 text-[2.8vw] lg:text-[1.8vw] font-[anzo1] tracking-widest pt-3"
//                     ></h3>
//                 </div>


//                 <div className='mt-[15vh]  rotateText' >
//                     <h1 className='text-[32vw] text-black font-[anzo3] leading-[31vw] tracking-wide'>Clean Code </h1>
//                 </div>

//                 <div className=' rotateText'>
//                     <h1 className='text-[32vw] text-black font-[anzo3] leading-[31vw] tracking-wider'> <span className='border1'>defines</span></h1>
//                 </div>
//                 <div className=' rotateText'>
//                     <h1 className='text-[32vw] text-black font-[anzo3] leading-[29vw] tracking-wider'> what </h1>
//                 </div>
//                 <div className=' rotateText'>
//                     <h1 className='text-[28vw] text-black font-[anzo3] leading-[29vw] tracking-wide '> <span className="border1">development</span></h1>
//                 </div>
//                 <div className=' rotateText'>
//                     <h1 className='text-[23vw] text-black font-[anzo3] leading-[22vw] tracking-wider'> <span className="border1">is </span>  about <span className="border1"> ! </span></h1>
//                 </div>



//             </div>
//         </div>

//     )
// }

// export default Page2



// 'use client'

// import { useEffect } from "react"
// import LocomotiveScroll from "locomotive-scroll"
// import "locomotive-scroll/dist/locomotive-scroll.css"

// export default function RootLayout({ children }) {

//     useEffect(() => {
//         const locoScroll = new LocomotiveScroll({
//             el: document.querySelector("[data-scroll-container]"),
//             smooth: true,
//         })

//         return () => locoScroll.destroy()
//     }, [])

//     return (
//         <html>
//             <body>
//                 <div data-scroll-container>
//                     {children}
//                 </div>
//             </body>
//         </html>
//     )
// }

'use client'
import React from 'react'
import Textflip from "../textflip/page.js";

const Page1 = () => {
    return (
        <>
            <Textflip />
        </>
    )
}

export default Page1