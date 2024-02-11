
interface CornerProps {
    fill: string;
    className?: string;
    width: number;
    height: number;
}

const TopLeftCorner = (props: CornerProps) => {
    return (
        <svg fill={props.fill} width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 28"
             className={`absolute top-0 left-0 transition-colors ${props.className ? props.className : ''}`}>
            <rect x="3" width="27" height="3"/>
            <rect width="3" height="28"/>
        </svg>
    )
}

const TopRightCorner = (props: CornerProps) => {
    return (
        <svg fill={props.fill} width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 28"
             className={`absolute top-0 right-0 transition-colors ${props.className ? props.className : ''}`}>
            <rect width="27" height="3"/>
            <rect x="27" width="3" height="28"/>
        </svg>
    )
}

const BottomLeftCorner = (props: CornerProps) => {
    return (
        <svg fill={props.fill} width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 28"
             className={`absolute bottom-0 left-0 transition-colors ${props.className ? props.className : ''}`}>
            <rect x="3" y="25" width="27" height="3"/>
            <rect width="3" height="28"/>
        </svg>
    )
}

const BottomRightCorner = (props: CornerProps) => {
    return (
        <svg fill={props.fill} width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 28"
             className={`absolute bottom-0 right-0 transition-colors ${props.className ? props.className : ''}`}>
            <rect y="25" width="27" height="3"/>
            <rect x="27" width="3" height="28"/>
        </svg>
    )
}


interface CenterStickProps extends CornerProps {
    align: "left" | "right" | "top" | "bottom"
}

const CenterStick = (props: CenterStickProps) => {
    if (props.align === "left" || props.align === "right")
        return (
            <svg fill={props.fill} width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 27"
                 className={`absolute top-1/2 ${props.align}-0 transition-colors ${props.className ? props.className : ''}`}>
                <rect width="3" height="27"/>
            </svg>
        )
    else return (
        <svg fill={props.fill} width={props.height} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 3"
             className={`absolute left-1/2 ${props.align}-0 transition-colors ${props.className ? props.className : ''}`}>
            <rect width="27" height="3"/>
        </svg>
    )
}


interface BorderMaskProps {
    className?: string;
    classNames?: {
        topLeftCorner?: string;
        topRightCorner?: string;
        centerLeftStick?: string;
        centerRightStick?: string;
        bottomLeftCorner?: string;
        bottomRightCorner?: string;
        border?: string;
        all?: string;
    }
    color: string;
    hoverColor: 'left-accent' | 'middle-accent' | 'right-accent';
    hasCenterSticks: boolean;
    centerSticksAlign?: "vertical" | "horizontal";
    hasBorder: boolean;
    width: number
    height: number
}


/**
 * Border mask for button and blocks
 *
 * Before use ensure that parent of this element has "relative" CSS property
 */

export const BorderMask = (props: BorderMaskProps) => {

    let allHoverColor;

    switch (props.hoverColor) {
        case "left-accent":
            allHoverColor = "group-hover:fill-left-accent"
            break;

        case "middle-accent":
            allHoverColor = "group-hover:fill-middle-accent"
            break;

        case "right-accent":
            allHoverColor = "group-hover:fill-right-accent"
            break;
    }

    let borderHoverColor;

    switch (props.hoverColor) {
        case "left-accent":
            borderHoverColor = "group-hover:border-left-accent"
            break;

        case "middle-accent":
            borderHoverColor = "group-hover:border-middle-accent"
            break;

        case "right-accent":
            borderHoverColor = "group-hover:border-right-accent"
            break;
    }


    return (
        <div className={`absolute top-0 bottom-0 w-full h-full ${props.className ? props.className : ''}`}>
            <TopLeftCorner width={props.width} height={props.height} fill={props.color} className={`${allHoverColor} ${props.classNames?.all} ${props.classNames?.topLeftCorner}`}/>
            <TopRightCorner width={props.width} height={props.height} fill={props.color} className={`${allHoverColor} ${props.classNames?.all} ${props.classNames?.topRightCorner}`}/>
            {props.hasCenterSticks &&
                <>
                    <CenterStick width={props.width / 10} height={props.height} fill={props.color} align={props.centerSticksAlign === "horizontal" ? "left" : "top"}
                                 className={`${allHoverColor} ${props.classNames?.all} ${props.classNames?.centerLeftStick}`}/>
                    <CenterStick width={props.width / 10} height={props.height} fill={props.color} align={props.centerSticksAlign === "horizontal" ? "right" : "bottom"}
                                 className={`${allHoverColor} ${props.classNames?.all} ${props.classNames?.centerRightStick}`}/>
                </>
            }
            <BottomLeftCorner width={props.width} height={props.height} fill={props.color} className={`${allHoverColor} ${props.classNames?.all} ${props.classNames?.bottomLeftCorner}`}/>
            <BottomRightCorner width={props.width} height={props.height} fill={props.color} className={`${allHoverColor} ${props.classNames?.all} ${props.classNames?.bottomRightCorner}`}/>
            {props.hasBorder &&
                <div className={`border mt-[4px] mb-[3px] ml-[3px] mr-[3px] transition-colors ${borderHoverColor} ${props.classNames?.border}`}/>
            }
        </div>
    )
}