import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import GoToTop from './components/GoToTop';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Personae from './pages/Personae';
import Process from './pages/Process';
import HireMe from './pages/HireMe';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Custom wrapper for AnimatePresence to work with Routes
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:slug" element={<ProjectDetail />} />
        <Route path="/identity" element={<Personae />} />
        <Route path="/engineering" element={<Process />} />
        <Route path="/hire-me" element={<HireMe />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen font-sans selection:bg-[var(--color-accent)] selection:text-white overflow-x-hidden">
          <ScrollToTop />
          <Navbar />
          <GoToTop />
          <AnimatedRoutes />
          <footer className="py-8 text-center border-t border-[var(--color-border)] bg-[var(--color-bg)] z-10 relative">
            <p className="text-sm text-[var(--color-muted)] tracking-wider">
              © 2026 Kishan S. All rights reserved.
            </p>
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
