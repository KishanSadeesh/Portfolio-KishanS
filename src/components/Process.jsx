import React from 'react';

const Process = () => {
  const steps = [
    {
      title: "Strategy & Cloud Architecture",
      desc: "Designing scalable, serverless infrastructures and REST APIs using AWS (Lambda, API Gateway, DynamoDB) and Node.js for robust performance."
    },
    {
      title: "AI & Data Integration",
      desc: "Engineering intelligent workflows by integrating Large Language Models (Gen AI) and processing diverse datasets to create meaningful product insights."
    },
    {
      title: "End-to-End Product Delivery",
      desc: "Bridging the gap between hardware and software—from IoT devices (ESP32) and real-time syncing (Supabase) to interactive React frontends."
    }
  ];

  return (
    <section className="py-32 px-6 md:px-20 border-t border-white/5 bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm tracking-[0.15em] text-white/40 uppercase mb-4">02 / Value Proposition</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-20 max-w-2xl">
          An engineering approach <br/> focused on impact.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-5xl font-bold text-white/10 mb-6">0{idx + 1}</span>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/60 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Process;
