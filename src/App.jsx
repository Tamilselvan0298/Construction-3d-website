import React, { useState } from 'react';
import { RouterProvider, useRouter } from './router/Router';
import KPHeader from './components/KP/KPHeader';
import KPFooter from './components/KP/KPFooter';
import KPFloatingBar from './components/KP/KPFloatingBar';
import KPConsultationModal from './components/KP/KPConsultationModal';

// PAGE VIEWS
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import StrengthsServicesPage from './pages/StrengthsServicesPage';
import OngoingProjectsPage from './pages/OngoingProjectsPage';
import CompletedProjectsPage from './pages/CompletedProjectsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

function AppContent() {
  const { currentPath } = useRouter();
  const [consultationOpen, setConsultationOpen] = useState(false);

  const openConsultation = () => setConsultationOpen(true);
  const closeConsultation = () => setConsultationOpen(false);

  const renderPage = () => {
    switch (currentPath) {
      case '/about':
        return <AboutPage onOpenConsultation={openConsultation} />;
      case '/strengths-services':
        return <StrengthsServicesPage onOpenConsultation={openConsultation} />;
      case '/projects/ongoing':
        return <OngoingProjectsPage onOpenConsultation={openConsultation} />;
      case '/projects':
      case '/projects/completed':
        return <CompletedProjectsPage onOpenConsultation={openConsultation} />;
      case '/gallery':
        return <GalleryPage onOpenConsultation={openConsultation} />;
      case '/contact':
        return <ContactPage />;
      case '/privacy':
        return <PrivacyPage />;
      case '/terms':
        return <TermsPage />;
      case '/':
      default:
        return <HomePage onOpenConsultation={openConsultation} />;
    }
  };

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-blue selection:text-white">
      {/* AMBIENT BACKGROUND GLOW & BLUEPRINT TEXTURE */}
      <div aria-hidden={true} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top, #faf7f2 0%, #ffffff 45%, #fdfcf9 100%)' }} />
        <div className="absolute -inset-[10%] blueprint-bg [mask-image:radial-gradient(ellipse_60%_55%_at_50%_40%,black_40%,transparent_85%)] will-change-transform" style={{ opacity: 0.5 }} />
        <div className="absolute -inset-[10%] opacity-[0.05] will-change-transform" style={{ backgroundImage: 'repeating-linear-gradient(135deg, #111827 0 1px, transparent 1px 14px)' }} />
        <div className="absolute -left-[10%] top-[8%] h-[520px] w-[520px] rounded-full blur-[140px] will-change-transform" style={{ background: 'radial-gradient(circle at 35% 35%, rgba(245,158,11,0.22), transparent 65%)' }} />
        <div className="absolute right-[-8%] top-[32%] h-[600px] w-[600px] rounded-full blur-[150px] will-change-transform" style={{ background: 'radial-gradient(circle at 60% 40%, rgba(234,88,12,0.18), transparent 65%)' }} />
        <div className="absolute left-[28%] bottom-[-10%] h-[560px] w-[560px] rounded-full blur-[160px] will-change-transform" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.18), rgba(234,88,12,0.14) 45%, transparent 70%)' }} />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/60 to-transparent" />
      </div>

      {/* PERSISTENT FIXED HEADER */}
      <KPHeader onOpenConsultation={openConsultation} />

      {/* DYNAMIC PAGE VIEW */}
      <main id="main-content" className="relative min-h-screen">
        {renderPage()}
      </main>

      {/* PERSISTENT FOOTER */}
      <KPFooter />

      {/* FLOATING ACTION BUTTONS */}
      <KPFloatingBar onOpenConsultation={openConsultation} />

      {/* CONSULTATION MODAL DIALOG */}
      <KPConsultationModal
        isOpen={consultationOpen}
        onClose={closeConsultation}
      />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
