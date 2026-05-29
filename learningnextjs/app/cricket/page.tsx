import LiveGameCard from '@/components/LiveGameCard'
import LiveGameCardCricket from '@/components/LiveGameCardCricket'
import PointsTable from '@/components/PointsTable'
import SecondaryNavBar from '@/components/SecondaryNavBar'
import StatsTable from '@/components/StatsTable'
import React from 'react'

const page = () => {  
  return (
    <div className=" w-[80vw] h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700  bg-gray-800 flex flex-col gap-4  px-8 py-4  " >
        <SecondaryNavBar/>

      <div className="flex border-b border-gray-400  flex-col gap-3 py-3"  >
            <h2 className="text-xl font-bold" >Matches</h2>
            <div className="flex gap-4 overflow-x-auto scrollbar-track-transparent w-full min-h-fit max-h-[24vh]  " >
            <LiveGameCardCricket/>
        </div>
      </div>

     <div className="flex border-b border-gray-400  flex-col gap-3 py-3"  >
            <h2 className="text-xl font-bold" >International Cricket</h2>
            <div className="flex gap-4 overflow-x-auto scrollbar-track-transparent w-full min-h-fit max-h-[24vh]  " >
            <LiveGameCardCricket/>
        </div>
     </div>

     <div className="flex border-b border-gray-400  flex-col gap-3 py-3"  >
            <h2 className="text-xl font-bold" >Club Cricket</h2>
            <div className="flex gap-4 overflow-x-auto scrollbar-track-transparent w-full min-h-fit max-h-[24vh]  " >
            <LiveGameCardCricket/>
        </div>
     </div>


    </div>
  )
}

export default page