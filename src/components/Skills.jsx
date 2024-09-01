import React from "react";
import SkillsAccordion from "./SkillsAccordion";
import Marquee from "react-fast-marquee";


function Skills() {
  return (
    <section id="skill" className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <p className="text-2xl font-mono text-purple-500">Skills</p>
                <SkillsAccordion/>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="/man.jpg"
            alt="office content 1"
          />
          <img
            className="mt-4 scale-x-[-1] w-full lg:mt-10 rounded-lg"
            src="/comp.png"
            alt="office content 2"
          />
        </div>
      </div>
      <Marquee speed={20}>
        <div
          className={
            "mb-8 mt-20 flex w-full flex-row items-center justify-evenly gap-8 px-2.5"
          }
        >
          <span className={"text-5xl font-semibold uppercase leading-tight"}>
            Live&nbsp;
          </span>
          <span
            className={
              "text-5xl font-semibold uppercase leading-tight text-fill-transparent text-stroke-blue-500 text-stroke-2"
            }
          >
            Projects
          </span>
          <span className={"text-5xl font-semibold uppercase leading-tight"}>
            Live&nbsp;
          </span>
          <span
            className={
              "text-5xl font-semibold uppercase leading-tight text-fill-transparent text-stroke-blue-500 text-stroke-2"
            }
          >
            Projects
          </span>
          <span className={"text-5xl font-semibold uppercase leading-tight"}>
            Live&nbsp;
          </span>
          <span
            className={
              "text-5xl font-semibold uppercase leading-tight text-fill-transparent text-stroke-blue-500 text-stroke-2"
            }
          >
            Projects
          </span>
          <span className={"text-5xl font-semibold uppercase leading-tight"}>
            Live&nbsp;
          </span>
          <span
            className={
              "text-5xl font-semibold uppercase leading-tight text-fill-transparent text-stroke-blue-500 text-stroke-2"
            }
          >
            Projects
          </span>
          <span className={"text-5xl font-semibold uppercase leading-tight"}>
            Live&nbsp;
          </span>
          <span
            className={
              "text-5xl font-semibold uppercase leading-tight text-fill-transparent text-stroke-blue-500 text-stroke-2"
            }
          >
            Projects
          </span>
          <span className={"text-5xl font-semibold uppercase leading-tight"}>
            Live&nbsp;
          </span>
          <span
            className={
              "text-5xl font-semibold uppercase leading-tight text-fill-transparent text-stroke-blue-500 text-stroke-2"
            }
          >
            Projects
          </span>
          <span className={"text-5xl font-semibold uppercase leading-tight"}>
            Live&nbsp;
          </span>
          <span
            className={
              "text-5xl font-semibold uppercase leading-tight text-fill-transparent text-stroke-blue-500 text-stroke-2"
            }
          >
            Projects
          </span>
          <span className={"text-5xl font-semibold uppercase leading-tight"}>
            Live&nbsp;
          </span>
          <span
            className={
              "text-5xl font-semibold uppercase leading-tight text-fill-transparent text-stroke-blue-500 text-stroke-2"
            }
          >
            Projects
          </span>
          <span className={"text-5xl font-semibold uppercase leading-tight"}>
            Live&nbsp;
          </span>
          <span
            className={
              "text-5xl font-semibold uppercase leading-tight text-fill-transparent text-stroke-blue-500 text-stroke-2"
            }
          >
            Projects
          </span>
       
       

       
        </div>
      </Marquee>
    </section>
  );
}

export default Skills;
