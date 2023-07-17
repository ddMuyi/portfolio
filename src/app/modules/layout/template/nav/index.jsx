"use client"
import React, {useState, useEffect} from "react";
import Link from "next/link";
import styles from "./styles/nav.module.css"
import { usePathname } from "next/navigation"

const navLinks = [
    {
        link:"/",
        name:"About"
    },
    {
        link:"/experience",
        name:"Experience"
    },
    {
        link:"/projects",
        name:"Projects"
    },
    {
        link:"/skills",
        name:"Skills"
    },
]

export const Nav = () =>{
    const [openNav, setOpenNav] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [currentPath, setCurrentPath] = useState('')
    const pathname = usePathname()

    useEffect(()=>{
        const detectScrollY = () => {
            if (window.scrollY > 5) {
              setIsScrolled(true)
            } else {
              setIsScrolled(false)
            }
          }
    
          window.addEventListener("scroll", detectScrollY)
    
          return () => {
            window.removeEventListener("scroll", detectScrollY)
          }
    }, [])

    useEffect(()=>{
        let curPath = pathname.split("/")[1]
        if(curPath === ""){
            curPath = 'about'
        }
        setCurrentPath(curPath.toLowerCase())
    }, [pathname])

    useEffect(()=>{
        if(window.innerWidth > 900){
            setOpenNav(true)
        }
    }, [])

    const toggleNavBar = ()=>{
        if(window.innerWidth < 900){
            setOpenNav(el=>!el)
        }
    }

    return (
        <nav className={`container h-24 left-0 right-0 mx-auto fixed top-0 px-8 lg:px-12 xl:px-20 z-50 flex flex-col-reverse items-end justify-center ${isScrolled && 'backdrop-blur-lg bg-opacity-10'}`}>
            {/* Burger */}
            <div className={`w-10 h-10 relative ${!openNav && 'overflow-hidden'}`}>
                <div className={`h-10 w-10 flex flex-col justify-between items-start relative z-30 backdrop-blur-lg bg-opacity-10 cursor-pointer`} aria-label="Open navigation bar" onClick={()=>{setOpenNav(el=>!el)}}>
                    <div className={` ${styles.line1}`}>
                        <div className={`${styles.line} ${styles.line1_1} ${openNav && styles.close}`}></div>
                        <div className={`${styles.line} ${styles.line1_2} ${openNav && styles.close}`}></div>
                    </div>

                    <div className={`${styles.line} ${styles.line2} ${openNav && styles.close}`}></div>

                    <div className={` ${styles.line3}`}>
                        <div className={`${styles.line} ${styles.line3_1} ${openNav && styles.close}`}></div>
                        <div className={`${styles.line} ${styles.line3_2} ${openNav && styles.close}`}></div>
                    </div>
                </div>

                {/* Nav links */}
                <ul className={`absolute right-0 w-40 lg:w-0 transition-all duration-300 delay-200 h-0 bg-gray-200 lg:bg-transparent z-20 space-y-8 lg:space-y-0 lg:flex lg:justify-between lg:items-center text-black lg:text-white backdrop-blur-lg  lg:bg-opacity-20 rounded-lg p-8 lg:p-0 lg:px-8 top-12 lg:top-0 lg:right-[50px] opacity-0 shadow-lg lg:shadow-none ${openNav ? ' h-auto lg:h-10 lg:w-[500px] opacity-100' : 'top-0'}`}>
                    {navLinks.map(link=>{
                        return <li onClick={toggleNavBar} key={link.name} className={`font-semibold hover:text-blue-300 hover:font-bold transition-all duration-300 text-lg lg:text-base ${currentPath === (link.name).toLowerCase() && 'text-blue-700 lg:text-blue-300'}`}>
                            <Link aria-label={`Link to ${link.name}`} href={link.link}>{link.name}</Link>
                        </li>
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Nav