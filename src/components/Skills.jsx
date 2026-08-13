import { motion } from "framer-motion";
import { FaReact, FaDatabase, FaTools } from "react-icons/fa";
import { RiComputerLine, RiServerLine } from "react-icons/ri";
import { useTheme } from "../context/ThemeContext";
import { skillsData, additionalSkills } from "../data/data";

const categoryIcons = {
  frontend: FaReact,
  backend: RiServerLine,
  database: FaDatabase,
  tools: FaTools,
};

const categoryDescriptions = {
  frontend: "UI/UX Development",
  backend: "Server Development",
  database: "Data Management",
  tools: "DevOps & Tools",
};

const getSkillColor = (color, isDark) => {
  const colorMap = {
    indigo: isDark ? "text-indigo-400" : "text-indigo-600",
    cyan: isDark ? "text-cyan-400" : "text-cyan-600",
    emerald: isDark ? "text-emerald-400" : "text-emerald-600",
    violet: isDark ? "text-violet-400" : "text-violet-600",
  };
  return colorMap[color] || colorMap.indigo;
};

const getBarGradient = (color) => {
  const gradientMap = {
    indigo: "from-indigo-500 to-indigo-400",
    cyan: "from-cyan-500 to-cyan-400",
    emerald: "from-emerald-500 to-emerald-400",
    violet: "from-violet-500 to-violet-400",
  };
  return gradientMap[color] || gradientMap.indigo;
};

const Skills = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="skill" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="relative mb-16 text-center" data-aos="fade-up">
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${isDarkMode ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" : "bg-indigo-50 text-indigo-600 border border-indigo-200"}`}>
            My Expertise
          </span>
          <h1 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Skills & <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Technologies</span>
          </h1>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className={`mt-4 max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Leveraging modern technologies to build scalable and performant web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {Object.entries(skillsData).map(([category, skills], idx) => {
            const CategoryIcon = categoryIcons[category] || FaTools;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group ${isDarkMode ? "bg-slate-800/60 border-slate-700 hover:border-indigo-500/50" : "bg-white/80 border-gray-200 hover:border-indigo-400/50"} backdrop-blur-sm rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden`}
              >
                <div className="relative p-6 pb-0">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-2xl"></div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CategoryIcon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} capitalize`}>{category}</h3>
                      <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                        {categoryDescriptions[category]}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0 space-y-4">
                  {skills.map((skill, idx2) => (
                    <div key={idx2} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <skill.icon className={`w-4 h-4 ${getSkillColor(skill.color, isDarkMode)}`} />
                          <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{skill.skill}</span>
                        </div>
                        <span className={`text-sm font-semibold ${getSkillColor(skill.color, isDarkMode)}`}>
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className={`h-2 ${isDarkMode ? "bg-slate-700" : "bg-gray-200"} rounded-full overflow-hidden`}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 1, delay: idx2 * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${getBarGradient(skill.color)}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20" data-aos="fade-up" data-aos-delay="500">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                <FaTools className="w-5 h-5 text-white" />
              </div>
              <h2 className={`text-2xl md:text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Additional Skills</h2>
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
                className={`group relative ${isDarkMode ? "bg-slate-800/80 border-slate-700 hover:border-indigo-500/50" : "bg-white/90 border-gray-200 hover:border-indigo-400/50"} backdrop-blur-sm rounded-2xl border transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/10 group-hover:to-indigo-500/5 transition-all duration-500"></div>
                <div className="px-5 py-3 flex items-center gap-3 relative z-10">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${isDarkMode ? "bg-slate-700" : "bg-gray-100"}`}>
                    <skill.icon className={`w-4 h-4 ${skill.color}`} />
                  </div>
                  <span className={`font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"} group-hover:text-indigo-500 transition-colors duration-300`}>{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;