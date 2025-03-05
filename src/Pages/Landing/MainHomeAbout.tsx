import React, { useState } from "react";
import { motion } from "framer-motion";

const MainHomeAbout = ({
  AboutMeRef,
}: {
  AboutMeRef: React.RefObject<HTMLDivElement>;
}) => {
  const [gap, setGap] = useState("60vw"); // Initial gap value

  return (
    <motion.div
      ref={AboutMeRef}
      className="mt-24 w-full flex"
      style={{ gap }}
      onHoverStart={() => setGap("30vw")} // Shrinks gap on hover
      onHoverEnd={() => setGap("60vw")} // Resets gap after hover
      animate={{ gap }} // Smooth transition of gap
      transition={{ type: "tween", duration: 0.5 }} // Smooth transition effect
    >
      <motion.div
        className="font-mono rounded-r-full my-40 -ml-12 w-[50vw] h-[30vw] text-align-left justify-start items-center text-3xl bg-[#748877] px-8 pt-20"
        whileHover={{
          x: 30, // Moves left when hovered on
        }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <p className="ml-8 text-5xl text-white">+ about me</p>
        <p className="ml-8 pt-8 text-xs w-[40vw] text-white ">
          I'm a second-year Math-CS major at UCSD with a minor in Cognitive
          Science, diving deep into the fascinating intersections of design,
          technology, and our brains.
        </p>
        <p className="ml-8 pt-4 text-xs w-[40vw] text-white ">
          In my free time, you'll probably find me doodling on whatever surface
          is nearby (usually my hands), sipping matcha while exploring a new
          programming language, or testing my skills at the pool table.
        </p>
        <button className="transform transition-transform hover:translate-y-[5px] shadow-lg ml-8 text-[1vw] border-2 border-amber-50 rounded-full px-4 py-2 text-white mt-8">
          learn more
        </button>
      </motion.div>

      {/* Right div that will move on hover */}
      <div className="flex justify-end mt-50">
        <svg
          width="1085"
          height="609"
          viewBox="0 0 1085 609"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 300C40 134.315 174.315 0 340 0H1085V609H340C174.315 609 40 474.685 40 309V300Z"
            fill="#748877"
          />
          <ellipse cx="107.5" cy="109" rx="107.5" ry="109" fill="#748877" />
          <path
            d="M144.087 57.7019C168.605 82.3901 89.9922 51.177 65.5 75.5C41.0078 99.823 79.9107 170.472 55.3931 145.783C30.8755 121.095 30.8549 81.3638 55.3471 57.0408C79.8393 32.7178 119.57 33.0138 144.087 57.7019Z"
            fill="white"
          />
          <ellipse cx="107.5" cy="465" rx="107.5" ry="109" fill="#748877" />
          <path
            d="M86.8049 414.451C119.834 403.511 51.1471 453.233 62 486C72.8529 518.767 159.136 522.172 126.107 533.112C93.0774 544.052 57.5037 526.357 46.6508 493.59C35.798 460.822 53.7756 425.391 86.8049 414.451Z"
            fill="white"
          />
          <path
            d="M187.406 343.158C152.833 339.245 239.048 322.44 242.93 288.141C246.813 253.842 166.893 215.038 201.466 218.952C236.039 222.865 260.919 253.842 257.036 288.141C253.154 322.44 221.979 347.072 187.406 343.158Z"
            fill="#B69090"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default MainHomeAbout;
