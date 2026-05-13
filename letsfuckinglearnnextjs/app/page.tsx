// import LiveGameCard from "@/components/LiveGameCard"
// import LiveGameCardCricket from "@/components/LiveGameCardCricket"
// import UpcomingMatchCard from "@/components/UpcomingMatchCard"

import SecondaryNavBar from "@/components/SecondaryNavBar"

const Home = () => {
  return (
    <div className=" w-[80vw] h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700  bg-gray-800 flex flex-col gap-4  px-8 py-4  " >
     <SecondaryNavBar/>

      <div className="flex  flex-col gap-3 py-3"  >
        <h2 className="text-xl font-bold" >Live Football</h2>
        <div className="flex gap-4 overflow-x-scroll scrollbar-track-transparent w-full h-[22vh] max-h-[24vh]  " >
          {/* <LiveGameCard/>
          <LiveGameCard/>
          <LiveGameCard/>
          <LiveGameCard/>
          <LiveGameCard/>
          <LiveGameCard/>
          <LiveGameCard/> */}
        </div>
      </div>

      <div className="flex  flex-col gap-3 py-3"  >
        <h2 className="text-xl font-bold" >Live Cricket</h2>
        <div className="flex gap-4 overflow-x-scroll scrollbar-track-transparent w-full h-[22vh] max-h-[24vh]  " >
          {/* <LiveGameCardCricket/>
          <LiveGameCardCricket/>
          <LiveGameCardCricket/>
          <LiveGameCardCricket/>
          <LiveGameCardCricket/>
          <LiveGameCardCricket/>
          <LiveGameCardCricket/> */}
        </div>
      </div>

      <div className="flex  flex-col gap-3 py-3"  >
        <h2 className="text-xl font-bold" >Upcoming Matches</h2>
        <div className="flex gap-4 overflow-x-scroll scrollbar-track-transparent w-full h-[22vh] max-h-[24vh]  " >
          {/* <UpcomingMatchCard/>
          <UpcomingMatchCard/>
          <UpcomingMatchCard/>
          <UpcomingMatchCard/>  */}
        </div>
      </div>
      
    </div>
  )
}

export default Home