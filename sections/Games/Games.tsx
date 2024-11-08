"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import lotteryGameImg from "@/public/image/slides/lottery-game.svg";
import { cn } from "@/lib/helpers";
import { useCallback, useEffect, useState } from "react";

const Slide = ({
  gameName,
  link,
  image,
  tags,
  network,
  description,
  type,
  className,
}: {
  gameName: string;
  link: string;
  image: any;
  tags: string[];
  network: string;
  description: string;
  type: "currentSlide" | "nextSlide" | "slide";
  className?: string;
}) => {
  return (
    <Link
      href={link}
      className={cn(
        "rounded-[0.521vw] transition-transform min-w-0 flex-[0_0_25%] px-[0.781vw] pt-[0.781vw] pb-[0.521vw] flex flex-col",
        type === "currentSlide"
          ? "bg-white z-[2]"
          : type === "nextSlide"
            ? "bg-gray-light scale-[0.85] z-[1]"
            : "bg-black scale-[0.75]",
        className,
      )}
    >
      <div className={"flex flex-row items-center justify-between"}>
        <div className={"flex flex-row gap-[0.521vw] items-center"}>
          {tags.map((tag, index) => (
            <span
              key={index}
              className={cn(
                "rounded-full py-[0.156vw] border px-[0.313vw] text-[0.729vw] text-white font-helvetica-now leading-[110%]",
                type === "currentSlide"
                  ? "border-gray-light bg-gray-light"
                  : "border-white",
              )}
            >
              {tag}
            </span>
          ))}
        </div>
        <span
          className={cn(
            "rounded-full py-[0.156vw] border px-[0.313vw] text-[0.729vw] text-white font-helvetica-now leading-[110%]",
            type === "currentSlide"
              ? "border-gray-light bg-gray-light"
              : "border-white",
          )}
        >
          {network}
        </span>
      </div>
      <div
        className={
          "mt-[0.781vw] rounded-[0.521vw] w-full h-[10.938vw] overflow-hidden"
        }
      >
        <Image
          src={image}
          alt={"Slide image"}
          className={"w-full h-full object-center object-contain"}
        />
      </div>
      <span
        className={cn(
          "mt-[0.521vw] font-helvetica-now font-medium text-[0.833vw]",
          type === "currentSlide" ? "text-gray-dark" : "text-white",
        )}
      >
        {gameName}
      </span>
      <span
        className={cn(
          "mt-[0.26vw] font-helvetica-now text-[0.833vw]",
          type === "currentSlide" ? "text-gray-dark" : "text-white",
        )}
      >
        {description}
      </span>
      <div
        className={cn(
          "mt-[0.781vw] h-px w-full",
          type === "currentSlide" ? "bg-gray-dark" : "bg-white",
        )}
      />
      <div
        className={
          "flex flex-row gap-[0.625vw] ml-auto items-center mt-[0.625vw] mr-px"
        }
      >
        <span
          className={cn(
            "text-[0.729vw] font-medium font-outfit  uppercase",
            type === "currentSlide" ? "text-gray-light" : "text-white",
          )}
        >
          Show game
        </span>
        {type === "currentSlide" ? (
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={"w-[1.406vw] h-[1.406vw]"}
          >
            <rect
              width="26.9122"
              height="26.8252"
              rx="13.4126"
              fill="#1E1E1E"
            />
            <path
              d="M13.3554 21.4602L20.4531 13.5032L13.3554 5.54628M19.4673 13.5032L5.07472 13.5032"
              stroke="#FFFCF5"
              strokeMiterlimit="10"
              strokeLinecap="square"
            />
          </svg>
        ) : (
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={"w-[1.406vw] h-[1.406vw]"}
          >
            <rect
              width="26.8357"
              height="26.7764"
              rx="13.3882"
              fill="#FFFCF5"
            />
            <path
              d="M13.318 21.4211L20.3955 13.4787L13.318 5.53616M19.4125 13.4787L5.06083 13.4787"
              stroke="#1E1E1E"
              strokeMiterlimit="10"
              strokeLinecap="square"
            />
          </svg>
        )}
      </div>
    </Link>
  );
};

