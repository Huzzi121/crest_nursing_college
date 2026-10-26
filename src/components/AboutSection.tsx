import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Award, Sparkles } from 'lucide-react';
import { siteAssets } from '../config/siteAssets';
import { siteContent } from '../config/siteContent';
import { MotionWrapper } from './common/MotionWrapper';
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference';

export const AboutSection: React.FC = () => {
  const prefersReduced = useReducedMotionPreference();

  const valueIcons = [
    <Heart className="w-5 h-5 text-crest-turquoise" key="compassion" />,
    <Shield className="w-5 h-5 text-crest-teal" key="integrity" />,
    <Award className="w-5 h-5 text-crest-goldDark" key="excellence" />,
  ];

  return (
    <section id="about" className="py-8 sm:py-12 bg-transparent relative overflow-hidden scroll-mt-20">
      {/* Decorative Background Contour */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-crest-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Tag */}
        <MotionWrapper direction="up" className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-crest-border text-xs font-bold uppercase tracking-wider text-crest-teal mb-3 shadow-crest-sm">
            <Sparkles className="w-3.5 h-3.5 text-crest-gold" />
            <span>{siteContent.about.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-crest-heading tracking-tight leading-tight">
            {siteContent.about.headline}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-crest-teal to-crest-turquoise mx-auto mt-4 rounded-full" />
        </MotionWrapper>

        {/* Editorial Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          {/* Left Column: Image with Masked Reveal & Depth */}
          <div className="lg:col-span-6 flex flex-col">
            <MotionWrapper direction="right" duration={0.8} className="relative h-full flex flex-col">
              <div className="relative rounded-3xl overflow-hidden shadow-crest-lg border-4 border-white h-full min-h-[440px] lg:min-h-[520px] bg-white group flex-1">
                <img
                  src={siteAssets.aboutCollege}
                  alt="Nursing Instructor demonstrating clinical techniques in college lab"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Subtle teal overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-crest-heading/40 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Badging */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-crest-border flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-crest-heading uppercase tracking-wider">
                      Clinical Skills Demonstration Suite
                    </p>
                    <p className="text-[11px] text-crest-body">
                      Interactive hands-on clinical lab sessions
                    </p>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-crest-turquoise/15 text-crest-teal uppercase tracking-wider">
                    Practical
                  </span>
                </div>
              </div>

              {/* Decorative Corner Flairs */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-crest-teal/10 rounded-2xl -z-10 blur-xl" />
              <div className="absolute -top-4 -left-4 w-28 h-28 bg-crest-gold/15 rounded-2xl -z-10 blur-xl" />
            </MotionWrapper>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <MotionWrapper direction="left" delay={0.1}>
              <p className="text-base sm:text-lg text-crest-body leading-relaxed mb-8">
                {siteContent.about.introduction}
              </p>
            </MotionWrapper>

            {/* Three Institutional Values */}
            <div className="space-y-4">
              {siteContent.about.values.map((val, idx) => (
                <MotionWrapper
                  key={idx}
                  direction="up"
                  delay={0.15 + idx * 0.1}
                  className="p-5 rounded-2xl bg-white border border-crest-border hover:border-crest-teal/40 hover:shadow-crest-sm transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-crest-bgAlt border border-crest-border flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      {valueIcons[idx]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-bold text-crest-heading">
                          {val.title}
                        </h3>
                        <span className="text-xs text-crest-body/60 font-medium">
                          — {val.tagline}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-crest-body leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>

            {/* Subtle Teal Decorative Grow Line */}
            <motion.div
              initial={{ scaleX: prefersReduced ? 1 : 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
              className="h-0.5 bg-gradient-to-r from-crest-teal via-crest-turquoise to-transparent origin-left mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
