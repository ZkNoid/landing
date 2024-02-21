import Link from "next/link";
import Image from "next/image";
import { SOCIALS } from "../constants/socials";

export const DesktopNavbar = () => {
    return (
        <header className="w-full h-[91px] px-3 lg:px-[50px] items-center hidden lg:flex">
            <div className={'flex w-full items-center justify-between'}>
                <Image
                    src={'/image/zknoid-logo.svg'}
                    alt={'ZkNoid logo'}
                    width={219}
                    height={47}
                />
                <div className="flex text-base gap-5">
                    <Link className="cursor-pointer text-xl hover:opacity-80 ease-in-out" href={'https://docs.zknoid.io'} target="_blank"
                          rel="noopener noreferrer">
                        Docs
                    </Link>
                    <Link className="cursor-pointer text-xl hover:opacity-80 ease-in-out" href={'https://zknoid.medium.com'} target="_blank"
                          rel="noopener noreferrer">
                        Blog
                    </Link>
                </div>
                <div className="gap-5 flex">
                    {SOCIALS.map(social => (
                        <Link
                            key={social.name}
                            className="cursor-pointer flex items-center justify-center hover:opacity-80 ease-in-out"
                            href={social.link}
                            target="_blank" rel="noopener noreferrer"
                        >
                            <Image
                                src={social.image}
                                className="cursor-pointer"
                                width={30}
                                height={30}
                                alt={social.name}
                            />
                        </Link>
                    ))}
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