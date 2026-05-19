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
  accent: string;
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
  accent: '#7C3AED'
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
  accent: '#38BDF8'
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
  accent: '#A855F7'
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
  accent: '#0EA5E9'
}];


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
      <div
        className="blob-primary absolute w-[500px] h-[500px] top-0 right-0 pointer-events-none opacity-40"
        aria-hidden="true" />
      

      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="section-label mx-auto">The Team</span>
          <h2 className="text-section-title text-foreground">
            4 Developers.
            <br />
            <span className="gradient-text">1 Shared Mission.</span>
          </h2>
          <p className="text-secondary-foreground text-base max-w-lg mx-auto leading-relaxed">
            We&apos;re students too — we know the pressure. That&apos;s why we
            build projects that actually impress professors and industry mentors.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) =>
          <div
            key={member.name}
            className="team-reveal glass-card-hover rounded-2xl p-6 flex flex-col gap-5 group"
            style={{
              opacity: 0,
              transform: 'translateY(30px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease'
            }}>
            
              {/* Avatar + availability */}
              <div className="relative">
                <div
                className="w-20 h-20 rounded-2xl overflow-hidden border-2 mx-auto"
                style={{ borderColor: `${member.accent}40` }}>
                
                  <AppImage
                  src={member.avatar}
                  alt={member.avatarAlt}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700" />
                
                </div>
                <div
                className="absolute top-0 right-1/4 flex items-center gap-1.5 bg-card/90 backdrop-blur-sm border border-border/40 rounded-full px-2 py-1">
                
                  {member.available ?
                <>
                      <div className="available-dot" />
                      <span className="text-[10px] text-green-400 font-bold">Available</span>
                    </> :

                <>
                      <div className="busy-dot" />
                      <span className="text-[10px] text-yellow-400 font-bold">Busy</span>
                    </>
                }
                </div>
              </div>

              {/* Info */}
              <div className="text-center space-y-1">
                <h3 className="text-foreground font-bold text-base">{member.name}</h3>
                <p className="text-xs font-semibold" style={{ color: member.accent }}>
                  {member.role}
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed">{member.bio}</p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 justify-center">
                {member.skills.map((skill) =>
              <span key={skill} className="skill-chip">{skill}</span>
              )}
              </div>

              {/* Experience */}
              <div className="text-center">
                <span className="text-xs text-muted-foreground">
                  Experience:{' '}
                  <span className="text-foreground font-bold">{member.experience}</span>
                </span>
              </div>

              {/* Social links */}
              <div className="flex items-center justify-center gap-3 pt-1 border-t border-border/30">
                <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} GitHub`}
                className="text-muted-foreground hover:text-foreground transition-colors p-1.5">
                
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} LinkedIn`}
                className="text-muted-foreground hover:text-foreground transition-colors p-1.5">
                
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                href={member.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chat with ${member.name} on WhatsApp`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all"
                style={{
                  background: `${member.accent}15`,
                  color: member.accent,
                  border: `1px solid ${member.accent}30`
                }}>
                
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}