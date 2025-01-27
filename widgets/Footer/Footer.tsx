"use client";

import { Field, Form, Formik } from "formik";
import { motion } from "framer-motion";
import * as Yup from "yup";
import { cn } from "@/lib/helpers";
import Image from "next/image";
import blackLogo from "@/public/image/logos/black-logo.svg";
import Link from "next/link";
import { SOCIALS } from "@/lib/socials";
import { useEffect, useState } from "react";

const SubscriptionForm = () => {
  const [isDone, setIsDone] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .typeError("Wrong email")
      .email("Wrong email")
      .required("This is required field"),
    dataAccept: Yup.boolean()
      .typeError("Wrong type")
      .isTrue("This is required field"),
  });

  useEffect(() => {
    if (isDone) setTimeout(() => setIsDone(false), 5000);
  }, [isDone]);

  return (
    <Formik
      initialValues={{ email: "", dataAccept: false }}
      validationSchema={validationSchema}
      onSubmit={(values, formikHelpers) => {
        fetch("/api/subscribe", {
          method: "POST",
          body: JSON.stringify({
            email: values.email,
            termsChecked: values.dataAccept,
          }),
        }).catch((err) => console.error(err));
        formikHelpers.resetForm();
        setIsDone(true);
      }}
    >
      {({ values, errors, touched }) => (
        <Form>
          <div
            className={
              "flex flex-col gap-[1.146vw] lg:!w-[20.833vw] mt-[9.412vw] lg:!mt-0"
            }
          >
            <span
              className={
                "text-[3.765vw] lg:!text-[0.833vw] uppercase font-outfit font-bold leading-[110%] text-gray-light"
              }
            >
              Newsletter
            </span>
            <div className={"flex flex-col gap-[1.176vw] lg:!gap-[0.26vw]"}>
              <div
                className={
                  "flex flex-row items-center justify-between border-b border-b-gray-light"
                }
              >
                <Field
                  name={"email"}
                  placeholder={"Enter your email..."}
                  type={"email"}
                  className={
                    "lg:!mb-[0.26vw] placeholder:opacity-50 w-[90%] bg-yellow focus:outline-0 leading-[110%] placeholder:lg:!text-[0.729vw] placeholder:text-[3.765vw] placeholder:leading-[110%] placeholder:font-helvetica-now placeholder:text-gray-light text-[3.765vw] lg:!text-[0.729vw] font-helvetica-now text-gray-dark"
                  }
                />
                <button type={"submit"}>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={
                      "w-[6.824vw] h-[7.765vw] lg:!w-[0.99vw] lg:!h-[0.99vw]"
                    }
                  >
                    <path
                      d="M10.2231 1.52515L17.502 9.6953M17.502 9.6953L8.66345 17.5073M17.502 9.6953L1.40008 9.34652"
                      stroke="#141414"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                      className={"stroke-2 lg:!stroke-1"}
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  "flex relative items-center flex-row gap-[2.353vw] lg:!gap-[0.26vw] cursor-pointer hover:opacity-80"
                }
              >
                <Field
                  name={"dataAccept"}
                  type={"checkbox"}
                  className={
                    "absolute z-[1] cursor-pointer left-0 top-0 w-full h-full opacity-0"
                  }
                />
                <div
                  className={cn(
                    "flex justify-center items-center border",
                    touched.dataAccept && errors.dataAccept
                      ? "border-red"
                      : "border-gray-light",
                  )}
                >
                  <motion.svg
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={
                      "w-[4.706vw] h-[4.706vw] lg:!w-[0.833vw] lg:!h-[0.833vw]"
                    }
                    animate={
                      values.dataAccept ? { opacity: 1 } : { opacity: 0 }
                    }
                  >
                    <path
                      d="M2 5.63636L8.22222 12L18 2"
                      stroke="#1E1E1E"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </div>
                <span
                  className={cn(
                    "font-light font-helvetica-now text-[3.294vw] lg:!text-[0.521vw]",
                    touched.dataAccept && errors.dataAccept
                      ? "text-red"
                      : "text-gray-dark",
                  )}
                >
                  I agree to processing of personal data.
                </span>
              </div>
              {touched.email && errors.email && (
                <span
                  className={
                    "text-[3.294vw] lg:!text-[0.729vw] font-helvetica-now text-red"
                  }
                >
                  {errors.email}
                </span>
              )}
              {isDone && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={
                    "text-[3.294vw] lg:!text-[0.729vw] font-helvetica-now text-[#16a34a]"
                  }
                >
                  Success!
                </motion.span>
              )}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const lists = [
  {
    title: "About",
    items: [
      {
        text: "Our story",
        link: "https://medium.com/zknoid/zknoid-way-progress-recap-from-scratch-31a525d2d5b8",
      },
      {
        text: "Roadmap",
        link: "/#roadmap",
      },
      {
        text: "Blog",
        link: SOCIALS.medium,
      },
      {
        text: "Brand guideline",
        link: "https://www.figma.com/design/yOsjUu6cvP3FvyvjEOAbj3/ZkNoidBrandAssets_Public?node-id=0-1&t=sc0NLIjqwoWK99YG-1",
      },
    ],
  },
  {
    title: "Use",
    items: [
      {
        text: "Games",
        link: "/#games",
      },
      {
        text: "Events",
        link: "https://quest.zknoid.io/",
      },
      {
        text: "NFT",
        link: "#",
        disabled: true,
      },
      {
        text: "Token",
        link: "#",
        disabled: true,
      },
    ],
  },
  {
    title: "Build",
    items: [
      {
        text: "Docs",
        link: "https://docs.zknoid.io/docs",
      },
      {
        text: "Github",
        link: SOCIALS.github,
      },
      {
        text: "SDK",
        link: "https://docs.zknoid.io/docs/zknoid_for_developers/sdk/overview",
      },
      {
        text: "Education",
        link: "#",
        disabled: true,
      },
      {
        text: "Integration guide",
        link: "https://docs.zknoid.io/docs/zknoid_for_developers/integration_guide",
      },
    ],
  },
  {
    title: "Media",
    items: [
      {
        text: "Twitter",
        link: SOCIALS.twitter,
      },
      {
        text: "Discord",
        link: SOCIALS.discord,
      },
      {
        text: "Telegram",
        link: SOCIALS.telegram,
      },
      {
        text: "Youtube",
        link: SOCIALS.youtube,
      },
      {
        text: "Medium",
        link: SOCIALS.medium,
      },
    ],
  },
];

const ListItem = ({
  title,
  items,
  className,
}: {
  title: string;
  items: { text: string; link: string; disabled?: boolean }[];
  className?: string;
}) => {
  return (
    <div
      className={cn("flex flex-col gap-[1.176vw] lg:!gap-[0.521vw]", className)}
    >
      <span
        className={
          "mb-[1.176vw] lg:!mb-[0.26vw] uppercase text-black font-bold font-outfit text-[3.765vw] lg:!text-[0.833vw] leading-[110%]"
        }
      >
        {title}
      </span>
      {items.map((item, index) =>
        item.disabled ? (
          <span
            key={index}
            className={
              "opacity-60 cursor-not-allowed text-black uppercase hover:opacity-60 font-medium font-outfit text-[3.765vw] lg:!text-[0.833vw]"
            }
          >
            {item.text}
          </span>
        ) : (
          <Link
            key={index}
            href={item.link}
            className={
              "text-black uppercase hover:opacity-60 font-medium font-outfit text-[3.765vw] lg:!text-[0.833vw]"
            }
          >
            {item.text}
          </Link>
        ),
      )}
    </div>
  );
};

const AnimatedListItem = ({
  title,
  items,
  className,
}: {
  title: string;
  items: { text: string; link: string }[];
  className?: string;
}) => {
  return (
    <div
      className={cn("flex flex-col gap-[1.176vw] lg:!gap-[0.521vw]", className)}
    >
      <span
        className={
          "mb-[1.176vw] lg:!mb-[0.26vw] uppercase text-black font-bold font-outfit text-[3.765vw] lg:!text-[0.833vw] leading-[110%]"
        }
      >
        {title}
      </span>
      {items.map((item, index) => (
        <motion.div whileHover={"hovered"} key={index}>
          <Link
            href={item.link}
            className={
              "hover:opacity-70 flex flex-row-reverse lg:!flex-row gap-[0.706vw] lg:!gap-[1.042vw] items-center"
            }
          >
            <span
              className={
                "text-black mr-auto lg:!mr-0 uppercase font-medium font-outfit text-[3.765vw] lg:!text-[0.833vw]"
              }
            >
              {item.text}
            </span>
            <motion.svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={"w-[3.059vw] lg:!w-[0.833vw]"}
              variants={{
                hovered: { rotate: 45 },
              }}
            >
              <path
                d="M0.858513 0.646732L11.813 0.641365M11.813 0.641365L11.7956 12.4242M11.813 0.641365L0.858513 12.4242"
                stroke="#141414"
                strokeMiterlimit="10"
                strokeLinecap="square"
                className={"stroke-2 lg:!stroke-1"}
              />
            </motion.svg>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default function Footer() {
  return (
    <footer className={"mt-[23.529vw] lg:!mt-[10.417vw] bg-yellow"}>
      <div
        className={
          "px-[4.706vw] lg:!px-[6.25vw] pt-[7.059vw] pb-[2.353vw] lg:!pb-[3.021vw] lg:!pt-[3.021vw] flex flex-col gap-[5.469vw]"
        }
      >
        <div className={"flex flex-col-reverse lg:!flex-row"}>
          <div
            className={
              "lg:hidden w-full flex flex-row items-center justify-between mt-[9.412vw]"
            }
          >
            <div className={"w-full flex justify-start items-center"}>
              <span
                className={
                  "opacity-60 cursor-not-allowed text-[3.765vw] lg:!text-[0.833vw] hover:opacity-80 uppercase underline text-black font-medium font-outfit leading-[110%]"
                }
              >
                Privacy policy
              </span>
            </div>
            <div className={"w-full flex justify-end items-center"}>
              <span
                className={
                  "opacity-60 cursor-not-allowed text-[3.765vw] lg:!text-[0.833vw] hover:opacity-80 uppercase underline text-black font-medium font-outfit leading-[110%]"
                }
              >
                Copyright
              </span>
            </div>
          </div>
          <SubscriptionForm />
          <div
            className={
              "grid grid-cols-2 grid-rows-2 gap-x-[7.059vw] lg:!gap-0 lg:!flex flex-row lg:!ml-[23.438vw]"
            }
          >
            <ListItem title={lists[0].title} items={lists[0].items} />
            <ListItem
              title={lists[1].title}
              items={lists[1].items}
              className={"lg:!ml-[4.167vw]"}
            />
            <ListItem
              title={lists[2].title}
              items={lists[2].items}
              className={"lg:!ml-[5.99vw]"}
            />
            <AnimatedListItem
              title={lists[3].title}
              items={lists[3].items}
              className={"lg:!ml-[8.854vw]"}
            />
          </div>
          <div
            className={
              "lg:!hidden flex flex-row items-center justify-start w-full mb-[7.059vw]"
            }
          >
            <Link href={"/"} className={"hover:opacity-80"}>
              <Image
                src={blackLogo}
                alt={"Zknoid Logo"}
                className={"w-[28.235vw] lg:!w-[14.427vw]"}
              />
            </Link>
          </div>
        </div>
        <div className={"hidden lg:!flex flex-row"}>
          <div className={"flex flex-row items-center justify-start w-full"}>
            <Link href={"/"} className={"hover:opacity-80"}>
              <Image
                src={blackLogo}
                alt={"Zknoid Logo"}
                className={"w-[28.235vw] lg:!w-[14.427vw]"}
              />
            </Link>
          </div>
          <div className={"w-full flex justify-start items-end ml-[22.5vw]"}>
            <span
              className={
                "opacity-60 cursor-not-allowed text-[0.833vw] hover:opacity-60 uppercase underline text-black font-medium font-outfit leading-[110%]"
              }
            >
              Privacy policy
            </span>
          </div>
          <div className={"w-full flex justify-end items-end"}>
            <span
              className={
                "opacity-60 cursor-not-allowed text-[0.833vw] hover:opacity-60 uppercase underline text-black font-medium font-outfit leading-[110%]"
              }
            >
              Copyright
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
