import TitleSection from "@/sections/TitleSection";
import About from "@/sections/About";
import Benefits from "@/sections/Benefits";
import Technologies from "@/sections/Technologies";
import Games from "@/sections/Games";
import ForDevelopers from "@/sections/ForDevelopers";
import Backers from "@/sections/Backers";
import Team from "@/sections/Team";
import Community from "@/sections/Community";
import Roadmap from "@/sections/Roadmap";
import Blog from "@/sections/Blog";

export default function Home() {
  return (
    <div className={"flex flex-col mt-[14.118vw] lg:!mt-[5.99vw]"}>
      <TitleSection />
      <About />
      <Benefits />
      <Games />
      <Technologies />
      <ForDevelopers />
      <Backers />
      <Team />
      <Community />
      <Roadmap />
      <Blog />
    </div>
  );
}
