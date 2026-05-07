import { motion } from "framer-motion";
import { useState } from "react";
import ContactMe from '../../Components/ContactMe'
import wave1 from "/src/assets/AboutMe/Wave1.png";
import wave2 from "/src/assets/AboutMe/Wave2.png";

const AboutMe = () => {
  const [img, setImg] = useState(wave1);
  const [activeExperience, setActiveExperience] = useState(-1);

  const timeline = [
    {
      period: "May 2026 - Present",
      role: "Design Fellow",
      company: "ChartR",
      location: "New York, NY",
      points: [
        "crafting intuitive UX and marketing design for clinician-led, HIPAA-compliant AI products, translating complex healthcare and policy systems into clear, user-centered solutions that improve transparency, accountability, and patient outcomes.",
      ],
    },
    {
      period: "Jan 2026 - Present",
      role: "VR Research Assistant",
      company: "Systems Neuroscience Lab - UCSD Cognitive Science Department",
      location: "San Diego, CA",
      points: [
        "Designed and prototyped immersive VR environments to study how spatial design, visual hierarchy, and environmental cues influence human navigation and decision-making.",
      ],
    },
    {
      period: "Oct 2024 - Present",
      role: "UI Designer + Software Developer",
      company: "DS3 Software Team - UC San Diego",
      location: "San Diego, CA",
      points: [
        "Designed and developed a component-based web platform using React and TailwindCSS, improving accessibility, scalability, and maintainability for 500+ users.",
      ],
    },
    {
      period: "Aug 2024 - Oct 2024",
      role: "UX + Web Designer Intern",
      company: "ASCENDtials",
      location: "San Diego, CA",
      points: [
        "Redesigned 95% of the organization's website by identifying usability issues and restructuring navigation, layout, and content hierarchy to improve clarity and accessibility.",
      ],
    },
    {
      period: "June 2025 - Present",
      role: "Marketing Director",
      company: "Data Science Student Society (DS3) - UC San Diego",
      location: "San Diego, CA",
      points: [
        "Led end-to-end design of digital campaigns by translating event goals into clear visuals, increasing total following by 40% and doubling average engagement within one quarter.",
      ],
    },
  ];

  return (
    <div className="flex font-mono flex-col items-center min-h-screen px-4 md:px-8 lg:px-16 py-10 md:py-14 text-white">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          <motion.div
            className="relative w-[62vw] h-[62vw] max-w-[360px] max-h-[360px] md:w-[40vw] md:h-[40vw] lg:w-[25vw] lg:h-[25vw] flex justify-center items-center"
            onHoverStart={() => setImg(wave1)}
            onHoverEnd={() => setImg(wave2)}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <img
              src={img}
              alt="Anagha portrait illustration"
              className="w-full h-full object-contain z-10"
            />
            <div className="absolute top-7 border-4 rounded-full w-[90%] h-[90%] border-white/40 transition-shadow hover:shadow-2xl z-0" />
          </motion.div>

          <div className="text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.22em] text-white/70">
              About
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl">
              Anagha Kamath
            </h1>
            <p className="mt-5 text-sm md:text-base text-white/85 max-w-2xl leading-relaxed">
              I am a Math-CS student with a minor in Cognitive Science, building
              thoughtful products at the intersection of engineering, design,
              and human behavior.
            </p>
          </div>
        </div>

        <section className="mt-16 md:mt-20 pb-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl md:text-3xl">My Journey</h2>
          </div>
          <div className="mt-8 border-l border-white/20 pl-5 md:pl-8">
            {timeline.map((entry, index) => (
              <motion.div
                key={`${entry.period}-${entry.role}`}
                className="relative pb-4 md:pb-5"
                onHoverStart={() => setActiveExperience(index)}
                onHoverEnd={() => setActiveExperience(-1)}
                layout
                transition={{ type: "spring", stiffness: 260, damping: 28, mass: 0.7 }}
              >
                <div
                  className={`absolute -left-[1.625rem] md:-left-[2.375rem] top-[1.18rem] h-3 w-3 rounded-full border border-white/70 ${
                    activeExperience === index ? "bg-white" : "bg-transparent"
                  }`}
                />
                <motion.div
                  layout
                  className={`w-full text-left rounded-xl border px-4 py-4 md:px-5 md:py-4 transition-colors ${
                    activeExperience === index
                      ? "border-white/35 bg-white/[0.08]"
                      : "border-white/15 bg-white/[0.03]"
                  }`}
                  animate={{ y: activeExperience === index ? -2 : 0 }}
                  transition={{ type: "spring", stiffness: 280, damping: 24 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] md:text-xs uppercase tracking-[0.16em] text-white/60">
                        {entry.period}
                      </p>
                      <h3 className="mt-1 text-base md:text-lg">{entry.role}</h3>
                      <p className="mt-1 text-sm text-white/75">{entry.company}</p>
                      <p className="mt-1 text-[11px] md:text-xs uppercase tracking-[0.14em] text-white/55">
                        {entry.location}
                      </p>
                      <p className="mt-3 text-sm md:text-[15px] text-white/90 leading-relaxed">
                        {entry.points[0]}
                      </p>
                    </div>
                    <span className="text-lg leading-none text-white/75 pt-1">
                      {activeExperience === index ? "●" : "○"}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>
        <ContactMe />
      </div>
    </div>
  );
};

export default AboutMe;
