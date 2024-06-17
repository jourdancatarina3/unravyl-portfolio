"use client";
import React, { useState } from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Image from "next/image";
import { stacks } from "../constants";

function TechStack() {
  const [projectHovered, setProjectHovered] = useState(null);
  const handleHover = (index) => {
    setProjectHovered(index);
  };

  const handleMouseLeave = () => {
    setProjectHovered(null);
  };
  return (
    <section className="flex mt-[15rem] items-center justify-center flex-col">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-4xl">
          Over the years, we&apos;ve empowered companies and streamline services
          for the world
        </h1>
        <h2 className="text-2xl text-gray-400">
          Creating websites that make a real impact fit to your needs
        </h2>
      </div>
      <div className="mt-[5rem] grid grid-cols-6 gap-[5rem] w-3/4 md:gap-[8rem] items-center  justify-center">
        {stacks.map((stack, index) => (
          <div key={stack.id} className="relative flex flex-col items-center ">
            <Image
              src={stack.source}
              alt={stack.id}
              key={stack.id}
              width={110}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleMouseLeave}
              height={110}
              className=" object-cover w-[6rem] sm:w-[7rem] md:w-[9rem] lg:w-[10.5rem] xl:w-[11rem] mb-2 hover:scale-110 transition"
            />
            {projectHovered === index && (
              <div className="absolute   -bottom-20 text-2xl duration-500 ">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-center">
                  {stack.name}
                </h1>
                <p className="text-lg text-center">{stack.use}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
