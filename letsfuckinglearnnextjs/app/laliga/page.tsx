import LiveGameCard from '@/components/LiveGameCard'
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
            <div className="flex gap-4 overflow-x-scroll scrollbar-track-transparent w-full h-[22vh] max-h-[24vh]  " >
            <LiveGameCard/>
        </div>
      </div>


      <div className=' flex gap-5  ' >
        <div className='bg-gray-400 max-h-[60vh] flex flex-col gap-3 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700  min-h-[52vh] max-w-1/2 min-w-1/2 px-4 py-2  rounded-xl ' >
          <h3 className='text-m font-bold tracking-tight text-[#212121d8]  ' >Standings</h3>
         <PointsTable />
        </div>

        <div className=' flex min-w-full ' >
          <div className=' w-1/2 bg-gray-400 flex flex-col gap-3  rounded-xl px-4 py-2 ' >
            <h3 className='text-m font-bold tracking-tight text-[#212121d8]' >Stats</h3>
        
            <div className='w-full  overflow-x-hidden overflow-y-auto scrollbar-hidden flex gap-x-8 gap-y-4  flex-wrap  ' >

              <div className='w-[45%] max-h-[20vh] px-2 py-2 overflow-x-hidden overflow-y-auto  rounded-xl bg-slate-500 scrollbar-none'  >
                  <p className=' text-sm font-semibold text-[#d5d5d5] ' >Goal Scorers</p>
                  <StatsTable/>
              </div>

              <div className='w-[45%] max-h-[20vh] px-2 py-2 overflow-x-hidden overflow-y-auto  rounded-xl bg-slate-500 scrollbar-none'  >
                  <p className=' text-sm font-semibold text-[#d5d5d5] ' >Top Assist</p>
                  <StatsTable/>
              </div>

              <div className='w-[45%] max-h-[20vh] px-2 py-2 overflow-x-hidden overflow-y-auto  rounded-xl bg-slate-500 scrollbar-none'  >
                  <p className=' text-sm font-semibold text-[#d5d5d5] ' >Most Saves</p>
                  <StatsTable/>
              </div>

            </div>
           </div>
        </div>

      </div>

    </div>
  )
}

export default page