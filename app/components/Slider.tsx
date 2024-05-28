"use client";

import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { Children, ReactNode, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const Dots = ({
  slidesAmount,
  activeSlide,
  slideLimiter,
}: {
  slidesAmount: number;
  activeSlide: number;
  slideLimiter: 1 | 3;
}) => {
  const dotsCount = Math.ceil(slidesAmount / slideLimiter);
  const activeDotIndex = Math.floor(activeSlide / slideLimiter);

  return (
    <div className="relative flex flex-row justify-center gap-2 py-6">
      {[...Array(dotsCount)].map((_, index) => {
        const isActive = activeDotIndex === index;
        return (
          <motion.div
            key={index}
            className="w-[8px] h-[8px] bg-right-accent opacity-80"
            initial={{ scale: isActive ? 1.5 : 1, opacity: isActive ? 1 : 0.5 }}
            animate={{
              scale: isActive ? 1.5 : 1,
              opacity: isActive ? 1 : 0.5,
            }}
          />
        );
      })}
    </div>
  );
};

export const Slider = ({ children }: { children: ReactNode }) => {
  const [slidesAmount, setSlidesAmount] = useState<number>(0);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);
  const [slideLimiter, setSlideLimiter] = useState<1 | 3>(1);
  const [isDragHelperVisible, setIsDragAnimationVisible] = useState(false);
  const dragX = useMotionValue<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      containScroll: false,
      align: 'start'
    },
    []
  );


  return (
    <div className="flex flex-col justify-center w-full relative h-full">
      <div className={"flex flex-row overflow-hidden w-full"} ref={emblaRef}>
        <div className="flex h-full w-full">
          {Children.map(children, (child, i) => (
            <div className={`h-full py-2 flex-[0_0_90%] lg:flex-[0_0_33%] [&:not(:first-child)]:pl-[2.778vw]`} key={i}>
              {child}
            </div>
          ))}
        </div>
      </div>
      {/* <Dots
        slidesAmount={slidesAmount}
        activeSlide={slideIndex}
        slideLimiter={slideLimiter}
      /> */}
    </div>
  );
};
