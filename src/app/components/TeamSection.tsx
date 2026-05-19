'use client';
import React, { useRef, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  experience: string;
  available: boolean;
  github: string;
  linkedin: string;
  whatsapp: string;
  avatar: string;
  avatarAlt: string;
  accentColor: string;
}

const team: TeamMember[] = [
  {
    name: 'Arjun Mehta',
    role: 'Full-Stack Lead',
    bio: 'Loves building scalable web apps. Final year CSE student turned full-time builder.',
    skills: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    experience: '2+ yrs',
    available: true,
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    whatsapp: 'https://wa.me/91XXXXXXXXXX',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12808dda9-1763293603056.png",
    avatarAlt: 'Young Indian male developer with glasses, professional headshot, neutral background',
    accentColor: '#FF0A2F',
  },
  {
    name: 'Priya Sharma',
    role: 'AI / ML Engineer',
    bio: 'Python wizard specializing in machine learning and data science pipelines.',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Pandas'],
    experience: '1.5+ yrs',
    available: true,
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    whatsapp: 'https://wa.me/91XXXXXXXXXX',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1983d2d8c-1763300562409.png",
    avatarAlt: 'Young Indian female developer smiling, bright indoor setting, confident expression',
    accentColor: '#00D4FF',
  },
  {
    name: 'Rohan Verma',
    role: 'Mobile & IoT Dev',
    bio: 'Builds cross-platform apps and hardware prototypes. Arduino enthusiast.',
    skills: ['React Native', 'Flutter', 'Arduino', 'MQTT'],
    experience: '1+ yr',
    available: false,
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    whatsapp: 'https://wa.me/91XXXXXXXXXX',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_169150dae-1763301927448.png",
    avatarAlt: 'Young Indian male student developer, casual setting, friendly smile',
    accentColor: '#FF0A2F',
  },
  {
    name: 'Sneha Iyer',
    role: 'UI/UX & Frontend',
    bio: 'Designs pixel-perfect interfaces and brings them to life with React animations.',
    skills: ['Figma', 'React', 'Framer', 'Tailwind'],
    experience: '1+ yr',
    available: true,
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    whatsapp: 'https://wa.me/91XXXXXXXXXX',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_119406736-1763299171415.png",
    avatarAlt: 'Young Indian female UI designer, warm lighting, creative workspace background',
    accentColor: '#00D4FF',
  },
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.team-reveal');
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
              }, i * 100);
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
    <section id="team" className="py-24 px-6 md:px-8 relative overflow-hidden">
      <div className="blob-primary absolute w-[500px] h-[500px] top-0 right-0 pointer-events-none opacity-30" aria-hidden="true" />

      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="section-label mx-auto">The Team</span>
          <h2 className="text-section-title text-white">
            4 Developers.
            <br />
            <span className="gradient-text">1 Shared Mission.</span>
          </h2>
          <p className="text-[#8A9BB5] text-sm max-w-lg mx-auto leading-relaxed">
            We&apos;re students too — we know the pressure. That&apos;s why we
            build projects that actually impress professors and industry mentors.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member, idx) => (
            <div
              key={member.name}
              className="team-reveal glass-card-hover rounded-sm p-6 flex flex-col gap-4 group"
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              {/* Index */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#5A6A85] font-mono">
                  0{idx + 1}
                </span>
                <div className="flex items-center gap-1.5 px-2 py-1 border border-[rgba(0,212,255,0.15)] rounded-sm">
                  {member.available ? (
                    <>
                      <div className="available-dot" />
                      <span className="text-[9px] text-[#00FF88] font-bold uppercase tracking-wider">Available</span>
                    </>
                  ) : (
                    <>
                      <div className="busy-dot" />
                      <span className="text-[9px] text-[#FFB800] font-bold uppercase tracking-wider">Busy</span>
                    </>
                  )}
                </div>
              </div>

              {/* Avatar */}
              <div className="relative mx-auto">
                <div
                  className="w-20 h-20 overflow-hidden"
                  style={{ border: `2px solid ${member.accentColor}40` }}
                >
                  <AppImage
                    src={member.avatar}
                    alt={member.avatarAlt}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div
                  className="absolute -bottom-1 -right-1 w-4 h-4"
                  style={{ background: member.accentColor, boxShadow: `0 0 10px ${member.accentColor}` }}
                />
              </div>

              {/* Info */}
              <div className="text-center space-y-1">
                <h3 className="text-white font-black text-sm uppercase tracking-wide">{member.name}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: member.accentColor }}>
                  {member.role}
                </p>
                <p className="text-[#5A6A85] text-[11px] leading-relaxed">{member.bio}</p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1 justify-center">
                {member.skills.map((skill) => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>

              {/* Experience */}
              <div className="text-center border-t border-[rgba(0,212,255,0.1)] pt-3">
                <span className="text-[10px] text-[#5A6A85] uppercase tracking-wider">
                  Exp:{' '}
                  <span className="text-white font-black">{member.experience}</span>
                </span>
              </div>

              {/* Social links */}
              <div className="flex items-center justify-center gap-3">
                <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} GitHub`}
                  className="text-[#5A6A85] hover:text-white transition-colors p-1.5 border border-[rgba(0,212,255,0.1)] hover:border-[rgba(0,212,255,0.4)]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn`}
                  className="text-[#5A6A85] hover:text-white transition-colors p-1.5 border border-[rgba(0,212,255,0.1)] hover:border-[rgba(0,212,255,0.4)]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href={member.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={`Chat with ${member.name}`}
                  className="flex items-center gap-1 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider transition-all border"
                  style={{ color: member.accentColor, borderColor: `${member.accentColor}40`, background: `${member.accentColor}08` }}>
                  Chat
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
