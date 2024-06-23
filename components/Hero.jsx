import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="h-lvh w-screen flex justify-center items-center">
      <section className="w-full flex flex-col gap-10 h-[35rem] lg:h-[50rem] items-center justify-start relative">
        <h1 className="text-4xl font-black">UNRAVYL</h1>
        <div className="profileCircle lg:z-0 z-20 rounded-full flex items-center justify-center drop-shadow-lg">
          <Image
            alt="bgProfile"
            src="/logo.png"
            height={1240}
            width={1240}
            className="size-[5rem]"
          ></Image>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-black text-5xl lg:text-8xl text-center">
            FREELANCE <br /> WEB <br /> DEVELOPERS{" "}
          </h1>
          <div className="backgrounds md:hidden z-0 absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex opacity-50 items-center justify-center"></div>
        </div>
        <div className="hidden md:block w-full absolute top-0 right-0">
          <Image
            src="/bg.png"
            alt="bg"
            height={21240}
            width={21240}
            className="w-full opacity-20 z-10 no-drag"
          ></Image>
          <div className="backgrounds z-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex opacity-65 items-center justify-center"></div>
        </div>{" "}
        <Link
          href="https://www.linkedin.com/company/unravyl"
          target="_blank"
          className="select-none cursor-pointer rounded-md border border-purple-400 px-5 py-3 bg-gradient-to-r from-violet-700 to-purple-500 text-white drop-shadow-lg text-xl hover:from-violet-600 hover:to-purple-400 hover:border-purple-300 transition-colors transition-border duration-300"
        >
          Avail Services
        </Link>
      </section>
    </div>
  );
}

export default Hero;
