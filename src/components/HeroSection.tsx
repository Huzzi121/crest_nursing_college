import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ChevronDown, ArrowRight, ShieldCheck, Sparkles, HeartPulse, Stethoscope } from 'lucide-react';
import { siteAssets } from '../config/siteAssets';
import { siteContent } from '../config/siteContent';
import { HeartbeatLine } from './common/HeartbeatLine';
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference';

interface HeroSectionProps {
  onOpenInquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry }) => {
  const prefersReduced = useReducedMotionPreference();
  const headlineWords = siteContent.hero.headline.split(' ');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen min-h-[100dvh] pt-20 pb-4 lg:pt-24 lg:pb-6 overflow-hidden flex flex-col justify-between bg-gradient-to-b from-white via-crest-bgAlt/40 to-white scroll-mt-20"
    >
      {/* Background Subtle Geometric & Teal Medical Watermark Elements */}
      <div className="absolute top-12 right-0 w-96 h-96 bg-crest-turquoise/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-crest-teal/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating SVG Background Medical Symbols */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <motion.div
          animate={prefersReduced ? {} : { y: [-8, 8, -8] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-36 right-[45%] opacity-20 text-crest-turquoise hidden xl:block"
        >
          <Stethoscope className="w-16 h-16" strokeWidth={1.2} />
        </motion.div>
        <motion.div
          animate={prefersReduced ? {} : { y: [6, -6, 6] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-28 left-[8%] opacity-20 text-crest-teal hidden md:block"
        >
          <HeartPulse className="w-12 h-12" strokeWidth={1.4} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Storytelling */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Location & Excellence Gold/Teal Pill Badge */}
            <motion.div
              variants={wordVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crest-bgAlt border border-crest-border shadow-crest-sm mb-4 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-crest-gold animate-pulse" />
              <span className="text-xs font-bold text-crest-heading tracking-wide uppercase">
                {siteContent.hero.badge}
              </span>
            </motion.div>

            {/* Asymmetrical Editorial Headline with Staggered Word Reveal */}
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-crest-heading tracking-tight leading-[1.14] mb-4 sm:mb-5">
              {headlineWords.map((word, i) => {
                const isSpecial = word.includes('Compassion') || word.includes('Clinical');
                const isExcellence = word.includes('Excellence');
                return (
                  <motion.span
                    key={i}
                    variants={wordVariants}
                    className={`inline-block mr-2.5 ${isSpecial
                        ? 'text-crest-teal'
                        : isExcellence
                          ? 'text-crest-heading relative font-serif italic font-normal'
                          : 'text-crest-heading'
                      }`}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </h1>

            {/* Supporting Copy */}
            <motion.p
              variants={wordVariants}
              className="text-sm sm:text-base text-crest-body max-w-2xl font-normal leading-relaxed mb-5 sm:mb-6"
            >
              {siteContent.hero.supportingText}
            </motion.p>

            {/* Animated ECG Pulse Graphic embedded gracefully */}
            <motion.div variants={wordVariants} className="max-w-md mb-5 sm:mb-6">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-crest-teal">
                  Vital Signs of Professional Care
                </span>
                <span className="h-px flex-1 bg-crest-border" />
              </div>
              <HeartbeatLine height={32} strokeColor="#086B68" glowColor="rgba(8, 107, 104, 0.25)" />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={wordVariants}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <a
                href="#programs"
                className="px-6 py-3 rounded-xl bg-crest-teal hover:bg-crest-tealDark text-white font-bold text-xs uppercase tracking-wider shadow-crest-md hover:shadow-crest-lg transition-all duration-200 flex items-center gap-2 group"
              >
                <span>{siteContent.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 text-crest-gold transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#about"
                className="px-5 py-3 rounded-xl bg-white hover:bg-crest-bgAlt text-crest-heading hover:text-crest-teal border border-crest-border font-bold text-xs uppercase tracking-wider transition-all duration-200"
              >
                {siteContent.hero.secondaryCta}
              </a>

              <button
                onClick={onOpenInquiry}
                className="px-3 py-3 text-xs font-bold text-crest-teal hover:text-crest-tealDark underline underline-offset-4 tracking-wider uppercase transition-colors"
              >
                Inquire Directly →
              </button>
            </motion.div>

            {/* Institutional Trust Highlights */}
            <motion.div
              variants={wordVariants}
              className="grid grid-cols-3 gap-4 pt-5 mt-5 sm:pt-6 sm:mt-6 border-t border-crest-border/80 max-w-xl"
            >
              {siteContent.hero.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-extrabold text-crest-heading tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-semibold text-crest-body uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Layered Editorial Photographic Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-[400px]">
              {/* Primary Nurse Portrait with Editorial Arch/Rounded Mask */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.1 }}
                className="relative rounded-3xl overflow-hidden shadow-crest-lg border-4 border-white z-10 aspect-[4/5] max-h-[460px] bg-crest-bgAlt"
              >
                <img
                  src={siteAssets.heroPrimary}
                  alt="Senior South Asian Nurse Educator at Crest College of Nursing"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />

                {/* Gradient vignette wash */}
                <div className="absolute inset-0 bg-gradient-to-t from-crest-heading/60 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Editorial Caption Tag */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-crest-teal/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-crest-gold mb-1 border border-crest-gold/30">
                    <ShieldCheck className="w-3.5 h-3.5 text-crest-gold" />
                    <span>Clinical Leadership</span>
                  </div>
                  <p className="text-xs text-white/90 font-medium">
                    Mentored by accredited clinical faculty in Abbottabad
                  </p>
                </div>
              </motion.div>

              {/* Secondary Overlapping Clinical Simulation Thumbnail */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.2 }}
                className="absolute -bottom-6 -left-6 sm:-left-10 w-44 sm:w-48 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 hidden sm:block bg-crest-bgAlt"
              >
                <img
                  src={siteAssets.heroSecondary}
                  alt="High-fidelity simulation lab training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-crest-heading/70 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-crest-turquoise">
                    Simulation Suite
                  </span>
                  <p className="text-[11px] font-bold leading-tight">Interactive Vitals</p>
                </div>
              </motion.div>

              {/* Floating Gold Prestige Tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -top-5 -right-3 sm:-right-5 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-crest-md border border-crest-border flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-crest-gold/20 flex items-center justify-center text-crest-goldDark border border-crest-gold/40">
                  <Sparkles className="w-5 h-5 text-crest-goldDark" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-crest-heading">
                    Modern Pedagogy
                  </div>
                  <div className="text-[10px] text-crest-body">
                    Evidence-Based Curriculum
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Gentle Looping Scroll Down Indicator */}
        <div className="flex justify-center pt-3 pb-1 mt-auto">
          <a
            href="#about"
            aria-label="Scroll to About Section"
            className="flex flex-col items-center gap-1 text-crest-body/60 hover:text-crest-teal transition-colors group"
          >
            <span className="text-[10px] uppercase font-bold tracking-widest group-hover:tracking-wider transition-all">
              Discover Crest
            </span>
            <motion.div
              animate={prefersReduced ? {} : { y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-4 h-4 text-crest-turquoise" />
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
};
