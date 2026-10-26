import React, { useState } from 'react';
import { HeartPulse, GraduationCap, Award, Users, ArrowRight, Compass } from 'lucide-react';
import { siteContent } from '../config/siteContent';
import { MotionWrapper } from './common/MotionWrapper';

export const CareersSection: React.FC = () => {
  const [selectedPathway, setSelectedPathway] = useState<number>(0);

  const getPathwayIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'Award':
        return <Award className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      default:
        return <HeartPulse className="w-5 h-5" />;
    }
  };

  const active = siteContent.careers.pathways[selectedPathway];

  return (
    <section id="careers" className="py-8 sm:py-12 bg-transparent relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionWrapper direction="up" className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crest-bgAlt border border-crest-border text-xs font-bold uppercase tracking-wider text-crest-teal mb-3 shadow-crest-sm">
            <Compass className="w-3.5 h-3.5 text-crest-gold" />
            <span>{siteContent.careers.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-crest-heading tracking-tight leading-tight">
            {siteContent.careers.headline}
          </h2>
          <p className="text-crest-body text-base sm:text-lg mt-3 leading-relaxed">
            {siteContent.careers.subheadline}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-crest-teal to-crest-turquoise mx-auto mt-4 rounded-full" />
        </MotionWrapper>

        {/* 4 Career Pathway Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {siteContent.careers.pathways.map((pathway, idx) => {
            const isSelected = selectedPathway === idx;
            return (
              <MotionWrapper
                key={pathway.id}
                direction="up"
                delay={idx * 0.08}
              >
                <div
                  onClick={() => setSelectedPathway(idx)}
                  className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 h-full flex flex-col justify-between relative group ${
                    isSelected
                      ? 'bg-crest-teal text-white border-crest-teal shadow-crest-md'
                      : 'bg-crest-bgAlt hover:bg-white border-crest-border text-crest-heading hover:shadow-crest-sm'
                  }`}
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                        isSelected
                          ? 'bg-white/15 text-crest-gold'
                          : 'bg-white text-crest-teal border border-crest-border group-hover:scale-105'
                      }`}
                    >
                      {getPathwayIcon(pathway.iconName)}
                    </div>

                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                        isSelected ? 'text-crest-turquoiseLight' : 'text-crest-body'
                      }`}
                    >
                      {pathway.subtitle}
                    </span>

                    <h3
                      className={`text-lg font-bold leading-snug mb-3 ${
                        isSelected ? 'text-white' : 'text-crest-heading'
                      }`}
                    >
                      {pathway.title}
                    </h3>

                    <p
                      className={`text-xs leading-relaxed ${
                        isSelected ? 'text-white/80' : 'text-crest-body'
                      }`}
                    >
                      {pathway.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-current/15 flex items-center justify-between">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider ${
                        isSelected ? 'text-crest-gold' : 'text-crest-teal'
                      }`}
                    >
                      {isSelected ? 'Viewing Roadmap' : 'Explore Pathway'}
                    </span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isSelected ? 'translate-x-1 text-crest-gold' : 'text-crest-teal group-hover:translate-x-1'
                      }`}
                    />
                  </div>
                </div>
              </MotionWrapper>
            );
          })}
        </div>

        {/* Interactive Horizontal Career Progression Timeline */}
        <MotionWrapper direction="up" className="rounded-3xl bg-crest-bgAlt border border-crest-border p-6 sm:p-10 shadow-crest-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-crest-teal">
                Career Progression Roadmap
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-crest-heading mt-0.5">
                {active.title} — Developmental Journey
              </h4>
            </div>
            <span className="text-xs text-crest-body/80 bg-white px-3.5 py-1.5 rounded-full border border-crest-border self-start md:self-auto">
              Indicative Career Progression
            </span>
          </div>

          {/* Stepper Timeline */}
          <div className="relative">
            {/* Horizontal Line across stages for desktop */}
            <div className="hidden md:block absolute top-6 left-12 right-12 h-0.5 bg-crest-border z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
              {active.milestones.map((stage, idx) => (
                <div key={idx} className="flex md:flex-col items-start gap-4">
                  {/* Step Number Circle */}
                  <div className="w-12 h-12 rounded-2xl bg-white border-2 border-crest-teal text-crest-teal font-extrabold flex items-center justify-center shadow-crest-sm flex-shrink-0">
                    0{idx + 1}
                  </div>

                  {/* Stage Text */}
                  <div className="pt-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-crest-teal block">
                      Stage 0{idx + 1}
                    </span>
                    <h5 className="text-sm sm:text-base font-bold text-crest-heading mt-0.5">
                      {stage}
                    </h5>
                    <p className="text-xs text-crest-body mt-1">
                      {idx === 0 && 'Foundation coursework & clinical simulation labs.'}
                      {idx === 1 && 'Rotational ward exposure & preceptor guidance.'}
                      {idx === 2 && 'Advanced credentials & clinical autonomy.'}
                      {idx === 3 && 'Administrative, clinical, or academic oversight.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};
