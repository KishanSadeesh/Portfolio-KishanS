import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const GoToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const el = document.getElementById('skills');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed bottom-12 right-0 z-50"
        >
          <button
            onClick={scrollToTop}
            className="flex items-center justify-start w-16 p-4 bg-[var(--color-accent)] text-white rounded-l-full shadow-[-5px_0_20px_rgba(255,0,0,0.3)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] translate-x-[70%] hover:translate-x-0 group"
            aria-label="Go to top"
          >
            <ArrowUp size={24} className="min-w-[24px] group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GoToTop;
