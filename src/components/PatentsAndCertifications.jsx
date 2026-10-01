import React from 'react';

const PatentsAndCertifications = () => {
  const patents = [
    { title: "Road Degradation Detection System", desc: "Dual-Encoder Spatio-Structural Detection from Satellite Imagery (2026)" },
    { title: "Wearable Safety System", desc: "AI-based Safety System for Integrated Health & Air Quality (App No: 202641029742)" },
    { title: "Health Monitoring Device", desc: "AI-Integrated Wearable with Dual-Mode Emergency Alerts (App No: 202641010447)" }
  ];

  const certs = [
    "Java Foundation Certification (Infosys SpringBoard)",
    "48-Hour Hackathon Participant (Yantra Central, VIT)",
    "HackerRank Java Badge (5-Star Gold)"
  ];

  return (
    <section className="py-32 px-6 md:px-20 border-t border-white/5 bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <p className="text-sm tracking-[0.15em] text-white/40 uppercase mb-4">05 / Research</p>
          <h2 className="text-4xl font-bold tracking-tight mb-12">Patents</h2>
          <div className="flex flex-col gap-6">
            {patents.map((pat, idx) => (
              <div key={idx} className="pb-6 border-b border-white/10 last:border-0 group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">{pat.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{pat.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-4xl font-bold tracking-tight mb-12 mt-10 md:mt-0">Certifications</h2>
          <ul className="flex flex-col gap-6">
            {certs.map((cert, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="text-red-500 mt-1">▹</span>
                <span className="text-lg font-medium text-white/80">{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default PatentsAndCertifications;
