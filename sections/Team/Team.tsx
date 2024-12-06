"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ReactNode, useCallback, useEffect, useState } from "react";
import alexImg from "@/public/image/team/alex.svg";
import andreyImg from "@/public/image/team/andrey.svg";
import fosImg from "@/public/image/team/fos.svg";
import mizoriImg from "@/public/image/team/mizori.svg";
import neoImg from "@/public/image/team/neo.svg";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

const TwitterIcon = () => {
  return (
    <svg
      width="37"
      height="30"
      viewBox="0 0 37 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"w-[8.235vw] lg:!w-[1.927vw]"}
    >
      <g opacity="0.6">
        <path
          d="M20.795 13.533L27.68 5H24.607L19.352 11.517L14.69 5H8L15.806 15.91L8.47 25H11.544L17.249 17.93L22.31 25H29L20.795 13.533ZM18.415 16.483L16.97 14.464L11.36 6.627H13.67L18.198 12.944L19.641 14.964L25.659 23.373H23.349L18.415 16.483Z"
          fill="#FFFCF5"
        />
        <path d="M29 1H36V29H29" stroke="#FFFCF5" strokeWidth="2" />
        <path d="M8 1H1V29H8" stroke="#FFFCF5" strokeWidth="2" />
      </g>
    </svg>
  );
};

const DiscordIcon = () => {
  return (
    <svg
      width="37"
      height="30"
      viewBox="0 0 37 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"w-[8.235vw] lg:!w-[1.927vw]"}
    >
      <g opacity="0.6">
        <path d="M29 1H36V29H29" stroke="#FFFCF5" strokeWidth="2" />
        <path
          d="M27.8454 6.74523C26.1354 5.93169 24.2839 5.34122 22.3553 5.00006C22.3383 4.99951 22.3215 5.00275 22.306 5.00955C22.2904 5.01635 22.2765 5.02655 22.2653 5.03943C22.0338 5.47244 21.7638 6.03666 21.5838 6.46968C19.5382 6.15476 17.4578 6.15476 15.4122 6.46968C15.2322 6.02354 14.9622 5.47244 14.7179 5.03943C14.705 5.01318 14.6665 5.00006 14.6279 5.00006C12.6993 5.34122 10.8607 5.93169 9.13775 6.74523C9.1249 6.74523 9.11204 6.75835 9.09918 6.77147C5.60194 12.1119 4.63763 17.3081 5.11336 22.4517C5.11336 22.478 5.12621 22.5042 5.15193 22.5174C7.46628 24.2494 9.69063 25.2991 11.8893 25.9946C11.9278 26.0077 11.9664 25.9946 11.9793 25.9683C12.4936 25.2466 12.9564 24.4856 13.355 23.6852C13.3807 23.6327 13.355 23.5802 13.3036 23.5671C12.5707 23.2784 11.8764 22.9372 11.195 22.5436C11.1435 22.5174 11.1435 22.4386 11.1821 22.3993C11.3235 22.2943 11.465 22.1762 11.6064 22.0712C11.6321 22.045 11.6707 22.045 11.6964 22.0581C16.1194 24.1182 20.8895 24.1182 25.2611 22.0581C25.2868 22.045 25.3253 22.045 25.3511 22.0712C25.4925 22.1893 25.6339 22.2943 25.7754 22.4124C25.8268 22.4517 25.8268 22.5305 25.7625 22.5567C25.0939 22.9635 24.3867 23.2915 23.6539 23.5802C23.6024 23.5933 23.5896 23.6589 23.6024 23.6983C24.0139 24.4987 24.4767 25.2598 24.9782 25.9814C25.0168 25.9946 25.0553 26.0077 25.0939 25.9946C27.3054 25.2991 29.5297 24.2494 31.8441 22.5174C31.8698 22.5042 31.8827 22.478 31.8827 22.4517C32.4484 16.5077 30.9441 11.3509 27.8968 6.77147C27.884 6.75835 27.8711 6.74523 27.8454 6.74523ZM14.0236 19.3157C12.6993 19.3157 11.5935 18.0691 11.5935 16.5339C11.5935 14.9987 12.6736 13.7521 14.0236 13.7521C15.3865 13.7521 16.4665 15.0118 16.4537 16.5339C16.4537 18.0691 15.3736 19.3157 14.0236 19.3157ZM22.9853 19.3157C21.661 19.3157 20.5552 18.0691 20.5552 16.5339C20.5552 14.9987 21.6352 13.7521 22.9853 13.7521C24.3482 13.7521 25.4282 15.0118 25.4153 16.5339C25.4153 18.0691 24.3482 19.3157 22.9853 19.3157Z"
          fill="#FFFCF5"
        />
        <path d="M8 1H1V29H8" stroke="#FFFCF5" strokeWidth="2" />
      </g>
    </svg>
  );
};

