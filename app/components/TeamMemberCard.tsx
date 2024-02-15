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

    const slideStyles = 'flex-grow-0 overflow-hidden inset-0 min-w-[90vw] md:min-w-[80vw] lg:min-w-[31vw]'


    return (
        <div className={props.isSlide ? slideStyles : "m-5 md:w-[33%] max-w-[400px] md:top-0 md:relative"}>
            <div className={`md:absolute mx-5 h-full flex flex-col ${props.variant != 1 && 'top-[-10vw]'}`}>
                <div className="w-full flex flex-col items-center pb-5 justify-between">
                    <Image src={props.image} width={props.imageW} height={props.imageH} alt="our_tech_upper" className="" ></Image>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex justify-space-between justify-between w-full pb-2">
                        <div className="text-2xl font-bold">{props.name}</div>
                    </div>
                    <div className={`text-lg font-semibold w-full ${color}`}>{props.position}</div>
                    <div className="font-mono text-sm font-normal w-full">{props.children}</div>
                    <div className="flex-grow "></div>
                </div>
            </div>
        </div>
    )
}