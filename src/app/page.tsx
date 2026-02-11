import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { WhatIsPoutreachSection } from '@/components/landing/what-is-poutreach-section';
import { SoftwareSolutionsSection } from '@/components/landing/software-solutions-section';
import { RoboticsSolutionsSection } from '@/components/landing/robotics-solutions-section';
import { TechnologySection } from '@/components/landing/technology-section';
import { WhoItsForSection } from '@/components/landing/who-its-for-section';
import { WhyPoutreachSection } from '@/components/landing/why-poutreach-section';
import { CareersSection } from '@/components/landing/careers-section';
import { CtaSection } from '@/components/landing/cta-section';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <WhatIsPoutreachSection />
        <SoftwareSolutionsSection />
        <RoboticsSolutionsSection />
        <TechnologySection />
        <WhoItsForSection />
        <WhyPoutreachSection />
        <CareersSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
