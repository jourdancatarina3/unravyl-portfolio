"use client";
import React, { useEffect } from "react";

import { founders } from "../constants";
import Image from "next/image";
import Link from "next/link";

function Founder() {
  useEffect(() => {
    const cards = document.querySelectorAll(".cards");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section
      id="founder"
      className="flex items-center relative justify-center w-full flex-col mt-[5rem] max-w-[100rem]"
    >
      <div className="backgrounds z-0 absolute top-[5rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex opacity-65 items-center justify-center"></div>
      <h1 className="text-6xl lg:text-[5rem] font-black header">FOUNDER</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-[3rem] gap-10 w-full lg:px-[12rem]">
        {founders.map((founder, index) => (
          <div
            key={index}
            className="bg-[#292835] cards rounded-xl lg:h-[40rem] relative flex flex-col items-center"
          >
            <Image
              src="/Union.svg"
              alt="cover"
              height={1340}
              width={1340}
              className="size-[40rem] absolute"
            ></Image>
            <div className="relative w-[7rem] h-[7rem] mt-[4rem] rounded-full overflow-hidden">
              <Image
                src={founder.img}
                alt={`${founder.name} profile`}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h1 className="text-white text-3xl lg:text-4xl font-medium mt-[2rem]">
              {founder.name}
            </h1>
            <h2 className="text-gray-400 text-lg lg:text-xl lg:mt-[0.5rem]">
              {founder.title}
            </h2>
            <p className="mt-4 lg:mt-[3rem] lg:text-lg text-justify max-w-[85%] z-[40]">
              {founder.description}
            </p>
            <div className="pt-4 lg:pt-0" />
            <Link
              href={founder.link}
              target="_blank"
              className="lg:absolute bottom-10 contactButton"
            >
              {" "}
              Visit Profile{" "}
            </Link>
            <div className="pb-4 lg:pb-0" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Founder;
