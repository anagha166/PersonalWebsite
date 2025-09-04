export interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tools: string[];
  inspiration: string;
  challenges: string[];
  process: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

export const projectsData: ProjectData[] = [
  {
    id: "ascendtials",
    title: "ASCENDtials Website Redesign",
    description: "Website Redesign for local non-profit organization, ASCENDtials",
    longDescription: "A comprehensive website redesign for ASCENDtials, a local non-profit organization focused on empowering underserved communities. The project involved complete UI/UX overhaul, content restructuring, and implementation of modern web technologies to improve user engagement and accessibility.",
    tools: ["Figma", "WordPress", "HTML", "CSS", "JavaScript", "PHP"],
    inspiration: "The inspiration came from the organization's mission to uplift communities. I wanted to create a website that felt welcoming, trustworthy, and easy to navigate for people of all backgrounds and technical abilities.",
    challenges: [
      "Working with WordPress constraints while maintaining modern design standards",
      "Ensuring accessibility compliance for diverse user base",
      "Optimizing for mobile devices with limited resources",
      "Balancing aesthetic appeal with functional requirements"
    ],
    process: [
      "Conducted user research and stakeholder interviews",
      "Created wireframes and mockups in Figma",
      "Developed responsive design system",
      "Implemented custom WordPress theme",
      "Performed accessibility testing and optimization",
      "Conducted user testing and feedback integration"
    ],
    images: [
      "/src/assets/Projects/Ascendtials.png",
      "/src/assets/Projects/Ascendtials.png" // Add more process images here
    ],
    githubUrl: "https://github.com/anagha166/ascendtials-website",
    liveUrl: "https://ascendtials.org",
    category: "Website Development"
  },
  {
    id: "ds3",
    title: "UCSD Data Science Student Society",
    description: "Main website redesign for UCSD's Data Science Student Society",
    longDescription: "Complete redesign of the Data Science Student Society website at UCSD. This project focused on creating a modern, engaging platform for students to connect, learn about events, and access resources. The new design emphasizes community building and professional development opportunities.",
    tools: ["Figma", "React", "TypeScript", "TailwindCSS", "HTML", "CSS", "JavaScript"],
    inspiration: "Inspired by the vibrant data science community at UCSD and the need for better student engagement. I wanted to create a platform that would serve as a central hub for all data science activities and resources on campus.",
    challenges: [
      "Managing complex event scheduling and RSVP systems",
      "Integrating with existing university systems and databases",
      "Creating intuitive navigation for diverse content types",
      "Ensuring fast loading times with rich media content"
    ],
    process: [
      "Analyzed existing website and user feedback",
      "Designed new information architecture",
      "Created high-fidelity prototypes in Figma",
      "Developed React components with TypeScript",
      "Implemented responsive design with TailwindCSS",
      "Integrated with backend APIs and testing"
    ],
    images: [
      "/src/assets/Projects/DS3.png",
      "/src/assets/Projects/DS3.png" // Add more process images here
    ],
    githubUrl: "https://github.com/anagha166/ds3-website",
    liveUrl: "https://ds3.ucsd.edu",
    category: "Website Development"
  },
  {
    id: "consulting",
    title: "DS3 Consulting Website",
    description: "Consulting website redesign for UCSD's Data Science Student Society",
    longDescription: "A specialized consulting platform for the Data Science Student Society's consulting services. This project created a professional showcase for student consulting projects, client testimonials, and service offerings. The design emphasizes credibility and professional presentation.",
    tools: ["Figma", "React", "TypeScript", "TailwindCSS", "HTML", "CSS", "JavaScript"],
    inspiration: "The need to present student consulting work professionally to potential clients. I wanted to create a platform that would build trust and showcase the quality of work produced by the consulting team.",
    challenges: [
      "Creating a professional aesthetic that appeals to business clients",
      "Showcasing complex data science projects in an accessible way",
      "Building trust through testimonials and case studies",
      "Implementing secure client communication features"
    ],
    process: [
      "Researched professional consulting website best practices",
      "Designed client-focused user experience",
      "Created case study templates and layouts",
      "Developed interactive project showcases",
      "Implemented client testimonial system",
      "Added contact and inquiry management features"
    ],
    images: [
      "/src/assets/Projects/Consulting.png",
      "/src/assets/Projects/Consulting.png" // Add more process images here
    ],
    githubUrl: "https://github.com/anagha166/ds3-consulting",
    liveUrl: "https://consulting.ds3.ucsd.edu",
    category: "Website Development"
  },
  {
    id: "yipyap",
    title: "YipYap Chat App",
    description: "'YipYap' - Preliminary designs for a joint project to create a chat app designed for chatty people",
    longDescription: "YipYap is a conceptual chat application designed specifically for people who love to chat. The app features unique UI elements that encourage conversation, including animated typing indicators, conversation starters, and gamified chat features. This project focused on the initial design and user experience research.",
    tools: ["Figma", "User Research", "Prototyping"],
    inspiration: "The idea came from observing how some people naturally love to chat while others find it challenging to start conversations. I wanted to create an app that would make chatting more fun and engaging for everyone.",
    challenges: [
      "Designing for different communication styles and preferences",
      "Creating engaging UI elements that encourage conversation",
      "Balancing fun features with usability",
      "Researching chat app user behavior and preferences"
    ],
    process: [
      "Conducted user research on chat app preferences",
      "Created user personas and journey maps",
      "Designed unique chat interface concepts",
      "Developed interactive prototypes in Figma",
      "Tested with potential users and iterated",
      "Created design system and component library"
    ],
    images: [
      "/src/assets/Projects/Yipyap.png",
      "/src/assets/Projects/Yipyap.png" // Add more process images here
    ],
    githubUrl: "https://github.com/anagha166/yipyap-designs",
    category: "UI/UX Design"
  },
  {
    id: "magic-mirror",
    title: "Magic Mirror",
    description: "'Magic Mirror' for IEEE quarterly projects that compliments based on appearance",
    longDescription: "An interactive mirror that uses computer vision and AI to provide personalized compliments based on appearance. Built for IEEE quarterly projects, this device combines hardware, software, and AI to create an engaging user experience that boosts confidence and creates positive interactions.",
    tools: ["Python", "OpenCV", "ChatGPT API", "Raspberry Pi", "Laser Cutting", "Electronics"],
    inspiration: "The idea came from wanting to create technology that makes people feel good about themselves. In a world where technology often focuses on productivity, I wanted to build something that purely brings joy and positivity.",
    challenges: [
      "Integrating computer vision with AI API calls in real-time",
      "Designing and building the physical mirror housing",
      "Ensuring accurate face detection in various lighting conditions",
      "Creating appropriate and diverse compliment generation"
    ],
    process: [
      "Researched computer vision and face detection techniques",
      "Designed mirror housing using CAD software",
      "Laser cut and assembled the physical components",
      "Developed Python application with OpenCV",
      "Integrated ChatGPT API for compliment generation",
      "Tested and refined the user experience"
    ],
    images: [
      "/src/assets/Projects/Mirror.png",
      "/src/assets/Projects/Mirror.png" // Add more process images here
    ],
    category: "Hardware"
  },
  {
    id: "self-playing-guitar",
    title: "Self-Playing Guitar",
    description: "Self playing guitar made with my team for IEEE quarterly projects, using arduinos and a 3D printed stand",
    longDescription: "A collaborative project that created an automated guitar playing system using Arduino microcontrollers and 3D printed components. The system can play pre-programmed songs and respond to user input, demonstrating the intersection of music, engineering, and programming.",
    tools: ["Arduino", "3D Printing", "CAD", "C++", "Laser Cutting", "Electronics"],
    inspiration: "The challenge of combining mechanical engineering with programming to create something that produces music. I was inspired by the idea of making music accessible through technology and the collaborative nature of the project.",
    challenges: [
      "Coordinating mechanical movements with precise timing",
      "Designing 3D printed components that could withstand repeated use",
      "Programming complex sequences for different songs",
      "Integrating multiple Arduino systems for coordinated control"
    ],
    process: [
      "Researched guitar playing mechanics and finger positioning",
      "Designed 3D printed finger actuators and mounting system",
      "Developed Arduino code for motor control and sequencing",
      "Created CAD models for custom components",
      "Assembled and tested the complete system",
      "Programmed multiple songs and user interaction features"
    ],
    images: [
      "/src/assets/Projects/Mirror.png", // Placeholder - add actual guitar images
      "/src/assets/Projects/Mirror.png" // Add more process images here
    ],
    category: "Hardware"
  }
];

export default projectsData;
