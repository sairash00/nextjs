import SecondaryNavBar from './SecondaryNavBar'
import LiveGameCardCricket from './LiveGameCardCricket'
import IplNavbar from './IplNavbar'

const IplPageCommon = () => {
  return (
   <div>
        <SecondaryNavBar/>

         <div className="flex min-h-fit flex-col gap-3 py-3"  >
            <h2 className="text-xl font-bold" >Live & Upcoming Matches</h2>
            <div className="flex gap-4 overflow-x-auto scrollbar-track-transparent w-full min-h-fit max-h-[24vh]  " >
            <LiveGameCardCricket/>
        </div>
      </div>

       <IplNavbar/>
        
    </div>
  )
}

export default IplPageCommon