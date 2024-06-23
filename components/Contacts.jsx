import React from "react";
import { projects } from "../constants";
import Image from "next/image";
import Link from "next/link";

function Contacts() {
  return (
    <section
      id="contacts"
      className="flex items-center relative justify-center flex-col mt-[5rem]"
    >
      <div class="backgrounds z-0 absolute top-[5rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex opacity-65 items-center justify-center"></div>
      <h1 className="text-6xl lg:text-[5rem] font-black header mb-[5rem]">CONTACTS</h1>
      <div class="containerGlow relative">
        <i class="bx bx-network-chart text-[#7b2ff7] text-[20rem] absolute top-[-7.5rem] lg:top-[-8rem] right-[-10rem] lg:right-[-8rem] z-[20]"></i>
        <div class="glow"></div>
        <div class="inner-container">
          <div className="flex items-center gap-5 justify-start">
            <div class="circle-container">
              <Image
                src="/logo.png"
                alt="Logo"
                height={2490}
                width={2404}
                class="logo size-[4rem]"
              ></Image>
            </div>
            <div class="status-badge">
              <div class="dot"></div>
              <div className="text-sm">Available for work</div>
            </div>
          </div>
          <div className="flex gap-4 items-center mt-7 justify-start flex-col lg:flex-row mb-[2rem]">
            <div className="flex pt-[1rem] items-start lg:w-[55%] justify-center flex-col">
              {" "}
              <p className="text-white font-bold mb-4">
                Drop us a line or say on social networks
              </p>
              <p className="text-justify text-gray-400">
                Whether you&apos;re a technology corporate in need of support or an
                early-stage company looking to level up your design and building
                software application, we&apos;d love to talk about your project
              </p>
            </div>
            <div className="flex h-full lg:mt-[-2rem] items-center lg:items-start justify-start gap-4 flex-col">
              <div className="flex items-center gap-3 justify-start">
                <Link href="https://github.com/unravyl/" target="_blank">
                  <i class="bx bxl-github text-[2rem]"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/unravyl/"
                  target="_blank"
                >
                  <i class="bx bxl-linkedin-square text-[2rem]"></i>
                </Link>
              </div>
              <Link
                href="https://www.linkedin.com/company/unravyl"
                target="_blank"
                class="contactButton"
              >
                Let&apos;s create magic together
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="profileCircle mt-[4rem] rounded-full flex items-center justify-center">
        <Image
          alt="bgProfile"
          src="/logo.png"
          height={1240}
          width={1240}
          className="size-[5rem]"
        ></Image>
      </div>
      <h1 className="text-gray-400 my-[2rem] text-center">©UNRAVYL 2024</h1>
    </section>
  );
}

export default Contacts;
