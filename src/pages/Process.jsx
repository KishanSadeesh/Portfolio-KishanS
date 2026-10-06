import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { skills } from '../data/skills';

const Process = () => {
  const steps = [
    {
      title: "1. Plan the Cloud Foundation",
      desc: "AWS Lambda, API Gateway, DynamoDB, Supabase"
    },
    {
      title: "2. Weave in Intelligence",
      desc: "LLM APIs, prompt design, data flows"
    },
    {
      title: "3. Ship It End to End",
      desc: "Hardware or API to React interface, deployment"
    }
  ];

  const toolbelt = ["Git", "GitHub", "Postman", "Twilio", "AWS Amplify"];

  return (
    <PageTransition title="Process" description="How an Idea Becomes a Product.">
      <div className="px-6 md:px-20 max-w-7xl mx-auto py-16">
        
        <header className="mb-24">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">How an Idea Becomes a Product.</h1>
        </header>

        {/* 3-Column Grid */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-2xl flex flex-col justify-between min-h-[240px] md:aspect-square"
              >
                <h3 className="text-2xl font-bold mb-4 leading-tight">{step.title}</h3>
                <p className="text-[var(--color-muted)]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech Stack Grouped */}
        <section className="mb-32">
          <h2 className="text-sm tracking-[0.15em] text-[var(--color-muted)] uppercase mb-12">01 / Tech Stack</h2>
          <div className="flex flex-col gap-12">
            {skills.filter(s => s.group !== 'Tools' && s.group !== 'Concepts').map((group, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-[var(--color-border)] pb-8 last:border-0">
                <h3 className="text-xl font-bold text-[var(--color-muted)]">{group.group}</h3>
                <div className="md:col-span-3 flex flex-wrap gap-3">
                  {group.items.map((item, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-[0_4px_14px_rgba(255,0,0,0.4)] transition-all cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Toolbelt */}
        <section className="mb-24">
          <h2 className="text-sm tracking-[0.15em] text-[var(--color-muted)] uppercase mb-8">02 / Toolbelt</h2>
          <div className="flex flex-wrap gap-4">
            {toolbelt.map((tool, idx) => (
              <span key={idx} className="px-6 py-3 bg-[var(--color-border)] rounded-full text-lg font-bold">
                {tool}
              </span>
            ))}
          </div>
        </section>

      </div>
    </PageTransition>
  );
};
export default Process;
