/**
 * Centralized Site Content & Copy
 * Institutional copy adhering strictly to branding guidelines.
 * All clinical, curriculum, and admissions data are conservative sample representations
 * designed for client pitch and easily updated upon institutional approval.
 */

export interface ProgramItem {
  id: string;
  title: string;
  credential: string;
  duration: string;
  description: string;
  focus: string[];
  prerequisites: string;
  careerProspects: string;
}

export interface CareerPathway {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  milestones: string[];
}

export const siteContent = {
  institution: {
    name: 'Crest College of Nursing',
    tagline: 'Where Compassion Meets Clinical Excellence',
    location: 'Abbottabad, Khyber Pakhtunkhwa, Pakistan',
    subLocation: 'Hazara Region Healthcare Education Hub',
    phone: '+92 (0992) 000-0000',
    email: 'info@crestnursing.edu.pk',
    admissionsEmail: 'admissions@crestnursing.edu.pk',
    officeHours: 'Monday – Saturday: 8:30 AM – 4:30 PM',
  },

  hero: {
    badge: 'Abbottabad, Pakistan • Nursing Education Excellence',
    headline: 'Where Compassion Meets Clinical Excellence.',
    supportingText:
      'Discover a future in nursing built on knowledge, hands-on learning, integrity, and a commitment to better healthcare.',
    primaryCta: 'Explore Our Programs',
    secondaryCta: 'Discover Crest',
    stats: [
      { label: 'Clinical Training', value: '1,200+ Hrs' },
      { label: 'Skills Simulation', value: 'High-Fidelity' },
      { label: 'Student-to-Faculty', value: '1:10 Ratio' },
    ],
  },

  about: {
    sectionTag: 'Institutional Philosophy',
    headline: 'Educating Nurses. Empowering Futures.',
    introduction:
      'At Crest College of Nursing, we cultivate healthcare leaders grounded in ethical practice, technical mastery, and unwavering empathy. Situated in the serene educational environment of Abbottabad, our institution bridges the gap between academic theory and real-world clinical care.',
    values: [
      {
        title: 'Compassion',
        tagline: 'Patient-Centered Humanity',
        description:
          'Deep empathy in every interaction, understanding that clinical expertise is amplified through genuine patient understanding.',
      },
      {
        title: 'Integrity',
        tagline: 'Uncompromising Professional Standards',
        description:
          'Upholding ethical healthcare delivery, accountability, and disciplined professional responsibility in every clinical decision.',
      },
      {
        title: 'Excellence',
        tagline: 'Evidence-Based Mastery',
        description:
          'Commitment to scientific inquiry, procedural accuracy, and continuous lifelong development in evolving healthcare landscapes.',
      },
    ],
  },

  programs: {
    sectionTag: 'Academic Offerings',
    headline: 'Build the Skills to Make a Difference.',
    subheadline:
      'Structured curricula combining robust biomedical sciences, supervised bedside practicums, and comprehensive clinical simulation.',
    items: [
      {
        id: 'generic-bsn',
        title: 'Bachelor of Science in Nursing (Generic BSN)',
        credential: '4-Year Professional Degree',
        duration: '4 Academic Years (8 Semesters) + 1-Year Internship',
        description:
          'A comprehensive undergraduate degree program preparing aspiring registered nurses for diverse clinical environments, acute care, and healthcare leadership.',
        focus: [
          'Anatomy, Physiology & Pathophysiology',
          'Adult Health & Medical-Surgical Nursing',
          'Pediatric & Maternal Health Practice',
          'Community Health & Epidemiology',
          'Pharmacology & Medication Administration',
        ],
        prerequisites: 'F.Sc (Pre-Medical) with minimum required marks as per institutional guidelines.',
        careerProspects: 'Hospital Staff Nurse, Clinical Nurse Specialist, Community Health Coordinator, Global Practice.',
      },
      {
        id: 'post-rn-bsn',
        title: 'Post-RN BSN',
        credential: '2-Year Professional Degree',
        duration: '2 Academic Years (4 Semesters)',
        description:
          'Designed for practicing Registered Nurses aiming to advance their academic standing, clinical critical thinking, and managerial capabilities.',
        focus: [
          'Advanced Health Assessment',
          'Nursing Leadership & Healthcare Management',
          'Evidence-Based Clinical Practice & Research',
          'Teaching & Learning Principles',
        ],
        prerequisites: 'Diploma in General Nursing & Midwifery/Specialty with registered practice license.',
        careerProspects: 'Nurse Manager, Head Nurse, Clinical Instructor, Healthcare Quality Auditor.',
      },
      {
        id: 'cna-diploma',
        title: 'Certified Nursing Assistant (CNA)',
        credential: '2-Year Professional Diploma',
        duration: '2 Academic Years',
        description:
          'Foundational patient-care training emphasizing core bedside assistance, vital signs monitoring, hygiene protocols, and dignified patient support.',
        focus: [
          'Fundamentals of Patient Care & Safety',
          'Infection Control & Sterile Techniques',
          'Vital Signs & Basic Diagnostic Monitoring',
          'Emergency First Aid & CPR Protocols',
        ],
        prerequisites: 'Matriculation (Science preferred) with passing grades.',
        careerProspects: 'Clinical Care Assistant, Long-term Care Facilities, Bedside Attendant.',
      },
      {
        id: 'lhv-diploma',
        title: 'Lady Health Visitor (LHV)',
        credential: '2-Year Community Diploma',
        duration: '2 Academic Years',
        description:
          'Specialized community maternal and child healthcare curriculum empowering female healthcare providers to deliver crucial maternal services in rural and suburban communities.',
        focus: [
          'Maternal & Neonatal Healthcare',
          'Preventive Family Medicine & Immunization',
          'Nutrition & Childhood Growth Monitoring',
          'Community Health Outreach & Counseling',
        ],
        prerequisites: 'Matriculation (Science) with required biology foundation.',
        careerProspects: 'Rural Health Center Provider, Maternal Health Officer, Community Health Coordinator.',
      },
    ] as ProgramItem[],
  },

  clinical: {
    sectionTag: 'Practical Excellence',
    headline: 'Learning Beyond the Classroom.',
    subheadline:
      'Bridging scientific knowledge with bedside confidence through state-of-the-art simulation laboratories and supervised hospital rotations.',
    features: [
      {
        id: 'simulation',
        title: 'High-Fidelity Simulation Lab',
        description:
          'Interactive computerized training mannequins capable of simulating cardiac arrhythmias, respiratory distress, and pharmacologic responses in a zero-risk educational environment.',
      },
      {
        id: 'rotations',
        title: 'Supervised Hospital Rotations',
        description:
          'Hands-on clinical exposure in tertiary care hospital wards across Abbottabad, guided directly by experienced clinical preceptors and nursing supervisors.',
      },
      {
        id: 'skills',
        title: 'Sterile & Surgical Mastery',
        description:
          'Dedicated procedural suites for mastering aseptic techniques, catheterization, cannulation, wound dressing, and critical bedside diagnostics.',
      },
      {
        id: 'technology',
        title: 'Modern Healthcare Technology',
        description:
          'Familiarization with digital patient monitoring systems, electronic health records (EHR), automated infusion pumps, and modern diagnostic equipment.',
      },
    ],
  },

  careers: {
    sectionTag: 'Professional Trajectory',
    headline: 'A Career That Changes Lives.',
    subheadline:
      'Nursing is an expansive, respected discipline offering diverse pathways in clinical care, education, public health, and organizational leadership.',
    pathways: [
      {
        id: 'patient-care',
        title: 'Acute & Specialized Patient Care',
        subtitle: 'Critical Care, Trauma & Surgery',
        iconName: 'HeartPulse',
        description:
          'Frontline clinical care in emergency departments, intensive care units (ICU), surgical theaters, and specialized pediatric wards.',
        milestones: ['Bedside Foundations', 'Specialty Rotations', 'Critical Care Certification', 'Senior Clinical Specialist'],
      },
      {
        id: 'education',
        title: 'Healthcare Education & Mentorship',
        subtitle: 'Academic & Training Roles',
        iconName: 'GraduationCap',
        description:
          'Educating the next generation of healthcare professionals as clinical instructors, university lecturers, and training coordinators.',
        milestones: ['Clinical Mastery', 'Post-RN / Master’s Studies', 'Clinical Preceptor', 'Academic Faculty Lead'],
      },
      {
        id: 'leadership',
        title: 'Administration & Hospital Leadership',
        subtitle: 'Governance & Quality Assurance',
        iconName: 'Award',
        description:
          'Directing nursing departments, shaping patient safety policies, managing clinical hospital operations, and auditing healthcare standards.',
        milestones: ['Staff Leadership', 'Ward Incharge / Head Nurse', 'Nursing Supervisor', 'Director of Nursing Services'],
      },
      {
        id: 'community',
        title: 'Community & Public Health',
        subtitle: 'Epidemiology & Preventive Care',
        iconName: 'Users',
        description:
          'Leading community immunization drives, public health education, maternal wellness clinics, and regional disease prevention initiatives.',
        milestones: ['Field Practicum', 'Maternal Health Specialist', 'Program Officer', 'Regional Health Advisor'],
      },
    ] as CareerPathway[],
  },

  studentLife: {
    sectionTag: 'Campus Life & Community',
    headline: 'Grow Together. Care Together.',
    subheadline:
      'A welcoming, collegiate atmosphere in Abbottabad where students build lifelong professional bonds, practice team-based problem solving, and support one another.',
    quotes: [
      {
        text: 'The simulation lab helped me gain confidence before I ever stepped into a real hospital ward.',
        role: '3rd Year BSN Student',
      },
      {
        text: 'Faculty mentors at Crest genuinely invest in our clinical precision and ethical compass.',
        role: 'Final Year Nursing Scholar',
      },
    ],
  },

  admissions: {
    sectionTag: 'Take the Next Step',
    headline: 'Your Journey in Nursing Starts Here.',
    subheadline:
      'Connect with Crest College of Nursing to learn more about upcoming enrollment cycles, academic requirements, and campus tours.',
    primaryCta: 'Enquire About Admissions',
    secondaryCta: 'Contact the College',
    note: 'Note: This website prototype is a creative institutional preview. Official admissions deadlines and eligibility requirements will be published by Crest College administration.',
  },
};
