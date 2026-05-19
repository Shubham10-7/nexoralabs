'use client';
import React, { useRef, useEffect } from 'react';

const steps = [
  {
    num: '01',
    title: 'Submit Idea',
    desc: 'Share your project concept, requirements, and deadline via our contact form.',
  },
  {
    num: '02',
    title: 'Meet the Team',
    desc: 'We schedule a quick call to understand scope and assign the right developer.',
  },
  {
    num: '03',
    title: 'Get Quotation',
    desc: 'Receive a transparent, student-friendly quote within 24 hours.',
  },
  {
    num: '04',
    title: 'Track Progress',
    desc: 'Monitor milestones, review code, and give feedback in real-time.',
  },
  {
    num: '05',
    title: 'Receive Project',
    desc: 'Get full source code, documentation, and deployment-ready build.',
  },
  {
    num: '06',
    title: 'Present with Confidence',
    desc: 'We help you prepare for your viva and presentation with mock Q&A support.',
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.step-reveal');
            items.forEach((item, i) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = '1';
                (item as HTMLElement).style.transform = 'translateY(0)';
              }, i * 100);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-24 px-6 md:px-8 relative overflow-hidden">
      <div className="blob-primary absolute w-[600px] h-[600px] -bottom-40 -left-40 pointer-events-none opacity-30" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <span className="section-label mx-auto">Simple Process</span>
          <h2 className="text-section-title text-white">
            From Idea to{' '}
            <span className="gradient-text">Presentation.</span>
          </h2>
          <p className="text-[#8A9BB5] text-sm max-w-lg mx-auto leading-relaxed">
            Six straightforward steps — no confusion, no surprises. Just a
            smooth path from your rough idea to a polished, submitted project.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="step-reveal glass-card-hover rounded-sm p-7 flex flex-col gap-4 group relative overflow-hidden"
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              {/* Large background number */}
              <span
                className="absolute -top-2 -right-1 text-[5rem] font-black text-white/[0.03] leading-none select-none pointer-events-none font-mono"
                aria-hidden="true"
              >
                {step.num}
              </span>

              {/* Step number badge */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 flex items-center justify-center border text-sm font-black font-mono"
                  style={{
                    borderColor: i % 2 === 0 ? 'rgba(255,10,47,0.5)' : 'rgba(0,212,255,0.4)',
                    color: i % 2 === 0 ? '#FF0A2F' : '#00D4FF',
                    boxShadow: i % 2 === 0 ? '0 0 15px rgba(255,10,47,0.2)' : '0 0 15px rgba(0,212,255,0.15)',
                  }}
                >
                  {step.num}
                </div>
                <div className="flex-1 h-px" style={{ background: i % 2 === 0 ? 'rgba(255,10,47,0.2)' : 'rgba(0,212,255,0.15)' }} />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-white font-black text-sm uppercase tracking-wide">{step.title}</h3>
                <p className="text-[#5A6A85] text-xs leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}