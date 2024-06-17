import React from "react";

import { projects } from "../constants";
import Image from "next/image";
import Link from "next/link";

function AboutUs() {
  return (
    <section className="flex items-center relative justify-center flex-col mt-[5rem]">
      <div class="backgrounds z-0 absolute top-[5rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex opacity-65 items-center justify-center"></div>
      <h1 className="text-[5rem] font-black header">Projects</h1>
      <div className="flex items-center gap-5 w-3/4 mt-[5rem] justify-center">
        {projects.map((proj) => (
          <div
            key={proj.name}
            className="bg-[#554E4E] w-1/2 rounded-xl flex items-center flex-col justify-center"
          >
            <div className="image-container   rounded-t-xl flex items-center mt-[0.7rem] justify-center">
              <Image
                src={proj.img}
                alt={proj.name}
                height={1450}
                width={1450}
                className="image w-full h-[30rem] "
              ></Image>
              <Link
                href={proj.link}
                target="_blank"
                className="hover-button font-medium bg-[#83828A]"
              >
                Go to Page
              </Link>
            </div>

            <div className="flex items-center pl-5 py-5 justify-start">
              <Image
                src={proj.logo}
                alt={proj.name}
                height={1450}
                width={1450}
                className="size-[4rem] "
              ></Image>
              <div className="pl-2 flex flex-col items-start  justify-center ">
                <h1 className="text-white text-xl font-bold">{proj.name}</h1>
                <h2 className="max-w-[30rem] text-gray-200">
                  {proj.description}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutUs;
