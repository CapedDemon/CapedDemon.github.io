"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";
import { GrContact } from "react-icons/gr";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="primary-header items-center justify-between flex top-2 w-full h-[30px] text-[30px] z-10">
      <div className="m-[2rem]">
        <h1 className="font-BrunoAce text-[30px] font-semibold cursor-pointer text-white">
          Shreejan
        </h1>
      </div>
      <div
        className={`navBtn z-40 `}
        onClick={() => {
          setNavbar(!navbar);
        }}
      >
        <BiChevronLeft
          className={`${
            navbar ? "rotate-180 " : ""
          } transition-all duration-300 flex justify-center items-center w-10 h-10 bg-gray-600 rounded-full cursor-pointer top-[30px] z-10 fixed right-[10px]`}
        />
      </div>
      <nav
        className={`${
          navbar ? "primary-Navigation expanded" : "primary-Navigation"
        } primary-Navigation`}
      >
        <ul
          className={`flex gap-[20px] list-none uppercase font-AmantiSc font-bold `}
        >
          <li className="text-white ">
            {" "}
            <Link href="/">Home</Link>
          </li>
          
          <li className="text-white ">
            {" "}
            <Link href="#contact">Contact</Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
