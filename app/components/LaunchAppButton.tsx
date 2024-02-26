import Link from "next/link";

export const LaunchAppButton = ({fullWidth, className, visibleOn}: {fullWidth?: boolean, className?: string, visibleOn: 'desktop' | 'mobile' | 'all'}) => {

    const hoverStyles = 'group-hover:bg-bg-dark group-hover:border group-hover:border-foreground group-hover:text-foreground'

    return (
        <Link href={'https://app.zknoid.io'} className={`group ${visibleOn === 'all' ? 'block' : visibleOn === 'desktop' ? 'hidden lg:block' : 'block lg:hidden'}`}>
            <div
                className={`${fullWidth ? 'w-full' : 'w-[140px] lg:w-[192px]'} h-[50px] bg-foreground text-bg-dark text-mobile-button lg:text-button cursor-pointer flex justify-center items-center ${hoverStyles} ${className ? className : ''}`}
            >
                Launch app
            </div>
        </Link>
    )
}