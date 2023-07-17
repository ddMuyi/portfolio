"use client"

import React from 'react'
import Image from 'next/image'
import {projects} from '@/utils/experiences'

const Projects = () =>{
    return (
        <div className="space-y-8 backdrop-blur-sm">
        <header>
            <h1 className="font-bold uppercase text-blue-400">Projects</h1>
        </header>
        {Object.keys(projects).map((company, i)=>{
            let c = projects[company]
            return (
                <div key={i} className=" ">
                    <div className="uppercase font-semibold text-sm mb-1">{company}</div>

                    {c.map(project=>{
                        return (
                            <div key={project.name} className="grid grid-cols-4 gap-4 p-4 z-20 relative border border-transparent hover:border-gray-600 rounded-lg hover:bg-opacity-10 hover:bg-gray-500 hover:backdrop-blur transition-all duration-300">
                                <div>
                                    {project.img ? <Image src={project.img ?? ""} width={200} height={150} alt={project.name}/> : <div className="w-20 h-16 bg-gray-700"></div>}
                                </div>
                                <div className="col-span-3 space-y-2">
                                    <p className="capitallize font-semibold text-sm">{project.name}</p>
                                    <p className="text-xs">{project.year}</p>
                                    <p className="text-sm leading-normal">{project.role ?? ""}</p>
                                    <a href={project.site} target="_blank" className="block text-xs text-blue-400">{project.site}</a>

                                    <div className="flex flex-wrap mt-2 gap-1.5">
                                        {project.slack.map(slack=>{
                                            return <span key={slack} className="text-xs text-[#c9c7c7] px-1.5 py-0.5 border rounded-full  backdrop-blur-md bg-opacity-60 z-10">{slack}</span>
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        })}
    </div>
    )
}

export default Projects