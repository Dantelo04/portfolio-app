import Image from "next/image";

interface CardProps {
    className?:string,
    children: React.ReactNode,
    color?:string,
    title?:string,
}

export default function XpCard({className, children, color,title}: CardProps){
    return(
        <div className={className + ` rounded-t-xl relative p-2 bg-gradient-to-b ${color ? color : "bg-[#2e59a6]"} border backdrop-blur-md border-neutral-900 flex-shrink-0 h-auto w-auto`}>
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
                    <div>
                        <Image
                            src={"/xp.jpg"}
                            alt={"controls"}
                            width={718}
                            height={241}
                            className="aspect-auto h-auto w-20"
                            quality={10}
                        />
                    </div>
                </div>
                <div className="bg-[#ece9d8] shadow-inner text-black p-2">
                    {children}
                </div>
            </div>
            
            
        </div>
    )
}