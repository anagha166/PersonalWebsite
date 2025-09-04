import { motion } from "framer-motion";
import { useState } from "react";
import wave1 from "/src/assets/AboutMe/Wave1.png";
import wave2 from "/src/assets/AboutMe/Wave2.png";
import photoshoot from "/src/assets/AboutMe/Photoshoot.jpg";
import windows from "/src/assets/AboutMe/Window.png";
import newyawk from "/src/assets/AboutMe/NewYawk.png";
import ruckus from "/src/assets/AboutMe/Ruckus.png";
import workshop from "/src/assets/AboutMe/Workshop.png";
import meandcat from "/src/assets/AboutMe/MeAndCat.png";
import dance from "/src/assets/AboutMe/Dance2.png";
import triton from "/src/assets/AboutMe/Triton.png";

const AboutMe = () => {
  const [img, setImg] = useState(wave1);
  return (
    <div className="flex font-mono flex-col items-center justify-center min-h-screen px-4 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row my-12 lg:my-28 gap-8 lg:gap-16 w-full max-w-7xl">
        <div className="bg-[#748877] w-full lg:w-[40vw] lg:h-[40vw] rounded-4xl p-8 md:p-12 lg:p-22 font-mono">
          <h1 className="text-2xl md:text-2xl lg:text-3xl text-white">cd about-me</h1>
          <p className="text-white text-sm md:text-base lg:text-lg pt-12 lg:pt-12">
            Hi! I'm a full-stack developer with a passion for problem-solving
            and art. I am currently based in San Diego, pursing my Bachelor's
            degree in Mathematics-Computer Science at UCSD, minoring in
            Cognitive Science.
          </p>
        </div>
        <div className="flex flex-1 justify-center items-center mt-6">
          {/* Wrapper to control positioning */}
          <motion.div
            className="relative w-[60vw] h-[60vw] md:w-[50vw] md:h-[50vw] lg:w-[35vw] lg:h-[35vw] flex justify-center items-center"
            onHoverStart={() => setImg(wave1)}
            onHoverEnd={() => setImg(wave2)}
            transition={{ type: "tween", duration: 0.5 }}
            animate={img}
          >
            <img
              src={img}
              alt="icon"
              className="w-full h-full object-contain z-10"
            />
            <div className="absolute top-7 border-6 rounded-full w-[90%] h-[90%] border-[#748877] transition-shadow hover:shadow-2xl z-0" />
          </motion.div>
        </div>
      </div>
      <div className="bg-[#748877] w-full max-w-6xl my-12 lg:my-24 rounded-4xl justify-center items-center p-4 md:p-8 flex flex-col gap-6 lg:gap-10">
        <div className="flex flex-col lg:flex-row p-4 gap-5">
          <div className="flex flex-col lg:flex-row p-6 md:p-8 lg:p-12 gap-5">
            <div className="rounded-4xl w-full lg:w-[30vw] h-[50vw] lg:h-[30vw] m-4 lg:mx-16 font-mono flex justify-center">
              <img
                className="w-full h-full flex items-center justify-center rounded-4xl overflow-hidden object-cover"
                src={windows}
              />
            </div>
            <div className="flex flex-col px-6 md:px-8 lg:px-12 py-8 lg:py-16 w-full lg:w-[50vw]">
              <h1 className="text-2xl md:text-3xl text-white">./in_my_free_time...</h1>
              <p className="text-white text-sm md:text-base lg:text-lg pt-6 lg:pt-10">
                You can find me designing and creating various sites and apps, as well
                as trying out different Blender rendering techniques. When I'm
                not working, I'm likely at practice for my dance team, Raas
                Ruckus, preparing to travel the country competing in Raas-Garba
                style dance. Outside of school, I love making memories with my
                family and friends, playing games like Bopl Battle, and
                exploring new places.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#748877] text-white w-full max-w-6xl my-12 lg:my-24 rounded-4xl justify-center items-center p-4 md:p-8 flex flex-col gap-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl pt-12 lg:pt-20">cd my-gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-8 lg:pt-15 gap-4 lg:gap-5 w-full">
          <div className="rounded-4xl w-full aspect-square font-mono">
            <img
              className="hover:border-2 border-amber-50 w-full h-full flex items-center justify-center rounded-2xl overflow-hidden object-cover"
              src={newyawk}
            />
          </div>
          <div className="rounded-4xl w-full aspect-square font-mono">
            <img
              className="hover:border-2 border-amber-50 w-full h-full flex items-center justify-center rounded-2xl overflow-hidden object-cover"
              src={ruckus}
            />
          </div>
          <div className="rounded-4xl w-full aspect-square font-mono">
            <img
              className="w-full h-full hover:border-2 border-amber-50 flex items-center justify-center rounded-2xl overflow-hidden object-cover"
              src={workshop}
            />
          </div>
          <div className="rounded-4xl w-full aspect-square font-mono">
            <img
              className="hover:border-2 border-amber-50 w-full h-full flex items-center justify-center rounded-2xl overflow-hidden object-cover"
              src={meandcat}
            />
          </div>
          <div className="rounded-4xl w-full aspect-square font-mono">
            <img
              className="hover:border-2 border-amber-50 w-full h-full flex items-center justify-center rounded-2xl overflow-hidden object-cover"
              src={dance}
            />
          </div>
          <div className="rounded-4xl w-full aspect-square font-mono">
            <img
              className="hover:border-2 border-amber-50 w-full h-full flex items-center justify-center rounded-2xl overflow-hidden object-cover"
              src={triton}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
