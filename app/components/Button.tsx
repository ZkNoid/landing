import Link from "next/link";
import { OutlineDecoration } from "./OutlineDecoration";

export const Button = ({ text, link, colorVariant, textWhite, className = '' }: { text: string, link: string, colorVariant: 0 | 1 | 2, textWhite?: boolean, className: string }) => {
    const borderColor = colorVariant == 0 ? "border-left-accent" : colorVariant == 1 ? "border-middle-accent" : "border-right-accent";
    const textColor = textWhite ? "text-[#fff]": colorVariant == 0 ? "text-left-accent" : colorVariant == 1 ? "text-middle-accent" : "text-right-accent";
    const hoverColor = colorVariant == 0 ? "hover:bg-left-accent" : colorVariant == 1 ? "hover:bg-middle-accent" : "hover:bg-right-accent";

    return (
        <OutlineDecoration sizeMode={0} colorVariant={colorVariant} hoverMode={0} orientation={1} className={className}>
            <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex text-center items-center justify-center group/button border w-full h-full group/button ${borderColor} ${hoverColor}`}
            >
                <span className={`group-hover/button:text-[#000] ${textColor}`}>{text}</span>
            </Link>
        </OutlineDecoration>
    )
}