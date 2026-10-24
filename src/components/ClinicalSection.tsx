import React, { useState } from 'react';
import { Activity, Stethoscope, ShieldPlus, Cpu, Sparkles, Building2 } from 'lucide-react';
import { siteAssets } from '../config/siteAssets';
import { siteContent } from '../config/siteContent';
import { MotionWrapper } from './common/MotionWrapper';
import { HeartbeatLine } from './common/HeartbeatLine';

export const ClinicalSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabIcons = [
    <Activity className="w-4 h-4" key="sim" />,
    <Building2 className="w-4 h-4" key="rot" />,
    <ShieldPlus className="w-4 h-4" key="skills" />,
    <Cpu className="w-4 h-4" key="tech" />,
  ];

  return (
    <section id="clinical" className="py-20 lg:py-24 bg-crest-bgAlt relative overflow-hidden scroll-mt-20">
      {/* Decorative medical background lines */}
      <div className="absolute -top-24 right-10 w-72 h-72 bg-crest-turquoise/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionWrapper direction="up" className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-crest-border text-xs font-bold uppercase tracking-wider text-crest-teal mb-3 shadow-crest-sm">
            <Stethoscope className="w-3.5 h-3.5 text-crest-gold" />
            <span>{siteContent.clinical.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-crest-heading tracking-tight leading-tight">
            {siteContent.clinical.headline}
          </h2>
          <p className="text-crest-body text-base sm:text-lg mt-3 leading-relaxed">
            {siteContent.clinical.subheadline}
          </p>
        </MotionWrapper>

        {/* Asymmetrical Grid with Dominant Image & Dynamic Feature Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Interactive Domain Switcher & Detail Card */}
          <div className="lg:col-span-6 space-y-4">
            {siteContent.clinical.features.map((feat, idx) => {
              const isActive = activeTab === idx;
              return (
                <MotionWrapper
                  key={feat.id}
                  direction="up"
                  delay={idx * 0.1}
                >
                  <div
                    onClick={() => setActiveTab(idx)}
                    className={`cursor-pointer p-5 sm:p-6 rounded-2xl border transition-all duration-300 relative ${
                      isActive
                        ? 'bg-white border-crest-teal shadow-crest-md'
                        : 'bg-white/60 hover:bg-white border-crest-border'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                          isActive
                            ? 'bg-crest-teal text-white shadow-sm'
                            : 'bg-crest-bgAlt text-crest-teal border border-crest-border'
                        }`}
                      >
                        {tabIcons[idx]}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3
                            className={`text-base font-bold transition-colors ${
                              isActive ? 'text-crest-teal' : 'text-crest-heading'
                            }`}
                          >
                            {feat.title}
                          </h3>
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-crest-gold animate-pulse" />
                          )}
                        </div>

                        <p className="text-xs sm:text-sm text-crest-body mt-1 leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </MotionWrapper>
              );
            })}

            {/* Subtle ECG Line in clinical footer */}
            <div className="pt-4">
              <HeartbeatLine height={32} strokeColor="#13A6A0" glowColor="rgba(19, 166, 160, 0.2)" />
            </div>
          </div>

          {/* Right Column: Dominant Editorial Photograph & Visual Accents */}
          <div className="lg:col-span-6">
            <MotionWrapper direction="left" duration={0.8} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-crest-lg border-4 border-white aspect-[4/3] bg-white group">
                <img
                  src={siteAssets.clinicalLearning}
                  alt="Clinical Skills and Sterile Procedure Training"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-crest-heading/75 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Badge */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crest-teal/90 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-crest-gold mb-2 border border-crest-gold/30">
                    <Sparkles className="w-3.5 h-3.5 text-crest-gold" />
                    <span>Evidence-Based Clinical Protocol</span>
                  </div>
                  <h4 className="text-lg font-bold text-white leading-snug">
                    Sterile Techniques & Procedural Precision
                  </h4>
                  <p className="text-xs text-white/80 mt-0.5">
                    Demonstration of aseptic intravenous preparation in simulated environment
                  </p>
                </div>
              </div>

              {/* Decorative Pill Badge */}
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl shadow-crest-md border border-crest-border hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-crest-turquoise/15 flex items-center justify-center text-crest-teal font-extrabold text-sm border border-crest-turquoise/30">
                  0%
                </div>
                <div>
                  <div className="text-xs font-bold text-crest-heading">
                    Zero-Risk Simulation
                  </div>
                  <div className="text-[11px] text-crest-body">
                    Mastery before hospital wards
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};
