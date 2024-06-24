import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import AboutUs from "@/components/AboutUs";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Founder from "@/components/Founder";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <div className="flex justify-center px-3 lg:px-0 overflow-hidden">
      <main className="flex items-center justify-center flex-col w-full">
        <Navbar />
        <Hero />
        <TechStack />
        <AboutUs />
        <Portfolio />
        <Services />
        <Founder />
        <Contacts />
      </main>
    </div>
  );
}