import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Quote, Maximize2, X } from 'lucide-react';
import { siteAssets } from '../config/siteAssets';
import { siteContent } from '../config/siteContent';
import { MotionWrapper } from './common/MotionWrapper';

export const StudentLifeSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      src: siteAssets.studentGallery[0],
      title: 'Peer Learning & Collaborative Study',
      caption: 'Nursing students analyzing clinical case scenarios in the sunny campus atrium.',
      span: 'md:col-span-8',
    },
    {
      src: siteAssets.studentGallery[1],
      title: 'Skills Simulation Demonstrations',
      caption: 'Hands-on practice under the guidance of senior clinical nursing instructors.',
      span: 'md:col-span-4',
    },
    {
      src: siteAssets.studentGallery[2],
      title: 'Academic Excellence & Focus',
      caption: 'Dedicated study spaces equipped with digital medical libraries and resources.',
      span: 'md:col-span-4',
    },
    {
      src: siteAssets.studentGallery[3],
      title: 'Sterile Technique Mastery',
      caption: 'Small-group clinical workshops in aseptic intravenous procedures.',
      span: 'md:col-span-8',
    },
  ];

  return (
    <section id="student-life" className="py-8 sm:py-12 bg-transparent relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <MotionWrapper direction="up" className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-crest-border text-xs font-bold uppercase tracking-wider text-crest-teal mb-3 shadow-crest-sm">
              <Users className="w-3.5 h-3.5 text-crest-gold" />
              <span>{siteContent.studentLife.sectionTag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-crest-heading tracking-tight leading-tight">
              {siteContent.studentLife.headline}
            </h2>
            <p className="text-crest-body text-base sm:text-lg mt-3 leading-relaxed">
              {siteContent.studentLife.subheadline}
            </p>
          </MotionWrapper>

          {/* Student Voices Pills */}
          <MotionWrapper direction="left" delay={0.2} className="hidden lg:flex items-center gap-4">
            {siteContent.studentLife.quotes.map((q, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-crest-border shadow-crest-sm max-w-xs"
              >
                <Quote className="w-4 h-4 text-crest-gold mb-1" />
                <p className="text-xs text-crest-body italic leading-snug">
                  "{q.text}"
                </p>
                <span className="text-[10px] font-bold uppercase tracking-wider text-crest-teal block mt-2">
                  — {q.role}
                </span>
              </div>
            ))}
          </MotionWrapper>
        </div>

        {/* Responsive Photographic Editorial Wall */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {galleryItems.map((item, idx) => (
            <MotionWrapper
              key={idx}
              direction="up"
              delay={idx * 0.1}
              className={`${item.span} relative rounded-3xl overflow-hidden shadow-crest-sm border-2 border-white aspect-[16/10] bg-white group cursor-pointer`}
              onClick={() => setSelectedImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Dark Wash */}
              <div className="absolute inset-0 bg-gradient-to-t from-crest-heading/85 via-crest-heading/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Caption Overlay */}
              <div className="absolute bottom-5 left-5 right-5 text-white flex items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-crest-gold block mb-1">
                    Crest Campus Life
                  </span>
                  <h4 className="text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/80 line-clamp-1 mt-0.5">
                    {item.caption}
                  </p>
                </div>

                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-crest-teal transition-all flex-shrink-0">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-crest-heading/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10 bg-black"
            >
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close image preview"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center z-20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged Campus View"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
