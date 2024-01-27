import Image from "next/image";
import Link from "next/link";

interface BusinessInvestorsCardProps {
    exploreButton: string;
    description: string;
    image: string;
    link: string;
    variant: 0 | 1 | 2;
}

export const BusinessInvestorsCard = (props: BusinessInvestorsCardProps) => {
    return (
        <div className="m-5 md:w-[50%] flex-grow relative ">
            <Image
                src={'/image/business_box.svg'}
                width={740}
                height={359}
                alt="our_tech_upper"
                className="grow absolute top-0 bottom-0 w-full h-full pointer-events-none"
            ></Image>
            <div className="m-5 h-full flex flex-row ">
                <Image src={props.image} width={740} height={359} alt="our_tech_upper" className="m-3 lg:p-0 w-[101px] h-[100px] lg:w-[180px] lg:h-[180px] xl:w-[284px] xl:h-[275px]" ></Image>
                <div className="">
                    <div className="flex-row justify-space-between justify-between hidden md:flex">
                        <div className="text-2xl"></div>
                        {props.variant == 0 && (
                            <svg width="55" height="37" viewBox="0 0 55 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="18.3848" y="0.707107" width="25" height="25" transform="rotate(45 18.3848 0.707107)" fill="#212121" stroke="#F9F8F4" />
                                <rect x="36.3848" y="0.707107" width="25" height="25" transform="rotate(45 36.3848 0.707107)" fill="#212121" stroke="#D2FF00" />
                            </svg>
                        )}
                        {props.variant == 1 && (
                            <svg width="55" height="37" viewBox="0 0 55 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="36.3848" y="0.707107" width="25" height="25" transform="rotate(45 36.3848 0.707107)" fill="#212121" stroke="#F9F8F4" />
                                <rect x="18.3848" y="0.707107" width="25" height="25" transform="rotate(45 18.3848 0.707107)" fill="#212121" stroke="#56EBFF" />
                            </svg>
                        )}
                    </div>
                    <div className="font-mono text-sm font-normal pt-3 max-w-[400px]">{props.description}</div>
                    <div className="w-full flex flex-col items-center pt-10 justify-between flex-grow">
                        <Link href={props.link} target="_blank" rel="noopener noreferrer">
                            <Image src={props.exploreButton} width={180} height={51} alt="our_tech_upper" className="pb-5 cursor-pointer" ></Image>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}