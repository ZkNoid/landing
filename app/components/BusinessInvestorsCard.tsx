import Image from "next/image";
import { OutlineDecoration} from "@/app/components/BorderMask";
import {Button} from "@/app/components/Button";

interface BusinessInvestorsCardProps {
    exploreButton: string;
    description: string;
    image: string;
    link: string;
    variant: 0 | 2;
    color: string;
    btnColor: string;
}

export const BusinessInvestorsCard = (props: BusinessInvestorsCardProps) => {
    return (
        <OutlineDecoration 
            sizeMode={1} 
            colorVariant={props.variant} 
            hoverMode={1} 
            orientation={0} 
            className={"m-5 md:w-[50%] flex-grow relative group"}
        >            
            <div className="m-5 h-full flex flex-row">
                <Image src={props.image} width={740} height={359} alt="our_tech_upper"
                       className="m-3 lg:p-0 w-[101px] h-[100px] lg:w-[180px] lg:h-[180px] xl:w-[284px] xl:h-[275px]"></Image>
                <div className="w-full">
                    <div className="flex-row justify-space-between justify-between hidden md:flex">
                        <div className="text-2xl"></div>
                        {props.variant == 0 && (
                            <svg width="55" height="37" viewBox="0 0 55 37" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="18.3848" y="0.707107" width="25" height="25"
                                      transform="rotate(45 18.3848 0.707107)" fill="#212121" stroke="#F9F8F4"/>
                                <rect x="36.3848" y="0.707107" width="25" height="25"
                                      transform="rotate(45 36.3848 0.707107)" fill="#212121" stroke="#D2FF00"/>
                            </svg>
                        )}
                        {props.variant == 2 && (
                            <svg width="55" height="37" viewBox="0 0 55 37" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="36.3848" y="0.707107" width="25" height="25"
                                      transform="rotate(45 36.3848 0.707107)" fill="#212121" stroke="#F9F8F4"/>
                                <rect x="18.3848" y="0.707107" width="25" height="25"
                                      transform="rotate(45 18.3848 0.707107)" fill="#212121" stroke="#56EBFF"/>
                            </svg>
                        )}
                    </div>
                    <div className="font-mono text-sm font-normal pt-3 max-w-[400px] mx-auto">{props.description}</div>
                    <div className={'mx-auto max-w-[400px] flex flex-row justify-start items-center'}>
                        <Button
                            link={props.link}
                            colorVariant={props.variant}
                            text={'Explore'}
                            className={'max-w-[200px] mt-4 text-base w-[50%] h-[51px]'}
                        />
                    </div>
                </div>
        </div>
        </OutlineDecoration>
    )
}