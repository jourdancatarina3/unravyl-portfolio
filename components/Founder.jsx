import React from "react";

import { founders } from "../constants";
import Image from "next/image";
import Link from "next/link";
import { div } from "three/examples/jsm/nodes/Nodes.js";

function Founder() {
  return (
    <section className="flex items-center relative justify-center w-full flex-col mt-[5rem]">
      <div class="backgrounds z-0 absolute top-[5rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex opacity-65 items-center justify-center"></div>
      <h1 className="text-[5rem] font-black header">Founder</h1>
      <div className="grid grid-cols-2 mt-[3rem] gap-10 w-full px-[12rem]">
        {founders.map((founder, index) => (
          <div
            key={index}
            className="bg-[#292835] rounded-xl h-[40rem] relative flex flex-col items-center "
          >
            <Image
              src="/Union.svg"
              alt="cover"
              height={1340}
              width={1340}
              className="size-[40rem] absolute"
            ></Image>
            <Image
              src={founder.img}
              alt="cover"
              height={1340}
              width={1340}
              className="size-[7rem] rounded-full mt-[4rem]"
            ></Image>
            <h1 className="text-white text-4xl font-medium mt-[2rem]">
              {founder.name}
            </h1>
            <h2 className="text-gray-400 text-xl mt-[0.5rem]">
              {founder.title}
            </h2>
            <p className="mt-[3rem]">{founder.description}</p>
            <div className="absolute bottom-10 contactButton ">
              {" "}
              Visit Profile{" "}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Founder;
