"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const emailForm = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ghgrjf6",
        "template_tdm25nw",
        emailForm.current,
        "7r1yFJU-gcIGaIf4d"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div
      id="#contact"
      className="h-full relative mt-32 top-[1150px] xs:top-[1200px] md:top-[1200px] lg:top-[1200px] mb-48"
    >
      <div className="w-[100%] h-[100%] flex justify-between gap-[50px] ">
        <div className="flex-1 flex items-center md:justify-items-end justify-center flex-col gap-[25px] ">
          <div className="flex flex-row">
            <div className="w-5 h-5 rounded-full bg-[#deed14]" />
            <motion.div
              initial={{
                x: -200,
              }}
              whileInView={{
                x: 10,
              }}
              transition={{
                duration: 1.5,
              }}
              className="subHeadText xs:text-[40px] font-BrunoAce tracking-[20px]"
            >
              ContactUs
            </motion.div>
          </div>
          <form
            className="w-[300px] md:w-[500px] flex flex-col gap-[25px] mb-48 text-white font-AmantiSc text-[20px] font-bold"
            ref={emailForm}
            onSubmit={handleSubmit}
          >
            <input
              required
              type="text"
              className="bg-[#e8e6e6] p-[20px] border-none rounded-sm"
              placeholder="Name"
              name="name"
            ></input>
            <input
              required
              type="email"
              className="bg-[#e8e6e6] p-[20px] border-none rounded-sm"
              placeholder="Email"
              name="email"
            ></input>
            <textarea
              required
              className="bg-[#066167] p-[20px] border-none rounded-sm"
              placeholder="Message"
              name="message"
              rows={10}
            ></textarea>
            <button
              className="text-white border-none font-bold cursor-pointer rounded-lg p-[20px] bg-sky-400 items-center justify-center text-center mb-48"
              type="submit"
            >
              Send
            </button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
