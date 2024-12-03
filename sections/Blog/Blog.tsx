"use client";

import { cn } from "@/lib/helpers";
import Link from "next/link";
import ArrowButton from "@/shared/ArrowButton";
import useEmblaCarousel from "embla-carousel-react";

const Card = ({
  color,
  tag,
  link,
  title,
  text,
  className,
}: {
  color: "white" | "black";
  tag: { text: string; color: "yellow" | "red" | "blue" | "purple" };
  link: string;
  title: string;
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-[2.353vw] lg:!rounded-[0.521vw] p-[3.529vw] lg:!p-[0.781vw] w-full flex flex-col flex-[0_0_85%] ml-[2.353vw] first:ml-0 lg:!ml-0 min-w-0 lg:!flex-none",
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
          {tag.text}
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
        className={cn(
          "underline hover:opacity-80 uppercase text-[3.765vw] lg:!text-[0.833vw] font-semibold font-outfit mt-auto mr-auto lg:!mr-0 lg:!ml-auto",
          color === "white" ? "text-black" : "text-white",
        )}
      >
        Read article
      </Link>
    </div>
  );
};

const articlesTop: {
  color: "white" | "black";
  tag: { text: string; color: "yellow" | "red" | "blue" | "purple" };
  link: string;
  title: string;
  text: string;
}[] = [
  {
    color: "black",
    tag: { text: "Guide", color: "yellow" },
    link: "#",
    title: "Building our first Mina zkApp game: Chapter 1",
    text: "In this tutorial, we will build a simple number-guessing game. One user hides a number, and another tries to guess it. We’ll also keep track of the number of correct guesses for each user.",
  },
  {
    color: "white",
    tag: { text: "Development", color: "red" },
    link: "#",
    title: "Protokit tips & tricks: our experience",
    text: "Protokit is a popular app-chain solution in the Mina world. It allows developers to launch their own sequencer that proves state changes to the Mina network enabling fast transactions and low fees. In this article we want to share some ZkNoid team experience, tips and tricks dealing with protokit.",
  },
  {
    color: "black",
    tag: { text: "Guide", color: "yellow" },
    link: "#",
    title: "Mina Action & Reducers Guide: Why We Need Them",
    text: "Have you faced an issue of processing multiple transactions in the same block - both users trying to update the state simutaniously, one do it successfully, but other one got a failed transaction? Don’t worry, it isn’t a problem no more for all MinaDevelopers who building on MinaProtocol. The beauty and clear solution to this problem: Reducers.",
  },
];

const articlesBottom: {
  color: "white" | "black";
  tag: { text: string; color: "yellow" | "red" | "blue" | "purple" };
  link: string;
  title: string;
  text: string;
}[] = [
  {
    color: "white",
    tag: { text: "Overview", color: "blue" },
    link: "#",
    title:
      "Zero knowledge proofs for gaming: how it works & why do we need them",
    text: "ZK technologies become more and more popular. People expect them to bring the completely new UX to everyday life and start generation of products with previously impossible possibilities. While ZK proofs found their use in different application areas in this article we will focus on how proofs can bring the completely new gaming experience.",
  },
  {
    color: "black",
    tag: { text: "Interview", color: "purple" },
    link: "#",
    title: "Exploring ZkNoid SDK: Interview from TileVille game Developer",
    text: "The first game embedded in our platform was TileVille strategic city-builder game. The game is firmly established in the Mina ecosystem and is actively attracting users. Check out the TileVille game developer interview to learn more about the experience of using the ZkNoid SDK directly from developers.",
  },
  {
    color: "white",
    tag: { text: "Overview", color: "blue" },
    link: "#",
    title: "Building our first Mina zkApp game: Chapter 1",
    text: "Mina community is interested in playing games on the Mina blockchain. The Lottery game would be the first gaming zkApp ready for the real funds. In this game players try their luck in a fair lottery getting used to ZK gaming experience.",
  },
];

const ArticleCounterItem = ({
  title,
  count,
}: {
  title: string;
  count: number;
}) => {
  return (
    <div
      className={
        "flex flex-row border-t last-of-type:border-b border-white items-center justify-between py-[1.176vw] lg:!py-[0.26vw]"
      }
    >
      <span
        className={
          "text-[3.765vw] lg:!text-[0.833vw] font-helvetica-now leading-[120%] font-medium text-white"
        }
      >
        {title}
      </span>
      <span
        className={
          "text-[3.765vw] lg:!text-[0.833vw] font-helvetica-now text-white"
        }
      >
        ({count})
      </span>
    </div>
  );
};

const ArticlesCounter = () => {
  return (
    <div className={"w-full flex flex-col"}>
      <span
        className={
          "text-[13.647vw] lg:!text-[5.208vw] mb-[4.706vw] lg:!mb-[1.042vw] text-center leading-[80%] font-kavaimo uppercase text-yellow"
        }
      >
        Blog
      </span>
      <ArticleCounterItem title={"Overview"} count={0} />
      <ArticleCounterItem title={"Updates"} count={0} />
      <ArticleCounterItem title={"Development"} count={0} />
      <ArticleCounterItem title={"News"} count={0} />
      <ArticleCounterItem title={"Interview"} count={0} />
      <ArticleCounterItem title={"Guide"} count={0} />
      <ArrowButton
        link={"#"}
        text={"VIEW ALL"}
        className={
          "mt-[3.529vw] mb-0 lg:!mt-[1.563vw] lg:!mb-[1.563vw] mx-auto"
        }
      />
    </div>
  );
};

export default function Blog() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex: 0,
    align: "start",
    containScroll: false,
    slidesToScroll: 1,
    skipSnaps: true,
  });
  return (
    <section
      className={
        "px-[4.706vw] lg:!px-[10.938vw] mt-[25.882vw] lg:!mt-[10.417vw] flex flex-col lg:!gap-[0.521vw]"
      }
    >
      <div className={"hidden lg:!flex flex-row gap-[0.521vw]"}>
        <Card
          key={0}
          color={articlesTop[0].color}
          tag={articlesTop[0].tag}
          link={articlesTop[0].link}
          title={articlesTop[0].title}
          text={articlesTop[0].text}
        />
        <ArticlesCounter />
        <Card
          key={1}
          color={articlesTop[1].color}
          tag={articlesTop[1].tag}
          link={articlesTop[1].link}
          title={articlesTop[1].title}
          text={articlesTop[1].text}
        />
        <Card
          key={2}
          color={articlesTop[2].color}
          tag={articlesTop[2].tag}
          link={articlesTop[2].link}
          title={articlesTop[2].title}
          text={articlesTop[2].text}
        />
      </div>
      <div className={"hidden lg:!flex flex-row gap-[0.521vw]"}>
        {articlesBottom.map((item, index) => (
          <Card
            key={index}
            color={item.color}
            tag={item.tag}
            link={item.link}
            title={item.title}
            text={item.text}
            className={index == 0 ? "w-[200%]" : undefined}
          />
        ))}
      </div>
      <div className={"lg:!hidden flex flex-col gap-[4.706vw]"}>
        <ArticlesCounter />
        <div
          ref={emblaRef}
          className={"overflow-hidden w-full flex lg:!hidden"}
        >
          <div className={"w-full flex flex-row"}>
            {[...articlesTop, ...articlesBottom].map((item, index) => (
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
