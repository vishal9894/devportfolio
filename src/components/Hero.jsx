import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { BiDownArrow } from "react-icons/bi";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import Tilt3D from "./Tilt3D";
import { useTheme } from "../context/ThemeContext";
import { profile, socialLinks, stats } from "../data/data";

const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className={`absolute inset-0 ${isDarkMode ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" : "bg-gradient-to-br from-slate-50 via-white to-slate-100"}`}></div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float3d"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float3d" style={{ animationDelay: "-3s" }}></div>

      {/* 3D perspective grid floor */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden pointer-events-none opacity-70">
        <div className="grid-floor w-full h-full"></div>
      </div>

      {/* Floating 3D solids */}
      <div className="absolute top-1/4 right-[8%] hidden lg:block perspective-800 pointer-events-none">
        <div className="animate-spin3d preserve-3d w-16 h-16">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 rounded-lg border border-indigo-400/40"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-emerald-500/30 rounded-lg border border-cyan-400/40 translate-x-3 translate-y-3 -rotate-6"></div>
        </div>
      </div>
      <div className="absolute top-1/3 left-[6%] hidden lg:block pointer-events-none">
        <div className="w-10 h-10 rotate-45 bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 border border-emerald-400/40 rounded-md animate-float3d shadow-3d"></div>
      </div>

      <div className="container mx-auto px-4 py-20 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Image — 3D tilt card with orbiting rings */}
          <motion.div
            className="relative group perspective-1400"
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            {/* Orbiting rings */}
            <div className="absolute -inset-16 pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 animate-orbit"></div>
              <div className="absolute inset-4 rounded-full border border-cyan-500/40 animate-orbit-rev">
                <span className="absolute top-1/2 -left-1.5 w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"></span>
              </div>
              <div className="absolute -inset-6 rounded-full border border-dashed border-indigo-400/20 animate-spin3d"></div>
            </div>

            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 rounded-[2.5rem] opacity-60 blur-2xl group-hover:opacity-100 transition-all duration-500"></div>
            <Tilt3D max={10} scale={1.03} className="rounded-[2.5rem]">
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 preserve-3d">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-cyan-600 rounded-[2.5rem] transform rotate-6 translate-z-0 group-hover:rotate-12 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500 to-emerald-500 rounded-[2.5rem] transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-3d border-2 border-white/20" style={{ transform: "translateZ(50px)" }}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-shimmer"></div>
                  <img src={profile.images.profile} alt={profile.name} className="w-full h-full object-cover object-center" />
                </div>
                {/* Floating name chip above the photo */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold shadow-3d whitespace-nowrap" style={{ transform: "translateZ(80px) translateX(-50%)" }}>
                  {profile.name}
                </div>
              </div>
            </Tilt3D>
            <motion.div
              className="absolute -top-4 -right-4 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-3d"
              animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ transform: "translateZ(100px)" }}
            >
              🚀 Available
            </motion.div>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            className="text-center lg:text-left space-y-6 max-w-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-2">
              <motion.div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${isDarkMode ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" : "bg-indigo-50 text-indigo-600 border border-indigo-200"} text-sm font-medium`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Open to opportunities
              </motion.div>

              <motion.h1
                className={`text-3xl md:text-4xl ${isDarkMode ? "text-indigo-400" : "text-indigo-600"} font-light`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                Hi, I'm
              </motion.h1>

              <motion.h2
                className={`text-5xl md:text-7xl font-bold text-3d ${isDarkMode ? "bg-gradient-to-r from-white via-gray-200 to-gray-400" : "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500"} bg-clip-text text-transparent`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {profile.name}
              </motion.h2>

              <div className="h-16 md:h-20">
                <TypeAnimation
                  sequence={profile.typedSequences}
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
              {profile.heroDescription}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-full font-semibold shadow-3d hover:shadow-xl transform hover:-translate-y-1 hover:rotate-x-3 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <FaArrowRight className="text-sm" />
                Let's Talk
              </a>
              <button className={`px-8 py-3 ${isDarkMode ? "bg-slate-800/80 border-slate-600 hover:bg-slate-700" : "bg-white/80 border-gray-300 hover:bg-gray-100"} backdrop-blur-sm border rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${isDarkMode ? "text-white" : "text-gray-800"} inline-flex items-center justify-center gap-2`}>
                <FaDownload className="text-sm" />
                Download CV
              </button>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center lg:justify-start pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`w-11 h-11 rounded-full ${isDarkMode ? "bg-slate-800 hover:bg-indigo-500" : "bg-gray-100 hover:bg-indigo-500"} flex items-center justify-center transition-all duration-300 group shadow-md`}
                >
                  <social.icon className={`${isDarkMode ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-white"} text-lg`} />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>

       
      </div>

      <div className="absolute lg:block hidden bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <BiDownArrow className={`text-3xl ${isDarkMode ? "text-gray-400" : "text-gray-500"}`} />
      </div>
    </section>
  );
};

export default Hero;