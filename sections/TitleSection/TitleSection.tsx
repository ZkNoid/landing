import titleCoverImg from "@/public/image/title-cover.svg";
import mobileCoverImg from "@/public/image/mobile-cover.svg";
import Image from "next/image";

export default function TitleSection() {
  return (
    <section
      className={
        "flex flex-col pl-[4.706vw] pr-[2.604vw] lg:!pl-[2.604vw] lg:!pr-[2.604vw]"
      }
    >
      <div className="flex flex-row items-center justify-end lg:justify-normal">
        <div className="flex flex-col lg:!hidden">
          <span
            className={
              "text-[13.647vw] text-white font-bold font-outfit uppercase leading-[95%]"
            }
          >
            Explore the
          </span>
          <div className={"flex flex-row items-center h-fit"}>
            <span
              className={
                "text-[13.647vw] text-white font-bold font-outfit uppercase leading-[95%]"
              }
            >
              World
            </span>
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[8.706vw] h-[8.706vw]"
            >
              <path
                d="M50 0L58.0964 41.9036L100 50L58.0964 58.0964L50 100L41.9036 58.0964L0 50L41.9036 41.9036L50 0Z"
                fill="#3A39FF"
              />
            </svg>
          </div>
        </div>
        <span
          className={
            "hidden lg:!inline-block text-[8.333vw] text-white font-bold font-outfit uppercase leading-[95%]"
          }
        >
          Explore the world
        </span>
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden lg:!block w-[6.25vw]"
        >
          <path
            d="M50 0L58.0964 41.9036L100 50L58.0964 58.0964L50 100L41.9036 58.0964L0 50L41.9036 41.9036L50 0Z"
            fill="#3A39FF"
          />
        </svg>
      </div>
      <div className="flex flex-row justify-end lg:!justify-center items-center gap-[1.25vw]">
        <span
          className={
            "text-[2.031vw] hidden lg:!inline-block leading-[120%] text-white font-thin font-helvetica-now w-[48vw]"
          }
        >
          ZkNoid is a home for provable gaming. On the platform you can try
          yourself the cutting edge games utilizing Zero-Knowledge proofs
        </span>
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[8.706vw] lg:!w-[6.25vw] h-[8.706vw] lg:!h-[6.25vw]"
        >
          <path
            d="M50 0L58.0964 41.9036L100 50L58.0964 58.0964L50 100L41.9036 58.0964L0 50L41.9036 41.9036L50 0Z"
            fill="#3A39FF"
          />
        </svg>
        <span
          className={
            "text-[13.647vw] lg:!text-[8.333vw] text-white font-bold font-outfit uppercase leading-[95%]"
          }
        >
          Of web3
        </span>
      </div>
      <Image
        src={titleCoverImg}
        alt={"Title cover"}
        className="w-full mt-[1.458vw] hidden lg:!block"
      />
      <Image
        src={mobileCoverImg}
        alt={"Title cover"}
        className="w-full mt-[1.458vw] lg:hidden mr-[2.604vw]"
      />
      <span
        className={
          "w-full mt-[1.458vw] text-[13.176vw] lg:!text-[8.333vw] text-white font-bold font-outfit uppercase leading-[95%]"
        }
      >
        ZK-provable Gaming
      </span>
    </section>
  );
}
