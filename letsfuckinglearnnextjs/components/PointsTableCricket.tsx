import React from 'react'
import PointsRowCricket from './PointsRowCricket'

const PointsTableCricket = () => {
  return (
    <div>
      
      <table className=' w-full border-collapse text-sm ' >
        <thead>
          <tr className='text-left  border-gray-800 ' >
            <th className=' text-[12px] p-1  max-w-2  font-semibold text-[#212121]  '  > #</th>
            <th className=' text-[12px] p-1  font-semibold text-[#212121]  '  > Team</th>
            <th className=' text-[12px] p-1  font-semibold  text-center  text-[#212121]  '  >MP</th>
            <th className=' text-[12px] p-1  font-semibold  text-center  text-[#212121]  '  >W</th>
            <th className=' text-[12px] p-1  font-semibold  text-center  text-[#212121]  '  >D</th>
            <th className=' text-[12px] p-1  font-semibold  text-center  text-[#212121]  '  >L</th>
            <th className=' text-[12px] p-1  font-semibold  text-center  text-[#212121]  '  >NRR</th>
            <th className=' text-[12px] p-1  font-semibold  text-center  text-[#212121]  '  >PTS</th>
          </tr>
        </thead>
     <tbody>
        <PointsRowCricket/>

     </tbody>
   
  </table>
    </div>
  )
}

export default PointsTableCricket