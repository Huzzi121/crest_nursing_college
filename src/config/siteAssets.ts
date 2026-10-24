/**
 * Centralized Site Assets Configuration
 * All visual assets are referenced here to allow seamless replacement
 * when official high-resolution photographs and authentic logos become available.
 */

export interface SiteAssets {
  heroPrimary: string;
  heroSecondary: string;
  aboutCollege: string;
  clinicalLearning: string;
  nursingStudents: string;
  studentGallery: string[];
  admissionsVisual: string;
  branding: {
    crestBadge: string;
    logoAlt: string;
  };
}

export const siteAssets: SiteAssets = {
  // Primary hero portrait of confident South Asian nurse educator in deep teal scrubs
  heroPrimary: '/assets/images/hero_nurse_primary.jpg',

  // Secondary hero photograph of clinical simulation and vital monitor
  heroSecondary: '/assets/images/hero_simulation_lab.jpg',

  // About Section: Modern clinical skills laboratory and instructor demonstration
  aboutCollege: '/assets/images/about_skills_lab.jpg',

  // Clinical Practice Section: Hands-on sterile training and medical equipment
  clinicalLearning: '/assets/images/clinical_training_mastery.jpg',

  // Programs Section: Academic student with anatomy book & tablet
  nursingStudents: '/assets/images/programs_bsn_student.jpg',

  // Student Experience Section: Gallery of collaborative campus life
  studentGallery: [
    '/assets/images/student_life_collaboration.jpg',
    '/assets/images/about_skills_lab.jpg',
    '/assets/images/programs_bsn_student.jpg',
    '/assets/images/clinical_training_mastery.jpg',
  ],

  // Admissions CTA visual: Senior mentor advising prospective student
  admissionsVisual: '/assets/images/admissions_mentorship.jpg',

  branding: {
    crestBadge: 'Crest College of Nursing',
    logoAlt: 'Crest College of Nursing Emblem',
  },
};
