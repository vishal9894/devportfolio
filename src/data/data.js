// Image imports
import ubs from "../assets/Screenshot 2026-01-06 193832.png";
import chat from "../assets/Screenshot 2026-01-06 194052.png";
import videocall from "../assets/Screenshot 2026-01-06 193117.png";
import khansirlms from "../assets/khansirlms.png";
import khansirlmsorg from "../assets/khansirlmsorg.png";
import jq from "../assets/Screenshot 2026-01-06 193912.png";
import bgrumober from "../assets/Screenshot 2026-01-06 194004.png";
import eyecare from "../assets/project6.png";
import enventry from "../assets/project1.jpg";
import about from "../assets/about.jpg";
import logo from "../assets/logo.png";
import porfile from "../assets/image.png";

// Icon imports
import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaTools,
  FaRegPaperPlane,
  FaBriefcase,
  FaGraduationCap,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
  FaArrowRight,
  FaExternalLinkAlt,
  FaPaperPlane,
  FaUserTie,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiPrisma,
  SiDocker,
  SiNetlify,
  SiVercel,
  SiRender,
  SiJsonwebtokens,
  SiRedux,
  SiGraphql,
  SiSocketdotio,
  SiTypeorm,
  SiReact,
} from "react-icons/si";
import { RiComputerLine, RiServerLine } from "react-icons/ri";
import { TbApi } from "react-icons/tb";

// ==================== PROFILE ====================
export const profile = {
  name: "Vishal Kumar",
  role: "Full Stack Developer",
  email: "vishalkumar662002@gmail.com",
  phone: "+91 7091804766",
  location: "Rajivnagar, Patna, Bihar, India",
  degree: "Bachelor of Technology",
  experience: "2+ Years",
  about:
    "Full Stack Developer with expertise in MERN & Nest.js stacks, proficient in building scalable web applications. Skilled in backend development with Node.js, Nest.js and Express, and frontend development using React & Next.js. Experienced in database management with PostgreSQL, MongoDB and API integrations. Passionate about delivering efficient and user-friendly solutions.",
  heroDescription:
    "Building scalable, high-performance web applications with modern technologies. Passionate about creating elegant solutions to complex problems.",
  typedSequences: [
    "Full Stack Developer",
    1000,
    "MERN Stack Developer",
    1000,
    "Nest.js Expert",
    1000,
    "Backend Architect",
    1000,
  ],
  images: {
    profile: porfile,
    about: about,
    logo: logo,
  },
};

// ==================== SOCIAL LINKS ====================
export const socialLinks = [
  { name: "GitHub", icon: FaGithub, url: "#", hoverColor: "hover:bg-indigo-500" },
  { name: "LinkedIn", icon: FaLinkedin, url: "#", hoverColor: "hover:bg-blue-500" },
  { name: "Twitter", icon: FaTwitter, url: "#", hoverColor: "hover:bg-sky-500" },
  { name: "Instagram", icon: FaInstagram, url: "#", hoverColor: "hover:bg-pink-500" },
];

// ==================== NAVIGATION ====================
export const navItems = ["home", "about", "quality", "skill", "project", "contact"];

