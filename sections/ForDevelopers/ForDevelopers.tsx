"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/helpers";

const FeatureAccordion = ({
  index,
  title,
  description,
  status,
  onClick,
  isOpen,
}: {
  index: number;
  title: string;
  description: string;
  status: "progress" | "ready";
  onClick: () => void;
  isOpen: boolean;
}) => {
  return (
    <button
      className={
        "bg-gray-light p-[1.042vw] border border-white border-b-0 last:border-b rounded-[0.781vw] flex flex-col"
      }
      onClick={onClick}
    >
      <div className={"grid grid-cols-7 items-center w-full"}>
        <span
          className={cn(
            "leading-[110%] mr-auto text-[1.042vw] font-helvetica-now font-medium col-span-2",
            isOpen ? "text-yellow" : "text-white",
          )}
        >
          0{index}
        </span>
        <span
          className={cn(
            "font-helvetica-now mr-auto text-[1.042vw] font-medium leading-[110%] col-span-2",
            isOpen ? "text-yellow" : "text-white",
          )}
        >
          {title}
        </span>
        <span
          className={cn(
            "text-[0.833vw] font-helvetica-now leading-[120%] col-span-2",
            status === "progress" ? "text-red" : "text-purple",
          )}
        >
          {status === "progress" ? "In progress..." : "Ready to use"}
        </span>
        <div
          className={cn(
            "w-[1.146vw] h-[1.146vw] border rounded-full ml-auto",
            isOpen ? "border-yellow bg-yellow" : "border-white bg-gray-light",
          )}
        />
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={"grid grid-cols-7 overflow-hidden"}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
          >
            <span
              className={
                "col-start-3 text-left col-span-4 text-[0.833vw] font-helvetica-now text-white leading-[120%]"
              }
            >
              {description}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default function ForDevelopers() {
  const [openIndex, setOpenIndex] = useState<number | undefined>(undefined);

  const features: {
    title: string;
    description: string;
    status: "progress" | "ready";
  }[] = [
    {
      title: "Session keys",
      description:
        "Session keys are generated for each match and stored on the user's frontend, eliminating the need for manual transaction signing. This greatly improves the user experience by keeping transactions hidden from the user.",
      status: "ready",
    },
    {
      title: "Cards Engine",
      description:
        "The Card Engine provides game developers with user-friendly tools to create custom card games without the need for complex encryption implementations. Developers simply need to design the cards and define the game logic, and the Card Engine will handle everything else, including provable shuffle, card disclosure and the secure management of the game state.",
      status: "progress",
    },
    {
      title: "Commit Reveal Scheme",
      description:
        "The Commit-Reveal Schema is a two-step process that helps conceal information on-chain before proving it. First, a hash of the hidden data and a random salt is published. Later, the data and salt are provided to verify the original commitment.",
      status: "ready",
    },
    {
      title: "VRF Random generation",
      description:
        "A Verifiable Random Function (VRF) generates a provably random number. It ensures that the number is truly random, preventing any prior prediction, while also being verifiable, allowing others to confirm its proper computation. Random numbers are crucial in many games, such as lotteries.",
      status: "progress",
    },
    {
      title: "Matchmaking and Lobby",
      description:
        "The matchmaking and lobby features provided in our SDK offer an out-of-the-box solution for multiplayer games, simplifying multiplayer session creation and player discovery.",
      status: "ready",
    },
    {
      title: "Leaderboard",
      description:
        "The ZkNoid SDK includes the GameHub module, which allows developers to easily create runtime modules for single-player games with zk-proofed scores. Games built on top of GameHub automatically store users' scores on a leaderboard, encouraging competition and enabling reward distribution among the top players.",
      status: "ready",
    },
  ];

  return (
    <section className={"px-[10.938vw] mt-[10.417vw] flex flex-col"}>
      <span
        className={
          "text-[5.208vw] mb-[1.042vw] text-center leading-[80%] font-kavaimo uppercase text-yellow"
        }
      >
        For Developers
      </span>
      <div className={"flex flex-row gap-[0.521vw]"}>
        <div className={"w-[56%] flex flex-col"}>
          {features.map((item, index) => (
            <FeatureAccordion
              index={index + 1}
              title={item.title}
              description={item.description}
              status={item.status}
              onClick={() => {
                openIndex == index
                  ? setOpenIndex(undefined)
                  : setOpenIndex(index);
              }}
              isOpen={openIndex == index}
            />
          ))}
        </div>
        <div
          className={
            "w-[44%] p-[0.781vw] flex flex-col h-auto bg-white rounded-[0.781vw]"
          }
        >
          <span
            className={
              "font-outfit font-bold leading-[110%] uppercase text-[1.25vw] text-gray-dark mr-[4.688vw]"
            }
          >
            What we can provide for development
          </span>
          <span
            className={
              "font-medium font-helvetica-now leading-[120%] text-[0.833vw] text-gray-dark mr-[4.688vw]"
            }
          >
            By providing our infrastructure, we enable developers to focus on
            creating fun gameplay and interesting game mechanics, make the
            process of development smoothly and interesting. With our SDK and
            support you can build your dream games on Mina Protocol.
          </span>
          <Link
            href={"#"}
            className={
              "mt-auto hover:opacity-80 py-[0.417vw] rounded-[0.521vw] bg-yellow w-full flex justify-center items-center"
            }
          >
            <span
              className={
                "text-[0.833vw] font-helvetica-now font-medium text-gray-dark"
              }
            >
              Show all opportunities
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
