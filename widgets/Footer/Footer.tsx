"use client";

import { Field, Form, Formik } from "formik";
import { motion } from "framer-motion";
import * as Yup from "yup";
import { cn } from "@/lib/helpers";
import Image from "next/image";
import blackLogo from "@/public/image/logos/black-logo.svg";
import Link from "next/link";

const SubscriptionForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .typeError("Wrong email")
      .email("Wrong email")
      .required("This is required field"),
    dataAccept: Yup.boolean()
      .typeError("Wrong type")
      .isTrue("This is required field"),
  });

  return (
    <Formik
      initialValues={{ email: "", dataAccept: false }}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      {({ values, errors, touched }) => (
        <Form>
          <div className={"flex flex-col gap-[1.146vw] w-[20.833vw]"}>
            <span
              className={
                "text-[0.833vw] uppercase font-outfit font-bold leading-[110%] text-gray-light"
              }
            >
              Newsletter
            </span>
            <div className={"flex flex-col gap-[0.26vw]"}>
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
                    "mb-[0.26vw] w-[90%] bg-yellow focus:outline-0 leading-[110%] placeholder:text-[0.729vw] placeholder:leading-[110%] placeholder:font-helvetica-now placeholder:text-gray-light text-[0.729vw] font-helvetica-now text-gray-dark"
                  }
                />
                <button type={"submit"}>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={"w-[0.99vw]"}
                  >
                    <path
                      d="M10.2231 1.52515L17.502 9.6953M17.502 9.6953L8.66345 17.5073M17.502 9.6953L1.40008 9.34652"
                      stroke="#141414"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  "flex relative items-center flex-row gap-[0.26vw] cursor-pointer hover:opacity-80"
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
                    className={"w-[0.833vw]"}
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
                    "font-light font-helvetica-now text-[0.521vw]",
                    touched.dataAccept && errors.dataAccept
                      ? "text-red"
                      : "text-gray-dark",
                  )}
                >
                  I agree to processing of personal data.
                </span>
              </div>
              {touched.email && errors.email && (
                <span className={"text-[0.729vw] font-helvetica-now text-red"}>
                  {errors.email}
                </span>
              )}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default function Footer() {
  return (
    <footer className={"mt-[10.417vw] bg-yellow"}>
      <div className={"px-[6.25vw] py-[3.021vw] flex flex-col gap-[5.469vw]"}>
        <div className={"flex flex-row"}>
          <SubscriptionForm />
          <div className={"flex flex-row ml-[23.438vw]"}>
            <div className={"flex flex-col gap-[0.521vw]"}>
              <span
                className={
                  "mb-[0.26vw] uppercase text-black font-bold font-outfit text-[0.833vw] leading-[110%]"
                }
              >
                About
              </span>
              <Link
                href={"#"}
                className={
                  "text-black uppercase hover:opacity-80 font-medium font-outfit text-[0.833vw]"
                }
              >
                Our story
              </Link>
              <Link
                href={"#"}
                className={
                  "text-black uppercase hover:opacity-80 font-medium font-outfit text-[0.833vw]"
                }
              >
                Roadmap
              </Link>
              <Link
                href={"#"}
                className={
                  "text-black uppercase hover:opacity-80 font-medium font-outfit text-[0.833vw]"
                }
              >
                Blog
              </Link>
              <Link
                href={"#"}
                className={
                  "text-black uppercase hover:opacity-80 font-medium font-outfit text-[0.833vw]"
                }
              >
                Brand guideline
              </Link>
            </div>
            <div className={"flex flex-col gap-[0.521vw] ml-[4.167vw]"}>
              <span
                className={
                  "mb-[0.26vw] uppercase text-black font-bold font-outfit text-[0.833vw] leading-[110%]"
                }
              >
                Use
              </span>
              <Link
                href={"#"}
                className={
                  "text-black uppercase hover:opacity-80 font-medium font-outfit text-[0.833vw]"
                }
              >
                Games
              </Link>
              <Link
                href={"#"}
                className={
                  "text-black uppercase hover:opacity-80 font-medium font-outfit text-[0.833vw]"
                }
              >
                Events
              </Link>
              <Link
                href={"#"}
                className={
                  "text-black uppercase hover:opacity-80 font-medium font-outfit text-[0.833vw]"
                }
              >
                NFT
              </Link>
              <Link
                href={"#"}
                className={
                  "text-black uppercase hover:opacity-80 font-medium font-outfit text-[0.833vw]"
                }
              >
                Token
              </Link>
            </div>
            <div className={"flex flex-col gap-[0.521vw] ml-[5.99vw]"}>
              <span
                className={
                  "mb-[0.26vw] uppercase text-black font-bold font-outfit text-[0.833vw] leading-[110%]"
                }
              >
                Build
              </span>
              <Link
                href={"#"}
                className={
                  "text-black uppercase hover:opacity-80 font-medium font-outfit text-[0.833vw]"
                }
              >
                Docs
              </Link>
              <Link
                href={"#"}
                className={
                  "text-black uppercase hover:opacity-80 font-medium font-outfit text-[0.833vw]"
                }
              >
                Github
              </Link>
              <Link
                href={"#"}
                className={
                  "text-black uppercase hover:opacity-80 font-medium font-outfit text-[0.833vw]"
                }
              >
                SDK
              </Link>
              <Link
                href={"#"}
                className={
                  "text-black uppercase hover:opacity-80 font-medium font-outfit text-[0.833vw]"
                }
              >
                Education
              </Link>
              <Link
                href={"#"}
                className={
                  "text-black uppercase hover:opacity-80 font-medium font-outfit text-[0.833vw]"
                }
              >
                Listing guide
              </Link>
            </div>
            <div className={"flex flex-col gap-[0.521vw] ml-[8.854vw]"}>
              <span
                className={
                  "mb-[0.26vw] uppercase text-black font-bold font-outfit text-[0.833vw] leading-[110%]"
                }
              >
                Media
              </span>
              <motion.div whileHover={"hovered"}>
                <Link
                  href={"#"}
                  className={
                    "hover:opacity-80 flex flex-row gap-[1.042vw] items-center"
                  }
                >
                  <span
                    className={
                      "text-black uppercase font-medium font-outfit text-[0.833vw]"
                    }
                  >
                    Twitter
                  </span>
                  <motion.svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={"w-[0.833vw]"}
                    variants={{
                      hovered: { rotate: 45 },
                    }}
                  >
                    <path
                      d="M0.858513 0.646732L11.813 0.641365M11.813 0.641365L11.7956 12.4242M11.813 0.641365L0.858513 12.4242"
                      stroke="#141414"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
              <motion.div whileHover={"hovered"}>
                <Link
                  href={"#"}
                  className={
                    "hover:opacity-80 flex flex-row gap-[1.042vw] items-center"
                  }
                >
                  <span
                    className={
                      "text-black uppercase font-medium font-outfit text-[0.833vw]"
                    }
                  >
                    Discord
                  </span>
                  <motion.svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={"w-[0.833vw]"}
                    variants={{
                      hovered: { rotate: 45 },
                    }}
                  >
                    <path
                      d="M0.858513 0.646732L11.813 0.641365M11.813 0.641365L11.7956 12.4242M11.813 0.641365L0.858513 12.4242"
                      stroke="#141414"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
              <motion.div whileHover={"hovered"}>
                <Link
                  href={"#"}
                  className={
                    "hover:opacity-80 flex flex-row gap-[1.042vw] items-center"
                  }
                >
                  <span
                    className={
                      "text-black uppercase font-medium font-outfit text-[0.833vw]"
                    }
                  >
                    Telegram
                  </span>
                  <motion.svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={"w-[0.833vw]"}
                    variants={{
                      hovered: { rotate: 45 },
                    }}
                  >
                    <path
                      d="M0.858513 0.646732L11.813 0.641365M11.813 0.641365L11.7956 12.4242M11.813 0.641365L0.858513 12.4242"
                      stroke="#141414"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
              <motion.div whileHover={"hovered"}>
                <Link
                  href={"#"}
                  className={
                    "hover:opacity-80 flex flex-row gap-[1.042vw] items-center"
                  }
                >
                  <span
                    className={
                      "text-black uppercase font-medium font-outfit text-[0.833vw]"
                    }
                  >
                    Youtube
                  </span>
                  <motion.svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={"w-[0.833vw]"}
                    variants={{
                      hovered: { rotate: 45 },
                    }}
                  >
                    <path
                      d="M0.858513 0.646732L11.813 0.641365M11.813 0.641365L11.7956 12.4242M11.813 0.641365L0.858513 12.4242"
                      stroke="#141414"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
              <motion.div whileHover={"hovered"}>
                <Link
                  href={"#"}
                  className={
                    "hover:opacity-80 flex flex-row gap-[1.042vw] items-center"
                  }
                >
                  <span
                    className={
                      "text-black uppercase font-medium font-outfit text-[0.833vw]"
                    }
                  >
                    Medium
                  </span>
                  <motion.svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={"w-[0.833vw]"}
                    variants={{
                      hovered: { rotate: 45 },
                    }}
                  >
                    <path
                      d="M0.858513 0.646732L11.813 0.641365M11.813 0.641365L11.7956 12.4242M11.813 0.641365L0.858513 12.4242"
                      stroke="#141414"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        <div className={"flex flex-row"}>
          <div className={"flex flex-row items-center justify-start w-full"}>
            <Link href={"/"} className={"hover:opacity-80"}>
              <Image
                src={blackLogo}
                alt={"Zknoid Logo"}
                className={"w-[14.427vw]"}
              />
            </Link>
          </div>
          <div className={"w-full flex justify-center items-end"}>
            <Link
              href="#"
              className={
                "text-[0.833vw] hover:opacity-80 uppercase underline text-black font-medium font-outfit leading-[110%]"
              }
            >
              Privacy policy
            </Link>
          </div>
          <div className={"w-full flex justify-end items-end"}>
            <Link
              href="#"
              className={
                "text-[0.833vw] hover:opacity-80 uppercase underline text-black font-medium font-outfit leading-[110%]"
              }
            >
              Copyright
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
