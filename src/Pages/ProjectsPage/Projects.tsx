import { useState } from "react";
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
import ProjectModal from "../../Components/ProjectModal";
import { projectsData, ProjectData } from "../../Utils/projectData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (projectId: string) => {
    const project = projectsData.find(p => p.id === projectId);
    if (project) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };


  const project = (
    caption: string,
    path: string,
    type: string,
    projectId?: string,
    category?: string
  ) => {
    // Determine if this is a website development project
    const isWebsiteProject = category === "website development";
    
    return (
      <div 
        className="flex flex-col items-left transform transition-transform hover:translate-y-[-5px] hover:shadow-gray-900 cursor-pointer"
        onClick={() => projectId && openModal(projectId)}
      >
        {type === "video" ? (
          <div className={`w-full ${isWebsiteProject ? 'aspect-[4/3]' : 'aspect-square'} border-2 flex items-center justify-center rounded-lg overflow-hidden shadow-md`}>
            <iframe
              src={`https://drive.google.com/file/d/${path}/preview`}
              width="100%"
              height="100%"
              allow="autoplay"
              title="Google Drive Video"
              className="rounded-lg"
            ></iframe>
          </div>
        ) : (
          <img
            className={`w-full ${isWebsiteProject ? 'aspect-[13/8]' : 'aspect-square'} border-2 flex items-center justify-center rounded-lg overflow-hidden shadow-md object-cover`}
            src={path}
          />
        )}
        <p className="text-xs md:text-sm lg:text-base text-white mt-2 pt-2 text-left">{caption}</p>
        {projectId && (
          <p className="text-xs text-amber-50 mt-1 italic">Click to learn more</p>
        )}
      </div>
    );
  };

  return (
    <div className="px-4 md:px-4 lg:px-16">
      <div className="bg-[#748877] text-white font-mono w-full max-w-6xl mx-auto my-8 md:my-16 lg:my-16 rounded-4xl p-6 md:p-8 lg:p-12  flex-col justify-center">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20">
          <h1 className="text-3xl md:text-2xl lg:text-3xl text-center lg:text-left">cd my-projects</h1>
          <div className="text-sm md:text-base lg:text-lg mt-4 lg:mt-8 w-full lg:w-[45vw] pt-4">
            Over the years, I've gained so many invaluable experiences and
            chances to follow my passions. <br className="pt-4" />
            <p className="text-smmd:text-base lg:text-lg w-full lg:w-[40vw] pt-4">
              Here are some memorable projects that have stuck with me—but
              there's still so much more to be done. I'm currently working on
              new projects that I can't wait to share soon!
            </p>
            <div className="mt-6 lg:mt-8 pb-6 lg:pb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="mr-2 text-lg md:text-xl lg:text-2xl">Skills:</p>
              <div className="flex flex-wrap gap-3 text-2xl md:text-3xl lg:text-4xl">
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
      <div className="flex justify-center">
        <img className="max-w-full h-[10vw]" src={lizard} alt="" />
      </div>
      <div className="bg-[#748877] text-white font-mono w-full max-w-6xl mx-auto rounded-4xl mt-16 lg:mt-36 px-6 md:px-12 lg:px-36 py-12 lg:py-20 flex-col justify-end align-end items-center mb-12 lg:mb-20">
        <div className="flex flex-col gap-4 py-8 lg:py-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight">./website development</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-12">
            {project(
              "Website Redesign for local non-profit organization, ASCENDtials",
              ascend,
              "photo",
              "ascendtials",
              "website development"
            )}
            {project(
              "Main website redesign for UCSD's Data Science Student Society",
              ds3,
              "photo",
              "ds3",
              "website development"
            )}
            {project(
              "Consulting website redesign for UCSD's Data Science Student Society",
              consulting,
              "photo",
              "consulting",
              "website development"
            )}
            {project(
              "'YipYap' - Preliminary designs for a joint project to create a chat app designed for chatty people",
              yipyap,
              "photo",
              "yipyap",
              "website development"
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 py-8 lg:py-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight">./3d modeling</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
            {project(
              "Blue car with glowing headlights and tinted windows",
              "1sOA-_QFZFkpbGOEOtuwEAWA38iR4Ix9g",
              "video"
            )}
            {project(
              "Winter Scene",
              "18aq7hg7TeZZ6sfiAg56FdL3J-bwkjS8W",
              "video"
            )}
            {project(
              "Preliminary model of a donut with sprinkles",
              "1yD8b8MLdYxxpAwOsmEdku4q7WXXrmU-w",
              "video"
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 py-8 lg:py-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight">./hardware</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
            {project(
              "'Magic Mirror'for IEEE quarterly projects that compliments based on appearance",
              mirror,
              "photo",
              "magic-mirror"
            )}
            {project(
              "Self playing guitar made with my team for IEEE quarterly projects, using arduinos and a 3D printed stand",
              "1aG2AoE3aque1Vt77wHr2rR48--pKkqy4",
              "video",
              "self-playing-guitar"
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 py-8 lg:py-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight">./2d art and design</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
            {project("Family portrait", annu, "photo")}
            {project(
              "Portrait from reference",
              greektragedy,
              "photo"
            )}
            {project("Lemur - pencil sketch", lemur, "photo")}
            {project(
              "Car designed for my younger brother, featuring his favorite superheroes",
              marvel,
              "photo"
            )}
            {project(
              "Mona Lisa recreation, complete with frame",
              "13ngqzH-4pSXEm8JskU_xrJQKl0RXgtTj",
              "video"
            )}
            {project(
              "Wandavision portrait",
              wanda,
              "photo"
            )}
            {project(
              "My current labor of love",
              pearlgirl,
              "photo"
            )}
            {project(
              "Bat animation for a game design",
              "15RpkvNoiJVODTbsSaz1qtwtKhZQXG2L8",
              "video"
            )}
          </div>
        </div>
      </div>
      
      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
};

export default Projects;
