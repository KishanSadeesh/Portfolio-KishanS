import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorShadow = () => {
  const [mousePosition, setMousePosition] = useState({
    x: -400,
    y: -400
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-64 h-64 bg-[var(--color-accent)] rounded-full blur-[100px] opacity-[0.15] pointer-events-none z-[9999]"
      animate={{
        x: mousePosition.x - 128,
        y: mousePosition.y - 128
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 30,
        mass: 0.5
      }}
      style={{
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default CursorShadow;
