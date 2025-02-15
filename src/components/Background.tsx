import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const Background = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const parallaxX = useTransform(cursorXSpring, [0, window.innerWidth], [-20, 20]);
  const parallaxY = useTransform(cursorYSpring, [0, window.innerHeight], [-20, 20]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020817] cursor-none overflow-hidden">
      {/* Updated gradient background */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-b from-[#020817] via-[#0446c5]/10 to-[#020817]"
        animate={{
          backgroundPosition: ['0%', '100%', '0%'],
        }}
        style={{
          x: parallaxX,
          y: parallaxY,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Enhanced cursor effects */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      >
        {/* Outer glow */}
        <motion.div
          className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 bg-blue-400/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        {/* Inner cursor */}
        <motion.div
          className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-blue-400 rounded-full"
          animate={{
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        />
      </motion.div>
      
      {/* Updated particles */}
      <div className="fixed inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-blue-400/30"
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
              x: mousePosition.x * window.innerWidth + Math.sin(i) * 50,
              y: mousePosition.y * window.innerHeight + Math.cos(i) * 50,
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              repeatDelay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
