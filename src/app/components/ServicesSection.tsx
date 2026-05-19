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
    icon: '🌐',
    title: 'Web Development',
    desc: 'Full-stack web apps with Next.js, React, Node.js and modern databases. From landing pages to complex SaaS platforms.',
    tag: 'Full-Stack',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    icon: '🤖',
    title: 'AI / ML Projects',
    desc: 'Machine learning models, NLP systems, computer vision, and data science pipelines using Python, TensorFlow, and PyTorch.',
    tag: 'Python · TensorFlow',
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    desc: 'Cross-platform iOS & Android apps with React Native and Flutter.',
    tag: 'React Native',
  },
  {
    icon: '🔌',
    title: 'IoT Projects',
    desc: 'Arduino, Raspberry Pi, and sensor-based smart systems with cloud dashboards.',
    tag: 'Arduino · MQTT',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Figma prototypes, design systems, and user research.',
    tag: 'Figma',
  },
  {
    icon: '📄',
    title: 'Documentation',
    desc: 'SRS, project reports, research papers, and IEEE-formatted documentation for academic submissions.',
    tag: 'Academic',
  },
  {
    icon: '🚀',
    title: 'Deployment',
    desc: 'CI/CD pipelines, cloud hosting on Vercel, AWS, and Docker containerization.',
    tag: 'Vercel · AWS',
  },
];

// BENTO AUDIT:
// Array: [WebDev cs-2 rs-2, AI/ML, Mobile, IoT, UI/UX, Docs, Deploy]
// Row 1: [col-1: WebDev cs-2 rs-2] [col-3: AI/ML cs-1] [col-4: Mobile cs-1]
// Row 2: [col-1: WebDev span] [col-2: WebDev span] [col-3: IoT cs-1] [col-4: UIDesign cs-1]
// Row 3: [col-1: Docs cs-2] [col-3: Deploy cs-2]
// Placed 7/7 ✓

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
      <div
        className="blob-secondary absolute w-[500px] h-[500px] top-0 right-0 pointer-events-none opacity-60"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <span className="section-label">What We Build</span>
            <h2 className="text-section-title text-foreground">
              Services We
              <br />
              <span className="gradient-text">Deliver.</span>
            </h2>
          </div>
          <p className="text-secondary-foreground text-base max-w-sm leading-relaxed">
            From concept to deployment — we cover every technical stack your
            academic or real-world project needs.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 0: WebDev — col-span-2, row-span-2 */}
          {/* lg:col-span-2 lg:row-span-2 */}
          <div
            className="service-reveal glass-card-hover rounded-2xl p-8 service-card-large lg:col-span-2 lg:row-span-2 flex flex-col justify-between relative overflow-hidden"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center text-2xl">
                {services[0].icon}
              </div>
              <div className="space-y-3">
                <span className="tag-pill">{services[0].tag}</span>
                <h3 className="text-foreground text-2xl font-bold tracking-tight">
                  {services[0].title}
                </h3>
                <p className="text-secondary-foreground text-sm leading-relaxed">
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

          {/* Card 1: AI/ML */}
          <div
            className="service-reveal glass-card-hover rounded-2xl p-6 service-card-small flex flex-col justify-between"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-xl">
              {services[1].icon}
            </div>
            <div className="space-y-2 mt-4">
              <span className="tag-pill-blue">{services[1].tag}</span>
              <h3 className="text-foreground text-base font-bold">{services[1].title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{services[1].desc}</p>
            </div>
          </div>

          {/* Card 2: Mobile */}
          <div
            className="service-reveal glass-card-hover rounded-2xl p-6 service-card-small flex flex-col justify-between"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          >
            <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-xl">
              {services[2].icon}
            </div>
            <div className="space-y-2 mt-4">
              <span className="tag-pill">{services[2].tag}</span>
              <h3 className="text-foreground text-base font-bold">{services[2].title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{services[2].desc}</p>
            </div>
          </div>

          {/* Card 3: IoT */}
          <div
            className="service-reveal glass-card-hover rounded-2xl p-6 service-card-small flex flex-col justify-between"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-xl">
              {services[3].icon}
            </div>
            <div className="space-y-2 mt-4">
              <span className="tag-pill-blue">{services[3].tag}</span>
              <h3 className="text-foreground text-base font-bold">{services[3].title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{services[3].desc}</p>
            </div>
          </div>

          {/* Card 4: UI/UX */}
          <div
            className="service-reveal glass-card-hover rounded-2xl p-6 service-card-small flex flex-col justify-between"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          >
            <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-xl">
              {services[4].icon}
            </div>
            <div className="space-y-2 mt-4">
              <span className="tag-pill">{services[4].tag}</span>
              <h3 className="text-foreground text-base font-bold">{services[4].title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{services[4].desc}</p>
            </div>
          </div>

          {/* Card 5: Docs */}
          <div
            className="service-reveal glass-card-hover rounded-2xl p-6 service-card-small md:col-span-1 lg:col-span-2 flex flex-col justify-between"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-xl">
              {services[5].icon}
            </div>
            <div className="space-y-2 mt-4">
              <span className="tag-pill-blue">{services[5].tag}</span>
              <h3 className="text-foreground text-base font-bold">{services[5].title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{services[5].desc}</p>
            </div>
          </div>

          {/* Card 6: Deploy */}
          <div
            className="service-reveal glass-card-hover rounded-2xl p-6 service-card-small md:col-span-1 lg:col-span-2 flex flex-col justify-between"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          >
            <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-xl">
              {services[6].icon}
            </div>
            <div className="space-y-2 mt-4">
              <span className="tag-pill">{services[6].tag}</span>
              <h3 className="text-foreground text-base font-bold">{services[6].title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{services[6].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}