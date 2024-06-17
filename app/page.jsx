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
    <main className="flex items-center justify-center flex-col ">
      <Navbar />
      <Hero />
      <TechStack />
      <AboutUs />
      <Portfolio />
      <Services />
      <Founder />
      <Contacts />
    </main>
  );
}
