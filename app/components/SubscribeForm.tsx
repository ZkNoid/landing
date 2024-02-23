'use client';

import { useState } from "react";

export const SubscribeForm = (props: { debug?: boolean }) => {
    const [userEmail, setUserEmail] = useState('');
    const [termsChecked, setTermsChecked] = useState(false);

    const submitEmail = () => {
        fetch('/api/subscribe', {
            method: 'POST',
            body: JSON.stringify({
                email: userEmail,
                termsChecked
            })
        });
    };

    return (
        <div className={`w-full relative flex justify-center ${props.debug && 'border'} mb-[30px] px-[10px] md:px-[50px]`}>
            <div className="flex flex-col w-full items-center text-sm">
                <div className="font-medium lg:font-bold text-mobile-headline-4 lg:text-headline-1 pt-[150px] text-middle-accent">
                    Subscribe for updates!
                </div>
                <div className="flex flex-col pt-5 pb-10">
                    <div className="flex flex-row gap-5 flex-wrap py-5">
                        <input
                            type="email"
                            className="w-full md:w-[486px] h-[50px] border bg-bg-dark px-2 rounded-none font-plexmono text-mobile-main-text lg:text-regular-text"
                            placeholder="Enter your e-mail"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                        ></input>
                        <div
                            className="hidden lg:flex w-[175px] h-[50px] border text-middle-accent hover:text-[#000] border-middle-accent hover:bg-middle-accent items-center justify-center cursor-pointer text-mobile-button lg:text-button font-medium"
                            onClick={submitEmail}
                        >
                            Subscribe
                        </div>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-5 text-sm">
                        <input
                            id="terms_agree"
                            type="checkbox"
                            className="accent-middle-accent w-5 h-5 cursor-pointer rounded-none"
                            name="terms_agree"
                            checked={termsChecked}
                            onChange={(e) => setTermsChecked(e.target.checked)}
                        >
                        </input>
                        <label htmlFor="terms_agree" className="hover:opacity-80 transition-opacity cursor-pointer font-plexmono text-small-text">
                            I agree to the processing of my personal data
                        </label>
                    </div>
                    <div
                        className="flex lg:hidden mt-8 w-full h-[50px] border text-middle-accent hover:text-[#000] border-middle-accent hover:bg-middle-accent items-center justify-center cursor-pointer text-mobile-button lg:text-button font-medium"
                        onClick={submitEmail}
                    >
                        Subscribe
                    </div>
                </div>
            </div>
        </div>
    )
}