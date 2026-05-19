'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"


const IplNavbar = () => {

  const pathname = usePathname()
  

  return (
     <div className="flex  bg-gray-700 rounded-xl  min-h-fit  gap-6 px-4 py-2"  >
        <Link href={'/ipl/PointsTable'} className={pathname == "ipl/PointsTable" ?  "text-m font-semobold hover:text-[#d5d5d5] bg-blue-400   px-2 py-1 roundex-xl  transition-all transition-ease-in" : "text-m font-semobold hover:text-[#d5d5d5] px-2 py-1 roundex-xl transition-all transition-ease-in"} >Standings</Link>
        <Link href={'/ipl/batting'} className={pathname == "ipl/batting" ?  "text-m font-semobold hover:text-[#d5d5d5] bg-blue-400  px-2 py-1 roundex-xl  transition-all transition-ease-in" : "text-m font-semobold hover:text-[#d5d5d5] px-2 py-1 roundex-xl transition-all transition-ease-in"} >Batting</Link>
        <Link href={'/ipl/bowling'} className={pathname == "ipl/bowling" ?  "text-m font-semobold hover:text-[#d5d5d5] bg-blue-400  px-2 py-1 roundex-xl  transition-all transition-ease-in" : "text-m font-semobold hover:text-[#d5d5d5] px-2 py-1 roundex-xl transition-all transition-ease-in"} >Bowling</Link>
    </div>
  )
}

export default IplNavbar