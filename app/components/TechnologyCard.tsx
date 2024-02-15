'use client'

import Image from "next/image";
import { OutlineDecoration } from "./OutlineDecoration";

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

    const slideStyles = 'flex-grow-0 overflow-hidden inset-0 min-w-[90vw] md:min-w-[80vw] lg:min-w-[31vw] h-full w-full p-4 flex flex-col justify-end'

    return (
        <OutlineDecoration className={props.isSlide ? `border ${borderColor} w-full` : "m-5 flex-grow relative max-w-[400px] justify-self-center group"} sizeMode={1} colorVariant={props.variant} hoverMode={1} orientation={0}>
            <div className={props.isSlide ? slideStyles : "m-5 h-full flex flex-col gap-2"}>
                <div className="flex justify-between">
                <div className={`text-2xl ${props.isSlide ? `max-w-[250px]` : "2xl:max-w-[250px] xl:max-w-[210px] lg:max-w-[170px] md:max-w-[130px] max-w-[250px]"}`}>{props.name}</div>
                    {props.variant == 0 && (
                        <svg width="55" height="37" viewBox="0 0 55 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="18.3848" y="0.707107" width="25" height="25" transform="rotate(45 18.3848 0.707107)" fill="#212121" stroke="#F9F8F4" />
                            <rect x="36.3848" y="0.707107" width="25" height="25" transform="rotate(45 36.3848 0.707107)" fill="#212121" stroke="#D2FF00" />
                        </svg>
                    )}
                    {props.variant == 1 && (
                        <svg width="62" height="49" viewBox="0 0 62 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="18.3848" y="6.70711" width="25" height="25" transform="rotate(45 18.3848 6.70711)" fill="#212121" stroke="#D2FF00" />
                            <rect x="37.041" y="1.09187" width="33" height="33" rx="16.5" transform="rotate(45 37.041 1.09187)" fill="#212121" stroke="#56EBFF" />
                        </svg>
                    )}
                    {props.variant == 2 && (
                        <svg width="71" height="49" viewBox="0 0 71 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="24.0415" y="1.09187" width="33" height="33" rx="16.5" transform="rotate(45 24.0415 1.09187)" fill="#212121" stroke="#F9F8F4" />
                            <rect x="46.0825" y="1.09187" width="33" height="33" rx="16.5" transform="rotate(45 46.0825 1.09187)" fill="#212121" stroke="#56EBFF" />
                        </svg>
                    )}
                </div>
                <div className="font-mono text-sm font-normal pt-3 w-full">{props.description}</div>
                <div className="w-full flex flex-col items-center py-5 justify-between flex-grow">
                <div className="flex-grow"></div>
                <Image src={props.image} width={props.imageW} height={props.imageH} alt="our_tech_upper" className="h-[200px] lg:h-[300px]" ></Image>
                <div className="flex-grow"></div>

                {/*<Button*/}
                {/*    link={props.link}*/}
                {/*    colorVariant={props.variant}*/}
                {/*    text={'Explore'}*/}
                {/*    className={`${props.isSlide ? "mb-0 my-5": "mb-5 my-0"} text-lg w-full h-[50px]`}*/}
                {/*/>*/}

                </div>
            </div>
        </OutlineDecoration>
    )
}