import astrominaLogo from "@/public/image/backers/ASTROMINA.svg";
import aurowalletLogo from "@/public/image/backers/AUROWALLET.svg";
import extropyLogo from "@/public/image/backers/EXTROPY.svg";
import minaLogo from "@/public/image/backers/MINA.svg";
import minaFoundationLogo from "@/public/image/backers/MINAFOUNDATION.svg";
import palladLogo from "@/public/image/backers/PALLAD.svg";
import protokitLogo from "@/public/image/backers/PROTOKIT.svg";
import zekoLogo from "@/public/image/backers/ZEKO.svg";
import zkokLogo from "@/public/image/backers/ZKOK.svg";
import zkonLogo from "@/public/image/backers/ZKON.svg";
import Image from "next/image";
import Link from "next/link";

export default function Backers() {
  return (
    <section
      className={
        "mt-[10.417vw] pb-[3.906vw] flex flex-col bg-gray-light rounded-[1.563vw]"
      }
    >
      <span
        className={
          "text-[5.208vw] mt-[2.083vw] mb-[1.042vw] text-center leading-[80%] font-kavaimo uppercase text-red"
        }
      >
        Partners & Backers
      </span>
      <div className={"flex flex-col px-[10.938vw] gap-[1.823vw] mt-[2.604vw]"}>
        <div className={"flex flex-row w-full gap-[5.208vw]"}>
          <Link
            href={"https://minaprotocol.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className={"hover:opacity-80"}
          >
            <Image
              src={minaLogo}
              alt={"Mina logo"}
              className={"w-[11.979vw]"}
            />
          </Link>
          <Link
            href={"https://www.aurowallet.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className={"hover:opacity-80"}
          >
            <Image
              src={aurowalletLogo}
              alt={"Aurowallet logo"}
              className={"w-[20.208vw]"}
            />
          </Link>

          <Link
            href={"https://pallad.co/"}
            target="_blank"
            rel="noopener noreferrer"
            className={"hover:opacity-80"}
          >
            <Image
              src={palladLogo}
              alt={"Pallad logo"}
              className={"w-[16.771vw]"}
            />
          </Link>

          <Link
            href={"https://www.zkon.xyz/"}
            target="_blank"
            rel="noopener noreferrer"
            className={"hover:opacity-80"}
          >
            <Image
              src={zkonLogo}
              alt={"Zkon logo"}
              className={"w-[13.177vw]"}
            />
          </Link>
        </div>
        <div className={"flex flex-row w-full gap-[4.167vw]"}>
          <Link
            href={"https://protokit.dev/"}
            target="_blank"
            rel="noopener noreferrer"
            className={"hover:opacity-80"}
          >
            <Image
              src={protokitLogo}
              alt={"Protokit logo"}
              className={"w-[14.01vw]"}
            />
          </Link>

          <Link
            href={"https://www.extropy.io/"}
            target="_blank"
            rel="noopener noreferrer"
            className={"hover:opacity-80"}
          >
            <Image
              src={extropyLogo}
              alt={"Extropy logo"}
              className={"w-[12.083vw]"}
            />
          </Link>
          <Link
            href={"https://minaprotocol.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className={"hover:opacity-80"}
          >
            <Image
              src={minaFoundationLogo}
              alt={"MinaFoundation logo"}
              className={"w-[9.792vw]"}
            />
          </Link>
          <Link
            href={"https://zkok.io/"}
            target="_blank"
            rel="noopener noreferrer"
            className={"hover:opacity-80"}
          >
            <Image src={zkokLogo} alt={"Zkok logo"} className={"w-[3.542vw]"} />
          </Link>
          <Link
            href={"https://zeko.io/"}
            target="_blank"
            rel="noopener noreferrer"
            className={"hover:opacity-80"}
          >
            <Image src={zekoLogo} alt={"Zeko logo"} className={"w-[5.521vw]"} />
          </Link>
          <Link
            href={"https://astromina.org/"}
            target="_blank"
            rel="noopener noreferrer"
            className={"hover:opacity-80 flex justify-center items-center"}
          >
            <Image
              src={astrominaLogo}
              alt={"Astromina logo"}
              className={"w-[12.344vw]"}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
