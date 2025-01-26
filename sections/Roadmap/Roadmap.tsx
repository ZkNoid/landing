"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { ReactNode, useRef, useState } from "react";
import Link from "next/link";

const RoadmapItem = ({
  date,
  title,
  isOpen,
  setIsOpen,
  content,
}: {
  date: string;
  title: string;
  isOpen: boolean;
  setIsOpen: () => void;
  content: ReactNode;
}) => {
  return (
    <div
      onClick={setIsOpen}
      className={
        "border border-b-0 last:border-b bg-gray-dark w-full cursor-pointer border-white rounded-[3.529vw] lg:!rounded-[0.781vw] px-[4.706vw] py-[2.353vw] lg:!px-[1.042vw] lg:!py-[1.042vw] flex flex-col"
      }
    >
      <div className={"flex flex-row items-center"}>
        <div className={"flex flex-col lg:!flex-row w-full lg:!items-center"}>
          <span
            className={
              "text-[3.765vw] lg:!text-[1.042vw] lg:!w-[30%] lg:!mr-auto leading-[120%] font-helvetica-now font-medium uppercase text-white"
            }
          >
            {date}
          </span>
          <span
            className={
              "text-[3.765vw] lg:!text-[1.25vw] w-full font-outfit font-semibold text-left lg:!text-center text-white uppercase"
            }
          >
            {title}
          </span>
        </div>
        <div
          className={"w-[30%] ml-auto flex flex-row justify-end items-center"}
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={"w-[4.941vw] lg:!w-[1.094vw]"}
          >
            <motion.circle
              cx="10.5"
              cy="10.5"
              r="10.5"
              fill="#D4FF33"
              animate={isOpen ? { fill: "#FFFCF5" } : { fill: "#D4FF33" }}
            />
            <motion.path
              d="M10.1162 10.8828V17H10.8809V10.8828H16.999V10.1181H10.8809V4H10.1162V10.1181H3.99902V10.8828H10.1162Z"
              fill="#141414"
              animate={isOpen ? { rotate: "45deg" } : { rotate: 0 }}
            />
          </svg>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{
              type: "spring",
              duration: 0.4,
              bounce: 0,
            }}
            className={"overflow-hidden"}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CheckboxedItem = ({
  isChecked,
  text,
}: {
  isChecked: boolean;
  text: string;
}) => {
  return (
    <div
      className={"flex flex-row gap-[1.882vw] lg:!gap-[0.521vw] items-center"}
    >
      <motion.div
        className={
          "flex flex-col justify-center border items-center rounded-full w-[5.412vw] lg:!w-[1.198vw] h-[5.412vw] lg:!h-[1.198vw]"
        }
        animate={
          isChecked
            ? { backgroundColor: "#D4FF33", borderColor: "#D4FF33" }
            : { backgroundColor: "#141414", borderColor: "#FFFCF5" }
        }
      >
        <motion.svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"w-[3.765vw] lg:!w-[1.042vw]"}
          animate={isChecked ? { opacity: 1 } : { opacity: 0 }}
        >
          <path
            d="M2 5.63636L8.22222 12L18 2"
            stroke="#1E1E1E"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
      <motion.span
        className={
          "text-[3.294vw] lg:!text-[0.938vw] text-white font-helvetica-now leading-[120%]"
        }
        animate={isChecked ? { opacity: 0.8 } : { opacity: 1 }}
      >
        {text}
      </motion.span>
    </div>
  );
};

