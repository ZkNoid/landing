"use client";

import Link from "next/link";
import Image from "next/image";
import headerLogoImg from "@/public/image/logos/header-logo.svg";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { SOCIALS } from "@/lib/socials";

const NavItem = ({
  link,
  text,
  openAsNewTab,
}: {
  link: string;
  text: string;
  openAsNewTab?: boolean;
}) => {
  return (
    <Link
      href={link}
      className={
        "group group-first:rounded-l-[0.521vw] group-last:rounded-r-[0.521vw]"
      }
      target={openAsNewTab ? "_blank" : "_self"}
      rel={"noopener noreferrer"}
    >
      <motion.div
        className={
          "group-first:rounded-l-[0.521vw] group-last:rounded-r-[0.521vw] py-[0.417vw] text-[0.833vw] font-helvetica-now font-medium text-black px-[1.302vw] bg-white"
        }
        whileHover={{ backgroundColor: "#D4FF33" }}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.div>
    </Link>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    const previous = scrollY.getPrevious() || 0;

    if (!isOpen && latestValue < previous) setIsOpen(true);
    if (isOpen && latestValue > previous) setIsOpen(false);
  });

  return (
    <motion.header
      variants={{
        open: {
          y: 0,
        },
        closed: {
          y: "-100%",
        },
      }}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.35, ease: "easeInOut", type: "just" }}
      className={
        "w-full z-[51] top-0 left-0 bg-bg-dark fixed lg:!grid hidden py-[2.344vw] px-[3.125vw] grid-cols-3 items-center"
      }
    >
      <Link href="/">
        <motion.div whileHover={{ opacity: 0.8 }}>
          <Image
            src={headerLogoImg}
            alt={"ZkNoid Logo"}
            className={"w-[6.51vw]"}
          />
        </motion.div>
      </Link>
      <nav className={"flex flex-row items-center justify-center"}>
        <NavItem link={"/#about"} text={"About"} />
        <NavItem link={"/#games"} text={"Games"} />
        <NavItem
          link={"https://docs.zknoid.io/docs/zknoid_for_developers/faq"}
          text={"For Devs"}
          openAsNewTab
        />
        <NavItem link={"/#community"} text={"Media"} />
        <NavItem link={SOCIALS.medium} text={"Blog"} openAsNewTab />
        <NavItem
          link={"https://quest.zknoid.io/"}
          text={"Events"}
          openAsNewTab
        />
      </nav>
      <div className={"flex flex-row gap-[1.024vw] items-center justify-end"}>
        <Link
          href={"https://app.zknoid.io/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className={
              "bg-yellow text-[0.833vw] font-helvetica-now font-medium text-black rounded-[0.521vw] px-[1.25vw] py-[0.417vw]"
            }
            whileHover={{ backgroundColor: "#FFFCF5" }}
          >
            Go to App
          </motion.div>
        </Link>
        <Link
          href={
            "https://docs.zknoid.io/docs/zknoid_for_developers/sdk/overview"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className={
              "bg-yellow text-[0.833vw] font-helvetica-now font-medium text-black rounded-[0.521vw] px-[0.625vw] py-[0.417vw]"
            }
            whileHover={{ backgroundColor: "#FFFCF5" }}
          >
            Start Build
          </motion.div>
        </Link>
      </div>
    </motion.header>
  );
}
