'use client'
import React, { useEffect } from 'react'
import Intro from "./components/intro/page.js";
import Home from './home/page.js'

const page = () => {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, []);

  return (
    <main className=''>
      <Intro />
      <Home />
    </main>
  )
}

export default page
