/**
 * Experience and skills data.
 *
 * Edit the timeline entries and skill groups here.
 * Keep wording honest — distinguish observing / assisting / performing.
 */

export interface ExperienceArea {
  heading: string;
  points: string[];
}

export interface ExperienceEntry {
  id: string;
  organization: string;
  location: string;
  department: string;
  role: string;
  dates: {
    start: string;
    end: string;
  };
  summary: string;
  areas: ExperienceArea[];
  hidden?: boolean;
}

export const experiences: ExperienceEntry[] = [
  {
    id: 'sea-ports-corporation',
    organization: 'Sea Ports Corporation (SPC)',
    location: 'Port Sudan, Sudan',
    department: 'Cranes Department',
    role: 'Engineering Intern / Industrial Trainee',
    dates: {
      start: 'Jan 2026',
      end: 'May 2026',
    },
    summary:
      'Industrial exposure in the Cranes Department, working alongside maintenance and engineering personnel on ship-to-shore and rubber-tyred gantry crane systems.',
    areas: [
      {
        heading: 'Crane control and automation systems',
        points: [
          'Observed ship-to-shore (STS) and rubber-tyred gantry (RTG) crane operations.',
          'Learned how control logic coordinates large crane movements and safety interlocks.',
        ],
      },
      {
        heading: 'PLCs, variable-frequency drives, and drive monitoring',
        points: [
          'Observed PLC-based control and variable-frequency drive operation.',
          'Encountered Siemens- and Fuji-related tools and equipment used for drive monitoring.',
        ],
      },
      {
        heading: 'Industrial communication and encoder systems',
        points: [
          'Learned about PROFIBUS communication between control devices.',
          'Observed how encoders provide position and speed feedback to the control system.',
        ],
      },
      {
        heading: 'Fault investigation and electrical measurements',
        points: [
          'Observed fault investigation using HMI / CMS fault information.',
          'Assisted with basic electrical measurements and equipment monitoring.',
        ],
      },
      {
        heading: 'Working alongside maintenance and engineering personnel',
        points: [
          'Supported and observed maintenance and engineering staff during routine work.',
          'Built practical understanding of teamwork in an industrial maintenance environment.',
        ],
      },
    ],
  },
];

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Industrial Automation & Controls',
    skills: [
      'OMRON PLC programming (simulation)',
      'Ladder Logic',
      'HMI interface development',
      'Siemens STEP 7',
      'Fuji PLC software',
      'DriveMonitor',
      'VFDs',
      'PROFIBUS',
      'FluidSIM',
    ],
  },
  {
    category: 'Embedded Systems & Electronics',
    skills: [
      'PIC18F452',
      'Arduino',
      'C programming',
      'Sensor integration',
      'Microcontroller-based monitoring systems',
      'Electrical measurement',
    ],
  },
  {
    category: 'CAD & Engineering Design',
    skills: ['SolidWorks', 'AutoCAD', 'Hydraulic and pneumatic circuit design and simulation'],
  },
  {
    category: 'Programming & Software',
    skills: ['C', 'Python', 'PHP', 'Laravel', 'JavaScript', 'MySQL', 'MATLAB (basic)'],
  },
  {
    category: 'Engineering Competencies',
    skills: [
      'Troubleshooting',
      'Control-system fundamentals',
      'Electromechanical integration',
      'Technical documentation',
      'Teamwork',
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      'Problem-solving',
      'Critical & analytical thinking',
      'Time management',
      'Event Management',
      'Public Speaking',
      'Leadership',
      'Adaptability',
      'Troubleshooting mindset',
    ],
  },
];

export const currentlyExploring = {
  enabled: true,
  title: 'Low-Cost Autonomous Mobile Inspection Robot',
  status: 'Researching' as const,
  concept:
    'A small wheeled robot that will progressively integrate reliable motor control, encoder feedback, camera-based data collection, and eventually computer vision or mapping. The project is in development and implementation will be added as progress is made.',
  plan: [
    'Reliable motor control and basic motion commands',
    'Encoder feedback for measured movement',
    'Camera-based data collection',
    'Exploring computer vision or mapping as a later stage',
  ],
};
