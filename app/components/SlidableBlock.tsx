'use client'

import {Slider} from "./Slider";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {ApplicationCard, MoreGamesApplicationCard} from "./ApplicationCard";
import {TechnologyCard} from "./TechnologyCard";
import {TeamMemberCard} from "./TeamMemberCard";

const sliderComponent = (type: 'technologies' | 'applications' | 'team', slides: any[], isApplicationComponent?: boolean) => {

    return (
        <>
            {isApplicationComponent ? (
                <>
                    {type === 'applications' && (
                        <Slider>
                            {slides.map((item, index) => (
                                <ApplicationCard {...item} isSlide={true} key={index}/>
                            ))}
                            <MoreGamesApplicationCard isSlide={true}/>
                        </Slider>
                    )}
                </>
            ) : (
                <>
                    {type === 'technologies' && (
                        <Slider>
                            {slides.map((item, index) => (
                                <TechnologyCard {...item} isSlide={true} key={index}/>
                            ))}
                        </Slider>
                    )}
                    {type === 'applications' && (
                        <Slider>
                            {slides.map((item, index) => (
                                <ApplicationCard {...item} isSlide={true} key={index}/>
                            ))}
                        </Slider>
                    )}
                    {type === 'team' && (
                        <Slider>
                            {slides.map((item, index) => (
                                <TeamMemberCard {...item} children={item.children} isSlide={true} key={index}/>
                            ))}
                        </Slider>
                    )}
                </>
            )}
        </>
    )
}

const technologiesWrap = (slides: any[]) => {
    return (
        <div className={'flex flex-col'}>
            <Image src={'/image/our_tech_upper_line.svg'} width={1106} height={142} alt="our_tech_upper"
                   className="p-5 px-24 lg:px-[11vw] w-full hidden lg:block"></Image>
            <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-6 justify-center">
                {slides.map((item, index) => (
                    <TechnologyCard {...item} isSlide={false} key={index}/>
                ))}
            </div>
        </div>
    )
}

const applicationsWrap = (slides: any[]) => {
    return (
        <div className={'flex flex-col'}>
            <div
                // className="grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-5 justify-around pt-5 flex-col lg:flex-row auto-cols-[1fr] -mb-[300px] lg:mb-0">
                className={"flex flex-col gap-5 justify-around pt-5"}
            >
                {slides.map((item, index) => (
                    <ApplicationCard {...item} isSlide={false} key={index}/>
                ))}
                <MoreGamesApplicationCard isSlide={false}/>
            </div>
        </div>
    )
}

const teamWrap = (slides: any[]) => {
    return (
        <div className="flex flex-col min-h-[1100px]">
            <Image src={'/image/team_upper_line.svg'} width={1106} height={298} alt="our_tech_upper"
                   className="hidden lg:block p-5 px-24 lg:px-[13%] w-full"></Image>
            <div className="flex flex-col md:flex-row justify-around">
                {slides.map((item, index) => (
                    <TeamMemberCard {...item} children={item.children} isSlide={false} key={index}/>
                ))}
            </div>
        </div>
    )
}

export const SlidableBlock = (
    {
        slides, type, isSlider, visibleOn
    } : {
        slides: any[], type: 'technologies' | 'applications' | 'team', isSlider: boolean, visibleOn: 'desktop' | 'mobile' | 'all'
    }
) => {

    const [windowWidth, setWindowWidth] = useState<number>(0)

    useEffect(() => {
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateWindowWidth);
        updateWindowWidth()

        return () => window.removeEventListener('resize', updateWindowWidth);
    }, []);

    if (isSlider)
        if (visibleOn === "all")
            return sliderComponent(type, slides, type === "applications")
        else if (visibleOn === "desktop" && windowWidth >= 1024)
            return sliderComponent(type, slides, type === "applications")
        else if (visibleOn === "mobile" && windowWidth < 1024)
            return sliderComponent(type, slides, type === "applications")
        else
            switch (type) {
                case "technologies":
                    return technologiesWrap(slides)
                case "applications":
                    return applicationsWrap(slides)
                case "team":
                    return teamWrap(slides)
            }
    else
        switch (type) {
            case "technologies":
                return technologiesWrap(slides)
            case "applications":
                return applicationsWrap(slides)
            case "team":
                return teamWrap(slides)
        }

}