'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spans = titleRef?.current?.querySelectorAll('.reveal-inner');
    spans?.forEach((span, i) => {
      setTimeout(() => {
        span?.classList?.add('revealed');
      }, 100 + i * 120);
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
    >
      {/* Soft purple radial glow centered behind hero text */}
      <div className="hero-purple-glow" aria-hidden="true" />

      {/* Atmospheric blobs */}
      <div
        className="blob-primary absolute w-[700px] h-[700px] -top-32 -left-48 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="blob-secondary absolute w-[600px] h-[600px] top-20 -right-48 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="blob-tertiary absolute w-[500px] h-[500px] bottom-0 left-1/4 pointer-events-none"
        aria-hidden="true"
      />
      {/* Grid lines decoration */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,102,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col gap-8">
            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="section-label">Student Dev Agency</span>
              <span className="tag-pill">Open for Projects</span>
            </div>

            {/* Headline */}
            <div ref={titleRef}>
              <h1 className="text-hero-xl text-foreground">
                <span className="reveal-text">
                  <span className="reveal-inner">Build Your</span>
                </span>
                <span className="reveal-text mt-1 block">
                  <span className="reveal-inner gradient-text">Final Year</span>
                </span>
                <span className="reveal-text mt-1 block">
                  <span className="reveal-inner">Project.</span>
                </span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-secondary-foreground text-lg leading-relaxed max-w-md font-medium">
              We&apos;re a team of 4 developers who build{' '}
              <span className="text-foreground font-semibold">
                AI/ML systems, web apps, mobile apps
              </span>{' '}
              and IoT projects for students — with full support from idea to
              presentation.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8">
              {[
                { val: '40+', label: 'Projects Delivered' },
                { val: '98%', label: 'Client Satisfaction' },
                { val: '4', label: 'Expert Developers' },
              ]?.map((s) => (
                <div key={s?.label} className="flex flex-col gap-1">
                  <span className="stat-number gradient-text-static">{s?.val}</span>
                  <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                    {s?.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                Start Project
              </button>
              <button
                onClick={() => {
                  document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary"
              >
                View Portfolio
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=40&h=40&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
                ]?.map((src, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background overflow-hidden"
                  >
                    <AppImage
                      src={src}
                      alt={`Happy student client ${i + 1}`}
                      width={32}
                      height={32}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <span className="text-xs text-muted-foreground font-medium">
                <span className="text-foreground font-bold">40+ students</span> already shipped their projects
              </span>
            </div>
          </div>

          {/* Right: Dashboard Preview */}
          <div className="relative hidden lg:block">
            {/* Floating badges */}
            <div className="floating-badge absolute -left-8 top-12 z-20 flex items-center gap-2 text-foreground">
              <span className="text-green-400">●</span>
              <span>Project Live</span>
            </div>
            <div className="floating-badge-2 absolute -right-4 bottom-16 z-20 flex items-center gap-2 text-foreground">
              <span className="gradient-text-static font-bold">✓</span>
              <span>Deployed to Vercel</span>
            </div>

            {/* Dashboard mockup */}
            <div className="dashboard-preview relative">
              {/* Top bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 mx-4 bg-muted/60 rounded-md h-6 flex items-center px-3">
                  <span className="text-muted-foreground text-xs font-mono">
                    nexoralabs.app/dashboard
                  </span>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-5 space-y-5">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground font-bold text-sm">My Projects</p>
                    <p className="text-muted-foreground text-xs">3 active projects</p>
                  </div>
                  <span className="tag-pill">2026</span>
                </div>

                {/* Project cards */}
                {[
                  { name: 'AI Disease Predictor', progress: 75, status: 'In Progress', color: 'progress-fill' },
                  { name: 'E-Commerce App', progress: 92, status: 'Review', color: 'progress-fill-blue' },
                  { name: 'Smart Home IoT', progress: 40, status: 'Design', color: 'progress-fill' },
                ]?.map((proj) => (
                  <div key={proj?.name} className="glass-card rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground text-xs font-semibold">{proj?.name}</span>
                      <span className="tag-pill-blue">{proj?.status}</span>
                    </div>
                    <div className="progress-bar">
                      <div className={proj?.color} style={{ width: `${proj?.progress}%` }} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-1.5">
                        {[0, 1, 2]?.map((j) => (
                          <div
                            key={j}
                            className="w-5 h-5 rounded-full border border-background"
                            style={{
                              background: `hsl(${j * 80 + 250}, 70%, 60%)`,
                            }}
                          />
                        ))}
                      </div>
                      <span className="text-muted-foreground text-xs">{proj?.progress}% complete</span>
                    </div>
                  </div>
                ))}

                {/* Notification row */}
                <div className="flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-xl p-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm">
                    🔔
                  </div>
                  <div>
                    <p className="text-foreground text-xs font-semibold">Milestone Reached!</p>
                    <p className="text-muted-foreground text-xs">Frontend complete — review ready</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow under dashboard */}
            <div
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-primary/20 blur-3xl rounded-full pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-muted-foreground text-xs uppercase tracking-widest font-semibold">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/40 to-transparent" />
      </div>
    </section>
  );
}