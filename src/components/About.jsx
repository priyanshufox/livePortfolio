import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

function About() {
  return (
    <section id="about" className="bg-white dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <p className="text-2xl font-mono text-purple-500">About Me</p>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">I am a Computer
            Science Undergrad</h2>
            <p className="mb-4">A dedicated Computer Science student at <span className="font-bold">Galgotias College of Engineering and Technology</span> with a solid foundation in<span className="font-bold">Java, Python, and full-stack</span>  development using <span className="font-bold">React, Next.js, and Node.js.</span> Experienced in building web applications, with notable projects like <span className="font-bold">ChatX</span> and a <span className="font-bold">Diabetes Prediction System</span> . Passionate about leveraging technology for innovative solutions.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="/picc.png" alt="office content 1"/>
            <img className="mt-4 skew-y-6 scale-x-[-1] w-full lg:mt-10 rounded-lg" src="/tttt.jpg" alt="office content 2"/>
        </div>
    </div>

     <Marquee speed={20}>
        <div
          className={
            "mb-8 mt-20 flex w-full flex-row items-center justify-evenly gap-8 px-2.5"
          }
        >
          <span className={"text-5xl font-semibold uppercase leading-tight"}>
            Tech&nbsp;
          </span>
          <span
            className={
              "text-5xl font-semibold uppercase leading-tight text-fill-transparent text-stroke-purple-500 text-stroke-2"
            }
          >
            Skills
          </span>
          <span className={"text-5xl font-semibold uppercase leading-tight"}>
            Tech&nbsp;
          </span>
          <span
            className={
              "text-5xl font-semibold uppercase leading-tight text-fill-transparent text-stroke-purple-500 text-stroke-2"
            }
          >
            Skills
          </span>
          <span className={"text-5xl font-semibold uppercase leading-tight"}>
            Tech&nbsp;
          </span>
          <span
            className={
              "text-5xl font-semibold uppercase leading-tight text-fill-transparent text-stroke-purple-500 text-stroke-2"
            }
          >
            Skills
          </span>
          <span className={"text-5xl font-semibold uppercase leading-tight"}>
            Tech&nbsp;
          </span>
          <span
            className={
              "text-5xl font-semibold uppercase leading-tight text-fill-transparent text-stroke-purple-500 text-stroke-2"
            }
          >
            Skills
          </span>
          <span className={"text-5xl font-semibold uppercase leading-tight"}>
            Tech&nbsp;
          </span>
          <span
            className={
              "text-5xl font-semibold uppercase leading-tight text-fill-transparent text-stroke-purple-500 text-stroke-2"
            }
          >
            Skills
          </span>
          <span className={"text-5xl font-semibold uppercase leading-tight"}>
            Tech&nbsp;
          </span>
          <span
            className={
              "text-5xl font-semibold uppercase leading-tight text-fill-transparent text-stroke-purple-500 text-stroke-2"
            }
          >
            Skills
          </span>
          <span className={"text-5xl font-semibold uppercase leading-tight"}>
            Tech&nbsp;
          </span>
          <span
            className={
              "text-5xl font-semibold uppercase leading-tight text-fill-transparent text-stroke-purple-500 text-stroke-2"
            }
          >
            Skills
          </span>
          <span className={"text-5xl font-semibold uppercase leading-tight"}>
            Tech&nbsp;
          </span>
          <span
            className={
              "text-5xl font-semibold uppercase leading-tight text-fill-transparent text-stroke-purple-500 text-stroke-2"
            }
          >
            Skills
          </span>

       
        </div>
      </Marquee>
</section>
  );
}

export default About;
