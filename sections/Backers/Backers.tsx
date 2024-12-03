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
        "mt-[25.882vw] lg:!mt-[10.417vw] pb-[3.906vw] flex flex-col bg-gray-light rounded-[1.563vw]"
      }
    >
      <span
        className={
          "text-[13.647vw] lg:!text-[5.208vw] mt-[4.706vw] lg:!mt-[2.083vw] mb-[4.706vw] lg:!mb-[1.042vw] text-center leading-[80%] font-kavaimo uppercase text-red"
        }
      >
        Partners and Backers
      </span>
      <div
        className={
          "flex flex-col px-[4.706vw] lg:!px-[10.938vw] gap-[4.706vw] lg:!gap-[1.823vw] mt-[5.882vw] lg:!mt-[2.604vw]"
        }
      >
        <div
          className={
            "grid grid-cols-2 lg:!flex flex-row w-full gap-[4.706vw] lg:!gap-[5.208vw] items-center justify-center"
          }
        >
          <Link
            href={"https://minaprotocol.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className={"hover:opacity-80 flex justify-center items-center"}
          >
            <Image
              src={minaLogo}
              alt={"Mina logo"}
              className={"w-[25.882vw] lg:!w-[11.979vw]"}
            />
          </Link>
          <Link
            href={"https://www.aurowallet.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className={"hover:opacity-80 flex justify-center items-center"}
          >
            <Image
              src={aurowalletLogo}
              alt={"Aurowallet logo"}
              className={"w-[28.706vw] lg:!w-[20.208vw]"}
            />
          </Link>

          <Link
            href={"https://pallad.co/"}
            target="_blank"
            rel="noopener noreferrer"
            className={"hover:opacity-80 flex justify-center items-center"}
          >
            <Image
              src={palladLogo}
              alt={"Pallad logo"}
              className={"w-[23.529vw] lg:!w-[16.771vw]"}
            />
          </Link>

          <Link
            href={"https://www.zkon.xyz/"}
            target="_blank"
            rel="noopener noreferrer"
            className={"hover:opacity-80 flex justify-center items-center"}
          >
            <Image
              src={zkonLogo}
              alt={"Zkon logo"}
              className={"w-[14.353vw] lg:!w-[13.177vw]"}
            />
          </Link>
        </div>
        <div
          className={
            "grid grid-cols-2 lg:!flex flex-row w-full gap-[4.706vw] lg:!gap-[4.167vw]"
          }
        >
          <Link
            href={"https://protokit.dev/"}
            target="_blank"
            rel="noopener noreferrer"
            className={"hover:opacity-80 flex justify-center items-center"}
          >
            <Image
              src={protokitLogo}
              alt={"Protokit logo"}
              className={"w-[28.706vw] lg:!w-[14.01vw]"}
            />
          </Link>

          <Link
            href={"https://www.extropy.io/"}
            target="_blank"
            rel="noopener noreferrer"
            className={"hover:opacity-80 flex justify-center items-center"}
          >
            <Image
              src={extropyLogo}
              alt={"Extropy logo"}
              className={"w-[23.529vw] lg:!w-[12.083vw]"}
            />
          </Link>
          <Link
            href={"https://www.minafoundation.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className={"hover:opacity-80 flex justify-center items-center"}
          >
            <Image
              src={minaFoundationLogo}
              alt={"MinaFoundation logo"}
              className={"w-[23.529vw] lg:!w-[9.792vw]"}
            />
          </Link>
          <Link
            href={"https://zkok.io/"}
            target="_blank"
            rel="noopener noreferrer"
            className={
              "hover:opacity-80 justify-center items-center hidden lg:!flex"
            }
          >
            <Image
              src={zkokLogo}
              alt={"Zkok logo"}
              className={"w-[9.412vw] lg:!w-[3.542vw]"}
            />
          </Link>
          <Link
            href={"https://astromina.org/"}
            target="_blank"
            rel="noopener noreferrer"
            className={
              "hover:opacity-80 flex justify-center items-center lg:!hidden"
            }
          >
            <Image
              src={astrominaLogo}
              alt={"Astromina logo"}
              className={"w-[28.706vw] lg:!w-[12.344vw]"}
            />
          </Link>
          <Link
            href={"https://zeko.io/"}
            target="_blank"
            rel="noopener noreferrer"
            className={"hover:opacity-80 flex justify-center items-center"}
          >
            <Image
              src={zekoLogo}
              alt={"Zeko logo"}
              className={"w-[13.176vw] lg:!w-[5.521vw]"}
            />
          </Link>
          <Link
            href={"https://astromina.org/"}
            target="_blank"
            rel="noopener noreferrer"
            className={
              "hover:opacity-80 justify-center items-center hidden lg:!flex"
            }
          >
            <Image
              src={astrominaLogo}
              alt={"Astromina logo"}
              className={"w-[28.706vw] lg:!w-[12.344vw]"}
            />
          </Link>
          <Link
            href={"https://zkok.io/"}
            target="_blank"
            rel="noopener noreferrer"
            className={
              "hover:opacity-80 flex justify-center items-center lg:!hidden"
            }
          >
            <Image
              src={zkokLogo}
              alt={"Zkok logo"}
              className={"w-[9.412vw] lg:!w-[3.542vw]"}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
