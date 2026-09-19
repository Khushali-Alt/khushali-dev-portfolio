export const LINKS = {
  github: "https://github.com/Khushali-Alt",
  linkedin: "https://www.linkedin.com/in/khushali-tiwari-6b8477284",
  leetcode: "https://leetcode.com/u/Khushali_22/",
  x: "https://x.com/Khushali_ktgb24",
  email: "ms.ktgwork25@gmail.com",
};

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const STATS = [
  { value: "110+", label: "LeetCode Problems" },
  { value: "8.0", label: "CGPA / 10" },
  { value: "2023–2027", label: "B.TECH CSE  . QUANTUM UNIVERSITY" },
  { value: "8+", label: "TECH PROJECTS\nFULL-STACK & AI/ML " },
];

export const SKILL_GROUPS = [
  { title: "Programming", items: ["Java", "Python", "JavaScript", "TypeScript"] },
  {
    title: "Frontend",
    items: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "React", "Next.js"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JSON/XML", "System Integration", "Flask"],
  },
  { title: "Database", items: ["MongoDB", "SQL"] },
  {
    title: "AI / ML",
    items: ["Scikit-learn", "Random Forest", "ML Pipelines", "Generative AI"],
  },
  {
    title: "Computer Science",
    items: ["Data Structures & Algorithms", "Object-Oriented Programming", "Problem Solving"],
  },
  {
    title: "Tools & Environment",
    items: ["Git", "GitHub", "Postman", "Linux", "VS Code", "Docker"],
  },
];

export type Project = {
  title: string;
  blurb: string;
  description: string;
  stack: string[];
  features: string[];
  github: string;
};

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Insider Jobs",
    blurb: "AI-powered MERN job portal",
    description:
      "A full-stack MERN job portal connecting recruiters and job seekers with intelligent job search, Gemini AI assistance, Clerk authentication, resume uploads and real-time MongoDB job data.",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "Gemini AI", "Clerk"],
    features: [
      "Intelligent job search with Gemini AI assistance",
      "Clerk authentication for recruiters and job seekers",
      "Resume uploads and application management",
      "Real-time job data backed by MongoDB",
    ],
    github: "https://github.com/Khushali-Alt/Insider-Jobs",
  },
  {
    title: "Vibe Code Editor",
    blurb: "AI-powered browser IDE",
    description:
      "An AI-powered browser IDE that lets developers create, edit, run and preview projects directly in the browser — with Monaco Editor, WebContainers, AI code assistance, NextAuth, Prisma and MongoDB.",
    stack: ["TypeScript", "Monaco Editor", "WebContainers", "NextAuth", "Prisma", "MongoDB"],
    features: [
      "Create, edit, run and preview projects in the browser",
      "Monaco Editor with AI code assistance",
      "WebContainers for in-browser project execution",
      "NextAuth authentication with Prisma and MongoDB",
    ],
    github: "https://github.com/Khushali-Alt/Vibe_Code_Editor",
  },
  {
    title: "GrowEasy AI CSV CRM",
    blurb: "AI-powered CSV-to-CRM importer",
    description:
      "A full-stack AI-powered CSV importer that transforms diverse CSV data into a standardized CRM schema using Gemini — with intelligent mapping, validation, batching, retries and Dockerized deployment.",
    stack: ["Next.js", "TypeScript", "Express.js", "Gemini AI", "Docker"],
    features: [
      "CSV parsing and intelligent schema mapping",
      "Validation rules with clear error reporting",
      "Batching and retries for reliable imports",
      "Containerised full-stack deployment",
    ],
    github: "https://github.com/Khushali-Alt/Groweasy-csv-CRM",
  },
  {
    title: "Soil Fertility Predictor",
    blurb: "End-to-end machine learning pipeline",
    description:
      "An ML-powered web app that instantly predicts soil fertility from 14 measured parameters and gives smart fertilizer recommendations — with a live gauge, PDF report and test cases, deployed on Render.",
    stack: ["Python", "Flask", "Scikit-learn", "Random Forest"],
    features: [
      "Fertility prediction from 14 soil parameters",
      "Smart fertilizer recommendations",
      "Live gauge UI with PDF report export",
      "Deployed on Render with test cases",
    ],
    github: "https://github.com/Khushali-Alt/Soil_Fertility_Predictor_ML_v3",
  },
  {
    title: "Full Stack Authentication System",
    blurb: "Secure auth with Next.js & MongoDB",
    description:
      "A full-stack authentication system built with Next.js, TypeScript, MongoDB and Mongoose — covering secure signup, signin, sessions and protected routes.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Mongoose"],
    features: [
      "Secure signup and signin flows",
      "Session management and protected routes",
      "Typed data layer with Mongoose",
    ],
    github: "https://github.com/Khushali-Alt/Full_Stack_Authentication_System",
  },
  {
    title: "Real-Time AQI Project",
    blurb: "Live environmental data dashboard",
    description:
      "Fetches live Air Quality Index and weather data from public APIs and presents it in a readable real-time interface, handling asynchronous requests and JSON parsing end to end.",
    stack: ["Python", "REST APIs", "JSON", "Async Data"],
    features: [
      "Real-time AQI and weather API integration",
      "Asynchronous data fetching and error handling",
      "JSON data processing and formatting",
      "Clear real-time information presentation",
    ],
    github: "https://github.com/Khushali-Alt/Real-Time-AQI-Project",
  },
  {
    title: "Face Recognition Python",
    blurb: "Computer vision with OpenCV",
    description:
      "A webcam-based face detection application built with Python and OpenCV, applying Haar Cascade classifiers to identify faces with bounding boxes in real time.",
    stack: ["Python", "OpenCV", "Haar Cascade", "Computer Vision"],
    features: [
      "Real-time webcam face detection",
      "Haar Cascade classifier implementation",
      "Frame processing pipeline",
    ],
    github: "https://github.com/Khushali-Alt/Face-Recognition-Python",
  },
  {
    title: "Course Selling Application",
    blurb: "Full-stack course platform",
    description:
      "A full-stack course selling application with user and admin workflows — built with Node.js, Express and MongoDB, featuring authentication, course management and purchase functionality.",
    stack: ["Node.js", "Express.js", "MongoDB", "Authentication"],
    features: [
      "Separate user and admin workflows",
      "Course management and purchase flow",
      "Authentication and session handling",
    ],
    github: "https://github.com/Khushali-Alt/Course-Selling-Application",
  },
];

