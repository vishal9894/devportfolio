import { useCallback, useRef, useState } from "react";

/**
 * Mouse-tracked 3D tilt wrapper.
 * Adds real perspective rotation + a glare highlight + layered depth for children
 * marked with the `z-depth-*` utility classes.
 */
const Tilt3D = ({
  children,
  className = "",
  max = 14,
  scale = 1.02,
  glare = true,
  perspective = 900,
}) => {
  const ref = useRef(null);
  const [transform, setTransform] = useState(
    "perspective(" + perspective + "px)",
  );
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rY = (px - 0.5) * 2 * max;
      const rX = (0.5 - py) * 2 * max;
      setTransform(
        `perspective(${perspective}px) rotateX(${rX.toFixed(2)}deg) rotateY(${rY.toFixed(2)}deg) scale(${scale})`,
      );
      setGlarePos({ x: px * 100, y: py * 100 });
    },
    [max, scale, perspective],
  );

  const handleLeave = useCallback(() => {
    setTransform(
      `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
    );
  }, [perspective]);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card relative ${className}`}
      style={{ transform, transition: "transform 0.15s ease-out" }}
    >
      {children}
      {glare && (
        <div
          className="tilt-glare rounded-[inherit]"
          style={{
            "--glare-x": `${glarePos.x}%`,
            "--glare-y": `${glarePos.y}%`,
          }}
        />
      )}
    </div>
  );
};

export default Tilt3D;
