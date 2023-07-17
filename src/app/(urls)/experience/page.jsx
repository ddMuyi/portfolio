"use client"

import React from 'react'
import {experiences} from '@/utils/experiences'

const Experience = () =>{
    return <div className="backdrop-blur-sm">
        <header>
            <h1 className="font-bold uppercase text-blue-400">Experience</h1>
        </header>

        {experiences.map(experience=>{
            return (
                <a href={experience.site} key={experience.company} aria-label={`My work experience at ${experience.company}`} target="_blank" className=" block relative border border-transparent hover:border-gray-600 rounded-lg hover:bg-opacity-10 hover:bg-gray-500 hover:backdrop-blur transition-all duration-300">
                    <div className="grid grid-cols-4 gap-4 p-4 relative z-20">
                        <div className="text-xs">{experience.role}</div>
                        <div className="col-span-3 space-y-2">
                            <p className="uppercase font-semibold text-sm">{experience.company}</p>
                            <p className="text-xs">{experience.from}-{experience.to}</p>
                            <p className="text-sm leading-normal">{experience.duties}</p>

                            <div className="flex flex-wrap mt-2 gap-1.5">
                                {experience.slack.map(slack=>{
                                    return <span key={slack} className="text-xs text-[#c9c7c7] px-1.5 py-0.5 border rounded-full  backdrop-blur-md bg-opacity-60 z-10">{slack}</span>
                                })}
                            </div>
                        </div>
                    </div>
                </a>
            )
        })}
    </div>
}

export default Experience