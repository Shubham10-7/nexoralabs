import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,212,255,0.15)] py-12 px-6 md:px-8 relative overflow-hidden">
      {/* Top scan line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent opacity-40" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left: Logo + tagline */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 flex items-center justify-center border border-[rgba(255,10,47,0.3)]">
              <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
                <path d="M6 6L18 18M18 18L30 30M18 18L30 6M18 18L6 30" stroke="#FF0A2F" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-sm tracking-[0.15em] text-white uppercase">NEXORA</span>
              <span className="text-[9px] font-bold tracking-[0.3em] text-[#FF0A2F] uppercase">LABS</span>
            </div>
          </div>
          <p className="text-[#5A6A85] text-xs max-w-xs leading-relaxed">
            Building tomorrow&apos;s projects for today&apos;s students.
          </p>
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#00D4FF] uppercase">
            // Fast. Reliable. Student-Friendly.
          </p>
        </div>

        {/* Right: Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
          <div className="flex flex-wrap gap-5">
            {['Services', 'Portfolio', 'Team', 'Pricing', 'Contact']?.map((item) => (
              <a
                key={item}
                href={`#${item?.toLowerCase()}`}
                className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#5A6A85] hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {[
              {
                href: 'https://github.com', label: 'GitHub',
                icon: <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              },
              {
                href: 'https://linkedin.com', label: 'LinkedIn',
                icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              },
              {
                href: 'https://instagram.com', label: 'Instagram',
                icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              },
            ]?.map((social) => (
              <a
                key={social?.label}
                href={social?.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social?.label}
                className="w-8 h-8 flex items-center justify-center border border-[rgba(0,212,255,0.15)] text-[#5A6A85] hover:text-white hover:border-[rgba(0,212,255,0.4)] transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  {social?.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[rgba(0,212,255,0.08)] flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[10px] text-[#5A6A85] font-mono tracking-wider">
          © 2026 NEXORA LABS. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-5">
          <a href="#" className="text-[10px] text-[#5A6A85] hover:text-white uppercase tracking-wider transition-colors">Privacy</a>
          <a href="#" className="text-[10px] text-[#5A6A85] hover:text-white uppercase tracking-wider transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}