"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/helpers";
import Link from "next/link";
import Card3D from "@/shared/Card3D";

const Block = ({
  index,
  link,
  title,
  text,
  icon,
}: {
  index: number;
  link: string;
  title: string;
  text: string;
  icon: ReactNode;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "w-full group p-[3.529vw] lg:!p-[0.781vw] hover:bg-white transition-colors hover:text-black h-full rounded-[2.353vw] lg:!rounded-[0.521vw] bg-gray-light flex flex-col"
      }
    >
      <div className="flex flex-row w-full items-center justify-between">
        <span
          className={
            "font-outfit group-hover:text-black text-[4.706vw] lg:!text-[1.25vw] text-white font-medium"
          }
        >
          0{index}
        </span>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"w-[5.882vw] lg:!w-[1.302vw] h-[5.882vw] lg:!h-[1.302vw]"}
        >
          <rect
            width="25"
            height="25"
            rx="12.5"
            className={cn(
              index % 2
                ? "fill-purple group-hover:fill-red"
                : "fill-yellow group-hover:fill-blue",
            )}
          />
          <path
            d="M12.4056 19.9985L18.999 12.583L12.4056 5.16741M18.0833 12.583L4.7133 12.583"
            stroke="#1E1E1E"
            strokeMiterlimit="10"
            strokeLinecap="square"
            className={"group-hover:stroke-white"}
          />
        </svg>
      </div>
      <div className={"mt-[4.706vw] lg:!mt-[9.115vw] flex flex-col"}>
        {icon}
        <span
          className={
            "text-[3.765vw] lg:!text-[0.833vw] group-hover:text-black uppercase mt-[2.353vw] lg:!mt-[0.781vw] leading-[110%] font-medium font-outfit text-white"
          }
        >
          {title}
        </span>
        <span
          className={
            "mt-[2.353vw] opacity-70 lg:!mt-[0.521vw] group-hover:text-black text-white text-[3.765vw] lg:!text-[0.833vw] font-helvetica-now "
          }
        >
          {text}
        </span>
      </div>
    </Link>
  );
};

