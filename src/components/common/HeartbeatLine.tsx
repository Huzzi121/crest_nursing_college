import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference';

interface HeartbeatLineProps {
  className?: string;
  strokeColor?: string;
  glowColor?: string;
  height?: number;
  width?: string | number;
  showDot?: boolean;
}

export const HeartbeatLine: React.FC<HeartbeatLineProps> = ({
  className = '',
  strokeColor = '#13A6A0',
  glowColor = 'rgba(19, 166, 160, 0.4)',
  height = 48,
  width = '100%',
  showDot = true,
}) => {
  const prefersReduced = useReducedMotionPreference();

  // ECG medical waveform path
  const ecgPath =
    'M 0 25 L 70 25 L 85 22 L 95 28 L 105 25 L 120 25 L 128 7 L 138 43 L 148 18 L 156 28 L 165 25 L 190 25 L 205 18 L 220 25 L 300 25 L 370 25 L 385 22 L 395 28 L 405 25 L 420 25 L 428 7 L 438 43 L 448 18 L 456 28 L 465 25 L 490 25 L 505 18 L 520 25 L 600 25';

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ height, width }}>
      <svg
        viewBox="0 0 600 50"
        preserveAspectRatio="none"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Glow Underlay */}
        <motion.path
          d={ecgPath}
          stroke={glowColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: prefersReduced ? 1 : 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.8 }}
          viewport={{ once: false, margin: '-20px' }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
        />

        {/* Sharp Clinical Line */}
        <motion.path
          d={ecgPath}
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: prefersReduced ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false, margin: '-20px' }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
        />

        {/* Optional Animated Pulse Dot at the QRS peak */}
        {showDot && !prefersReduced && (
          <motion.circle
            cx="138"
            cy="43"
            r="3.5"
            fill="#F5BC28"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: [1, 1.8, 1], opacity: [0.6, 1, 0.6] }}
            viewport={{ once: false }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}
      </svg>
    </div>
  );
};
