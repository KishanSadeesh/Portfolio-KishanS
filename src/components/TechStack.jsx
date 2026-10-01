import React from 'react';

const skills = [
  { name: 'JavaScript', icon: '💛' }, { name: 'Java', icon: '☕' },
  { name: 'Python', icon: '🐍' }, { name: 'React.js', icon: '⚛️' },
  { name: 'Node.js', icon: '🟩' }, { name: 'Supabase', icon: '⚡' },
  { name: 'AWS Lambda', icon: '☁️' }, { name: 'API Gateway', icon: '🚪' },
  { name: 'DynamoDB', icon: '🗄️' }, { name: 'SQL', icon: '🗃️' },
  { name: 'Firebase', icon: '🔥' }, { name: 'Gen AI', icon: '🧠' },
  { name: 'Gemini API', icon: '✨' }, { name: 'Power BI', icon: '📈' },
  { name: 'IoT', icon: '🌐' }, { name: 'Embedded Systems', icon: '⚙️' },
  { name: 'Deep Learning', icon: '🕸️' }, { name: 'Computer Vision', icon: '👁️' },
  { name: 'Git', icon: '🔀' }, { name: 'REST APIs', icon: '🔌' }
];

const TechStack = () => {
  return (
    <section id="skills" className="py-32 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm tracking-[0.15em] text-white/40 uppercase mb-4">03 / Tech Stack</p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16 max-w-3xl">
          Tools I build with.
        </h2>
        
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md cursor-default transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white hover:border-white shadow-lg hover:shadow-red-600/20"
            >
              <span className="text-xl">{skill.icon}</span>
              <span className="font-semibold text-white group-hover:text-[#050505] tracking-wide text-sm md:text-base">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TechStack;
