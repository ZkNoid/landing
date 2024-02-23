import Link from "next/link";
import Image from "next/image";
import { SOCIALS } from "../constants/socials";
import {LaunchAppButton} from "@/app/components/LaunchAppButton";

export const DesktopNavbar = () => {
    return (
        <header className="w-full h-[91px] px-3 lg:px-[50px] items-center hidden lg:flex">
            <div className={'flex w-full items-center justify-between'}>
                <Link
                    href={'https://zknoid.io'}
                    target="_blank" rel="noopener noreferrer"
                    className={'hover:opacity-80 ease-in-out cursor-pointer'}
                >
                    <Image
                        src={'/image/zknoid-logo.svg'}
                        alt={'ZkNoid logo'}
                        width={219}
                        height={47}
                    />
                </Link>
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
                <LaunchAppButton visibleOn={'all'}/>
            </div>
        </header>
    )
}