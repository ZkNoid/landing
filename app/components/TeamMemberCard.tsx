'use client'

import Image from "next/image";
import { ReactNode } from "react";

interface TeamMemberCardProps {
    name: string;
    position: string;
    image: string;
    imageW: number;
    imageH: number;
    variant: 0 | 1 | 2;
    children: ReactNode;
    isSlide?: boolean;
}

export const TeamMemberCard = (props: TeamMemberCardProps) => {
    const color = props.variant == 0 ? 'text-left-accent' : props.variant == 1 ? 'text-middle-accent' : 'text-right-accent';

    const slideStyles = 'w-full md:w-fit h-full inset-0'


    return (
        <div className={props.isSlide ? slideStyles : "m-5 lg:w-[33%] max-w-[400px] lg:top-0 lg:relative"}>
            <div className={`lg:absolute lg:mx-5 h-full flex flex-col ${props.variant != 1 && 'top-[-10vw]'}`}>
                <div className="w-full flex flex-col lg:items-center pb-5 justify-start items-start lg:justify-between">
                    <Image src={props.image} width={props.imageW} height={props.imageH} alt="our_tech_upper" className="" ></Image>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex justify-space-between justify-between w-full pb-2">
                        <div className="font-bold text-mobile-headline-2 lg:text-headline-2">{props.name}</div>
                    </div>
                    <div className={`font-bold text-mobile-headline-3 lg:text-headline-3 w-full ${color}`}>{props.position}</div>
                    <div className="font-plexmono text-mobile-main-text lg:text-regular-text w-full">{props.children}</div>
                    <div className="flex-grow"></div>
                </div>
            </div>
        </div>
    )
}