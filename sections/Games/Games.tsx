"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/helpers";
import { useCallback, useEffect, useState } from "react";
import ArrowButton from "@/shared/ArrowButton";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { IStrapiData, IStrapiImage, IStrapiResponse } from "@/lib/strapi/types";
import { strapiRequest } from "@/lib/strapi/strapiRequest";
import Skeleton from "@/shared/Skeleton";

const Slide = ({
  gameName,
  imageID,
  tags,
  network,
  description,
  type,
  className,
  onClick,
}: {
  gameName: string;
  imageID: string;
  tags: string[];
  network: string;
  description: string;
  type: "currentSlide" | "nextSlide" | "slide";
  className?: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-[2.353vw] lg:!rounded-[0.521vw] transition-transform min-w-0 flex-[0_0_85%] lg:!flex-[0_0_25%] px-[3.529vw] lg:!px-[0.781vw] pt-[3.529vw] lg:!pt-[0.781vw] pb-[2.353vw] lg:!pb-[0.521vw] flex flex-col",
        type === "currentSlide"
          ? "bg-white z-[2]"
          : type === "nextSlide"
            ? "bg-gray-light lg:!scale-[0.85] z-[1]"
            : "bg-black scale-[0.75]",
        className,
      )}
    >
      <div className={"flex w-full flex-row items-center justify-between"}>
        <div
          className={
            "flex flex-row gap-[2.353vw] lg:!gap-[0.521vw] items-center"
          }
        >
          {tags &&
            tags.map((tag, index) => (
              <span
                key={index}
                className={cn(
                  "rounded-full py-[0.824vw] lg:!py-[0.156vw] border px-[2vw] lg:!px-[0.313vw] text-[3.294vw] lg:!text-[0.729vw] text-white font-helvetica-now leading-[110%]",
                  type === "currentSlide"
                    ? "border-gray-light bg-gray-light"
                    : "border-white",
                )}
              >
                {tag}
              </span>
            ))}
        </div>
        {network && (
          <span
            className={cn(
              "rounded-full py-[0.824vw] lg:!py-[0.156vw] border px-[2vw] lg:!px-[0.313vw] text-[3.294vw] lg:!text-[0.729vw] text-white font-helvetica-now leading-[110%]",
              type === "currentSlide"
                ? "border-gray-light bg-gray-light"
                : "border-white",
            )}
          >
            {network}
          </span>
        )}
      </div>
      <div
        className={
          "mt-[2.353vw] lg:!mt-[0.781vw] rounded-[2.353vw] lg:!rounded-[0.521vw] w-full h-[32vw] lg:!h-[10.938vw] overflow-hidden"
        }
      >
        <Image
          src={`https://res.cloudinary.com/dw4kivbv0/image/upload/w_800,f_auto,q_auto:best/${imageID}`}
          crossOrigin="anonymous"
          width={350}
          height={350}
          alt={"Slide image"}
          className={"w-full h-full object-center object-cover"}
        />
      </div>
      <span
        className={cn(
          "mt-[2.353vw] lg:!mt-[0.521vw] font-helvetica-now font-medium text-[3.765vw] lg:!text-[0.833vw]",
          type === "currentSlide" ? "text-gray-dark" : "text-white",
        )}
      >
        {gameName}
      </span>
      <span
        className={cn(
          "mt-[1.176vw] mb-auto text-left lg:!mt-[0.26vw] font-helvetica-now text-[3.294vw] lg:!text-[0.833vw]",
          type === "currentSlide" ? "text-gray-dark" : "text-white opacity-80",
        )}
      >
        {description}
      </span>
      <div
        className={cn(
          "mt-[3.529vw] lg:!mt-[0.781vw] h-px w-full",
          type === "currentSlide" ? "bg-gray-dark" : "bg-white",
        )}
      />
      <div
        className={
          "flex hover:opacity-80 flex-row gap-[1.176vw] lg:!gap-[0.625vw] ml-auto items-center mt-[2.353vw] lg:!mt-[0.625vw] mr-px"
        }
      >
        <span
          className={cn(
            "text-[3.294vw] lg:!text-[0.729vw] font-medium font-outfit  uppercase",
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
            className={
              "w-[6.353vw] lg:!w-[1.406vw] h-[6.353vw] lg:!h-[1.406vw]"
            }
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
            className={
              "w-[6.353vw] lg:!w-[1.406vw] h-[6.353vw] lg:!h-[1.406vw]"
            }
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
    </button>
  );
};

