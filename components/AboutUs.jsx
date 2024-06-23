import React from "react";

import ProfileSlider from "@/components/ProfileSlider";

function AboutUs() {
  return (
    <section
      id="aboutUs"
      className="flex items-center relative justify-center flex-col mt-[10rem]"
    >
      <div class="backgrounds z-0 absolute top-[5rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex opacity-65 items-center justify-center"></div>
      <h1 className="text-[5rem] font-black header">ABOUT US</h1>
      <div className="w-full flex items-center flex-col lg:flex-row justify-center mt-[-2rem]">
        <div className="flex items-center flex-col pl-[10rem] gap-10 mt-[5rem] justify-center">
          <h1 className="text-white font-bold text-2xl">
            From Saas to Website & Mobile Application
          </h1>
          <p className="text-xl text-gray-400 max-w-[40rem] text-center">
            At Innovus, we specialize in developing cutting-edge software
            applications for websites and mobile platforms. Our expert team
            delivers bespoke, user-friendly solutions that enhance online
            presence and drive business growth, ensuring each project exceeds
            expectations through precision and innovation.
          </p>
          <a
            href="#founder"
            className="w-[11rem] py-3 flex items-center text-xl justify-center rounded-xl text-white bg-[#83828A]"
          >
            Know More <i class="bx bx-right-arrow-alt text-white text-xl"></i>
          </a>
        </div>
        <div className=" w-[60%] h-[40rem]">
          <ProfileSlider />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
