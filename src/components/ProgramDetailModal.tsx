import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Award, BookOpen, CheckCircle2, ChevronRight, Stethoscope } from 'lucide-react';
import type { ProgramItem } from '../config/siteContent';

interface ProgramDetailModalProps {
  program: ProgramItem | null;
  isOpen: boolean;
  onClose: () => void;
  onApply: (programId: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  isOpen,
  onClose,
  onApply,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!program) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-crest-heading/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-crest-border overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
          >
            {/* Top Bar */}
            <div className="bg-crest-teal p-6 text-white relative">
              <button
                onClick={onClose}
                aria-label="Close program details"
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-crest-gold/20 border border-crest-gold/30 text-crest-gold text-xs font-semibold uppercase tracking-wider mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>{program.credential}</span>
              </div>
              <h3 className="text-2xl font-bold font-sans text-white pr-8">
                {program.title}
              </h3>
              <div className="flex items-center gap-2 text-white/80 text-xs mt-2">
                <Clock className="w-4 h-4 text-crest-turquoise" />
                <span>{program.duration}</span>
              </div>
            </div>

            {/* Scrollable details */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-crest-teal mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Program Overview
                </h4>
                <p className="text-crest-body text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>

              {/* Core Learning Domains */}
              <div className="bg-crest-bgAlt p-5 rounded-xl border border-crest-border">
                <h4 className="text-xs font-bold uppercase tracking-wider text-crest-heading mb-3 flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-crest-teal" />
                  Key Clinical & Academic Focus
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {program.focus.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-crest-body">
                      <CheckCircle2 className="w-4 h-4 text-crest-turquoise flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prerequisites */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-crest-heading mb-1.5">
                  Eligibility & Academic Prerequisites
                </h4>
                <p className="text-xs text-crest-body bg-white p-3.5 rounded-lg border border-crest-border">
                  {program.prerequisites}
                </p>
              </div>

              {/* Career Scope */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-crest-heading mb-1.5">
                  Graduate Career Trajectory
                </h4>
                <p className="text-xs text-crest-body">
                  {program.careerProspects}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-4 sm:p-6 bg-crest-bgAlt border-t border-crest-border flex items-center justify-between gap-4">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-crest-body hover:text-crest-heading hover:bg-white border border-transparent hover:border-crest-border transition-all"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onApply(program.id);
                }}
                className="px-6 py-2.5 rounded-xl bg-crest-teal hover:bg-crest-tealDark text-white text-xs font-bold tracking-wider uppercase transition-all shadow-crest-md flex items-center gap-1.5 group"
              >
                <span>Inquire for this Program</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
