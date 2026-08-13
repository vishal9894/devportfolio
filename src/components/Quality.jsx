import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { educations, experiences } from "../data/data";

const TimelineItem = ({ item, type, index, isDarkMode }) => {
  const isEducation = type === "education";
  const iconBg = isEducation
    ? "bg-gradient-to-br from-indigo-500 to-blue-500"
    : "bg-gradient-to-br from-cyan-500 to-emerald-500";
  const borderColor = isEducation ? "border-indigo-500" : "border-cyan-500";
  const textColor = isEducation ? "text-indigo-500" : "text-cyan-500";
  const badgeBg = isEducation
    ? isDarkMode ? "bg-indigo-500/10 text-indigo-400" : "bg-indigo-50 text-indigo-600"
    : isDarkMode ? "bg-cyan-500/10 text-cyan-400" : "bg-cyan-50 text-cyan-600";

  return (
    <motion.div
      initial={{ opacity: 0, x: isEducation ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-16 pb-10 last:pb-0"
    >
      {/* Timeline line */}
      <div className={`absolute left-6 top-0 bottom-0 w-0.5 ${isDarkMode ? "bg-slate-700" : "bg-gray-200"}`}></div>

      {/* Timeline dot */}
      <div className={`absolute left-0 top-0 w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center shadow-lg z-10`}>
        <item.icon className="text-white text-lg" />
      </div>

      {/* Card */}
      <div
        className={`group relative ${isDarkMode ? "bg-slate-800/60 hover:bg-slate-800" : "bg-white/90 hover:bg-white"} backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 ${borderColor} hover:-translate-y-1`}
      >
        <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
          <h3 className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            {isEducation ? item.degree : item.title}
          </h3>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${badgeBg} flex items-center gap-1`}>
            <FaCalendarAlt className="text-[10px]" />
            {item.period}
          </span>
        </div>

        <p className={`${textColor} font-semibold text-sm mb-3`}>
          {isEducation ? item.institution : item.company}
        </p>

        <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm leading-relaxed`}>
          {item.description}
        </p>

        {/* Hover accent line */}
        <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${isEducation ? "from-indigo-500 to-blue-500" : "from-cyan-500 to-emerald-500"}`}></div>
      </div>
    </motion.div>
  );
};

const Quality = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="quality" className={`py-24 px-4 relative ${isDarkMode ? "bg-gradient-to-b from-slate-900 to-slate-800" : "bg-gradient-to-b from-slate-50 to-white"}`}>
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 left-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20" data-aos="fade-up">
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${isDarkMode ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" : "bg-indigo-50 text-indigo-600 border border-indigo-200"}`}>
            My Journey
          </span>
          <h1 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} text-center`}>
            Education & <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Experience</span>
          </h1>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} mt-4 max-w-2xl mx-auto text-center`}>
            A journey of continuous learning and professional growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Education Timeline */}
          <div data-aos="fade-right" data-aos-delay="100">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <FaGraduationCap className="text-2xl text-white" />
              </div>
              <div>
                <h2 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Education</h2>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Academic Background</p>
              </div>
            </div>

            <div className="space-y-2">
              {educations.map((edu, index) => (
                <TimelineItem
                  key={edu.id}
                  item={edu}
                  type="education"
                  index={index}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div data-aos="fade-left" data-aos-delay="100">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                <FaBriefcase className="text-2xl text-white" />
              </div>
              <div>
                <h2 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Experience</h2>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Professional Career</p>
              </div>
            </div>

            <div className="space-y-2">
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={exp.id}
                  item={exp}
                  type="experience"
                  index={index}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;