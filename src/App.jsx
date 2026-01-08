import React, { useState, useEffect } from "react";
import { BiDownArrow } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
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

const App = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

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
                <h3
                  className="typing text-2xl md:text-3xl font-semibold text-gray-800"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Full Stack Developer
                </h3>
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

      {/* About Section */}
      <section id="about" className="min-h-screen bg-gray-300 py-20 px-4">
        <div className="max-w-6xl mx-auto">
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
        <div className="max-w-6xl w-full">
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
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="relative mb-16 text-center" data-aos="fade-up">
            <h3 className="text-2xl md:text-3xl text-gray-600 font-light absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              MY SKILLS
            </h3>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 relative">
              SKILLS
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend Skills */}
            <div
              className="bg-gray-200 p-6 rounded-2xl shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Frontend</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">React.js</span>
                    <span className="text-gray-600 font-medium">90%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">JavaScript</span>
                    <span className="text-gray-600 font-medium">85%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">HTML/CSS</span>
                    <span className="text-gray-600 font-medium">95%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-[95%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Tailwind CSS</span>
                    <span className="text-gray-600 font-medium">88%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-[88%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Skills */}
            <div
              className="bg-gray-200 p-6 rounded-2xl shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Backend</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Node.js</span>
                    <span className="text-gray-600 font-medium">85%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Express.js</span>
                    <span className="text-gray-600 font-medium">80%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-[80%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">REST APIs</span>
                    <span className="text-gray-600 font-medium">90%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">JWT</span>
                    <span className="text-gray-600 font-medium">75%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-[75%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Database Skills */}
            <div
              className="bg-gray-200 p-6 rounded-2xl shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Database</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">MongoDB</span>
                    <span className="text-gray-600 font-medium">85%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">MySQL</span>
                    <span className="text-gray-600 font-medium">70%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-[70%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">PostgreSQL</span>
                    <span className="text-gray-600 font-medium">65%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-[65%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Database Design</span>
                    <span className="text-gray-600 font-medium">80%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-[80%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools & Others */}
            <div
              className="bg-gray-200 p-6 rounded-2xl shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Tools & Others
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Git/GitHub</span>
                    <span className="text-gray-600 font-medium">90%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Netlify</span>
                    <span className="text-gray-600 font-medium">60%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-[60%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Vercel</span>
                    <span className="text-gray-600 font-medium">65%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-[65%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Render</span>
                    <span className="text-gray-600 font-medium">70%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-[70%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="mt-16" data-aos="fade-up" data-aos-delay="500">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Additional Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span
                className="px-4 py-2 bg-gray-800 text-white rounded-full tag-hover transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                TypeScript
              </span>
              <span
                className="px-4 py-2 bg-gray-800 text-white rounded-full tag-hover transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                Redux
              </span>
              <span
                className="px-4 py-2 bg-gray-800 text-white rounded-full tag-hover transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                Next.js
              </span>
              <span
                className="px-4 py-2 bg-gray-800 text-white rounded-full tag-hover transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="250"
              >
                GraphQL
              </span>
              <span
                className="px-4 py-2 bg-gray-800 text-white rounded-full tag-hover transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                WebSocket
              </span>
              <span
                className="px-4 py-2 bg-gray-800 text-white rounded-full tag-hover transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="350"
              >
                RESTful APIs
              </span>
              <span
                className="px-4 py-2 bg-gray-800 text-white rounded-full tag-hover transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                Agile/Scrum
              </span>
              <span
                className="px-4 py-2 bg-gray-800 text-white rounded-full tag-hover transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="450"
              >
                Problem Solving
              </span>
            </div>
          </div>
        </div>
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

              <p className="text-gray-600 text-sm mt-6">
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
