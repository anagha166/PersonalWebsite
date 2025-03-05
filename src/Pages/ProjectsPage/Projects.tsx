import React from "react";
import { IoLogoFigma } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { BiLogoBlender } from "react-icons/bi";
import { SiCanva } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";

const Projects = () => {
  const VideoLoop = (path: string) => {
    return (
      <div className="w-[20vw] h-[20vw] flex items-center justify-center rounded-lg overflow-hidden shadow-md">
        <video
          src={path} // Update this to your actual file path
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    );
  };

  const project = (caption: string, path: string, type: string) => {
    return (
      <div className="flex flex-col items-center transform transition-transform hover:translate-y-[-5px] hover:shadow-gray-900">
        {type === "video" ? (
          VideoLoop(path)
        ) : (
          <img
            className="w-[20vw] h-[20vw] flex items-center justify-center rounded-lg overflow-hidden shadow-md object-cover"
            src={path}
          />
        )}

        <p className="text-[0.8vw] text-white mt-2 pl-2">{caption}</p>
      </div>
    );
  };

  return (
    <div>
      <div className="bg-[#748877] text-white font-mono w-[90vw] h-[20vw] rounded-4xl m-32 p-4 flex flex-col">
        <div className=" flex justify-center items-center gap-20">
          <h1 className="text-4xl">cd my-projects</h1>
          <p className="text-[1vw] mt-8 w-[40vw] pt-4">
            Over the years, I've gained so many invaluable experiences and
            chances to follow my passions. <br className="pt-4" />
            <p className="text-[1vw] w-[40vw] pt-4">
              Here are some memorable experiences that have stuck with me—but
              there’s still so much more to come. I’m currently working on new
              projects that I can’t wait to share soon!
            </p>
            <div className="mt-8 pb-8 flex flex-row text-2xl items-center gap-4">
              <p className="mr-2">Skills:</p>
              <IoLogoFigma className="hover:scale-120"/>
              <FaJava className="hover:scale-120"/>
              <FaPython className="hover:scale-120"/>
              <BiLogoBlender className="hover:scale-120"/>
              <SiCanva className="hover:scale-120"/>
              <FaReact className="hover:scale-120"/>
              <FaHtml5 className="hover:scale-120"/>
              <FaCss3Alt className="hover:scale-120"/>
              <FaWordpress className="hover:scale-120"/>
            </div>
          </p>
        </div>
      </div>
      <div className="bg-[#748877] text-white font-mono w-[90vw] rounded-4xl mt-36 mx-32 px-36 py-20 flex-col justify-end align-end items-center mb-20">
      <div className="flex flex-col gap-4 py-12">
          <h1 className="text-4xl leading-[8vh]">./website development</h1>
          <div className="grid grid-cols-3 gap-12">
            {project(
              "Website redesign for local non-profit organization ASCENDtials during a summer internship",
              "src/assets/Projects/Ascendtials.png",
              "photo"
            )}
            {project(
              "Main website redesign for UCSD's Data Science Student Society",
              "src/assets/Projects/DS3.png",
              "photo"
            )}
            {project(
              "Consulting website redesign for UCSD's Data Science Student Society",
              "src/assets/Projects/Consulting.png",
              "photo"
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 py-12">
          <h1 className="text-4xl leading-[8vh]">./3d modeling/art</h1>
          <div className="grid grid-cols-3 gap-12">
            {project(
              "Little blue car with tinted windows and glowing lights",
              "src/assets/Projects/Car.mov",
              "video"
            )}
            {project(
              "A snowman on a calm winters day, standing by a christmas tree",
              "src/assets/Projects/Snowman.mov",
              "video"
            )}
            {project(
              "My first blender endeavor, untextured but colored",
              "src/assets/Projects/Donut.mov",
              "video"
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 py-12">
          <h1 className="text-4xl leading-[8vh]">./hardware</h1>
          <div className="grid grid-cols-3 gap-12">
            {project(
              "Winter 2023: A 'magic mirror' that compliments you based of of your clothes, made with my team for IEEE quarterly projects",
              "src/assets/Projects/Mirror.png",
              "photo"
            )}
            {project(
              "Fall 2023: A self playing guitar made with my team for IEEE quarterly projects",
              "src/assets/Projects/Guitar.mov",
              "video"
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 py-12">
          <h1 className="text-4xl leading-[8vh]">./2d art and design</h1>
          <div className="grid grid-cols-3 gap-12">
            {project(
              "A portrait of me and my father, made as a gift",
              "src/assets/Projects/Annu.png",
              "photo"
            )}
            {project(
              "A portrait made with multiple reference photos online",
              "src/assets/Projects/GreekTragedy.png",
              "photo"
            )}
            {project(
              "A play on line work and detail",
              "src/assets/Projects/Lemur.png",
              "photo"
            )}
            {project(
              "Designed a car for my younger brother, featuring his favorite superheroes",
              "src/assets/Projects/Marvel.png",
              "photo"
            )}
            {project(
              "The process behind an older drawing of mine, in colored pencil",
              "src/assets/Projects/MonaLisa.mov",
              "video"
            )}
            {project(
              "Tempura painting from an old favorite TV show",
              "src/assets/Projects/Wanda.png",
              "photo"
            )}
            {project(
              "A labor of love, what started as a simple experimentation with oil paint has now become my favorite pastime",
              "src/assets/Projects/PearlGirl.png",
              "photo"
            )}
            {project(
              "Pixelart creation for a game I had created",
              "src/assets/Projects/Bat.mov",
              "video"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
