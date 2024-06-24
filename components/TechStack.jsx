"use client";
import React, { useState } from "react";
import {gsap} from "gsap";
import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '@/utils/animations';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { stacks } from "../constants";

gsap.registerPlugin(ScrollTrigger);

function TechStack() {
  const [projectHovered, setProjectHovered] = useState(null);

  useGSAP(()=> {
    animateWithGsap(
      '#stack',
      {y:0, opacity: 1,ease: 'power2.inOut' ,stagger:0.1}
    )
  },[])

  
  const handleHover = (index) => {
    setProjectHovered(index);
  };

  const handleMouseLeave = () => {
    setProjectHovered(null);
  };
  return (
    <section className="flex items-center justify-center flex-col">
      <div className="flex flex-col items-center justify-center gap-5 px-8">
        <h1 className="text-2xl font-bold lg:text-4xl text-center">
          Over the years, we&apos;ve empowered companies and streamline services
          for the world
        </h1>
        <h2 className="lg:text-2xl text-gray-400 text-center">
          Creating websites that make a real impact fit to your needs
        </h2>
      </div>
      <div className="mt-[5rem] grid grid-cols-4 lg:grid-cols-6 gap-[3rem] w-[100%] px-4 lg:px-0 lg:w-[60%] md:gap-[5rem] items-center justify-center">
        {stacks.map((stack, index) => (
          <div key={stack.id} id="stack" className="relative opacity-0 flex flex-col items-center ">
            <Image
              src={stack.source}
              alt={stack.id}
              key={stack.id}
              width={110}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleMouseLeave}
              height={110}
              className=" object-cover z-[-10] w-[6rem] sm:w-[7rem] md:w-[9rem] lg:w-[10.5rem] xl:w-[11rem] mb-2 hover:scale-110 transition"
            />
            {projectHovered === index && (
              <div className="block z-[100] sm:bg-transparent bg-[#6d28d9] px-1 py-1 rounded-md  -bottom-20 text-2xl duration-500 ">
                <h1 className="text-sm sm:text-xl lg:text-2xl font-bold text-center">
                  {stack.name}
                </h1>
                <p className="text-sm text-center">{stack.use}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
