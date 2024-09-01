"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { navLinks } from "../constants";
import Link from "next/link";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("navbar-header");
      if (header) {
        const headerHeight = header.offsetHeight;
        const currentScrollY = window.scrollY;

        if (currentScrollY < lastScrollY && currentScrollY > headerHeight) {
          setIsSticky(true);
        } else if (
          currentScrollY > lastScrollY ||
          currentScrollY <= headerHeight
        ) {
          setIsSticky(false);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav
        id="navbar-header"
        className={` ${
          isSticky && " bg-[#1c1c1c] glowingEffect fixed"
        } top-0 left-0 w-full text-[#616161] flex justify-between px-5 lg:px-20 py-6 items-center navbar z-50`}
      >
        <div className="flex items-center gap-5 justify-center">
          <Link href="https://github.com/unravyl/" target="_blank">
            <i className="bx bxl-github text-[2rem]"></i>
          </Link>
          <Link
            href="https://www.linkedin.com/company/unravyl/"
            target="_blank"
          >
            <i className="bx bxl-linkedin-square text-[2rem]"></i>
          </Link>
        </div>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal  cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } text-white hover:scale-110 hover:text-[#621abe] transition-all`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
