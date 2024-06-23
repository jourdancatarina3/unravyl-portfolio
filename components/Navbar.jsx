"use client";
import React, { useState } from "react";
import Image from "next/image";
import { navLinks } from "../constants";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full text-[#616161] flex justify-between px-10 max-w-[100rem] py-6 items-center navbar">
      <div className="flex  items-center gap-5 justify-center">
        <Link href="https://github.com/unravyl/" target="_blank">
          <i class="bx bxl-github text-[2rem]"></i>
        </Link>
        <Link href="https://www.linkedin.com/company/unravyl/" target="_blank">
          <i class="bx bxl-linkedin-square text-[2rem]"></i>
        </Link>
      </div>
      <ul className="list-none sm:flex  hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal  cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white hover:scale-110`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
