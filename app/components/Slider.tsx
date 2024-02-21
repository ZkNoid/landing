'use client'

import {AnimatePresence, motion, useMotionValue} from "framer-motion";
import {Children, ReactNode, useEffect, useRef, useState} from "react";

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


export const Slider = ({ children }: { children: ReactNode }) => {

    const [slidesAmount, setSlidesAmount] = useState<number>(0)
    const [slideIndex, setSlideIndex] = useState<number>(0)
    const [translateX, setTranslateX] = useState<number>(0)
    const [slideLimiter, setSlideLimiter] = useState<1 | 3>(1)
    const [isDragHelperVisible, setIsDragAnimationVisible] = useState(false)
    const dragX = useMotionValue<number>(0)
    const sliderRef = useRef<HTMLDivElement>(null)

    const DRAG_BUFFER = slideLimiter == 3 ? 50 : 5

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

    const DragHelper = () => {
        return (
            <motion.div
                className={`absolute z-10 ${slideLimiter === 1 ? 'top-1/3 left-3/4' : 'top-1/3 left-[65%]'}`}
                initial={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{ease: "easeOut", duration: 0.7}}
            >
                <div className={'bg-left-accent w-[100px] h-[100px] rounded-full flex justify-center items-center relative z-0'}>
                    <p className={'text-center text-[#000]'}>Drag</p>
                </div>
                <motion.div
                    aria-hidden
                    className={'bg-left-accent/70 w-[100px] h-[100px] rounded-full absolute top-0 left-0 -z-10'}
                    variants={{
                        hidden: {
                            scale: 1,
                            opacity: 0
                        },
                        visible: {
                            scale: 1.3,
                            opacity: 1,
                            transition: {ease: "easeIn", duration: 1, repeat: Infinity, repeatType: 'reverse'}
                        }
                    }}
                    initial={'hidden'}
                    animate={'visible'}
                />
            </motion.div>
        )
    }

    useEffect(() => {
        const updateSlideLimiter = () => {
            const innerWidth = window.innerWidth
            setSlideLimiter(innerWidth <= 1024 ? 1 : 3)
            const childrenLength = Children.count(children)
            // @ts-ignore
            const width = sliderRef.current.offsetWidth
            const slideWidth = width / childrenLength
            setTranslateX(slideWidth * 100 / width)
            setSlidesAmount(childrenLength)
            setIsDragAnimationVisible(innerWidth <= 1024 ? false : childrenLength > 3)
        }

        window.addEventListener('resize', updateSlideLimiter);
        updateSlideLimiter()

        return () => window.removeEventListener('resize', updateSlideLimiter);
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
                        translateX: slideIndex == 0 ? 0 : `-${translateX * slideIndex}%`,
                        transition: {
                            ease: 'easeInOut',
                            duration: 0.35
                        }
                    }}

                    onDragStart={() => {isDragHelperVisible && setIsDragAnimationVisible(false)}}
                    onDragEnd={onDragEnd}
                    style={{x: dragX}}
                    className='flex gap-4 cursor-grab active:cursor-grabbing lg:mr-2'
                >
                    <AnimatePresence initial={false}>
                        {isDragHelperVisible && <DragHelper/>}
                    </AnimatePresence>

                    {Children.map(children, child => (
                        <div className={`h-full w-[85vw] lg:w-full py-2`}>
                            {child}
                        </div>
                    ))}
                </motion.div>
            </div>
            <Dots slidesAmount={slidesAmount} activeSlide={slideIndex} slideLimiter={slideLimiter}/>
        </div>
    )
}