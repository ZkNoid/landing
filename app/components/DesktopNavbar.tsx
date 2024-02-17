import Link from "next/link";
import Image from "next/image";

export const DesktopNavbar = () => {
    return (
        <header className="w-full h-[91px] px-3 lg:px-[50px] items-center hidden md:flex">
            <div className={'flex w-full items-center justify-between'}>
                <div className="font-bold text-2xl md:text-3xl cursor-pointer">
                    ZkNoid
                </div>
                <div className="flex text-base gap-5">
                    <Link className="cursor-pointer text-xl" href={'https://docs.zknoid.io'} target="_blank"
                          rel="noopener noreferrer">
                        Docs
                    </Link>
                    <Link className="cursor-pointer text-xl" href={'https://zknoid.medium.com'} target="_blank"
                          rel="noopener noreferrer">
                        Blog
                    </Link>
                </div>
                <div className="gap-5 flex">
                    <Link className="cursor-pointer flex items-center justify-center" href={'https://github.com/ZkNoid'}
                          target="_blank" rel="noopener noreferrer">
                        <Image src={'/image/socials/github.svg'} className="cursor-pointer" width={30} height={30}
                               alt="Github"></Image>
                    </Link>
                    {/* <Image src={'/image/socials/twitter.svg'} className="cursor-pointer" width={30} height={30} alt="Twitter"></Image> */}
                    {/* <Image src={'/image/socials/telegram.svg'} className="cursor-pointer" width={30} height={30} alt="Telegram"></Image> */}
                    <Link className="cursor-pointer flex items-center justify-center" href={'https://zknoid.medium.com/'}
                          target="_blank" rel="noopener noreferrer">
                        <Image src={'/image/socials/medium.svg'} className="cursor-pointer " width={30} height={30}
                               alt="Medium"></Image>
                    </Link>
                </div>
                <Link href={'https://app.zknoid.io'} className='group block'>
                    <div
                        className="w-[140px] lg:w-[192px] h-[50px] bg-foreground group-hover:bg-bg-dark group-hover:border group-hover:border-foreground group-hover:text-[#fff] text-bg-dark text-xl lg:text-2xl flex items-center justify-center cursor-pointer">
                        Launch app
                    </div>
                </Link>
            </div>
        </header>
    )
}