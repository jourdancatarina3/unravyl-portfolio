import React from "react";

import { services, servicesInfo } from "../constants";
import Image from "next/image";
import Link from "next/link";

function Services() {
  return (
    <section
      id="services"
      className="flex items-center relative justify-center flex-col mt-[5rem]"
    >
      <div class="backgrounds z-0 absolute top-[5rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex opacity-65 items-center justify-center"></div>
      <h1 className="text-[5rem] font-black header">Services</h1>
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center gap-2 mt-[4rem] justify-center">
          {services.map((serv) => (
            <div
              key={serv.id}
              className="box-sizing flex items-center justify-center px-5"
            >
              <i class="bx bx-check text-2xl text-[#B084FF] pr-1"></i>
              {serv.name}
            </div>
          ))}
        </div>
        <div className="flex items-center flex-col justify-center mt-[5rem]">
          <h1 className="text-white font-bold text-2xl">
            Product, Website or Mobile Application, we&apos;ve got you covered!
          </h1>
          <h2 className="text-xl text-gray-400 max-w-[40rem] text-center">
            Let&apos;s elevate your vision and achieve your design goals
            together!
          </h2>
        </div>
        <div className="flex flex-col items-center gap-4 mt-[4rem] justify-center">
          {servicesInfo.map((serv) => (
            <div
              key={serv.id}
              className="flex items-center gap-5 rounded-lg bg-[#3c3939] w-[25rem] h-[7rem] justify-start px-5"
            >
              <div class="container">
                <div class="grid-pattern flex items-center justify-center">
                  <i class={`${serv.img} text-3xl `}></i>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-white font-medium">{serv.name}</h1>
                <h2 className="text-gray-400">{serv.description}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
