import Image from "next/image";
import { TechnologyCard } from "./components/TechnologyCard";
import { BusinessInvestorsCard } from "./components/BusinessInvestorsCard";
import { ApplicationCard, MoreGamesApplicationCard } from "./components/ApplicationCard";
import { TeamMemberCard } from "./components/TeamMemberCard";
import Link from "next/link";
import { ReactNode } from "react";
import { rockswellStdFix } from "./fonts";
import { SubscribeForm } from "./components/SubscribeForm";

const debug = false;

const LandingSection = (props: { title: string, children: ReactNode }) => {
  return (
    <div className={`w-full relative flex justify-center px-[10px] md:px-[50px] ${debug && 'border'}`}>
      <div className="flex flex-col w-full">
        <div className="font-bold text-5xl pt-[150px] md:pl-[30%]">
          {props.title}
        </div>
        {props.children}
      </div>
    </div>
  )
}

const LandingHeader = (props: { children: ReactNode }) => {
  return (
    <div className="flex w-full h-[91px] px-[50px] items-center">
      <div className="flex w-full items-center justify-between">
        {props.children}
      </div>
    </div>
  )
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <LandingHeader>
        <div className="font-bold text-2xl md:text-3xl cursor-pointer">
          ZkNoid
        </div>
        <div className="hidden sm:flex text-base gap-5">
          <Link className="cursor-pointer text-xl" href={'https://docs.zknoid.io'} target="_blank" rel="noopener noreferrer">
            Docs
          </Link>
          <Link className="cursor-pointer text-xl" href={'https://zknoid.medium.com'} target="_blank" rel="noopener noreferrer">
            Blog
          </Link>
        </div>
        <div className="gap-5 hidden md:flex">
          <Link className="cursor-pointer flex items-center justify-center" href={'https://github.com/ZkNoid'} target="_blank" rel="noopener noreferrer">
            <Image src={'/image/socials/github.svg'} className="cursor-pointer" width={30} height={30} alt="Github"></Image>
          </Link>
          {/* <Image src={'/image/socials/twitter.svg'} className="cursor-pointer" width={30} height={30} alt="Twitter"></Image> */}
          {/* <Image src={'/image/socials/telegram.svg'} className="cursor-pointer" width={30} height={30} alt="Telegram"></Image> */}
          <Link className="cursor-pointer flex items-center justify-center" href={'https://zknoid.medium.com/'} target="_blank" rel="noopener noreferrer">
            <Image src={'/image/socials/medium.svg'} className="cursor-pointer " width={30} height={30} alt="Medium"></Image>
          </Link>
        </div>
        <Link href={'https://app.zknoid.io'}>
          <div
            className="w-[140px] lg:w-[172px] h-[40px] bg-foreground text-bg-dark text-xl lg:text-2xl flex items-center justify-center cursor-pointer">
            Launch app
          </div>
        </Link>
      </LandingHeader>

      <div className={`h-[700px] md:h-[783px] w-full relative flex justify-center ${debug && 'border'}`}>
        <Image src={'/image/chess.svg'} className="w-full absolute bottom-0 pointer-events-none" width={1618} height={541} alt="Medium"></Image>
        <div>
          <div className="font-bold text-3xl sm:text-4xl md:text-8xl pt-[173px] mx-3 ">
            <div className={`${rockswellStdFix.className} text-8xl`}>
              Web3
            </div>
            <div className={`${rockswellStdFix.className}`}>
              Gaming platform
            </div>
            <div className="text-base pl-10 font-plex-mono font-normal font-mono flex flex-col md:flex-row">
              Powered by zero knowledge proof technology
              <Link className="cursor-pointer font-rockwell text-xl pt-3 md:pt-0 md:pl-3 flex underline decoration-left-accent underline-offset-[5px]" href="https://docs.zknoid.io">
                Open Docs <Image src={"/image/docs_arrow.svg"} className="ml-1 mb-2" width={16} height={16} alt="Arrow"></Image>
              </Link>
            </div>
            <div className="w-full flex justify-center pt-6 md:pt-4">
              <Link href={'https://app.zknoid.io'}>
                <Image src={'/image/go_to_zkapp_button.svg'} className="cursor-pointer" width={179} height={51} alt="Open ZkApp"></Image>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <LandingSection title="About ZkNoid">
        <div className="text-sm xl:text-xl font-mono lg:w-[500px] pt-10 font-bold md:ml-[30%]">
          ZkNoid - the gaming platform powered by zero knowledge proof technology based on MINA protocol.
        </div>
        <div className="items-center  lg:items-start grid flex-rows-3 lg:grid-cols-3 w-full justify-between pt-16 gap-[20px]">
          <div className="flex items-start">
            <Image src={"image/01.svg"} width={96} height={96} alt="01"></Image>
            <div className="pl-5 pb-5 text-sm xl:text-xl font-mono">
              ZkNoid provides the united ecosystem for ZK gaming – developers can use SDK to be a part of the platform.
              L2 rollup based on protokit network enables gasless sessions, fast transactions
            </div>
          </div>
          <div className="flex items-start">
            <Image src={"image/02.svg"} width={96} height={96} alt="02"></Image>
            <div className="pl-5 pb-5 text-sm xl:text-xl font-mono">
              While playing all your actions are accumulated inside a zero-knowledge circuit on the client side,
              ensuring verifiability of the game process while your strategy remains confidential.
            </div>
          </div>
          <div className="flex items-start">
            <Image src={"image/03.svg"} width={96} height={96} alt="03"></Image>
            <div className="pl-5 pb-5 text-sm xl:text-xl font-mono">
              Host fair competitions within your community and reward your most engaged fans - with no possibility of cheating
            </div>
          </div>
        </div>
      </LandingSection>

      <LandingSection title="Our technologies">
        <div className="flex flex-col">
          <Image src={'/image/our_tech_upper_line.svg'} width={1106} height={142} alt="our_tech_upper" className="p-5 px-24 lg:px-[11vw] w-full hidden lg:block" ></Image>
          <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-10">
            <TechnologyCard
              variant={0}
              exploreButton="/image/technologies/explore_button/explore_left.svg"
              name="ZK Circuit"
              description="Allows to prove your game process without revealing your strategy."
              image="/image/technologies/circuit.svg"
              imageW={300}
              imageH={150}
              link={"#"}
            />
            <TechnologyCard
              name="Recursive proofs"
              exploreButton="/image/technologies/explore_button/explore_middle.svg"
              description="Used to accumulate your game process proof while you’re playing."
              image="/image/technologies/recursive_proofs.svg"
              variant={1}
              imageW={339}
              imageH={335}
              link={"#"}
            />
            <TechnologyCard
              name="Mina and protokit networks interplay"
              exploreButton="/image/technologies/explore_button/explore_right.svg"
              description="Combines power of ZK blockchain with fast and gasless transactions enabling multiplayer and background sessions."
              image="/image/technologies/networks_interplay.svg"
              variant={2}
              imageW={290}
              imageH={280}
              link={"#"}
            />
          </div>
        </div>
      </LandingSection>


      <LandingSection title="Benefits for gamers">
        <div className="flex flex-col">
          <div className="text-base font-mono font-normal md:w-[400px] lg:w-[500px] pt-10 md:ml-[30%]">
            Elevate your gaming journey and embrace a future where transparency and integrity define the ultimate gaming experience
          </div>
          <Image src={"image/user_benefits.svg"} width={1500} height={899} alt="01" className="p-5 w-full"></Image>
        </div>
      </LandingSection>

      <LandingSection title="Benefits for Business and investors">
        <div className="flex flex-col">
          <div className="flex justify-around pt-5 flex-col md:flex-row">
            <BusinessInvestorsCard
              variant={0}
              exploreButton="/image/business_investors/explore_button/explore_left.svg"
              description="Host fair competitions within your community and reward your most engaged fans - with no possibility of cheating"
              image="/image/business_investors/cup.svg"
              link="https://docs.zknoid.io/docs/competitions"
            />
            <BusinessInvestorsCard
              variant={1}
              exploreButton="/image/business_investors/explore_button/explore_right.svg"
              description="Buy token that is backed by project revenue. Revenue is collected to a vault and used to buy token from market"
              image="/image/business_investors/coins.svg"
              link="https://docs.zknoid.io/docs/tokenomics"
            />
          </div>
        </div>
      </LandingSection>
      <LandingSection title="Applications">
        <div className="flex flex-col">
          <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-5 justify-around pt-5 flex-col lg:flex-row auto-cols-[1fr]">
            <ApplicationCard
              name="Arkanoid"
              variant={0}
              exploreButton="/image/applications/play_button/play_left.svg"
              description="Old but gold game. Beat all the bricks and protect the ball from falling. Every game tick is reproduced inside ZK circuit and synced"
              image="/image/applications/arkanoid.svg"
              link="https://app.zknoid.io/games/arkanoid/competitions-list"
            />
            <ApplicationCard
              name="Randzu"
              variant={1}
              exploreButton="/image/applications/play_button/play_right.svg"
              description="A tic tac toe like game. Two players take turns placing pieces on the board attempting to create lines of 5 of their own color. Game state is synced and proved using zkapp transactions"
              image="/image/applications/randzu.svg"
              link="https://app.zknoid.io/games/randzu/global"
            />
            <MoreGamesApplicationCard />
          </div>
        </div>
      </LandingSection>

      <LandingSection title="Backed by">
        <div className="flex flex-row gap-5 flex-wrap p-10">
          <div className="text-base font-mono font-normal w-[400px]">
            Our esteemed list of backers and investors who are trust the groundbreaking ZkNoid gaming
          </div>
          <Image src={'/image/backed_by/mina_foundation.svg'} width={360} height={184} className="w-[300px]" alt="Mina foundation"></Image>
          <Image src={'/image/backed_by/o1labs.svg'} width={360} height={184} className="w-[300px]" alt="O1js labs"></Image>
          <Image src={'/image/backed_by/announced_soon.svg'} width={360} height={184} className="w-[300px]" alt="Announced soon"></Image>
        </div>
      </LandingSection>

      <LandingSection title="ZkNoid Core Team">
        <div className="flex flex-col min-h-[1000px]">
          <Image src={'/image/team_upper_line.svg'} width={1106} height={298} alt="our_tech_upper" className="hidden md:block p-5 px-24 lg:px-[13%] w-full" ></Image>
          <div className="flex flex-col md:flex-row justify-around">
            <TeamMemberCard
              name="Asimaranov"
              position="Core builder"
              image="/image/team/andrey.svg"
              variant={0}
              imageW={360}
              imageH={360}
            >
              <p>
                Top-1 solidity auditor at <a href="https://strongholdsec.io/leaderboard" className="text-left-accent">Mixbytes auditor DAO</a>.
              </p>
              <p className="py-2">
                Core builder of <a href="https://www.xraise.io/" className="text-left-accent">xraise.io</a> project – account abstraction based wallet.
              </p>
              <p>
                Blockchain and full-stack developer. Studied at MSU, applied math and computer science
              </p>
            </TeamMemberCard>
            <TeamMemberCard
              name="Alex"
              position="Core builder"
              image="/image/team/alex.svg"
              variant={1}
              imageW={360}
              imageH={360}
            >
                Crypto enthusiast since 2020. CS MS in MIPT. Experienced solidity developer with two years experience in DEFI projects.
              </TeamMemberCard>
            <TeamMemberCard
              name="Shiroy"
              position="Ui / Ux designer"
              image="/image/team/shiroy.svg"
              variant={2}
              imageW={360}
              imageH={360}
            >
              Ui/Ux & Graphic designer in crypto since 2022 as a member of PowerPool R&D and marketing team{" "}
              <a href="https://powerpool.finance" className="text-right-accent inline">powerpool.finance</a>
            </TeamMemberCard>

          </div>
        </div>
      </LandingSection>

      <SubscribeForm />

      <div className="flex flex-col px-[50px]">
        <div className="flex w-full h-[91px] items-center">
          <div className="flex w-full items-center justify-between">
            <div className="font-bold text-2xl md:text-3xl cursor-pointer">
              ZkNoid
            </div>
            <div className="hidden sm:flex text-base gap-5">
              <Link className="cursor-pointer text-xl" href={'https://github.com/ZkNoid'} target="_blank" rel="noopener noreferrer">
                Github
              </Link>
              <Link className="cursor-pointer text-xl" href={'https://docs.zknoid.io'} target="_blank" rel="noopener noreferrer">
                Documentation
              </Link>
              <Link className="cursor-pointer text-xl" href={'https://zknoid.medium.com'} target="_blank" rel="noopener noreferrer">
                Blog
              </Link>
            </div>
            <div></div>
            <Link href={'https://app.zknoid.io'}>
              <div className="w-[140px] lg:w-[172px] h-[40px] bg-foreground text-bg-dark text-xl lg:text-2xl flex items-center justify-center cursor-pointer">
                Launch app
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-between py-3">
          <div className="gap-5 hidden md:flex ">
            <Link className="cursor-pointer text-xl flex items-center justify-center" href={'https://github.com/ZkNoid'} target="_blank" rel="noopener noreferrer">
              <Image src={'/image/socials/github.svg'} className="cursor-pointer" width={30} height={30} alt="Github"></Image>
            </Link>
            {/* <Image src={'/image/socials/twitter.svg'} className="cursor-pointer" width={30} height={30} alt="Twitter"></Image> */}
            {/* <Image src={'/image/socials/telegram.svg'} className="cursor-pointer" width={30} height={30} alt="Telegram"></Image> */}
            <Link className="cursor-pointer text-xl flex items-center justify-center" href={'https://zknoid.medium.com/'} target="_blank" rel="noopener noreferrer">
              <Image src={'/image/socials/medium.svg'} className="cursor-pointer" width={30} height={30} alt="Medium"></Image>
            </Link>
          </div>
          <div className="text-[#F9F8F4]">
            2024 ZkNoid: all rights reserved
          </div>
        </div>
      </div>
    </main>
  );
}
