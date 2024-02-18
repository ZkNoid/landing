import Image from "next/image";
import { OutlineDecoration} from "./OutlineDecoration";
import { Button } from "./Button";

interface BusinessInvestorsCardProps {
    description: string;
    image: string;
    link: string;
    variant: 0 | 2;
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
                       className="hidden lg:block m-3 lg:p-0 w-[150px] h-[150px] lg:w-[180px] lg:h-[180px] xl:w-[284px] xl:h-[275px] object-contain object-center"></Image>
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
                    <div className={'flex lg:hidden flex-row justify-between]'}>
                        <Image src={props.image} width={740} height={359} alt="our_tech_upper"
                               className="w-[120px] h-[120px] object-contain object-center self-center mr-[4px]"></Image>
                        <div className="font-mono text-sm font-normal pt-3 max-w-[400px] mx-auto">{props.description}</div>
                    </div>
                    <div className="font-mono text-lg font-normal pt-3 max-w-[400px] mx-auto hidden lg:block">{props.description}</div>
                    <div className={'mx-auto max-w-[400px] flex flex-row justify-start items-center'}>
                        <Button
                            link={props.link}
                            colorVariant={props.variant}
                            text={'Explore'}
                            className={'lg:max-w-[200px] mt-4 text-base w-full lg:w-[50%] h-[50px]'}
                        />
                    </div>
                </div>
            </div>
        </OutlineDecoration>
    )
}