const blocks = [
  {
    link: "https://docs.zknoid.io/docs/our_technologies#recursive-proof",
    title: "Recursive proof",
    text: "Recursive Proof allows the division of calculations into parts, allowing more complex circuits and enabling conditional execution of specific components.",
    icon: (
      <svg
        width="78"
        height="62"
        viewBox="0 0 78 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={"w-[17.882vw] lg:!w-[4.063vw]"}
      >
        <path
          d="M1 2C1 1.44771 1.44772 1 2 1H76.25C76.8023 1 77.25 1.44772 77.25 2V60C77.25 60.5523 76.8023 61 76.25 61H2C1.44771 61 1 60.5523 1 60V2Z"
          stroke="#DCB8FF"
          strokeWidth="1.5"
          className={"group-hover:stroke-red"}
        />
        <path
          d="M10.9981 2C10.9981 1.44772 11.4458 1 11.9981 1H67.4981C68.0504 1 68.4981 1.44772 68.4981 2V48.75C68.4981 49.3023 68.0504 49.75 67.4981 49.75H11.9981C11.4458 49.75 10.9981 49.3023 10.9981 48.75V2Z"
          stroke="#DCB8FF"
          strokeWidth="1.5"
          className={"group-hover:stroke-red"}
        />
        <path
          d="M18.4981 2C18.4981 1.44771 18.9458 1 19.4981 1H58.7481C59.3004 1 59.7481 1.44772 59.7481 2V37.5C59.7481 38.0523 59.3004 38.5 58.7481 38.5H19.4981C18.9458 38.5 18.4981 38.0523 18.4981 37.5V2Z"
          stroke="#DCB8FF"
          strokeWidth="1.5"
          className={"group-hover:stroke-red"}
        />
        <path
          d="M24.7519 2C24.7519 1.44771 25.1996 1 25.7519 1H52.5019C53.0542 1 53.5019 1.44772 53.5019 2V28.75C53.5019 29.3023 53.0542 29.75 52.5019 29.75H25.7519C25.1996 29.75 24.7519 29.3023 24.7519 28.75V2Z"
          stroke="#DCB8FF"
          strokeWidth="1.5"
          className={"group-hover:stroke-red"}
        />
        <path
          d="M31 2C31 1.44772 31.4477 1 32 1H46.25C46.8023 1 47.25 1.44772 47.25 2V18.75C47.25 19.3023 46.8023 19.75 46.25 19.75H32C31.4477 19.75 31 19.3023 31 18.75V2Z"
          stroke="#DCB8FF"
          strokeWidth="1.5"
          className={"group-hover:stroke-red"}
        />
      </svg>
    ),
  },
  {
    link: "https://docs.zknoid.io/docs/our_technologies#zk-circuit",
    title: "Zk Circuit",
    text: "ZK Circuits are sets of constraints applied to variables. A ZK Proof verifies that the given inputs satisfy all these constraints, ensuring the integrity of computations without revealing the underlying data.",
    icon: (
      <svg
        width="65"
        height="60"
        viewBox="0 0 65 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={"w-[15.294vw] lg:!w-[3.385vw]"}
      >
        <path
          d="M24.2494 47.4997C24.2494 53.9889 18.9889 59.2494 12.4997 59.2494C6.01052 59.2494 0.75 53.9889 0.75 47.4997C0.75 41.0105 6.01052 35.75 12.4997 35.75C18.9889 35.75 24.2494 41.0105 24.2494 47.4997Z"
          stroke="#D4FF33"
          strokeWidth="1.5"
          className={"group-hover:stroke-blue"}
        />
        <path
          d="M44.2494 12.4997C44.2494 18.9889 38.9889 24.2494 32.4997 24.2494C26.0105 24.2494 20.75 18.9889 20.75 12.4997C20.75 6.01052 26.0105 0.75 32.4997 0.75C38.9889 0.75 44.2494 6.01052 44.2494 12.4997Z"
          stroke="#D4FF33"
          strokeWidth="1.5"
          className={"group-hover:stroke-blue"}
        />
        <path
          d="M64.2494 47.4997C64.2494 53.9889 58.9889 59.2494 52.4997 59.2494C46.0105 59.2494 40.75 53.9889 40.75 47.4997C40.75 41.0105 46.0105 35.75 52.4997 35.75C58.9889 35.75 64.2494 41.0105 64.2494 47.4997Z"
          stroke="#D4FF33"
          strokeWidth="1.5"
          className={"group-hover:stroke-blue"}
        />
        <path
          d="M8.5 47.4961C8.5 49.7052 10.2909 51.4961 12.5 51.4961C14.7091 51.4961 16.5 49.7052 16.5 47.4961C16.5 45.287 14.7091 43.4961 12.5 43.4961C10.2909 43.4961 8.5 45.287 8.5 47.4961ZM48.499 47.4961C48.499 49.7052 50.2899 51.4961 52.499 51.4961C54.7082 51.4961 56.499 49.7052 56.499 47.4961C56.499 45.287 54.7082 43.4961 52.499 43.4961C50.2899 43.4961 48.499 45.287 48.499 47.4961ZM12.5 48.2461H52.499V46.7461H12.5V48.2461Z"
          fill="#D4FF33"
          className={"group-hover:fill-blue"}
        />
        <path
          d="M34.4896 9.26039C32.5798 8.15008 30.1408 8.8036 29.0419 10.7201C27.9431 12.6365 28.6005 15.0902 30.5104 16.2005C32.4202 17.3109 34.8592 16.6573 35.9581 14.7409C37.0569 12.8244 36.3995 10.3707 34.4896 9.26039ZM14.6287 43.8996C12.7189 42.7893 10.2799 43.4428 9.18104 45.3593C8.08221 47.2757 8.73966 49.7294 10.6495 50.8397C12.5593 51.9501 14.9984 51.2965 16.0972 49.3801C17.196 47.4636 16.5386 45.0099 14.6287 43.8996ZM31.8516 12.3535L11.9907 46.9927L13.2875 47.7466L33.1484 13.1074L31.8516 12.3535Z"
          fill="#D4FF33"
          className={"group-hover:fill-blue"}
        />
        <path
          d="M30.5104 9.26039C32.4202 8.15008 34.8592 8.8036 35.9581 10.7201C37.0569 12.6365 36.3995 15.0902 34.4896 16.2005C32.5798 17.3109 30.1408 16.6573 29.0419 14.7409C27.9431 12.8244 28.6005 10.3707 30.5104 9.26039ZM50.3713 43.8996C52.2811 42.7893 54.7201 43.4428 55.819 45.3593C56.9178 47.2757 56.2603 49.7294 54.3505 50.8397C52.4407 51.9501 50.0016 51.2965 48.9028 49.3801C47.804 47.4636 48.4614 45.0099 50.3713 43.8996ZM33.1484 12.3535L53.0093 46.9927L51.7125 47.7466L31.8516 13.1074L33.1484 12.3535Z"
          fill="#D4FF33"
          className={"group-hover:fill-blue"}
        />
      </svg>
    ),
  },
  {
    link: "https://docs.zknoid.io/docs/our_technologies#zk-proof",
    title: "Zk Proof",
    text: "Proof is a cryptographic technology that allows you to prove certain properties of an object without revealing any additional data about that object.",
    icon: (
      <svg
        width="81"
        height="60"
        viewBox="0 0 81 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={"w-[18.824vw] lg:!w-[4.219vw]"}
      >
        <path
          d="M50.3959 0C46.8326 0 43.4155 0.618635 40.2439 1.75149C37.0723 0.618635 33.6552 0 30.0919 0C13.4725 0 0.00275794 13.432 0 30.0013C0 46.5707 13.4725 60 30.0919 60C33.6552 60 37.0723 59.3813 40.2439 58.2484C43.4155 59.3813 46.8326 60 50.3959 60C67.0153 60 80.4851 46.568 80.4878 30.0013C80.4878 13.432 67.0153 0.00274965 50.3959 0ZM30.0919 57.5501C22.4579 57.5501 15.5576 54.4677 10.5519 49.4799C5.54899 44.4893 2.46006 37.6096 2.4573 29.9986C2.4573 22.3876 5.54899 15.508 10.5519 10.5174C15.5576 5.52954 22.4551 2.44991 30.0919 2.44716C32.3865 2.44716 34.615 2.7276 36.7468 3.25278C31.0407 6.15366 26.3852 10.8171 23.5032 16.5253C25.2048 14.6253 27.2595 13.0498 29.5652 11.8977C32.301 10.5311 35.3844 9.75574 38.6526 9.75574C49.8664 9.75574 58.9538 18.8185 58.9538 29.9986C58.9538 41.1786 49.8636 50.2415 38.6526 50.2415C35.3844 50.2415 32.2983 49.4661 29.5652 48.0995C27.2595 46.9474 25.2048 45.3719 23.5032 43.4719C26.3852 49.1801 31.0407 53.8435 36.7468 56.7444C34.615 57.2696 32.3865 57.5501 30.0919 57.5501ZM26.479 30.0013C26.479 23.3005 31.9287 17.8672 38.6498 17.8672C45.3709 17.8672 50.8206 23.3005 50.8206 30.0013C50.8206 36.7022 45.3709 42.1356 38.6498 42.1356C31.9287 42.1356 26.479 36.7022 26.479 30.0013Z"
          fill="#DCB8FF"
          className={"group-hover:fill-red"}
        />
      </svg>
    ),
  },
  {
    link: "https://docs.zknoid.io/docs/our_technologies#protokit",
    title: "Mina and protokit networks interplay",
    text: "Combines power of ZK blockchain with fast and gasless transactions enabling multiplayer and background sessions.",
    icon: (
      <svg
        width="189"
        height="60"
        viewBox="0 0 189 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={"w-[44.706vw] lg:!w-[9.844vw]"}
      >
        <path
          d="M188.471 6.28493V0H182.24V4.41899L154.918 20.5253L97.3508 3.55655V0H91.1198V2.65784H6.23105V0H0V6.28493H6.23105V3.62708H91.1198V6.28493H97.3508V4.56408L153.274 21.0492L130.661 27.7149L97.3508 21.1681V17.9057H91.1198V20.5635H74.005L91.1198 13.8373V15.2358H97.3508V8.95083H91.1198V12.7976L71.3639 20.5615H48.7194L6.23105 12.2112V8.94882H0V15.2337H6.23105V13.1965L43.707 20.5615H6.23105V17.9037H0V24.1886H6.23105V22.4678L40.6804 32.6216L39.4957 33.087L6.23105 29.8186V26.8565H0V33.1415H6.23105V31.4206L27.663 37.7378L6.23105 46.1607V44.7622H0V51.0471H6.23105V47.4906L33.4885 39.4566L91.1198 56.4434V60H97.3508V57.3422H182.24V60H188.471V53.7151H182.24V55.4359L125.811 38.8037L130.833 35.8416L154.956 33.4719L182.24 38.834V42.0963H188.471V35.8114H182.24V37.8486L158.298 33.1435L182.24 30.7919V33.1435H188.471V26.8585H182.24V28.5794L156.69 21.0492L182.24 13.5189V15.2398H188.471V8.95486H182.24V12.5114L158.588 19.4835L182.24 5.54138V6.28694H188.471V6.28493ZM151.374 22.6169L139.711 29.4922L132.713 28.1179L151.374 22.6169ZM97.3528 33.1435V31.4226L107.717 34.4774L97.3528 37.5322V35.8114H91.1218V37.8486L59.8149 31.6967L76.0347 26.917L91.1218 29.8811V33.1435H97.3528ZM57.7672 31.2957L50.3935 29.8469L63.9083 24.5352L73.985 26.516L57.7672 31.2977V31.2957ZM55.7615 31.8861L48.6774 33.9737L43.655 32.4926L48.7214 30.5017L55.7615 31.8861ZM57.8112 32.2891L84.2775 37.4899L51.1946 34.2397L57.8112 32.2891ZM109.425 34.9812L114.5 36.4764L99.2747 37.9715L109.425 34.9792V34.9812ZM111.133 34.4774L130.707 28.7084L138.457 30.2317L130.534 34.9026L117.063 36.2265L111.133 34.4794V34.4774ZM128.658 28.3053L109.425 33.9757L97.3528 30.4171V26.8606H91.1218V28.8978L78.0405 26.3266L91.1218 22.4698V24.1906H97.3528V22.1534L128.658 28.3053ZM90.8901 21.5328L75.9908 25.9236L65.5804 23.8783L71.5498 21.5328H90.8901ZM68.9087 21.5328L63.8204 23.5317L53.6438 21.5328H68.9107H68.9087ZM62.1483 24.1886L48.6335 29.5003L8.08492 21.5328H48.6295L62.1483 24.1886ZM13.2571 23.5337L46.9613 30.1572L42.1467 32.0493L13.2571 23.5337ZM42.1927 33.0689L43.647 33.4981L41.6113 33.2986L42.1927 33.0709V33.0689ZM46.1622 34.7152L33.4925 38.4491L30.6396 37.6088L39.6336 34.0744L46.1602 34.7152H46.1622ZM8.15286 30.9813L37.5219 33.8669L29.1313 37.1655L8.15286 30.9813ZM13.5229 44.337L29.1753 38.1851L31.7844 38.9549L13.5229 44.337ZM35.2005 38.9549L48.6794 34.9812L91.1238 47.4926V51.0492H97.3548V44.7642H91.1238V46.4851L53.7138 35.4588L91.1238 39.1342V42.0963H97.3548V39.1342L116.973 37.2058L123.41 39.102L97.3548 54.4626V53.7171H91.1238V55.4379L35.2005 38.9549ZM182.008 56.3769H97.3528V55.583L124.674 39.4768L182.008 56.3769ZM124.546 38.433L119.534 36.9559L128.556 36.0693L124.546 38.433ZM132.813 34.6789L139.881 30.5118L151.662 32.8271L132.811 34.6789H132.813ZM182.242 29.8227L155.006 32.4987L141.136 29.7723L155.046 21.5711L182.24 29.5869V29.8207L182.242 29.8227Z"
          fill="#D4FF33"
          className={"group-hover:fill-blue"}
        />
      </svg>
    ),
  },
];

export default function Technologies() {
  return (
    <section
      className={
        "px-[4.706vw] lg:!px-[10.938vw] mt-[25.882vw] lg:!mt-[10.417vw] flex flex-col"
      }
    >
      <span
        className={
          "text-[13.647vw] lg:!text-[5.208vw] mb-[3.529vw] lg:!mb-[1.042vw] text-center leading-[80%] font-kavaimo uppercase text-yellow"
        }
      >
        Our Technologies
      </span>
      <div
        className={"flex flex-col lg:!flex-row gap-[2.353vw] lg:!gap-[0.521vw]"}
      >
        {blocks.map((item, index) => (
          <Card3D
            key={index}
            className={"w-full h-auto"}
            hasViewAnimation={true}
          >
            <Block
              index={index + 1}
              link={item.link}
              title={item.title}
              text={item.text}
              icon={item.icon}
            />
          </Card3D>
        ))}
      </div>
    </section>
  );
}
