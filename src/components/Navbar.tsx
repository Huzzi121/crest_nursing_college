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
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Programs', href: '#programs', id: 'programs' },
    { label: 'Clinical Skills', href: '#clinical', id: 'clinical' },
    { label: 'Careers', href: '#careers', id: 'careers' },
    { label: 'Campus Life', href: '#student-life', id: 'student-life' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-crest-sm border-b border-crest-border/80 py-3'
            : 'bg-white/80 backdrop-blur-sm py-4 border-b border-crest-border/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#hero"
              className="outline-none focus-visible:ring-2 focus-visible:ring-crest-teal rounded-lg"
              aria-label="Crest College of Nursing Homepage"
            >
              <CrestLogo />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors rounded-lg ${
                      isActive
                        ? 'text-crest-teal'
                        : 'text-crest-body hover:text-crest-heading hover:bg-crest-bgAlt/80'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-crest-teal rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${siteContent.institution.phone}`}
                className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-crest-body hover:text-crest-teal transition-colors px-2 py-1"
              >
                <PhoneCall className="w-3.5 h-3.5 text-crest-turquoise" />
                <span>{siteContent.institution.phone}</span>
              </a>

              <button
                onClick={onOpenInquiry}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-crest-teal hover:bg-crest-tealDark text-white text-xs font-bold uppercase tracking-wider shadow-crest-sm hover:shadow-crest-md transition-all duration-200 group"
              >
                <span>Admissions Inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-crest-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenInquiry}
                className="sm:hidden px-3 py-1.5 rounded-lg bg-crest-teal text-white text-xs font-bold uppercase tracking-wider"
              >
                Inquire
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                className="w-10 h-10 rounded-xl border border-crest-border bg-crest-bgAlt/50 flex items-center justify-center text-crest-heading hover:bg-crest-bgAlt transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
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
              className="fixed inset-0 bg-crest-heading/50 backdrop-blur-sm"
            />

            {/* Slide-out Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-crest-border">
                  <CrestLogo compact />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="w-9 h-9 rounded-full bg-crest-bgAlt flex items-center justify-center text-crest-heading hover:bg-crest-border transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="mt-6 flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                        activeSection === link.id
                          ? 'bg-crest-turquoise/10 text-crest-teal font-extrabold'
                          : 'text-crest-heading hover:bg-crest-bgAlt'
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-crest-border space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-crest-teal hover:bg-crest-tealDark text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-crest-md"
                >
                  <span>Admissions Inquiry</span>
                  <ArrowUpRight className="w-4 h-4 text-crest-gold" />
                </button>

                <p className="text-center text-[11px] text-crest-body">
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
