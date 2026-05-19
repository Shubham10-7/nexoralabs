'use client';
import React, { useRef, useEffect } from 'react';

const steps = [
  {
    num: '01',
    icon: '💡',
    title: 'Submit Idea',
    desc: 'Share your project concept, requirements, and deadline via our contact form.',
  },
  {
    num: '02',
    icon: '🤝',
    title: 'Meet the Team',
    desc: 'We schedule a quick call to understand scope and assign the right developer.',
  },
  {
    num: '03',
    icon: '📋',
    title: 'Get Quotation',
    desc: 'Receive a transparent, student-friendly quote within 24 hours.',
  },
  {
    num: '04',
    icon: '📊',
    title: 'Track Progress',
    desc: 'Monitor milestones, review code, and give feedback in real-time.',
  },
  {
    num: '05',
    icon: '📦',
    title: 'Receive Project',
    desc: 'Get full source code, documentation, and deployment-ready build.',
  },
  {
    num: '06',
    icon: '🎓',
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
      <div
        className="blob-primary absolute w-[600px] h-[600px] -bottom-40 -left-40 pointer-events-none opacity-40"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <span className="section-label mx-auto">Simple Process</span>
          <h2 className="text-section-title text-foreground">
            From Idea to{' '}
            <span className="gradient-text">Presentation.</span>
          </h2>
          <p className="text-secondary-foreground text-base max-w-lg mx-auto leading-relaxed">
            Six straightforward steps — no confusion, no surprises. Just a
            smooth path from your rough idea to a polished, submitted project.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="step-reveal glass-card-hover rounded-2xl p-7 flex flex-col gap-5 group relative overflow-hidden"
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              {/* Number background */}
              <span
                className="absolute -top-4 -right-2 text-[6rem] font-black text-foreground/[0.03] leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                {step.num}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center text-xl relative z-10 group-hover:bg-primary/20 transition-colors">
                {step.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black text-primary tracking-widest">
                    {step.num}
                  </span>
                  <h3 className="text-foreground font-bold text-base">{step.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>

              {/* Connector arrow (not last item in row) */}
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden lg:flex items-center z-20">
                  {(i + 1) % 3 !== 0 && (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-primary/40"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}