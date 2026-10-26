import React, { useState } from 'react';
import { Clock, ArrowRight, CheckCircle2, GraduationCap } from 'lucide-react';
import { siteContent } from '../config/siteContent';
import type { ProgramItem } from '../config/siteContent';
import { siteAssets } from '../config/siteAssets';
import { MotionWrapper } from './common/MotionWrapper';
import { ProgramDetailModal } from './ProgramDetailModal';

interface ProgramsSectionProps {
  onOpenInquiry: (programId?: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenInquiry }) => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  return (
    <section id="programs" className="py-8 sm:py-12 bg-transparent relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <MotionWrapper direction="up" className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crest-bgAlt border border-crest-border text-xs font-bold uppercase tracking-wider text-crest-teal mb-3 shadow-crest-sm">
              <GraduationCap className="w-3.5 h-3.5 text-crest-gold" />
              <span>{siteContent.programs.sectionTag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-crest-heading tracking-tight leading-tight">
              {siteContent.programs.headline}
            </h2>
            <p className="text-crest-body text-base sm:text-lg mt-3 leading-relaxed">
              {siteContent.programs.subheadline}
            </p>
          </MotionWrapper>

          <MotionWrapper direction="left" delay={0.2} className="flex-shrink-0">
            <button
              onClick={() => onOpenInquiry()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-crest-teal hover:bg-crest-tealDark text-white text-xs font-bold uppercase tracking-wider shadow-crest-sm hover:shadow-crest-md transition-all group"
            >
              <span>General Program Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5 text-crest-gold transition-transform group-hover:translate-x-1" />
            </button>
          </MotionWrapper>
        </div>

        {/* Feature Hero Card for Flagship Generic BSN */}
        <MotionWrapper direction="up" className="mb-10">
          <div className="relative rounded-3xl bg-crest-bgAlt border border-crest-border overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-crest-sm group">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto overflow-hidden">
              <img
                src={siteAssets.nursingStudents}
                alt="Generic BSN Nursing Student at Crest College"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-crest-heading/60 via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 bg-crest-gold text-crest-heading font-extrabold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                Flagship Degree
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-crest-body mb-2">
                  <span className="flex items-center gap-1.5 text-crest-teal font-bold">
                    <Clock className="w-4 h-4 text-crest-turquoise" />
                    4 Academic Years (8 Semesters)
                  </span>
                  <span>•</span>
                  <span>Undergraduate Degree</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-crest-heading mb-3">
                  Bachelor of Science in Nursing (Generic BSN)
                </h3>
                <p className="text-crest-body text-sm sm:text-base leading-relaxed mb-6">
                  Our premier nursing curriculum designed to develop well-rounded, evidence-based healthcare clinicians equipped for tertiary hospital wards, emergency departments, and advanced clinical specializations.
                </p>

                {/* Core Focus Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {[
                    'Adult Health & Medical Surgery',
                    'Pediatric & Maternal Health Care',
                    'Biomedical Sciences & Pharmacology',
                    'Community Health & Field Epidemiology',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-crest-body">
                      <CheckCircle2 className="w-3.5 h-3.5 text-crest-turquoise flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-crest-border">
                <button
                  onClick={() => setSelectedProgram(siteContent.programs.items[0])}
                  className="px-6 py-2.5 rounded-xl bg-crest-teal hover:bg-crest-tealDark text-white text-xs font-bold uppercase tracking-wider transition-all shadow-crest-sm flex items-center gap-2 group/btn"
                >
                  <span>Learn More & Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5 text-crest-gold transition-transform group-hover/btn:translate-x-1" />
                </button>

                <button
                  onClick={() => onOpenInquiry('generic-bsn')}
                  className="px-5 py-2.5 rounded-xl bg-white hover:bg-crest-bgAlt text-crest-heading border border-crest-border text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Apply For BSN
                </button>
              </div>
            </div>
          </div>
        </MotionWrapper>

        {/* 3 Secondary Programs in Distinctive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteContent.programs.items.slice(1).map((prog, idx) => (
            <MotionWrapper
              key={prog.id}
              direction="up"
              delay={0.1 * (idx + 1)}
              className="rounded-2xl bg-white border border-crest-border p-6 sm:p-7 flex flex-col justify-between hover:shadow-crest-md hover:border-crest-teal/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-crest-bgAlt text-crest-teal border border-crest-border">
                    {prog.credential}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-crest-body/80 font-medium">
                    <Clock className="w-3.5 h-3.5 text-crest-turquoise" />
                    <span>2 Years</span>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-crest-heading mb-2 group-hover:text-crest-teal transition-colors">
                  {prog.title}
                </h4>

                <p className="text-xs sm:text-sm text-crest-body leading-relaxed mb-4 line-clamp-3">
                  {prog.description}
                </p>

                <div className="space-y-1.5 mb-6">
                  {prog.focus.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-crest-body/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-crest-turquoise flex-shrink-0" />
                      <span className="truncate">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-crest-border flex items-center justify-between">
                <button
                  onClick={() => setSelectedProgram(prog)}
                  className="text-xs font-bold text-crest-teal hover:text-crest-tealDark flex items-center gap-1 group/link"
                >
                  <span>Program Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </button>

                <button
                  onClick={() => onOpenInquiry(prog.id)}
                  className="text-xs font-semibold text-crest-body hover:text-crest-heading"
                >
                  Inquire
                </button>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Client Pitch Disclaimer Pill */}
        <div className="mt-12 text-center">
          <p className="inline-block text-[11px] text-crest-body/70 bg-crest-bgAlt px-4 py-2 rounded-full border border-crest-border">
            * Sample academic programs shown for demonstration. Official curriculum approvals and seat quotas are published by the college.
          </p>
        </div>
      </div>

      {/* Program Detail Modal */}
      <ProgramDetailModal
        program={selectedProgram}
        isOpen={Boolean(selectedProgram)}
        onClose={() => setSelectedProgram(null)}
        onApply={(id) => onOpenInquiry(id)}
      />
    </section>
  );
};
