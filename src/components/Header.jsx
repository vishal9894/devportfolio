import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiSun, BiMoon } from "react-icons/bi";
import { useTheme } from "../context/ThemeContext";
import { navItems, socialLinks, profile } from "../data/data";

const Header = ({ showHeader }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showHeader
          ? `${isDarkMode ? "bg-slate-900/90 backdrop-blur-xl shadow-2xl" : "bg-white/90 backdrop-blur-xl shadow-lg"} py-3`
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">VK</span>
            </div>
            <span className={`font-bold text-xl ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Vishal<span className="text-indigo-500">.dev</span>
            </span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className={`${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} font-medium transition-colors relative group text-sm tracking-wide`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-white text-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              Hire Me
            </motion.a>
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full ${isDarkMode ? "bg-slate-800 text-yellow-400" : "bg-gray-100 text-gray-700"} transition-all duration-300 hover:scale-110`}
            >
              {isDarkMode ? <BiSun className="w-5 h-5" /> : <BiMoon className="w-5 h-5" />}
            </button>
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full ${isDarkMode ? "bg-slate-800 text-yellow-400" : "bg-gray-100 text-gray-700"} transition-all duration-300`}
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
                isDarkMode ? "border-slate-700" : "border-gray-200"
              } relative`}
            >
              <div
                className={`absolute inset-0 ${
                  isDarkMode
                    ? "bg-slate-900/95 backdrop-blur-xl"
                    : "bg-white/95 backdrop-blur-xl"
                } -z-10 rounded-2xl`}
              />
              <div className="relative z-10 px-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`block py-3 px-4 rounded-xl ${
                      isDarkMode
                        ? "text-gray-300 hover:text-white hover:bg-slate-800/50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                    } transition-all duration-300 font-medium`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </div>
                  </a>
                ))}

                <div className={`my-3 h-px ${isDarkMode ? "bg-slate-700" : "bg-gray-200"}`} />

                <a
                  href="#contact"
                  className="w-full mt-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-center block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hire Me
                </a>

                <div className="flex justify-center gap-4 mt-6 pt-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className={`w-10 h-10 rounded-full ${
                        isDarkMode ? "bg-slate-800/80" : "bg-gray-100/80"
                      } ${social.hoverColor} flex items-center justify-center transition-all duration-300 group`}
                    >
                      <social.icon className={`${isDarkMode ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-white"} text-lg`} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;