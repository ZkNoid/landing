import Image from "next/image";
import { BusinessInvestorsCard } from "./components/BusinessInvestorsCard";
import Link from "next/link";
import { ReactNode } from "react";
import { museoSlab } from "./fonts";
import { SubscribeForm } from "./components/SubscribeForm";
import { Button } from "./components/Button";
import { SlidableBlock } from "./components/SlidableBlock";
import {MobileNavbar} from "./components/MobileNavbar";
import {DesktopNavbar} from "./components/DesktopNavbar";
import { SOCIALS } from "./constants/socials";
import {BenefitsForGamersCard} from "./components/BenefitsForGamersCard";

const debug = false;

const LandingSection = (props: { title: string, children: ReactNode }) => {
  return (
    <div className={`w-full relative flex justify-center px-[10px] md:px-[50px] ${debug && 'border'}`}>
      <div className="flex flex-col w-full">
        <div className="font-bold text-4xl lg:text-5xl pt-[100px] lg:pt-[150px] md:pl-[30%] pb-4">
          {props.title}
        </div>
        {props.children}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <DesktopNavbar/>
      <MobileNavbar/>

      <div className={`h-[550px] md:h-[800px] lg:h-[783px] w-full relative flex justify-center ${debug && 'border'}`}>
        <Image src={'/image/chess.svg'} className="hidden lg:block w-full absolute bottom-0 pointer-events-none" width={1618} height={541} alt="Medium"></Image>
        <Image src={'/image/cover-image-mobile.svg'} className="block lg:hidden w-full absolute bottom-0 pointer-events-none" width={1618} height={541} alt="Medium"></Image>
          <div className="font-bold text-3xl sm:text-4xl md:text-8xl pt-[100px] lg:pt-[173px] mx-3 ">
            <div className={`${museoSlab.className} text-6xl lg:text-8xl`}>
              WEB3
            </div>
            <div className={`${museoSlab.className}`}>
              Gaming platform
            </div>
            <div className="text-lg lg:pl-10 pt-2 font-plex-mono font-normal font-mono flex flex-col justify-end md:flex-row">
              Powered by zero knowledge proof technology
              <Link className="cursor-pointer font-rockwell text-xl pt-3 md:pt-0 md:pl-3 flex underline decoration-left-accent underline-offset-[5px] hover:opacity-80 ease-in-out" href="https://docs.zknoid.io">
                Open Docs <Image src={"/image/docs_arrow.svg"} className="ml-1" width={16} height={16} alt="Arrow"></Image>
              </Link>
            </div>
            <div className="w-full flex justify-center pt-6 md:pt-4">
                <Button
                  colorVariant={1}
                  textWhite={true}
                    link={'https://app.zknoid.io'}
                    text={'Go to zkApp'}
                    className="w-[199px] h-[50px] text-2xl"
                />
            </div>
          </div>
      </div>
      <LandingSection title="About ZkNoid">
        <div className="text-xl xl:text-2xl font-mono lg:w-[500px] 2xl:w-[800px] pt-4 xl:pt-10 font-bold md:ml-[30%]">
          ZkNoid - the gaming platform powered by zero knowledge proof technology based on MINA protocol.
        </div>
        <div className="items-center  lg:items-start grid flex-rows-3 lg:grid-cols-3 w-full justify-between pt-16 gap-[20px]">
          <div className="flex items-start">
            <Image src={"image/01.svg"} width={96} height={96} alt="01"></Image>
            <div className="pl-5 pb-5 text-base xl:text-xl font-mono">
              ZkNoid provides the united ecosystem for ZK gaming – developers can use SDK to be a part of the platform.
              L2 rollup based on protokit network enables gasless sessions, fast transactions
            </div>
          </div>
          <div className="flex items-start">
            <Image src={"image/02.svg"} width={96} height={96} alt="02"></Image>
            <div className="pl-5 pb-5 text-base xl:text-xl font-mono">
              While playing all your actions are accumulated inside a zero-knowledge circuit on the client side,
              ensuring verifiability of the game process while your strategy remains confidential.
            </div>
          </div>
          <div className="flex items-start">
            <Image src={"image/03.svg"} width={96} height={96} alt="03"></Image>
            <div className="pl-5 pb-5 text-base xl:text-xl font-mono">
              Host fair competitions within your community and reward your most engaged fans - with no possibility of cheating
            </div>
          </div>
        </div>
      </LandingSection>

      <LandingSection title="Our technologies">
        <SlidableBlock
            slides={[
              {
                name: "ZK Circuit",
                description: "Allows to prove your game process without revealing your strategy.",
                image: "/image/technologies/circuit.svg",
                variant: 0,
                imageW: 350,
                imageH: 450,
                link: "https://zknoid.medium.com/zero-knowledge-proofs-for-gaming-how-it-works-why-do-we-need-them-3d0ee659c850"
              },
              {
                name: "Recursive proofs",
                description: "Used to accumulate your game process proof while you’re playing.",
                image: "/image/technologies/recursive_proofs.svg",
                variant: 1,
                imageW: 339,
                imageH: 400,
                link: "https://zknoid.medium.com/how-protokit-can-revolutionize-on-chain-gaming-how-to-cook-it-to-implement-a-multiplayer-game-955dbb2442ac"
              },
              {
                name: "Mina and protokit networks interplay",
                description: "Combines power of ZK blockchain with fast and gasless transactions enabling multiplayer and background sessions.",
                image: "/image/technologies/networks_interplay.svg",
                variant: 2,
                imageW: 290,
                imageH: 280,
                link: "https://docs.zknoid.io/docs/network_architecture"
              },
            ]}
            type={"technologies"}
            isSlider={true}
            visibleOn={"mobile"}
        />
      </LandingSection>


      <LandingSection title="Benefits for gamers">
        <div className="flex flex-col">
          <div className="text-base lg:text-2xl font-mono font-normal md:w-[400px] lg:w-[500px] 2xl:w-[800px] pt-4 lg:pt-10 md:ml-[30%]">
            Elevate your gaming journey and embrace a future where transparency and integrity define the ultimate gaming experience
          </div>
          <Image src={"image/user_benefits.svg"} width={1500} height={899} alt="01" className="p-5 w-full hidden lg:block"></Image>
            <div className={'flex lg:hidden flex-col gap-4 w-full pt-4'}>
                <BenefitsForGamersCard
                    image={"/image/gamers-camera.svg"}
                    imageSide={"left"}
                    title={"Provable"}
                    text={"Experience true gaming transparency with provable game process correctness"}
                />
                <BenefitsForGamersCard
                    image={"/image/gamers-diamond.svg"}
                    imageSide={"right"}
                    title={"Valuble rewards"}
                    text={"Showcase your skills and results publicly and earn valuable NFT rewards for your achievements"}
                />
                <BenefitsForGamersCard
                    image={"/image/gamers-phone.svg"}
                    imageSide={"left"}
                    title={"No bots, no cheats"}
                    text={"Compete against real, fair players - no bots, no cheaters"}
                />
                <BenefitsForGamersCard
                    image={"/image/gamers-joystick.svg"}
                    imageSide={"right"}
                    title={"Trustworthy environment"}
                    text={"Challenge and compete with your friends in a trustworthy environment"}
                />
            </div>
        </div>
      </LandingSection>

        <LandingSection title="Benefits for Business and investors">
            <div className="flex flex-col">
                <div className="flex justify-around pt-5 flex-col md:flex-row gap-5">
                    <BusinessInvestorsCard
                        variant={0}
                        description="Host fair competitions within your community and reward your most engaged fans - with no possibility of cheating"
                        image="/image/business_investors/cup.svg"
                        link="https://docs.zknoid.io/docs/competitions"
                    />
                    <BusinessInvestorsCard
                        variant={2}
                        description="Buy token that is backed by project revenue. Revenue is collected to a vault and used to buy token from market"
                        image="/image/business_investors/coins.svg"
                        link="https://docs.zknoid.io/docs/tokenomics"
                    />
                </div>
            </div>
        </LandingSection>

      <LandingSection title="Applications">
        <SlidableBlock
            slides={[
                {
                    name: 'Arkanoid',
                    description: 'Old but gold game. Beat all the bricks and protect the ball from falling. Every game tick is reproduced inside ZK circuit and synced',
                    image: '/image/applications/arkanoid.svg',
                    link: 'https://app.zknoid.io/games/arkanoid/competitions-list',
                    variant: 0
                },
                {
                    name: 'Randzu',
                    description: 'A tic tac toe like game. Two players take turns placing pieces on the board attempting to create lines of 5 of their own color. Game state is synced and proved using zkapp transactions',
                    image: '/image/applications/randzu.svg',
                    link: 'https://app.zknoid.io/games/randzu/global',
                    variant: 1
                }
            ]}
            type={'applications'}
            isSlider={true}
            visibleOn={'desktop'}
        />
      </LandingSection>

        <LandingSection title="Backed by">
            <div className={'flex flex-col lg:flex-row gap-4 justify-start items-center'}>
                <div
                    className="text-lg font-mono font-normal w-full lg:w-[450px]">
                    Our esteemed list of backers and investors who are trust the groundbreaking ZkNoid gaming
                </div>
                <div className="grid grid-rows-2 lg:grid-rows-1 grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 w-full lg:p-10 flex-grow">
                    <Image src={'/image/backed_by/mina_foundation.svg'} width={360} height={184}
                           className="lg:w-full" alt="Mina foundation"></Image>
                    <Image src={'/image/backed_by/o1labs.svg'} width={360} height={184}
                           className="lg:w-full" alt="O1js labs"></Image>
                    <Image src={'/image/backed_by/announced_soon.svg'} width={360} height={184}
                           className="lg:w-full" alt="Announced soon"></Image>
                </div>
            </div>
        </LandingSection>

        <LandingSection title="ZkNoid Core Team">
            <SlidableBlock
                slides={[
                    {
                        name: "Asimaranov",
                        position: "Core builder",
                        image: "/image/team/andrey.svg",
                        variant: 0,
                        imageW: 360,
                        imageH: 360,
                        children: (
                            <>
                                <p>Top-1 solidity auditor at <a href="https://strongholdsec.io/leaderboard"
                                                                className="text-left-accent">Mixbytes auditor DAO</a>.
                                </p>
                                <p className={'py-2'}>Core builder of <a href="https://www.xraise.io/"
                                                                         className="text-left-accent">xraise.io</a> project
                                    – account abstraction based wallet.</p>
                    <p>Blockchain and full-stack developer. Studied at MSU, applied math and computer science</p>
                  </>
                )
              },
              {
                name: "Alex",
                position: "Core builder",
                image: "/image/team/alex.svg",
                variant: 1,
                imageW: 360,
                imageH: 360,
                children: (
                    <>
                      <p>Crypto enthusiast since 2020. CS MS in MIPT. Experienced solidity developer with two years experience in DEFI projects.</p>
                    </>
                )
              },
              {
                name: "Shiroy",
                position: "Ui / Ux designer",
                image: "/image/team/shiroy.svg",
                variant: 2,
                imageW: 360,
                imageH: 360,
                children: (
                    <>
                      Ui/Ux & Graphic designer in crypto since 2022 as a member of PowerPool R&D and marketing team{" "}
                      <a href="https://powerpool.finance" className="text-right-accent inline">powerpool.finance</a>
                    </>
                )
              }
            ]}
            type={'team'}
            isSlider={true}
            visibleOn={"mobile"}
        />
      </LandingSection>

      <SubscribeForm/>

      <div className="flex flex-col px-[10px] lg:px-[50px]">
      <div className="flex w-full h-[91px] items-center">
          <div className="flex flex-col lg:flex-row w-full items-center justify-between">
              <div className="font-bold text-2xl md:text-3xl cursor-pointer pb-8 lg:pb-0 flex lg:block flex-row justify-between w-full lg:w-auto">
                  <span className='hover:opacity-80 ease-in-out'>ZkNoid</span>
                  <div className="gap-5 flex lg:hidden">
                    {SOCIALS.map(social => (
                      <Link key={social.name} className="cursor-pointer text-xl flex items-center justify-center"
                            href={social.link} target="_blank" rel="noopener noreferrer">
                          <Image src={social.image} className="cursor-pointer" width={30} height={30}
                                 alt={social.name}></Image>
                      </Link>
                    ))}
                  </div>
              </div>
              <div className="grid lg:flex grid-rows-2 grid-cols-2 text-base gap-2 lg:gap-8 w-full lg:w-auto">
                  {/*<Link className="cursor-pointer text-xl" href={'#'} target="_blank" rel="noopener noreferrer">*/}
                  {/*  About us*/}
                  {/*</Link>*/}
                  <Link className="cursor-pointer text-lg lg:text-xl hover:opacity-80 ease-in-out even:text-right" href={'https://github.com/ZkNoid'} target="_blank"
                        rel="noopener noreferrer">
                      Github
                  </Link>
                  {/*<Link className="cursor-pointer text-xl" href={'#'} target="_blank" rel="noopener noreferrer">*/}
                  {/*  Brand assets*/}
                  {/*</Link>*/}
                  <Link className="cursor-pointer text-lg lg:text-xl hover:opacity-80 ease-in-out even:text-right" href={'https://docs.zknoid.io'} target="_blank"
                        rel="noopener noreferrer">
                      Documentation
                  </Link>
                  <Link className="cursor-pointer text-lg lg:text-xl hover:opacity-80 ease-in-out even:text-right" href={'https://zknoid.medium.com'} target="_blank"
                        rel="noopener noreferrer">
                      Blog
                  </Link>
              </div>
              <Link href={'https://app.zknoid.io'} className='group hidden lg:block'>
              <div className="w-[140px] lg:w-[192px] h-[50px] bg-foreground group-hover:bg-bg-dark group-hover:border group-hover:border-foreground group-hover:text-[#fff] text-bg-dark text-xl lg:text-2xl flex items-center justify-center cursor-pointer">
                Launch app
              </div>
            </Link>
          </div>
        </div>
          <div className="flex justify-between flex-col lg:flex-row py-3">
              <div className="gap-5 hidden lg:flex">
                {SOCIALS.map(social => (
                  <Link key={social.name} className="cursor-pointer text-xl flex items-center justify-center hover:opacity-80 ease-in-out"
                        href={social.link} target="_blank" rel="noopener noreferrer">
                      <Image src={social.image} className="cursor-pointer" width={30} height={30}
                             alt={social.name}></Image>
                  </Link>
                ))}
              </div>
              <div className="text-[#F9F8F4] hidden lg:block">
                  2024 ZkNoid: all rights reserved
              </div>

              <Link href={'https://app.zknoid.io'} className='group py-10 lg:hidden'>
                  <div
                      className="w-full h-[50px] bg-foreground group-hover:bg-bg-dark group-hover:border group-hover:border-foreground group-hover:text-[#fff] text-bg-dark text-xl lg:text-2xl flex items-center justify-center cursor-pointer">
                      Launch app
                  </div>
              </Link>
              <div className="text-[#F9F8F4] text-center text-sm lg:hidden font-light">
                  2024 ZkNoid: all rights reserved
              </div>
          </div>
      </div>
    </main>
  );
}
