import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Quality from "./components/Quality";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackgroundParticles from "./components/BackgroundParticles";

const MainContent = () => {
  const { isDarkMode } = useTheme();
  const [showHeader, setShowHeader] = useState(false);

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

  return (
    <div className={`${isDarkMode ? "dark" : ""} transition-colors duration-300`}>
      <div
        className={`${isDarkMode ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" : "bg-gradient-to-br from-slate-50 via-white to-slate-100"} w-full overflow-hidden min-h-screen transition-colors duration-300`}
      >
        {isDarkMode && <BackgroundParticles />}

        <Header showHeader={showHeader} />
        <Hero />
        <About />
        <Quality />
        <Skills />
        <Projects />
        <Contact />
        <Footer />

        <ScrollToTop show={showHeader} />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
};

export default App;