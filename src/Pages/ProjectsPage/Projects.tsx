import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import annu from "/src/assets/Projects/Annu.png";
import ascend from "/src/assets/Projects/Ascendtials.png";
import consulting from "/src/assets/Projects/Consulting.png";
import ds3 from "/src/assets/Projects/DS3.png";
import studybuddy from "/src/assets/Projects/StudyBuddy.png";
import bitefresh from "/src/assets/Projects/BiteFresh.png";
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
  const [activeSection, setActiveSection] = useState("uiux-design");
  const tableOfContents = [
    { id: "uiux-design", label: "UI/UX Design" },
    { id: "modeling-3d", label: "3D Modeling" },
    { id: "hardware-projects", label: "Hardware" },
    { id: "art-design-2d", label: "2D Art + Design" },
  ];

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

  useEffect(() => {
    const sectionElements = tableOfContents
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    if (sectionElements.length === 0) return;

    const updateActiveSection = () => {
      const triggerLine = window.innerHeight * 0.32;
      let nextActive = sectionElements[0].id;

      for (const section of sectionElements) {
        if (section.getBoundingClientRect().top <= triggerLine) {
          nextActive = section.id;
        }
      }

      setActiveSection(nextActive);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [tableOfContents]);


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
      <motion.div
        className="group flex flex-col items-left transform transition-all duration-300 hover:translate-y-[-8px] cursor-pointer"
        onClick={() => projectId && openModal(projectId)}
        whileHover={{ y: -8 }}
      >
        {type === "video" ? (
          <div className={`w-full ${isWebsiteProject ? 'aspect-[4/3]' : 'aspect-square'} border-2 border-white/30 bg-white/5 flex items-center justify-center rounded-lg overflow-hidden shadow-md group-hover:shadow-xl group-hover:shadow-black/30 transition-all duration-300`}>
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
            className={`w-full ${isWebsiteProject ? 'aspect-[13/8]' : 'aspect-square'} border-2 border-white/30 flex items-center justify-center rounded-lg overflow-hidden shadow-md object-cover transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-black/30`}
            src={path}
          />
        )}
        <p className="text-xs md:text-sm lg:text-base text-white mt-2 pt-2 text-left transition-colors duration-300 group-hover:text-amber-50">{caption}</p>
        {projectId && (
          <p className="text-xs text-amber-50 mt-1 italic opacity-80 group-hover:opacity-100 transition-opacity duration-300">Click to learn more</p>
        )}
      </motion.div>
    );
  };

  return (
    <div className="relative mt-15 px-4 md:px-4 lg:px-16 overflow-hidden">
      <motion.img
        src={lizard}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute z-0 w-28 md:w-36 lg:w-44 opacity-70"
        animate={{
          x: ["8vw", "72vw", "58vw", "18vw", "8vw"],
          y: ["18vh", "26vh", "62vh", "72vh", "18vh"],
          rotate: [0, 8, -10, 4, 0],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="fixed right-8 xl:right-10 top-1/2 -translate-y-1/2 font-mono z-40 hidden lg:block">
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/55 mb-4">Contents</p>
        <nav className="relative pl-5 flex flex-col gap-4">
          <div className="absolute left-1.5 top-1 bottom-1 w-px bg-white/20" />
          {tableOfContents.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative text-xs tracking-[0.08em] transition-colors ${
                activeSection === item.id ? "text-white" : "text-white/55 hover:text-white/85"
              }`}
            >
              <span
                className={`absolute -left-[16px] top-[5px] h-2.5 w-2.5 rounded-full transition-colors ${
                  activeSection === item.id ? "bg-white" : "bg-white/35"
                }`}
              />
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto mt-8 lg:mt-12 mb-12 lg:mb-20 flex gap-6 md:gap-8 lg:gap-10">
        <motion.div
          className="text-white font-mono flex-1 min-w-0 rounded-4xl px-6 md:px-12 lg:px-20 md:pr-28 lg:pr-40 py-12 lg:py-20 "
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.65 }}
        >
          <motion.div
            id="uiux-design"
            className="flex flex-col gap-4 py-8 lg:py-12 scroll-mt-28"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight">./ui/ux design</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-12">
            {project(
              "Redesigned the ASCENDtials nonprofit website to improve trust signals, accessibility, and key action flow.",
              ascend,
              "photo",
              "ascendtials",
              "website development"
            )}
            {project(
              "Reworked DS3's information architecture so students can find events, resources, and opportunities faster.",
              ds3,
              "photo",
              "ds3",
              "website development"
            )}
            {project(
              "Designed a mobile-first inventory and grocery flow to help users reduce food waste with less effort.",
              bitefresh,
              "photo",
              "bitefresh",
              "website development"
            )}
            {project(
              "Created a consulting case-study experience that communicates outcomes clearly to potential clients.",
              consulting,
              "photo",
              "consulting",
              "website development"
            )}
            {project(
              "Crafted a guided learning experience where AI prompts support critical thinking step by step.",
              studybuddy,
              "photo",
              "studybuddy",
              "website development"
            )}
            {project(
              "Led early UX research and concept design for a chat app built around high-engagement conversation patterns.",
              yipyap,
              "photo",
              "yipyap",
              "website development"
            )}
          </div>
        </motion.div>
          <motion.div
          id="modeling-3d"
          className="flex flex-col gap-4 py-8 lg:py-12 scroll-mt-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
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
        </motion.div>
          <motion.div
          id="hardware-projects"
          className="flex flex-col gap-4 py-8 lg:py-12 scroll-mt-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
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
        </motion.div>
          <motion.div
          id="art-design-2d"
          className="flex flex-col gap-4 py-8 lg:py-12 scroll-mt-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
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
          </motion.div>
        </motion.div>
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
