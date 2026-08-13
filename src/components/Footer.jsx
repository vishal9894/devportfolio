import { useTheme } from "../context/ThemeContext";
import { navItems, profile, socialLinks } from "../data/data";

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`${isDarkMode ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-gray-200"} py-12 border-t`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="mb-4 md:mb-0" data-aos="fade-right">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">VK</span>
              </div>
              <span className={`font-bold text-xl ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Vishal<span className="text-indigo-500">.dev</span>
              </span>
            </div>
            <p className={`${isDarkMode ? "text-gray-500" : "text-gray-400"} mt-2`}>Full Stack Developer</p>
          </div>

          <div className="flex gap-6" data-aos="fade-left">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`${isDarkMode ? "text-gray-400 hover:text-indigo-400" : "text-gray-500 hover:text-indigo-600"} transition-colors text-sm`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          <div className="flex gap-3" data-aos="fade-up">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className={`w-10 h-10 rounded-full ${isDarkMode ? "bg-slate-800 hover:bg-indigo-500" : "bg-gray-100 hover:bg-indigo-500"} flex items-center justify-center transition-all duration-300 group`}
              >
                <social.icon className={`${isDarkMode ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-white"} text-sm`} />
              </a>
            ))}
          </div>
        </div>

        <div className={`${isDarkMode ? "border-slate-800" : "border-gray-200"} border-t mt-8 pt-8 text-center`} data-aos="fade-up">
          <p className={isDarkMode ? "text-gray-500" : "text-gray-400"}>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className={`${isDarkMode ? "text-gray-600" : "text-gray-500"} text-sm mt-2`}>
            Designed & Developed with <span className="text-red-500">❤️</span> by {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;