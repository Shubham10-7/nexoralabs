'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href: string, label: string) => {
    setMenuOpen(false);
    setActiveNav(label);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#080A0F]/90 backdrop-blur-xl border-b border-[rgba(0,212,255,0.12)]'
            : 'bg-transparent'
        }`}
      >
        {/* Top scan line */}
        {scrolled && (
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent opacity-60" />
        )}

        <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* X icon like reference */}
            <div className="relative w-9 h-9 flex items-center justify-center">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M6 6L18 18M18 18L30 30M18 18L30 6M18 18L6 30" stroke="#FF0A2F" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              <div className="absolute inset-0 rounded-sm border border-[rgba(255,10,47,0.3)]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-base tracking-[0.15em] text-white uppercase">
                NEXORA
              </span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#FF0A2F] uppercase">
                LABS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href, item.label)}
                className={`nav-link ${activeNav === item.label ? 'text-white' : ''}`}
                style={activeNav === item.label ? { color: '#fff' } : {}}
              >
                {item.label}
                {activeNav === item.label && (
                  <span className="absolute bottom-[-2px] left-0 w-full h-px bg-[#FF0A2F]" style={{ boxShadow: '0 0 6px rgba(255,10,47,0.8)' }} />
                )}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('#contact', 'Contact')}
              className="btn-primary text-xs py-2.5 px-6"
            >
              <span>Launch App</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 z-[60] relative"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`block w-6 h-0.5 bg-[#FF0A2F] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#00D4FF] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 mobile-menu-overlay flex flex-col pt-24 px-6 pb-12 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="flex flex-col gap-2 mt-8">
          {navItems.map((item, i) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href, item.label)}
              className="text-left py-4 border-b border-[rgba(0,212,255,0.1)] text-2xl font-black tracking-widest text-white/70 hover:text-white uppercase transition-colors"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
            >
              <span className="text-[#FF0A2F] text-sm mr-3 font-mono">0{i + 1}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="mt-8">
          <button
            onClick={() => handleNavClick('#contact', 'Contact')}
            className="btn-primary w-full justify-center text-sm py-4"
          >
            <span>Start Your Project</span>
          </button>
        </div>
      </div>
    </>
  );
}