import Image from "next/image";

interface TeamMemberCardProps {
    name: string;
    description: string;
    position: string;
    image: string;
    imageW: number;
    imageH: number;
    variant: 0 | 1 | 2
}

export const TeamMemberCard = (props: TeamMemberCardProps) => {
    const color = props.variant == 0 ? 'text-left-accent' : props.variant == 1 ? 'text-middle-accent' : 'text-right-accent';

    return (
        <div className="mx-5 w-[33%] max-w-[400px] top-0 relative">
            <div className={`absolute mx-5 h-full flex flex-col ${props.variant != 1 && 'top-[-10vw]'}`}>
                <div className="w-full flex flex-col items-center pb-5 justify-between">
                    <Image src={props.image} width={props.imageW} height={props.imageH} alt="our_tech_upper" className="" ></Image>
                </div>
                <div className="flex flex-col items-center ">
                    <div className="flex justify-space-between justify-between">
                        <div className="text-2xl font-bold">{props.name}</div>
                    </div>
                    <div className={`text-base font-normal max-w-[80%] py-2 ${color}`}>{props.position}</div>
                    <div className="font-mono text-sm font-normal max-w-[80%]">{props.description}</div>
                    <div className="flex-grow "></div>
                </div>
            </div>
        </div>
    )
}