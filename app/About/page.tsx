import Header from "@/app/About/components/Header"; // Import the Header component
import Section1 from "@/app/About/components/Section1"; // Import the Header component
import Section2 from "@/app/About/components/Section2"; // Import the Header component
import Section3 from "@/app/About/components/Section3"; // Import the Header component

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}