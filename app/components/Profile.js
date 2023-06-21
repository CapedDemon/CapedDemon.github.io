import { React, Suspense } from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Header from "@/app/components/Atom";
import CanvasLoader from "@/app/components/CanvasLoader";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";

const Profile = () => {
  const [text, count] = useTypewriter({
    words: [
      "< Student of Life >",
      "< Ready to learn >",
      "< Down to Earth🌏 >",
      "< Explorer >",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="absolute inset-0 top-[120px] max-w-7xl ml-10 sm:ml-20 md:ml-32 mx-auto flex flex-col sm:flex-row items-start gap-15 ">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row "
      >
        <div className="flex-col flex justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#148c82]" />
          <div className="w-1 sm:h-80 h-40 green-gradient" />
        </div>
        <div className="ml-1">
          <h2 className={`subText font-AmantiSc`}>
            Hi, there 🖐 I'm
            <br />
          </h2>
          <h1 className={`headText xs:text-[50px] font-TiltPrism`}>
            <span text>Shreejan Dolai</span>{" "}
          </h1>
          <br />
          <hr className="my-2 text-cyan-400" />
          <h2 className="subText font-AmantiSc">
            <span>{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h2>
        </div>
      </motion.div>
      <Canvas>
        <Suspense fallback={<CanvasLoader />}>
          <Header />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Profile;
