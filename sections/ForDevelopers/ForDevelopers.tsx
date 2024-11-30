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
        "bg-gray-light px-[4.706vw] py-[2.353vw] lg:!px-[1.042vw] lg:!py-[1.042vw] border border-white border-b-0 last:border-b rounded-[3.529vw] lg:!rounded-[0.781vw] flex flex-col"
      }
      onClick={onClick}
    >
      <div className={"grid grid-cols-5 lg:!grid-cols-7 items-center w-full"}>
        <span
          className={cn(
            "leading-[110%] mr-auto text-[3.765vw] lg:!text-[1.042vw] font-helvetica-now font-medium lg:!col-span-2",
            isOpen ? "text-yellow" : "text-white",
          )}
        >
          0{index}
        </span>
        <div
          className={
            "flex flex-col gap-[1.176vw] justify-start items-start col-span-3 lg:!col-span-2 mr-auto"
          }
        >
          <span
            className={cn(
              "lg:!hidden text-[2.824vw] font-helvetica-now leading-[120%]",
              status === "progress" ? "text-red" : "text-purple",
            )}
          >
            {status === "progress" ? "In progress..." : "Ready to use"}
          </span>
          <span
            className={cn(
              "font-helvetica-now text-[3.765vw] lg:!text-[1.042vw] font-medium leading-[110%]",
              isOpen ? "text-yellow" : "text-white",
            )}
          >
            {title}
          </span>
        </div>
        <span
          className={cn(
            "hidden lg:!inline-block text-[0.833vw] font-helvetica-now leading-[120%] lg:!col-span-2",
            status === "progress" ? "text-red" : "text-purple",
          )}
        >
          {status === "progress" ? "In progress..." : "Ready to use"}
        </span>
        <div
          className={cn(
            "w-[3.529vw] lg:!w-[1.146vw] h-[3.529vw] lg:!h-[1.146vw] border rounded-full ml-auto",
            isOpen ? "border-yellow bg-yellow" : "border-white bg-gray-light",
          )}
        />
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={"grid grid-cols-5 lg:!grid-cols-7 overflow-hidden"}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
          >
            <span
              className={
                "col-start-2 lg:!col-start-3 text-left col-span-4 lg:!col-span-4 text-[3.294vw] opacity-80 lg:!text-[0.833vw] font-helvetica-now text-white leading-[120%]"
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

export default function ForDevelopers() {
  const [openIndex, setOpenIndex] = useState<number | undefined>(undefined);

  return (
    <section
      className={
        "px-[4.706vw] lg:!px-[10.938vw] mt-[25.882vw] lg:!mt-[10.417vw] flex flex-col"
      }
    >
      <span
        className={
          "text-[13.647vw] lg:!text-[5.208vw] mb-[3.529vw] lg:!mb-[1.042vw] lg:!text-center leading-[80%] font-kavaimo uppercase text-yellow"
        }
      >
        For Developers
      </span>
      <div
        className={
          "flex flex-col-reverse lg:!flex-row gap-[2.353vw] lg:!gap-[0.521vw]"
        }
      >
        <div className={"w-full lg:!w-[56%] flex flex-col"}>
          {features.map((item, index) => (
            <FeatureAccordion
              key={index}
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
            "w-full lg:!w-[44%] p-[3.529vw] lg:!p-[0.781vw] flex flex-col h-auto bg-white rounded-[3.529vw] lg:!rounded-[0.781vw]"
          }
        >
          <span
            className={
              "font-outfit font-bold leading-[110%] uppercase text-[6.118vw] lg:!text-[1.25vw] text-gray-dark mr-[4.688vw]"
            }
          >
            What we can provide for development
          </span>
          <span
            className={
              "font-medium mt-[2.353vw] lg:!mt-[0.521vw] font-helvetica-now leading-[120%] text-[3.765vw] lg:!text-[0.833vw] text-gray-dark lg:!mr-[4.688vw]"
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
              "mt-[7.059vw] lg:!mt-auto hover:opacity-80 py-[2.353vw] lg:!py-[0.417vw] rounded-[2.353vw] lg:!rounded-[0.521vw] bg-yellow w-full flex justify-center items-center"
            }
          >
            <span
              className={
                "text-[3.765vw] lg:!text-[0.833vw] font-helvetica-now font-medium text-gray-dark"
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
