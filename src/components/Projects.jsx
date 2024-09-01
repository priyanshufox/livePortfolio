import React from 'react'

import ProjectCard from "@/components/project-card";
function Projects() {
  return (
    <>
    
       <div
      id="projects"
        className={
          "container mt-20 mb-20 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        }
      >
         
        <ProjectCard
          project={{
            title: "ChatX ",
            description:
              "ChatX is a modern web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It enables users to publish posts, like posts, and comment on them. The app provides real-time chat functionality and utilizes MongoDB as its database. The frontend is built with Next.js, a React framework.",
            image: "/chatx.png",
            url: "https://main--darling-puffpuff-9238bb.netlify.app/",
            tags: ["Tailwind", "Next Js", "MongoDB" ,"Express"],
          }}
        />
        <ProjectCard
          project={{
            title: "E-clinic",
            description:
              "Explore a modern HealthCare Hub website that integrates a ChatGPT-powered chatbot 🩺🤖. This platform offers users a seamless experience to access healthcare information and assistance.",
            image: "/eclinic.png",
            url: "https://e-clinic-gcet.vercel.app/",
            tags: ["Tailwind", "Next Js", "ChatGPT API"],
          }}
        />
        <ProjectCard
          project={{
            title: "Weather Now",
            description:
              "WeatherNow is a user-friendly web app ⚡ that offers real-time weather forecasts using the OpenWeather API. With basic HTML, CSS, and JavaScript, it provides a simple yet effective way to access weather information.",
            image: "/weather.png",
            url: "https://priyanshufox.github.io/weatherForecast.github.io/",
            tags: ["Vanilla JS", "HTML", "CSS","OpenWeather API"],
          }}
        />
      </div>
    </>
  )
}

export default Projects