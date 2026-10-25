import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { CrestLogo } from './common/CrestLogo';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll position for header glass transition & active section indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      // Section scroll-spy
      const sections = ['hero', 'about', 'programs', 'clinical', 'careers', 'student-life', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'Programs', href: '#programs', id: 'programs' },
    { label: 'Skills', href: '#clinical', id: 'clinical' },
    { label: 'Careers', href: '#careers', id: 'careers' },
    { label: 'Campus Life', href: '#student-life', id: 'student-life' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Floating Island Capsule Pill Header */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none transition-all duration-300">
        <div
          className={`navbar-pill max-w-6xl mx-auto rounded-full transition-all duration-300 pointer-events-auto px-4 sm:px-6 lg:px-7 py-2.5 sm:py-3 flex items-center justify-between border border-white/20 bg-[#0A3D39] text-white ${
            isScrolled ? 'shadow-2xl shadow-black/40 scale-[0.99]' : 'shadow-xl shadow-black/25'
          }`}
        >
          {/* 1. Crest Logo Button */}
          <a
            href="#hero"
            className="outline-none focus-visible:ring-2 focus-visible:ring-crest-gold rounded-full transition-transform hover:scale-[1.02] flex items-center flex-shrink-0"
            aria-label="Crest College of Nursing Homepage"
          >
            <CrestLogo variant="light" className="scale-90 sm:scale-95 origin-left" />
          </a>

          {/* 2. Desktop Navigation Links with Strictly Equal Distances */}
          <nav className="hidden md:flex items-center justify-center gap-4 md:gap-5 lg:gap-7 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 text-xs md:text-[13px] lg:text-sm font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPillIndicator"
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-crest-gold rounded-full shadow-[0_0_8px_#F5BC28]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* 3. Right Action Pill Button */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={onOpenInquiry}
              className="rounded-full px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 bg-[#FAF7F2] hover:bg-white text-crest-heading font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-md flex items-center gap-1.5 sm:gap-2 group hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Contact us</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-crest-teal transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-crest-heading/60 backdrop-blur-sm"
            />

            {/* Slide-out Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#0A3D39] text-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-white/10"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <CrestLogo variant="light" compact />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="mt-6 flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                        activeSection === link.id
                          ? 'bg-white/15 text-crest-gold font-extrabold'
                          : 'text-white/85 hover:bg-white/10'
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full py-3 px-5 rounded-full bg-[#FAF7F2] hover:bg-white text-crest-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Contact us</span>
                  <ArrowUpRight className="w-4 h-4 text-crest-teal" />
                </button>

                <p className="text-center text-[11px] text-white/60">
                  Abbottabad, Khyber Pakhtunkhwa, Pakistan
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
