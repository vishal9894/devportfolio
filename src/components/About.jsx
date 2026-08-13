import { motion } from "framer-motion";
import { FaDownload, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { profile } from "../data/data";

const About = () => {
  const { isDarkMode } = useTheme();

  const highlights = [
    "MERN & Nest.js Stack Expert",
    "Scalable Architecture Design",
    "Real-time Applications",
    "Database Optimization",
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="relative mb-16 text-center" data-aos="fade-up">
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${isDarkMode ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" : "bg-indigo-50 text-indigo-600 border border-indigo-200"}`}>
            About Me
          </span>
          <h1 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Know Who <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">I Am</span>
          </h1>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Image */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            data-aos="zoom-in"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img src={profile.images.about} alt="About" className="w-96 h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent"></div>
            </div>
            <div className={`absolute -bottom-4 -right-4 ${isDarkMode ? "bg-slate-800" : "bg-white"} rounded-2xl px-6 py-4 shadow-xl border ${isDarkMode ? "border-slate-700" : "border-gray-200"}`}>
              <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">2+ Years</div>
              <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Experience</div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:w-1/2 space-y-6" data-aos="fade-left">
            <h2 className={`text-2xl md:text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Full Stack Developer & <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Problem Solver</span>
            </h2>

            <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
              {profile.about}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                  <span className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-sm`}>{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-3">
                <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                  <span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Name:</span> {profile.name}
                </p>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                  <span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Degree:</span> {profile.degree}
                </p>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                  <span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Experience:</span> {profile.experience}
                </p>
              </div>
              <div className="space-y-3">
                <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                  <span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Phone:</span> {profile.phone}
                </p>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                  <span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Email:</span> {profile.email}
                </p>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                  <span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Location:</span> {profile.location}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <FaArrowRight className="text-sm" />
                Let's Talk
              </a>
              <button className={`px-8 py-3 ${isDarkMode ? "bg-slate-800 border-slate-600 hover:bg-slate-700" : "bg-white border-gray-300 hover:bg-gray-100"} border rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${isDarkMode ? "text-white" : "text-gray-800"} inline-flex items-center justify-center gap-2`}>
                <FaDownload className="text-sm" />
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;