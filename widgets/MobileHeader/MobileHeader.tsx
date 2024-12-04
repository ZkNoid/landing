"use client";

import Link from "next/link";
import Image from "next/image";
import headerLogo from "@/public/image/logos/header-logo.svg";
import blackLogo from "@/public/image/logos/black-logo.svg";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ReactNode, useState } from "react";

const games = [
  {
    link: "#",
    text: "Arkanoid",
  },
  {
    link: "#",
    text: "Randzu",
  },
  {
    link: "#",
    text: "Lottery",
  },
  {
    link: "#",
    text: "Thimblerig",
  },
  {
    link: "#",
    text: "Checkers",
  },
];

const forDevs = [
  {
    link: "#",
    text: "Docs",
  },
  {
    link: "#",
    text: "GitHub",
  },
  {
    link: "#",
    text: "SDK",
  },
  {
    link: "#",
    text: "Education",
  },
  {
    link: "#",
    text: "Listing Guide",
  },
];

const socials = [
  {
    link: "#",
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={"w-[5.882vw]"}
      >
        <mask
          id="mask0_1255_607"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="25"
          height="25"
        >
          <path d="M0 0H24.939V25H0V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_1255_607)">
          <path
            d="M19.6395 1.16797H23.4641L15.1095 10.7644L24.939 23.8251H17.2436L11.2119 15.9055L4.31801 23.8251H0.489874L9.42517 13.5573L0 1.16975H7.89142L13.3353 8.40725L19.6395 1.16797ZM18.2946 21.5251H20.4144L6.73354 3.34833H4.46052L18.2946 21.5251Z"
            fill="#3A39FF"
          />
        </g>
      </svg>
    ),
  },
  {
    link: "#",
    icon: (
      <svg
        width="44"
        height="25"
        viewBox="0 0 44 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={"w-[10.353vw]"}
      >
        <path
          d="M24.8187 12.5C24.8187 19.4028 19.2638 25 12.408 25C10.7807 25.0022 9.16896 24.6806 7.66472 24.0536C6.16048 23.4266 4.79324 22.5065 3.64105 21.3457C2.48886 20.185 1.57429 18.8064 0.949558 17.2886C0.324826 15.7709 0.00216537 14.1437 0 12.5C0 5.59445 5.555 1.51219e-05 12.408 1.51219e-05C14.0355 -0.00254018 15.6476 0.318775 17.1521 0.945609C18.6567 1.57244 20.0242 2.49252 21.1767 3.65329C22.3292 4.81405 23.244 6.19278 23.8689 7.71071C24.4938 9.22864 24.8166 10.8561 24.8187 12.5ZM38.4313 12.5C38.4313 19 35.6538 24.2667 32.2272 24.2667C28.8007 24.2667 26.0233 18.9972 26.0233 12.5C26.0233 6.00001 28.8007 0.733348 32.2272 0.733348C35.6538 0.733348 38.4313 6.00279 38.4313 12.5ZM44 12.5C44 18.3222 43.0238 23.0417 41.8165 23.0417C40.612 23.0417 39.6357 18.3194 39.6357 12.5C39.6357 6.67779 40.612 1.95835 41.8192 1.95835C43.0238 1.95835 44 6.67779 44 12.5Z"
          fill="#3A39FF"
        />
      </svg>
    ),
  },
  {
    link: "#",
    icon: (
      <svg
        width="36"
        height="25"
        viewBox="0 0 36 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={"w-[8.471vw]"}
      >
        <path
          d="M14.4 17.8571L23.742 12.5L14.4 7.14286V17.8571ZM35.208 3.875C35.442 4.71429 35.604 5.83928 35.712 7.26786C35.838 8.69643 35.892 9.92857 35.892 11L36 12.5C36 16.4107 35.712 19.2857 35.208 21.125C34.758 22.7321 33.714 23.7679 32.094 24.2143C31.248 24.4464 29.7 24.6071 27.324 24.7143C24.984 24.8393 22.842 24.8929 20.862 24.8929L18 25C10.458 25 5.76 24.7143 3.906 24.2143C2.286 23.7679 1.242 22.7321 0.792 21.125C0.558 20.2857 0.396 19.1607 0.288 17.7321C0.162 16.3036 0.108 15.0714 0.108 14L0 12.5C0 8.58929 0.288 5.71429 0.792 3.875C1.242 2.26786 2.286 1.23214 3.906 0.785714C4.752 0.553572 6.3 0.392857 8.676 0.285714C11.016 0.160714 13.158 0.107143 15.138 0.107143L18 0C25.542 0 30.24 0.285714 32.094 0.785714C33.714 1.23214 34.758 2.26786 35.208 3.875Z"
          fill="#3A39FF"
        />
      </svg>
    ),
  },
  {
    link: "#",
    icon: (
      <svg
        width="36"
        height="25"
        viewBox="0 0 36 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={"w-[8.471vw]"}
      >
        <path
          d="M30.4605 2.07759C28.1805 1.10909 25.7118 0.406145 23.1403 0C23.0951 0.000586887 23.052 0.0174311 23.0203 0.0468632C22.7118 0.562355 22.3518 1.23406 22.1117 1.74955C19.3842 1.37488 16.6105 1.37488 13.8829 1.74955C13.6429 1.21843 13.2829 0.562355 12.9572 0.0468632C12.9401 0.0156213 12.8886 0 12.8372 0C10.2657 0.406145 7.81421 1.10909 5.517 2.07759C5.49986 2.07759 5.48272 2.09321 5.46557 2.10883C0.802589 8.46656 -0.48316 14.6525 0.151143 20.7759C0.151143 20.8071 0.168286 20.8384 0.202573 20.854C3.28837 22.9159 6.25417 24.1656 9.18568 24.9935C9.23711 25.0091 9.28854 24.9935 9.30568 24.9623C9.99141 24.1031 10.6086 23.1971 11.14 22.2442C11.1743 22.1818 11.14 22.1193 11.0714 22.1037C10.0943 21.76 9.16853 21.3538 8.25994 20.8852C8.19136 20.854 8.19136 20.7603 8.24279 20.7134C8.43137 20.5884 8.61995 20.4478 8.80852 20.3229C8.84281 20.2916 8.89424 20.2916 8.92853 20.3072C14.8258 22.7597 21.186 22.7597 27.0147 20.3072C27.049 20.2916 27.1005 20.2916 27.1347 20.3229C27.3233 20.4635 27.5119 20.5884 27.7005 20.729C27.769 20.7759 27.769 20.8696 27.6833 20.9008C26.7919 21.3851 25.849 21.7756 24.8718 22.1193C24.8032 22.1349 24.7861 22.213 24.8032 22.2599C25.3518 23.2127 25.969 24.1188 26.6376 24.9779C26.689 24.9935 26.7404 25.0091 26.7919 24.9935C29.7405 24.1656 32.7063 22.9159 35.7921 20.854C35.8264 20.8384 35.8435 20.8071 35.8435 20.7759C36.5979 13.6996 34.5921 7.56054 30.5291 2.10883C30.512 2.09321 30.4948 2.07759 30.4605 2.07759ZM12.0315 17.0425C10.2657 17.0425 8.79138 15.5585 8.79138 13.7308C8.79138 11.9032 10.2314 10.4192 12.0315 10.4192C13.8487 10.4192 15.2887 11.9188 15.2716 13.7308C15.2716 15.5585 13.8315 17.0425 12.0315 17.0425ZM23.9804 17.0425C22.2146 17.0425 20.7403 15.5585 20.7403 13.7308C20.7403 11.9032 22.1803 10.4192 23.9804 10.4192C25.7976 10.4192 27.2376 11.9188 27.2205 13.7308C27.2205 15.5585 25.7976 17.0425 23.9804 17.0425Z"
          fill="#3A39FF"
        />
      </svg>
    ),
  },
  {
    link: "#",
    icon: (
      <svg
        width="30"
        height="25"
        viewBox="0 0 30 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={"w-[7.059vw]"}
      >
        <path
          d="M27.975 0.164381L1.40082 10.3467C-0.412768 11.0705 -0.402276 12.0758 1.06808 12.5241L7.89074 14.6389L23.6764 4.74248C24.4228 4.29122 25.1048 4.53398 24.5442 5.02843L11.7547 16.4975H11.7517L11.7547 16.499L11.2841 23.4868C11.9736 23.4868 12.2778 23.1725 12.6645 22.8017L15.9784 19.5997L22.8715 24.6589C24.1425 25.3544 25.0553 24.9969 25.3716 23.4898L29.8965 2.30003C30.3597 0.454794 29.1876 -0.380702 27.975 0.164381Z"
          fill="#3A39FF"
        />
      </svg>
    ),
  },
];

const MenuItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      variants={{
        open: {
          y: 0,
          opacity: 1,
          transition: {
            y: { stiffness: 1000, velocity: -100 },
          },
        },
        closed: {
          y: 50,
          opacity: 0,
          transition: {
            y: { stiffness: 1000 },
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", () => {
    setIsOpen(false);
  });

  return (
    <motion.header
      className={"lg:!hidden w-full z-[51] fixed right-0 top-0"}
      variants={{
        open: {
          backgroundColor: "#D4FF33",
          borderBottomRightRadius: "7.059vw",
          borderBottomLeftRadius: "7.059vw",
        },
        closed: { backgroundColor: "#121212" },
      }}
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <div
        className={
          "flex w-full px-[4.706vw] py-[3.529vw] flex-row items-center"
        }
      >
        <Link href="/" className={"hover:opacity-80"}>
          <Image
            src={isOpen ? blackLogo : headerLogo}
            alt={"Zknoid logo"}
            className={"w-[22.353vw]"}
          />
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className={"ml-auto"}>
          <svg
            width="30"
            height="19"
            viewBox="0 0 30 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={"w-[7.059vw] h-[7.059vw]"}
          >
            <motion.rect
              width="30"
              height="3"
              fill="#FFFCF5"
              variants={{
                open: { rotate: "45deg", y: "42%", fill: "#1E1E1E" },
                closed: { y: 0, fill: "#FFFCF5" },
              }}
              initial={false}
            />
            <motion.rect
              y="8"
              width="30"
              height="3"
              fill="#FFFCF5"
              variants={{
                open: { opacity: 0 },
                closed: { opacity: 1 },
              }}
              initial={false}
            />
            <motion.rect
              y="16"
              width="30"
              height="3"
              fill="#FFFCF5"
              variants={{
                open: { rotate: "-45deg", y: "-42%", fill: "#1E1E1E" },
                closed: { y: 0, fill: "#FFFCF5" },
              }}
              initial={false}
            />
          </svg>
        </button>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.nav
            initial={"closed"}
            animate={"open"}
            exit={"closed"}
            variants={{
              open: {
                width: "100vw",
                height: "auto",
                opacity: 1,
                transition: { staggerChildren: 0.07, delayChildren: 0.2 },
              },
              closed: {
                width: 0,
                height: 0,
                opacity: 0,
              },
            }}
            className={"px-[4.706vw] pb-[5.882vw]"}
          >
            <MenuItem className={"mb-[2.353vw]"}>
              <Link
                href={"#"}
                className={
                  "text-[3.765vw] text-gray-dark font-bold font-outfit leading-[110%] uppercase"
                }
              >
                About us
              </Link>
            </MenuItem>
            <MenuItem className={"mb-[2.353vw]"}>
              <Link
                href={"#"}
                className={
                  "text-[3.765vw] text-gray-dark font-bold font-outfit leading-[110%] uppercase"
                }
              >
                Games
              </Link>
            </MenuItem>
            {games.map((item, index) => (
              <MenuItem key={index} className={"mb-[1.176vw]"}>
                <Link
                  href={item.link}
                  className={
                    "text-[3.765vw] text-gray-dark font-medium font-helvetica-now leading-[110%]"
                  }
                >
                  {item.text}
                </Link>
              </MenuItem>
            ))}
            <MenuItem className={"mt-[2.353vw] mb-[4.706vw] w-full"}>
              <Link
                href={"#"}
                className={
                  "py-[2.588vw] bg-blue rounded-[2.353vw] flex flex-col justify-center items-center"
                }
              >
                <span
                  className={
                    "text-white font-medium text-[3.765vw] font-helvetica-now leading-[110%]"
                  }
                >
                  Game store
                </span>
              </Link>
            </MenuItem>
            <MenuItem className={"mb-[1.176vw]"}>
              <Link
                href={"#"}
                className={
                  "text-[3.765vw] text-gray-dark font-bold font-outfit leading-[110%] uppercase"
                }
              >
                For devs
              </Link>
            </MenuItem>
            {forDevs.map((item, index) => (
              <MenuItem key={index} className={"mb-[1.176vw]"}>
                <Link
                  href={item.link}
                  className={
                    "text-[3.765vw] text-gray-dark font-medium font-helvetica-now leading-[110%]"
                  }
                >
                  {item.text}
                </Link>
              </MenuItem>
            ))}
            <MenuItem className={"mt-[2.353vw] mb-[4.706vw] w-full"}>
              <Link
                href={"#"}
                className={
                  "py-[2.588vw] bg-blue rounded-[2.353vw] flex flex-col justify-center items-center"
                }
              >
                <span
                  className={
                    "text-white font-medium text-[3.765vw] font-helvetica-now leading-[110%]"
                  }
                >
                  Start Build
                </span>
              </Link>
            </MenuItem>
            <MenuItem
              className={
                "mt-[5.882vw] w-full flex flex-col items-center justify-center"
              }
            >
              <div className={"flex flex-row items-center gap-[3.529vw]"}>
                {socials.map((item, index) => (
                  <Link key={index} href={item.link}>
                    {item.icon}
                  </Link>
                ))}
              </div>
            </MenuItem>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
