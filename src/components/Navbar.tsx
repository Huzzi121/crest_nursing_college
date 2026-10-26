import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';
import { CrestLogo } from './common/CrestLogo';
import { siteContent } from '../config/siteContent';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
      <header className="fixed top-2 sm:top-3 left-0 right-0 z-50 px-2.5 sm:px-4 pointer-events-none transition-all duration-300">
        <div
          className={`navbar-pill max-w-5xl mx-auto rounded-full transition-all duration-300 pointer-events-auto px-3 sm:px-5 py-1.5 sm:py-2 flex items-center justify-between text-white ${
            isScrolled ? 'shadow-2xl shadow-black/40 scale-[0.99] !bg-[#072624]/75' : 'shadow-lg shadow-black/20'
          }`}
        >
          {/* 1. Crest Logo Button */}
          <a
            href="#hero"
            className="outline-none focus-visible:ring-2 focus-visible:ring-crest-gold rounded-full transition-transform hover:scale-[1.02] flex items-center flex-shrink-0"
            aria-label="Crest College of Nursing Homepage"
          >
            <CrestLogo variant="light" className="scale-75 sm:scale-80 md:scale-85 origin-left" />
          </a>

          {/* 2. Desktop Navigation Links with Capsule Hover Animation */}
          <nav
            onMouseLeave={() => setHoveredLink(null)}
            className="hidden md:flex items-center justify-center gap-0.5 lg:gap-1.5"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const isHovered = hoveredLink === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  className={`relative px-3 py-1 lg:px-3.5 lg:py-1.5 rounded-full text-xs lg:text-[13px] font-semibold tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-crest-gold font-bold'
                      : 'text-white/85 hover:text-white'
                  }`}
                >
                  {/* Floating Capsule Animation on Hover */}
                  {isHovered && (
                    <motion.div
                      layoutId="navHoverCapsule"
                      className="absolute inset-0 bg-white/20 rounded-full border border-white/25 shadow-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.3 }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.label}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-crest-gold shadow-[0_0_6px_#F5BC28]" />
                    )}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* 3. Right Action Pill Button (Desktop) & Menu Button (Mobile) */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Desktop Contact Button */}
            <button
              onClick={onOpenInquiry}
              className="hidden md:flex rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 bg-[#FAF7F2]/95 hover:bg-white text-crest-heading font-bold text-xs sm:text-[13px] tracking-wide transition-all duration-200 shadow-sm hover:shadow-md items-center gap-1.5 group hover:scale-[1.03] active:scale-[0.98] border border-white/40"
            >
              <span>Contact us</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-crest-teal transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Menu Button - Distinct, high-contrast, touch-friendly */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 border border-white/20 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-sm"
            >
              {mobileMenuOpen ? (
                <>
                  <X className="w-3.5 h-3.5 text-crest-gold" />
                  <span>Close</span>
                </>
              ) : (
                <>
                  <Menu className="w-3.5 h-3.5 text-crest-gold" />
                  <span>Menu</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-crest-heading/70 backdrop-blur-sm"
            />

            {/* Slide-out Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-[82%] max-w-xs bg-[#0A3D39] text-white shadow-2xl p-5 sm:p-6 flex flex-col justify-between overflow-y-auto border-l border-white/10 z-10"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <CrestLogo variant="light" className="scale-85 origin-left" />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 active:scale-95 transition-colors"
                  >
                    <X className="w-4 h-4 text-crest-gold" />
                  </button>
                </div>

                <nav className="mt-5 flex flex-col gap-1.5">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <a
                        key={link.id}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-between ${
                          isActive
                            ? 'bg-white/15 text-crest-gold font-extrabold border border-crest-gold/30'
                            : 'text-white/85 hover:bg-white/10'
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-crest-gold shadow-[0_0_8px_#F5BC28]" />
                        )}
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-5 border-t border-white/10 space-y-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full py-2.5 px-4 rounded-full bg-[#FAF7F2] hover:bg-white text-crest-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-98 transition-all"
                >
                  <span>Admissions Inquiry</span>
                  <ArrowUpRight className="w-4 h-4 text-crest-teal" />
                </button>

                <a
                  href={`tel:${siteContent.institution.phone}`}
                  className="w-full py-2.5 px-4 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors border border-white/10"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-crest-gold" />
                  <span>Call {siteContent.institution.phone}</span>
                </a>

                <p className="text-center text-[10px] text-white/60 tracking-wider pt-1">
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
