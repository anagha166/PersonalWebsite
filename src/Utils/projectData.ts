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
    id: "ds3",
    title: "UCSD Data Science Student Society",
    description: "Main website redesign for UCSD's Data Science Student Society",
    longDescription: "Complete redesign of the Data Science Student Society website at UCSD. This project focused on creating an inspiring, engaging platform for students to connect, learn about events, and access resources. The new design emphasizes community building and professional development opportunities.",
    tools: ["Figma", "React", "TypeScript", "TailwindCSS", "HTML", "CSS", "JavaScript"],
    inspiration: "Inspired by the vibrant data science community at UCSD and the need for better student engagement. Our goal was to create a platform that would serve as a central hub for all data science activities and resources on campus, with information displayed in a more engaging and legible manner than before.",
    challenges: [
      "Understanding how to use React with no prior experience in web development",
      "Creating intuitive navigation for diverse users ranging from students, to faculty, to possible company recruiters",
      "Navigating organization of content and resources",
      "Ensuring fast loading times with rich media content and photo galleries"
    ],
    process: [
      "Analyzed existing website and user feedback",
      "Created high-fidelity prototypes in Figma, with each member of the UX team creating a separate version, and then combining the best elements of each",
      "Developed React components with TypeScript",
      "Brainstormed and implemented new features, such as a dynamic calendar, alumni testimonials, and photo galleries"
    ],
    images: [
      "/src/assets/Projects/DS3.png",
      "/src/assets/Projects/DS3.png"
    ],
    liveUrl: "https://ds3.ucsd.edu",
    category: "Website Development"
  },
  {
    id: "consulting",
    title: "DS3 Consulting Website",
    description: "Consulting website redesign for UCSD's Data Science Student Society",
    longDescription: "A specialized consulting platform for the Data Science Student Society's consulting services. This project created a professional showcase for student consulting projects, client testimonials, and service offerings. The design emphasizes credibility and professional presentation.",
    tools: ["Figma", "React", "TypeScript", "TailwindCSS", "HTML", "CSS", "JavaScript"],
    inspiration: "The need to present student consulting work professionally to potential clients.",
    challenges: [
      "Creating a professional aesthetic that appeals to business clients",
      "Showcasing complex data science projects in an accessible way"
    ],
    process: [
      "Designed client-focused user experience",
      "Created case study templates and layouts",
      "Developed interactive project showcases"
    ],
    images: [
      "/src/assets/Projects/Consulting.png",
      "/src/assets/Projects/Consulting.png"
    ],
    liveUrl: "https://consulting.ds3.ucsd.edu",
    category: "Website Development"
  },
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
      "Created wireframes and mockups in Figma",
      "Performed accessibility testing and optimization",
      "Conducted user testing and feedback integration"
    ],
    images: [
      "/src/assets/Projects/Ascendtials.png",
      "/src/assets/Projects/Ascendtials.png"
    ],
    githubUrl: "https://github.com/anagha166/ascendtials-website",
    liveUrl: "https://ascendtials.org",
    category: "Website Development"
  },
  {
    id: "WIC",
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
      "Created wireframes and mockups in Figma",
      "Performed accessibility testing and optimization",
      "Conducted user testing and feedback integration"
    ],
    images: [
      "/src/assets/Projects/Ascendtials.png",
      "/src/assets/Projects/Ascendtials.png"
    ],
    githubUrl: "https://github.com/anagha166/ascendtials-website",
    liveUrl: "https://ascendtials.org",
    category: "Website Development"
  },
  {
    id: "yipyap",
    title: "YipYap Chat App",
    description: "'YipYap' - Preliminary designs for a joint project to create a chat app designed for chatty people. My role was to lead the initial design and user experience research.",
    longDescription: "YipYap is a conceptual chat application designed specifically for people who love to chat. The app features unique UI elements that encourage conversation, including animated typing indicators, conversation starters, and gamified chat features. This project focused on the initial design and user experience research.",
    tools: ["Figma", "User Research", "Prototyping"],
    inspiration: "The idea came from my friend and I discussing the need for a chat app designed to keep people engaged in conversation, or to put it informally, to let them yap",
    challenges: [
      "Brainstorming engaging UI elements that encourage conversation",
      "Balancing fun features with usability",
      "Researching chat app user behavior and preferences"
    ],
    process: [
      "Conducted user research on chat app preferences",
      "Developed interactive prototypes in Figma",
      "Tested with potential users and iterated"
    ],
    images: [
      "/src/assets/Projects/Yipyap.png",
      "/src/assets/Projects/Yipyap.png"
    ],
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
      "Integrated ChatGPT API for compliment generation",
      "Tested and refined the user experience"
    ],
    images: [
      "/src/assets/Projects/Mirror.png",
      "/src/assets/Projects/Mirror.png"
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
      "Assembled and tested the complete system"
    ],
    images: [
      "/src/assets/Projects/Mirror.png",
      "/src/assets/Projects/Mirror.png"
    ],
    category: "Hardware"
  },
  {
    id: "task-tracker-app",
    title: "TaskTracker Mobile App",
    description: "A productivity mobile app for task management with gamification elements",
    longDescription: "TaskTracker is a mobile application designed to help users manage their daily tasks through an intuitive interface combined with gamification elements. The app features task categorization, progress tracking, achievement badges, and social sharing capabilities to make productivity fun and engaging.",
    tools: ["React Native", "JavaScript", "Firebase", "Figma", "Expo"],
    inspiration: "I wanted to create a task management app that would actually motivate people to complete their tasks by making productivity feel like a game. The inspiration came from seeing how many people struggle with traditional to-do apps that feel boring and uninspiring.",
    challenges: [
      "Designing an intuitive mobile interface for task management",
      "Implementing gamification features without overwhelming the core functionality",
      "Creating a smooth user experience across different screen sizes",
      "Integrating real-time data synchronization with Firebase"
    ],
    process: [
      "Conducted user research on task management app preferences",
      "Created wireframes and prototypes in Figma",
      "Developed the app using React Native and Expo",
      "Implemented Firebase for backend services and data storage",
      "Conducted user testing and iterated based on feedback"
    ],
    images: [
      "/src/assets/Projects/TaskTracker.png",
      "/src/assets/Projects/TaskTracker.png"
    ],
    githubUrl: "https://github.com/anagha166/task-tracker-app",
    category: "App Development"
  }
];

export default projectsData;