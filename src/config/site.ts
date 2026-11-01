/**
 * Central site configuration.
 *
 * Edit this file to update your personal details, links, and CV path.
 * Use empty strings ("") for anything you have not provided yet —
 * the site will hide those fields automatically.
 */

export const siteConfig = {
  name: 'Mohamed Abdalla Yahya',
  // Short monogram shown in the navbar on small screens.
  monogram: 'MA',
  title: 'Mechatronics Engineering Student',
  location: 'Kuala Lumpur, Malaysia',
  email: '', // <-- Insert your real email, e.g. "mohamed@example.com"
  linkedin: 'https://www.linkedin.com/in/mhmd-a-y/',
  github: 'https://github.com/mhmd-a-y?tab=repositories',

  // Path is relative to the project root / public folder.
  // Place your CV file at public/assets/cv.pdf to enable the download button.
  cvPath: 'assets/cv.pdf',

  // Optional profile photograph. Place at public/assets/profile.jpg to use it.
  // Leave empty to show a clean initials placeholder instead.
  profileImage: '',

  hero: {
    intro:
      "I'm a Mechatronics Engineering student at UCSI University with an interest in building and understanding real-world engineering systems. My experience includes industrial exposure to crane control systems, microcontroller projects, and mechanical design. I'm interested in opportunities where I can learn from engineers, work on practical challenges, and contribute to product development and R&D.",
  },

  about: {
    body: [
      "I'm currently studying Mechatronics Engineering at UCSI University in Kuala Lumpur. What draws me to this field is the way it brings together mechanical systems, electronics, control systems, and software into a single working solution.",
      "Through coursework and industrial exposure, I've had the chance to work with microcontrollers, sensors, and mechanical design tools, and to observe industrial crane control systems in a real port environment. These experiences have shaped my interest in embedded systems, industrial automation, and hands-on engineering problem-solving.",
      "I'm motivated to keep building my technical skills through projects and an internship, and to eventually contribute to a product development or R&D team where I can learn from experienced engineers while solving practical challenges.",
    ],
    currentlyInterestedIn: [
      'Robotics and autonomous systems',
      'Embedded systems and microcontrollers',
      'Industrial automation and control',
      'Product development and R&D',
    ],
  },

  education: {
    institution: 'UCSI University',
    location: 'Kuala Lumpur, Malaysia',
    degree: 'Bachelor of Mechatronics Engineering with Honours',
    // Editable fields — leave empty to omit them from the page.
    studyPeriod: 'May 2024 – Present',
    currentYear: '3rd Year, 2nd Semester',
    cgpa: '3.52',
    deansList: 'Dean’s List recognition (January 2025)',
    graduationDate: '', // leave empty until confirmed
  },
};

export type SiteConfig = typeof siteConfig;
