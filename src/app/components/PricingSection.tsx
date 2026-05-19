'use client';
import React, { useRef, useEffect } from 'react';

interface PricingPlan {
  name: string;
  label: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  cta: string;
  popular: boolean;
}

const plans: PricingPlan[] = [
  {
    name: 'Basic',
    label: 'Starter',
    price: '₹4,999',
    period: 'per project',
    desc: 'Perfect for simple documentation, UI designs, or small web projects.',
    features: [
      'Simple Web Page or Landing Page',
      'UI/UX Design (Figma)',
      'Project Documentation (SRS)',
      'Basic Deployment',
      '7-day delivery',
      '1 revision round',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    label: 'Most Popular',
    price: '₹12,999',
    period: 'per project',
    desc: 'Ideal for final year projects with full stack development and documentation.',
    features: [
      'Full-Stack Web Application',
      'AI/ML Model Integration',
      'Mobile App (React Native)',
      'Complete Documentation',
      'Deployment & Hosting',
      '21-day delivery',
      '3 revision rounds',
      'Presentation Support',
    ],
    cta: 'Start Project',
    popular: true,
  },
  {
    name: 'Premium',
    label: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    desc: 'For complex systems: IoT, AI + mobile + web + research paper.',
    features: [
      'IoT + AI + Web + Mobile',
      'Research Paper Writing',
      'IEEE Conference Ready',
      'Custom Timeline',
      'Dedicated Developer',
      'Unlimited Revisions',
      'Live Viva Preparation',
      'Priority Support 24/7',
    ],
    cta: 'Contact Us',
    popular: false,
  },
];

export default function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.pricing-reveal');
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
              }, i * 120);
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
    <section id="pricing" className="py-24 px-6 md:px-8 relative overflow-hidden">
      <div className="blob-primary absolute w-[600px] h-[600px] bottom-0 left-0 pointer-events-none opacity-30" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,10,47,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,10,47,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="section-label mx-auto">Pricing</span>
          <h2 className="text-section-title text-white">
            Student-Friendly
            <br />
            <span className="gradient-text">Pricing Plans.</span>
          </h2>
          <p className="text-[#8A9BB5] text-sm max-w-lg mx-auto leading-relaxed">
            No hidden fees. No surprises. Transparent pricing designed for
            students — starting at just ₹4,999.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`pricing-reveal rounded-sm p-8 flex flex-col gap-6 relative ${
                plan.popular
                  ? 'pricing-card-popular' :'glass-card border border-[rgba(0,212,255,0.12)]'
              }`}
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#FF0A2F] text-white text-[10px] font-black tracking-[0.2em] px-4 py-1.5 uppercase"
                    style={{ boxShadow: '0 0 20px rgba(255,10,47,0.5)' }}>
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan index */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#5A6A85] font-mono">0{idx + 1}</span>
                <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${plan.popular ? 'text-[#FF0A2F]' : 'text-[#00D4FF]'}`}>
                  {plan.label}
                </span>
              </div>

              {/* Plan header */}
              <div className="space-y-2 border-b border-[rgba(0,212,255,0.1)] pb-5">
                <h3 className="text-white text-2xl font-black uppercase tracking-wide">{plan.name}</h3>
                <p className="text-[#5A6A85] text-xs leading-relaxed">{plan.desc}</p>
              </div>

              {/* Price */}
              <div className="flex items-end gap-2">
                <span
                  className={`font-black tracking-tighter ${
                    plan.price === 'Custom' ?'text-3xl text-[#00D4FF]'
                      : plan.popular
                      ? 'text-4xl text-[#FF0A2F]'
                      : 'text-4xl text-white'
                  }`}
                  style={plan.popular ? { textShadow: '0 0 20px rgba(255,10,47,0.5)' } : {}}
                >
                  {plan.price}
                </span>
                <span className="text-[#5A6A85] text-xs mb-1">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-2.5">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-xs">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                      className={`flex-shrink-0 mt-0.5 ${plan.popular ? 'text-[#FF0A2F]' : 'text-[#00D4FF]'}`}>
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[#8A9BB5]">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={plan.popular ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Custom note */}
        <p className="text-center text-[#5A6A85] text-xs mt-10 uppercase tracking-wider">
          Need something specific?{' '}
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-[#FF0A2F] font-bold hover:underline"
          >
            Request custom pricing →
          </button>
        </p>
      </div>
    </section>
  );
}