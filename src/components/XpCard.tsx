import Image from "next/image";
import { useState } from "react";

interface CardProps {
    className?:string,
    children: React.ReactNode,
    color?:string,
    title?:string,
}

export default function XpCard({className, children, color,title}: CardProps){
    const [close, setClose] = useState(false)

    return(
        <div className={className + ` rounded-t-xl relative p-2 bg-gradient-to-b overflow-hidden ${color ? color : "bg-[#2e59a6]"} border backdrop-blur-md border-neutral-900 flex-shrink-0 transition-all w-auto`}>
            <div className="absolute bg-gradient-to-t z-30 from-transparent rounded-xl to-[#1a7af9] h-5 top-0 right-0 w-full from-5%">

            </div>
            <div className="w-full flex flex-col gap-2">
                <div className="w-full h-fit flex justify-between items-center">
                    <div className="font-bold inline-flex gap-2 justify-center items-center">
                        <Image
                            src={"/folder.ico"}
                            alt={"controls"}
                            width={718}
                            height={241}
                            className="aspect-auto h-7 w-auto"
                            quality={10}
                        />
                        {title}
                    </div>
                    <div className="relative">
                        <Image
                            src={"/xp.jpg"}
                            alt={"controls"}
                            width={718}
                            height={241}
                            className="aspect-auto h-auto w-20"
                            quality={10}
                        />
                        <button className="absolute top-0 right-0 w-7 z-50 aspect-square rounded-md" onClick={()=> setClose(!close)}></button>
                    </div>
                </div>
                <div className={`bg-[#ece9d8] shadow-inner relative text-black p-2 xl:overflow-y-auto transition-all ${close ? "xl:h-0 xl:p-0":"xl:h-[600px]"}`}>
                    {children}
                    <div className="fixed bottom-0 right-0 w-full bg-gradient-to-b from-transparent to-black/40 h-10">

                    </div>
                </div>
            </div>
            
            
        </div>
    )
}