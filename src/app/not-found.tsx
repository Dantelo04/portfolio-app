import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

export default function NotFound() {
    return (
        <div className='flex flex-col justify-center items-center h-[630px] gap-2'>
            <h3 className='text-9xl font-mono'>404</h3>
            <p className='text-neutral-600'>Could not find requested resource</p>
            <Link href="/" className='inline-flex justify-center items-center gap-2'>Return Home <BsArrowRight/></Link>
        </div>
    )
}