'use client';
import React, { useState, useRef, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';

type Category = 'All' | 'AI/ML' | 'Web App' | 'Mobile' | 'Final Year';

interface Project {
  title: string;
  category: Category;
  tech: string[];
  image: string;
  imageAlt: string;
  client: string;
  review: string;
  rating: number;
  college: string;
}

const projects: Project[] = [
{
  title: 'AI Crop Disease Detector',
  category: 'AI/ML',
  tech: ['Python', 'TensorFlow', 'Flask', 'React'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11bbbaed5-1767273195080.png",
  imageAlt: 'Green agricultural field with data visualization overlay, bright daylight, wide open sky',
  client: 'Rahul Gupta',
  review: 'Got 95% accuracy and my professor was genuinely impressed. Best investment for my final year.',
  rating: 5,
  college: 'VIT University'
},
{
  title: 'Student Marketplace App',
  category: 'Web App',
  tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a7e3cd78-1767460470099.png",
  imageAlt: 'Clean e-commerce interface on laptop screen, bright modern workspace, white desk',
  client: 'Aisha Khan',
  review: 'They built it in 3 weeks and it actually works in production. Super professional team.',
  rating: 5,
  college: 'BITS Pilani'
},
{
  title: 'Fitness Tracker Mobile App',
  category: 'Mobile',
  tech: ['React Native', 'Firebase', 'Redux'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b730e7e3-1772411330506.png",
  imageAlt: 'Fitness app UI on smartphone, gym equipment in background, bright athletic environment',
  client: 'Dev Patel',
  review: 'Smooth animations, great UX. Exactly what I described in my SRS document.',
  rating: 5,
  college: 'NIT Trichy'
},
{
  title: 'Smart Attendance System',
  category: 'Final Year',
  tech: ['Python', 'OpenCV', 'Raspberry Pi', 'React'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10ee5a59f-1778480412287.png",
  imageAlt: 'Computer vision face detection interface, bright lab environment, technical equipment',
  client: 'Shreya Nair',
  review: 'Face recognition + admin dashboard. Scored A+ in my final year evaluation.',
  rating: 5,
  college: 'IIIT Hyderabad'
},
{
  title: 'Mental Health Chatbot',
  category: 'AI/ML',
  tech: ['Python', 'BERT', 'FastAPI', 'Next.js'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c19c3128-1765864901035.png",
  imageAlt: 'Chat interface on light background, clean minimal UI, soft warm lighting',
  client: 'Karan Bose',
  review: 'NLP model was impressive. Panel loved the technical depth of the project.',
  rating: 5,
  college: 'MNIT Jaipur'
},
{
  title: 'Delivery Tracking Dashboard',
  category: 'Web App',
  tech: ['Next.js', 'Socket.io', 'PostgreSQL', 'Mapbox'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10757fc2f-1776162165577.png",
  imageAlt: 'Real-time logistics dashboard on monitor, clean office, bright natural light',
  client: 'Meera Pillai',
  review: 'Real-time updates, beautiful maps. Deployed to production within the deadline.',
  rating: 5,
  college: 'SRM University'
}];


const categories: Category[] = ['All', 'AI/ML', 'Web App', 'Mobile', 'Final Year'];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered =
  activeFilter === 'All' ?
  projects :
  projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.portfolio-reveal');
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [activeFilter]);

  return (
    <section id="portfolio" className="py-24 px-6 md:px-8 relative overflow-hidden">
      <div
        className="blob-secondary absolute w-[600px] h-[600px] bottom-0 right-0 pointer-events-none opacity-40"
        aria-hidden="true" />
      

      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="section-label mx-auto">Portfolio</span>
          <h2 className="text-section-title text-foreground">
            Projects That Got
            <br />
            <span className="gradient-text">A+ Grades.</span>
          </h2>
          <p className="text-secondary-foreground text-base max-w-lg mx-auto leading-relaxed">
            Real projects built for real students. Every project here has been
            submitted, presented, and approved.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) =>
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`portfolio-filter-btn ${activeFilter === cat ? 'active' : ''}`}>
            
              {cat}
            </button>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((proj) =>
          <div
            key={proj.title}
            className="portfolio-reveal glass-card-hover rounded-2xl overflow-hidden group"
            style={{
              opacity: 0,
              transform: 'translateY(30px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease'
            }}>
            
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={proj.image}
                alt={proj.imageAlt}
                width={600}
                height={400}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="tag-pill-blue">{proj.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <h3 className="text-foreground font-bold text-base">{proj.title}</h3>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) =>
                <span key={t} className="skill-chip">{t}</span>
                )}
                </div>

                {/* Review */}
                <div className="border-t border-border/30 pt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-foreground text-xs font-bold">{proj.client}</p>
                      <p className="text-muted-foreground text-xs">{proj.college}</p>
                    </div>
                    <div className="star-rating">
                      {'★'.repeat(proj.rating)}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed italic">
                    &ldquo;{proj.review}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}