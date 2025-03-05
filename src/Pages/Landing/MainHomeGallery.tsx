import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const MainHomeGallery = () => {
  const [gap, setGap] = useState("60vw");
  return (
    <motion.div
      className="my-24 w-full flex justify-end gap-[40vw]"
      style={{ gap }}
      onHoverStart={() => setGap("10vw")} // Shrinks gap on hover
      onHoverEnd={() => setGap("60vw")} // Resets gap after hover
      animate={{ gap }} // Smooth transition of gap
      transition={{ type: "tween", duration: 0.5 }}
    >
      <div className="flex justify-end">
        <svg
          width="1254"
          height="609"
          viewBox="0 0 1254 609"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1163.5 353.5L1240.5 339.5L1201.5 360L1253.5 370.961L1160.5 379L1065 370.961L1070.5 334.625L1115 349L1163.5 353.5Z"
            fill="#B69090"
          />
          <path
            d="M0 0L501.519 117.335C504.816 118.106 508.22 118.314 511.586 117.949L776.312 89.2528C917.437 73.9551 1049.97 159.662 1093.91 294.641L1097.99 307.19C1100.55 315.047 1099.75 323.61 1095.79 330.861L1087.3 346.4C1030.04 451.208 916.062 512.067 797.112 501.349L488.008 473.496C484.367 473.168 480.696 473.508 477.177 474.5L0 609V0Z"
            fill="#748877"
          />
          <ellipse cx="906.5" cy="189" rx="29.5" ry="12" fill="#D9D9D9" />
          <ellipse cx="906.5" cy="416" rx="29.5" ry="12" fill="#D9D9D9" />
        </svg>
      </div>
      <motion.div
        className="font-mono rounded-l-full mb-32 -mr-12 w-[50vw] h-[30vw] text-align-right justify-right items-center text-3xl bg-[#748877] pl-32 pt-24"
        whileHover={{ x: -30 }} // Moves right on hover
        transition={{ type: "tween", duration: 0.5 }} // Smooth transition
      >
        <p className="text-5xl text-white">+ projects</p>
        <p className="pt-8 pr-8 text-xs w-[40vw] text-white">
          Come check out some of my projects, designs, and artwork, and enjoy
          some relaxing music as you browse.
        </p>
        <p className="pt-4 pr-8 text-xs w-[40vw] text-white">
          It wouldn’t be a museum experience without some ambiance, after all.
        </p>
        <Link to="/projects">
          {" "}
          <button className="transform transition-transform hover:translate-y-[5px] shadow-lg ml-8 text-[1vw] border-2 border-amber-50 rounded-full px-4 py-2 text-white mt-8 mr-24">
            explore
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default MainHomeGallery;
