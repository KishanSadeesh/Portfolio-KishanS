import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { identityCards, story } from '../data/personae';
import { experience, education } from '../data/experience';
import { projects } from '../data/projects';

const Personae = () => {
  const patents = projects.find(p => p.slug === "research-patents");

  return (
    <PageTransition title="Personae" description="Developer, builder of AI products, and a hardware tinkerer.">
      <div className="px-6 md:px-20 max-w-7xl mx-auto py-16">
        
        {/* Header */}
        <header className="mb-24">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">The People Behind the Code</h1>
          <p className="text-xl text-[var(--color-muted)] max-w-2xl">
            Developer, builder of AI products, and a hardware tinkerer.
          </p>
        </header>

        {/* Identity Cards */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {identityCards.map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Story Block */}
        <section className="mb-32">
          <h2 className="text-sm tracking-[0.15em] text-[var(--color-muted)] uppercase mb-6">01 / Story</h2>
          <p className="text-xl md:text-2xl text-[var(--color-muted)] leading-relaxed max-w-4xl">
            {story}
          </p>
        </section>

        {/* Timeline */}
        <section className="mb-32">
          <h2 className="text-sm tracking-[0.15em] text-[var(--color-muted)] uppercase mb-12">02 / Timeline</h2>
          <div className="flex flex-col gap-12 border-l border-[var(--color-border)] pl-8 ml-4">
            
            <div className="relative">
              <div className="absolute w-3 h-3 bg-[var(--color-accent)] rounded-full -left-[38px] top-2 shadow-[0_0_10px_red]" />
              <h3 className="text-2xl font-bold">{education.degree}</h3>
              <p className="text-[var(--color-muted)] mt-1">{education.institution}</p>
              <p className="text-sm font-semibold text-[var(--color-accent)] mt-2">CGPA {education.cgpa} • {education.date}</p>
            </div>

            {experience.map((exp, idx) => (
              <div key={idx} className="relative">
                <div className="absolute w-3 h-3 bg-[var(--color-border)] rounded-full -left-[38px] top-2" />
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <p className="text-[var(--color-muted)] mt-1">{exp.company} {exp.location && `• ${exp.location}`}</p>
                <p className="text-sm text-[var(--color-muted)] mt-2">{exp.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research and Recognition */}
        <section className="mb-32">
          <h2 className="text-sm tracking-[0.15em] text-[var(--color-muted)] uppercase mb-12">03 / Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">3 published patent applications</h3>
              <ul className="flex flex-col gap-4 text-[var(--color-muted)] leading-relaxed">
                <li className="flex gap-4 items-start"><span className="text-[var(--color-accent)] font-mono">01</span> AI-based Wearable Safety System</li>
                <li className="flex gap-4 items-start"><span className="text-[var(--color-accent)] font-mono">02</span> AI-Integrated Wearable Device for Health Monitoring</li>
                <li className="flex gap-4 items-start"><span className="text-[var(--color-accent)] font-mono">03</span> System for dual-encoder spatio-structural road degradation detection from satellite imagery</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Certifications & Awards</h3>
              <ul className="flex flex-col gap-4 text-[var(--color-muted)]">
                <li>• Java Foundation Certification (Infosys SpringBoard)</li>
                <li>• HackerRank Java 5-Star Gold Badge</li>
                <li>• Yantra Central 48-hour hackathon participant</li>
                <li>• Forecasting Using Machine Learning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Closing Button */}
        <div className="pb-16 flex justify-start">
          <Link to="/engineering" className="group inline-flex items-center gap-4 pl-8 pr-2 py-2 bg-white text-black font-bold text-sm tracking-widest uppercase rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
            See how I work
            <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105">
              <span className="transform -rotate-45 block">➔</span>
            </div>
          </Link>
        </div>

      </div>
    </PageTransition>
  );
};
export default Personae;
