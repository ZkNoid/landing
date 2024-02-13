import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { OutlineDecoration } from "./OutlineDecoration";

interface ApplicationCardProps {
    name: string;
    description: string;
    link: string;
    image: string;
    variant: 0 | 1 | 2
}

export const ApplicationCard = (props: ApplicationCardProps) => {
    const borderColor = props.variant == 0 ? "hover/outline:border-left-accent" 
        : props.variant == 1 ? "hover/outline:border-middle-accent" 
        : "hover/outline:border-right-accent";

    return (
        <OutlineDecoration sizeMode={1} colorVariant={props.variant} hoverMode={1} orientation={0} className={`border ${borderColor}`}>
            <div className="group w-full h-full">
                <div className="p-6 h-full flex flex-col ">
                    <div className="text-2xl mb-3">{props.name}</div>
                    <div className="flex flex-col items-center h-full">
                        <Image src={props.image} width={740} height={359} alt="our_tech_upper"></Image>
                        <div className="flex-grow "></div>
                        <div className="font-mono text-sm font-normal py-5 px-3">{props.description}</div>
                        <div className="flex-grow "></div>
                        
                        <Button
                            link={props.link}
                            colorVariant={props.variant}
                            text={'Play now!'}
                            className={'text-lg w-full h-[52px]'}
                        />
                    </div>
                </div>
            </div>
        </OutlineDecoration>
    )
}

export const MoreGamesApplicationCard = () => {
    return (
        <OutlineDecoration sizeMode={1} colorVariant={2} hoverMode={1} orientation={0} className="border hover/outline:border-right-accent">
            <Link href={"https://app.zknoid.io/"} className={'relative w-full md:h-auto h-2/4 group inline-block'}>
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