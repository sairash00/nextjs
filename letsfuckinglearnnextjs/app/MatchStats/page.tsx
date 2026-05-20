import SecondaryNavBar from "@/components/SecondaryNavBar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" w-[80vw] h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700  bg-gray-800 flex flex-col gap-4  px-8 py-4  ">
      <SecondaryNavBar />

      <div className="py-4 bg-gray-300 flex flex-col gap-6  rounded-xl   px-2">
        <p className="text-green-600  font-semibold text-m tracking-tight ">
          Live
        </p>
        <div className=" w-full flex flex-col items-center gap-2 justify-center ">
          <h4 className="text-[#212121c3] font-bold text-lg tracking-tighter ">
            Laliga
          </h4>
          <h4 className=" text-[#212121] font-bold text-xl tracking-tighter  ">
            Real Madrid vs Barcelona
          </h4>
        </div>

        <div className="flex gap-4 py-2 w-full justify-evenly  items-center">
          <div className="w-16 h-16 rounded-full border border-white">
            {" "}
            <Image
              className="w-max rounded-full h-max"
              src=""
              alt="teamlogo"
            />{" "}
          </div>
          <div className="flex  flex-col  items-center">
            {/* <p className='text-sm font-bold text-[#212121bb]  ' >VS</p> */}
            <div className="flex flex-col gap-2 items-center">
              <p className="text-[#212121] text-xl font-semibold tracking-tight ">
                0 - 0
              </p>
              <div className="text-[#212121] flex items-center justify-center  gap-1  text-m font-semibold tracking-tight ">
                45:25{" "}
                <p className="text-green-700 text-sm font-semibold tracking-tight ">
                  {true ? "+" + "1" : ""}
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="w-16 h-16 overflow-hidden rounded-full border border-white">
            {" "}
            <Image
              className="w-max rounded-full h-max"
              src=""
              alt="teamlogo"
            />{" "}
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
          <p className=" text-[#212121af] font-bold tracking-tight  ">
            Match 38 of 38
          </p>
        </div>

        

      </div>
    </div>
  );
};

export default page;
