import Image from "next/image";
import { ReactNode } from "react";

interface TeamMemberCardProps {
    name: string;
    position: string;
    image: string;
    imageW: number;
    imageH: number;
    variant: 0 | 1 | 2;
    children: ReactNode;
}

export const TeamMemberCard = (props: TeamMemberCardProps) => {
    const color = props.variant == 0 ? 'text-left-accent' : props.variant == 1 ? 'text-middle-accent' : 'text-right-accent';

    return (
        <div className="m-5 md:w-[33%] max-w-[400px] md:top-0 md:relative">
            <div className={`md:absolute mx-5 h-full flex flex-col ${props.variant != 1 && 'top-[-10vw]'}`}>
                <div className="w-full flex flex-col items-center pb-5 justify-between">
                    <Image src={props.image} width={props.imageW} height={props.imageH} alt="our_tech_upper" className="" ></Image>
                </div>
                <div className="flex flex-col items-center ">
                    <div className="flex justify-space-between justify-between">
                        <div className="text-2xl font-bold">{props.name}</div>
                    </div>
                    <div className={`text-base font-normal md:max-w-[80%] py-2 ${color}`}>{props.position}</div>
                    <div className="font-mono text-sm font-normal md:max-w-[80%]">{props.children}</div>
                    <div className="flex-grow "></div>
                </div>
            </div>
        </div>
    )
}