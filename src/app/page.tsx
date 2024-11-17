import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero-section";
export default function Home() {
  return (
    <div className="w-[1922px] h-[5669] bg-[#FFFFFF]">
      <Navbar />
      <br />
      <Hero />
    </div>
  );
}
