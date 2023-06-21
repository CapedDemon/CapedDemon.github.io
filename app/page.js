"use client";

import { Canvas } from "@react-three/fiber";
import Profile from "./components/Profile";
import { Suspense } from "react";
import Bg from "./components/Bg";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full h-screen  object-cover flex flex-col items-center">
      <div className="h-full w-full fixed">
        <Canvas>
          <Suspense fallback={null}>
            <Bg />
          </Suspense>
        </Canvas>
      </div>

      <section className="relative w-full h-screen flex flex-col">
        {/* <Navbar /> */}

        <Navbar />
        <Profile className="snap-start" />
        {/* <About id="about" className="snap-center" /> -- work in progress */}
        <Contact id="contact" className="snap-center" />
      </section>
    </div>
  );
}