interface ISlideData extends IStrapiData {
  gameName: string;
  tags: string;
  network: string;
  description: string;
  link: string;
  centered: boolean;
  image: IStrapiImage;
}

interface ISlidesResponse extends IStrapiResponse {
  data: ISlideData[];
}

export default function Games() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex: 2,
    align: "center",
    containScroll: false,
    slidesToScroll: 1,
    skipSnaps: true,
    // loop: true,
  });
  const [mobileEmblaRef, mobileEmblaApi] = useEmblaCarousel({
    startIndex: 0,
    align: "start",
    containScroll: false,
    slidesToScroll: 1,
    skipSnaps: true,
    loop: true,
  });
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [mobileSelectedIndex, setMobileSelectedIndex] = useState<number>(0);
  const [slides, setSlides] = useState<ISlideData[]>([]);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);
  const onSelectMobile = useCallback((mobileEmblaApi: any) => {
    setMobileSelectedIndex(mobileEmblaApi.selectedScrollSnap());
  }, []);
  const router = useRouter();

  useEffect(() => {
    if (!emblaApi) return;
    if (!mobileEmblaApi) return;

    onSelect(emblaApi);
    onSelectMobile(mobileEmblaApi);

    emblaApi.on("reInit", onSelect).on("select", onSelect);
    mobileEmblaApi.on("reInit", onSelectMobile).on("select", onSelectMobile);
  }, [emblaApi, onSelect, mobileEmblaApi, onSelectMobile]);

  useEffect(() => {
    strapiRequest({
      pluralApi: "landing-games",
      populate: true,
      fetchConfig: { revalidate: 600 },
      cache: "force-cache",
    })
      .then((response: ISlidesResponse) => setSlides(response.data))
      .catch((err) => console.error(err));
  }, []);

  const positionCenteredSlide = ({
    slides,
    targetIndex,
  }: {
    slides: ISlideData[];
    targetIndex: 0 | 2;
  }) => {
    if (
      (targetIndex == 2 && slides.length < 5) ||
      (targetIndex == 0 && slides.length == 0)
    ) {
      return slides;
    }

    const centeredIndex = slides.findIndex((slide) => slide.centered);

    if (centeredIndex === -1 || centeredIndex === targetIndex) {
      return slides;
    }

    const [centeredSlide] = slides.splice(centeredIndex, 1);

    slides.splice(targetIndex, 0, centeredSlide);

    return slides;
  };

  useEffect(() => {
    emblaApi?.scrollTo(2);
  }, [slides]);

  return (
    <section
      id="games"
      className={
        "px-[4.706vw] lg:!px-[10.938vw] mt-[25.882vw] lg:!mt-[10.417vw] flex flex-col"
      }
    >
      <div
        className={
          "flex flex-row w-full justify-between items-center z-[1] mb-[3.529vw] lg:!-mb-[2.604vw]"
        }
      >
        <span
          className={
            "font-kavaimo text-[13.647vw] lg:!text-[5.208vw] text-yellow leading-[80%]"
          }
        >
          Games
        </span>
        <ArrowButton
          link={"https://app.zknoid.io/"}
          text={"Go to App"}
          className={"hidden lg:!flex"}
          openAsNewTab
        />
      </div>
      <div ref={emblaRef} className={"overflow-hidden w-full hidden lg:!block"}>
        <div className={"flex-row w-full flex"}>
          {slides.length > 0 ? (
            positionCenteredSlide({ slides: slides, targetIndex: 2 }).map(
              (slide, index) => (
                <Slide
                  key={index}
                  tags={slide.tags.split(",")}
                  network={slide.network}
                  imageID={slide.image.provider_metadata.public_id}
                  gameName={slide.gameName}
                  description={slide.description}
                  onClick={() =>
                    index == selectedIndex
                      ? router.push(slide.link)
                      : emblaApi?.scrollTo(index)
                  }
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
              ),
            )
          ) : (
            <>
              <Skeleton
                className={
                  "h-[23.438vw] w-[10.417vw] mt-[3.5vw] scale-[0.75] bg-gray-light rounded-[2.353vw] lg:!rounded-[0.521vw] transition-transform min-w-0 flex-[0_0_85%] lg:!flex-[0_0_25%] px-[3.529vw] lg:!px-[0.781vw] pt-[3.529vw] lg:!pt-[0.781vw] pb-[2.353vw] lg:!pb-[0.521vw] flex flex-col"
                }
              />
              <Skeleton
                className={
                  "h-[23.438vw] w-[10.417vw] mt-[3.5vw] lg:!scale-[0.85] z-[1] bg-gray-light rounded-[2.353vw] lg:!rounded-[0.521vw] transition-transform min-w-0 flex-[0_0_85%] lg:!flex-[0_0_25%] px-[3.529vw] lg:!px-[0.781vw] pt-[3.529vw] lg:!pt-[0.781vw] pb-[2.353vw] lg:!pb-[0.521vw] flex flex-col"
                }
              />
              <Skeleton
                className={
                  "h-[23.438vw] w-[10.417vw] mt-[3.5vw] z-[2] bg-gray-light rounded-[2.353vw] lg:!rounded-[0.521vw] transition-transform min-w-0 flex-[0_0_85%] lg:!flex-[0_0_25%] px-[3.529vw] lg:!px-[0.781vw] pt-[3.529vw] lg:!pt-[0.781vw] pb-[2.353vw] lg:!pb-[0.521vw] flex flex-col"
                }
              />
              <Skeleton
                className={
                  "h-[23.438vw] w-[10.417vw] mt-[3.5vw] lg:!scale-[0.85] z-[1] bg-gray-light rounded-[2.353vw] lg:!rounded-[0.521vw] transition-transform min-w-0 flex-[0_0_85%] lg:!flex-[0_0_25%] px-[3.529vw] lg:!px-[0.781vw] pt-[3.529vw] lg:!pt-[0.781vw] pb-[2.353vw] lg:!pb-[0.521vw] flex flex-col"
                }
              />
              <Skeleton
                className={
                  "h-[23.438vw] w-[10.417vw] mt-[3.5vw] scale-[0.75] bg-gray-light rounded-[2.353vw] lg:!rounded-[0.521vw] transition-transform min-w-0 flex-[0_0_85%] lg:!flex-[0_0_25%] px-[3.529vw] lg:!px-[0.781vw] pt-[3.529vw] lg:!pt-[0.781vw] pb-[2.353vw] lg:!pb-[0.521vw] flex flex-col"
                }
              />
            </>
          )}
        </div>
      </div>
      <div className={"overflow-hidden w-full lg:!hidden"} ref={mobileEmblaRef}>
        <div className={"flex flex-row w-full"}>
          {slides.length > 0 ? (
            positionCenteredSlide({ slides: slides, targetIndex: 0 }).map(
              (slide, index) => (
                <Slide
                  key={index}
                  tags={slide.tags.split(",")}
                  network={slide.network}
                  imageID={slide.image.provider_metadata.public_id}
                  gameName={slide.gameName}
                  description={slide.description}
                  onClick={() =>
                    index == mobileSelectedIndex
                      ? router.push(slide.link)
                      : mobileEmblaApi?.scrollTo(index)
                  }
                  type={
                    index == mobileSelectedIndex ? "currentSlide" : "nextSlide"
                  }
                />
              ),
            )
          ) : (
            <Skeleton
              className={"w-full h-[105.882vw] bg-gray-light rounded-[2.353vw]"}
            />
          )}
        </div>
      </div>
      <div
        className={
          "w-full flex flex-col items-center justify-center mt-[3.529vw] lg:!mt-[1.563vw]"
        }
      >
        <div className={"hidden lg:!flex flex-row gap-[0.182vw]"}>
          {slides.map((_, index) => (
            <motion.div
              key={index}
              className={"h-[0.313vw] rounded-full border-white border"}
              animate={
                index == selectedIndex
                  ? { backgroundColor: "#fff", width: "0.938vw" }
                  : { width: "0.313vw" }
              }
            />
          ))}
        </div>
        <div className={"flex lg:!hidden flex-row gap-[0.847vw]"}>
          {slides.map((_, index) => (
            <motion.div
              key={index}
              className={"h-[1.412vw] rounded-full border-white border"}
              animate={
                index == mobileSelectedIndex
                  ? { backgroundColor: "#fff", width: "4.235vw" }
                  : { width: "1.412vw" }
              }
            />
          ))}
        </div>
        <Link
          href={"https://app.zknoid.io/"}
          rel="noopener noreferrer"
          target={"_blank"}
          className={
            "mt-[4.706vw] lg:!hidden flex flex-col justify-center items-center py-[2.353vw] w-full bg-yellow rounded-[2.353vw]"
          }
        >
          <span
            className={
              "text-gray-light text-[3.765vw] font-medium leading-[110%] font-helvetica-now"
            }
          >
            Go to game store
          </span>
        </Link>
      </div>
    </section>
  );
}
