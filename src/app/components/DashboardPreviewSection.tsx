'use client';
import React, { useRef, useEffect, useState } from 'react';

const milestones = [
  { label: 'Project Kickoff', done: true },
  { label: 'UI/UX Design', done: true },
  { label: 'Backend API', done: true },
  { label: 'Frontend Build', done: false },
  { label: 'Testing & QA', done: false },
  { label: 'Deployment', done: false },
];

export default function DashboardPreviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="dashboard" className="py-24 px-6 md:px-8 relative overflow-hidden">
      <div
        className="blob-secondary absolute w-[500px] h-[500px] top-0 left-0 pointer-events-none opacity-40"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="section-label mx-auto">Student Dashboard</span>
          <h2 className="text-section-title text-foreground">
            Track Every Step of
            <br />
            <span className="gradient-text">Your Project.</span>
          </h2>
          <p className="text-secondary-foreground text-base max-w-lg mx-auto leading-relaxed">
            Once you start a project with us, you get access to a real-time
            dashboard — track progress, chat with your developer, upload files,
            and manage payments.
          </p>
        </div>

        {/* Dashboard UI */}
        <div
          className={`dashboard-preview max-w-5xl mx-auto transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Browser bar */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border/40 bg-card/40">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 mx-4 bg-muted/40 rounded h-6 flex items-center px-3">
              <span className="text-muted-foreground text-xs font-mono">
                nexoralabs.app/dashboard/my-project
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-0">
            {/* Sidebar */}
            <div className="border-r border-border/30 p-5 space-y-4">
              <p className="text-muted-foreground text-xs uppercase tracking-widest font-bold mb-4">
                My Project
              </p>
              {[
                { icon: '📊', label: 'Overview', active: true },
                { icon: '💬', label: 'Live Chat', active: false },
                { icon: '📁', label: 'Files', active: false },
                { icon: '💳', label: 'Payments', active: false },
                { icon: '🔔', label: 'Notifications', active: false },
              ]?.map((item) => (
                <div
                  key={item?.label}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition-colors ${
                    item?.active
                      ? 'bg-primary/15 text-foreground border border-primary/20'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                  }`}
                >
                  <span>{item?.icon}</span>
                  <span>{item?.label}</span>
                </div>
              ))}
            </div>

            {/* Main panel */}
            <div className="md:col-span-2 p-6 space-y-6">
              {/* Project header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-foreground font-bold text-base">
                    AI Disease Prediction System
                  </h3>
                  <p className="text-muted-foreground text-xs mt-1">
                    Final Year Project · CSE Branch
                  </p>
                </div>
                <span className="tag-pill">75% Complete</span>
              </div>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground font-semibold">
                    Overall Progress
                  </span>
                  <span className="text-foreground font-bold">75%</span>
                </div>
                <div className="progress-bar h-2">
                  <div
                    className="progress-fill"
                    style={{ width: visible ? '75%' : '0%' }}
                  />
                </div>
              </div>

              {/* Milestones */}
              <div>
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-4">
                  Milestones
                </p>
                <div className="space-y-2">
                  {milestones?.map((m) => (
                    <div
                      key={m?.label}
                      className="flex items-center gap-3 py-2 border-b border-border/20"
                    >
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] flex-shrink-0 ${
                          m?.done
                            ? 'bg-green-500/20 border-green-500/50 text-green-400' :'bg-muted border-border'
                        }`}
                      >
                        {m?.done && '✓'}
                      </div>
                      <span
                        className={`text-sm ${
                          m?.done ? 'text-foreground' : 'text-muted-foreground'
                        }`}
                      >
                        {m?.label}
                      </span>
                      {m?.done && (
                        <span className="ml-auto text-xs text-green-400 font-semibold">
                          Done
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Team assigned */}
              <div className="glass-card rounded-xl p-4">
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-3">
                  Assigned Team
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Arjun (Lead)', color: '#7C3AED' },
                    { name: 'Priya (ML)', color: '#38BDF8' },
                    { name: 'Rohan (Backend)', color: '#A855F7' },
                  ]?.map((member) => (
                    <div
                      key={member?.name}
                      className="flex items-center gap-2 bg-muted/40 rounded-full px-3 py-1.5"
                    >
                      <div
                        className="w-5 h-5 rounded-full flex-shrink-0"
                        style={{ background: member?.color }}
                      />
                      <span className="text-xs text-foreground font-medium">
                        {member?.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature pills below */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {[
            '📊 Real-time Progress',
            '💬 Live Chat with Dev',
            '📁 File Sharing',
            '💳 Secure Payments',
            '🔔 Instant Notifications',
            '🎓 Presentation Support',
          ]?.map((f) => (
            <span key={f} className="glass-card rounded-full px-4 py-2 text-sm font-semibold text-secondary-foreground border border-border/40">
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}