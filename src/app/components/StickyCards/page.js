'use client'
import "./page.css";
import React from 'react';
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'
import { Foldit } from 'next/font/google';

const foldit = Foldit({
    weight: ['400', '700'],
    subsets: ['latin']
});


gsap.registerPlugin(ScrollTrigger);

const StickyCards = () => {

    const cards = [
        {
            index: "01",
            type: "Service",
            title: "Web Development",
            image: "/sticky-cards/card_1.jpg",
            description: "Modern and responsive websites built using React, Next.js, and JavaScript."
        },
        {
            index: "02",
            type: "Service",
            title: "WordPress Development",
            image: "/sticky-cards/card_2.jpg",
            description: "Custom WordPress websites, themes, and plugins tailored for your business."
        },
        {
            index: "03",
            type: "Service",
            title: "Canva Designs",
            image: "/sticky-cards/card_3.jpg",
            description: "Creative social media posts, banners, and branding designs using Canva."
        },
        {
            index: "04",
            type: "Service",
            title: "E-commerce Development",
            image: "/sticky-cards/card_4.jpg",
            description: "Fully functional online stores with payment integration and modern UI."
        },
        {
            index: "05",
            comment: 'Work With Precision',
            title: "UI/UX Design",
            image: "/sticky-cards/card_5.jpg",
            description: "User-friendly and visually appealing interface designs for web and mobile."
        }
    ];

    const container = useRef(null);


    useGSAP(() => {
        const stickyCards = document.querySelectorAll(".sticky-card")
        stickyCards.forEach((card, index) => {
            if (index < stickyCards.length - 1) {
                ScrollTrigger.create({
                    trigger: card,
                    start: 'top top',
                    endTrigger: stickyCards[stickyCards.length - 1],
                    end: 'top top',
                    pin: true,
                    pinSpacing: false,
                    markers: true
                })

            };

            if (index < stickyCards.length - 1) {
                ScrollTrigger.create({
                    trigger: stickyCards[index + 1],
                    start: 'top bottom',
                    end: 'top top',
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const scale = 1 - progress * 0.25;
                        const rotation = (index % 2 === 0 ? 5 : -5) * progress;
                        const afterOpacity = progress;

                        gsap.set(stickyCards[index], {
                            scale: scale,
                            rotation: rotation,
                            '--after-opacity': afterOpacity,
                        })

                    }
                })
            }

        })
    }, { scope: container });


    return (
        <div className="flex items-center justify-center">
            <div className="sticky-cards  w-[97vw] " ref={container}>
                {cards.map((card, index) => (
                    <div className="sticky-card  bg-sky-950" key={index}>
                        <div className="sticky-card-index  text-white text-[8vw] lg:text-[6vw] leading-39 h-[4vh]" >
                            <p >{card.type}</p>
                            <h1 className={`${foldit.className}`}>{card.index}</h1>
                            <p className="text-[7.5vw]">
                                {card.comment}
                            </p>
                        </div>
                        <div className="sticky-card-content">
                            <div className="sticky-card-content-wrapper">
                                <h1 className="sticky-card-header text-white lg:text-[2vw] text-[3vw]">{card.title}</h1>
                                <div className="sticky-card-img">
                                    <img src={card.image} alt="" />
                                </div>
                                <div className="sticky-card-copy">
                                    <div className="sticky-card-copy-title  text-white lg:text-[1.2vw] text-[4vw]">
                                        <p >(About The State)</p>
                                    </div>
                                    <div className="sticky-card-copy-description  text-white lg:text-[1vw] text-[3vw]">
                                        <p>{card.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div >
        </div>
    );
};

export default StickyCards;