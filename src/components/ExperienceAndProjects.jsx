import React from 'react';

const ExperienceAndProjects = () => {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Coptercode",
      desc: "Developed an AI-powered Resume Builder. Built responsive UI components, integrated APIs, and implemented AI-assisted content generation.",
      tech: ["React.js", "Node.js", "Supabase", "Gen AI (Grok API)"]
    },
    {
      role: "Gen AI and Full Stack Developer Intern",
      company: "Nipurna IT Solutions",
      desc: "Built a serverless backend using AWS Lambda and API Gateway. Integrated Grok API for natural language queries against DynamoDB.",
      tech: ["React.js", "AWS Lambda", "API Gateway", "DynamoDB"]
    }
  ];

  const projects = [
    {
      name: "Project Sentinel (Wearable Fall Detection)",
      desc: "Architected a full-stack IoT system for real-time fall detection with companion app, Twilio emergency SMS pipeline, and Gemini Gen AI wellness coaching.",
      tech: ["Twilio", "Gemini API", "NodeMCU", "IoT"]
    },
    {
      name: "Smart Task Planner",
      desc: "A highly responsive task management system with real-time updates and seamless state management.",
      tech: ["React.js", "Tailwind CSS", "Firebase"]
    },
    {
      name: "IoT-Based Irrigation Automation",
      desc: "Event-driven irrigation control using webhook integrations via IFTTT and ESP microcontrollers.",
      tech: ["ESP8266", "IFTTT", "Adafruit IO", "REST API"]
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm tracking-[0.15em] text-white/40 uppercase mb-4">04 / Experience & Projects</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-16">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-12">Experience</h2>
            <div className="flex flex-col gap-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="p-8 border border-white/10 bg-[#0A0A0C] rounded-2xl overflow-hidden relative group">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-red-500 transition-colors">{exp.role}</h3>
                  <p className="text-red-500 text-sm font-semibold mb-4">{exp.company}</p>
                  <p className="text-white/60 mb-8">{exp.desc}</p>
                  
                  <div className="absolute bottom-0 left-0 w-full bg-white/5 py-2 overflow-hidden border-t border-white/10">
                    <div className="flex w-max animate-[scroll_10s_linear_infinite]">
                      {[...exp.tech, ...exp.tech, ...exp.tech].map((t, i) => (
                        <span key={i} className="mx-4 text-xs tracking-widest uppercase text-white/40 whitespace-nowrap">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="projects">
            <h2 className="text-4xl font-bold tracking-tight mb-12">Systems Engineered</h2>
            <div className="flex flex-col gap-8">
              {projects.map((proj, idx) => (
                <div key={idx} className="p-8 border border-white/10 bg-[#0A0A0C] rounded-2xl overflow-hidden relative group">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-red-500 transition-colors">{proj.name}</h3>
                  <p className="text-white/60 mb-8">{proj.desc}</p>
                  
                  <div className="absolute bottom-0 left-0 w-full bg-white/5 py-2 overflow-hidden border-t border-white/10">
                    <div className="flex w-max animate-[scroll_10s_linear_infinite]">
                      {[...proj.tech, ...proj.tech, ...proj.tech].map((t, i) => (
                        <span key={i} className="mx-4 text-xs tracking-widest uppercase text-white/40 whitespace-nowrap">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ExperienceAndProjects;
