"use client"

import { CgMenu } from "react-icons/cg";
import Link from "next/link";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Navbar(){
    const [isOpen, setOpen] = useState(true)

    return(
        <div className={isOpen ? "flex xl:flex-row flex-col xl:space-y-0 space-y-5 fixed justify-between items-center h-auto xl:p-5 py-5 px-4 top-0 xl:w-full w-full z-50 backdrop-blur-md duration-100 bg-black/0" : "flex xl:flex-row flex-col xl:space-y-0 space-y-7 fixed items-center h-screen xl:p-5 py-5 px-4 top-0 xl:w-9/12 w-full z-40 justify-start backdrop-blur-xl bg-black/50 duration-100"}>
            <div className="flex flex-row text-xl items-center font-mono text-white xl:w-fit w-full justify-between">
                <div>
                    dante<span className="text-neutral-500">, fullstack</span>
                </div>
                <button onClick={()=> setOpen(!isOpen)} className="xl:hidden">
                    {isOpen ? 
                    (
                        <CgMenu className="w-8 h-8"></CgMenu>
                    ):
                    (
                        <CgClose className="w-8 h-8"></CgClose>
                    )
                    }
                    
                </button>
            </div>
            <ul className={isOpen ? "xl:flex xl:flex-row flex-col xl:space-x-14 text-neutral-400 hidden" : "flex xl:flex-row flex-col text-center space-y-5 text-xl xl:space-x-14 text-neutral-300"}>
                <li className="hover:text-white duration-100 xl:hidden"><Link href={"/"} onClick={()=> setOpen(!isOpen)}>Home</Link></li>
                <li className="hover:text-white duration-100 hidden xl:flex"><Link href={"/"}>Home</Link></li>
                <li className="hover:text-white duration-100"><a className="inline-flex justify-center items-center gap-2" download={"CV_DANTE_RIVAROLA_DINATALE_ENGLISH"} href={"/CV_DANTE_RIVAROLA_DINATALE_ENGLISH.pdf"}>CV <HiDownload /></a></li>
                <li className="hover:text-white duration-100"><a target="_blank" href={"https://github.com/Dantelo04"} className="inline-flex justify-center items-center gap-2">Proyects <FaGithub /></a></li>
            </ul>
            <Link href={"/contact"} className={isOpen ? "hidden" : "xl:hidden flex text-xl"} onClick={()=> setOpen(!isOpen)}>
                <div className={"rounded-xl bg-neutral-700 text-neutral-100 py-2 px-4 hover:bg-neutral-200 hover:text-neutral-900 font-bold duration-200 ease-in"}>
                    Contact me
                </div>
            </Link>
            <Link href={"/contact"} className={"xl:flex hidden"}>
                <div className={"rounded-xl bg-neutral-700 text-neutral-100 py-2 px-4 hover:bg-neutral-200 hover:text-neutral-900 font-bold duration-200 ease-in"}>
                    Contact me
                </div>
            </Link>
            <div className={isOpen ? "hidden" : "xl:hidden flex text-sm text-neutral-300 py-2"}>
                © All rights reserved by dante
            </div>
        </div>
    )
}