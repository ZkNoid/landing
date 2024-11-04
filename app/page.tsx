import TitleSection from "@/sections/TitleSection";
import About from "@/sections/About";
import Benefits from "@/sections/Benefits";

export default function Home() {
  return (
    <div className={"flex flex-col"}>
      <TitleSection />
      <About />
      <Benefits />
    </div>
  );
}
