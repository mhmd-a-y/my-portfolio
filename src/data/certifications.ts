export interface Certification {
  id: string;
  title: string;
  institution: string;
  credential: string;
  description: string;
  certificateUrl: string;
  image: string;
  skills: string[];
  finalProject: {
    name: string;
    type: string;
    description: string;
    features: string[];
    technologies: string[];
    liveUrl: string;
    demoUrl: string;
  };
}

export const certifications: Certification[] = [
  {
    id: 'cs50x',
    title: 'CS50x – Introduction to Computer Science',
    institution: 'Harvard University (HarvardX / CS50)',
    credential: 'Verified Certificate of Completion',
    description:
      "Completed Harvard's CS50x Introduction to Computer Science course, gaining foundational knowledge of computer science, programming, algorithms, data structures, and web development through practical problem-solving assignments and a final project.",
    certificateUrl:
      'https://certificates.cs50.io/6d428158-37b0-4c3b-93f7-ecd13b9e29cc.pdf?size=letter',
    image: 'assets/sudan-tour-placeholder.svg',
    skills: ['Computer science fundamentals', 'Programming', 'Algorithms', 'Data structures', 'Web development'],
    finalProject: {
      name: 'Sudan Tour',
      type: 'Final Project – CS50x',
      description:
        'A static website designed to provide an informative and interactive way to explore the Republic of Sudan and learn about its different states through geographical information, interactive elements, and visual content.',
      features: [
        'Interactive map of Sudan with state tooltips showing names, capitals, and localities.',
        'Basic information and photographs for the different states.',
        'Visual content highlighting Sudan’s natural beauty, geography, and landscapes.',
        'Organized navigation and a straightforward user experience.',
      ],
      technologies: ['JavaScript'],
      liveUrl: 'https://mohamed-abdlla.github.io/Sudan_Tour/',
      demoUrl: 'https://www.youtube.com/watch?v=BovvumVo4vk',
    },
  },
];
