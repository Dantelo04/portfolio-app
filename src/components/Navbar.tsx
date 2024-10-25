"use client"

import { CgMenu } from "react-icons/cg";
import Link from "next/link";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { TiHome } from "react-icons/ti";

export default function Navbar(){
    const [isOpen, setOpen] = useState(true)

    return(
        <div className={isOpen ? "flex xl:flex-row flex-col xl:space-y-0 space-y-5 fixed justify-between items-center h-auto xl:p-5 xl:py-5 xl:px-4 top-0 xl:w-full w-full z-50 duration-100 bg-black/0 transition-all min-[1700px]:backdrop-blur-none backdrop-blur-lg" : "flex xl:flex-row flex-col xl:space-y-0 space-y-7 fixed items-center transition-all h-screen xl:p-5 py-5 px-4 top-0 xl:w-9/12 w-full z-40 justify-start backdrop-blur-xl bg-black/50 duration-100"}>
            <div className={`flex flex-row text-xl items-center font-mono text-white xl:w-fit w-full duration-100 py-4 xl:py-1 transition-all px-4 xl:backdrop-blur-0 justify-between`}>
                <div className="">
                    dante<span className="text-neutral-400">, fullstack</span>
                </div>
                <button onClick={()=> setOpen(!isOpen)} className="xl:hidden">
                    {isOpen ? 
                    (
                        <CgMenu className="w-9 h-9"></CgMenu>
                    ):
                    (
                        <CgClose className="w-9 h-9"></CgClose>
                    )
                    }
                    
                </button>
            </div>
            <ul className={isOpen ? "xl:flex xl:flex-row flex-col gap-14 justify-center text-neutral-400 backdrop-blur-lg hidden min-[1700px]:border border-neutral-700/50 rounded-xl text-center px-20 py-2" : "flex xl:flex-row flex-col text-center space-y-5 text-xl xl:space-x-14 text-neutral-300"}>
                <li className="hover:text-white duration-100 xl:hidden xl:hover:bg-neutral-600"><Link href={"/"} onClick={()=> setOpen(!isOpen)}>Home</Link></li>
                <li className="hover:text-white duration-100 hidden xl:flex xl:hover:bg-neutral-700 px-2 rounded-xl"><Link href={"/"} className="inline-flex justify-center items-center gap-2">Home <TiHome /></Link></li>
                <li className="hover:text-white duration-100 xl:hover:bg-neutral-700 px-2 rounded-xl"><a className="inline-flex justify-center items-center gap-2" download={"CV_DANTE_RIVAROLA_DINATALE_ENGLISH"} href={"/CV_DANTE_RIVAROLA_DINATALE_ENGLISH.pdf"}>CV <HiDownload /></a></li>
                <li className="hover:text-white duration-100 xl:hover:bg-neutral-700 px-2 rounded-xl"><a target="_blank" href={"https://github.com/Dantelo04"} className="inline-flex justify-center items-center gap-2">Proyects <FaGithub /></a></li>
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