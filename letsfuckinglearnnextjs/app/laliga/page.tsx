import LiveGameCard from '@/components/LiveGameCard'
import SecondaryNavBar from '@/components/SecondaryNavBar'
import React from 'react'

const page = () => {
  return (
    <div className=" w-[80vw] h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700  bg-gray-800 flex flex-col gap-4  px-8 py-4  " >
        <SecondaryNavBar/>

      <div className="flex  flex-col gap-3 py-3"  >
            <h2 className="text-xl font-bold" >Matches</h2>
            <div className="flex gap-4 overflow-x-scroll scrollbar-track-transparent w-full h-[22vh] max-h-[24vh]  " >
            <LiveGameCard/>
        </div>
      </div>

      <div className=' flex gap-5  ' >
        <div className='bg-gray-400 max-h-[50vh] flex flex-col gap-3 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700  min-h-[50vh] max-w-1/2 min-w-1/2 px-4 py-2  rounded-xl ' >
          <h3 className='text-m font-bold tracking-tight text-[#212121d8]  ' >Standings</h3>
          <table className=' w-full border-collapse text-sm ' >
            <thead>
              <tr className='text-left  border-gray-800 ' >
                <th className=' text-[10px] p-1  max-w-2  font-semibold text-[#212121]  '  > #</th>
                <th className=' text-[10px] p-1  font-semibold text-[#212121]  '  > Team</th>
                <th className=' text-[10px] p-1  font-semibold  text-center  text-[#212121]  '  >MP</th>
                <th className=' text-[10px] p-1  font-semibold  text-center  text-[#212121]  '  >W</th>
                <th className=' text-[10px] p-1  font-semibold  text-center  text-[#212121]  '  >D</th>
                <th className=' text-[10px] p-1  font-semibold  text-center  text-[#212121]  '  >L</th>
                <th className=' text-[10px] p-1  font-semibold  text-center  text-[#212121]  '  >GD</th>
                <th className=' text-[10px] p-1  font-semibold  text-center  text-[#212121]  '  >PTS</th>
              </tr>
            </thead>
            <tbody>
              <tr className='text-left border-b border-gray-500 ' >
                <td className=' text-sm pt-2 py-1  max-w-[12px]  font-semibold text-[#212121bc]  '  > 1</td>
                <td className=' text-sm pt-2 py-1  font-semibold text-[#212121]  '  > Real Madrid</td>
                <td className=' text-sm pt-2 py-1  font-semibold  text-center  text-[#212121]  '  >38</td>
                <td className=' text-sm pt-2 py-1  font-semibold  text-center  text-[#212121]  '  >38</td>
                <td className=' text-sm pt-2 py-1  font-semibold  text-center  text-[#212121]  '  >2</td>
                <td className=' text-sm pt-2 py-1  font-semibold  text-center  text-[#212121]  '  >10</td>
                <td className=' text-sm pt-2 py-1  font-semibold  text-center  text-[#212121]  '  >80:20</td>
                <td className=' text-sm pt-2 py-1  font-semibold  text-center  text-[#212121]  '  >100</td>
              </tr>

              
            </tbody>
           
          </table>
        </div>
      </div>

    </div>
  )
}

export default page