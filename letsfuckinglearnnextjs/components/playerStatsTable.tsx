import PlayerStatsTableRow from './playerStatsTableRow'


const PlayerStatsTable = () => {
  return (
    <table className=' w-full border-collapse text-sm ' >
    <thead>
      <tr className='text-left  border-gray-800 ' >
        <th className=' text-[10px] p-1  max-w-2  font-semibold text-[#212121]  '  > #</th>
        <th className=' text-[10px] p-1  font-semibold text-[#212121]  '  > Player</th>
        <th className=' text-[10px] p-1  font-semibold  text-center  text-[#212121]  '  >MP</th>
        <th className=' text-[10px] p-1  font-semibold  text-center  text-[#212121]  '  >AVG</th>
        <th className=' text-[10px] p-1  font-semibold  text-center  text-[#212121]  '  >{true ? "Runs" : "Wickets" }</th>
        {/* <th className=' text-[10px] p-1  font-semibold  text-center  text-[#212121]  '  >SR</th> */}
      </tr>
    </thead>
    <tbody>
        <PlayerStatsTableRow/>
        <PlayerStatsTableRow/>
        <PlayerStatsTableRow/>
    </tbody>
   
  </table>
  )
}

export default PlayerStatsTable