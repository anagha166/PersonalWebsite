import Icon from "./Icon";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLeaf } from "react-icons/fa";

const Hero = ({
  AboutMeRef,
}: {
  AboutMeRef: React.RefObject<HTMLDivElement>;
}) => {
  const [showArrow] = useState(true);

  const handleScroll = () => {
    AboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  };

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
    "anaghakamath@my-website my-website %  cd landing-page", "I'm driven by the curiosity of how we think and interact with the world around us",
    "(computer + cognitive) science + math",
    "I strive to create elegant solutions that combine efficiency with meaningful user engagement.",
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

  return (
    <div className="bg-[#748877] font-mono">
      <div className="min-h-screen w-screen flex gap-[0.1vw] justify-center items-center">
        <Icon />
        {/* Text with improved size and spacing */}
        <div className="flex-1 text-white text-left hero-text-shadow flex flex-col items-start mt-4 pr-12">
          <h1 className="text-5xl">Hi! I'm Anagha Kamath</h1>
          <p className="text-[1.2vw] w-[40vw] pt-4 mr-10">
            <TypingText text={currentStatement} delay={30} />
          </p>
        </div>
      </div>
      <AnimatePresence>
        {showArrow && (
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: [0, -20, 0], // Creates a bounce effect
            }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
              duration: 1, // Adjust speed of bounce
              repeat: Infinity, // Infinite loop
              repeatType: "reverse", // Makes it go up and down smoothly
              ease: "easeInOut",
            }}
          >
            <button className="hover:cursor-pointer" onClick={handleScroll}>
              <FaLeaf className="flex justify-center rotate-[110deg] mx-auto items-center text-4xl text-[#3d5640]" />
              <p className="text-white text-xs pt-2">click me!</p>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
