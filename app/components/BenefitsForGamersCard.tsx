import Image from "next/image";
import {OutlineDecoration} from "./OutlineDecoration";

export const BenefitsForGamersCard = (
    {
        image, imageSide, title, text, className
    } :
    {
        image: string, imageSide: 'left' | 'right', title: string, text: string, className?: string;
    }
) => {
    return (
        <OutlineDecoration
            sizeMode={1}
            colorVariant={3}
            hoverMode={1}
            orientation={0}
            className={`border border-[#fff] p-4 ${className ? className : ''}`}
        >
            <div className={`flex ${imageSide === 'left' ? 'flex-row' : 'flex-row-reverse'} lg:flex-col-reverse justify-between items-center gap-4 lg:gap-6 w-full h-full`}>
                <div className={'w-full h-full flex justify-center items-center'}>
                    <Image src={image} alt={"gamers-camera"} width={100} height={100} className={'aspect-square object-center object-contain h-full lg:h-[90%] w-full lg:w-[70%] self-center'}/>
                </div>
                <div className={'flex flex-col gap-4 w-full'}>
                    <div className={'w-full font-bold text-mobile-headline-3 lg:text-headline-3'}>{title}</div>
                    <div className={'w-full font-plexmono text-mobile-main-text lg:text-regular-text'}>{text}</div>
                </div>
            </div>
        </OutlineDecoration>
    )
}