export default function Games() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex: 2,
    align: "center",
    containScroll: false,
    slidesToScroll: 1,
    skipSnaps: true,
  });
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const slides = [
    {
      tags: ["L1appchain", "Lucky"],
      network: "Testnet",
      image: lotteryGameImg,
      gameName: "Lottery",
      description:
        "Lottery round lasts 24 hours, user buys ticket and chooses 6 numbers on it. At the end of the round, a random 6-digit win number is generated and user can claim his reward if he guessed the numbers or a part of them. The percentage of winnings depends on the number of guessed numbers in the ticket.",
      link: "#",
    },
    {
      tags: ["L1appchain", "Lucky"],
      network: "Testnet",
      image: lotteryGameImg,
      gameName: "Lottery",
      description:
        "Lottery round lasts 24 hours, user buys ticket and chooses 6 numbers on it. At the end of the round, a random 6-digit win number is generated and user can claim his reward if he guessed the numbers or a part of them. The percentage of winnings depends on the number of guessed numbers in the ticket.",
      link: "#",
    },
    {
      tags: ["L1appchain", "Lucky"],
      network: "Testnet",
      image: lotteryGameImg,
      gameName: "Lottery",
      description:
        "Lottery round lasts 24 hours, user buys ticket and chooses 6 numbers on it. At the end of the round, a random 6-digit win number is generated and user can claim his reward if he guessed the numbers or a part of them. The percentage of winnings depends on the number of guessed numbers in the ticket.",
      link: "#",
    },
    {
      tags: ["L1appchain", "Lucky"],
      network: "Testnet",
      image: lotteryGameImg,
      gameName: "Lottery",
      description:
        "Lottery round lasts 24 hours, user buys ticket and chooses 6 numbers on it. At the end of the round, a random 6-digit win number is generated and user can claim his reward if he guessed the numbers or a part of them. The percentage of winnings depends on the number of guessed numbers in the ticket.",
      link: "#",
    },
    {
      tags: ["L1appchain", "Lucky"],
      network: "Testnet",
      image: lotteryGameImg,
      gameName: "Lottery",
      description:
        "Lottery round lasts 24 hours, user buys ticket and chooses 6 numbers on it. At the end of the round, a random 6-digit win number is generated and user can claim his reward if he guessed the numbers or a part of them. The percentage of winnings depends on the number of guessed numbers in the ticket.",
      link: "#",
    },
    {
      tags: ["L1appchain", "Lucky"],
      network: "Testnet",
      image: lotteryGameImg,
      gameName: "Lottery",
      description:
        "Lottery round lasts 24 hours, user buys ticket and chooses 6 numbers on it. At the end of the round, a random 6-digit win number is generated and user can claim his reward if he guessed the numbers or a part of them. The percentage of winnings depends on the number of guessed numbers in the ticket.",
      link: "#",
    },
    {
      tags: ["L1appchain", "Lucky"],
      network: "Testnet",
      image: lotteryGameImg,
      gameName: "Lottery",
      description:
        "Lottery round lasts 24 hours, user buys ticket and chooses 6 numbers on it. At the end of the round, a random 6-digit win number is generated and user can claim his reward if he guessed the numbers or a part of them. The percentage of winnings depends on the number of guessed numbers in the ticket.",
      link: "#",
    },
  ];

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);

    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className={"px-[10.938vw] mt-[10.417vw] flex flex-col"}>
      <span
        className={
          "font-kavaimo z-[1] -mb-[2.604vw] text-[5.208vw] text-yellow leading-[80%]"
        }
      >
        Games
      </span>
      <div className={"overflow-hidden w-full"} ref={emblaRef}>
        <div className={"flex flex-row w-full"}>
          {slides.map((slide, index) => (
            <Slide
              key={index}
              tags={slide.tags}
              network={slide.network}
              image={slide.image}
              gameName={slide.gameName}
              description={slide.description}
              link={slide.link}
              type={
                index == selectedIndex
                  ? "currentSlide"
                  : index + 1 == selectedIndex || index - 1 == selectedIndex
                    ? "nextSlide"
                    : "slide"
              }
              className={
                index != selectedIndex
                  ? index + 1 == selectedIndex
                    ? "-mr-[3.5%]"
                    : index - 1 == selectedIndex
                      ? "-ml-[3.5%]"
                      : index + 2 == selectedIndex
                        ? "-mr-[7%]"
                        : index - 2 == selectedIndex
                          ? "-ml-[7%]"
                          : index < selectedIndex
                            ? "-mr-[5%]"
                            : "-ml-[5%]"
                  : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
