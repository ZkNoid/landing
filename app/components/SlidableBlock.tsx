'use client'

import {Slider} from "./Slider";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {MoreGamesApplicationCard} from "./ApplicationCard";

const sliderComponent = (asComponent: React.FC<any>, slides: any[], isApplicationComponent?: boolean) => {
    return (
        <>
            {isApplicationComponent ? (
                <Slider>
                    {slides.map((item, index) => (
                        <>
                            {asComponent({...item, isSlide: true, key: index})}
                        </>
                    ))}
                    <MoreGamesApplicationCard isSlide={true}/>
                </Slider>
            ) : (
                <Slider>
                    {slides.map((item, index) => (
                        <>
                            {asComponent({...item, isSlide: true, key: index})}
                        </>
                    ))}
                </Slider>
            )}
        </>
    )
}

const technologiesWrap = (asComponent: React.FC<any>, slides: any[]) => {
    return (
        <div className={'flex flex-col'}>
            <Image src={'/image/our_tech_upper_line.svg'} width={1106} height={142} alt="our_tech_upper"
                   className="p-5 px-24 lg:px-[11vw] w-full hidden lg:block"></Image>
            <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-10">
                {slides.map((item, index) => (
                    <>
                        {asComponent({...item, isSlide: false, key: index})}
                    </>
                ))}
            </div>
        </div>
    )
}

const applicationsWrap = (asComponent: React.FC<any>, slides: any[]) => {
    return (
        <div className={'flex flex-col'}>
            <div
                className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-5 justify-around pt-5 flex-col lg:flex-row auto-cols-[1fr]">
                {slides.map((item, index) => (
                    <>
                        {asComponent({...item, isSlide: false, key: index})}
                    </>
                ))}
                <MoreGamesApplicationCard isSlide={false}/>
            </div>
        </div>
    )
}

const teamWrap = (asComponent: React.FC<any>, slides: any[]) => {
    return (
        <div className="flex flex-col min-h-[1100px]">
            <Image src={'/image/team_upper_line.svg'} width={1106} height={298} alt="our_tech_upper"
                   className="hidden md:block p-5 px-24 lg:px-[13%] w-full"></Image>
            <div className="flex flex-col md:flex-row justify-around">
                {slides.map((item, index) => (
                    <>
                        {asComponent({...item, isSlide: false, key: index})}
                    </>
                ))}
            </div>
        </div>
    )
}

export const SlidableBlock = (
    {
        asComponent, slides, type, isSlider, visibleOn
    } : {
        asComponent: React.FC<any>, slides: any[], type: 'technologies' | 'applications' | 'team', isSlider: boolean, visibleOn: 'desktop' | 'mobile' | 'all'
    }
) => {

    const [windowWidth, setWindowWidth] = useState<number>(0)

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, []);

    if (isSlider)
        if (visibleOn === "all")
            return sliderComponent(asComponent, slides, type === "applications")
        else if (visibleOn === "desktop" && windowWidth >= 1024)
            return sliderComponent(asComponent, slides, type === "applications")
        else if (visibleOn === "mobile" && windowWidth < 1024)
            return sliderComponent(asComponent, slides, type === "applications")
        else
            switch (type) {
                case "technologies":
                    return technologiesWrap(asComponent, slides)
                case "applications":
                    return applicationsWrap(asComponent, slides)
                case "team":
                    return teamWrap(asComponent, slides)
            }
    else
        switch (type) {
            case "technologies":
                return technologiesWrap(asComponent, slides)
            case "applications":
                return applicationsWrap(asComponent, slides)
            case "team":
                return teamWrap(asComponent, slides)
        }

}