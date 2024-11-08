import TitleSection from "@/sections/TitleSection";
import About from "@/sections/About";
import Benefits from "@/sections/Benefits";
import Technologies from "@/sections/Technologies";
import Games from "@/sections/Games";
import ForDevelopers from "@/sections/ForDevelopers";
import Backers from "@/sections/Backers";

export default function Home() {
  return (
    <div className={"flex flex-col"}>
      <TitleSection />
      <About />
      <Benefits />
      <Games />
      <Technologies />
      <ForDevelopers />
      <Backers />
    </div>
  );
}
