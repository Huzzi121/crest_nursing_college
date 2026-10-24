# Crest College of Nursing — Premium Animated Website Prototype

> **Where Compassion Meets Clinical Excellence.**  
> A pitch-ready, client-grade single-page React website prototype for **Crest College of Nursing, Abbottabad, Pakistan**.

---

## 1. Quick Start & Local Run

### Prerequisites
- Node.js (v18.0.0 or higher recommended, tested on v24)
- npm (v9.0.0 or higher)

### Installation
```bash
# Clone or navigate to the repository
cd d:\crest_college_nursing

# Install all dependencies (Tailwind CSS, Framer Motion, Lucide React, Canvas Confetti)
npm install
```

### Run Locally (Development Server)
```bash
npm run dev
```
The prototype will be live at:
- **Local URL**: [http://localhost:5173/](http://localhost:5173/)
- **Network URL**: Accessible on your local Wi-Fi / LAN for mobile device preview.

### Build for Production
```bash
npm run build
npm run preview
```

---

## 2. Technology Stack & Architecture

- **Core**: React 18+ with Vite & TypeScript
- **Styling**: Tailwind CSS with custom institutional design system tokens
- **Animations & Motion**: Framer Motion (`motion/react`) with spring physics, cubic-bezier ease curves, staggered text reveals, and self-drawing SVG medical line graphics
- **Icons**: Lucide React + custom inline brand SVGs
- **Celebratory Feedback**: Canvas Confetti
- **Accessibility**: Automatic OS `prefers-reduced-motion` detection hook (`useReducedMotionPreference`)

---

## 3. Brand Identity & Design System Tokens

| Token | Hex Code | Purpose |
|---|---|---|
| Primary Deep Teal | `#086B68` | Institutional trust, primary brand color, key buttons |
| Secondary Teal | `#0D7772` | Card depth, secondary gradients |
| Turquoise Accent | `#13A6A0` | Micro-indicators, ECG wave trace, interactive highlights |
| Gold Accent | `#F5BC28` | Restrained prestige badges, divider shimmers |
| Heading Slate | `#103A43` | High-contrast editorial typography |
| Body Slate | `#53676A` | Legible, calm neutral body text |
| Background Alternate | `#F4F9F8` | Soft mint-gray section background |
| Crisp Borders | `#DFEAE8` | Fine structural borders without clutter |
| Primary Background | `#FFFFFF` | Clinical white |

### Typography Pairing
- **Sans-Serif**: `Manrope` (Google Fonts, weights 300 to 800)
- **Editorial Serif Accent**: `Cormorant Garamond` (Google Fonts, italicized & elegant titles)

---

## 4. Key Interactive Highlights

1. **Sticky Glassmorphism Header (`Navbar.tsx`)**:
   - Morphing background: translucent over hero $\rightarrow$ frosted glass white on scroll.
   - Active scroll-spy indicators across `#about`, `#programs`, `#clinical`, `#careers`, `#student-life`, `#contact`.
   - Responsive mobile slide-out drawer with stagger animations.
2. **Hero Section (`HeroSection.tsx`)**:
   - Asymmetrical editorial layout with dual-layered imagery.
   - Custom photorealistic portrait of a South Asian nurse leader in deep teal scrubs (`#086B68`).
   - Self-drawing animated SVG electrocardiogram (ECG) heartbeat line.
   - Staggered word-by-word headline entrance.
3. **Programs & Learning (`ProgramsSection.tsx` & `ProgramDetailModal.tsx`)**:
   - Curricula overview for Generic BSN (4-Year), Post-RN BSN (2-Year), Lady Health Visitor (LHV), and Certified Nursing Assistant (CNA).
   - "Learn More & Syllabus" modal with full credit hours, clinical rotation structure, and direct inquiry link.
4. **Clinical Practice Showcase (`ClinicalSection.tsx`)**:
   - Interactive domain tabs (High-Fidelity Simulation, Hospital Rotations, Sterile Mastery, Healthcare Tech).
   - Photorealistic clinical skills training photography.
5. **Career Trajectories (`CareersSection.tsx`)**:
   - 4 Professional pathways with interactive step-by-step career progression timeline (Stages 01–04).
6. **Student Experience Gallery (`StudentLifeSection.tsx`)**:
   - Touch-friendly photographic wall with click-to-enlarge Lightbox modal.
7. **Admissions Inquiry Modal (`InquiryModal.tsx`)**:
   - Comprehensive form validation for Full Name, Email, Phone, and Program.
   - Interactive submission with loading feedback, error alerts, and celebratory confetti animation upon completion.

---

## 5. Centralized Asset Architecture (`siteAssets.ts`)

All prototype images are decoupled from UI components. When authentic photographs from Crest College become available, replace the file paths in [`src/config/siteAssets.ts`](file:///d:/crest_college_nursing/src/config/siteAssets.ts):

```typescript
export const siteAssets = {
  heroPrimary: '/assets/images/hero_nurse_primary.jpg',
  heroSecondary: '/assets/images/hero_simulation_lab.jpg',
  aboutCollege: '/assets/images/about_skills_lab.jpg',
  clinicalLearning: '/assets/images/clinical_training_mastery.jpg',
  nursingStudents: '/assets/images/programs_bsn_student.jpg',
  studentGallery: [
    '/assets/images/student_life_collaboration.jpg',
    '/assets/images/about_skills_lab.jpg',
    '/assets/images/programs_bsn_student.jpg',
    '/assets/images/clinical_training_mastery.jpg',
  ],
  admissionsVisual: '/assets/images/admissions_mentorship.jpg',
  // ...
};
```

---

## 6. Pre-Production Checklist (Placeholders to Replace)

Before public launch or formal deployment, the following sample items should be updated with officially approved data from Crest College of Nursing administration:

- [ ] **Official College Logo**: Replace the SVG crest placeholder in `src/components/common/CrestLogo.tsx` with the high-resolution vector emblem or PNG crest.
- [ ] **Campus Contact Details**: Replace placeholder telephone `+92 (0992) 000-0000` and email addresses in `src/config/siteContent.ts` with official campus lines.
- [ ] **Physical Address & Google Map**: Insert the exact street address, postal code, and Google Maps embed iframe or coordinates for the Abbottabad campus.
- [ ] **Accreditation & Approvals**: Add verified affiliation bodies (e.g., Pakistan Nursing & Midwifery Council - PNMC, Khyber Medical University - KMU, Higher Education Commission - HEC) once approved by the college.
- [ ] **Official Photography**: Swap the temporary AI-generated photorealistic images in `public/assets/images/` with real high-resolution photographs of Crest College's physical campus, labs, and faculty.
- [ ] **Admissions Backend API**: Connect the inquiry form in `src/components/InquiryModal.tsx` to the college's backend server or admissions CRM endpoint.
