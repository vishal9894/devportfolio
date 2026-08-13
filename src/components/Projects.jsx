import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaCode, FaStar, FaFolder } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { projects, categories } from "../data/data";

const FeaturedProjectCard = ({ project, index, isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      {/* Gradient border on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md"></div>

      <div className={`relative ${isDarkMode ? "bg-slate-800" : "bg-white"} rounded-3xl overflow-hidden shadow-2xl`}>
        {/* Image */}
        <div className="relative h-64 md:h-72 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

          {/* Featured badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1">
              <FaStar className="text-[10px]" />
              Featured
            </span>
          </div>

          {/* Hover actions */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/90 backdrop-blur-sm rounded-full hover:bg-slate-900 transition-all duration-300 transform hover:scale-110 shadow-xl"
              title="View Code"
            >
              <FaGithub className="text-xl text-white" />
            </a>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-r from-indigo-500 to-cyan-500 backdrop-blur-sm rounded-full hover:from-indigo-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110 shadow-xl"
              title="Live Demo"
            >
              <FaExternalLinkAlt className="text-xl text-white" />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${isDarkMode ? "bg-indigo-500/10 text-indigo-400" : "bg-indigo-50 text-indigo-600"}`}>
              {project.category === "fullstack" ? "Full Stack" : project.category}
            </span>
            <FaFolder className={`${isDarkMode ? "text-gray-600" : "text-gray-300"} text-lg`} />
          </div>

          <h3 className={`text-2xl font-bold ${isDarkMode ? "text-white group-hover:text-indigo-400" : "text-gray-900 group-hover:text-indigo-600"} transition-colors duration-300`}>
            {project.title}
          </h3>

          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} mt-2 line-clamp-2 text-sm leading-relaxed`}>
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.slice(0, 4).map((tag, tagIdx) => (
              <span
                key={tagIdx}
                className={`px-2.5 py-1 ${isDarkMode ? "bg-slate-700 text-gray-300" : "bg-gray-100 text-gray-700"} text-xs rounded-lg font-medium`}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className={`px-2.5 py-1 ${isDarkMode ? "bg-slate-700 text-gray-400" : "bg-gray-100 text-gray-500"} text-xs rounded-lg font-medium`}>
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Link */}
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-indigo-500 font-semibold group/link hover:gap-3 transition-all duration-300"
          >
            <span>View Live Project</span>
            <FaArrowRight className="text-sm group-hover/link:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index, isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/50 via-cyan-500/50 to-emerald-500/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md"></div>

      <div className={`relative ${isDarkMode ? "bg-slate-800/80" : "bg-white"} rounded-2xl overflow-hidden shadow-xl transition-all duration-500`}>
        <div className="relative h-52 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-800/90 backdrop-blur-sm rounded-full hover:bg-slate-900 transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub className="text-white text-base" />
            </a>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-gradient-to-r from-indigo-500 to-cyan-500 backdrop-blur-sm rounded-full hover:from-indigo-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110"
            >
              <FaExternalLinkAlt className="text-white text-base" />
            </a>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${isDarkMode ? "bg-indigo-500/10 text-indigo-400" : "bg-indigo-50 text-indigo-600"}`}>
              {project.category === "fullstack" ? "Full Stack" : project.category}
            </span>
            <FaFolder className={`${isDarkMode ? "text-gray-600" : "text-gray-300"} text-sm`} />
          </div>

          <h3 className={`text-lg font-bold ${isDarkMode ? "text-white group-hover:text-indigo-400" : "text-gray-900 group-hover:text-indigo-600"} transition-colors duration-300 line-clamp-1`}>
            {project.title}
          </h3>

          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm line-clamp-2 mt-1`}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tags.slice(0, 3).map((tag, tagIdx) => (
              <span
                key={tagIdx}
                className={`px-2 py-0.5 ${isDarkMode ? "bg-slate-700/70 text-gray-300" : "bg-gray-100 text-gray-600"} text-xs rounded-md`}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className={`px-2 py-0.5 ${isDarkMode ? "bg-slate-700/70 text-gray-400" : "bg-gray-100 text-gray-500"} text-xs rounded-md`}>
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          <div className={`mt-4 pt-3 border-t ${isDarkMode ? 'border-slate-700' : 'border-gray-100'}`}>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-indigo-500 text-sm font-medium hover:gap-2 transition-all duration-300"
            >
              <span>View Project</span>
              <FaArrowRight className="text-xs" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [activeFilter, setActiveFilter] = useState("all");

  const featuredProjects = projects.filter((p) => p.featured);
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="project" className={`py-24 px-4 relative ${isDarkMode ? "bg-gradient-to-b from-slate-900 to-slate-800" : "bg-gradient-to-b from-slate-50 to-white"}`}>
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="relative mb-16 text-center" data-aos="fade-up">
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${isDarkMode ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" : "bg-indigo-50 text-indigo-600 border border-indigo-200"}`}>
            My Portfolio
          </span>
          <h1 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Featured <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Projects</span>
          </h1>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className={`mt-4 max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Explore my collection of projects that showcase my skills in web development,
            problem-solving, and creating user-friendly applications.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard
                key={project.id}
                project={project}
                index={index}
                isDarkMode={isDarkMode}
              />
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
                  ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 scale-105"
                  : `${isDarkMode ? "bg-slate-800/80 text-gray-300 hover:bg-slate-700" : "bg-white/80 text-gray-600 hover:bg-gray-100"} border ${isDarkMode ? "border-slate-700" : "border-gray-200"}`
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
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;