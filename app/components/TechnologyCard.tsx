'use client'

import Image from "next/image";
import { OutlineDecoration } from "./OutlineDecoration";
import { Button } from "@/app/components/Button";

interface TechnologyCardProps {
    name: string;
    description: string;
    image: string;
    imageW: number;
    imageH: number;
    variant: 0 | 1 | 2
    link: string;
    isSlide?: boolean;
}

export const TechnologyCard = (props: TechnologyCardProps) => {
    const borderColor = props.variant == 0 ? "hover/outline:border-left-accent"
        : props.variant == 1 ? "hover/outline:border-middle-accent"
            : "hover/outline:border-right-accent";

    const slideStyles = 'w-full h-full inset-0'

    return (
        <OutlineDecoration className={props.isSlide ? `border ${borderColor} ${slideStyles}` : "max-w-[720px] relative w-full group"} sizeMode={1} colorVariant={props.variant} hoverMode={1} orientation={0}>
            <div className={'flex flex-col justify-between items-center h-full p-3 lg:p-5'}>

                <div className={'w-full h-full flex flex-col gap-2 justify-between'}>
                    <div className={'flex flex-row justify-between items-center'}>
                        <div
                            className={`font-bold text-mobile-headline-2 lg:text-headline-2 ${props.isSlide ? "max-w-[200px]" : "max-w-[200px] xl:max-w-[240px] 2xl:max-w-[400px]"}`}
                        >
                            {props.name}
                        </div>

                        {props.variant == 0 && (
                            <svg width="55" height="37" viewBox="0 0 55 37" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="18.3848" y="0.707107" width="25" height="25"
                                      transform="rotate(45 18.3848 0.707107)" fill="#212121" stroke="#F9F8F4"/>
                                <rect x="36.3848" y="0.707107" width="25" height="25"
                                      transform="rotate(45 36.3848 0.707107)" fill="#212121" stroke="#D2FF00"/>
                            </svg>
                        )}
                        {props.variant == 1 && (
                            <svg width="62" height="49" viewBox="0 0 62 49" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="18.3848" y="6.70711" width="25" height="25"
                                      transform="rotate(45 18.3848 6.70711)" fill="#212121" stroke="#D2FF00"/>
                                <rect x="37.041" y="1.09187" width="33" height="33" rx="16.5"
                                      transform="rotate(45 37.041 1.09187)" fill="#212121" stroke="#56EBFF"/>
                            </svg>
                        )}
                        {props.variant == 2 && (
                            <svg width="71" height="49" viewBox="0 0 71 49" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="24.0415" y="1.09187" width="33" height="33" rx="16.5"
                                      transform="rotate(45 24.0415 1.09187)" fill="#212121" stroke="#F9F8F4"/>
                                <rect x="46.0825" y="1.09187" width="33" height="33" rx="16.5"
                                      transform="rotate(45 46.0825 1.09187)" fill="#212121" stroke="#56EBFF"/>
                            </svg>
                        )}
                    </div>

                    <div
                        className="font-plexmono text-mobile-main-text lg:text-regular-text w-full"
                    >
                        {props.description}
                    </div>
                </div>

                <div className={'w-full h-full flex justify-center items-center py-2 lg:pt-6 lg:pb-4'}>
                    <Image
                        src={props.image}
                        alt={'our_tech_upper'}
                        width={props.imageW}
                        height={props.imageH}
                        className={"lg:h-[400px] lg:w-auto object-contain object-center"}
                    />
                </div>

                <div className={'w-full h-full flex flex-col justify-end'}>
                    <Button
                        text={'Explore'}
                        link={props.link}
                        colorVariant={props.variant}
                        className={'w-full h-[50px]'}
                    />
                </div>

            </div>
        </OutlineDecoration>
    )
}