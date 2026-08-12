import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
} from "react";
import { BiArrowToTop, BiDownArrow, BiSun, BiMoon } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaTools,
  FaRegPaperPlane,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaCode,
  FaLaptopCode,
  FaUserTie,
  FaGraduationCap,
  FaBriefcase,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiGraphql,
  SiVercel,
  SiNetlify,
  SiRender,
  SiJsonwebtokens,
  SiNestjs,
  SiPrisma,
  SiDocker,
  SiRedis,
  SiSocketdotio,
} from "react-icons/si";
import { RiComputerLine, RiServerLine } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

// Theme Context
const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

// Import your assets (update paths as needed)
import ubs from "../src/assets/Screenshot 2026-01-06 193832.png";
import chat from "../src/assets/Screenshot 2026-01-06 194052.png";
import videocall from "../src/assets/Screenshot 2026-01-06 193117.png";
import khansirlms from "../src/assets/khansirlms.png";
import khansirlmsorg from "../src/assets/khansirlmsorg.png";
import jq from "../src/assets/Screenshot 2026-01-06 193912.png";
import bgrumober from "../src/assets/Screenshot 2026-01-06 194004.png";
import eyecare from "../src/assets/project6.png";
import enventry from "../src/assets/project1.jpg";
// import porfile from "../src/assets/profileimage.png";
import about from "../src/assets/about.jpg";
import logo from "../src/assets/logo.png";
import logoDark from "../src/assets/logo.png";
import porfile from "../src/assets/image.png";

