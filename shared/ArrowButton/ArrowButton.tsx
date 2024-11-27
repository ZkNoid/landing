import { cn } from "@/lib/helpers";
import Link from "next/link";

export default function ArrowButton({
  link,
  text,
  className,
}: {
  link: string;
  text: string;
  className?: string;
}) {
  return (
    <Link
      href={link}
      className={cn(
        "flex flex-row justify-center items-center group w-full lg:w-auto",
        className,
      )}
    >
      <div
        className={
          "text-gray-dark py-[2.353vw] w-[95%] lg:w-auto lg:py-[0.417vw] group-hover:bg-white uppercase lg:px-[1.146vw] bg-yellow text-center rounded-[11.765vw] lg:rounded-[2.604vw] text-[3.765vw] lg:text-[0.833vw] font-medium font-outfit leading-[110%]"
        }
      >
        {text}
      </div>
      <div
        className={
          "rounded-full w-[8.941vw] h-[8.941vw] lg:w-[1.823vw] lg:h-[1.823vw] group-hover:bg-white -ml-[3px] bg-yellow flex justify-center items-center"
        }
      >
        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[4.706vw] lg:w-[1.198vw]"
        >
          <path
            d="M11.7692 20.3672L21 11.1831L11.7692 1.999M19.7179 11.1831L0.999987 11.1831"
            stroke="#141414"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
        </svg>
      </div>
    </Link>
  );
}
