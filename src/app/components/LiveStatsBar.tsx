'use client';
import React, { useState, useEffect } from 'react';

interface StatItem {
  label: string;
  value: string;
  color: 'red' | 'blue' | 'white';
}

const baseStats: StatItem[] = [
  { label: 'SYSTEM ONLINE', value: '', color: 'blue' },
  { label: 'TOTAL PROJECTS', value: '40+', color: 'blue' },
  { label: 'ACTIVE CLIENTS', value: '12', color: 'red' },
  { label: 'DELIVERY RATE', value: '98.5%', color: 'red' },
  { label: 'TEAM MEMBERS', value: '4', color: 'blue' },
  { label: 'SATISFACTION', value: '5.0 / 5.0', color: 'red' },
  { label: 'JOIN US', value: '', color: 'blue' },
];

export default function LiveStatsBar() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stats-bar fixed bottom-0 left-0 right-0 z-40 h-10 flex items-center overflow-hidden">
      {/* Left status indicator */}
      <div className="flex items-center gap-2 px-4 border-r border-[rgba(0,212,255,0.2)] h-full flex-shrink-0">
        <div className="available-dot" />
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#00D4FF] uppercase font-mono whitespace-nowrap">
          [ SYSTEM ONLINE ]
        </span>
      </div>

      {/* Scrolling stats */}
      <div className="flex-1 overflow-hidden relative">
        <div
          className="flex items-center gap-0 whitespace-nowrap"
          style={{ animation: 'stats-scroll 30s linear infinite' }}
        >
          {[...baseStats, ...baseStats].map((stat, i) => (
            <div key={i} className="flex items-center h-10">
              <div className="flex items-center gap-3 px-6 border-r border-[rgba(0,212,255,0.1)] h-full">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#5A6A85] uppercase font-mono">
                  {stat.label}
                </span>
                {stat.value && (
                  <span
                    className="text-[11px] font-black font-mono"
                    style={{
                      color: stat.color === 'red' ? '#FF0A2F' : stat.color === 'blue' ? '#00D4FF' : '#fff',
                      textShadow: stat.color === 'red' ?'0 0 10px rgba(255,10,47,0.7)'
                        : stat.color === 'blue' ?'0 0 10px rgba(0,212,255,0.7)' :'none',
                    }}
                  >
                    {stat.value}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right social icons */}
      <div className="flex items-center gap-3 px-4 border-l border-[rgba(0,212,255,0.2)] h-full flex-shrink-0">
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#5A6A85] uppercase font-mono">JOIN US</span>
        {[
          { href: 'https://twitter.com', label: 'Twitter', path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
          { href: 'https://discord.gg', label: 'Discord', path: 'M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z' },
          { href: 'https://t.me', label: 'Telegram', path: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' },
        ].map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="text-[#5A6A85] hover:text-[#00D4FF] transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d={social.path} />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
