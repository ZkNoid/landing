"use client";

import ArrowButton from "@/shared/ArrowButton";
import Image from "next/image";
import aboutBgImg from "@/public/image/about-bg.svg";

export default function About() {
  return (
    <section
      className={
        "px-[4.706vw] lg:!px-[10.938vw] mt-[23.529vw] lg:!mt-[7.813vw] relative gap-[4.167vw] flex flex-row items-center justify-center"
      }
    >
      <span
        className={
          "hidden lg:!inline-block w-[45%] mt-[6%] text-center text-[0.833vw] leading-[120%] font-helvetica-now font-medium text-white"
        }
      >
        While playing all your actions are accumulated inside a zero-knowledge
        circuit on the client side, ensuring verifiability of the game process
        while your strategy remains confidential.
      </span>
      <div className={"w-full flex flex-col justify-center items-center"}>
        <span
          className={
            "uppercase text-center text-yellow font-kavaimo text-[13.647vw] lg:!text-[5.208vw]"
          }
        >
          About us
        </span>
        <span
          className={
            "uppercase leading-[100%] w-full lg:!w-[31.927vw] text-center text-white font-outfit text-[8.235vw] lg:!text-[3.125vw] font-bold"
          }
        >
          ZkNoid - the gaming platform Powered by zero knowledge proof
          technology based on MINA protocol.
        </span>
        <div
          className={
            "w-full flex flex-col gap-[2.353vw] mt-[2.353vw] lg:!hidden"
          }
        >
          <span
            className={
              "font-helvetica-now text-center text-white text-[4.235vw] leading-[120%]"
            }
          >
            While playing all your actions are accumulated inside a
            zero-knowledge circuit on the client side, ensuring verifiability of
            the game process while your strategy remains confidential.
          </span>
          <span
            className={
              "font-helvetica-now text-center text-white text-[4.235vw] leading-[120%]"
            }
          >
            ZkNoid provides the united ecosystem for ZK gaming – developers can
            use SDK to be a part of the platform. L2 rollup based on protokit
            network enables gasless sessions, fast transactions
          </span>
        </div>
        <ArrowButton
          link={"#"}
          text={"More About Us"}
          className={"mt-[3.529vw] lg:!mt-[1.302vw]"}
        />
      </div>
      <span
        className={
          "hidden lg:!inline-block w-[45%] mt-[6%] text-center text-[0.833vw] leading-[120%] font-helvetica-now font-medium text-white"
        }
      >
        ZkNoid provides the united ecosystem for ZK gaming – developers can use
        SDK to be a part of the platform. L2 rollup based on protokit network
        enables gasless sessions, fast transactions
      </span>
      <div
        className={
          "hidden lg:!flex w-full h-full mt-[1%] -z-[1] absolute left-0 top-0 flex-col justify-center items-center"
        }
      >
        <Image
          src={aboutBgImg}
          alt={"About background"}
          className={"object-center object-contain"}
        />
      </div>
    </section>
  );
}