const roadmapItems: {
  date: string;
  title: string;
  content: ReactNode;
}[] = [
  {
    date: "Q1, 2024",
    title: "Arkanoid, Randzu, Thimblerig",
    content: (
      <div className={"w-full flex flex-col mt-[2.353vw] lg:!mt-[1.563vw]"}>
        <div
          className={
            "flex last:mb-[2.353vw] lg:!mb-0 flex-col lg:!flex-row justify-between gap-[3.059vw] lg:!gap-[2.083vw]"
          }
        >
          <div
            className={"flex flex-col gap-[3.059vw] lg:!gap-[0.521vw] w-full"}
          >
            <CheckboxedItem isChecked={true} text={"Lending development"} />
            <CheckboxedItem
              isChecked={true}
              text={"Game platform Design & Frontend"}
            />
            <CheckboxedItem isChecked={true} text={"Arcanoid and Randzu UI"} />
            <CheckboxedItem
              isChecked={true}
              text={"Poker Game contracts implementation"}
            />
            <CheckboxedItem
              isChecked={true}
              text={"Competitions mechanism implementation"}
            />
            <CheckboxedItem
              isChecked={true}
              text={"Matchmaking mechanism implementation"}
            />
          </div>
          <div
            className={"flex flex-col gap-[3.059vw] lg:!gap-[0.521vw] w-full"}
          >
            <CheckboxedItem
              isChecked={true}
              text={"Migrated to recursive proofs in arkanoid"}
            />
            <CheckboxedItem
              isChecked={true}
              text={"Background sessions implementation"}
            />
            <CheckboxedItem
              isChecked={true}
              text={"Mina and protokit networks interplay"}
            />
            <CheckboxedItem
              isChecked={true}
              text={"Changed game mechanics — added momentum"}
            />
            <CheckboxedItem
              isChecked={true}
              text={
                "Made framework and protokit client modular with reusable on-chain"
              }
            />
          </div>
        </div>
        <Link
          href={
            "https://medium.com/zknoid/monthly-recap-march-2024-576b61398d41"
          }
          target={"_blank"}
          rel={"noopener noreferrer"}
          className={
            "underline mr-auto mt-[4.706vw] lg:!mt-[1.302vw] font-outfit text-[3.765vw] lg:!text-[0.833vw] font-medium leading-[110%] uppercase text-white hover:opacity-80"
          }
        >
          Show full progress
        </Link>
      </div>
    ),
  },
  {
    date: "Q2, 2024",
    title: "PvP infrastructure, Testnet",
    content: (
      <div className={"w-full flex flex-col mt-[2.353vw] lg:!mt-[1.563vw]"}>
        <div
          className={
            "flex last:mb-[2.353vw] lg:!mb-0 flex-col lg:!flex-row justify-between gap-[3.059vw] lg:!gap-[2.083vw]"
          }
        >
          <div
            className={"flex flex-col gap-[3.059vw] lg:!gap-[0.521vw] w-full"}
          >
            <CheckboxedItem
              isChecked={true}
              text={"Unified opponent timeout proving for multiplayer games"}
            />
            <CheckboxedItem
              isChecked={true}
              text={
                "Migrated to o1js 1.1.0 experimentally supported by protokit"
              }
            />
            <CheckboxedItem
              isChecked={true}
              text={"Lobby manager implementation"}
            />
            <CheckboxedItem
              isChecked={true}
              text={"Poker game design development"}
            />
          </div>
          <div
            className={"flex flex-col gap-[3.059vw] lg:!gap-[0.521vw] w-full"}
          >
            <CheckboxedItem
              isChecked={true}
              text={"Lottery initial impelematation"}
            />
            <CheckboxedItem
              isChecked={true}
              text={"ZkNoid Quest Website development"}
            />
            <CheckboxedItem isChecked={true} text={"ZkNoid First Testnet"} />
          </div>
        </div>
        <Link
          href={
            "https://medium.com/zknoid/monthly-recap-april-2024-243fa068677d"
          }
          target={"_blank"}
          rel={"noopener noreferrer"}
          className={
            "underline mr-auto mt-[4.706vw] lg:!mt-[1.302vw] font-outfit text-[3.765vw] lg:!text-[0.833vw] font-medium leading-[110%] uppercase text-white hover:opacity-80"
          }
        >
          Show full progress
        </Link>
      </div>
    ),
  },
  {
    date: "Q3, 2024",
    title: "Lottery L1, SDK",
    content: (
      <div className={"w-full flex flex-col mt-[2.353vw] lg:!mt-[1.563vw]"}>
        <div
          className={
            "flex last:mb-[2.353vw] lg:!mb-0 flex-col lg:!flex-row justify-between gap-[3.059vw] lg:!gap-[2.083vw]"
          }
        >
          <div
            className={"flex flex-col gap-[3.059vw] lg:!gap-[0.521vw] w-full"}
          >
            <CheckboxedItem isChecked={true} text={"Lottery game updates"} />
            <CheckboxedItem isChecked={true} text={"Documentation update"} />
            <CheckboxedItem
              isChecked={true}
              text={"ETHGlobal Online Hackathon"}
            />
            <CheckboxedItem
              isChecked={true}
              text={"ETHGlobal Singapore Hackathon"}
            />
            <CheckboxedItem
              isChecked={true}
              text={"Move to microservice architecture"}
            />
          </div>
          <div
            className={"flex flex-col gap-[3.059vw] lg:!gap-[0.521vw] w-full"}
          >
            <CheckboxedItem isChecked={true} text={"SDK for games"} />
            <CheckboxedItem isChecked={true} text={"SDK: Cards Engine"} />
            <CheckboxedItem isChecked={true} text={"Lottery game testnet"} />
            <CheckboxedItem isChecked={false} text={"VRF Integration"} />
            <CheckboxedItem isChecked={true} text={"Guides & Workshops"} />
          </div>
        </div>
        <Link
          href={
            "https://forums.minaprotocol.com/t/zknoid-l1-lottery-sdk-improvements/6424"
          }
          target={"_blank"}
          rel={"noopener noreferrer"}
          className={
            "underline mr-auto mt-[4.706vw] lg:!mt-[1.302vw] font-outfit text-[3.765vw] lg:!text-[0.833vw] font-medium leading-[110%] uppercase text-white hover:opacity-80"
          }
        >
          Show full roadmap
        </Link>
      </div>
    ),
  },
  {
    date: "Q4, 2024",
    title: "Orderbook & Tokenomics",
    content: (
      <div className={"w-full flex flex-col mt-[2.353vw] lg:!mt-[1.563vw]"}>
        <div
          className={
            "flex last:mb-[2.353vw] lg:!mb-0 flex-col lg:flex-row justify-between gap-[3.059vw] lg:!gap-[2.083vw]"
          }
        >
          <div
            className={"flex flex-col gap-[3.059vw] lg:!gap-[0.521vw] w-full"}
          >
            <CheckboxedItem
              isChecked={false}
              text={"Order book conception on Mina Protocol development"}
            />
            <CheckboxedItem
              isChecked={false}
              text={"Order book contracts development"}
            />
            <CheckboxedItem
              isChecked={false}
              text={"Order book backend development"}
            />
            <CheckboxedItem
              isChecked={false}
              text={"Order book user interface & design"}
            />
            <CheckboxedItem
              isChecked={false}
              text={"Order book frontend development"}
            />
          </div>
          <div
            className={"flex flex-col gap-[3.059vw] lg:!gap-[0.521vw] w-full"}
          >
            <CheckboxedItem isChecked={false} text={"Token design"} />
            <CheckboxedItem isChecked={false} text={"Token contracts"} />
            <CheckboxedItem isChecked={false} text={"Revenue model"} />
            <CheckboxedItem
              isChecked={false}
              text={"Token implementation & launch"}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Clicker game",
    date: "Q1, 2025",
    content: (
      <div
        className={
          "text-[3.294vw] mt-[2.353vw] lg:!mb-0 lg:!mt-[1.563vw] last:mb-[2.353vw] lg:!text-[0.938vw] text-white lg:!w-[60%] leading-[120%] font-helvetica-now"
        }
      >
        Initial token distribution will be made by the “proof of tap” online
        clicker game with play-to earn mechanism
      </div>
    ),
  },
];

export default function Roadmap() {
  const [openIndex, setOpenIndex] = useState<number | undefined>(undefined);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="roadmap"
      ref={ref}
      className={"mt-[25.882vw] lg:!mt-[10.417vw] relative flex flex-col"}
    >
      <div className={"px-[4.706vw] lg:!px-[26.667vw] flex flex-col"}>
        <span
          className={
            "text-[13.647vw] lg:!text-[5.208vw] mb-[4.706vw] lg:!mb-[1.042vw] text-center leading-[80%] font-kavaimo uppercase text-yellow"
          }
        >
          Roadmap
        </span>
        <div className={"flex flex-col"}>
          {roadmapItems.map((item, index) => (
            <RoadmapItem
              key={index}
              date={item.date}
              title={item.title}
              isOpen={index == openIndex}
              setIsOpen={() =>
                index == openIndex
                  ? setOpenIndex(undefined)
                  : setOpenIndex(index)
              }
              content={item.content}
            />
          ))}
        </div>
      </div>
      <div
        className={
          "absolute -z-[1] top-0 left-0 hidden lg:!flex flex-col justify-center items-center w-full h-full"
        }
      >
        <svg
          width="1920"
          height="247"
          viewBox="0 0 1920 247"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"object-cover object-center w-screen h-full"}
        >
          <mask
            id="mask0_1033_3978"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="-1"
            y="0"
            width="1921"
            height="247"
          >
            <rect x="-1" width="1921" height="247" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_1033_3978)">
            <motion.path
              d="M-215.997 7C-62.8554 7 -62.8554 221.866 90.2891 221.866C243.434 221.866 243.431 7 396.572 7C549.714 7 549.714 221.866 702.858 221.866C856.003 221.866 856 7 1009.14 7C1162.29 7 1162.29 221.866 1315.43 221.866C1468.58 221.866 1468.57 7 1621.72 7C1774.86 7 1774.86 221.866 1928 221.866"
              stroke="#3A39FF"
              strokeWidth="4"
              strokeMiterlimit="10"
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.2 }}
            />
            <motion.path
              d="M1928 110C1749.34 110 1749.34 238.918 1570.67 238.918C1392.01 238.918 1392.01 110 1213.34 110C1034.67 110 1034.67 238.918 856.003 238.918C677.334 238.918 677.337 110 498.669 110C320 110 320.003 238.918 141.334 238.918C-37.3342 238.918 -37.3315 110 -216 110"
              stroke="#D4FF33"
              strokeWidth="4"
              strokeMiterlimit="10"
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.2 }}
            />
            <motion.path
              d="M-215.997 95C-1.59705 95 -1.59705 180.947 212.803 180.947C427.203 180.947 427.203 95 641.603 95C856.003 95 856.003 180.947 1070.4 180.947C1284.8 180.947 1284.8 95 1499.2 95C1713.6 95 1713.6 180.947 1928 180.947"
              stroke="#FF5B23"
              strokeWidth="4"
              strokeMiterlimit="10"
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.2 }}
            />
          </g>
        </svg>
      </div>
    </section>
  );
}
