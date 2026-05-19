'use client';
import React, { useRef, useEffect } from 'react';

interface ServiceCard {
  icon: string;
  title: string;
  desc: string;
  tag: string;
  span?: string;
}

const services: ServiceCard[] = [
  {
    icon: '⬡',
    title: 'Web Development',
    desc: 'Full-stack web apps with Next.js, React, Node.js and modern databases. From landing pages to complex SaaS platforms.',
    tag: 'Full-Stack',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    icon: '◈',
    title: 'AI / ML Projects',
    desc: 'Machine learning models, NLP systems, computer vision, and data science pipelines using Python, TensorFlow, and PyTorch.',
    tag: 'Python · TensorFlow',
  },
  {
    icon: '◻',
    title: 'Mobile Apps',
    desc: 'Cross-platform iOS & Android apps with React Native and Flutter.',
    tag: 'React Native',
  },
  {
    icon: '◈',
    title: 'IoT Projects',
    desc: 'Arduino, Raspberry Pi, and sensor-based smart systems with cloud dashboards.',
    tag: 'Arduino · MQTT',
  },
  {
    icon: '◇',
    title: 'UI/UX Design',
    desc: 'Figma prototypes, design systems, and user research.',
    tag: 'Figma',
  },
  {
    icon: '▣',
    title: 'Documentation',
    desc: 'SRS, project reports, research papers, and IEEE-formatted documentation for academic submissions.',
    tag: 'Academic',
  },
  {
    icon: '▲',
    title: 'Deployment',
    desc: 'CI/CD pipelines, cloud hosting on Vercel, AWS, and Docker containerization.',
    tag: 'Vercel · AWS',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-reveal');
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
              }, i * 80);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 px-6 md:px-8 relative overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />
      <div className="blob-secondary absolute w-[500px] h-[500px] top-0 right-0 pointer-events-none opacity-50" aria-hidden="true" />

      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <span className="section-label">What We Build</span>
            <h2 className="text-section-title text-white">
              Services We
              <br />
              <span className="gradient-text">Deliver.</span>
            </h2>
          </div>
          <p className="text-[#8A9BB5] text-sm max-w-sm leading-relaxed border-l-2 border-[rgba(0,212,255,0.3)] pl-4">
            From concept to deployment — we cover every technical stack your
            academic or real-world project needs.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Card 0: WebDev — large */}
          <div
            className="service-reveal glass-card-hover rounded-sm p-8 service-card-large lg:col-span-2 lg:row-span-2 flex flex-col justify-between relative overflow-hidden"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,10,47,0.05)] via-transparent to-[rgba(0,212,255,0.03)] pointer-events-none" aria-hidden="true" />
            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 flex items-center justify-center border border-[rgba(255,10,47,0.4)] text-[#FF0A2F] text-2xl font-mono"
                style={{ boxShadow: '0 0 20px rgba(255,10,47,0.2)' }}>
                {services[0].icon}
              </div>
              <div className="space-y-3">
                <span className="tag-pill">{services[0].tag}</span>
                <h3 className="text-white text-2xl font-black tracking-tight uppercase">
                  {services[0].title}
                </h3>
                <p className="text-[#8A9BB5] text-sm leading-relaxed">
                  {services[0].desc}
                </p>
              </div>
            </div>
            <div className="relative z-10 mt-8 flex flex-wrap gap-2">
              {['Next.js', 'React', 'Node.js', 'PostgreSQL', 'MongoDB'].map((tech) => (
                <span key={tech} className="skill-chip">{tech}</span>
              ))}
            </div>
          </div>

          {/* Cards 1-6 */}
          {services.slice(1).map((svc, idx) => (
            <div
              key={svc.title}
              className={`service-reveal glass-card-hover rounded-sm p-5 service-card-small flex flex-col justify-between ${idx === 4 || idx === 5 ? 'md:col-span-1 lg:col-span-2' : ''}`}
              style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
            >
              <div className="w-9 h-9 flex items-center justify-center border border-[rgba(0,212,255,0.3)] text-[#00D4FF] text-lg font-mono"
                style={{ boxShadow: '0 0 15px rgba(0,212,255,0.15)' }}>
                {svc.icon}
              </div>
              <div className="space-y-2 mt-4">
                <span className="tag-pill-blue">{svc.tag}</span>
                <h3 className="text-white text-sm font-black uppercase tracking-wide">{svc.title}</h3>
                <p className="text-[#5A6A85] text-xs leading-relaxed">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}