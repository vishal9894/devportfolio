import { motion } from "framer-motion";
import { BiArrowToTop } from "react-icons/bi";

const ScrollToTop = ({ show }) => {
  if (!show) return null;

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-indigo-500 to-cyan-500 p-4 rounded-full text-white shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 z-50 group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      <BiArrowToTop className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
    </motion.button>
  );
};

export default ScrollToTop;