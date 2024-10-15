import Link from "next/link";

interface CardProps {
    href?:string,
    className?:string,
    children: React.ReactNode,
    newTab?:boolean,
    color?:string,
}

export default function Card({href, className, children, newTab, color}: CardProps){
    return(
        <div className={className + ` flex rounded-3xl relative p-2 bg-gradient-to-tl ${color ? color : "from-neutral-950 to-neutral-900"} border backdrop-blur-md border-neutral-900 flex-shrink-0 h-auto w-auto`}>
            {children}
            {newTab ?
                (
                    <a target="_blank" rel="noopener noreferrer" href={href? href:"#"} className="w-full h-full absolute top-0 rounded-3xl left-0 "></a>
                )
                :
                (
                    <Link href={href? href:"#"} className={`w-full h-full absolute top-0 rounded-3xl left-0 ${href ? "cursor-pointer" : "hidden"}`}></Link>
                )
            }
        </div>
    )
}