export const MINI_PROJECTS = [
  {
    title: "Docker Practice",
    description: "Hands-on Docker practice containerizing full-stack React and Node.js applications.",
    github: "https://github.com/Khushali-Alt/Docker",
  },
  {
    title: "Automate WhatsApp Messages",
    description: "Python automation for scheduled, programmatic messaging with PyWhatKit.",
    github: "https://github.com/Khushali-Alt/automate-whatsapp-msg",
  },
  {
    title: "Python QR Code Generator",
    description: "A small Python utility that generates QR codes from input data.",
    github: "https://github.com/Khushali-Alt/Python-QR-Code-Generator",
  },
  {
    title: "Mini Projects",
    description: "A collection of practical mini projects covering JavaScript, DOM, APIs and LocalStorage.",
    github: "https://github.com/Khushali-Alt/Mini_Projects",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Graph-E-Thon 3.0",
    meta: "Graphic Era University",
    description: "Participated in Graph-E-Thon 3.0, a hackathon hosted at Graphic Era University.",
  },
  {
    title: "Research Publication",
    meta: "Autonomous Vehicles and Ethical AI",
    description:
      "Published a research paper exploring autonomous vehicles and the ethical considerations of AI systems.",
  },
  {
    title: "Aspire Leadership Program 2025",
    meta: "Aspire Institute · Alumni",
    description:
      "Selected for the Aspire Leadership Program 2025 by Aspire Institute, and now an alumni of the program.",
  },
  {
    title: "National Entrepreneurship Challenge 2025",
    meta: "E-Cell, IIT Bombay · Team Rank 154",
    description: "Participated in the NEC 2025 Advanced Track organised by E-Cell, IIT Bombay.",
  },
  {
    title: "AI/ML Workshop",
    meta: "IIT Bombay · 20–21 January 2024",
    description: "Attended a two-day offline AI/ML workshop at IIT Bombay.",
  },
  {
    title: "Build with AI — Generative AI Study Jams",
    meta: "Google DSC, Quantum University · May 2024",
    description:
      "Completed the Build with AI Generative AI Study Jams organised by Google DSC at Quantum University.",
  },
];
