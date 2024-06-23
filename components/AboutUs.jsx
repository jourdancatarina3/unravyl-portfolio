'use client'
import React from "react";
import Link from "next/link";
import {gsap} from "gsap";
import { animateWithGsap } from '@/utils/animations';
import { useGSAP } from '@gsap/react';

import ProfileSlider from "@/components/ProfileSlider";

function AboutUs() {
  useGSAP(()=> {
    animateWithGsap('.gText', {
      opacity: 1,
      y: 5,
      duration: 1,
      ease: 'power2.inOut'
    })
  },[])


  return (
    <section
      id="aboutUs"
      className="flex items-center relative justify-center flex-col mt-[10rem]"
    >
      <div className="backgrounds z-0 absolute top-[5rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex opacity-65 items-center justify-center"></div>
      <h1 id="aboutHeader" className="text-6xl lg:text-[5rem] font-black header">ABOUT US</h1>
      <div className="w-full flex items-center flex-col gap-3 px-5 lg:flex-row justify-center mt-[-2rem]">
        <div className="flex items-center opacity-0 gText flex-col px-4 lg:px-0 gap-5 lg:gap-10 mt-[5rem] justify-center">
          <h1 className="text-white font-bold text-xl text-center lg:text-2xl">
            From Saas to Website & Mobile Application
          </h1>
          <p className="lg:text-xl text-gray-400  max-w-[40rem]  text-center">
            At Innovus, we specialize in developing cutting-edge software
            applications for websites and mobile platforms. Our expert team
            delivers bespoke, user-friendly solutions that enhance online
            presence and drive business growth, ensuring each project exceeds
            expectations through precision and innovation.
          </p>
          <Link
            href="#founder"
            className="flex items-center gap-1 select-none cursor-pointer rounded-md border border-purple-400 px-5 py-3 bg-gradient-to-r from-violet-700 to-purple-500 text-white drop-shadow-lg text-xl hover:from-violet-600 hover:to-purple-400 hover:border-purple-300 transition-colors transition-border duration-300"
          >
            Know More <i className="bx bx-right-arrow-alt text-white text-xl"></i>
          </Link>
        </div>
        <div className="w-[100%] lg:w-[60%] h-[40rem]">
          <ProfileSlider />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
