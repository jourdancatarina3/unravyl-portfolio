"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { founders } from "../constants";
import Image from "next/image";
import Link from "next/link";

function Founder() {
  useGSAP(() => {
    gsap.to("#founders", {
      scrollTrigger: {
        trigger: "#founders",
        start: "20% bottom",
        toggleActions: "play none none reset",
      },
      stagger: 0.1,
      opacity: 1,
      borderRadius: 15,
      ease: "power2.inOut",
    });

    gsap.to("#founderName", {
      scrollTrigger: {
        trigger: "#founderName",
        start: "20% bottom",
        toggleActions: "play none none reset",
      },
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    gsap.to("#founderDesc", {
      scrollTrigger: {
        trigger: "#founderDesc",
        start: "20% bottom",
        toggleActions: "play none none reset",
      },
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.3,
      ease: "power2.inOut",
    });

    gsap.to("#founderTitle", {
      scrollTrigger: {
        trigger: "#founderTitle",
        start: "20% bottom",
      },
      opacity: 1,
      x: 0,
      delay: 0.2,
      duration: 1,
      ease: "power2.inOut",
    });

    gsap.fromTo(
      "#profileButton",
      { y: -50 },
      {
        scrollTrigger: {
          trigger: "#profileButton",
          start: "20% bottom",
        },
        y: 0,
        stagger: 0.4,
        opacity: 1,
        ease: "power2.inOut",
      }
    );
  }, []);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-[3rem] gap-10 lg:gap-4 w-full px-[1rem] sm:px-[4rem]  lg:px-[4rem]">
        {founders.map((founder, index) => (
          <div
            id="founders"
            key={index}
            className="bg-[#292835] overflow-hidden cards opacity-0 lg:h-[32rem] relative flex flex-col items-center"
          >
            <Image
              src="/Union.svg"
              alt="cover"
              height={1340}
              width={1340}
              className="h-[50rem] bottom-[-10rem] right-0 absolute"
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
            <h1
              id="founderName"
              className="text-white opacity-0 text-2xl lg:text-3xl font-medium mt-[2rem]"
            >
              {founder.name}
            </h1>
            <h2
              id="founderTitle"
              className="text-gray-400 opacity-0 text-md lg:text-lg lg:mt-[0.2rem]"
            >
              {founder.title}
            </h2>
            <p
              id="founderDesc"
              className="mt-4 lg:mt-[3rem] opacity-0 text-sm lg:text-md text-justify max-w-[85%] z-[40]"
            >
              {founder.description}
            </p>
            <div className="pt-4 lg:pt-0" />
            <Link
              id="profileButton"
              href={founder.link}
              target="_blank"
              className="lg:absolute opacity-0 bottom-10 contactButton"
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
