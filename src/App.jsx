import React, { useState, useEffect, useRef } from "react";
import { BiArrowToTop, BiDownArrow } from "react-icons/bi";
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
} from "react-icons/si";
import { RiComputerLine, RiServerLine } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import ubs from "../src/assets/Screenshot 2026-01-06 193832.png";
import chat from "../src/assets/Screenshot 2026-01-06 194052.png";
import videocall from "../src/assets/Screenshot 2026-01-06 193117.png";
import jq from "../src/assets/Screenshot 2026-01-06 193912.png";
import bgrumober from "../src/assets/Screenshot 2026-01-06 194004.png";
import eyecare from "../src/assets/project6.png";
import enventry from "../src/assets/project1.jpg";
import porfile from "../src/assets/profile.png";
import about from "../src/assets/about.jpg";
import logo from "../src/assets/logo.png";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";

const App = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const skillBarsRef = useRef([]);

  // Initialize AOS
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
      if (window.scrollY > 50) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
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
      { threshold: 0.5 },
    );

    skillBarsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
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
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "fullstack", name: "Full Stack" },
    { id: "mobile", name: "Mobile" },
  ];

  const SkillBar = ({ skill, percentage, icon: Icon, color = "red" }) => (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <Icon
            className={`w-5 h-5 mr-3 ${color === "red" ? "text-red-400" : color === "blue" ? "text-blue-400" : color === "green" ? "text-green-400" : "text-purple-400"}`}
          />
          <span className="text-gray-300 font-medium">{skill}</span>
        </div>
        <span className="text-gray-400 font-bold">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
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
      { skill: "JavaScript", percentage: 85, icon: FaJs, color: "red" },
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
      { skill: "Node.js", percentage: 85, icon: FaNodeJs, color: "blue" },
      { skill: "Express.js", percentage: 80, icon: SiExpress, color: "blue" },
      { skill: "REST APIs", percentage: 90, icon: TbApi, color: "blue" },
      { skill: "JWT", percentage: 75, icon: SiJsonwebtokens, color: "blue" },
      {
        skill: "webSocket",
        percentage: 75,
        icon: FaRegPaperPlane ,
        color: "blue",
      },
    ],
    database: [
      { skill: "MongoDB", percentage: 85, icon: SiMongodb, color: "green" },
      { skill: "MySQL", percentage: 70, icon: SiMysql, color: "green" },
      {
        skill: "PostgreSQL",
        percentage: 65,
        icon: SiPostgresql,
        color: "green",
      },
      {
        skill: "Database Design",
        percentage: 80,
        icon: FaDatabase,
        color: "green",
      },
    ],
    tools: [
      { skill: "Git/GitHub", percentage: 90, icon: FaGitAlt, color: "purple" },
      { skill: "Netlify", percentage: 60, icon: SiNetlify, color: "purple" },
      { skill: "Vercel", percentage: 65, icon: SiVercel, color: "purple" },
      { skill: "Render", percentage: 70, icon: SiRender, color: "purple" },
    ],
  };

  const additionalSkills = [
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Redux", icon: SiRedux, color: "text-purple-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "GraphQL", icon: SiGraphql, color: "text-pink-500" },
    { name: "WebSocket", icon: TbApi, color: "text-green-500" },
    { name: "RESTful APIs", icon: TbApi, color: "text-red-500" },
    { name: "Agile/Scrum", icon: FaTools, color: "text-yellow-500" },
    { name: "Problem Solving", icon: RiComputerLine, color: "text-cyan-500" },
  ];

  return (
    <div className="bg-gray-300 w-full overflow-hidden">
      {/* Fixed Header that appears on scroll */}
      <header
        className={`fixed top-0 left-0 right-0 bg-gray-800 text-white py-4 px-6 z-50 transition-all duration-300 ${
          showHeader
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img src={logo} alt="" className=" h-10 w-36" data-aos="fade-down" />
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="hover:text-gray-300 transition-colors"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-gray-300 transition-colors"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              About
            </a>
            <a
              href="#quality"
              className="hover:text-gray-300 transition-colors"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              Quality
            </a>
            <a
              href="#skill"
              className="hover:text-gray-300 transition-colors"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              Skill
            </a>
            <a
              href="#project"
              className="hover:text-gray-300 transition-colors"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Project
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 transition-colors"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Contact
            </a>
            <button
              className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-full transition-colors"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              Hire me
            </button>
          </nav>
          <button
            className="md:hidden px-4 py-2 bg-gray-600 rounded"
            data-aos="fade-down"
          >
            Menu
          </button>
        </div>
      </header>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16"
      >
        <div className="flex items-center justify-center gap-8 md:gap-20 flex-col md:flex-row px-4 py-20">
          <div
            className="relative group"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <div className="absolute -inset-4 bg-gray-800 opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300 rounded-3xl"></div>
            <div className="relative h-72 w-72 bg-gray-200 rotate-45 p-12 shadow-2xl rounded-2xl transform transition-transform group-hover:scale-105 duration-300">
              <div className=" flex items-center justify-center h-full">
                <img
                  src={porfile}
                  alt=""
                  className="transform -rotate-45 object-cover  w-[40vw] h-[40vh]"
                />
              </div>
            </div>
          </div>

          <div
            className="text-center md:text-left space-y-6"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="space-y-2">
              <h1
                className="text-3xl md:text-4xl text-gray-600 font-light"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                I'm
              </h1>
              <h2
                className="text-5xl md:text-6xl font-bold text-gray-800"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Vishal Kumar
              </h2>
              <div className="h-10">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    1000,
                    "MERN Stack Developer",
                    1000,
                    "Frontend Developer",
                    1000,
                    "Backend Developer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "2em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </div>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <button className="px-8 py-3 bg-gray-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-gray-700">
                Download CV
              </button>
              <button className="px-8 py-3 bg-gray-800 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-gray-900">
                Hire Me
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute lg:block hidden bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <BiDownArrow className="text-3xl text-gray-600" />
        </div>
      </section>

      {/* arrow button */}

     {showHeader && (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-8 right-8 bg-gray-800/80 backdrop-blur-lg p-4 rounded-full text-white border border-gray-700/50 hover:border-red-500/50 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 z-50 group animate-bounce-slow"
  >
    <BiArrowToTop className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
  </button>
)}

      {/* About Section */}
      <section id="about" className="min-h-screen bg-gray-300 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-16 text-center" data-aos="fade-up">
            <h3 className="text-2xl md:text-3xl text-gray-600 font-light absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              ABOUT ME
            </h3>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 relative">
              ABOUT
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div
              className="  shadow-2xl rounded-2xl flex items-center justify-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img src={about} alt="" className="bg-cover rounded-2xl  h-96" />
            </div>

            <div
              className="lg:w-1/2 space-y-6"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Full Stack Developer with expertise in MERN Stack, proficient in
                building scalable web applications. Skilled in backend
                development with Node.js and Express, and frontend development
                using React. Experienced in database management with MongoDB and
                API integrations. Passionate about delivering efficient and
                user-friendly solutions.
              </p>

              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="space-y-1">
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-800">Name:</span>{" "}
                    Vishal Kumar
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-800">Degree:</span>{" "}
                    Bachelor
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-800">
                      Experience:
                    </span>{" "}
                    1.4 Years
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-800">Phone:</span>{" "}
                    7091804766
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-800">Email:</span>
                    vishalkumar662002@gmail.com
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-800">
                      Address:
                    </span>{" "}
                    Rajivnagar, Patna, Bihar
                  </p>
                </div>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-4 mt-8"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <button className="px-8 py-3 bg-gray-800 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-gray-900">
                  Download CV
                </button>
                <button className="px-8 py-3 bg-gray-800 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-gray-900">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section
        id="quality"
        className="min-h-screen bg-gray-400 py-20 px-4 flex justify-center items-center"
      >
        <div className="max-w-7xl w-full">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-16" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
              QUALITY
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 font-light mt-2">
              Education & Experience
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* Education Column */}
            <div
              className="flex-1 relative"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-600"></div>

              <div className="ml-16 space-y-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 relative">
                  <div className="absolute -left-12 top-6 w-3 h-3 rounded-full bg-red-500"></div>
                  My Education
                </h2>

                <div
                  className="relative space-y-4 bg-gray-300 p-6 rounded-2xl shadow-lg"
                  data-aos="flip-up"
                  data-aos-delay="200"
                >
                  <div className="absolute -left-12 top-8 w-3 h-3 rounded-full bg-red-500"></div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Bachelor's of Technology
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Kanpur Institute of Technology | 2020 - 2024
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Completed a Bachelor's of Technology from AKTU University,
                    building a strong foundation in analytical thinking,
                    problem-solving, and logical reasoning. Gained expertise in
                    mathematical concepts and their real-world applications.
                  </p>
                </div>

                <div
                  className="relative space-y-4 bg-gray-300 p-6 rounded-2xl shadow-lg"
                  data-aos="flip-up"
                  data-aos-delay="300"
                >
                  <div className="absolute -left-12 top-8 w-3 h-3 rounded-full bg-red-500"></div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Intermediate
                  </h3>
                  <p className="text-gray-600 font-medium">
                    R.A.S.N.S College Kishanpura (Siwan) | 2018 - 2020
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Completed intermediate education at R.A.S.N.S College
                    Kishanpura (Siwan), developing a strong academic foundation,
                    critical thinking skills, and a disciplined approach to
                    learning.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Column */}
            <div
              className="flex-1 relative"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-600"></div>

              <div className="ml-16 space-y-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 relative">
                  <div className="absolute -left-12 top-6 w-3 h-3 rounded-full bg-red-500"></div>
                  My Experience
                </h2>

                <div
                  className="relative space-y-4 bg-gray-300 p-6 rounded-2xl shadow-lg"
                  data-aos="flip-up"
                  data-aos-delay="200"
                >
                  <div className="absolute -left-12 top-8 w-3 h-3 rounded-full bg-red-500"></div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Full Stack Developer
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Jequin Technologies | Mar 2025 - Present
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Designed, developed, and maintained dynamic web applications
                    using MERN Stack (MongoDB, Express.js, React, Node.js),
                    WordPress, and SQL. Worked on building scalable backend
                    architectures, optimizing databases, and creating responsive
                    user interfaces to enhance performance and user experience.
                  </p>
                </div>

                <div
                  className="relative space-y-4 bg-gray-300 p-6 rounded-2xl shadow-lg"
                  data-aos="flip-up"
                  data-aos-delay="300"
                >
                  <div className="absolute -left-12 top-8 w-3 h-3 rounded-full bg-red-500"></div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Frontend Developer
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Technix India | Oct 2024 - Mar 2025
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Developed and maintained robust web applications using MERN
                    Stack. Designed scalable backend systems, optimized database
                    queries, and built responsive front-end interfaces for
                    seamless user experiences. Implemented best coding practices
                    and collaborated with cross-functional teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skill" className="min-h-screen bg-gray-300 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="relative mb-16 text-center" data-aos="fade-up">
            <div className="flex items-center justify-center mb-4">
              <RiComputerLine className="w-12 h-12 text-gray-800 mr-4 animate-pulse" />
              <h3 className="text-2xl md:text-3xl text-gray-800 font-light">
                MY EXPERTISE
              </h3>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-600 relative">
              SKILLS & TECHNOLOGIES
            </h1>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Frontend Skills */}
            <div
              ref={(el) => (skillBarsRef.current[0] = el)}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-red-500 transition-all duration-500 hover:transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
                  <FaReact className="w-7 h-7 text-red-400 animate-spin-slow" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Frontend</h3>
                  <p className="text-gray-400 text-sm">UI/UX Development</p>
                </div>
              </div>
              <div>
                {skillsData.frontend.map((item, index) => (
                  <SkillBar key={index} {...item} />
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div
              ref={(el) => (skillBarsRef.current[1] = el)}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-blue-500 transition-all duration-500 hover:transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                  <RiServerLine className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Backend</h3>
                  <p className="text-gray-400 text-sm">
                    Server-side Development
                  </p>
                </div>
              </div>
              <div>
                {skillsData.backend.map((item, index) => (
                  <SkillBar key={index} {...item} />
                ))}
              </div>
            </div>

            {/* Database Skills */}
            <div
              ref={(el) => (skillBarsRef.current[2] = el)}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-green-500 transition-all duration-500 hover:transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                  <FaDatabase className="w-7 h-7 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Database</h3>
                  <p className="text-gray-400 text-sm">Data Management</p>
                </div>
              </div>
              <div>
                {skillsData.database.map((item, index) => (
                  <SkillBar key={index} {...item} />
                ))}
              </div>
            </div>

            {/* Tools & Others */}
            <div
              ref={(el) => (skillBarsRef.current[3] = el)}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-500 hover:transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                  <FaTools className="w-7 h-7 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Tools & Others
                  </h3>
                  <p className="text-gray-400 text-sm">Development Tools</p>
                </div>
              </div>
              <div>
                {skillsData.tools.map((item, index) => (
                  <SkillBar key={index} {...item} />
                ))}
              </div>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="mt-16" data-aos="fade-up" data-aos-delay="500">
            <h3 className="text-2xl font-bold text-gray-700 mb-6 text-center flex items-center justify-center">
              <FaTools className="w-6 h-6 mr-3 text-gray-800" />
              Additional Skills & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {additionalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center tag-hover transition-all duration-300 hover:bg-gray-700 hover:transform hover:-translate-y-1 border border-gray-700"
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                >
                  <skill.icon className={`w-5 h-5 mr-2 ${skill.color}`} />
                  <span className="text-gray-200 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .animate-spin-slow {
            animation: spin 8s linear infinite;
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .tag-hover:hover {
            box-shadow: 0 10px 25px -5px rgba(239, 68, 68, 0.2);
          }

          .skill-bar-fill {
            transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
          }
        `}</style>
      </section>

      {/* Projects Section */}
      <section id="project" className="min-h-screen bg-gray-400 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="relative mb-16 text-center" data-aos="fade-up">
            <h3 className="text-2xl md:text-3xl text-gray-600 font-light absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              PORTFOLIO
            </h3>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 relative">
              PROJECTS
            </h1>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
              Explore my collection of projects that showcase my skills in web
              development, problem-solving, and creating user-friendly
              applications.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card bg-gray-300 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >
                {/* Image Container with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Quick Actions Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 rounded-full hover:bg-gray-900 transition-colors transform hover:scale-110"
                      title="View Code"
                    >
                      <FaGithub className="text-xl text-white" />
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors transform hover:scale-110"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt className="text-xl text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">
                      {project.category === "fullstack"
                        ? "Full Stack"
                        : project.category}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full tag-hover transition-all duration-300"
                        data-aos="zoom-in"
                        data-aos-delay={tagIndex * 50}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all duration-300 group/btn"
                    data-aos="zoom-in"
                  >
                    <span>View Project</span>
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-gray-300 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="relative mb-16 text-center" data-aos="fade-up">
            <h3 className="text-2xl md:text-3xl text-gray-600 font-light absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              GET IN TOUCH
            </h3>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 relative">
              CONTACT
            </h1>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out to me. I'll get back to you as soon as
              possible.
            </p>
          </div>

          <div className="flex  flex-col   justify-center lg:flex-row gap-12">
            {/* Contact Form */}

            <div className=" w-full" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send me a message
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div data-aos="fade-right" data-aos-delay="300">
                    <label className="block text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div data-aos="fade-left" data-aos-delay="300">
                    <label className="block text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="400">
                  <label className="block text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="500">
                  <label className="block text-gray-700 mb-2">Message *</label>
                  <textarea
                    placeholder="Your Message"
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                    required
                  ></textarea>
                </div>

                <div
                  className=" flex justify-center w-full"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                >
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2  px-6 py-3 bg-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-red-600"
                  >
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>

              <p className="text-gray-600 text-sm text-center mt-6">
                * All fields are required. I'll respond to your message within
                24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0" data-aos="fade-right">
              <img src={logo} alt="" className="w-32 " />
              <p className="text-gray-400 mt-2">Full Stack Developer</p>
            </div>

            <div className="flex gap-6" data-aos="fade-left">
              <a
                href="#home"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#project"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div
            className="border-t border-gray-700 mt-8 pt-8 text-center"
            data-aos="fade-up"
          >
            <p className="text-gray-400">
              © {new Date().getFullYear()} Vishal Kumar. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Designed & Developed with ❤️ by Vishal Kumar
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
