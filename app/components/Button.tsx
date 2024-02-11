import {BorderMask} from "@/app/components/BorderMask";
import Link from "next/link";

interface ButtonProps {
    link: string;
    color: string;
    hoverColor: "left-accent" | "middle-accent" | "right-accent";
    text: string;
    className?: string;
    classNames?: {
        border?: string;
    }
}

export const Button = (props: ButtonProps) => {

    let bgColor;

    switch (props.hoverColor) {
        case "left-accent":
            bgColor = 'hover:bg-left-accent'
            break;

        case "middle-accent":
            bgColor = 'hover:bg-middle-accent'
            break;

        case "right-accent":
            bgColor = 'hover:bg-right-accent';
            break
    }

    let borderColor;

    switch (props.hoverColor) {
        case "left-accent":
            borderColor = 'border-left-accent'
            break;

        case "middle-accent":
            borderColor = 'border-middle-accent'
            break;

        case "right-accent":
            borderColor = 'border-right-accent';
            break
    }

    let textColor;

    switch (props.hoverColor) {
        case "left-accent":
            textColor = 'text-left-accent'
            break;

        case "middle-accent":
            textColor = 'text-middle-accent'
            break;

        case "right-accent":
            textColor = 'text-right-accent';
            break
    }

    return (
        <Link
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative text-center py-2 px-4 w-full mb-4 flex items-center justify-center group/button ${bgColor} transition-colors ${props.className? props.className : ''}`}
        >
            <BorderMask
                color={props.color}
                hoverColor={props.hoverColor}
                hasCenterSticks={true}
                centerSticksAlign={"vertical"}
                hasBorder={true}
                width={15}
                height={15}
                classNames={{border: `w-[99.4%] h-[94.6%] mt-[1px] mb-0 mr-[1px] ml-[1px] ${borderColor} ${props.classNames?.border}`}}
            />
            <span className={`${textColor} group-hover/button:text-[#000]`}>{props.text}</span>
        </Link>
    )
}