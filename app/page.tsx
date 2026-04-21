import Header from "@/app/components/Header"; // Import the Header component
import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer"
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}