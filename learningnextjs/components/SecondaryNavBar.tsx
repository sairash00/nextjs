import React from 'react'

const SecondaryNavBar = () => {
  return (
    <div className="w-full sticky top-0 bg-gray-900 rounded-xl  h-fit items-center flex py-2 px-2 border-b  border-gray-400  justify-between " >
          
        <h4>Welcome back, username</h4>
    
        <div className="flex items-center gap-4" >
        <div>O</div>
        <div>U</div>
        <div className="flex gap-2 items-center" >
        <div className="w-10 h-10 rounded-full border bg-amber-200  border-gray-300" ></div>
        <p>Username</p>
        </div>
        </div>
    </div>
  )
}

export default SecondaryNavBar