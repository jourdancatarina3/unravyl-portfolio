"use client";
import React from "react";

import { services, servicesInfo } from "../constants";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

function Services() {
  useGSAP(() => {
    gsap.to("#headingServices", {
      scrollTrigger: {
        trigger: "#headingServices",
        start: "center center",
      },
      stagger: 0.15,
      opacity: 1,
      y: 20,
      borderRadius: 30,
    });

    gsap.fromTo(
      "#subServices",
      {
        opacity: 0,
        x: 100,
        borderRadius: 30,
      },
      {
        scrollTrigger: {
          trigger: "#subServices",
          start: "center center",
        },
        stagger: 0.15,
        opacity: 1,
        x: 0,
        ease: "power2.inOut",
        duration: 1,
      }
    );
  }, []);
  return (
    <section
      id="services"
      className="flex items-center relative justify-center flex-col mt-[5rem]"
    >
      <div className="backgrounds z-0 absolute top-[5rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex opacity-65 items-center justify-center"></div>
      <h1 className="text-6xl lg:text-[5rem] font-black header">SERVICES</h1>
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center flex-wrap gap-2 mt-[4rem] justify-center">
          {services.map((serv) => (
            <div
              id="headingServices"
              key={serv.id}
              className="box-sizing flex items-center justify-center px-5"
            >
              <i className="bx bx-check text-xl lg:text-2xl text-[#B084FF] pr-1"></i>
              {serv.name}
            </div>
          ))}
        </div>
        <div className="flex items-center flex-col justify-center mt-[5rem] px-4 lg:px-0">
          <h1 className="text-white font-bold text-xl text-center lg:text-2xl">
            Product, Website or Mobile Application, we&apos;ve got you covered!
          </h1>
          <h2 className="lg:text-xl text-gray-400 max-w-[40rem] text-center">
            Let&apos;s elevate your vision and achieve your design goals
            together!
          </h2>
        </div>
        <div className="flex flex-col items-center gap-4 mt-[4rem] justify-center">
          {servicesInfo.map((serv) => (
            <div
              id="subServices"
              key={serv.id}
              className="flex items-center gap-5 rounded-lg bg-[#3c3939] w-full lg:w-[25rem] h-[7rem] justify-start px-5"
            >
              <div className="container">
                <div className="grid-pattern flex items-center justify-center">
                  <i className={`${serv.img} text-3xl `}></i>
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
