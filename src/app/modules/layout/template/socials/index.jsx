import React from 'react'
import Image from 'next/image'

export const SocialMedia = (s) =>{
    return (
        <a aria-label={`Link to my ${s.name} account`} target="_blank" href={s.link} className="flex gap-5 md:gap-3 lg:gap-5 items-center text-lg">
            <Image src={s.icon}
              alt={s.name}
              className="dark:invert"
              width={16}
              height={16}
              />
            <p>{s.name}</p>
        </a>
    )
}