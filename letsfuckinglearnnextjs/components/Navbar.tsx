"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react';

const Navbar = () => {

  const pathname = usePathname();
  const[football, setFootball] = useState(false);
  const[cricket, setCricket] = useState(false);

  return (
    <nav className=' max-w-[20vw] min-w-[20vw]  h-screen px-4 py-4 flex border-r border-gray-400  gap-3 flex-col ' >
        <div>
            <h1 className='text-2xl border-b border-gray-400 py-2  font-bold tracking-wide  ' >URPOOR</h1>
        </div>
        <div className='flex gap-2 flex-col ' >
            <Link className = { pathname ==  "/" ? "px-2 py-2  rounded-xl bg-blue-300 transition-all text-gray-700" : 'px-2 py-2  rounded-xl hover:bg-blue-300 transition-all hover:text-gray-700  '}  href = "/">Home</Link>
            <div onClick={() => setFootball(!football)} className = 'px-2 py-2  rounded-xl hover:bg-blue-300 transition-all hover:text-gray-700' >Football v </div>
            <div className = {` flex flex-col transition-all ease-in-out overflow-hidden  border-gray-700  duration-200 ${ football ? 'opacity-100 border-b border-gray-700 ' : " border-none  h-0 opacity-0  " } `}  > 
            <Link className = { pathname ==  "/laliga" ? "px-2 py-2  rounded-xl bg-blue-300 transition-all text-gray-700" : 'px-2 py-2  rounded-xl hover:bg-blue-300 transition-all hover:text-gray-700  '}  href = "/laliga">Laliga</Link>
            <Link className = { pathname ==  "/pl" ? "px-2 py-2  rounded-xl bg-blue-300 transition-all text-gray-700" : 'px-2 py-2  rounded-xl hover:bg-blue-300 transition-all hover:text-gray-700  '}  href = "/pl">Premier League</Link>
            <Link className = { pathname ==  "/seriea" ? "px-2 py-2  rounded-xl bg-blue-300 transition-all text-gray-700" : 'px-2 py-2  rounded-xl hover:bg-blue-300 transition-all hover:text-gray-700  '}  href = "/seriea">Serie A</Link>
            <Link className = { pathname ==  "/bundesliga" ? "px-2 py-2  rounded-xl bg-blue-300 transition-all text-gray-700" : 'px-2 py-2  rounded-xl hover:bg-blue-300 transition-all hover:text-gray-700  '}  href = "/bundesliga">Bundesliga</Link> </div> 
            
            <Link className = { pathname ==  "/cricket" ? "px-2 py-2  rounded-xl bg-blue-300 transition-all text-gray-700" : 'px-2 py-2  rounded-xl hover:bg-blue-300 transition-all hover:text-gray-700  '}  href = "/cricket">Cricket</Link>
            <Link className = { pathname ==  "/ipl" ? "px-2 py-2  rounded-xl bg-blue-300  bg-blue-300 transition-all text-gray-700" : 'px-2 py-2  rounded-xl hover:bg-blue-300 transition-all hover:text-gray-700  ' } href = "/ipl">IPL</Link>
        </div>

    </nav>
  )
}

export default Navbar