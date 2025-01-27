"use client";

import { cn } from "@/lib/helpers";
import Link from "next/link";
import ArrowButton from "@/shared/ArrowButton";
import useEmblaCarousel from "embla-carousel-react";
import { SOCIALS } from "@/lib/socials";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

enum ArticleType {
  Announcements = "Announcements",
  Vision = "Vision",
  Reports = "Reports",
  DeepDive = "Deep Dive",
  Guides = "Guides",
  ZkNoidSDK = "ZkNoid SDK",
  Ecosystem = "Ecosystem",
}

const Card = ({
  color,
  tag,
  link,
  title,
  text,
  className,
}: {
  color: "white" | "black";
  tag: { type: ArticleType; color: "yellow" | "red" | "blue" | "purple" };
  link: string;
  title: string;
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-[2.353vw] lg:!rounded-[0.521vw] p-[3.529vw] lg:!p-[0.781vw] w-full h-full flex flex-col flex-[0_0_85%] lg:!flex-[1_1_auto] ml-[2.353vw] first:ml-0 lg:!ml-0 min-w-0 lg:!min-w-0",
        color == "white" ? "bg-white" : "bg-gray-light",
        className,
      )}
    >
      <div className={"flex flex-col gap-[2.353vw] lg:!gap-[0.781vw]"}>
        <div
          className={cn(
            "rounded-full mr-auto px-[4.235vw] lg:!px-[0.781vw] py-[0.471vw] lg:!py-[0.104vw] border text-[2.824vw] lg:!text-[0.729vw] font-bold font-helvetica-now leading-[110%]",
            tag.color === "yellow"
              ? "border-yellow text-yellow"
              : tag.color === "red"
                ? "border-red text-red"
                : tag.color === "blue"
                  ? "border-blue text-blue"
                  : "border-purple text-purple",
          )}
        >
          {tag.type}
        </div>
        <span
          className={cn(
            "text-[3.765vw] lg:!text-[1.042vw] uppercase font-outfit font-bold leading-[110%]",
            color === "white" ? "text-gray-light" : "text-white",
          )}
        >
          {title}
        </span>
        <div
          className={cn(
            "w-full h-px",
            tag.color === "yellow"
              ? "bg-yellow"
              : tag.color === "red"
                ? "bg-red"
                : tag.color === "blue"
                  ? "bg-blue"
                  : "bg-purple",
          )}
        />
        <span
          className={cn(
            "text-[3.765vw] lg:!text-[0.938vw] opacity-80 lg:!max-w-[26.042vw] font-helvetica-now leading-[120%]",
            color === "white" ? "text-gray-light" : "text-white",
          )}
        >
          {text}
        </span>
      </div>
      <Link
        href={link}
        target={"_blank"}
        rel={"noopener noreferrer"}
        className={cn(
          "underline uppercase text-[3.765vw] lg:!text-[0.833vw] font-semibold font-outfit mt-auto mr-auto lg:!mr-0 lg:!ml-auto",
          color === "white" ? "text-black" : "text-white",
          tag.color === "yellow"
            ? "hover:text-yellow"
            : tag.color === "red"
              ? "hover:text-red"
              : tag.color === "blue"
                ? "hover:text-blue"
                : "hover:text-purple",
        )}
      >
        Read article
      </Link>
    </div>
  );
};

const articles: {
  color: "white" | "black";
  tag: { type: ArticleType; color: "yellow" | "red" | "blue" | "purple" };
  link: string;
  title: string;
  text: string;
}[] = [
  {
    color: "black",
    tag: { type: ArticleType.Guides, color: "yellow" },
    link: "https://medium.com/zknoid/building-our-first-mina-zkapp-game-chapter-1-de7880584aff",
    title: "Building our first Mina zkApp game: Chapter 1",
    text: "In this tutorial, we will build a simple number-guessing game. One user hides a number, and another tries to guess it. We’ll also keep track of the number of correct guesses for each user.",
  },
  {
    color: "white",
    tag: { type: ArticleType.Guides, color: "red" },
    link: "https://medium.com/zknoid/protokit-tips-tricks-our-experience-bonus-part-a7c6d04c5bfc",
    title: "Protokit tips & tricks: our experience",
    text: "Protokit is a popular app-chain solution in the Mina world. It allows developers to launch their own sequencer that proves state changes to the Mina network enabling fast transactions and low fees. In this article we want to share some ZkNoid team experience, tips and tricks dealing with protokit.",
  },
  {
    color: "black",
    tag: { type: ArticleType.DeepDive, color: "yellow" },
    link: "https://medium.com/zknoid/mina-action-reducers-guide-why-we-need-them-81b6836c1700",
    title: "Mina Action & Reducers Guide: Why We Need Them",
    text: "Have you faced an issue of processing multiple transactions in the same block - both users trying to update the state simutaniously, one do it successfully, but other one got a failed transaction? Don’t worry, it isn’t a problem no more for all MinaDevelopers who building on MinaProtocol. The beauty and clear solution to this problem: Reducers.",
  },
  {
    color: "white",
    tag: { type: ArticleType.Vision, color: "blue" },
    link: "https://medium.com/zknoid/zero-knowledge-proofs-for-gaming-how-it-works-why-do-we-need-them-3d0ee659c850",
    title:
      "Zero knowledge proofs for gaming: how it works & why do we need them",
    text: "ZK technologies become more and more popular. People expect them to bring the completely new UX to everyday life and start generation of products with previously impossible possibilities. While ZK proofs found their use in different application areas in this article we will focus on how proofs can bring the completely new gaming experience.",
  },
  {
    color: "black",
    tag: { type: ArticleType.Ecosystem, color: "purple" },
    link: "https://medium.com/zknoid/exploring-zknoid-sdk-interview-from-tileville-game-developer-cc04e7d31c90",
    title: "Exploring ZkNoid SDK: Interview from TileVille game Developer",
    text: "The first game embedded in our platform was TileVille strategic city-builder game. The game is firmly established in the Mina ecosystem and is actively attracting users. Check out the TileVille game developer interview to learn more about the experience of using the ZkNoid SDK directly from developers.",
  },
  {
    color: "white",
    tag: { type: ArticleType.Announcements, color: "blue" },
    link: "https://medium.com/zknoid/mina-navigators-l1-lottery-ab2df88c985c",
    title: "Mina Navigators: L1 Lottery",
    text: "Mina community is interested in playing games on the Mina blockchain. The Lottery game would be the first gaming zkApp ready for the real funds. In this game players try their luck in a fair lottery getting used to ZK gaming experience.",
  },
];