// ==================== PROJECTS ====================
export const projects = [
  {
    id: 8,
    title: "KhanSir LMS - Admin Dashboard",
    description:
      "Enterprise-grade Learning Management System with role-based access control, course management, student analytics, and real-time progress tracking. Built for scalability with 20k+ concurrent users.",
    image: khansirlms,
    github: "https://github.com/yourusername/khansir-lms",
    liveDemo: "https://khansirlms.vercel.app",
    tags: ["React 18", "Nest.js", "TypeScript", "Socket.io", "JWT", "Redis", "PostgreSQL"],
    category: "fullstack",
    featured: true,
  },
  {
    id: 9,
    title: "KhanSir LMS - Organization Portal",
    description:
      "Multi-tenant organization management system with institute onboarding, batch management, fee tracking, exam scheduling, and parent-teacher communication portal.",
    image: khansirlmsorg,
    github: "https://github.com/yourusername/khansir-org",
    liveDemo: "https://khansirlmsorg.vercel.app",
    tags: ["Next.js 14", "Nest.js", "Prisma", "Tailwind", "WebSocket", "Docker"],
    category: "fullstack",
    featured: true,
  },
  {
    id: 1,
    title: "Video Call App",
    description:
      "Real-time video conferencing application with WebRTC technology. Features include screen sharing, chat, and recording capabilities.",
    image: videocall,
    github: "https://github.com/yourusername/video-call-app",
    liveDemo: "https://callby.netlify.app/",
    tags: ["React", "WebRTC", "Node.js", "Socket.io"],
    category: "fullstack",
    featured: false,
  },
  {
    id: 2,
    title: "Chat Application",
    description:
      "Real-time chat application with user authentication, group chats, file sharing, and message history.",
    image: chat,
    github: "https://github.com/yourusername/chat-app",
    liveDemo: "https://chat-app-demo.netlify.app",
    tags: ["React", "Socket.io", "MongoDB", "Express"],
    category: "fullstack",
    featured: false,
  },
  {
    id: 3,
    title: "E-commerce Store",
    description:
      "Full-featured e-commerce platform with payment integration, product reviews, and admin dashboard.",
    image: ubs,
    github: "https://github.com/yourusername/ecommerce-store",
    liveDemo: "https://ecommerce-demo.netlify.app",
    tags: ["React", "Redux", "Node.js", "Stripe"],
    category: "fullstack",
    featured: false,
  },
  {
    id: 4,
    title: "Task Management System",
    description:
      "Project management tool with drag & drop functionality, team collaboration, and progress tracking.",
    image: jq,
    github: "https://github.com/yourusername/task-management",
    liveDemo: "https://www.jetquin.com/",
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
    category: "backend",
    featured: false,
  },
  {
    id: 5,
    title: "Blog Platform",
    description:
      "Content management system for blogging with markdown support, SEO optimization, and analytics.",
    image: bgrumober,
    github: "https://github.com/yourusername/blog-platform",
    liveDemo: "https://bg-remover-vishalnew.netlify.app/",
    tags: ["Next.js", "Markdown", "Tailwind CSS", "MongoDB"],
    category: "frontend",
    featured: false,
  },
  {
    id: 6,
    title: "Eye Care App",
    description:
      "Healthcare application for eye care management with appointment scheduling and patient records.",
    image: eyecare,
    github: "https://github.com/yourusername/eyecare-app",
    liveDemo: "https://eyecare-demo.netlify.app",
    tags: ["React", "Healthcare", "Node.js", "MongoDB"],
    category: "frontend",
    featured: false,
  },
  {
    id: 7,
    title: "Inventory Management",
    description:
      "Business inventory tracking and management system with barcode scanning and reporting.",
    image: enventry,
    github: "https://github.com/yourusername/inventory-management",
    liveDemo: "https://inventory-demo.netlify.app",
    tags: ["React", "Node.js", "MySQL", "Express"],
    category: "backend",
    featured: false,
  },
];

// ==================== PROJECT CATEGORIES ====================
export const categories = [
  { id: "all", name: "All Projects", icon: FaCode },
  { id: "frontend", name: "Frontend", icon: FaLaptopCode },
  { id: "backend", name: "Backend", icon: RiServerLine },
  { id: "fullstack", name: "Full Stack", icon: FaDatabase },
];

