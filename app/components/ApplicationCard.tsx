import Image from "next/image";
import Link from "next/link";

interface ApplicationCardProps {
    exploreButton: string;
    name: string;
    description: string;
    link: string;
    image: string;
    variant: 0 | 1 | 2
}

export const ApplicationCard = (props: ApplicationCardProps) => {
    return (
        <div className="relative ">
            <Image
                src={'/image/applications_box.svg'}
                width={740}
                height={359}
                alt="our_tech_upper"
                className="grow absolute top-0 bottom-0 w-full h-full pointer-events-none"
            ></Image>
            <div className="m-3 h-full flex flex-col ">
                <div className="text-2xl mb-3">{props.name}</div>
                <div className="flex flex-col items-center h-full">
                    <Image src={props.image} width={740} height={359} alt="our_tech_upper" className="" ></Image>
                    <div className="flex-grow "></div>
                    <div className="font-mono text-sm font-normal py-5 px-3">{props.description}</div>
                    <div className="flex-grow "></div>
                    {props.exploreButton && (
                        <Link href={props.link} className="w-full">
                            <Image src={props.exploreButton} width={300} height={52} alt="our_tech_upper" className="pb-5 cursor-pointer w-full" ></Image>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export const MoreGamesApplicationCard = () => {
    return (
            <Image
                src={'/image/applications/more_games.svg'}
                width={740}
                height={359}
                alt="our_tech_upper"
                className=" h-full pointer-events-none"
            ></Image>

    )
}