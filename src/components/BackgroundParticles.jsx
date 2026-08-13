const BackgroundParticles = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-indigo-400/10 animate-float"
          style={{
            width: Math.random() * 4 + 2 + "px",
            height: Math.random() * 4 + 2 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            animationDelay: Math.random() * 10 + "s",
            animationDuration: Math.random() * 10 + 5 + "s",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;