const App = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });
  const [isDarkMode, setIsDarkMode] = useState(true);
  const skillBarsRef = useRef([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBar = entry.target.querySelector(".skill-bar-fill");
            if (skillBar) {
              const width = skillBar.getAttribute("data-width");
              setTimeout(() => {
                skillBar.style.width = width;
              }, 100);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    skillBarsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      submitted: true,
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    });
    setTimeout(() => {
      setFormStatus({ submitted: false, success: false, message: "" });
    }, 5000);
  };

  const projects = [
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
      category: "fullstack",
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
      category: "fullstack",
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
      category: "fullstack",
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
      category: "fullstack",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const categories = [
    { id: "all", name: "All Projects", icon: FaCode },
    { id: "frontend", name: "Frontend", icon: FaLaptopCode },
    { id: "backend", name: "Backend", icon: RiServerLine },
    { id: "fullstack", name: "Full Stack", icon: FaDatabase },
  ];

  const SkillBar = ({
    skill,
    percentage,
    icon: Icon,
    color = "red",
    isDark,
  }) => (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <Icon
            className={`w-5 h-5 mr-3 ${color === "red" ? "text-red-500" : color === "blue" ? "text-blue-500" : color === "green" ? "text-green-500" : "text-purple-500"}`}
          />
          <span
            className={`font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}
          >
            {skill}
          </span>
        </div>
        <span
          className={`font-bold ${isDark ? "text-gray-400" : "text-gray-600"}`}
        >
          {percentage}%
        </span>
      </div>
      <div
        className={`w-full ${isDark ? "bg-gray-700" : "bg-gray-200"} rounded-full h-3 overflow-hidden`}
      >
        <div
          className="skill-bar-fill h-3 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: "0%",
            backgroundColor:
              color === "red"
                ? "#ef4444"
                : color === "blue"
                  ? "#3b82f6"
                  : color === "green"
                    ? "#10b981"
                    : "#8b5cf6",
          }}
          data-width={`${percentage}%`}
        ></div>
      </div>
    </div>
  );

  const skillsData = {
    frontend: [
      { skill: "React.js", percentage: 90, icon: FaReact, color: "red" },
      { skill: "Next.js", percentage: 85, icon: SiNextdotjs, color: "red" },
      { skill: "JavaScript", percentage: 85, icon: FaJs, color: "red" },
      { skill: "TypeScript", percentage: 85, icon: SiTypescript, color: "red" },
      { skill: "HTML5", percentage: 95, icon: FaHtml5, color: "red" },
      { skill: "CSS3", percentage: 95, icon: FaCss3Alt, color: "red" },
      {
        skill: "Tailwind CSS",
        percentage: 88,
        icon: SiTailwindcss,
        color: "red",
      },
    ],
    backend: [
      { skill: "Nest.js", percentage: 85, icon: SiNestjs, color: "blue" },
      { skill: "Node.js", percentage: 85, icon: FaNodeJs, color: "blue" },
      { skill: "Express.js", percentage: 80, icon: SiExpress, color: "blue" },
      { skill: "REST APIs", percentage: 90, icon: TbApi, color: "blue" },
      { skill: "JWT", percentage: 75, icon: SiJsonwebtokens, color: "blue" },
      {
        skill: "WebSocket",
        percentage: 75,
        icon: FaRegPaperPlane,
        color: "blue",
      },
      { skill: "Prisma", percentage: 80, icon: SiPrisma, color: "blue" },
    ],
    database: [
      { skill: "MongoDB", percentage: 85, icon: SiMongodb, color: "green" },
      { skill: "PostgreSQL", percentage: 80, icon: SiPostgresql, color: "green" },
      { skill: "MySQL", percentage: 70, icon: SiMysql, color: "green" },
      { skill: "Redis", percentage: 70, icon: SiRedis, color: "green" },
      {
        skill: "Database Design",
        percentage: 80,
        icon: FaDatabase,
        color: "green",
      },
    ],
    tools: [
      { skill: "Git/GitHub", percentage: 90, icon: FaGitAlt, color: "purple" },
      { skill: "Docker", percentage: 75, icon: SiDocker, color: "purple" },
      { skill: "Netlify", percentage: 60, icon: SiNetlify, color: "purple" },
      { skill: "Vercel", percentage: 65, icon: SiVercel, color: "purple" },
      { skill: "Render", percentage: 70, icon: SiRender, color: "purple" },
      { skill: "Ubuntu", percentage: 70, icon: FaTools, color: "purple" },
      { skill: "Nginx", percentage: 70, icon: FaTools, color: "purple" },
    ],
  };

  const additionalSkills = [
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Redux Toolkit", icon: SiRedux, color: "text-purple-500" },
    { name: "Next.js 14", icon: SiNextdotjs, color: "text-gray-800 dark:text-white" },
    { name: "Nest.js", icon: SiNestjs, color: "text-red-500" },
    { name: "GraphQL", icon: SiGraphql, color: "text-pink-500" },
    { name: "WebSocket", icon: SiSocketdotio, color: "text-green-500" },
    { name: "Prisma ORM", icon: SiPrisma, color: "text-cyan-500" },
    { name: "Docker", icon: SiDocker, color: "text-blue-400" },
    { name: "Redis", icon: SiRedis, color: "text-red-400" },
    { name: "Problem Solving", icon: RiComputerLine, color: "text-cyan-500" },
  ];

  const navItems = ["home", "about", "quality", "skill", "project", "contact"];

  const experiences = [
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

  const educations = [
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

  const ThemeProvider = ({ children }) => (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );

  const MainContent = () => {
    const { isDarkMode } = useTheme();

    return (
      <div
        className={`${isDarkMode ? "dark" : ""} transition-colors duration-300`}
      >
        <div
          className={`${isDarkMode ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" : "bg-gradient-to-br from-gray-50 via-white to-gray-100"} w-full overflow-hidden min-h-screen transition-colors duration-300`}
        >
          {/* Animated Background Particles - Only in Dark Mode */}
          {isDarkMode && (
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700/20 via-transparent to-transparent"></div>
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white/5 animate-float"
                  style={{
                    width: Math.random() * 4 + 2 + "px",
                    height: Math.random() * 4 + 2 + "px",
                    top: Math.random() * 100 + "%",
                    left: Math.random() * 100 + "%",
                    animationDelay: Math.random() * 10 + "s",
                    animationDuration: Math.random() * 10 + 5 + "s",
                  }}
                />
              ))}
            </div>
          )}

          {/* Modern Header */}
          <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
              showHeader
                ? `${isDarkMode ? "bg-gray-900/90 backdrop-blur-xl shadow-2xl" : "bg-white/90 backdrop-blur-xl shadow-lg"} py-3`
                : "bg-transparent py-5"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <motion.img
                  src={isDarkMode ? logo : logoDark}
                  alt="Logo"
                  className="h-12 w-auto"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <nav className="hidden md:flex items-center gap-8">
                  {navItems.map((item, idx) => (
                    <motion.a
                      key={item}
                      href={`#${item}`}
                      className={`${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} font-medium transition-colors relative group`}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 group-hover:w-full"></span>
                    </motion.a>
                  ))}
                  <motion.button
                    className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-white"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Hire Me
                  </motion.button>
                  <button
                    onClick={toggleTheme}
                    className={`p-2 rounded-full ${isDarkMode ? "bg-gray-800 text-yellow-400" : "bg-gray-200 text-gray-800"} transition-all duration-300 hover:scale-110`}
                  >
                    {isDarkMode ? <BiSun className="w-5 h-5" /> : <BiMoon className="w-5 h-5" />}
                  </button>
                </nav>
                <div className="flex items-center gap-3 md:hidden">
                  <button
                    onClick={toggleTheme}
                    className={`p-2 rounded-full ${isDarkMode ? "bg-gray-800 text-yellow-400" : "bg-gray-200 text-gray-800"} transition-all duration-300`}
                  >
                    {isDarkMode ? <BiSun className="w-5 h-5" /> : <BiMoon className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`${isDarkMode ? "text-white" : "text-gray-800"} focus:outline-none`}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      )}
                    </svg>
                  </button>
                </div>
              </div>
              <AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className={`md:hidden mt-4 py-4 border-t ${
        isDarkMode ? "border-gray-700" : "border-gray-200"
      } relative`}
    >
      {/* Blurred Background Overlay */}
      <div
        className={`absolute inset-0 ${
          isDarkMode
            ? "bg-gray-900/95 backdrop-blur-xl"
            : "bg-white/95 backdrop-blur-xl"
        } -z-10 rounded-2xl`}
      />
      
      {/* Menu Items Container */}
      <div className="relative z-10 px-4">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={`block py-3 px-4 rounded-xl ${
              isDarkMode
                ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
            } transition-all duration-300 font-medium`}
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </div>
          </a>
        ))}
        
        {/* Divider */}
        <div className={`my-3 h-px ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`} />
        
        <button
          className="w-full mt-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Hire Me
        </button>
        
        {/* Social Links in Mobile Menu */}
        <div className="flex justify-center gap-4 mt-6 pt-4">
          <a href="#" className={`w-10 h-10 rounded-full ${
            isDarkMode ? "bg-gray-800/80 hover:bg-red-500" : "bg-gray-100/80 hover:bg-red-500"
          } flex items-center justify-center transition-all duration-300 group`}>
            <FaGithub className={`${isDarkMode ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-white"} text-lg`} />
          </a>
          <a href="#" className={`w-10 h-10 rounded-full ${
            isDarkMode ? "bg-gray-800/80 hover:bg-blue-500" : "bg-gray-100/80 hover:bg-blue-500"
          } flex items-center justify-center transition-all duration-300 group`}>
            <FaLinkedin className={`${isDarkMode ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-white"} text-lg`} />
          </a>
          <a href="#" className={`w-10 h-10 rounded-full ${
            isDarkMode ? "bg-gray-800/80 hover:bg-sky-500" : "bg-gray-100/80 hover:bg-sky-500"
          } flex items-center justify-center transition-all duration-300 group`}>
            <FaTwitter className={`${isDarkMode ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-white"} text-lg`} />
          </a>
          <a href="#" className={`w-10 h-10 rounded-full ${
            isDarkMode ? "bg-gray-800/80 hover:bg-pink-500" : "bg-gray-100/80 hover:bg-pink-500"
          } flex items-center justify-center transition-all duration-300 group`}>
            <FaInstagram className={`${isDarkMode ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-white"} text-lg`} />
          </a>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
            </div>
          </header>

          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            <div className={`absolute inset-0 ${isDarkMode ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" : "bg-gradient-to-br from-gray-50 via-white to-gray-100"}`}></div>
            <div className="container mx-auto px-4 py-20 z-10 relative">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full opacity-70 blur-2xl group-hover:opacity-100 transition-all duration-500 animate-spin-slow"></div>
                  <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-purple-600 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-tl from-blue-500 to-cyan-500 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-shimmer"></div>
                      <img src={porfile} alt="Vishal Kumar" className="w-full h-full object-cover object-center" />
                    </div>
                  </div>
                  <motion.div
                    className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
                    animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🚀 Available
                  </motion.div>
                </motion.div>

                <motion.div
                  className="text-center lg:text-left space-y-6 max-w-xl"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="space-y-2">
                    <motion.h1
                      className={`text-3xl md:text-4xl ${isDarkMode ? "text-red-400" : "text-red-600"} font-light`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      I'm
                    </motion.h1>
                    <motion.h2
                      className={`text-5xl md:text-7xl font-bold ${isDarkMode ? "bg-gradient-to-r from-white via-gray-200 to-gray-400" : "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600"} bg-clip-text text-transparent`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Vishal Kumar
                    </motion.h2>
                    <div className="h-16 md:h-20">
                      <TypeAnimation
                        sequence={[
                          "Full Stack Developer",
                          1000,
                          "MERN Stack Developer",
                          1000,
                          "Nest.js Expert",
                          1000,
                          "Backend Architect",
                          1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        className={`text-2xl md:text-3xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} font-medium`}
                        repeat={Infinity}
                      />
                    </div>
                  </div>

                  <motion.p
                    className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-lg leading-relaxed`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Building scalable, high-performance web applications with modern technologies.
                    Passionate about creating elegant solutions to complex problems.
                  </motion.p>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                      Download CV
                    </button>
                    <button
                      className={`px-8 py-3 ${isDarkMode ? "bg-gray-800/80 border-gray-600 hover:bg-gray-700" : "bg-gray-200/80 border-gray-300 hover:bg-gray-300"} backdrop-blur-sm border rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${isDarkMode ? "text-white" : "text-gray-800"}`}
                    >
                      Hire Me
                    </button>
                  </motion.div>

                  <motion.div
                    className="flex gap-4 justify-center lg:justify-start pt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <a href="#" className={`w-10 h-10 rounded-full ${isDarkMode ? "bg-gray-800 hover:bg-red-500" : "bg-gray-200 hover:bg-red-500"} flex items-center justify-center transition-all duration-300 group`}>
                      <FaGithub className={`${isDarkMode ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-white"}`} />
                    </a>
                    <a href="#" className={`w-10 h-10 rounded-full ${isDarkMode ? "bg-gray-800 hover:bg-blue-500" : "bg-gray-200 hover:bg-blue-500"} flex items-center justify-center transition-all duration-300 group`}>
                      <FaLinkedin className={`${isDarkMode ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-white"}`} />
                    </a>
                    <a href="#" className={`w-10 h-10 rounded-full ${isDarkMode ? "bg-gray-800 hover:bg-sky-500" : "bg-gray-200 hover:bg-sky-500"} flex items-center justify-center transition-all duration-300 group`}>
                      <FaTwitter className={`${isDarkMode ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-white"}`} />
                    </a>
                    <a href="#" className={`w-10 h-10 rounded-full ${isDarkMode ? "bg-gray-800 hover:bg-pink-500" : "bg-gray-200 hover:bg-pink-500"} flex items-center justify-center transition-all duration-300 group`}>
                      <FaInstagram className={`${isDarkMode ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-white"}`} />
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            <div className="absolute lg:block hidden bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <BiDownArrow className={`text-3xl ${isDarkMode ? "text-gray-400" : "text-gray-500"}`} />
            </div>
          </section>

          {/* Scroll to Top Button */}
          {showHeader && (
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fixed bottom-8 right-8 bg-gradient-to-r from-red-500 to-red-600 p-4 rounded-full text-white shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 z-50 group"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <BiArrowToTop className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          )}

          {/* About Section */}
          <section id="about" className="py-20 px-4 relative">
            <div className="max-w-7xl mx-auto">
              <div className="relative mb-16 text-center" data-aos="fade-up">
                <h3 className={`text-2xl md:text-3xl ${isDarkMode ? "text-red-400" : "text-red-600"} font-light absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4`}>ABOUT ME</h3>
                <h1 className={`text-5xl md:text-6xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"} relative pt-8`}>ABOUT</h1>
                <div className="mt-4 w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                <div className="relative group" data-aos="zoom-in" data-aos-delay="200">
                  <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-purple-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition duration-500"></div>
                  <img src={about} alt="About" className="relative rounded-2xl shadow-2xl w-96 h-auto object-cover" />
                </div>

                <div className="lg:w-1/2 space-y-6" data-aos="fade-left" data-aos-delay="300">
                  <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
                    Full Stack Developer with expertise in MERN & Nest.js stacks, proficient in building scalable web applications.
                    Skilled in backend development with Node.js, Nest.js and Express, and frontend development using React & Next.js.
                    Experienced in database management with PostgreSQL, MongoDB and API integrations. Passionate about delivering
                    efficient and user-friendly solutions.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="space-y-3">
                      <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Name:</span> Vishal Kumar</p>
                      <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Degree:</span> Bachelor of Technology</p>
                      <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Experience:</span> 2+ Years</p>
                    </div>
                    <div className="space-y-3">
                      <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Phone:</span> +91 7091804766</p>
                      <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Email:</span> vishalkumar662002@gmail.com</p>
                      <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Location:</span> Patna, Bihar, India</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                      Download CV
                    </button>
                    <button className={`px-8 py-3 ${isDarkMode ? "bg-gray-800 border-gray-600 hover:bg-gray-700" : "bg-gray-200 border-gray-300 hover:bg-gray-300"} border rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quality Section */}
          <section id="quality" className={`py-20 px-4 relative ${isDarkMode ? "bg-gradient-to-b from-gray-900 to-gray-800" : "bg-gradient-to-b from-gray-100 to-gray-50"}`}>
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col items-center mb-16" data-aos="fade-up">
                <h1 className={`text-5xl md:text-6xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>QUALITY</h1>
                <h2 className={`text-2xl md:text-3xl ${isDarkMode ? "text-red-400" : "text-red-600"} font-light mt-2`}>Education & Experience</h2>
                <div className="mt-4 w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div data-aos="fade-right" data-aos-delay="100">
                  <div className="flex items-center gap-3 mb-8">
                    <FaGraduationCap className="text-4xl text-red-500" />
                    <h2 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>My Education</h2>
                  </div>
                  <div className="space-y-6">
                    {educations.map((edu, index) => (
                      <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative ${isDarkMode ? "bg-gray-800/50" : "bg-white/80"} backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <edu.icon className="text-red-500 text-xl" />
                          </div>
                          <div>
                            <h3 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>{edu.degree}</h3>
                            <p className="text-red-500 font-medium mt-1">{edu.institution}</p>
                            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-sm mt-1`}>{edu.period}</p>
                            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} mt-3`}>{edu.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div data-aos="fade-left" data-aos-delay="100">
                  <div className="flex items-center gap-3 mb-8">
                    <FaBriefcase className="text-4xl text-red-500" />
                    <h2 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>My Experience</h2>
                  </div>
                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative ${isDarkMode ? "bg-gray-800/50" : "bg-white/80"} backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <exp.icon className="text-red-500 text-xl" />
                          </div>
                          <div>
                            <h3 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>{exp.title}</h3>
                            <p className="text-red-500 font-medium mt-1">{exp.company}</p>
                            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-sm mt-1`}>{exp.period}</p>
                            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} mt-3`}>{exp.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skill" className="py-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-20 right-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="relative mb-16 text-center" data-aos="fade-up">
                <div className="inline-flex items-center justify-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <RiComputerLine className="w-5 h-5 text-white" />
                  </div>
                  <h3 className={`text-2xl md:text-3xl ${isDarkMode ? "text-red-400" : "text-red-600"} font-semibold`}>MY EXPERTISE</h3>
                </div>
                <h1 className={`text-4xl md:text-6xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"} relative`}>
                  SKILLS & <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">TECHNOLOGIES</span>
                </h1>
                <div className="mt-6 w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
                <p className={`mt-4 max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Leveraging modern technologies to build scalable and performant web applications
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {Object.entries(skillsData).map(([category, skills], idx) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`group ${isDarkMode ? "bg-gray-800/60 border-gray-700 hover:border-red-500/50" : "bg-white/80 border-gray-200 hover:border-red-400/50"} backdrop-blur-sm rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden`}
                  >
                    <div className="relative p-6 pb-0">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-2xl"></div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {category === "frontend" && <FaReact className="w-7 h-7 text-white" />}
                          {category === "backend" && <RiServerLine className="w-7 h-7 text-white" />}
                          {category === "database" && <FaDatabase className="w-7 h-7 text-white" />}
                          {category === "tools" && <FaTools className="w-7 h-7 text-white" />}
                        </div>
                        <div>
                          <h3 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"} capitalize`}>{category}</h3>
                          <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                            {category === "frontend" && "UI/UX Development"}
                            {category === "backend" && "Server Development"}
                            {category === "database" && "Data Management"}
                            {category === "tools" && "DevOps & Tools"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 pt-0 space-y-4">
                      {skills.map((skill, idx2) => (
                        <div key={idx2} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <skill.icon className={`w-4 h-4 ${skill.color === "red" ? "text-red-400" : skill.color === "blue" ? "text-blue-400" : skill.color === "green" ? "text-green-400" : "text-purple-400"}`} />
                              <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{skill.skill}</span>
                            </div>
                            <span className={`text-sm font-semibold ${skill.color === "red" ? (isDarkMode ? "text-red-400" : "text-red-600") : skill.color === "blue" ? (isDarkMode ? "text-blue-400" : "text-blue-600") : skill.color === "green" ? (isDarkMode ? "text-green-400" : "text-green-600") : (isDarkMode ? "text-purple-400" : "text-purple-600")}`}>
                              {skill.percentage}%
                            </span>
                          </div>
                          <div className={`h-2 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"} rounded-full overflow-hidden`}>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.percentage}%` }}
                              transition={{ duration: 1, delay: idx2 * 0.1 }}
                              className={`h-full rounded-full bg-gradient-to-r ${
                                skill.color === "red" ? "from-red-500 to-red-400" :
                                skill.color === "blue" ? "from-blue-500 to-blue-400" :
                                skill.color === "green" ? "from-green-500 to-green-400" :
                                "from-purple-500 to-purple-400"
                              }`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-20" data-aos="fade-up" data-aos-delay="500">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                      <FaTools className="w-5 h-5 text-white" />
                    </div>
                    <h2 className={`text-2xl md:text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>Additional Skills</h2>
                  </div>
                  <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>Complementary technologies and tools I work with</p>
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                  {additionalSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className={`group relative ${isDarkMode ? "bg-gray-800/80 border-gray-700 hover:border-amber-500/50" : "bg-white/90 border-gray-200 hover:border-amber-400/50"} backdrop-blur-sm rounded-2xl border transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-amber-500/5 transition-all duration-500"></div>
                      <div className="px-5 py-3 flex items-center gap-3 relative z-10">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                          <skill.icon className={`w-4 h-4 ${skill.color}`} />
                        </div>
                        <span className={`font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"} group-hover:text-amber-500 transition-colors duration-300`}>{skill.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section - Modern Design */}
          <section id="project" className={`py-20 px-4 relative ${isDarkMode ? "bg-gradient-to-b from-gray-900 to-gray-800" : "bg-gradient-to-b from-gray-100 to-gray-50"}`}>
            <div className="max-w-7xl mx-auto">
              <div className="relative mb-16 text-center" data-aos="fade-up">
                <div className="inline-flex items-center justify-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <FaCode className="w-5 h-5 text-white" />
                  </div>
                  <h3 className={`text-2xl md:text-3xl ${isDarkMode ? "text-red-400" : "text-red-600"} font-semibold`}>MY PORTFOLIO</h3>
                </div>
                <h1 className={`text-4xl md:text-6xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"} relative`}>
                  FEATURED <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">PROJECTS</span>
                </h1>
                <div className="mt-6 w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
                <p className={`mt-4 max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Explore my collection of projects that showcase my skills in web development,
                  problem-solving, and creating user-friendly applications.
                </p>
              </div>

              {/* Featured Projects */}
              <div className="mb-20" data-aos="fade-up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      whileHover={{ y: -8 }}
                      className="group relative overflow-hidden rounded-3xl shadow-2xl"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md"></div>
                      <div className={`relative ${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-3xl overflow-hidden`}>
                        <div className="relative h-64 md:h-72 overflow-hidden">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-red-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full shadow-lg">⭐ Featured</span>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-gray-900 transition-all duration-300 transform hover:scale-110 shadow-xl">
                              <FaGithub className="text-xl text-white" />
                            </a>
                            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="p-3 bg-red-500/90 backdrop-blur-sm rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-110 shadow-xl">
                              <FaExternalLinkAlt className="text-xl text-white" />
                            </a>
                          </div>
                        </div>
                        <div className="p-6 md:p-8">
                          <h3 className={`text-2xl font-bold ${isDarkMode ? "text-white group-hover:text-red-400" : "text-gray-800 group-hover:text-red-600"} transition-colors duration-300`}>{project.title}</h3>
                          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} mt-2 line-clamp-2`}>{project.description}</p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {project.tags.slice(0, 4).map((tag, tagIdx) => (
                              <span key={tagIdx} className={`px-2.5 py-1 ${isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"} text-xs rounded-lg font-medium`}>{tag}</span>
                            ))}
                            {project.tags.length > 4 && (
                              <span className={`px-2.5 py-1 ${isDarkMode ? "bg-gray-700 text-gray-400" : "bg-gray-100 text-gray-500"} text-xs rounded-lg font-medium`}>+{project.tags.length - 4}</span>
                            )}
                          </div>
                          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-5 text-red-500 font-semibold group/link hover:gap-3 transition-all duration-300">
                            <span>View Live Project</span>
                            <FaArrowRight className="text-sm group-hover/link:translate-x-1 transition-transform duration-300" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
                {categories.map((cat, idx) => (
                  <motion.button
                    key={cat.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                      activeFilter === cat.id
                        ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25 scale-105"
                        : `${isDarkMode ? "bg-gray-800/80 text-gray-300 hover:bg-gray-700" : "bg-white/80 text-gray-600 hover:bg-gray-100"} border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`
                    }`}
                  >
                    <cat.icon className="w-4 h-4" />
                    <span className="text-sm">{cat.name}</span>
                  </motion.button>
                ))}
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.filter(p => !p.featured).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
                    whileHover={{ y: -8 }}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/50 via-purple-500/50 to-blue-500/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md"></div>
                    <div className={`relative ${isDarkMode ? "bg-gray-800/80" : "bg-white"} rounded-2xl overflow-hidden shadow-xl transition-all duration-500`}>
                      <div className="relative h-52 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-gray-900 transition-all duration-300 transform hover:scale-110">
                            <FaGithub className="text-white text-base" />
                          </a>
                          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-red-500/90 backdrop-blur-sm rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-110">
                            <FaExternalLinkAlt className="text-white text-base" />
                          </a>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className={`text-lg font-bold ${isDarkMode ? "text-white group-hover:text-red-400" : "text-gray-800 group-hover:text-red-600"} transition-colors duration-300 line-clamp-1`}>{project.title}</h3>
                        <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm line-clamp-2 mt-1`}>{project.description}</p>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {project.tags.slice(0, 3).map((tag, tagIdx) => (
                            <span key={tagIdx} className={`px-2 py-0.5 ${isDarkMode ? "bg-gray-700/70 text-gray-300" : "bg-gray-100 text-gray-600"} text-xs rounded-md`}>{tag}</span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className={`px-2 py-0.5 ${isDarkMode ? "bg-gray-700/70 text-gray-400" : "bg-gray-100 text-gray-500"} text-xs rounded-md`}>+{project.tags.length - 3}</span>
                          )}
                        </div>
                        <div className="mt-4 pt-3 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}">
                          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-red-500 text-sm font-medium hover:gap-2 transition-all duration-300">
                            <span>View Project</span>
                            <FaArrowRight className="text-xs" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 px-4 relative">
            <div className="max-w-5xl mx-auto">
              <div className="relative mb-16 text-center" data-aos="fade-up">
                <h3 className={`text-2xl md:text-3xl ${isDarkMode ? "text-red-400" : "text-red-600"} font-light absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4`}>GET IN TOUCH</h3>
                <h1 className={`text-5xl md:text-6xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"} relative pt-8`}>CONTACT</h1>
                <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} mt-4 max-w-2xl mx-auto`}>Have a project in mind? Feel free to reach out. I'll get back to you as soon as possible.</p>
                <div className="mt-4 w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
              </div>

              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2 space-y-6" data-aos="fade-right" data-aos-delay="200">
                  <div className={`${isDarkMode ? "bg-gray-800/50 hover:bg-gray-800" : "bg-white/80 hover:bg-white"} backdrop-blur-sm p-6 rounded-2xl flex items-center gap-4 transition-all duration-300`}>
                    <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center"><FaEnvelope className="text-red-500 text-xl" /></div>
                    <div><p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-sm`}>Email</p><p className={`${isDarkMode ? "text-white" : "text-gray-800"} font-medium`}>vishalkumar662002@gmail.com</p></div>
                  </div>
                  <div className={`${isDarkMode ? "bg-gray-800/50 hover:bg-gray-800" : "bg-white/80 hover:bg-white"} backdrop-blur-sm p-6 rounded-2xl flex items-center gap-4 transition-all duration-300`}>
                    <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center"><FaPhone className="text-red-500 text-xl" /></div>
                    <div><p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-sm`}>Phone</p><p className={`${isDarkMode ? "text-white" : "text-gray-800"} font-medium`}>+91 7091804766</p></div>
                  </div>
                  <div className={`${isDarkMode ? "bg-gray-800/50 hover:bg-gray-800" : "bg-white/80 hover:bg-white"} backdrop-blur-sm p-6 rounded-2xl flex items-center gap-4 transition-all duration-300`}>
                    <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center"><FaMapMarkerAlt className="text-red-500 text-xl" /></div>
                    <div><p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-sm`}>Location</p><p className={`${isDarkMode ? "text-white" : "text-gray-800"} font-medium`}>Rajivnagar, Patna, Bihar, India</p></div>
                  </div>
                </div>

                <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="300">
                  <div className={`${isDarkMode ? "bg-gray-800/50" : "bg-white/80"} backdrop-blur-sm p-8 rounded-2xl`}>
                    <h2 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"} mb-6`}>Send me a message</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Your Name" className={`w-full px-4 py-3 ${isDarkMode ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400" : "bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500"} border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent`} required />
                        <input type="email" placeholder="Your Email" className={`w-full px-4 py-3 ${isDarkMode ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400" : "bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500"} border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent`} required />
                      </div>
                      <input type="text" placeholder="Subject" className={`w-full px-4 py-3 ${isDarkMode ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400" : "bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500"} border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent`} required />
                      <textarea placeholder="Your Message" rows="5" className={`w-full px-4 py-3 ${isDarkMode ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400" : "bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500"} border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none`} required></textarea>
                      <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                        <FaPaperPlane /> Send Message
                      </button>
                    </form>
                    {formStatus.submitted && (
                      <div className={`mt-4 p-3 rounded-lg text-center ${formStatus.success ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>{formStatus.message}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className={`${isDarkMode ? "bg-gray-900 border-gray-800" : "bg-gray-100 border-gray-200"} py-12 border-t`}>
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0" data-aos="fade-right">
                  <img src={isDarkMode ? logo : logoDark} alt="Logo" className="h-12 w-auto" />
                  <p className={`${isDarkMode ? "text-gray-500" : "text-gray-400"} mt-2`}>Full Stack Developer</p>
                </div>
                <div className="flex gap-6" data-aos="fade-left">
                  {navItems.map((item) => (<a key={item} href={`#${item}`} className={`${isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-800"} transition-colors`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>))}
                </div>
              </div>
              <div className={`${isDarkMode ? "border-gray-800" : "border-gray-200"} border-t mt-8 pt-8 text-center`} data-aos="fade-up">
                <p className={isDarkMode ? "text-gray-500" : "text-gray-400"}>© {new Date().getFullYear()} Vishal Kumar. All rights reserved.</p>
                <p className={`${isDarkMode ? "text-gray-600" : "text-gray-500"} text-sm mt-2`}>Designed & Developed with ❤️ by Vishal Kumar</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  };

  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
};

export default App;