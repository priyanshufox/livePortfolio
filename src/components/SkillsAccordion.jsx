"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { RiArrowRightSLine, RiFile2Fill, RiFolderFill } from "react-icons/ri";
import * as React from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const SkillsAccordion = () => {
  const accordionRef = useRef(null);

  const [accordion, setAccordion] = React.useState("");

  const programmingRef = useRef(null);
  const frameworksRef = useRef(null);
  const databaseRef = useRef(null);
  const designingRef = useRef(null);
  return (
    <>
      <Accordion
        id={"accordion"}
        type="single"
        collapsible
        className={"w-full"}
        ref={accordionRef}
        value={accordion}
        onValueChange={setAccordion}
      >
        <AccordionItem ref={programmingRef} value="programming">
          <AccordionTrigger
            className={
              "font-robotoMono my-2 flex w-full flex-row items-center justify-start gap-2 rounded-xl border-2 border-purple bg-violet-dark p-2"
            }
          >
            <RiArrowRightSLine className={"text-purple-500"} />
            <div className={"flex flex-row items-center justify-center gap-5"}>
              <RiFolderFill className={"text-2xl text-blue-500"} />
              <span className={"text-md text-blue-500"}>
                Programming Languages
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div
              className={
                "mx-5 my-2 grid w-full grid-cols-2 gap-x-2 gap-y-4 text-xl md:mx-20 md:gap-x-10"
              }
            >
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple-200"} /> Java
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple-200"} /> JavaScript
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple-200"} /> Python
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple-200"} /> C
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple-200"} /> C++
              </span>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem ref={frameworksRef} value="frameworks">
          <AccordionTrigger
            className={
              "font-robotoMono my-2 flex w-full flex-row items-center justify-start gap-2 rounded-xl border-2 border-purple bg-violet-dark p-2"
            }
          >
            <RiArrowRightSLine className={"text-purple-500"} />
            <div className={"flex flex-row items-center justify-center gap-5"}>
              <RiFolderFill className={"text-2xl text-blue-500"} />
              <span className={"text-md text-blue-500"}>Frameworks</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div
              className={
                "mx-5 my-2 grid w-full grid-cols-2 gap-x-2 gap-y-4 text-xl md:mx-20 md:gap-x-10"
              }
            >
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple-200"} /> NextJs
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple-200"} /> ReactJs
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple-200"} /> Express
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple-200"} /> Tailwind CSS
              </span>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem ref={databaseRef} value="database">
          <AccordionTrigger
            className={
              "font-robotoMono my-2 flex w-full flex-row items-center justify-start gap-2 rounded-xl border-2 border-purple bg-violet-dark p-2"
            }
          >
            <RiArrowRightSLine className={"text-purple-500"} />
            <div className={"flex flex-row items-center justify-center gap-5"}>
              <RiFolderFill className={"text-2xl text-blue-500"} />
              <span className={"text-md text-blue-500"}>Database</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div
              className={
                "mx-5 my-2 grid w-full grid-cols-2 gap-x-2 gap-y-4 text-xl md:mx-20 md:gap-x-10"
              }
            >
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple-200"} /> MongoDB
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple-200"} /> PostgreSQL
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple-200"} /> MySQL
              </span>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem ref={designingRef} value="designing">
          <AccordionTrigger
            className={
              "font-robotoMono my-2 flex w-full flex-row items-center justify-start gap-2 rounded-xl border-2 border-purple bg-violet-dark p-2"
            }
          >
            <RiArrowRightSLine className={"text-purple-500"} />
            <div className={"flex flex-row items-center justify-center gap-5"}>
              <RiFolderFill className={"text-2xl text-blue-500"} />
              <span className={"text-md text-blue-500"}>Designing</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div
              className={
                "mx-5 my-2 grid w-full grid-cols-2 gap-x-2 gap-y-4 text-xl md:mx-20 md:gap-x-10"
              }
            >
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple-200"} /> Figma
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple-200"} /> Photoshop
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple-200"} /> Illustrator
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple-200"} /> MsPaint
              </span>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div id={"endAccordion"}></div>
    </>
  );
};

export default SkillsAccordion;