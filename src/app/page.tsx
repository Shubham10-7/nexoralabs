import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ServicesSection from '@/app/components/ServicesSection';
import HowItWorksSection from '@/app/components/HowItWorksSection';
import TeamSection from '@/app/components/TeamSection';
import DashboardPreviewSection from '@/app/components/DashboardPreviewSection';
import PortfolioSection from '@/app/components/PortfolioSection';
import PricingSection from '@/app/components/PricingSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import ContactSection from '@/app/components/ContactSection';
import CursorGlow from '@/app/components/CursorGlow';
import LiveStatsBar from '@/app/components/LiveStatsBar';

export default function HomePage() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <CursorGlow />
      <Header />
      <main className="pb-10">
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <DashboardPreviewSection />
        <TeamSection />
        <PortfolioSection />
        <PricingSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <LiveStatsBar />
    </>
  );
}