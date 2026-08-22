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
  { value: "200+", label: "LeetCode Problems" },
  { value: "8.0", label: "CGPA / 10" },
  { value: "2023–2027", label: "B.Tech CSE" },
  { value: "8+", label: "Full-Stack & AI/ML Projects" },
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
    title: "GrowEasy AI CSV CRM",
    blurb: "AI-powered CSV-to-CRM workflow",
    description:
      "A full-stack workflow that turns raw CSV exports into structured CRM records using AI-assisted schema mapping, validation and a typed backend integration layer built for scalable data handling.",
    stack: ["Next.js", "TypeScript", "Express.js", "Gemini AI", "Docker"],
    features: [
      "CSV parsing and intelligent schema mapping",
      "Validation rules with clear error reporting",
      "REST API integration between frontend and backend",
      "Containerised full-stack architecture",
    ],
    github: "https://github.com/Khushali-Alt/Groweasy-csv-CRM",
  },
  {
    title: "Real-Time AQI Project",
    blurb: "Live environmental data dashboard",
    description:
      "Fetches live Air Quality Index and weather data from public APIs and presents it in a readable real-time interface, handling asynchronous requests and JSON parsing end to end.",
    stack: ["JavaScript", "REST APIs", "JSON", "Async Data"],
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
      "A webcam-based face detection application built with Python and OpenCV, applying Haar Cascade classifiers to demonstrate practical computer vision concepts in real time.",
    stack: ["Python", "OpenCV", "Haar Cascade", "Computer Vision"],
    features: [
      "Real-time webcam face detection",
      "Haar Cascade classifier implementation",
      "Frame processing pipeline",
    ],
    github: "https://github.com/Khushali-Alt/Face-Recognition-Python",
  },
  {
    title: "Soil Fertility Predictor",
    blurb: "End-to-end machine learning pipeline",
    description:
      "Predicts soil fertility from measured parameters using a Random Forest model served through a Flask app — covering data preprocessing, model training, evaluation and prediction.",
    stack: ["Python", "Flask", "Scikit-learn", "Random Forest"],
    features: [
      "Data preprocessing and feature preparation",
      "Random Forest model training",
      "Performance validation and evaluation",
      "Flask interface for predictions",
    ],
    github: "https://github.com/Khushali-Alt/Soil_Fertility_Predictor_ML_v3",
  },
  {
    title: "Student Management System",
    blurb: "CRUD application and data modelling",
    description:
      "A student records application covering create, read, update and delete operations with a structured approach to database design and application architecture.",
    stack: ["CRUD", "Database Design", "Backend Logic"],
    features: [
      "Complete CRUD operations on student records",
      "Structured data handling",
      "Clear application architecture",
    ],
    github: "https://github.com/Khushali-Alt/Student-management-system",
  },
];

export const MINI_PROJECTS = [
  {
    title: "Automate WhatsApp Messages",
    description: "Python automation for programmatic messaging workflows.",
    github: "https://github.com/Khushali-Alt/automate-whatsapp-msg",
  },
  {
    title: "Python QR Code Generator",
    description: "A small Python utility that generates QR codes from input data.",
    github: "https://github.com/Khushali-Alt/Python-QR-Code-Generator",
  },
  {
    title: "Mini Projects",
    description: "A collection of smaller experiments and practical programming exercises.",
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
