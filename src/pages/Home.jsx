import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import { projects } from '../data/projects';
import clsx from 'clsx';
import { ArrowUp } from 'lucide-react';
import patentSafetyImg from '../assets/AI Wearable Safety.png';
import patentHealthImg from '../assets/Health Monitoring.png';
import patentRoadImg from '../assets/Road Degradation.png';

const TABS = ["All Projects", "Full Stack", "AI and GenAI", "IoT and Embedded", "Cloud"];

const topSkills = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" }
];

const Home = () => {
  const [activeTab, setActiveTab] = useState("All Projects");
  const location = useLocation();

  const actualProjects = projects.filter(p => p.isProject);
  
  const patentsList = projects.filter(p => !p.isProject && p.tabs.includes("Patents"));
  const experienceList = projects.filter(p => !p.isProject && p.tabs.includes("Experience") && p.slug !== "yantra-hackathon");
  const certsList = projects.filter(p => !p.isProject && p.tabs.includes("Certificates"));

  const filteredProjects = activeTab === "All Projects" 
    ? actualProjects 
    : actualProjects.filter(p => p.tabs.includes(activeTab));

  useEffect(() => {
    if (location.hash === '#my-work') {
      const element = document.getElementById('my-work');
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  return (
    <PageTransition title="Home" className="!pt-0">
      <Hero />
      
      {/* Identity Strip */}
      <div className="w-full bg-[var(--color-bg)] border-y border-[var(--color-border)] py-4 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-8 px-4 items-center whitespace-nowrap text-sm tracking-widest uppercase text-[var(--color-muted)] font-medium">
              <span>Full Stack Developer</span>
              <span className="text-[var(--color-accent)]">•</span>
              <span>GenAI Integration Developer</span>
              <span className="text-[var(--color-accent)]">•</span>
              <span>Backend Developer</span>
              <span className="text-[var(--color-accent)]">•</span>
              <span>IoT and Edge AI Builder</span>
              <span className="text-[var(--color-accent)]">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section with Brand Images */}
      <section id="skills" className="py-32 px-6 md:px-20 max-w-7xl mx-auto border-b border-[var(--color-border)]">
         <div className="flex justify-center mb-16">
           <span className="rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium border border-white/10 bg-white/5 text-[var(--color-muted)]">
             01 / Tech Stack
           </span>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {topSkills.map((skill, idx) => (
              <div key={idx} className="p-1.5 rounded-[2rem] bg-white/5 border border-white/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-2 hover:bg-white/10">
                <div className="bg-[var(--color-bg)] rounded-[calc(2rem-6px)] p-8 flex flex-col items-center justify-center gap-4 h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
                  <span className="text-sm font-bold text-white tracking-wide">{skill.name}</span>
                </div>
              </div>
            ))}
         </div>
      </section>

      {/* My Work (Full Portfolio Section) */}
      <section id="my-work" className="py-40 px-6 md:px-20 max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Things I Have <span className="text-[var(--color-accent)]">Built</span></h2>
          <p className="text-lg text-[var(--color-muted)] mb-12">Selected work across web, AI, cloud and hardware, 2024 to 2026.</p>
          <div className="w-12 h-1 bg-[var(--color-accent)] mx-auto rounded-full" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Unique Text-Based Filters (Sidebar) */}
          <div className="lg:col-span-3 flex flex-row overflow-x-auto lg:flex-col gap-2 lg:gap-4 items-start no-scrollbar pb-6 lg:pb-0">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={clsx(
                  "relative text-sm md:text-base font-bold tracking-tight uppercase transition-all duration-300 text-left whitespace-nowrap px-4 py-3 rounded-xl w-full",
                  activeTab === tab ? "bg-[var(--color-accent)] text-white" : "text-[var(--color-muted)] hover:bg-white/5 hover:text-white"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence>
              {filteredProjects.map((proj) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  key={proj.slug}
                >
                  <Link to={`/portfolio/${proj.slug}`} className="group block h-full flex flex-col p-2 rounded-[2rem] bg-white/5 border border-white/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-2 focus-visible:outline focus-visible:outline-[var(--color-accent)] focus-visible:outline-4">
                    <div className="aspect-[16/9] sm:aspect-[21/9] bg-[var(--color-bg)] rounded-[calc(2rem-8px)] overflow-hidden relative flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                       {proj.image ? (
                         <img src={proj.image} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105" />
                       ) : (
                         <span className="text-4xl transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110">💻</span>
                       )}
                       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700" />
                    </div>
                    
                    <div className="mt-6 px-4 pb-4 flex-1 flex flex-col">
                      <p className="text-xl font-medium leading-tight text-white transition-colors">{proj.caption}</p>
                      <div className="mt-auto pt-6 flex flex-wrap gap-2">
                        {proj.stack.slice(0,3).map((tag, i) => (
                          <span key={i} className="text-[10px] uppercase tracking-widest text-[var(--color-muted)] px-3 py-1.5 rounded-full border border-white/10 bg-white/5">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Patents Section */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto border-t border-[var(--color-border)]">
        <h2 className="text-sm tracking-[0.15em] text-[var(--color-muted)] uppercase mb-12 text-center">02 / Patents</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group block h-full flex flex-col p-2 rounded-[2rem] bg-white/5 border border-white/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-2">
            <div className="aspect-[4/3] bg-[var(--color-bg)] rounded-[calc(2rem-8px)] overflow-hidden relative flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] text-center">
               <img src={patentSafetyImg} alt="AI Wearable Safety" className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700 pointer-events-none" />
            </div>
            <div className="mt-6 px-4 pb-4 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">AI Wearable Safety</h3>
              <p className="text-sm text-[var(--color-muted)]">AI-based Wearable Safety System.</p>
            </div>
          </div>

          <div className="group block h-full flex flex-col p-2 rounded-[2rem] bg-white/5 border border-white/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-2">
            <div className="aspect-[4/3] bg-[var(--color-bg)] rounded-[calc(2rem-8px)] overflow-hidden relative flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] text-center">
               <img src={patentHealthImg} alt="Health Monitoring" className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700 pointer-events-none" />
            </div>
            <div className="mt-6 px-4 pb-4 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">Health Monitoring</h3>
              <p className="text-sm text-[var(--color-muted)]">AI-Integrated Wearable Device for Health Monitoring.</p>
            </div>
          </div>

          <div className="group block h-full flex flex-col p-2 rounded-[2rem] bg-white/5 border border-white/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-2">
            <div className="aspect-[4/3] bg-[var(--color-bg)] rounded-[calc(2rem-8px)] overflow-hidden relative flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] text-center">
               <img src={patentRoadImg} alt="Road Degradation" className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700 pointer-events-none" />
            </div>
            <div className="mt-6 px-4 pb-4 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">Road Degradation</h3>
              <p className="text-sm text-[var(--color-muted)]">System for dual-encoder spatio-structural road degradation detection from satellite imagery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Highlights Section */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto border-t border-[var(--color-border)]">
        <h2 className="text-sm tracking-[0.15em] text-[var(--color-muted)] uppercase mb-12 text-center">03 / Extra Highlights</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {experienceList.map((item, idx) => (
            <div key={idx} className="group block h-full flex flex-col p-8 rounded-[2rem] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:bg-white/5">
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">{item.title}</h3>
                <p className="text-sm text-[var(--color-muted)] mb-6 flex-1 leading-relaxed">{item.caption}</p>
                {item.links?.github && (
                  <a href={item.links.github} target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest font-bold text-white hover:text-white/80 transition-colors flex items-center gap-2 mt-auto">
                    View <span className="text-[var(--color-accent)] font-serif text-lg leading-none">→</span>
                  </a>
                )}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto border-t border-[var(--color-border)]">
        <h2 className="text-sm tracking-[0.15em] text-[var(--color-muted)] uppercase mb-12 text-center">04 / Certifications & Achievements</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certsList.map((item, idx) => (
            <div key={idx} className="group block h-full flex flex-col p-8 rounded-[2rem] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:bg-white/5">
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">{item.title}</h3>
                <p className="text-sm text-[var(--color-muted)] flex-1 leading-relaxed">{item.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Banner */}
      <section className="py-40 px-6 text-center max-w-4xl mx-auto border-t border-[var(--color-border)]">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16">
          Have something intelligent to build?
        </h2>
        <Link to="/hire-me" className="group inline-flex items-center gap-4 pl-8 pr-2 py-2 bg-white text-black font-bold text-sm tracking-widest uppercase rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
          Let's Talk
          <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105">
            <span className="transform -rotate-45 block">➔</span>
          </div>
        </Link>
      </section>

    </PageTransition>
  );
};
export default Home;
