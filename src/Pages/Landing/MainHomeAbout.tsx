import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MainHomeAbout = ({
  AboutMeRef,
}: {
  AboutMeRef: React.RefObject<HTMLDivElement>;
}) => {
  const [gap, setGap] = useState("60vw"); // Initial gap value

  return (
    <motion.div
      ref={AboutMeRef}
      className="mt-24 w-full flex overflow-hidden"
      style={{ gap }}
      onHoverStart={() => setGap("20vw")} // Shrinks gap on hover
      onHoverEnd={() => setGap("60vw")} // Resets gap after hover
      animate={{ gap }} // Smooth transition of gap
      transition={{ type: "tween", duration: 0.5 }} // Smooth transition effect
    >
      <motion.div
        className="font-mono leading-[2.5vh] rounded-r-full my-40 -ml-12 w-[50vw] h-[30vw] text-align-left justify-start items-center text-3xl bg-[#748877] px-8 pt-20"
        whileHover={{
          x: 30, // Moves left when hovered on
        }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <p className="ml-8 text-5xl text-white">+ about me</p>
        <p className="ml-8 pt-8 text-[1vw] w-[40vw] text-white ">
          I'm a second-year Math-CS major at UCSD with a minor in Cognitive
          Science, diving deep into the fascinating intersections of design,
          technology, and our brains.
        </p>
        <p className="ml-8 pt-8 text-[1vw] w-[40vw] text-white ">
          I like creating interactive projects that both involve and intrigue my
          users.
        </p>
        <Link to="/about">
          {" "}
          <button className="transform transition-transform hover:translate-y-[5px] shadow-lg ml-8 text-[1vw] border-2 border-amber-50 rounded-full px-4 py-2 text-white mt-8 mr-24">
            learn more
          </button>
        </Link>
      </motion.div>

      {/* Right div that will move on hover */}
      <div className="flex justify-end mt-50">
        <svg
          width="700"
          height="500"
          viewBox="0 0 769 561"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.1831 322.043C-5.51751 301.508 -4.60267 265.579 19.1136 246.225L31.6878 235.964C34.944 233.307 38.5224 231.071 42.3381 229.309L98.817 203.228C111.237 197.493 125.464 197.097 138.183 202.132L223.924 236.074C241.026 242.844 252.969 258.531 254.945 276.817V276.817C257.247 298.117 245.597 318.484 226.07 327.298L139.757 366.254C127.063 371.983 112.554 372.158 99.7255 366.737L45.3399 343.754C40.1767 341.572 35.417 338.538 31.2602 334.777L17.1831 322.043Z"
            fill="#5F7663"
          />
          <path
            d="M171.365 28.7854C165.311 15.5396 174.992 0.471283 189.555 0.471234L218.755 0.471137C222.618 0.471124 226.469 0.918878 230.229 1.80544L293.891 16.8151C303.129 18.993 311.556 23.755 318.187 30.5446L390.925 105.018C399.127 113.415 401.589 125.867 397.201 136.754V136.754C391.709 150.376 377.057 157.908 362.784 154.445L260.537 129.643C251.141 127.364 242.608 122.409 235.97 115.38L193.148 70.0296C189.387 66.0458 186.305 61.4709 184.028 56.4877L171.365 28.7854Z"
            fill="#5F7663"
          />
          <path
            d="M162.366 554.282C148.029 551.72 141.151 535.183 149.441 523.209L166.063 499.203C168.262 496.026 170.822 493.115 173.692 490.529L222.272 446.732C229.321 440.377 238.034 436.16 247.391 434.572L350.026 417.164C361.599 415.201 373.238 420.265 379.691 430.071V430.071C387.764 442.34 385.616 458.674 374.644 468.438L296.048 538.382C288.826 544.81 279.895 549.005 270.336 550.461L208.675 559.852C203.258 560.677 197.743 560.606 192.349 559.642L162.366 554.282Z"
            fill="#5F7663"
          />
          <ellipse
            cx="482.164"
            cy="285.027"
            rx="277.05"
            ry="250.027"
            fill="#748877"
          />
          <path
            d="M367.79 75.2824L432.752 93.7133L443.521 149.498L389.329 186.852L324.367 168.421L313.597 112.637L367.79 75.2824Z"
            fill="#7B987F"
          />
          <path
            d="M506.093 53.4765L571.055 71.9074L581.825 127.692L527.632 165.046L462.67 146.616L451.901 90.8306L506.093 53.4765Z"
            fill="#5F7663"
          />
          <path
            d="M594.898 141.573L659.86 160.004L670.629 215.789L616.436 253.143L551.474 234.712L540.705 178.927L594.898 141.573Z"
            fill="#7B987F"
          />
          <path
            d="M457.066 165.066L522.028 183.496L532.797 239.281L478.604 276.636L413.642 258.205L402.873 202.42L457.066 165.066Z"
            fill="#5F7663"
          />
          <path
            d="M324.785 184.363L389.747 202.794L400.517 258.579L346.324 295.933L281.362 277.502L270.592 221.717L324.785 184.363Z"
            fill="#5F7663"
          />
          <path
            d="M413.59 274.138L478.552 292.569L489.321 348.354L435.128 385.708L370.166 367.277L359.397 311.492L413.59 274.138Z"
            fill="#7B987F"
          />
          <path
            d="M368.262 384.049L433.224 402.48L443.994 458.265L389.801 495.619L324.839 477.188L314.07 421.403L368.262 384.049Z"
            fill="#7B987F"
          />
          <path
            d="M275.758 293.435L340.72 311.866L351.489 367.651L297.296 405.005L232.334 386.575L221.565 330.79L275.758 293.435Z"
            fill="#5F7663"
          />
          <path
            d="M229.164 225.448L251.915 225.447L262.684 281.232L220.377 308.939L220.376 276.637L220.376 246.852L229.164 225.448Z"
            fill="#5F7663"
          />
          <path
            d="M551.421 250.645L616.383 269.076L627.152 324.861L572.959 362.215L507.997 343.784L497.228 288L551.421 250.645Z"
            fill="#5F7663"
          />
          <path
            d="M506.093 362.235L571.055 380.666L581.825 436.451L527.632 473.805L462.67 455.374L451.901 399.589L506.093 362.235Z"
            fill="#5F7663"
          />
          <path
            d="M594.897 447.815L659.859 466.246L634.333 485.169L589.006 507.367L548.304 519.532L540.704 485.169L594.897 447.815Z"
            fill="#5F7663"
          />
          <path
            d="M638.375 340.42L703.337 358.851L714.106 414.636L659.913 451.99L594.951 433.559L584.182 377.774L638.375 340.42Z"
            fill="#7B987F"
          />
          <path
            d="M687.402 228.831L752.364 249.369L752.364 303.486L708.94 340.401L643.978 321.97L633.209 266.185L687.402 228.831Z"
            fill="#5F7663"
          />
          <ellipse cx="102" cy="227" rx="14" ry="7" fill="#D9D9D9" />
          <ellipse cx="98" cy="343" rx="14" ry="7" fill="#D9D9D9" />
        </svg>
      </div>
    </motion.div>
  );
};

export default MainHomeAbout;
