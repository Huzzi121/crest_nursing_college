import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteAssets } from '../config/siteAssets';
import { siteContent } from '../config/siteContent';
import { MotionWrapper } from './common/MotionWrapper';

interface AdmissionsSectionProps {
  onOpenInquiry: () => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper direction="up">
          <div className="relative rounded-3xl bg-gradient-to-br from-crest-teal via-crest-tealSecondary to-crest-tealDark text-white overflow-hidden shadow-2xl p-8 sm:p-12 lg:p-16">
            {/* Background Medical Cross & Glow Watermarks */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-crest-turquoise/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-crest-gold/10 rounded-full blur-2xl pointer-events-none" />

            {/* Content & Asymmetrical Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-7">
                {/* Gold Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-crest-gold/40 text-crest-gold text-xs font-bold uppercase tracking-wider mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{siteContent.admissions.sectionTag}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                  {siteContent.admissions.headline}
                </h2>

                <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                  {siteContent.admissions.subheadline}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenInquiry}
                    className="px-8 py-4 rounded-xl bg-crest-gold hover:bg-crest-goldDark text-crest-heading font-extrabold text-xs uppercase tracking-wider shadow-crest-lg hover:shadow-2xl transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span>{siteContent.admissions.primaryCta}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <a
                    href="#contact"
                    className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200"
                  >
                    {siteContent.admissions.secondaryCta}
                  </a>
                </div>

                {/* Conservative Prototype Disclaimer */}
                <p className="text-[11px] text-white/60 mt-8 max-w-lg">
                  {siteContent.admissions.note}
                </p>
              </div>

              {/* Mentorship Photograph Thumbnail with Gold Accent Line */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3] bg-crest-tealDark/50">
                  <img
                    src={siteAssets.admissionsVisual}
                    alt="Crest College Healthcare Mentorship and Academic Guidance"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-crest-heading/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-crest-gold block">
                      Academic Advising
                    </span>
                    <p className="text-xs font-medium text-white/90">
                      Personalized guidance for prospective healthcare scholars
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};
