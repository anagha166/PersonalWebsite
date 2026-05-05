import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, useState } from "react";
import ContactMe from '../../Components/ContactMe'
import wave1 from "/src/assets/AboutMe/Wave1.png";
import wave2 from "/src/assets/AboutMe/Wave2.png";

const AboutMe = () => {
  const [img, setImg] = useState(wave1);
  const focusAreas = [
    {
      title: "Product + Design",
      skills: [
        "UI/UX Design",
        "Interaction Design",
        "Design Systems",
        "Prototyping (Figma)",
        "Human-Centered Design",
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        "React",
        "JavaScript",
        "HTML/CSS",
        "TailwindCSS",
        "Component-Based Design",
      ],
    },
    {
      title: "Design + Communication",
      skills: [
        "Visual Design",
        "Digital Campaigns",
        "Content Design",
        "Storytelling",
        "Data-Informed Iteration",
      ],
    },
    {
      title: "Systems Thinking",
      skills: [
        "Cognitive Science",
        "User Behavior",
        "Information Architecture",
        "Complex Systems",
        "Problem Framing",
      ],
    },
  ];

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

  const focusSectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: focusSectionRef,
    offset: ["start end", "end start"],
  });

  const FocusStackCard = ({
    area,
    index,
  }: {
    area: (typeof focusAreas)[number];
    index: number;
  }) => {
    const start = 0.16 * index;
    const y = useTransform(
      scrollYProgress as MotionValue<number>,
      [start, start + 0.18],
      [90, 0],
    );
    const opacity = useTransform(
      scrollYProgress as MotionValue<number>,
      [start * 0.92, start + 0.16],
      [0.6, 1],
    );
    const scale = useTransform(
      scrollYProgress as MotionValue<number>,
      [start, start + 0.18],
      [0.97, 1],
    );

    return (
      <motion.div
        className="sticky top-24 rounded-2xl border border-white/20 bg-[#748877]/95 backdrop-blur-sm p-5 md:p-6 shadow-[0_12px_30px_rgba(0,0,0,0.2)]"
        style={{ y, opacity, scale, zIndex: 10 + index }}
      >
        <p className="text-lg md:text-xl">{area.title}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {area.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs md:text-sm border border-white/30 rounded-full px-3 py-1 text-white/90"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    );
  };

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
            <div className="absolute top-7 border-4 rounded-full w-[90%] h-[90%] border-[#00000] transition-shadow hover:shadow-2xl z-0" />
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

        <section ref={focusSectionRef} className="mt-16 md:mt-20">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl md:text-3xl">Focus & Expertise</h2>
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/60">
              Skill Areas
            </p>
          </div>
          <div className="mt-7 pb-24 md:pb-32">
            {focusAreas.map((area, index) => (
              <div
                key={area.title}
                className={index === 0 ? "" : "-mt-10 md:-mt-14"}
              >
                <FocusStackCard area={area} index={index} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 md:mt-20 pb-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl md:text-3xl">Work Experience Timeline</h2>
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/60">
              Journey
            </p>
          </div>
          <div className="mt-8 border-l border-white/25 pl-6 md:pl-8 space-y-8">
            {timeline.map((entry) => (
              <div key={`${entry.period}-${entry.role}`} className="relative">
                <div className="absolute -left-[1.95rem] md:-left-[2.45rem] top-1 w-3 h-3 rounded-full bg-white/90" />
                <p className="text-xs md:text-sm uppercase tracking-[0.18em] text-white/65">
                  {entry.period}
                </p>
                <h3 className="mt-2 text-lg md:text-xl">{entry.role}</h3>
                <p className="mt-1 text-sm md:text-base text-white/80">
                  {entry.company}
                </p>
                <p className="mt-1 text-xs md:text-sm uppercase tracking-[0.12em] text-white/65">
                  {entry.location}
                </p>
                <ul className="mt-3 space-y-2 text-sm md:text-base text-white/90">
                  {entry.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <ContactMe />
      </div>
    </div>
  );
};

export default AboutMe;
