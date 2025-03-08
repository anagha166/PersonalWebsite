import { IoLogoFigma } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { BiLogoBlender } from "react-icons/bi";
import { SiCanva } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import annu from "/src/assets/Projects/Annu.png";
import ascend from "/src/assets/Projects/Ascendtials.png";
import consulting from "/src/assets/Projects/Consulting.png";
import ds3 from "/src/assets/Projects/DS3.png";
import mirror from "/src/assets/Projects/Mirror.png";
import greektragedy from "/src/assets/Projects/GreekTragedy.png";
import lemur from "/src/assets/Projects/Lemur.png";
import marvel from "/src/assets/Projects/Marvel.png";
import pearlgirl from "/src/assets/Projects/PearlGirl.png";
import wanda from "/src/assets/Projects/Wanda.png";
import lizard from "/src/assets/Projects/Lizard.svg";
import yipyap from "/src/assets/Projects/Yipyap.png";

const Projects = () => {
  const VideoLoop = (fileId: string) => {
    const videoUrl = `https://drive.google.com/file/d/${fileId}/preview`;
    return (
      <div className="w-[20vw] h-[20vw] border-2 flex items-center justify-center rounded-lg overflow-hidden shadow-md">
        <iframe
          src={videoUrl}
          width="640"
          height="480"
          allow="autoplay"
          title="Google Drive Video"
        ></iframe>
      </div>
    );
  };

  const project = (
    caption: string,
    tools: string,
    path: string,
    type: string
  ) => {
    return (
      <div className="flex flex-col items-left transform transition-transform hover:translate-y-[-5px] hover:shadow-gray-900">
        {type === "video" ? (
          VideoLoop(path)
        ) : (
          <img
            className="w-[20vw] h-[20vw] border-2 flex items-center justify-center rounded-lg overflow-hidden shadow-md object-cover"
            src={path}
          />
        )}
        <p className="text-[0.8vw] text-white mt-2 pt-2 text-left">{caption}</p>
        <p className="text-[0.8vw] text-white mt-2 pb-2 text-left">
          Tools: {tools}
        </p>
      </div>
    );
  };

  return (
    <div>
      <div className="bg-[#748877] text-white font-mono w-[90vw] h-[20vw] rounded-4xl mx-32 my-20 pb-4 flex flex-col justify center">
        <div className=" flex justify-center items-center gap-20">
          <h1 className="text-5xl">cd my-projects</h1>
          <div className="text-[1vw] mt-8 w-[40vw] pt-4">
            Over the years, I've gained so many invaluable experiences and
            chances to follow my passions. <br className="pt-4" />
            <p className="text-[1vw] w-[40vw] pt-4">
              Here are some memorable projects that have stuck with me—but
              there’s still so much more to be done. I’m currently working on
              new projects that I can’t wait to share soon!
            </p>
            <div className="mt-8 pb-8 flex flex-row items-center gap-4">
              <p className="mr-2 text-2xl">Skills:</p>
              <div className="flex flex-row gap-3 text-4xl">
                <IoLogoFigma className="hover:scale-120" />
                <FaJava className="hover:scale-120" />
                <FaPython className="hover:scale-120" />
                <BiLogoBlender className="hover:scale-120" />
                <SiCanva className="hover:scale-120" />
                <FaReact className="hover:scale-120" />
                <FaHtml5 className="hover:scale-120" />
                <FaCss3Alt className="hover:scale-120" />
                <FaWordpress className="hover:scale-120" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className="m-auto" src={lizard} alt="" />
      </div>
      <div className="bg-[#748877] text-white font-mono w-[90vw] rounded-4xl mt-36 mx-32 px-36 py-20 flex-col justify-end align-end items-center mb-20">
        <div className="flex flex-col gap-4 py-12">
          <h1 className="text-4xl leading-[8vh]">./website development</h1>
          <div className="grid grid-cols-3 gap-12">
            {project(
              "Website Redesign for local non-profit organization, ASCENDtials",
              "Figma, WordPress, HTML, CSS, JS",
              ascend,
              "photo"
            )}
            {project(
              "Main website redesign for UCSD's Data Science Student Society",
              "Figma, React, TypeScript, TailwindCSS, HTML, CSS, JS",
              ds3,
              "photo"
            )}
            {project(
              "Consulting website redesign for UCSD's Data Science Student Society",
              "Figma, React, TypeScript, TailwindCSS, HTML, CSS, JS",
              consulting,
              "photo"
            )}
            {project(
              "'YipYap' - Preliminary designs for a joint project to create a chat app designed for chatty people",
              "Figma",
              yipyap,
              "photo"
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 py-12">
          <h1 className="text-4xl leading-[8vh]">./3d modeling</h1>
          <div className="grid grid-cols-3 gap-12">
            {project(
              "Blue car with glowing headlights and tinted windows",
              "Blender",
              "1sOA-_QFZFkpbGOEOtuwEAWA38iR4Ix9g",
              "video"
            )}
            {project(
              "Winter Scene",
              "Blender",
              "18aq7hg7TeZZ6sfiAg56FdL3J-bwkjS8W",
              "video"
            )}
            {project(
              "Preliminary model of a donut with sprinkles",
              "Blender",
              "1yD8b8MLdYxxpAwOsmEdku4q7WXXrmU-w",
              "video"
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 py-12">
          <h1 className="text-4xl leading-[8vh]">./hardware</h1>
          <div className="grid grid-cols-3 gap-12">
            {project(
              "'Magic Mirror'for IEEE quarterly projects that compliments based on appearance",
              "Lazer cutting, calls to ChatGPT API",
              mirror,
              "photo"
            )}
            {project(
              "Self playing guitar made with my team for IEEE quarterly projects, using arduinos and a 3D printed stand",
              "Lazer cutting, CAD, 3D Printing, Arduino",
              "1aG2AoE3aque1Vt77wHr2rR48--pKkqy4",
              "video"
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 py-12">
          <h1 className="text-4xl leading-[8vh]">./2d art and design</h1>
          <div className="grid grid-cols-3 gap-12">
            {project("Family portrait", "Graphite", annu, "photo")}
            {project(
              "Portrait from reference",
              "Graphite",
              greektragedy,
              "photo"
            )}
            {project("Lemur - pencil sketch", "Graphite", lemur, "photo")}
            {project(
              "Car designed for my younger brother, featuring his favorite superheroes",
              "Acrylic on wood",
              marvel,
              "photo"
            )}
            {project(
              "Mona Lisa recreation, complete with frame",
              "Prismacolor pencils",
              "13ngqzH-4pSXEm8JskU_xrJQKl0RXgtTj",
              "video"
            )}
            {project(
              "Wandavision portrait",
              "Tempera paint, prismacolor pencils",
              wanda,
              "photo"
            )}
            {project(
              "My current labor of love",
              "Oil paint on canvas",
              pearlgirl,
              "photo"
            )}
            {project(
              "Bat animation for a game design",
              "Pixilart",
              "15RpkvNoiJVODTbsSaz1qtwtKhZQXG2L8",
              "video"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
