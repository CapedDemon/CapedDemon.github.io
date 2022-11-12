import React from 'react'

function BgAnime() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute border border-[#3333333] rounded-full h-[200px] w-[200px] mt-40 animate-ping"></div>
      <div className="absolute border-[#3333333] rounded-full h-[300px] w-[300px] mt-40 "></div>
      <div className="absolute border-[#3333333]  rounded-full h-[500px] w-[500px] mt-40 "></div>
      <div className="rounded-full border border-[#F7Ab0A]  h-[650px] w-[650px] absolute mt-40 "></div>
    </div>
  );
}

export default BgAnime