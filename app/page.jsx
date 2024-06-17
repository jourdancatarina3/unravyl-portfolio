import Image from "next/image";
import ProfileSlider from "@/components/ProfileSlider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col ">
      <Navbar />
      <Hero />
      <TechStack />
      <AboutUs />
      <div className="w-full h-[60rem]">
        <ProfileSlider />
      </div>
      <div className="h-[50rem] flex items-center">
        <p>hi</p>
      </div>
    </main>
  );
}
