import React from 'react'

interface TagProps {
    children: React.ReactNode;
}

export const Tag = ({children}: TagProps) => {
  return (
    <div className='text-sm rounded-3xl bg-white/15 text-white/80 px-4 w-fit uppercase font-extrabold tracking-tight'>
       {children} 
    </div>
  )
}
