import Link from "next/link";
import { OutlineDecoration } from "./BorderMask";

export const Button = ({ text, link, colorVariant, className = '' }: { text: string, link: string, colorVariant: 0 | 1 | 2, className: string }) => {
    const borderColor = colorVariant == 0 ? "border-left-accent" : colorVariant == 1 ? "border-middle-accent" : "border-right-accent";
    const textColor = colorVariant == 0 ? "text-left-accent" : colorVariant == 1 ? "text-middle-accent" : "text-right-accent";

    return (
        <OutlineDecoration sizeMode={0} colorVariant={colorVariant} hoverMode={0} orientation={1} className={className}>
            <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex text-center items-center justify-center group/button border w-full h-full ${borderColor}`}
            >
                <span className={textColor}>{text}</span>
            </Link>
        </OutlineDecoration>
    )
}