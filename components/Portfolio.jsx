"use client";
import React, { useEffect } from "react";

import { projects } from "../constants";
import Image from "next/image";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiOpenInNew } from "@mdi/js";

function AboutUs() {
  useEffect(() => {
    const cards = document.querySelectorAll(".portfolios");

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
      id="projects"
      className="flex items-center relative justify-center flex-col mt-[5rem]"
    >
      <div class="backgrounds z-0 absolute top-[5rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex opacity-65 items-center justify-center"></div>
      <h1 className="text-6xl lg:text-[5rem] font-black header mb-10">
        PROJECTS
      </h1>
      <div className="flex flex-wrap gap-5 px-3 justify-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-md flex flex-col gap-5 bg-gray-800/50 max-w-[400px] min-w-[350px] p-3 shadow-xl"
          >
            <Link
              href={project.link}
              target="_blank"
              className="relative w-full pb-[100%] rounded-md overflow-hidden"
            >
              <Image
                src={project.img}
                alt={project.name}
                fill
                className="object-cover hover:scale-110 hover:brightness-75 transition duration-300"
              />
              <div className="w-full h-full bg-black/40 cursor-pointer flex justify-center items-center absolute opacity-0 hover:opacity-100 transition duration-300">
                <Icon path={mdiOpenInNew} size={2} />
              </div>
              <div className="relative"></div>
            </Link>
            <h1 className="text-2xl font-bold">{project.name}</h1>
            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutUs;
