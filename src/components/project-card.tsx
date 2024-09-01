
import { Roboto_Mono } from 'next/font/google'
const roboto = Roboto_Mono({
  weight: ['400'],
  subsets: ['greek'],
})

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    tags: string[]
    url: string
  }
}

const ProjectCard = ({project}:ProjectCardProps) => {

  return(
    <div className={'flex flex-col gap-2'}>
      <div className={'w-full relative'}>
        <div className={roboto.className + ' flex flex-row flex-wrap justify-end px-4 absolute top-5 w-full z-50 text-xs gap-1'}>
          {
            project.tags.map((tag, index) => (
              <a href={"#"} key={index} className={'flex flex-row items-center justify-center bg-black bg-opacity-10 h-6 rounded-full px-4 text-white'}>{tag}</a>
            ))
          }
        </div>
        <a href={project.url}>
          <Image
            height={800}
            width={1000}
            className={'w-full h-80 object-cover rounded-lg'}
            src={project.image}
            alt={project.title}/>
        </a>
      </div>
      <Link href={project.url}>
        <h3 className={'text-2xl font-semibold'}>
          {project.title}
        </h3>
        <p className={'text-sm font-sans text-gray-500 text-justify'}>
          {project.description}
        </p>
      </Link>
    </div>
  )

}


export default ProjectCard