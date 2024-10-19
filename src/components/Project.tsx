import Image from "next/image"
import { FaArrowRightLong } from "react-icons/fa6"
import { SiFastapi, SiNextdotjs } from "react-icons/si"


interface ProjectProps {
    title?:string,
    description?:string,
}

export default function Project({title,description}:ProjectProps){
    return(
        <div className="w-full min-h-32 rounded bg-white border-neutral-400 text-neutral-800">
            <div className="flex flex-col">
                <div className="border-b p-1 inline-flex justify-start items-center gap-2 font-bold">
                    <Image
                        src={"/computerearth.ico"}
                        alt={"controls"}
                        width={718}
                        height={241}
                        className="aspect-auto h-7 w-auto"
                        quality={10}
                    />
                    {title}
                </div>
                <div className="relative overflow-hidden p-1">
                    <Image
                        src={"/yvyryryi.png"}
                        alt={"controls"}
                        width={718}
                        height={241}
                        className="h-auto bg-cover w-full rounded-md"
                    />
                    <div className="absolute flex justify-center items-center top-0 right-0 h-full w-full">

                    </div>
                </div>
                <div className="p-2 flex flex-col font-mono gap-2 text-justify">
                    <div className="inline-flex justify-center items-center gap-5">
                        <SiNextdotjs className="w-10 h-10"/>
                        <SiFastapi className="w-10 h-10"/>
                    </div>
                    {description}
                </div>
                <div className="border-t p-2 font-mono text-blue-900">
                    <a target="_blank" href="https://www.linkedin.com/in/dante-rivarola-dinatale-264a82289/" className="inline-flex items-center justify-start gap-2 border-b border-blue-900 hover:text-sky-600 hover:border-sky-600">See more<FaArrowRightLong className="w-3 h-3"/></a>
                </div>
            </div>
        </div>
    )
}