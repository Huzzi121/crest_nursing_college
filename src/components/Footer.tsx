import React from 'react';
import { ArrowUp } from 'lucide-react';
import { CrestLogo } from './common/CrestLogo';
import { siteContent } from '../config/siteContent';
import { HeartbeatLine } from './common/HeartbeatLine';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-crest-heading text-white relative overflow-hidden pt-16 pb-12">
      {/* Animated Subtle ECG Heartbeat Flourish across top border */}
      <div className="absolute top-0 inset-x-0">
        <HeartbeatLine height={24} strokeColor="#13A6A0" glowColor="rgba(19, 166, 160, 0.4)" showDot={false} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <CrestLogo variant="light" className="mb-4" />
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-sm mt-3">
                {siteContent.institution.tagline}. Dedicated to delivering premier nursing education and ethical healthcare leadership in Abbottabad, Pakistan.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-crest-gold">
                Follow Official Channels:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram profile"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook page"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn page"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube channel"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136c-1.87-.5-9.376-.5-9.376-.5s-7.506 0-9.376.5a3.016 3.016 0 0 0-2.122 2.136c-.5 1.884-.5 5.814-.5 5.814s0 3.93.5 5.814a3.016 3.016 0 0 0 2.122 2.136c1.87.5 9.376.5 9.376.5s7.506 0 9.376-.5a3.016 3.016 0 0 0 2.122-2.136c.5-1.884.5-5.814.5-5.814s0-3.93-.5-5.814zm-13.498 9.314v-7l6 3.5-6 3.5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-crest-gold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Crest College
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  Programs & Curricula
                </a>
              </li>
              <li>
                <a href="#clinical" className="hover:text-white transition-colors">
                  Clinical Skills Laboratories
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white transition-colors">
                  Nursing Career Trajectories
                </a>
              </li>
              <li>
                <a href="#student-life" className="hover:text-white transition-colors">
                  Campus Life in Abbottabad
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Admissions Office & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Academic Offerings Column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-crest-gold mb-4">
              Featured Programs
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li>
                <a href="#programs" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Bachelor of Science in Nursing (Generic BSN)</span>
                  <span className="text-[10px] text-crest-turquoise">4 Yrs</span>
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Post-RN BSN Degree</span>
                  <span className="text-[10px] text-crest-turquoise">2 Yrs</span>
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Certified Nursing Assistant (CNA)</span>
                  <span className="text-[10px] text-crest-turquoise">2 Yrs</span>
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Lady Health Visitor (LHV) Diploma</span>
                  <span className="text-[10px] text-crest-turquoise">2 Yrs</span>
                </a>
              </li>
            </ul>

            <div className="mt-6 p-3.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-white/70">
              <span className="font-semibold text-crest-gold block mb-0.5">
                Institutional Pitch Prototype:
              </span>
              Designed as a premium digital experience demonstration for Crest College of Nursing.
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} Crest College of Nursing, Abbottabad. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Education
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-crest-turquoise hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
