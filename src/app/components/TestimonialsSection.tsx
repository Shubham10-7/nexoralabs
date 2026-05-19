'use client';
import React, { useRef, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  name: string;
  college: string;
  year: string;
  project: string;
  review: string;
  rating: number;
  avatar: string;
  avatarAlt: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Rahul Gupta',
    college: 'VIT University',
    year: 'B.Tech CSE, 2025',
    project: 'AI Disease Predictor',
    review: "I had no idea how to build a machine learning model. NexoraLabs not only built it but explained every component so I could defend it in my viva. Got an A+.",
    rating: 5,
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_17a1f455f-1763296936452.png",
    avatarAlt: 'Young Indian male student smiling in campus setting, casual attire',
  },
  {
    name: 'Aisha Khan',
    college: 'BITS Pilani',
    year: 'MCA, 2025',
    project: 'Student Marketplace',
    review: "Delivered 2 days before the deadline with all the features I asked for. The documentation was IEEE-standard. My professor asked who built it — I said my team.",
    rating: 5,
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1dfe33a84-1772408653077.png",
    avatarAlt: 'Young Indian female student with warm smile, library background, natural light',
  },
  {
    name: 'Dev Patel',
    college: 'NIT Trichy',
    year: 'B.Tech IT, 2024',
    project: 'Fitness Tracker App',
    review: "The React Native app looks like something from the Play Store. Smooth, fast, and fully functional. Worth every rupee.",
    rating: 5,
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_17a1f455f-1763296936452.png",
    avatarAlt: 'Young Indian male student in casual clothes, confident expression, outdoor setting',
  },
  {
    name: 'Shreya Nair',
    college: 'IIIT Hyderabad',
    year: 'B.Tech ECE, 2025',
    project: 'Smart Attendance IoT',
    review: "Face recognition on Raspberry Pi + a beautiful React dashboard. The hardware + software integration was flawless. Best final year experience ever.",
    rating: 5,
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e03fecaf-1763301929081.png",
    avatarAlt: 'Young Indian female student smiling, bright campus background, professional look',
  },
  {
    name: 'Karan Bose',
    college: 'MNIT Jaipur',
    year: 'B.Tech CSE, 2025',
    project: 'Mental Health Chatbot',
    review: "The BERT-based NLP model blew my panel away. Arjun walked me through the architecture before my presentation. That kind of support is rare.",
    rating: 5,
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_18429a24e-1772143891863.png",
    avatarAlt: 'Young Indian male student in glasses, study environment, focused expression',
  },
  {
    name: 'Meera Pillai',
    college: 'SRM University',
    year: 'MBA Tech, 2025',
    project: 'Delivery Tracking Dashboard',
    review: "Real-time socket updates, Mapbox integration, and a clean admin panel. My startup demo went perfectly because of this project.",
    rating: 5,
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_15f4e23f6-1763300607163.png",
    avatarAlt: 'Young Indian female professional student, modern office setting, confident smile',
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.testi-reveal');
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
    <section id="testimonials" className="py-24 px-6 md:px-8 relative overflow-hidden">
      <div className="blob-primary absolute w-[500px] h-[500px] top-0 right-0 pointer-events-none opacity-25" aria-hidden="true" />

      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="section-label mx-auto">Student Reviews</span>
          <h2 className="text-section-title text-white">
            Students Who
            <br />
            <span className="gradient-text">Aced Their Projects.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="testi-reveal glass-card-hover rounded-sm p-6 flex flex-col gap-4"
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              {/* Rating stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-[#FF0A2F] text-sm" style={{ textShadow: '0 0 8px rgba(255,10,47,0.6)' }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#8A9BB5] text-xs leading-relaxed flex-1">
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Project tag */}
              <span className={idx % 2 === 0 ? 'tag-pill self-start' : 'tag-pill-blue self-start'}>{t.project}</span>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-[rgba(0,212,255,0.1)] pt-4">
                <div className="w-9 h-9 overflow-hidden flex-shrink-0 border border-[rgba(0,212,255,0.2)]">
                  <AppImage
                    src={t.avatar}
                    alt={t.avatarAlt}
                    width={36}
                    height={36}
                    className="object-cover w-full h-full grayscale"
                  />
                </div>
                <div>
                  <p className="text-white text-xs font-black uppercase tracking-wide">{t.name}</p>
                  <p className="text-[#5A6A85] text-[10px]">{t.college}</p>
                  <p className="text-[#5A6A85] text-[10px]">{t.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate rating */}
        <div className="mt-12 glass-card rounded-sm p-8 max-w-2xl mx-auto text-center space-y-3">
          <div className="flex justify-center gap-1">
            {[1,2,3,4,5].map(i => (
              <span key={i} className="text-[#FF0A2F] text-2xl" style={{ textShadow: '0 0 10px rgba(255,10,47,0.7)' }}>★</span>
            ))}
          </div>
          <p className="text-white text-3xl font-black">5.0 / 5.0</p>
          <p className="text-[#5A6A85] text-xs uppercase tracking-wider">
            Based on 40+ student reviews across India&apos;s top engineering colleges
          </p>
        </div>
      </div>
    </section>
  );
}
