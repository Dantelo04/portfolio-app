import Image from "next/image"
import { FaArrowRightLong } from "react-icons/fa6"


interface ProjectProps {
    title?:string,
    description?:string,
    children?: React.ReactNode,
    href?:string,
    src?:string,
}

export default function Project({title,description,children,href,src}:ProjectProps){
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
                    <a href={href} target="_blank" className="hover:brightness-125 duration-200">
                        <Image
                            src={src!}
                            alt={"project_image"}
                            width={718}
                            height={241}
                            className="h-auto bg-cover w-full rounded-md border"
                        />
                    </a>
                </div>
                <div className="p-2 flex flex-col font-mono gap-2 text-justify">
                    <div className="inline-flex justify-center py-2 items-center gap-5">
                        {children}
                    </div>
                    {description}
                </div>
                <div className="border-t p-2 font-mono text-blue-900 py-3">
                    <a target="_blank" href={href} className="inline-flex items-center justify-start gap-2 border-b border-blue-900 hover:text-sky-600 hover:border-sky-600">See demo!<FaArrowRightLong className="w-3 h-3"/></a>
                </div>
            </div>
        </div>
    )
}