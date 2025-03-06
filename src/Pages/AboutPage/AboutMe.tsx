import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const AboutMe = () => {
  const [img, setImg] = useState("src/assets/AboutMe/Wave2.png");
  return (
    <div className="flex font-mono flex-col items-center justify-center min-h-screen">
      <div className="flex flex-row my-24">
        <div className="bg-[#748877] w-[40vw] h-[40vw] rounded-4xl p-20 mx-16 font-mono">
          <h1 className="text-4xl text-white">cd about-me</h1>
          <p className="text-white text-[1.2vw] pt-10">
            I’m a second-year Math-CS major at UCSD with a minor in Cognitive
            Science (ML & Neuroscience), diving deep into the fascinating
            intersections of logic, technology, and the brain.
          </p>
          <p className="text-white text-[1.2vw] pt-10">
            When I’m not immersed in algorithms and equations, you’ll probably
            find me doodling on whatever surface is nearby (usually my hands),
            sipping matcha while exploring the nuances of a new programming
            language, or testing my skills at the pool table.
          </p>
        </div>
        <div className="flex flex-1 justify-center items-center mt-6">
          {/* Wrapper to control positioning */}
          <motion.div
            className="relative w-[35vw] h-[35vw] flex justify-center items-center"
            onHoverStart={() => setImg("src/assets/AboutMe/Wave1.png")}
            onHoverEnd={() => setImg("src/assets/AboutMe/Wave2.png")}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <img
              src={img}
              alt="icon"
              className="w-full h-full object-contain z-10"
            />
            <div className="absolute top-7 border-6 rounded-full w-[32vw] h-[32vw] border-[#748877] transition-shadow hover:shadow-2xl z-0" />
          </motion.div>
        </div>
      </div>
      <div className="bg-[#748877] w-[90vw] my-24 rounded-4xl justify-center items-center mx-16 py-10 flex flex-col gap-20">
        <div className="flex flex-row p-4 gap-5">
          <div className="flex flex-col p-12 w-[50vw]">
            <h1 className="text-3xl text-white">./code + art</h1>
            <p className="text-white text-[1.2vw] pt-10">
              I’m a second-year Math-CS major at UCSD with a minor in Cognitive
              Science (ML & Neuroscience), diving deep into the fascinating
              intersections of logic, technology, and the brain.
            </p>
          </div>
          <div className="border-2 border-amber-50 rounded-4xl w-[30vw] h-[30vw] mx-16 font-mono"></div>
        </div>
      </div>
      <div className="bg-[#748877] w-[90vw] my-24 rounded-4xl justify-center items-center mx-16 py-10 flex flex-col gap-20">
        <div className="flex flex-row p-4 gap-5">
          <div className="flex flex-col p-12 w-[50vw]">
            <h1 className="text-3xl text-white">./in_my_free_time...</h1>
            <p className="text-white text-[1.2vw] pt-10">
              I’m a second-year Math-CS major at UCSD with a minor in Cognitive
              Science (ML & Neuroscience), diving deep into the fascinating
              intersections of logic, technology, and the brain.
            </p>
          </div>
          <div className="border-2 border-amber-50 rounded-4xl w-[30vw] h-[30vw] mx-16 font-mono"></div>
        </div>
        <div className="flex flex-row p-4 gap-5">
          <div className="border-2 border-amber-50 rounded-4xl w-[30vw] h-[30vw] mx-16 font-mono"></div>
          <div className="flex flex-col p-12 w-[50vw] justify-right align-right">
            <h1 className="text-3xl text-white">./you_can_find_me</h1>
            <p className="text-white text-[1.2vw] pt-10">
              I’m a second-year Math-CS major at UCSD with a minor in Cognitive
              Science (ML & Neuroscience), diving deep into the fascinating
              intersections of logic, technology, and the brain.
            </p>
          </div>
        </div>
        <div className="flex flex-row p-4 gap-12">
          <div className="border-2 border-amber-50 rounded-4xl w-[25vw] h-[25vw]  font-mono"></div>
          <div className="border-2 border-amber-50 rounded-4xl w-[25vw] h-[25vw] font-mono"></div>
          <div className="border-2 border-amber-50 rounded-4xl w-[25vw] h-[25vw] font-mono"></div>
        </div>
        <p className="text-white text-[1.2vw] px-12 pb-12">
          I’m a second-year Math-CS major at UCSD with a minor in Cognitive
          Science (ML & Neuroscience), diving deep into the fascinating
          intersections of logic, technology, and the brain.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
