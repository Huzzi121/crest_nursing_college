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
    <div className="min-h-screen bg-white text-crest-body flex flex-col selection:bg-crest-turquoise selection:text-white">
      {/* Sticky Top Header Navigation */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      {/* Main Single-Page Content Flow */}
      <main className="flex-1">
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
