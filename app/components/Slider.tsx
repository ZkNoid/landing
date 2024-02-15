'use client'

import {motion, useMotionValue} from "framer-motion";
import {ReactNode, useEffect, useRef, useState} from "react";

const Dots = ({ slidesAmount, activeSlide, slideLimiter }: { slidesAmount: number, activeSlide: number, slideLimiter: 1 | 3 }) => {
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


export const Slider = ({children}: { children: ReactNode }) => {

    const DRAG_BUFFER = 50

    const [slidesAmount, setSlidesAmount] = useState<number>(0)
    const [slideIndex, setSlideIndex] = useState<number>(0)
    const [translateX, setTranslateX] = useState<number>(0)
    const [slideLimiter, setSlideLimiter] = useState<1 | 3>(1)
    const dragX = useMotionValue<number>(0)
    const sliderRef = useRef<HTMLDivElement>(null)

    const onDragEnd = () => {
        const x = dragX.get()

        if (x <= -DRAG_BUFFER) {
            if (slideIndex + slideLimiter != slidesAmount)
                setSlideIndex(slideIndex + 1)
        }
        else if (x >= DRAG_BUFFER) {
            if (slideIndex != 0)
                setSlideIndex(slideIndex - 1)
        }
    }

    useEffect(() => {
        setSlideLimiter(window.innerWidth <= 1024 ? 1 : 3)
        // @ts-ignore
        const childrenLength = sliderRef.current.children.length
        // @ts-ignore
        const width = sliderRef.current.offsetWidth
        const slideWidth = width / childrenLength
        setTranslateX(slideWidth * 100 / width)
        setSlidesAmount(childrenLength)
    }, []);

    return (
        <div className='flex flex-col justify-center w-full relative'>
            <div className={'flex flex-row overflow-hidden w-full'}>
                <motion.div
                    ref={sliderRef}
                    initial={false}
                    drag='x'
                    dragConstraints={{left: 0, right: 0}}
                    animate={{
                        translateX: slideIndex == 0 ? 0 : `-${translateX * slideIndex}%`
                    }}
                    onDragEnd={onDragEnd}
                    style={{x: dragX}}
                    className='flex gap-2 lg:gap-4 cursor-grab active:cursor-grabbing'
                >
                    {children}
                </motion.div>
            </div>
            <Dots slidesAmount={slidesAmount} activeSlide={slideIndex} slideLimiter={slideLimiter}/>
        </div>
    )
}