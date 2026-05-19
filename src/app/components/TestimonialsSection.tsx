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
  review:
  "I had no idea how to build a machine learning model. NexoraLabs not only built it but explained every component so I could defend it in my viva. Got an A+.",
  rating: 5,
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_17a1f455f-1763296936452.png",
  avatarAlt: 'Young Indian male student smiling in campus setting, casual attire'
},
{
  name: 'Aisha Khan',
  college: 'BITS Pilani',
  year: 'MCA, 2025',
  project: 'Student Marketplace',
  review:
  "Delivered 2 days before the deadline with all the features I asked for. The documentation was IEEE-standard. My professor asked who built it — I said my team.",
  rating: 5,
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1dfe33a84-1772408653077.png",
  avatarAlt: 'Young Indian female student with warm smile, library background, natural light'
},
{
  name: 'Dev Patel',
  college: 'NIT Trichy',
  year: 'B.Tech IT, 2024',
  project: 'Fitness Tracker App',
  review:
  "The React Native app looks like something from the Play Store. Smooth, fast, and fully functional. Worth every rupee.",
  rating: 5,
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_17a1f455f-1763296936452.png",
  avatarAlt: 'Young Indian male student in casual clothes, confident expression, outdoor setting'
},
{
  name: 'Shreya Nair',
  college: 'IIIT Hyderabad',
  year: 'B.Tech ECE, 2025',
  project: 'Smart Attendance IoT',
  review:
  "Face recognition on Raspberry Pi + a beautiful React dashboard. The hardware + software integration was flawless. Best final year experience ever.",
  rating: 5,
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e03fecaf-1763301929081.png",
  avatarAlt: 'Young Indian female student smiling, bright campus background, professional look'
},
{
  name: 'Karan Bose',
  college: 'MNIT Jaipur',
  year: 'B.Tech CSE, 2025',
  project: 'Mental Health Chatbot',
  review:
  "The BERT-based NLP model blew my panel away. Arjun walked me through the architecture before my presentation. That kind of support is rare.",
  rating: 5,
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_18429a24e-1772143891863.png",
  avatarAlt: 'Young Indian male student in glasses, study environment, focused expression'
},
{
  name: 'Meera Pillai',
  college: 'SRM University',
  year: 'MBA Tech, 2025',
  project: 'Delivery Tracking Dashboard',
  review:
  "Real-time socket updates, Mapbox integration, and a clean admin panel. My startup demo went perfectly because of this project.",
  rating: 5,
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_15f4e23f6-1763300607163.png",
  avatarAlt: 'Young Indian female professional student, modern office setting, confident smile'
}];


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
      <div
        className="blob-primary absolute w-[500px] h-[500px] top-0 right-0 pointer-events-none opacity-30"
        aria-hidden="true" />
      

      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="section-label mx-auto">Student Reviews</span>
          <h2 className="text-section-title text-foreground">
            Students Who
            <br />
            <span className="gradient-text">Aced Their Projects.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) =>
          <div
            key={t.name}
            className="testi-reveal glass-card-hover rounded-2xl p-6 flex flex-col gap-5"
            style={{
              opacity: 0,
              transform: 'translateY(30px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease'
            }}>
            
              {/* Rating */}
              <div className="star-rating text-base">
                {'★'.repeat(t.rating)}
              </div>

              {/* Quote */}
              <p className="text-secondary-foreground text-sm leading-relaxed flex-1">
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Project tag */}
              <span className="tag-pill self-start">{t.project}</span>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-border/30 pt-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                  src={t.avatar}
                  alt={t.avatarAlt}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full" />
                
                </div>
                <div>
                  <p className="text-foreground text-sm font-bold">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.college}</p>
                  <p className="text-muted-foreground text-xs">{t.year}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Aggregate rating */}
        <div className="mt-16 glass-card rounded-2xl p-8 max-w-2xl mx-auto text-center space-y-3">
          <div className="star-rating text-3xl">★★★★★</div>
          <p className="text-foreground text-2xl font-black">5.0 / 5.0</p>
          <p className="text-muted-foreground text-sm">
            Based on 40+ student reviews across India&apos;s top engineering colleges
          </p>
        </div>
      </div>
    </section>);

}