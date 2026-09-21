import React from 'react';
import KPHero from '../components/KP/KPHero';
import KPMarquee from '../components/KP/KPMarquee';
import KPFounder from '../components/KP/KPFounder';
import KPReasons from '../components/KP/KPReasons';
import KPServices from '../components/KP/KPServices';
import KPProcess from '../components/KP/KPProcess';
import KPProjects from '../components/KP/KPProjects';
import KPOngoingProjects from '../components/KP/KPOngoingProjects';
import KPTestimonials from '../components/KP/KPTestimonials';
import KPFAQ from '../components/KP/KPFAQ';
import KPCTA from '../components/KP/KPCTA';

export default function HomePage({ onOpenConsultation }) {
  return (
    <>
      {/* 400VH FRAME-SCRUBBED 3D HERO BANNER */}
      <KPHero onStartProject={onOpenConsultation} />

      {/* PARTNER LOGO MARQUEE */}
      <KPMarquee />

      {/* FOUNDER & MANAGING DIRECTOR */}
      <KPFounder />

      {/* SEVEN REASONS OWNERS COME BACK */}
      <KPReasons onContact={onOpenConsultation} />

      {/* SIX DISCIPLINES (SERVICES) */}
      <KPServices onContact={onOpenConsultation} />

      {/* SIX STEPS. ZERO SURPRISES. (PROCESS) */}
      <KPProcess />

      {/* WORK THAT HOLDS ITS WEIGHT (FEATURED PROJECTS) */}
      <KPProjects />

      {/* CURRENTLY UNDER CONSTRUCTION (ONGOING PROJECTS) */}
      <KPOngoingProjects />

      {/* WHAT OUR CLIENTS ACTUALLY SAY (TESTIMONIALS) */}
      <KPTestimonials />

      {/* QUESTIONS, ANSWERED (FAQ) */}
      <KPFAQ />

      {/* READY TO BUILD YOUR NEXT PROJECT? (FINAL CTA) */}
      <KPCTA onOpenConsultation={onOpenConsultation} />
    </>
  );
}
