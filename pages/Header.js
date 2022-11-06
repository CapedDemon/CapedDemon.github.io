import React from 'react'
import { FaHome, FaGithub } from "react-icons/fa";
import { SiCodeproject } from "react-icons/si";
import { IoIosContact } from "react-icons/io";
import {BsFillMoonStarsFill} from "react-icons/bs";

function Header() {
  return (
    <header className="sticky top-0 z-20 max-w-7xl mx-auto ">
      <div className="py-10 flex justify-between text-white">
        <h1 className="text-2xl font-extrabold md:text-xl sm:text-lg">Shreejan</h1>
        <ul className="flex items-center flex-row justify-start ">
          <li className="ml-5 text-lg sm:text-sm">Projects</li>
          <li className="ml-8 text-xl sm:text-lg">
            <BsFillMoonStarsFill />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header