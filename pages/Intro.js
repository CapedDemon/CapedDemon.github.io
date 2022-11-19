import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BgAnime from "./BgAnime";
import { Gloria_Hallelujah } from '@next/font/google' 

const gloria = Gloria_Hallelujah({
  weight: ['400'],
});

function Intro() {
  const [text, count] = useTypewriter({
    words: ["STUDENT", "<CoDEr/>", "LOVES TO LEARN", "OPEN SOURCE"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-8 mb-20 overflow-hidden max-w-7xl mx-auto text-white text-center">
      <BgAnime />
      <img
        className="relative rounded-full mx-auto h-32 w-32"
        src="https://avatars.githubusercontent.com/u/93109967?v=4"
        alt=""
      />
      <div className="z-10">
        <h2 className="pb-2 tracking-[10px] text-lg text-gray-400">
          <span>{text}</span>
          <Cursor cursorColor="#F7Ab0A" />
        </h2>
        <h1 className="text-8xl">
          <span className={gloria.className}>Shreejan Dolai</span>
          <Cursor cursorColor="#F7Ab0A" />
        </h1>
      </div>
    </div>
  );
}

export default Intro;
