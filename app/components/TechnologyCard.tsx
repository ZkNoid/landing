import Image from "next/image";

interface TechnologyCardProps {
    exploreButton: string;
    name: string;
    description: string;
    image: string;
    imageW: number;
    imageH: number;
    variant: 0 | 1 | 2
}

export const TechnologyCard = (props: TechnologyCardProps) => {
    return (
        <div className="m-5 w-[33%] flex-grow relative max-w-[400px]">
            <Image src={'/image/technology_box.svg'} width={300} height={600} alt="our_tech_upper" className="grow absolute top-0 bottom-0 w-full h-full pointer-events-none" ></Image>
            <div className="m-5 h-full flex flex-col ">
                <div className="flex justify-space-between justify-between">
                    <div className="text-2xl">{props.name}</div>
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
                <div className="font-mono text-sm font-normal pt-3 max-w-[80%]">{props.description}</div>
                <div className="w-full flex flex-col items-center py-5 justify-between flex-grow">
                <div className="flex-grow ">
                    <Image src={props.image} width={props.imageW} height={props.imageH} alt="our_tech_upper" className="h-[200px] lg:h-[300px] hidden lg:block" ></Image>
                </div>

                </div>
            </div>
        </div>
    )
}