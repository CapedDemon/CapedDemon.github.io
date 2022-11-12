import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BgAnime from "./BgAnime";

function Intro() {
  const [text, count] = useTypewriter({
    words: ["Hi ALL!", "Coder", "Learner", "Creator", "A Friend"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-8 mb-20 overflow-hidden max-w-7xl mx-auto text-white text-center">
      <BgAnime/>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7Ab0A" />
      </h1>
    </div>
  );
}

export default Intro;
