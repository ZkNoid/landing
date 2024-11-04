"use client";

import Link from "next/link";
import Image from "next/image";
import headerLogoImg from "@/public/image/logos/header-logo.svg";
import { motion } from "framer-motion";

const NavItem = ({ link, text }: { link: string; text: string }) => {
  return (
    <Link
      href={link}
      className={
        "group group-first:rounded-l-[0.521vw] group-last:rounded-r-[0.521vw]"
      }
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
  return (
    <header
      className={
        "w-full py-[2.344vw] px-[10.938vw] flex flex-row justify-between items-center"
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
        <NavItem link={"#"} text={"About"} />
        <NavItem link={"#"} text={"Games"} />
        <NavItem link={"#"} text={"For Devs"} />
        <NavItem link={"#"} text={"Media"} />
        <NavItem link={"#"} text={"Blog"} />
        <NavItem link={"#"} text={"Events"} />
      </nav>
      <motion.button
        className={
          "bg-yellow text-[0.833vw] font-helvetica-now font-medium text-black rounded-[0.521vw] px-[0.625vw] py-[0.417vw]"
        }
        whileHover={{ backgroundColor: "#FFFCF5" }}
      >
        Start Build
      </motion.button>
    </header>
  );
}
