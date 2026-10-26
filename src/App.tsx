import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { ClinicalSection } from './components/ClinicalSection';
import { CareersSection } from './components/CareersSection';
import { StudentLifeSection } from './components/StudentLifeSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';

export function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedProgramId, setSelectedProgramId] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (programId?: string) => {
    setSelectedProgramId(programId);
    setInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-transparent text-crest-body flex flex-col selection:bg-crest-turquoise selection:text-white overflow-x-hidden w-full relative p-0 m-0">
      {/* Static Global Background with 40% Blur */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Desktop Background (md and up) - 100% UNCHANGED */}
        <img
          src="/assets/images/global_bg.png"
          alt="Teal Accessibility Community Background"
          className="hidden md:block w-full h-full object-cover object-center filter blur-[10px] scale-[1.04] opacity-85"
        />

        {/* Mobile Background (< md) - Dedicated Portrait Accessibility Poster */}
        <img
          src="/assets/images/global_bg_mobile.png"
          alt="Inclusive Accessibility Mobile Background"
          className="md:hidden w-full h-full object-cover object-center filter blur-[10px] scale-[1.04] opacity-85"
        />

        {/* Soft luminous overlay to ensure optimal contrast and readability */}
        <div className="absolute inset-0 bg-white/45 backdrop-blur-[2px]" />
      </div>

      {/* Sticky Top Header Navigation */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      {/* Main Single-Page Content Flow without extra padding */}
      <main className="flex-1 p-0 m-0">
        <HeroSection onOpenInquiry={() => handleOpenInquiry()} />
        <AboutSection />
        <ProgramsSection onOpenInquiry={handleOpenInquiry} />
        <ClinicalSection />
        <CareersSection />
        <StudentLifeSection />
        <AdmissionsSection onOpenInquiry={() => handleOpenInquiry()} />
        <ContactSection onOpenInquiry={() => handleOpenInquiry()} />
      </main>

      {/* Institutional Editorial Footer */}
      <Footer />

      {/* Global Interactive Admissions Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={handleCloseInquiry}
        preselectedProgramId={selectedProgramId}
      />
    </div>
  );
}

export default App;
