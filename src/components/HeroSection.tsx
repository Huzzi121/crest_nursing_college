import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { HeartbeatLine } from './common/HeartbeatLine';
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference';

interface HeroSectionProps {
  onOpenInquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry }) => {
  const prefersReduced = useReducedMotionPreference();

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
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen min-h-[100dvh] pt-20 sm:pt-24 lg:pt-24 pb-4 sm:pb-6 overflow-hidden flex flex-col justify-between scroll-mt-20 bg-[#072624]"
    >
      {/* Background Hero Banner Image: Smiling Doctor in Teal Hospital Corridor */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src="/assets/images/hero_bg.png"
          alt="Smiling Doctor in Teal Hospital Corridor"
          className="w-full h-full object-cover object-right sm:object-center"
          loading="eager"
        />
        {/* Directional Shadow Vignette: Dark on text side, clear on doctor side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#072624]/95 via-[#072624]/75 sm:via-[#072624]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#072624]/80 via-transparent to-[#072624]/30" />
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="max-w-xl xl:max-w-2xl flex flex-col justify-center py-6"
        >
          {/* Subtle Institutional Gold Badge */}
          <motion.div
            variants={wordVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-crest-gold/40 shadow-sm mb-4 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-crest-gold animate-pulse" />
            <span className="text-[11px] font-bold text-crest-gold tracking-wider uppercase">
              Abbottabad, Pakistan • Crest College of Nursing
            </span>
          </motion.div>

          {/* Impactful Anton Headline */}
          <motion.h1
            variants={wordVariants}
            className="font-anton text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] leading-[1.12] mb-4 tracking-wide"
          >
            <span className="text-white font-bold">
              Where Compassion Meets{' '}
            </span>
            <span className="text-crest-gold font-normal">
              Clinical Excellence.
            </span>
          </motion.h1>

          {/* Micro ECG Line */}
          <motion.div variants={wordVariants} className="max-w-xs mb-5 opacity-90">
            <HeartbeatLine height={24} strokeColor="#13A6A0" glowColor="rgba(19, 166, 160, 0.4)" />
          </motion.div>

          {/* Compact CTA Buttons */}
          <motion.div
            variants={wordVariants}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <a
              href="#programs"
              className="px-5 py-2.5 rounded-full bg-crest-teal hover:bg-crest-tealDark text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 group border border-white/20"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-3.5 h-3.5 text-crest-gold transition-transform group-hover:translate-x-1" />
            </a>

            <button
              onClick={onOpenInquiry}
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-xs uppercase tracking-wider backdrop-blur-sm transition-all duration-200 hover:border-crest-gold/50"
            >
              Inquire Now
            </button>
          </motion.div>

          {/* Key Impact Stats Row */}
          <motion.div
            variants={wordVariants}
            className="flex items-center gap-5 sm:gap-7 pt-5 mt-5 border-t border-white/15 max-w-md"
          >
            <div>
              <div className="text-lg sm:text-xl font-extrabold text-white leading-tight">100%</div>
              <div className="text-[10px] font-semibold text-white/70 uppercase tracking-wider mt-0.5">Accredited</div>
            </div>
            <div className="w-px h-7 bg-white/20" />
            <div>
              <div className="text-lg sm:text-xl font-extrabold text-crest-gold leading-tight">98%</div>
              <div className="text-[10px] font-semibold text-white/70 uppercase tracking-wider mt-0.5">Placement</div>
            </div>
            <div className="w-px h-7 bg-white/20" />
            <div>
              <div className="text-lg sm:text-xl font-extrabold text-white leading-tight">1:8</div>
              <div className="text-[10px] font-semibold text-white/70 uppercase tracking-wider mt-0.5">Faculty Ratio</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Gentle Looping Scroll Down Indicator */}
      <div className="flex justify-center pb-3 pt-2 mt-auto relative z-10">
        <a
          href="#about"
          aria-label="Scroll to About Section"
          className="flex flex-col items-center gap-1 text-white/75 hover:text-crest-gold transition-colors group"
        >
          <span className="text-[10px] uppercase font-bold tracking-widest text-white/75 group-hover:text-crest-gold transition-all">
            Discover Crest
          </span>
          <motion.div
            animate={prefersReduced ? {} : { y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-crest-gold" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

