import Image from 'next/image'
import React from 'react'

const LiveGameCard = () => {
  return (
    <div className='min-w-[20vw] h-full px-3 py-3  rounded-xl bg-[#d5d5d5] '  >
        <h5 className='text-green-700 font-bold tracking-tighter text-[10px] ' >Live</h5>
        <div className=' w-full flex flex-col items-center justify-center ' >
            <h4 className='text-[#212121c3] font-bold text-sm tracking-tighter ' >Laliga</h4>
            <h4 className=' text-[#212121] font-bold text-sm tracking-tighter  ' >Real Madrid vs Barcelona</h4>
        </div>
        <div className='flex gap-4 py-2 w-full justify-evenly  items-center' >
            <div className='w-12 h-12 rounded-full border border-white' > <Image className='w-max rounded-full h-max' src="" alt="teamlogo" /> </div>
            <div className='flex  flex-col items-center' >
                {/* <p className='text-sm font-bold text-[#212121bb]  ' >VS</p> */}
                <div className='flex flex-col items-center' >
                    <p className='text-[#212121] text-sm font-semibold tracking-tight '  >0 - 0</p>
                    <div className='text-[#212121] flex items-center justify-center  gap-1  text-[10px] font-semibold tracking-tight '  >45:25 <p className='text-green-700 text-[10px] font-semibold tracking-tight '  >{ true ? "+"+"1" : "" }</p> </div>
                    
                </div>
            </div>
            <div className='w-12 h-12 overflow-hidden rounded-full border border-white' > <Image className='w-max rounded-full h-max'  src="" alt="teamlogo" /> </div>
        </div>
        <div className="flex justify-center items-center w-full" >
            <p className='text-[10px] text-[#212121af] font-bold tracking-tight  ' >Match 38 of 38</p>
        </div>
    </div>
  )
}

export default LiveGameCard