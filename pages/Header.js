import React from "react";
import { FaGithub, FaBars } from "react-icons/fa";
import { SiCodeproject } from "react-icons/si";
import { IoIosContact, IoMdClose } from "react-icons/io";
import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function Header() {
  const [navbar, setNavbar] = useState(false);
  
  return (
    <header className="sticky top-0 z-20 max-w-7xl mx-auto flex justify-between py-7">
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex text-white mx-auto justify-center align-middle"
      >
        <h1 className="text-2xl font-extrabold md:text-xl sm:text-lg mr-5 font-gloria">
          Shreejan
        </h1>

        <ul
          className={
            navbar
              ? `font-shadow flex items-center flex-row justify-start md:absolute md:flex-col md:pl-0 pl-7 w-full md:w-auto md:opacity- 100 md:py-2 md:right-28 mdd:right-16 sms:right-10 xlsm:right-3 lgsm:right-0 ssm:right-14  md:transition-all md:ease-in md:duration-400 md:bg-zinc-700 md:border-stone-400 md:border-2 md:my-10`
              : `font-shadow flex items-center flex-row justify-start md:absolute md:my-10 md:flex-col md:pl-0 pl-7 w-full md:w-auto md:opacity-0 md:py-2 md:right-28 mdd:right-16 sms:right-10 xlsm:right-3 lgsm:right-0 ssm:right-14  md:transition-all md:ease-in md:duration-400 `
          }
        >
          <li className="rounded-md md:ease-in-out   md:hover:bg-zinc-600 md:mb-2 md:rounded-none md:w-full md:right-2.5 md:relative ml-5 text-lg sm:text-sm p-2 font-semibold hover:underline hover:font-semibold duration-300 md:my-0 ">
            Projects
          </li>
          <li
            className={
              navbar
                ? "md:hover:bg-zinc-600 md:rounded-none ml-5 text-lg sm:text-sm md:right-2.5 md:relative p-2 rounded-m md:w-full hover:font-semibold duration-300 md:my-0"
                : "md:hover:bg-zinc-600 md:rounded-none ml-5 text-lg sm:text-sm bg-stone-900 p-2 rounded-md hover:bg-slate-100 hover:text-slate-800 hover:font-semibold duration-300 md:my-0"
            }
          >
            {navbar ? "Source" : <FaGithub />}
          </li>
        </ul>
      </motion.div>
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="mx-auto flex "
      >
        <button className="ml-8 text-xl sm:text-lg bg-orange-300 rounded-lg p-2 hover:bg-orange-400">
          <FiMoon/>
        </button>
        <button
          id="menu"
          name="menu"
          className="invmd:hidden ml-4 text-white bg-stone-700 p-2 rounded border-stone-200 border-2"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? <IoMdClose /> : <FaBars />}
        </button>
      </motion.div>
    </header>
  );
}

export default Header;
