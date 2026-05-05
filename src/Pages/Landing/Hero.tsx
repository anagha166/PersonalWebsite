import Icon from "./Icon";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { projectsData } from "../../Utils/projectData";
import ascend from "/src/assets/Projects/Ascendtials.png";
import consulting from "/src/assets/Projects/Consulting.png";
import ds3 from "/src/assets/Projects/DS3.png";
import studybuddy from "/src/assets/Projects/StudyBuddy.png";
import bitefresh from "/src/assets/Projects/BiteFresh.png";
import mirror from "/src/assets/Projects/Mirror.png";
import yipyap from "/src/assets/Projects/Yipyap.png";

const Hero = () => {
  const projectImageById: Record<string, string> = {
    ascendtials: ascend,
    ds3,
    consulting,
    studybuddy,
    yipyap,
    bitefresh,
    "magic-mirror": mirror,
    "self-playing-guitar": mirror,
  };

  const featuredProjects = projectsData.filter((project) => project.images.length > 0);
  const [featuredProjectIndex, setFeaturedProjectIndex] = useState(0);
  const featuredProject = featuredProjects[featuredProjectIndex];

  const TypingText = ({ text, delay }: { text: string; delay: number }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
      if (index < text.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText((prevText) => prevText + text[index]);
          setIndex((prevIndex) => prevIndex + 1);
        }, delay);
        return () => clearTimeout(timeoutId);
      }
    }, [text, delay, index]);

    return <span>{displayedText}</span>;
  };

  // Managing the state for the current statement
  const statements = [
    "anaghakamath@my-website my-website %  cd landing-page", 
    "(computer + cognitive) science + math",
    "open to work!"
  ];

  const [currentStatement, setCurrentStatement] = useState<string>(
    statements[0]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatement((prevStatement) => {
        const currentIndex = statements.indexOf(prevStatement);
        const nextIndex = (currentIndex + 1) % statements.length;
        return statements[nextIndex];
      });
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (featuredProjects.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setFeaturedProjectIndex(
        (prevIndex) => (prevIndex + 1) % featuredProjects.length
      );
    }, 30000);

    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  return (
    <div className="bg-[#748877] font-mono">
      <div className="min-h-screen w-screen flex flex-col md:flex-row gap-[0.1vw] justify-center items-center px-4 md:px-0">
        <Icon />
        {/* Text with improved size and spacing */}
        <div className="flex-1 text-white text-center md:text-left hero-text-shadow flex flex-col items-center md:items-start mt-4 md:pr-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5vw]">Hi! I'm Anagha Kamath</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.2vw] w-full md:w-[40vw] pt-4 md:mr-10">
            <TypingText text={currentStatement} delay={30} />
          </p>
          {featuredProject && (
            <div className="w-full md:w-[33vw] mt-5 p-3 rounded-xl bg-white/10 border border-white/30">        
              <AnimatePresence mode="wait">
                <motion.div
                  key={featuredProject.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="mt-3"
                >
                  <img
                    src={projectImageById[featuredProject.id] ?? featuredProject.images[0]}
                    alt={featuredProject.title}
                    className="w-full h-[18vw] sm:h-[18vw] object-cover rounded-lg border border-white/20"
                  />
                  <p className="mt-1 text-xs text-white/90">
                    {featuredProject.description}
                  </p>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <Link
                      to="/projects"
                      className="text-xs px-2.5 py-1 rounded-md border border-white/60 hover:bg-white hover:text-[#748877] transition-colors"
                    >
                      See my work
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
