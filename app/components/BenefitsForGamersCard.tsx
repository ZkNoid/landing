import Image from "next/image";
import {OutlineDecoration} from "./OutlineDecoration";

export const BenefitsForGamersCard = (
    {
        image, imageSide, title, text
    } :
    {
        image: string, imageSide: 'left' | 'right', title: string, text: string
    }
) => {
    return (
        <OutlineDecoration
            sizeMode={1}
            colorVariant={3}
            hoverMode={1}
            orientation={0}
            className={'border border-[#fff] p-4'}
        >
            <div className={`flex ${imageSide === 'left' ? 'flex-row' : 'flex-row-reverse'} justify-between gap-4 w-full`}>
                <Image src={image} alt={"gamers-camera"} width={100} height={100} className={'aspect-square object-center object-contain'}/>
                <div className={'flex flex-col gap-4 w-full'}>
                    <div className={'w-full font-bold text-mobile-headline-3'}>{title}</div>
                    <div className={'w-full font-mono text-mobile-main-text'}>{text}</div>
                </div>
            </div>
        </OutlineDecoration>
    )
}