import Link from "next/link";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { TbBriefcase2Filled } from "react-icons/tb";


export default function Footer(){
    return(
        <div className="flex flex-col items-center space-y-9 w-full pt-20 z-30 h-60 justify-center">
            <div className="text-center hidden xl:inline-flex justify-center items-center gap-2">
                danterivadi.work@gmail.com <CgMail className="w-5 h-5"/>
            </div>
            <ul className="xl:flex xl:flex-row hidden flex-col gap-7 justify-center items-center text-neutral-600">
                <li className="hover:text-white duration-100"><a download={"CV_DANTE_RIVAROLA_DINATALE_ENGLISH"} href={"/CV_DANTE_RIVAROLA_DINATALE_ENGLISH.pdf"} className="inline-flex justify-center items-center gap-2">CV <HiDownload /></a></li>
                <li className="hover:text-white duration-100"><Link href={"https://github.com/Dantelo04"} className="inline-flex justify-center items-center gap-2">Proyects <FaGithub /></Link></li>
                <li className="hover:text-white duration-100"><Link href={"/contact"} className="inline-flex justify-center items-center gap-2">Contact <TbBriefcase2Filled /></Link></li>
            </ul>
            <h1 className="border-b w-10/12 text-center border-neutral-600 xl:hidden"></h1>
            <ul className="flex xl:flex-row flex-col gap-5 justify-center items-center xl:hidden text-neutral-600">
                <li className="text-white duration-100 inline-flex justify-center items-center gap-2">danterivadi.work@gmail.com <CgMail className="w-5 h-5"/></li>
                <li className="hover:text-white duration-100"><a download={"CV_DANTE_RIVAROLA_DINATALE_ENGLISH"} href={"/CV_DANTE_RIVAROLA_DINATALE_ENGLISH.pdf"} className="inline-flex justify-center items-center gap-2">CV <HiDownload /></a></li>
                <li className="hover:text-white duration-100"><Link href={"https://github.com/Dantelo04"} className="inline-flex justify-center items-center gap-2">Proyects <FaGithub /></Link></li>
                <li className="hover:text-white duration-100"><Link href={"/contact"} className="inline-flex justify-center items-center gap-2">Contact <TbBriefcase2Filled /></Link></li>
            </ul>
            <div className="text-neutral-500 text-sm pb-7">
                © All rights reserved by dante
            </div>
        </div>
    )
}