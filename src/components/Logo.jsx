import { motion } from "framer-motion";

// Glassy, textless "VK" monogram.
// Frosted-glass panel (semi-transparent fill + subtle border + inner highlight)
// with interlocking rounded strokes forming V + K, gradient-colored with glow.
const Logo = ({ className = "w-10 h-10", ...props }) => {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      whileHover={{ rotate: [-8, 8, -4, 4, 0] }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      {...props}
    >
      <defs>
        <linearGradient id="vkA" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#67e8f9" />
        </linearGradient>
        <linearGradient id="vkB" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0abfc" />
          <stop offset="100%" stopColor="#fda4af" />
        </linearGradient>
        <linearGradient id="vkRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="50%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="vkGlass" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id="vkEdge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.15" />
        </linearGradient>
        <filter id="vkGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Frosted glass panel */}
      <rect x="3" y="3" width="94" height="94" rx="26" fill="url(#vkGlass)" />
      <rect
        x="3"
        y="3"
        width="94"
        height="94"
        rx="26"
        fill="none"
        stroke="url(#vkEdge)"
        strokeWidth="1.4"
        opacity="0.9"
      />
      <rect
        x="3"
        y="3"
        width="94"
        height="94"
        rx="26"
        fill="none"
        stroke="url(#vkRing)"
        strokeWidth="1.1"
        opacity="0.55"
      />

      {/* V - left arm */}
      <path
        d="M 26 22 L 50 72"
        stroke="url(#vkA)"
        strokeWidth="13"
        strokeLinecap="round"
        filter="url(#vkGlow)"
      />
      {/* V right arm / K stem */}
      <path
        d="M 50 72 L 74 22"
        stroke="url(#vkB)"
        strokeWidth="13"
        strokeLinecap="round"
        filter="url(#vkGlow)"
      />
      {/* K - upper arm */}
      <path
        d="M 62 47 L 80 22"
        stroke="url(#vkB)"
        strokeWidth="13"
        strokeLinecap="round"
        filter="url(#vkGlow)"
      />
      {/* K - lower arm */}
      <path
        d="M 62 47 L 80 72"
        stroke="url(#vkA)"
        strokeWidth="13"
        strokeLinecap="round"
        filter="url(#vkGlow)"
      />
    </motion.svg>
  );
};

export default Logo;