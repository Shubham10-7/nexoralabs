'use client';
import React, { useEffect, useRef } from 'react';

export default function HeroSection() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spans = titleRef?.current?.querySelectorAll('.reveal-inner');
    spans?.forEach((span, i) => {
      setTimeout(() => {
        span?.classList?.add('revealed');
      }, 100 + i * 150);
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
    >
      {/* Cyberpunk grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />
      {/* Scan lines */}
      <div className="hud-scanline absolute inset-0" aria-hidden="true" />
      {/* Atmospheric glows */}
      <div className="blob-primary absolute w-[800px] h-[800px] -top-40 -left-60 pointer-events-none" aria-hidden="true" />
      <div className="blob-secondary absolute w-[600px] h-[600px] top-20 -right-40 pointer-events-none" aria-hidden="true" />
      <div className="hero-purple-glow" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-24">
        <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-center">

          {/* LEFT: Copy */}
          <div className="flex flex-col gap-8">
            {/* HUD label */}
            <div className="flex items-center gap-3">
              <span className="section-label">Next-Gen Dev Agency</span>
              <span className="tag-pill-blue">Open for Projects</span>
            </div>

            {/* Massive headline */}
            <div ref={titleRef} className="space-y-0">
              <h1 className="text-hero-xl text-white leading-none">
                <span className="reveal-text">
                  <span className="reveal-inner block">BUILD YOUR</span>
                </span>
                <span className="reveal-text">
                  <span className="reveal-inner block">FINAL YEAR</span>
                </span>
                <span className="reveal-text">
                  <span className="reveal-inner block gradient-text">PROJECT.</span>
                </span>
              </h1>
            </div>

            {/* Subheading */}
            <div className="space-y-1">
              <p className="text-[#8A9BB5] text-base leading-relaxed max-w-md">
                Nexora Labs is a student-run dev agency building{' '}
                <span className="text-white font-semibold">AI systems, web apps, mobile apps</span>{' '}
                and IoT projects.
              </p>
              <p className="text-[#00D4FF] text-sm font-semibold tracking-wider">
                Fast. Reliable. Student-Friendly.
              </p>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-10">
              {[
                { val: '40+', label: 'Projects Delivered' },
                { val: '98%', label: 'Satisfaction Rate' },
                { val: '4', label: 'Expert Devs' },
              ]?.map((s) => (
                <div key={s?.label} className="flex flex-col gap-1">
                  <span className="stat-number gradient-text-static">{s?.val}</span>
                  <span className="text-[10px] text-[#5A6A85] font-bold uppercase tracking-widest">
                    {s?.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                <span>Join The Revolution</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                View Portfolio
              </button>
            </div>

            {/* Trust bar */}
            <div className="flex items-center gap-4 pt-2 border-t border-[rgba(0,212,255,0.1)]">
              <span className="text-[10px] text-[#5A6A85] font-bold uppercase tracking-widest">
                Trusted By Students From
              </span>
              {['IIT', 'NIT', 'VIT', 'BITS', 'SRM']?.map((uni) => (
                <span key={uni} className="text-[11px] font-bold text-[#8A9BB5] tracking-wider">
                  {uni}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: HUD System Status Panel */}
          <div className="hidden lg:flex flex-col gap-3">
            {/* System Status Panel */}
            <div className="glass-card rounded-sm p-5 space-y-5">
              {/* Panel header */}
              <div className="flex items-center justify-between border-b border-[rgba(0,212,255,0.15)] pb-3">
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#00D4FF] uppercase">System Status</span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" style={{ animation: 'hud-blink 2s ease-in-out infinite' }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" style={{ animation: 'hud-blink 2s ease-in-out infinite 0.3s' }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" style={{ animation: 'hud-blink 2s ease-in-out infinite 0.6s' }} />
                </div>
              </div>

              {/* HUD circle icon */}
              <div className="flex justify-center py-2">
                <div className="relative w-20 h-20">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="36" stroke="rgba(0,212,255,0.2)" strokeWidth="1" />
                    <circle cx="40" cy="40" r="28" stroke="rgba(0,212,255,0.15)" strokeWidth="1" />
                    <path d="M40 4 A36 36 0 0 1 76 40" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" />
                    <path d="M40 76 A36 36 0 0 1 4 40" stroke="rgba(0,212,255,0.3)" strokeWidth="1" strokeLinecap="round" />
                    <rect x="34" y="34" width="12" height="12" fill="none" stroke="#00D4FF" strokeWidth="1.5" transform="rotate(45 40 40)" />
                    <rect x="37" y="37" width="6" height="6" fill="#00D4FF" transform="rotate(45 40 40)" />
                  </svg>
                  <div className="absolute inset-0 rounded-full" style={{ boxShadow: '0 0 30px rgba(0,212,255,0.3)' }} />
                </div>
              </div>

              {/* Status items */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-[9px] font-bold tracking-[0.25em] text-[#5A6A85] uppercase">Network</p>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-black text-lg tracking-wider">LIVE</span>
                    <div className="available-dot" />
                  </div>
                </div>

                <div className="space-y-1 border-t border-[rgba(0,212,255,0.08)] pt-3">
                  <p className="text-[9px] font-bold tracking-[0.25em] text-[#5A6A85] uppercase">Active Projects</p>
                  <p className="text-white font-black text-2xl tracking-tight"># 12</p>
                </div>

                <div className="space-y-1 border-t border-[rgba(0,212,255,0.08)] pt-3">
                  <p className="text-[9px] font-bold tracking-[0.25em] text-[#5A6A85] uppercase">Delivery Rate</p>
                  <p className="text-[#FF0A2F] font-black text-2xl tracking-tight" style={{ textShadow: '0 0 20px rgba(255,10,47,0.6)' }}>98.5%</p>
                </div>
              </div>
            </div>

            {/* Feature cards row */}
            {[
              { icon: '⚡', title: 'Ultra Fast', desc: 'Rapid delivery with agile sprints' },
              { icon: '🔒', title: 'Secure Code', desc: 'Best practices & clean architecture' },
            ]?.map((feat) => (
              <div key={feat?.title} className="glass-card rounded-sm p-4 flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center border border-[rgba(0,212,255,0.2)] rounded-sm text-base flex-shrink-0">
                  {feat?.icon}
                </div>
                <div>
                  <p className="text-[#00D4FF] text-xs font-bold tracking-wider uppercase">{feat?.title}</p>
                  <p className="text-[#5A6A85] text-[11px] mt-0.5">{feat?.desc}</p>
                </div>
                <div className="ml-auto text-[#00D4FF] opacity-40 text-lg font-thin">+</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] text-[#5A6A85] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[rgba(0,212,255,0.4)] to-transparent" />
      </div>
    </section>
  );
}