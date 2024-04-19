'use client'

import { AnimatePresence, motion, useCycle, useMotionValueEvent, useScroll } from "framer-motion"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {MOBILE_HEADER_SOCIALS, SOCIALS} from "../constants/socials";
import {LaunchAppButton} from "@/app/components/LaunchAppButton";


export const MobileNavbar = () => {

    const [hidden, setHidden] = useState(false)
    const [isOpen, toggleOpen] = useCycle(false, true)
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious()
        // @ts-ignore
        if (latest > previous && latest > 150 && !isOpen) {
            setHidden(true)
        }
        // @ts-ignore
        else if (isOpen && latest - previous >= 20 || previous - latest >= 20 && isOpen) {
            toggleOpen()
        }

        else setHidden(false)
    })

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: '-100%' }
            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: 0.35, ease: 'easeInOut', type: 'just' }}
            className="sticky top-0 inset-x-0 p-6 z-50 flex lg:hidden bg-bg-dark"
        >
            <nav className={`container mx-auto z-50 bg-bg-dark flex flex-row items-center justify-between`}>
                <Link
                    href={'https://zknoid.io'}
                    target="_blank" rel="noopener noreferrer"
                    className={'hover:opacity-80 ease-in-out cursor-pointer'}
                >
                    <Image
                        src={'/image/zknoid-logo.svg'}
                        alt={'ZkNoid logo'}
                        width={130}
                        height={47}
                    />
                </Link>
                <div className={'flex flex-row items-center gap-6'}>
                    <div className={`w-full flex-row gap-2 ${isOpen ? 'hidden' : 'flex'}`}>
                        {MOBILE_HEADER_SOCIALS.map(social => (
                            <Link key={social.name} className="cursor-pointer flex items-center justify-center"
                                href={social.link} target="_blank" rel="noopener noreferrer">
                                <Image src={social.image} className="cursor-pointer" width={30}
                                    height={30} alt={social.name}></Image>
                            </Link>
                        ))}
                    </div>
                    <motion.button
                        animate={isOpen ? 'show' : 'hide'}
                        onClick={() => toggleOpen()}
                        className={`flex flex-col space-y-1.5 relative z-50`}
                    >
                        <motion.span
                            variants={{
                                hide: {
                                    rotate: 0,
                                },
                                show: {
                                    rotate: 45,
                                    y: 9
                                },
                            }}
                            className="w-[30px] h-[3px] bg-[#fff] block"
                        ></motion.span>
                        <motion.span
                            variants={{
                                hide: {
                                    opacity: 1,
                                    transition: { duration: 0.1 }
                                },
                                show: {
                                    opacity: 0,
                                    transition: { duration: 0.1 }
                                },
                            }}
                            className="w-[30px] h-[3px] bg-[#fff] block"
                        ></motion.span>
                        <motion.span
                            variants={{
                                hide: {
                                    rotate: 0,
                                },
                                show: {
                                    rotate: -45,
                                    y: -9
                                },
                            }}
                            className="w-[30px] h-[3px] bg-[#fff] block"
                        ></motion.span>
                    </motion.button>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            variants={{
                                open: {
                                    x: '0%',
                                    transition: {
                                        type: 'spring',
                                        bounce: 0.1,
                                        duration: 0.35,
                                        ease: 'easeInOut'
                                    }
                                },
                                closed: {
                                    x: '100%',
                                    transition: {
                                        type: 'spring',
                                        bounce: 0.1,
                                        duration: 0.35,
                                        ease: 'easeInOut'
                                    }
                                }
                            }}
                            initial={'closed'}
                            animate={'open'}
                            exit={'closed'}
                            className={'fixed inset-0 container mx-auto md:mr-0 flex flex-row justify-end'}
                        >
                            <div
                                className={'w-3/5 h-screen bg-bg-dark flex flex-col gap-4 px-4 pb-4 pt-[80px] text-xl z-50'}>
                                <Link href={'https://docs.zknoid.io/'} target="_blank" rel="noopener noreferrer">
                                    Docs
                                </Link>
                                <Link href={'https://zknoid.medium.com/'} target="_blank" rel="noopener noreferrer">
                                    Blog
                                </Link>
                                <p>
                                    Social media:
                                </p>
                                <div className={'w-full flex flex-row gap-2'}>
                                    {SOCIALS.map(social => (
                                        <Link key={social.name} className="cursor-pointer flex items-center justify-center"
                                            href={social.link} target="_blank" rel="noopener noreferrer">
                                            <Image src={social.image} className="cursor-pointer" width={40}
                                                height={40} alt={social.name}></Image>
                                        </Link>
                                    ))}
                                </div>
                                <div className={'w-full h-full flex flex-col justify-end pb-10'}>
                                    <LaunchAppButton visibleOn='all' fullWidth/>
                                </div>
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    )
}