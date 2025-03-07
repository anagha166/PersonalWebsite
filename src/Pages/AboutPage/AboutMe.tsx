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
    <div className="flex font-mono flex-col items-center justify-center min-h-screen">
      <div className="flex flex-row my-24">
        <div className="bg-[#748877] w-[40vw] h-[40vw] rounded-4xl p-20 mx-16 font-mono">
          <h1 className="text-5xl text-white">cd about-me</h1>
          <p className="text-white text-[1.2vw] pt-10">
            Hi! I'm a full-stack developer with a passion for problem-solving
            and art. I am currently based in San Diego, pursing my Bachelor's
            degree in Mathematics-Computer Science at UCSD, minoring in
            Cognitive Science.
          </p>
          <p className="text-white text-[1.2vw] pt-5">
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
            <div className="absolute top-7 border-6 rounded-full w-[32vw] h-[32vw] border-[#748877] transition-shadow hover:shadow-2xl z-0" />
          </motion.div>
        </div>
      </div>
      <div className="bg-[#748877] w-[90vw] my-24 rounded-4xl justify-center items-center mx-16 p-4 flex flex-col gap-10">
        <div className="flex flex-row p-4 gap-5">
          <div className="flex flex-col p-12 w-[50vw]">
            <h1 className="text-3xl text-white">./my_background</h1>
            <p className="text-white text-[1.2vw] pt-10">
              My love for programming began in highschool, through developing
              and designing various java games on Eclipse. I loved the chance to
              solve the logic puzzles I encountered along the way, and relished
              the creative process of designing the games. Web development gives
              me the opportunity to combine my passions for programming and art,
              allowing me to create interactive and visually stunning websites.
            </p>
            <p className="text-white text-[1.2vw] pt-5">
              I discovered cognitive science later on, and fell in love with the
              fact that it allowed me a chance to explore both the worlds of
              biology and design. The intersection of these two fields allows me
              a better undestanding on how different layouts impact our
              experiences with technology.
            </p>
          </div>
          <div className="rounded-4xl w-[30vw] h-[30vw] m-16 font-mono">
            <img
              className="w-[30vw] h-[30vw] flex items-center justify-center rounded-4xl overflow-hidden object-cover"
              src={photoshoot}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#748877] w-[90vw] my-24 rounded-4xl justify-center items-center mx-16 p-4 flex flex-col gap-10">
        <div className="flex flex-row p-4 gap-5">
          <div className="flex flex-row p-12 gap-5">
            <div className="rounded-4xl w-[30vw] h-[30vw] mx-16 font-mono">
              <img
                className="w-[40vw] h-[30vw] flex items-center justify-center rounded-4xl overflow-hidden object-cover"
                src={windows}
              />
            </div>
            <div className="flex flex-col px-12 py-16 w-[50vw]">
              <h1 className="text-3xl text-white">./in_my_free_time...</h1>
              <p className="text-white text-[1.2vw] pt-10">
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
      <div className="bg-[#748877] text-white w-[90vw] my-24 rounded-4xl justify-center items-center mx-16 flex flex-col gap-5">
        <h1 className="text-5xl pt-20">cd my-gallery</h1>
        <div className="flex flex-row pt-15 gap-5">
          <div className="rounded-4xl w-[25vw] h-[25vw] font-mono">
            <img
              className="hover:border-2 border-amber-50 w-[25vw] h-[25vw] flex items-center justify-center rounded-2xl overflow-hidden object-cover"
              src={newyawk}
            />
          </div>
          <div className="rounded-4xl w-[25vw] h-[25vw]  font-mono">
            <img
              className="hover:border-2 border-amber-50 w-[25vw] h-[25vw] flex items-center justify-center rounded-2xl overflow-hidden object-cover"
              src={ruckus}
            />
          </div>
          <div className="rounded-4xl w-[25vw] h-[25vw]  font-mono">
            <img
              className="w-[25vw] h-[25vw] hover:border-2 border-amber-50 flex items-center justify-center rounded-2xl overflow-hidden object-cover"
              src={workshop}
            />
          </div>
        </div>
        <div className="flex flex-row px-2 pb-20 gap-5">
          <div className="rounded-4xl w-[25vw] h-[25vw]  font-mono">
            <img
              className="hover:border-2 border-amber-50 w-[25vw] h-[25vw] flex items-center justify-center rounded-2xl overflow-hidden object-cover"
              src={meandcat}
            />
          </div>
          <div className="rounded-4xl w-[25vw] h-[25vw]  font-mono">
            <img
              className="hover:border-2 border-amber-50 w-[25vw] h-[25vw] flex items-center justify-center rounded-2xl overflow-hidden object-cover"
              src={dance}
            />
          </div>
          <div className="rounded-4xl w-[25vw] h-[25vw]  font-mono">
            <img
              className="hover:border-2 border-amber-50 w-[25vw] h-[25vw] flex items-center justify-center rounded-2xl overflow-hidden object-cover"
              src={triton}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
