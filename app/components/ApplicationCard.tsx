'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { OutlineDecoration } from "./OutlineDecoration";

interface ApplicationCardProps {
    name: string;
    description: string;
    link: string;
    image: string;
    imageW: number;
    imageH: number;
    variant: 0 | 1 | 2;
    isBordered: boolean;
    isWrapped: boolean;
    isSlide?: boolean;
}

export const ApplicationCard = (props: ApplicationCardProps) => {
    const borderColor = props.variant == 0 ? "hover/outline:border-left-accent" 
        : props.variant == 1 ? "hover/outline:border-middle-accent"
        : "hover/outline:border-right-accent";

    const innerBorderColor = props.variant == 0 ? "group-hover/inner:border-left-accent"
        : props.variant == 1 ? "group-hover/inner:border-middle-accent"
        : "group-hover/inner:border-right-accent";

    const slideStyles = 'w-full h-full inset-0'

    return (
        <OutlineDecoration sizeMode={1} colorVariant={props.variant} hoverMode={1} orientation={0} className={`border ${borderColor} ${props.isSlide ? slideStyles : ''}`}>
            <div className={`group/inner w-full h-full`}>
                <div className="p-6 h-full flex flex-col">
                    <div className="text-3xl mb-3">{props.name}</div>
                    <div className="flex flex-col items-center h-full">
                        {props.isWrapped ? (
                            <div className={`${props.isBordered ? `border border-[#fff] ${innerBorderColor}` : ''} w-full p-10 flex justify-center items-center`}>
                                <Image src={props.image} width={props.imageW} height={props.imageH} alt="our_tech_upper" className={'pointer-events-none object-center object-contain'}/>
                            </div>
                        ) : (
                            <Image src={props.image} width={props.imageW} height={props.imageH} alt="our_tech_upper" className={`pointer-events-none object-center object-contain py-4 ${props.isBordered ? `border border-[#fff] ${innerBorderColor}` : ''}`}/>
                        )}
                        <div className="flex-grow "></div>
                        <div className="font-mono text-xl font-normal py-5 px-3">{props.description}</div>
                        <div className="flex-grow "></div>
                        
                        <Button
                            link={props.link}
                            colorVariant={props.variant}
                            text={'Play now!'}
                            className={'text-lg w-full h-[50px]'}
                        />
                    </div>
                </div>
            </div>
        </OutlineDecoration>
    )
}

export const MoreGamesApplicationCard = ({isSlide}: {isSlide?: boolean}) => {
    const slideStyles = 'w-full h-full inset-0'

    return (
        <OutlineDecoration sizeMode={1} colorVariant={2} hoverMode={1} orientation={0} className={`border hover/outline:border-right-accent h-[250px] lg:h-full ${isSlide ? slideStyles : ''}`}>
            <Link href={"https://app.zknoid.io/"} className={`relative w-full h-full group inline-block hover:opacity-80 ease-in-out`}>
                <Image
                    src={'/image/applications/more-games.svg'}
                    alt={'our_tech_upper'}
                    width={1080}
                    height={360}
                    className={'object-cover object-center h-full'}
                />
                <div className={'absolute top-0 bottom-0 w-full h-full flex flex-col justify-center items-center'}>
                    <Image
                        src={'/image/applications/more-games-text.svg'}
                        alt={'our_tech_upper'}
                        width={240}
                        height={140}
                        className={'object-cover object-center'}
                    />
                </div>
            </Link>
        </OutlineDecoration>
    )
}