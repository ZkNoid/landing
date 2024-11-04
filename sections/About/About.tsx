"use client";

import ArrowButton from "@/shared/ArrowButton";
import Image from "next/image";
import aboutBgImg from "@/public/image/about-bg.svg";

export default function About() {
  return (
    <section
      className={
        "px-[10.938vw] mt-[7.813vw] relative gap-[4.167vw] flex flex-row items-center justify-center"
      }
    >
      <span
        className={
          "w-[45%] mt-[6%] text-center text-[0.833vw] leading-[120%] font-helvetica-now font-medium text-white"
        }
      >
        While playing all your actions are accumulated inside a zero-knowledge
        circuit on the client side, ensuring verifiability of the game process
        while your strategy remains confidential.
      </span>
      <div className={"w-full flex flex-col justify-center items-center"}>
        <span
          className={
            "uppercase text-center text-yellow font-kavaimo text-[5.208vw]"
          }
        >
          About us
        </span>
        <span
          className={
            "uppercase leading-[100%] w-[31.927vw] text-center text-white font-outfit text-[3.125vw] font-bold"
          }
        >
          ZkNoid - the gaming platform Powered by zero knowledge proof
          technology based on MINA protocol.
        </span>
        <ArrowButton
          link={"#"}
          text={"More About Us"}
          className={"mt-[1.302vw]"}
        />
      </div>
      <span
        className={
          "w-[45%] mt-[6%] text-center text-[0.833vw] leading-[120%] font-helvetica-now font-medium text-white"
        }
      >
        ZkNoid provides the united ecosystem for ZK gaming – developers can use
        SDK to be a part of the platform. L2 rollup based on protokit network
        enables gasless sessions, fast transactions
      </span>
      <div
        className={
          "w-full h-full mt-[1%] -z-[1] absolute left-0 top-0 flex flex-col justify-center items-center"
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
