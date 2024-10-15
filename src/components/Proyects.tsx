import Card from '@/components/Card'
import React from 'react'
import Image from 'next/image'

const Proyects = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='xl:w-8/12 w-11/12 pt-24 flex flex-col gap-10'>
                <h1 className='xl:text-8xl text-6xl font-extrabold tracking-tighter text-center'>PROYECTS</h1>
                <div className='flex flex-col gap-10'>
                    <Card className='min-h-40  from-black'>
                        <div className='flex flex-col gap-3 bg-cover'>
                            <div className='flex xl:flex-row flex-col xl:gap-0 gap-3 justify-between items-center py-3 px-2'>
                                <h1 className='text-3xl font-extrabold  uppercase bg-gradient-to-r from-orange-100 to-yellow-900 bg-clip-text text-transparent'>Yvyryryi</h1>
                                <div>
                                    Nasa Space Apps - Fullstack proyect
                                </div>
                                <a href='https://yvyryryi.vercel.app/' target='_blank' className={"rounded-xl bg-neutral-700 text-neutral-100 py-2 px-4 hover:bg-neutral-200 hover:text-neutral-900 font-bold duration-200 ease-in"}>
                                    Learn more
                                </a>
                            </div>
                            <Image
                                src={"/yvyryryi.png"}
                                width={1555}
                                height={908}
                                alt='yvyryryi'
                                className='rounded-2xl xl:aspect-video aspect-square bg-cover'
                            />
                        </div>
                    </Card>
                    <Card className='min-h-40  from-black'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-row justify-between items-center py-3 px-2'>
                                <h1 className='text-3xl font-extrabold  uppercase bg-gradient-to-r from-blue-100 to-blue-900 bg-clip-text text-transparent'>TRELLO</h1>
                                <div>
                                    Next.Js Trello clone - Frontend proyect
                                </div>
                                <a href='https://trello-clone-nextjs-red.vercel.app/board/1' target='_blank' className={"rounded-xl bg-neutral-700 text-neutral-100 py-2 px-4 hover:bg-neutral-200 hover:text-neutral-900 font-bold duration-200 ease-in"}>
                                    Learn more
                                </a>
                            </div>
                            <video
                                src={"/trello.webm"}
                                autoPlay
                                loop
                                muted
                                className='rounded-2xl xl:aspect-auto'
                            />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Proyects
