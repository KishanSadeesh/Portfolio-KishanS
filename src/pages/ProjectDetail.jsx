import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { slug } = useParams();
  
  const currentIndex = projects.findIndex(p => p.slug === slug);
  
  if (currentIndex === -1) {
    return <Navigate to="/portfolio" replace />;
  }
  
  const project = projects[currentIndex];
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 50); // Double-ensure for framer-motion exit animations
  }, [slug]);

  return (
    <PageTransition title={project.title} description={project.caption}>
      <div className="px-6 md:px-20 max-w-4xl mx-auto py-16 pb-32">
        
        {/* Hero */}
        <header className="mb-24 text-center">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {project.tabs.map((tab, i) => (
              <span key={i} className="px-3 py-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full text-xs uppercase tracking-widest text-[var(--color-muted)]">
                {tab}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">{project.caption}</h1>
          <div className="flex justify-center gap-6 text-[var(--color-muted)] uppercase tracking-widest text-sm font-semibold">
            <span>{project.source}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>
        </header>

        {/* Cover Image */}
        <div className="w-full aspect-video rounded-[2rem] overflow-hidden mb-24 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-white/10 bg-[var(--color-bg)] flex items-center justify-center">
           {project.image ? (
             <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
           ) : (
             <span className="text-5xl opacity-50">💻</span>
           )}
        </div>

        {/* Content */}
        <div className="flex flex-col gap-20">
          
          {project.problem && project.problem !== "N/A" && (
            <section>
              <h2 className="text-sm tracking-[0.15em] text-[var(--color-accent)] uppercase mb-6 font-bold">The Problem</h2>
              <p className="text-xl md:text-2xl leading-relaxed text-[var(--color-muted)]">{project.problem}</p>
            </section>
          )}

          <section>
            <h2 className="text-sm tracking-[0.15em] text-[var(--color-accent)] uppercase mb-6 font-bold">What I Built</h2>
            <p className="text-xl md:text-2xl leading-relaxed text-[var(--color-muted)]">{project.whatIBuilt}</p>
            <p className="mt-6 text-lg text-[var(--color-muted)] leading-relaxed">{project.details}</p>
          </section>

          {project.howItWorks && project.howItWorks.length > 0 && (
            <section>
              <h2 className="text-sm tracking-[0.15em] text-[var(--color-accent)] uppercase mb-6 font-bold">How It Works</h2>
              <ul className="flex flex-col gap-4">
                {project.howItWorks.map((step, i) => (
                  <li key={i} className="flex gap-4 items-start p-6 glass-panel rounded-xl">
                    <span className="text-[var(--color-accent)] font-bold text-lg">{i + 1}.</span>
                    <span className="text-lg text-white/90">{step}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2 className="text-sm tracking-[0.15em] text-[var(--color-accent)] uppercase mb-6 font-bold">Tech Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech, i) => (
                <span key={i} className="px-5 py-2 glass-panel rounded-full font-medium text-[var(--color-muted)]">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm tracking-[0.15em] text-[var(--color-accent)] uppercase mb-6 font-bold">Highlights</h2>
            <ul className="list-disc list-inside text-lg text-[var(--color-muted)] flex flex-col gap-3">
              {project.highlights.map((hl, i) => (
                <li key={i}>{hl}</li>
              ))}
            </ul>
          </section>

          {project.links && Object.keys(project.links).length > 0 && (
            <section className="pt-8 border-t border-[var(--color-border)]">
              <div className="flex gap-6">
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noreferrer" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors">
                    Live Demo
                  </a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noreferrer" className="px-8 py-4 border border-[var(--color-border)] text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-black transition-colors">
                    GitHub Repo
                  </a>
                )}
              </div>
            </section>
          )}

        </div>

        {/* Footer Navigation */}
        <nav className="mt-32 pt-16 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex-1 w-full">
            {prevProject && (
              <Link to={`/portfolio/${prevProject.slug}`} className="group flex flex-col items-start">
                <span className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Previous</span>
                <span className="text-xl font-bold transition-colors">{prevProject.title}</span>
              </Link>
            )}
          </div>
          
          <div className="flex-1 w-full text-center">
            <Link to="/hire-me" className="inline-block px-8 py-4 border border-[var(--color-accent)] text-[var(--color-accent)] font-bold uppercase tracking-widest text-sm rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors">
              Hire Me
            </Link>
          </div>

          <div className="flex-1 w-full text-right flex justify-end">
             {nextProject && (
              <Link to={`/portfolio/${nextProject.slug}`} className="group flex flex-col items-end">
                <span className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Next</span>
                <span className="text-xl font-bold transition-colors">{nextProject.title}</span>
              </Link>
            )}
          </div>
        </nav>

      </div>
    </PageTransition>
  );
};
export default ProjectDetail;
