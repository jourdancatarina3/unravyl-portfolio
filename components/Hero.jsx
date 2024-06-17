import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="w-full flex flex-col h-[50rem] items-center justify-start relative">
      <h1 className="text-4xl font-black">UNRAVYL</h1>
      <div className="profileCircle rounded-full flex items-center justify-center">
        <Image
          alt="bgProfile"
          src="/logo.png"
          height={1240}
          width={1240}
          className="size-[5rem]"
        ></Image>
      </div>
      <div className=" flex headers  flex-col mt-[4rem] items-center justify-center text-[7rem] font-black">
        <h1>FREELANCE</h1>
        <h1>WEB</h1>
        <h1>DEVELOPERS</h1>
      </div>
      <div className="w-full absolute top-0 right-0">
        <Image
          src="/bg.png"
          alt="bg"
          height={21240}
          width={21240}
          className="w-full opacity-35 z-10"
        ></Image>
        <div class="backgrounds z-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex opacity-65 items-center justify-center"></div>
      </div>{" "}
      <div className="w-[11rem] py-2 absolute flex items-center text-lg justify-center bottom-[12rem] rounded-xl text-white bg-[#83828A]">
        Avail Services <i class="bx bx-right-arrow-alt text-white text-xl"></i>
      </div>
    </section>
  );
}

export default Hero;
