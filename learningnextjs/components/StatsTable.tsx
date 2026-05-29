import React from "react";
import StatsTableRow from "./StatsTableRow";

const StatsTable = () => {
  return (
    <table className=" w-full  ">
      <thead>
        <tr className=" border-b   border-slate-700  ">
          <th className=" text-[10px] text-[#d5d5d5] pt-2 pb-1    ">#</th>
          <th className=" text-[10px] text-[#d5d5d5] pt-2 pb-1    ">Player</th>
          <th className=" text-[10px] text-[#d5d5d5] pt-2 pb-1    ">Goals</th>
        </tr>
      </thead>
       <StatsTableRow/>
       <StatsTableRow/>
       <StatsTableRow/>
       <StatsTableRow/>
       <StatsTableRow/>
       <StatsTableRow/>
    </table>
  );
};

export default StatsTable;