const TeamCard = ({
  type,
  image,
  fullName,
  title,
  description,
  socials,
  isOpen,
  setIsOpen,
}: {
  type: "sm" | "md" | "lg" | "mobile";
  image: any;
  fullName: string;
  title: string;
  description: string;
  socials: { icon: ReactNode; link: string }[];
  isOpen: boolean;
  setIsOpen: () => void;
}) => {
  return (
    <AnimatePresence initial={false}>
      <motion.div
        className={
          "flex-[0_0_85%] ml-[2.353vw] first:ml-0 lg:!ml-0 min-w-0 lg:!flex-none p-[2.353vw] lg:!p-[0.521vw] cursor-pointer bg-gray-light h-fit rounded-[2.353vw] lg:!rounded-[0.521vw] flex flex-col justify-center items-center"
        }
        animate={
          type !== "mobile" &&
          (isOpen
            ? { width: "18.802vw" }
            : type === "sm"
              ? { width: "12.135vw" }
              : type === "md"
                ? { width: "14.115vw" }
                : { width: "18.802vw" })
        }
        whileTap={{ scale: 0.95 }}
        onClick={setIsOpen}
      >
        <div
          className={
            "relative flex flex-col justify-center items-center w-full"
          }
        >
          <Image
            src={image}
            alt={"Team member image"}
            className={"w-full object-center object-contain"}
          />
          <div
            className={
              "flex absolute flex-col gap-[0.941vw] lg:!gap-[0.26vw] left-[2.353vw] lg:!left-[0.521vw] bottom-[2.353vw] lg:!bottom-[0.521vw]"
            }
          >
            <span
              className={
                "font-outfit uppercase text-[3.765vw] lg:!text-[0.833vw] font-medium leading-[110%] text-white"
              }
            >
              {fullName}
            </span>
            <span
              className={
                "text-white text-[3.765vw] lg:!text-[0.833vw] leading-[110%] font-helvetica-now"
              }
            >
              {title}
            </span>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={
              "w-[5.647vw] lg:!w-[1.25vw] h-[5.647vw] lg:!h-[1.25vw] absolute right-[2.353vw] lg:!right-[0.521vw] top-[2.353vw] lg:!top-[0.521vw]"
            }
          >
            <motion.ellipse
              cx="12.2637"
              cy="11.6123"
              rx="11.6143"
              ry="11.5714"
              fill="#D4FF33"
              animate={isOpen ? { fill: "#FFFCF5" } : { fill: "#D4FF33" }}
            />
            <motion.path
              d="M11.8396 12.0341V18.7755H12.6855V12.0341H19.4528V11.1914H12.6855V4.44897H11.8396V11.1914H5.07324V12.0341H11.8396Z"
              fill="#141414"
              animate={isOpen ? { rotate: "45deg" } : { rotate: 0 }}
            />
          </svg>
        </div>
        {isOpen && (
          <motion.div
            className={
              "flex flex-col gap-[2.824vw] lg:!gap-[0.781vw] mt-[2.353vw] lg:!mt-[0.521vw]"
            }
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "90%", transition: { delay: 0.18 } }}
            exit={{ opacity: 0, height: 0 }}
          >
            <span
              className={
                "text-white h-full opacity-60 text-[3.294vw] lg:!text-[0.833vw] font-helvetica-now leading-[120%]"
              }
            >
              {description}
            </span>
            <div
              className={
                "flex flex-row gap-[2.353vw] lg:!gap-[0.521vw] items-center"
              }
            >
              {socials.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className={"hover:opacity-80"}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

const members: {
  type: "sm" | "md" | "lg";
  image: any;
  fullName: string;
  title: string;
  description: string;
  socials: { icon: ReactNode; link: string }[];
}[] = [
  {
    type: "lg",
    image: alexImg,
    fullName: "Alex Ivlev",
    title: "Contracts developer",
    description:
      "Lead developer on the core contracts of the ZKNoid platform. Crypto Enthusiast since 2020. Over 6 years of experience in CRM development. 2 years of Solidity development experience, specializing in DeFi projects. Earned a Master of Science in Computer Science with focus on blockchain technologies from MIPT.",
    socials: [
      {
        icon: <TwitterIcon />,
        link: "https://twitter.com/intent/follow?screen_name=IvlevCrypto&ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3AShiroy_k%7Ctwcon%5Es2",
      },
    ],
  },
  {
    type: "sm",
    image: mizoriImg,
    fullName: "Shirouki mizori",
    title: "Ui\\Ux Designer",
    description:
      "Design and marketing lead in ZkNoid. Ui/Ux & Graphic designer in Web3 since 2021. Masters degree in quantum physics and engineer at MIPT University. Making your user expirience better every day.",
    socials: [
      {
        icon: <TwitterIcon />,
        link: "https://twitter.com/intent/follow?screen_name=Shiroy_k&ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3AShiroy_k%7Ctwcon%5Es2",
      },
    ],
  },
  {
    type: "lg",
    image: andreyImg,
    fullName: "Simaranov Andrey",
    title: "Fullstack Developer",
    description:
      "Top-1 solidity auditor at Mixbytes auditor DAO. Core builder of xraise.io project – account abstraction based wallet. Blockchain and full-stack developer. Studied at MSU, applied math and computer science. A leader who inspires the whole team to conquer new heights",
    socials: [
      {
        icon: <TwitterIcon />,
        link: "https://twitter.com/intent/follow?screen_name=asimaranov&ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3Aasimaranov%7Ctwcon%5Es2",
      },
    ],
  },
  {
    type: "sm",
    image: fosImg,
    fullName: "Anthony Solover",
    title: "Content manager",
    description:
      "Web3 content creator, community manager, and researcher since 2022. Academic background, on the verge of obtaining a PhD in biotechnology. His work includes in-depth analysis of current hot topics and passionate exploration of emerging trends",
    socials: [],
  },
  {
    type: "md",
    image: neoImg,
    fullName: "Nikita Vatletsov",
    title: "Frontend Developer",
    description:
      "Lead frontend developer at ZkNoid. Developed most of the UI for the ZkNoid, focusing on user-friendly interfaces and design. Over 3 years of experience building and improving web applications. Specializes in frontend architecture, optimizing performance and scalability across the platform",
    socials: [
      {
        icon: <TwitterIcon />,
        link: "https://twitter.com/intent/follow?screen_name=NeoGar_real&ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3ANeoGar_real%7Ctwcon%5Es2",
      },
    ],
  },
];

export default function Team() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex: 0,
    align: "start",
    containScroll: false,
    slidesToScroll: 1,
    skipSnaps: true,
  });
  const [openIndex, setOpenIndex] = useState<number | undefined>(undefined);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const setOpen = (index: number) => {
    if (index != currentSlideIndex) return;
    if (index == openIndex) {
      setOpenIndex(undefined);
    } else {
      setOpenIndex(index);
    }
  };

  const onSelect = useCallback((emblaApi: any) => {
    setCurrentSlideIndex(emblaApi.selectedScrollSnap());
    setOpenIndex(undefined);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);

    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section
      className={
        "px-[4.706vw] lg:!px-[10.938vw] h-[136.471vw] lg:!h-[29.375vw] mt-[25.882vw] lg:!mt-[10.417vw] flex flex-col"
      }
    >
      <span
        className={
          "text-[13.647vw] lg:!text-[5.208vw] mb-[2.353vw] lg:!mb-[1.042vw] text-left leading-[80%] font-kavaimo uppercase text-yellow"
        }
      >
        Team
      </span>
      <div className={"w-full hidden lg:!flex flex-row gap-[0.521vw]"}>
        <TeamCard
          key={0}
          type={1 == openIndex ? "sm" : members[0].type}
          image={members[0].image}
          fullName={members[0].fullName}
          title={members[0].title}
          description={members[0].description}
          socials={members[0].socials}
          isOpen={openIndex == 0}
          setIsOpen={() =>
            openIndex == 0 ? setOpenIndex(undefined) : setOpenIndex(0)
          }
        />
        <TeamCard
          key={1}
          type={members[1].type}
          image={members[1].image}
          fullName={members[1].fullName}
          title={members[1].title}
          description={members[1].description}
          socials={members[1].socials}
          isOpen={openIndex == 1}
          setIsOpen={() =>
            openIndex == 1 ? setOpenIndex(undefined) : setOpenIndex(1)
          }
        />
        <TeamCard
          key={2}
          type={3 == openIndex ? "sm" : 4 == openIndex ? "md" : members[2].type}
          image={members[2].image}
          fullName={members[2].fullName}
          title={members[2].title}
          description={members[2].description}
          socials={members[2].socials}
          isOpen={openIndex == 2}
          setIsOpen={() =>
            openIndex == 2 ? setOpenIndex(undefined) : setOpenIndex(2)
          }
        />
        <TeamCard
          key={3}
          type={members[3].type}
          image={members[3].image}
          fullName={members[3].fullName}
          title={members[3].title}
          description={members[3].description}
          socials={members[3].socials}
          isOpen={openIndex == 3}
          setIsOpen={() =>
            openIndex == 3 ? setOpenIndex(undefined) : setOpenIndex(3)
          }
        />
        <TeamCard
          key={4}
          type={members[4].type}
          image={members[4].image}
          fullName={members[4].fullName}
          title={members[4].title}
          description={members[4].description}
          socials={members[4].socials}
          isOpen={openIndex == 4}
          setIsOpen={() =>
            openIndex == 4 ? setOpenIndex(undefined) : setOpenIndex(4)
          }
        />
      </div>
      <div ref={emblaRef} className={"overflow-hidden w-full flex lg:!hidden"}>
        <div className={"w-full flex flex-row"}>
          {members.map((item, index) => (
            <TeamCard
              key={index}
              type={"mobile"}
              image={item.image}
              fullName={item.fullName}
              title={item.title}
              description={item.description}
              socials={item.socials}
              isOpen={openIndex == index}
              setIsOpen={() => setOpen(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
