import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-20 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm tracking-[0.15em] text-white/40 uppercase mb-6">06 / Hire Me</p>
        <h2 className="text-5xl md:text-8xl font-bold leading-[1.05] tracking-tighter mb-20">
          Hire me to build your <br className="hidden md:block"/> 
          <span className="text-red-600">next intelligent solution.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <form className="flex flex-col gap-10">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-xl outline-none transition-colors focus:border-red-600 text-white placeholder-white/30"
              />
            </div>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-xl outline-none transition-colors focus:border-red-600 text-white placeholder-white/30"
              />
            </div>
            <div className="relative">
              <textarea 
                placeholder="Message" 
                rows="4"
                className="w-full bg-transparent border-b border-white/20 pb-4 text-xl outline-none transition-colors focus:border-red-600 text-white placeholder-white/30 resize-none"
              />
            </div>
            <button 
              type="submit" 
              className="self-start px-10 py-4 bg-white text-[#050505] font-bold text-sm tracking-widest uppercase hover:bg-red-600 hover:text-white transition-colors duration-300 rounded-full"
            >
              Send Message
            </button>
          </form>

          <div className="flex flex-col justify-between">
            <div>
              <a 
                href="#" 
                className="inline-flex items-center gap-4 px-8 py-4 border border-white/20 rounded-full text-lg font-medium hover:bg-white hover:text-[#050505] transition-all duration-300"
              >
                Download Résumé
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </a>
            </div>

            <div className="mt-16 flex flex-col gap-6">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-white/40 mb-2">Email</span>
                <a href="mailto:kishansadeesh13@gmail.com" className="text-2xl md:text-3xl font-medium hover:text-red-600 transition-colors">
                  kishansadeesh13@gmail.com
                </a>
              </div>
              
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-white/40 mb-2">Phone</span>
                <a href="tel:+919047478386" className="text-2xl md:text-3xl font-medium hover:text-red-600 transition-colors">
                  +91 9047478386
                </a>
              </div>
              
              <div className="flex gap-8 mt-4">
                <a href="https://linkedin.com/in/kishansadeesh" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white/60 hover:text-white border-b border-transparent hover:border-white transition-all pb-1">
                  LinkedIn
                </a>
                <a href="https://github.com/KishanSadeesh" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white/60 hover:text-white border-b border-transparent hover:border-white transition-all pb-1">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