const ArticleCounterItem = ({ title, tag }: { title: string; tag: string }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const getArticlesCount = async () => {
      const res = await fetch("/api/getArticles", {
        headers: {
          Tag: tag,
        },
      });
      if (!res.ok)
        throw new Error(`Failed to fetch articles, code: ${res.status}`);
      const data: number = await res.json();
      setCount(data);
    };
    getArticlesCount();
  }, []);

  return (
    <div
      className={
        "flex flex-row border-t last-of-type:border-b border-white items-center justify-between py-[1.176vw] lg:!py-[0.13vw]"
      }
    >
      <Link
        href={`https://medium.com/zknoid/tagged/${tag}`}
        target="_blank"
        rel="noopener noreferrer"
        className={
          "hover:opacity-80 text-[3.765vw] lg:!text-[0.833vw] font-helvetica-now leading-[120%] font-medium text-white"
        }
      >
        {title}
      </Link>
      <span
        className={
          "text-[3.765vw] lg:!text-[0.833vw] font-helvetica-now text-white"
        }
      >
        {count ? `(${count.toString()})` : `(0)`}
      </span>
    </div>
  );
};

const ArticlesCounter = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full flex flex-col", className)}>
      <span
        className={
          "text-[13.647vw] lg:!text-[5.208vw] mb-[4.706vw] lg:!mb-[1.042vw] text-center leading-[80%] font-kavaimo uppercase text-yellow"
        }
      >
        Blog
      </span>
      <ArticleCounterItem
        title={ArticleType.Announcements}
        tag={"announcements"}
      />
      <ArticleCounterItem title={ArticleType.Vision} tag={"vision"} />
      <ArticleCounterItem title={ArticleType.Reports} tag={"reports"} />
      <ArticleCounterItem title={ArticleType.DeepDive} tag={"technology"} />
      <ArticleCounterItem title={ArticleType.Guides} tag={"guides"} />
      <ArticleCounterItem title={ArticleType.ZkNoidSDK} tag={"sdk"} />
      <ArticleCounterItem title={ArticleType.Ecosystem} tag={"ecosystem"} />
      <ArrowButton
        link={SOCIALS.medium}
        text={"VIEW ALL"}
        className={"mt-[3.529vw] mb-0 lg:!mt-[1vw] lg:!mb-[1vw] mx-auto"}
        openAsNewTab
      />
    </div>
  );
};

export default function Blog() {
  const [emblaRef] = useEmblaCarousel({
    startIndex: 0,
    align: "start",
    containScroll: false,
    slidesToScroll: 1,
    skipSnaps: true,
  });

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <section
      ref={ref}
      className={
        "px-[4.706vw] lg:!px-[10.938vw] mt-[25.882vw] lg:!mt-[10.417vw] flex flex-col lg:!gap-[0.521vw]"
      }
    >
      <div className={"hidden lg:!grid grid-cols-4 gap-[0.521vw]"}>
        {articles.map((item, index) => (
          <motion.div
            key={index}
            className={index === 3 ? "col-span-2" : undefined}
            animate={
              isInView
                ? {
                    y: 0,
                    transition: {
                      duration: 4,
                      type: "spring",
                      ease: "linear",
                      stiffness: 50,
                    },
                  }
                : {
                    y: "10vw",
                    transition: {
                      duration: 4,
                      type: "spring",
                      ease: "linear",
                      stiffness: 50,
                    },
                  }
            }
          >
            <Card
              color={item.color}
              tag={item.tag}
              link={item.link}
              title={item.title}
              text={item.text}
            />
          </motion.div>
        ))}
        <motion.div
          className={"col-start-2 col-end-2 row-start-1 row-end-1"}
          animate={
            isInView
              ? {
                  y: 0,
                  transition: {
                    duration: 4,
                    type: "spring",
                    ease: "linear",
                    stiffness: 50,
                  },
                }
              : {
                  y: "10vw",
                  transition: {
                    duration: 4,
                    type: "spring",
                    ease: "linear",
                    stiffness: 50,
                  },
                }
          }
        >
          <ArticlesCounter key={"articles-counter"} />
        </motion.div>
      </div>
      <div className={"lg:!hidden flex flex-col gap-[4.706vw]"}>
        <ArticlesCounter />
        <div
          ref={emblaRef}
          className={"overflow-hidden w-full flex lg:!hidden"}
        >
          <div className={"w-full flex flex-row"}>
            {articles.map((item, index) => (
              <Card
                key={index}
                color={item.color}
                tag={item.tag}
                link={item.link}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
