import Image from "next/image";

interface ApplicationCardProps {
    exploreButton: string;
    name: string;
    description: string;
    image: string;
    variant: 0 | 1 | 2
}

export const ApplicationCard = (props: ApplicationCardProps) => {
    return (
        <div className="flex-grow relative ">
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
                    <Image src={props.image} width={740} height={359} alt="our_tech_upper" className="w-[284px]  lg:w-[284px]  hidden lg:block" ></Image>
                    <div className="flex-grow "></div>
                    <div className="font-mono text-sm max-w-[300px] font-normal">{props.description}</div>
                    <div className="flex-grow "></div>
                    {props.exploreButton && (
                        <Image src={props.exploreButton} width={300} height={52} alt="our_tech_upper" className="pb-5 cursor-pointer" ></Image>
                    )}
                </div>
            </div>

        </div>
    )
}