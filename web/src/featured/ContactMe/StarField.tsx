import * as motion from "motion/react-client";

function generateStars(count: number) {
  return Array.from({ length: count }).map(() => ({
    size: Math.random() * 3 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    opacity: Math.random() * 0.8 + 0.2,

    dx: Math.random() * 40 - 20, // random horizontal drift
    dy: Math.random() * 30 - 15, // random vertical drift
    speed: Math.random() * 4 + 2, // lebih cepat (2–6 detik)
    delay: Math.random() * 3,
  }));
}

const STAR_CACHE = generateStars(60);

export function StarField() {
  return (
    <>
      {STAR_CACHE.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            top: `${star.top}%`,
            left: `${star.left}%`,
            opacity: star.opacity,
            zIndex: 1,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            x: [0, star.dx, 0],
            y: [0, star.dy, 0],
          }}
          transition={{
            duration: star.speed,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}
    </>
  );
}