// ==================== SKILLS ====================
export const skillsData = {
  frontend: [
    { skill: "React.js", percentage: 90, icon: SiReact, color: "indigo" },
    { skill: "Next.js", percentage: 85, icon: SiNextdotjs, color: "indigo" },
    { skill: "JavaScript", percentage: 85, icon: FaJs, color: "indigo" },
    { skill: "TypeScript", percentage: 85, icon: SiTypescript, color: "indigo" },
    { skill: "HTML5", percentage: 95, icon: FaHtml5, color: "indigo" },
    { skill: "CSS3", percentage: 95, icon: FaCss3Alt, color: "indigo" },
    {
      skill: "Tailwind CSS",
      percentage: 88,
      icon: SiTailwindcss,
      color: "indigo",
    },
  ],
  backend: [
    { skill: "Nest.js", percentage: 85, icon: SiNestjs, color: "cyan" },
    { skill: "Node.js", percentage: 85, icon: FaNodeJs, color: "cyan" },
    { skill: "Express.js", percentage: 80, icon: SiExpress, color: "cyan" },
    { skill: "REST APIs", percentage: 90, icon: TbApi, color: "cyan" },
    { skill: "JWT", percentage: 75, icon: SiJsonwebtokens, color: "cyan" },
    {
      skill: "WebSocket",
      percentage: 75,
      icon: FaRegPaperPlane,
      color: "cyan",
    },
    { skill: "TypeORM", percentage: 80, icon: SiTypeorm, color: "cyan" },
  ],
  database: [
    { skill: "MongoDB", percentage: 85, icon: SiMongodb, color: "emerald" },
    { skill: "PostgreSQL", percentage: 80, icon: SiPostgresql, color: "emerald" },
    { skill: "MySQL", percentage: 70, icon: SiMysql, color: "emerald" },
    { skill: "Redis", percentage: 70, icon: SiRedis, color: "emerald" },
    {
      skill: "Database Design",
      percentage: 80,
      icon: FaDatabase,
      color: "emerald",
    },
  ],
  tools: [
    { skill: "Git/GitHub", percentage: 90, icon: FaGitAlt, color: "violet" },
    { skill: "Docker", percentage: 75, icon: SiDocker, color: "violet" },
    { skill: "Netlify", percentage: 60, icon: SiNetlify, color: "violet" },
    { skill: "Vercel", percentage: 65, icon: SiVercel, color: "violet" },
    { skill: "Render", percentage: 70, icon: SiRender, color: "violet" },
    { skill: "Ubuntu", percentage: 70, icon: FaTools, color: "violet" },
    { skill: "Nginx", percentage: 70, icon: FaTools, color: "violet" },
  ],
};

export const additionalSkills = [
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Redux Toolkit", icon: SiRedux, color: "text-purple-500" },
  { name: "Next.js 14", icon: SiNextdotjs, color: "text-gray-800 dark:text-white" },
  { name: "React.js ", icon: SiReact, color: "text-gray-800 dark:text-white" },
  { name: "Nest.js", icon: SiNestjs, color: "text-red-500" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-500" },
  { name: "WebSocket", icon: SiSocketdotio, color: "text-green-500" },
  { name: "Type ORM", icon: SiTypeorm, color: "text-cyan-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "Redis", icon: SiRedis, color: "text-red-400" },
  { name: "Problem Solving", icon: RiComputerLine, color: "text-cyan-500" },
];

// ==================== EXPERIENCE ====================
export const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Teachmenia Private Limited",
    period: "Feb 2026 - Present",
    description:
      "Building scalable LMS platform with Nest.js, handling 20-30k users per organization. Implementing robust architecture and real-time features.",
    icon: FaBriefcase,
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Jequin Technologies",
    period: "Mar 2025 - Feb 2026",
    description:
      "Building scalable MERN stack applications, optimizing databases, and creating responsive interfaces with modern UI/UX practices.",
    icon: FaBriefcase,
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Technix India",
    period: "Oct 2024 - Mar 2025",
    description:
      "Developed robust web applications using MERN Stack with focus on responsive design and performance optimization.",
    icon: FaLaptopCode,
  },
];

// ==================== EDUCATION ====================
export const educations = [
  {
    id: 1,
    degree: "Bachelor's of Technology",
    institution: "Kanpur Institute of Technology",
    period: "2020 - 2024",
    description:
      "Completed Bachelor's from AKTU University, building strong foundation in analytical thinking and problem-solving.",
    icon: FaGraduationCap,
  },
  {
    id: 2,
    degree: "Intermediate",
    institution: "R.A.S.N.S College",
    period: "2018 - 2020",
    description:
      "Completed intermediate education with strong academic foundation and critical thinking skills.",
    icon: FaGraduationCap,
  },
];

// ==================== CONTACT INFO ====================
export const contactInfo = [
  {
    label: "Email",
    value: "vishalkumar662002@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "Phone",
    value: "+91 7091804766",
    icon: FaPhone,
  },
  {
    label: "Location",
    value: "Rajivnagar, Patna, Bihar, India",
    icon: FaMapMarkerAlt,
  },
];

// ==================== STATS ====================
export const stats = [
  { label: "Years Experience", value: "2+", icon: FaBriefcase },
  { label: "Projects Completed", value: "20+", icon: FaCode },
  { label: "Technologies", value: "15+", icon: FaTools },
  { label: "Happy Clients", value: "10+", icon: FaUserTie },
];