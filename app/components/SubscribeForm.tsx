'use client';

import {useState} from "react";

export const SubscribeForm = ({debug, text, endText}: { debug?: boolean, text: string, endText: string }) => {
    const [userEmail, setUserEmail] = useState<string>('');
    const [termsChecked, setTermsChecked] = useState<boolean>(false);

    const [isAnimate, setIsAnimate] = useState<boolean>(false)
    const [isAnimationEnd, setIsAnimationEnd] = useState<boolean>(false)
    const [animatedText, setAnimatedText] = useState<string>(text)

    const [isEmailInvalid, setEmailInvalid] = useState<boolean>(false)

    // const getRandomChar = (): string => {
    //     const characters = 'abcdefghijklmnopqrstuvwxyz'
    //     return characters.charAt(Math.floor(Math.random() * characters.length))
    // }

    const shuffleText = (inputText: string): string => {
        const characters = inputText.split('')
        for (let i = characters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [characters[i], characters[j]] = [characters[j], characters[i]]
        }
        return characters.join('')
    }

    const checkEmailValidity = () => {
        if (!userEmail) {
            setEmailInvalid(true)
            return false
        }
        else {
            setEmailInvalid(false)
            return true
        }
    }

    const submitEmail = () => {

        if (checkEmailValidity()) {

            setIsAnimate(true)

            const anim = setInterval(() => {
                // const newText = text
                //     .split('')
                //     .map(char => char === ' ' ? ' ' : getRandomChar())
                //     .join('')
                // setAnimatedText(newText)

                const shuffledText = shuffleText(text)
                setAnimatedText(shuffledText)
            }, 60)

            const timeout = setTimeout(() => {
                setIsAnimationEnd(true)
                setIsAnimate(false)
                clearInterval(anim)
            }, 3500)

            fetch('/api/subscribe', {
                method: 'POST',
                body: JSON.stringify({
                    email: userEmail,
                    termsChecked
                })
            });

            return () => {
                clearInterval(anim)
                clearTimeout(timeout)
            }
        }
    };

    return (
        <div className={`w-full relative flex justify-center ${debug && 'border'} mb-[30px] px-[10px] md:px-[50px]`}>
            <div className="flex flex-col w-full items-center text-sm">
                <div
                    className="font-medium lg:font-bold text-mobile-headline-4 lg:text-headline-1 pt-[100px] lg:pt-[150px] text-middle-accent"
                >
                    {isAnimate ? (
                        <span>{animatedText}</span>
                    ) : isAnimationEnd ? (
                        <span>{endText}</span>
                    ) : (
                        <span>{text}</span>
                    )}
                </div>
                <div
                    className="flex flex-col pt-5 pb-10 group"
                    data-disabled={isAnimationEnd || isAnimate}
                >
                    <div className="flex flex-row gap-5 flex-wrap py-5 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-85">
                        <input
                            type="email"
                            className={`w-full md:w-[486px] h-[50px] ${isEmailInvalid ? 'border border-[#FF0000] placeholder:text-[#FF0000]' : 'border'} bg-bg-dark px-2 rounded-none font-plexmono text-mobile-main-text lg:text-regular-text group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-85`}
                            placeholder="Enter your e-mail"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            disabled={isAnimationEnd || isAnimate}
                        ></input>
                        <div
                            className="hidden lg:flex w-[175px] h-[50px] border text-middle-accent hover:text-[#000] border-middle-accent hover:bg-middle-accent items-center justify-center cursor-pointer text-mobile-button lg:text-button font-medium group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-85"
                            onClick={() => {if (!isAnimationEnd || isAnimate) submitEmail()}}
                        >
                            Subscribe
                        </div>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-5 text-sm group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-85">
                        <input
                            id="terms_agree"
                            type="checkbox"
                            className="accent-middle-accent w-5 h-5 cursor-pointer rounded-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-85"
                            name="terms_agree"
                            checked={termsChecked}
                            onChange={(e) => setTermsChecked(e.target.checked)}
                            disabled={isAnimationEnd || isAnimate}
                        >
                        </input>
                        <label htmlFor="terms_agree"
                               className="hover:opacity-80 transition-opacity cursor-pointer font-plexmono text-small-text group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-85">
                            I agree to the processing of my personal data
                        </label>
                    </div>
                    <div
                        className="flex lg:hidden mt-8 w-full h-[50px] border text-middle-accent hover:text-[#000] border-middle-accent hover:bg-middle-accent items-center justify-center cursor-pointer text-mobile-button lg:text-button font-medium group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-85"
                        onClick={() => {if (!isAnimationEnd || isAnimate) submitEmail()}}
                    >
                        Subscribe
                    </div>
                </div>
            </div>
        </div>
    )
}