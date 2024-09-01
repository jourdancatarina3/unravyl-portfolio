"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Hero() {
  useGSAP(() => {
    gsap.to("#unravyl", {
      opacity: 1,
      delay: 0.2,
      duration: 2,
      ease: "power3.out",
    });
    gsap.to("#serviceBtn", {
      opacity: 1,
      y: -50,
      delay: 0.3,
      duration: 2,
      ease: "power3.out",
    });
    gsap.fromTo(
      "#bg-logo",
      { opacity: 0, x: -1000 },
      { opacity: 1, x: 0, delay: 0.4, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      ".letter",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.05, duration: 0.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="h-lvh w-screen flex justify-center items-center">
      <section className="w-full flex flex-col gap-10 h-[35rem] lg:h-[50rem] items-center justify-start relative">
        <h1 id="unravyl" className="text-4xl opacity-0 font-black">
          UNRAVYL
        </h1>
        <div
          id="bg-logo"
          className="profileCircle opacity-0 lg:z-0 z-20 rounded-full flex items-center justify-center drop-shadow-lg"
        >
          <div className="absolute inset-0 rounded-full border-x-2 border-[#621abe] rotate-infinite"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              alt="bgProfile"
              src="/logo.svg"
              height={1240}
              width={1240}
              className="size-[5rem] pointer-events-none"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mb-[3rem]">
          <h1 className="font-black text-5xl lg:text-8xl text-center">
            {["F", "R", "E", "E", "L", "A", "N", "C", "E"].map(
              (letter, index) => (
                <span key={`letter-${index}`} className="letter  opacity-0">
                  {letter}
                </span>
              )
            )}
            <br />
            {["W", "E", "B"].map((letter, index) => (
              <span key={`letter-${index + 9}`} className="letter  opacity-0">
                {letter}
              </span>
            ))}
            <br />
            {["D", "E", "V", "E", "L", "O", "P", "E", "R", "S"].map(
              (letter, index) => (
                <span
                  key={`letter-${index + 12}`}
                  className="letter  opacity-0"
                >
                  {letter}
                </span>
              )
            )}
          </h1>
          <div className="backgrounds md:hidden z-0 absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex opacity-50 items-center justify-center"></div>
        </div>
        <div className="hidden md:block h-[100vh] w-full absolute top-0 right-0">
          <div className="backgrounds z-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex opacity-65 items-center justify-center"></div>
        </div>{" "}
        <Link
          id="serviceBtn"
          href="https://www.linkedin.com/company/unravyl"
          target="_blank"
          className="text-xl select-none cursor-pointer rounded-md border border-purple-400 px-5 opacity-0 py-3 bg-gradient-to-r from-violet-700 to-purple-500 text-white drop-shadow-lg text-md hover:from-violet-600 hover:to-purple-400 hover:border-purple-300 transition-colors transition-border duration-300"
        >
          Avail Services
        </Link>
      </section>
    </div>
  );
}

export default Hero;
