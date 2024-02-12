import { ReactNode } from "react";

export const OutlineDecoration = (
    { children, sizeMode, colorVariant, hoverMode, orientation, className }:
        { children: ReactNode, sizeMode: 0 | 1, colorVariant: 0 | 1 | 2, hoverMode: 0 | 1, orientation: 0 | 1, className: string }
) => {

    const borderSizes = {
        top: sizeMode == 0 ? "border-t-1 top-[-1px]" : "border-t-3 top-[-3px]",
        right: sizeMode == 0 ? "border-r-1 right-[-1px]" : "border-r-3 right-[-3px]",
        bottom: sizeMode == 0 ? "border-b-1 bottom-[-1px]" : "border-b-3 bottom-[-3px]",
        left: sizeMode == 0 ? "border-l-1 left-[-1px]" : "border-l-3 left-[-3px]",
    };

    const borderColor = hoverMode == 1 ? "" : colorVariant == 0 ? "border-left-accent" : colorVariant == 1 ? "border-middle-accent" : "border-right-accent";
    const borderHoverColor = colorVariant == 0 ? "group-hover/outline:border-left-accent" : colorVariant == 1 ? "group-hover/outline:border-middle-accent" : "group-hover/outline:border-right-accent";
    const borderWidth = sizeMode == 0 ? "h-[8px] w-[8px]" : "h-[28px] w-[28px]";
    return (
        <div className={`${sizeMode == 0 ? "m-[1px]" : "m-[3px]"} relative group/outline ${className}`}>
            {orientation == 1 ? (
                <>
                    <div className={`absolute ${borderSizes["top"]} left-[0px] right-[0px] m-auto ${borderWidth} ${borderColor} ${borderHoverColor}`} />
                    <div className={`absolute ${borderSizes["bottom"]} left-[0px] right-[0px] bottom-[-1px] m-auto ${borderWidth} ${borderColor} ${borderHoverColor}`} />
                </>

            ) : (
                <>
                    <div className={`absolute ${borderSizes["left"]} top-[0px] bottom-[0px] left-[-1px] m-auto ${borderWidth} ${borderColor} ${borderHoverColor}`} />
                    <div className={`absolute ${borderSizes["right"]} top-[0px] bottom-[0px] right-[-1px] m-auto ${borderWidth} ${borderColor} ${borderHoverColor}`} />
                </>
            )}

            <div className={`absolute ${borderSizes["top"]} ${borderSizes["left"]} ${borderWidth} ${borderColor} ${borderHoverColor}`} />
            <div className={`absolute ${borderSizes["bottom"]} ${borderSizes["left"]} ${borderWidth} ${borderColor} ${borderHoverColor}`} />
            <div className={`absolute ${borderSizes["top"]} ${borderSizes["right"]} ${borderWidth} ${borderColor} ${borderHoverColor}`} />
            <div className={`absolute ${borderSizes["bottom"]} ${borderSizes["right"]} ${borderWidth} ${borderColor} ${borderHoverColor}`} />
            {children}
        </div>
    )
}