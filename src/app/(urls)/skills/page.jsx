import React from 'react'
import Image from 'next/image'
import {skills} from '@/utils/experiences'

const Skills = () =>{
    return (
        <div className="space-y-4 backdrop-blur-md">
            <header>
                <h1 className="font-bold uppercase text-blue-400">Skills</h1>
            </header>

            <div>
                {skills.map(skill=>{
                    return (
                        <div className="grid grid-cols-5 py-4">
                            <div className="col-span-2 flex itsme-center">
                                {skill.skill}
                            </div>
                            <div className="col-span-3 flex items-center gap-4 text-yellow-500">
                                {Array(5).fill().map((_, i)=>{
                                    return (
                                        <div key={i + 1} className="text-gray-500">
                                            <Image src={(i + 1) > skill.level ? '/whiteStar.svg' : '/star.svg'} alt="star icon" height={16} width={16}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills