"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { GrInstagram } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { HiDocumentArrowDown } from "react-icons/hi2";

function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#D9FB69",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const row1 = [
    "/companies/css.png",
    "/companies/express.png",
    "/companies/framermotion.png",
    "/companies/git.png",
    "/companies/github.png",
    "/companies/htmls.png",
    "/companies/java.png",
    "/companies/javascript.png",
  ];

  const row2 = [
    "/companies/mongo.png",
    "/companies/mysql.png",
    "/companies/nextjs.png",
    "/companies/nodejs.png",
    "/companies/python.png",
    "/companies/reactjs.png",
    "/companies/springboot.png",
    "/companies/tailwind.png",
  ];

  return (
    <>
      <div className="bg-[#D9FB69] relative h-[60vh] md:h-[80vh] flex justify-center items-center">
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        />

        <div className="flex flex-col justify-center items-center">
          <span
            className="text-[12vw] md:text-[10vw] lg:text-[20vh] font-bold "
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            HI I'M WEB
          </span>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Responsive Design",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Full Stack Development",
              1000,
              "Web Develpment",
              1000,
              "MERN Stack",
              1000,
              "Core JAVA",
              1000,
              "Backend Development",
              1000,
              "Machine Learning",
              1000,
            ]}
            wrapper="span"
            className="text-4xl font-bold inline-block"
            speed={50}
            repeat={Infinity}
          />
          <span className="text-[12vw] md:text-[10vw] lg:text-[20vh] font-bold stroke ">
            DEVELOPER
          </span>
        </div>
        <div className="flex  md:flex-col gap-4 absolute z-40 bottom-5 md:bottom-auto  md:right-5 ">
          <Link href={"https://www.instagram.com/priyanshufx/"} target="_blank">
            <GrInstagram className="text-2xl" />
          </Link>
          <Link href={"https://github.com/priyanshufox"} target="_blank">
            <AiFillGithub className="text-2xl" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/priyanshu-rathore-690a84292/"}
            target="_blank"
          >
            <FaLinkedinIn className="text-2xl" />
          </Link>

          <Link
            href={
              "https://drive.google.com/file/d/1uJl9qgMZV9nIwtzq6TX_hWjBEJF8ijdo/view?usp=sharing"
            }
            target="_blank"
          >
            <HiDocumentArrowDown className="text-2xl text-purple-600" />
          </Link>
        </div>
      </div>

      <div className={" h-[14rem] mt-2  w-full overflow-hidden "}>
        <div className={"mt-16 flex w-full flex-col justify-center "}>
          <div
            className={
              "w-full border-b-2 border-t-2 border-sky-200 bg-black py-5"
            }
          >
            <Marquee speed={20} direction="right">
              <div
                className={
                  "flex w-full flex-row items-center text-white justify-evenly gap-5 px-2.5"
                }
              >
                <span className={"text-md font-robotoMono font-normal"}>
                  CSS
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky-500"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  JavaScript
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky-500"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  TypeScript
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky-500"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  Python
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky-500"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  Node.js
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky-500"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  React.js
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky-500"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  Tailwind CSS
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky-500"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  Next.js
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky-500"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  Flask
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky-500"}></div>
                <span className={"text-md font-robotoMono font-normal"}>C</span>
                <div className={"h-2 w-2 rounded-full bg-sky-500"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  Github
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky-500"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  Git
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky-500"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  MongoDB
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky-500"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  HTML
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky-500"}></div>
                <span className={"text-md font-robotoMono font-normal"}>C</span>
                <div className={"h-2 w-2 rounded-full bg-sky-500"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  C++
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky-500"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  MySQL
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky-500"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  NextJS
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky-500"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  HTML
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky-500"}></div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
