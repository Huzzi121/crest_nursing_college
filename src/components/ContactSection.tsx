import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { siteContent } from '../config/siteContent';
import { MotionWrapper } from './common/MotionWrapper';

interface ContactSectionProps {
  onOpenInquiry: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section id="contact" className="py-20 lg:py-24 bg-crest-bgAlt relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionWrapper direction="up" className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-crest-border text-xs font-bold uppercase tracking-wider text-crest-teal mb-3 shadow-crest-sm">
            <Mail className="w-3.5 h-3.5 text-crest-gold" />
            <span>Institutional Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-crest-heading tracking-tight leading-tight">
            Connect With Crest College
          </h2>
          <p className="text-crest-body text-base sm:text-lg mt-3 leading-relaxed">
            Our admissions and administrative offices in Abbottabad welcome prospective students, families, and academic partners.
          </p>
        </MotionWrapper>

        {/* Contact Info Cards & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Tiles */}
          <div className="lg:col-span-5 space-y-4">
            {/* Location Card */}
            <MotionWrapper direction="up" delay={0.1}>
              <div className="p-6 rounded-2xl bg-white border border-crest-border shadow-crest-sm flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-crest-teal/10 text-crest-teal flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-crest-heading">
                    College Campus
                  </h3>
                  <p className="text-sm text-crest-body mt-1 leading-snug">
                    {siteContent.institution.location}
                  </p>
                  <span className="text-xs text-crest-teal font-semibold mt-1 block">
                    {siteContent.institution.subLocation}
                  </span>
                </div>
              </div>
            </MotionWrapper>

            {/* Phone & Admissions Card */}
            <MotionWrapper direction="up" delay={0.2}>
              <div className="p-6 rounded-2xl bg-white border border-crest-border shadow-crest-sm flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-crest-turquoise/15 text-crest-teal flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-crest-turquoise" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-crest-heading">
                    Admissions Desk & Helpline
                  </h3>
                  <p className="text-sm font-bold text-crest-heading mt-1">
                    {siteContent.institution.phone}
                  </p>
                  <p className="text-xs text-crest-body mt-0.5">
                    Placeholder contact for institutional inquiries
                  </p>
                </div>
              </div>
            </MotionWrapper>

            {/* Email Inquiries Card */}
            <MotionWrapper direction="up" delay={0.3}>
              <div className="p-6 rounded-2xl bg-white border border-crest-border shadow-crest-sm flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-crest-gold/20 text-crest-goldDark flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-crest-heading">
                    Official Email Communications
                  </h3>
                  <p className="text-sm text-crest-body mt-1 font-medium">
                    {siteContent.institution.email}
                  </p>
                  <p className="text-xs text-crest-body/80 mt-0.5">
                    {siteContent.institution.admissionsEmail}
                  </p>
                </div>
              </div>
            </MotionWrapper>

            {/* Office Timings Card */}
            <MotionWrapper direction="up" delay={0.4}>
              <div className="p-6 rounded-2xl bg-white border border-crest-border shadow-crest-sm flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-crest-bgAlt text-crest-body flex items-center justify-center flex-shrink-0 border border-crest-border">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-crest-heading">
                    Admissions Hours
                  </h3>
                  <p className="text-xs text-crest-body mt-1">
                    {siteContent.institution.officeHours}
                  </p>
                  <span className="text-[11px] text-crest-teal font-semibold mt-0.5 block">
                    Campus visits by appointment
                  </span>
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* Right Column: Visual Abbottabad Regional Graphic & Quick Action Card */}
          <div className="lg:col-span-7">
            <MotionWrapper direction="left" delay={0.2} className="h-full">
              <div className="rounded-3xl bg-white border border-crest-border p-8 sm:p-10 shadow-crest-sm flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-crest-teal">
                      Campus Advisory
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-crest-bgAlt border border-crest-border text-crest-body">
                      Abbottabad Campus
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-crest-heading mb-3">
                    Have Specific Questions About Nursing Degrees?
                  </h3>

                  <p className="text-sm text-crest-body leading-relaxed mb-6">
                    Whether you are an F.Sc Pre-Medical student inquiring about the 4-year Generic BSN or a practicing registered nurse exploring the Post-RN track, our academic advisory team can assist with eligibility guidance and course frameworks.
                  </p>

                  {/* Abbottabad Map Placeholder Representation */}
                  <div className="w-full h-48 rounded-2xl bg-crest-bgAlt border border-crest-border relative overflow-hidden flex items-center justify-center mb-6 group">
                    {/* Stylized Map Grid Lines */}
                    <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#086B68_1px,transparent_1px)] [background-size:16px_16px]" />
                    
                    <div className="relative z-10 text-center p-4">
                      <div className="w-10 h-10 rounded-full bg-crest-teal text-white flex items-center justify-center mx-auto mb-2 shadow-crest-md animate-bounce">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <p className="text-xs font-bold text-crest-heading uppercase tracking-wider">
                        Abbottabad, Khyber Pakhtunkhwa
                      </p>
                      <p className="text-[11px] text-crest-body">
                        Serene pine-valley setting optimal for healthcare studies
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-crest-border">
                  <button
                    onClick={onOpenInquiry}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-crest-teal hover:bg-crest-tealDark text-white text-xs font-bold uppercase tracking-wider shadow-crest-md hover:shadow-crest-lg transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Launch Inquiry Form</span>
                    <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-xs text-crest-body text-center sm:text-left">
                    Direct confidential submission to academic advisory
                  </p>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};
