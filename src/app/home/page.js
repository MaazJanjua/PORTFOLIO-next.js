import React, { useRef, useState } from 'react'


import TiltText from '../components/homePages/titleText.js'
import HomeIcons from '../components/homePages/HomeIcons.js'
import SideTilt from '../components/homePages/SideTilt.js'
const Page1 = () => {

  return (
    <div className='' data-scroll-container >
      <div
        data-scroll data-scroll-container data-scroll-speed="1"
        id="page1-in"
        className="h-[91vh]  lg:w-full lg:h-screen static  p-4 bg-gray-950"
      >
        <div className="pl-9 pt-7 h-full shadow-2xl shadow-gray-900 bg-cover rounded-[37px] bg-gray-900 w-full
        {* bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1863,h_831,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)]*}
         ">

        
          {/* <img className=" relative bottom-0 text-4xl h-44 mb-6" src={HeaderImg} alt="logo" /> */}

   
          <TiltText />

          
          <HomeIcons />
          <SideTilt />
        
        </div>
      </div>
    </div>
  )
}

export default Page1


// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       home
//     </div>
//   )
// }

// export default page
