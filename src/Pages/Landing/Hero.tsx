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
    <div className="bg-[#3D4B3F] font-mono">
      <div className="min-h-screen w-screen flex flex-col md:flex-row gap-[0.1vw] justify-center items-center px-4 md:px-0">
        <Icon />
        {/* Text with improved size and spacing */}
        <div className="flex-1 text-white text-center md:text-left hero-text-shadow flex flex-col items-center md:items-start mt-4 md:pr-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5vw]">Hi! I'm Anagha Kamath</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.2vw] w-full md:w-[40vw] pt-4 md:mr-10">
            <TypingText text={currentStatement} delay={30} />
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
