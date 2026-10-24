import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Send, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteContent } from '../config/siteContent';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProgramId?: string;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  program: string;
  qualification: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  program?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedProgramId,
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    program: preselectedProgramId || 'generic-bsn',
    qualification: 'F.Sc (Pre-Medical)',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync preselected program when modal opens
  useEffect(() => {
    if (preselectedProgramId) {
      setFormData((prev) => ({ ...prev, program: preselectedProgramId }));
    }
  }, [preselectedProgramId, isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsSubmitted(false);
      setErrors({});
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact number is required';
    } else if (formData.phone.trim().length < 9) {
      newErrors.phone = 'Please provide a valid phone number';
    }

    if (!formData.program) {
      newErrors.program = 'Please select a program of interest';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate network submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#086B68', '#13A6A0', '#F5BC28', '#103A43'],
      });
    }, 800);
  };

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
            className="fixed inset-0 bg-crest-heading/60 backdrop-blur-sm transition-opacity"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-crest-border overflow-hidden z-10 my-8"
          >
            {/* Header Ribbon */}
            <div className="bg-gradient-to-r from-crest-teal to-crest-tealSecondary p-6 text-white relative">
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-crest-gold/20 border border-crest-gold/30 text-crest-gold text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Admissions Advisory</span>
              </div>
              <h3 className="text-2xl font-bold font-sans text-white">
                Begin Your Nursing Journey
              </h3>
              <p className="text-white/80 text-sm mt-1">
                Connect with our academic counselors for syllabus details, clinical schedules, and prospective admission requirements.
              </p>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-crest-turquoise/15 text-crest-teal flex items-center justify-center mx-auto mb-4 border border-crest-turquoise/30">
                    <CheckCircle className="w-9 h-9 text-crest-turquoise" />
                  </div>
                  <h4 className="text-2xl font-bold text-crest-heading mb-2">
                    Inquiry Received!
                  </h4>
                  <p className="text-crest-body text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <strong className="text-crest-heading">{formData.fullName}</strong>. An admissions counselor from Crest College of Nursing will reach out to you at <strong className="text-crest-heading">{formData.email}</strong>.
                  </p>
                  <div className="p-4 rounded-xl bg-crest-bgAlt border border-crest-border text-xs text-crest-body/90 text-left mb-6">
                    <p className="font-semibold text-crest-heading mb-1">
                      Prototype Notice:
                    </p>
                    <p>
                      This interaction is part of the interactive website prototype. In the production deployment, this form securely routes into the Crest College admissions CRM.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-crest-teal hover:bg-crest-tealDark text-white font-semibold transition-all shadow-crest-md"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-crest-heading mb-1.5">
                      Full Legal Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ayesha Khan"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-crest-heading focus:outline-none transition-colors ${
                        errors.fullName
                          ? 'border-red-400 bg-red-50/30'
                          : 'border-crest-border focus:border-crest-teal bg-crest-bgAlt/50'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-crest-heading mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="ayesha@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm text-crest-heading focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-400 bg-red-50/30'
                            : 'border-crest-border focus:border-crest-teal bg-crest-bgAlt/50'
                        }`}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-crest-heading mb-1.5">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+92 300 1234567"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm text-crest-heading focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-red-400 bg-red-50/30'
                            : 'border-crest-border focus:border-crest-teal bg-crest-bgAlt/50'
                        }`}
                      />
                      {errors.phone && (
                        <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-crest-heading mb-1.5">
                        Program of Interest <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.program}
                        onChange={(e) =>
                          setFormData({ ...formData, program: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-crest-border bg-crest-bgAlt/50 text-sm text-crest-heading focus:outline-none focus:border-crest-teal"
                      >
                        {siteContent.programs.items.map((prog) => (
                          <option key={prog.id} value={prog.id}>
                            {prog.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-crest-heading mb-1.5">
                        Current Education
                      </label>
                      <select
                        value={formData.qualification}
                        onChange={(e) =>
                          setFormData({ ...formData, qualification: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-crest-border bg-crest-bgAlt/50 text-sm text-crest-heading focus:outline-none focus:border-crest-teal"
                      >
                        <option value="F.Sc (Pre-Medical)">F.Sc (Pre-Medical)</option>
                        <option value="Matric (Science)">Matric (Science)</option>
                        <option value="General Nursing Diploma">General Nursing Diploma</option>
                        <option value="Undergraduate Degree">Other Undergraduate Degree</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-crest-heading mb-1.5">
                      Questions or Clinical Goals (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your educational background or questions regarding admissions..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-crest-border bg-crest-bgAlt/50 text-sm text-crest-heading focus:outline-none focus:border-crest-teal resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-crest-teal hover:bg-crest-tealDark text-white font-bold text-sm tracking-wide shadow-crest-md hover:shadow-crest-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Processing Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          <span>Submit Admissions Inquiry</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-crest-body/70 text-center mt-2.5">
                      Your details are handled with complete confidentiality in accordance with institutional policy.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
