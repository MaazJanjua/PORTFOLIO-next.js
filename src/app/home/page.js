import { div } from 'framer-motion/client'
import React, { useRef, useState } from 'react'

// import HeaderImg from "../assets/Images/Header-logo(3).png";
// import PageBottomText from '../Components/PageBottomText';
// import HomeIcons from '../Components/HomeIcon';
// import InfiniteRotate from '../Components/InfiniteRotate';
import TiltText from '../components/homePages/titleText.js'
import HomeIcons from '../components/homePages/HomeIcons.js'
import SideTilt from '../components/homePages/SideTilt.js'
const Page1 = () => {

  return (
    <div className='' data-scroll-container >
      <div
        data-scroll data-scroll-container data-scroll-speed="11"
        id="page1-in"
        className="h-[91vh]  lg:w-full lg:h-screen absolute p-4 bg-gray-950"
      >
        <div className="pl-9 pt-7 h-full shadow-2xl shadow-gray-900 bg-cover rounded-[37px] bg-gray-900 w-full
        {* bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1863,h_831,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)]*}
         ">

          {/* Logo */}
          {/* <img className=" relative bottom-0 text-4xl h-44 mb-6" src={HeaderImg} alt="logo" /> */}

          {/* TILT TEXT  */}
          <TiltText />

          {/* Bottom Fixed Components */}
          {/* <PageBottomText /> */}
                 <HomeIcons /> 
                 <SideTilt />
                {/* <InfiniteRotate /> */} 
        </div>
      </div>
    </div>
  )
}

export default Page1

