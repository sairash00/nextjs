import SecondaryNavBar from '@/components/SecondaryNavBar'
import React from 'react'

const page = () => {
  return (
     <div className=" w-[80vw] h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700  bg-gray-800 flex flex-col gap-4  px-8 py-4  " >
        <SecondaryNavBar/>
    </div>
  )
}

export default page