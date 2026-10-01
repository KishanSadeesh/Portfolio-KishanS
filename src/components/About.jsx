import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        <div>
          <p className="text-sm tracking-[0.15em] text-white/40 uppercase mb-4">01 / Personae</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            I build intelligent, <br className="hidden md:block"/>
            scalable, and user-focused software.
          </h2>
        </div>
        <div className="flex flex-col gap-10 pt-4 md:pt-12 text-lg text-white/70">
          <p>
            <strong className="text-white">Software Engineer • Full Stack Developer • AI Engineer • Backend Developer</strong><br/><br/>
            I specialize in developing modern web applications, scalable backend systems, and AI-powered solutions that solve real-world problems. With hands-on experience across the full stack—from responsive frontends (React.js) to cloud-native architectures (AWS Lambda, DynamoDB) and Generative AI integrations (Gemini, Grok API).
          </p>
          <div className="p-6 border border-white/10 bg-white/5 rounded-2xl">
            <h3 className="text-white font-bold mb-2">Vellore Institute of Technology</h3>
            <p className="text-white/60 mb-1">B.Tech in Computer Science Engineering (IoT Specialization)</p>
            <p className="text-red-500 font-semibold text-sm">8.33 CGPA</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
