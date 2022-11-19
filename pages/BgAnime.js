import React from 'react'
import { motion } from 'framer-motion';

function BgAnime() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#3333333] rounded-full h-[200px] w-[200px] mt-40 animate-ping"></div>
      <div className="absolute border-[#3333333] rounded-full h-[300px] w-[300px] mt-40 "></div>
      <div className="absolute border-[#3333333]  rounded-full h-[500px] w-[500px] mt-40 "></div>
      <div className="rounded-full border border-[#F7Ab0A]  h-[500px] w-[500px] absolute mt-40 "></div>
      <div className="rounded-full border border-[#e57b11]  h-[500px] w-[500px] absolute mt-40 "></div>
    </motion.div>
  );
}

export default BgAnime