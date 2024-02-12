import Image from "next/image";
import Link from "next/link";
import {BorderMask} from "@/app/components/BorderMask";
import {Button} from "@/app/components/Button";

interface ApplicationCardProps {
    exploreButton: string;
    name: string;
    description: string;
    link: string;
    image: string;
    variant: 0 | 1 | 2
    color: string;
    btnColor: string;
    hoverColor: 'left-accent' | 'middle-accent' | 'right-accent'
}

export const ApplicationCard = (props: ApplicationCardProps) => {
    return (
        <div className="relative group">
            <BorderMask
                color={props.color}
                hoverColor={props.hoverColor}
                hasCenterSticks={true}
                centerSticksAlign={"horizontal"}
                hasBorder={true}
                width={30}
                height={30}
                className={'pointer-events-none'}
                classNames={{border: `w-[99.3%] h-[99.3%]`}}
            />
            <div className="m-6 h-full flex flex-col ">
                <div className="text-2xl mb-3">{props.name}</div>
                <div className="flex flex-col items-center h-full">
                    <Image src={props.image} width={740} height={359} alt="our_tech_upper" className="" ></Image>
                    <div className="flex-grow "></div>
                    <div className="font-mono text-sm font-normal py-5 px-3">{props.description}</div>
                    <div className="flex-grow "></div>
                    <Button
                        link={props.link}
                        color={props.btnColor}
                        hoverColor={props.hoverColor}
                        text={'Play now!'}
                        className={'!mb-12 text-lg'}
                        classNames={{border: 'w-[99.8%]'}}
                    />
                </div>
            </div>
        </div>
    )
}

export const MoreGamesApplicationCard = () => {
    return (
        <Link href={"https://app.zknoid.io/"} className={'relative w-full md:h-auto h-2/4 group'}>
            <BorderMask
                color={'#fff'}
                hoverColor={'right-accent'}
                hasCenterSticks={true}
                centerSticksAlign={"horizontal"}
                hasBorder={true}
                width={30}
                height={30}
                classNames={{border: `w-[99.3%] h-[99.3%]`}}
            />
            <Image
                src={'/image/applications/more-games.svg'}
                alt={'our_tech_upper'}
                width={1080}
                height={360}
                className={'object-cover object-center h-full'}
            />
            <div className={'absolute top-0 bottom-0 w-full flex flex-col justify-center items-center'}>
                <Image
                    src={'/image/applications/more-games-text.svg'}
                    alt={'our_tech_upper'}
                    width={240}
                    height={140}
                    className={'object-cover'}
                />
            </div>
        </Link>
    )
}