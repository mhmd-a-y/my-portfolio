/**
 * Project data.
 *
 * Add, edit, or hide projects here. Set `hidden: true` to remove a project
 * from the page without deleting it.
 *
 * Optional fields (image, github, demo, report) are hidden automatically
 * when left empty. Never invent outcomes, repo URLs, or metrics — only
 * fill in what is actually true.
 */

export type ProjectStatus = 'Completed' | 'In Progress' | 'Design Concept';

export interface Project {
  id: string;
  title: string;
  category: string;
  status: ProjectStatus;
  shortDescription: string;
  // Full description shown in the detail modal.
  description: string;
  myContribution?: string;
  technologies: string[];
  technicalDecisions?: string;
  outcomes?: string;
  lessonsLearned?: string;
  detailSections?: {
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
  }[];
  // Optional links — left empty until you have real URLs.
  image?: string;
  github?: string;
  demo?: string;
  report?: string;
  hidden?: boolean;
}

export const projects: Project[] = [
  {
    id: 'pic18f452-microcontroller',
    title: 'PIC18F452 Microcontroller System',
    category: 'Embedded Systems / Electronics',
    status: 'Completed',
    shortDescription:
      'A microcontroller-based coursework system combining sensor inputs, LCD output, control logic, and peripheral interfacing on the PIC18F452.',
    description:
      'A microcontroller-based system developed as part of my engineering coursework, built around the PIC18F452. The project combined digital sensor inputs, an LCD display, control logic, and peripheral interfacing to explore how a single microcontroller coordinates several hardware modules at once.',
    myContribution:
      'Designed and implemented the firmware and hardware interfacing as coursework, working through sensor integration, output display, and basic control logic.',
    technologies: ['PIC18F452', 'Embedded C', 'LM35', 'HC-SR04', 'LCD', 'PWM', 'Serial Communication'],
    technicalDecisions:
      'The system explored temperature sensing using an LM35, ultrasonic distance measurement using an HC-SR04, LCD interfacing, buzzer alerts, PWM output, switch inputs, and serial communication. Each peripheral was integrated to demonstrate a distinct interfacing concept rather than to optimise a single metric.',
    outcomes:
      'Coursework completed as part of my engineering programme. Only technical details that are confirmed by the actual implementation are listed here; I have not added performance measurements or claimed successful testing beyond what was actually demonstrated.',
    image: 'microcontroller.png',
    github: '',
    demo: '',
    report: '',
  },
  {
    id: 'solar-tracker',
    title: 'Single-Axis Solar Tracking System',
    category: 'Embedded Systems / Renewable Energy',
    status: 'Completed',
    shortDescription:
      'An Arduino-based solar tracker using light-dependent resistors and a servo motor to adjust a panel toward the detected light direction.',
    description:
      'An Arduino-based solar tracking project that adjusts a panel\u2019s direction according to detected light. The control concept uses light-dependent resistors (LDRs) to sense brightness, and a servo motor to reposition the panel so that it faces the stronger light source.',
    myContribution:
      'Assembled the hardware, wired the sensor and servo, and wrote the Arduino control logic as a learning project.',
    technologies: ['Arduino', 'C/C++', 'LDR sensors', 'Servo motor', 'Light sensing'],
    technicalDecisions:
      'Two LDRs were placed on either side of the panel to compare light levels. The difference between the two readings drives the servo to rotate the panel toward the brighter side. Sensor placement and mounting were chosen to keep the comparison simple and reliable.',
    outcomes:
      'The project demonstrated the control concept and hardware integration of a single-axis tracker. No efficiency improvement or experimental results are claimed here.',
    image: 'assets/WhatsApp_Image_2026-10-30_at_11.10.51_PM.jpeg',
    github: '',
    demo: '',
    report: '',
  },
  {
    id: 'sustainable-birdhouse-design',
    title: 'Sustainable Birdhouse Design',
    category: 'Sustainable Design / Teamwork / Product Design',
    status: 'Completed',
    shortDescription:
      'A first-semester group project focused on planning and designing an environmentally friendly birdhouse using recycled and recyclable materials.',
    description:
      'A first-semester engineering group project focused on designing a functional and environmentally friendly birdhouse. The team identified requirements, discussed design concepts, planned the structure, and considered material selection with sustainability in mind.',
    myContribution:
      'Contributed through group discussions, collaborative planning, requirement identification, design decision-making, and consideration of structural stability, material selection, assembly, and practical use. This was a shared project, not an individual design or construction effort.',
    technologies: ['AutoCAD', 'Sustainable design', 'Product design', 'Teamwork'],
    technicalDecisions:
      'The team considered a reinforced wooden base for stability and weight distribution, along with a central wooden dowel to connect sections and allow potential attachments such as a perch or feeder. Proposed dimensions were 1 metre high and 0.5 metre wide.',
    detailSections: [
      {
        heading: 'Project objectives',
        bullets: [
          'Design a functional birdhouse using new and recycled materials.',
          'Apply sustainable design and environmental considerations.',
          'Develop a stable, practical structure suitable for bird habitation.',
          'Consider maintenance, safety, durability, and cost-effectiveness.',
        ],
      },
      {
        heading: 'Sustainable material selection',
        bullets: [
          'Recycled wooden materials.',
          'Recyclable plastic components.',
          'Material durability and environmental impact.',
          'Sustainable design principles connected to the United Nations Sustainable Development Goals.',
        ],
      },
      {
        heading: 'Transferable skills demonstrated',
        bullets: [
          'Teamwork and collaborative decision-making.',
          'Communication through group discussions and design explanations.',
          'Project planning and requirement identification.',
          'Problem-solving around stability, materials, assembly, and practical use.',
          'Design thinking across function, sustainability, safety, cost, and aesthetics.',
        ],
      },
    ],
    outcomes:
      'Built early experience in collaborative engineering design, technical communication, sustainable material selection, project planning, and basic product design using AutoCAD. No physical construction or individual ownership of the complete design is claimed.',
    image: 'assets/image copy 4.png',
    github: '',
    demo: '',
    report: '',
  },
  {
    id: 'phone-holder-solidworks',
    title: 'Customizable Phone Holder — SolidWorks',
    category: 'Mechanical Design / CAD',
    status: 'Design Concept',
    shortDescription:
      'A CAD design study for a customizable phone holder, exploring a desktop base, an articulated arm with a ball joint, and alternative mounting options.',
    description:
      'A mechanical product design exploring a customizable phone holder. Concepts include a desktop base, an articulated arm and ball joint, and alternative mounting or holding mechanisms. The design was modelled in SolidWorks as a CAD study.',
    myContribution:
      'Modelled the concepts in SolidWorks and explored alternative geometries for the base, arm, and holding mechanism.',
    technologies: ['SolidWorks', 'CAD modelling', 'Mechanical design', 'Ball joint', 'Articulated arm'],
    technicalDecisions:
      'The design considered recycled plastic as a possible material and relates to more sustainable product design. Several holding and mounting options were explored to make the holder adaptable to different phone sizes and use cases.',
    outcomes:
      'This was a CAD design project only. No physical prototype was manufactured, simulated, or tested, and I do not claim otherwise.',
    image: 'assets/image.png',
    github: '',
    demo: '',
    report: '',
  },
  {
    id: 'crane-systems-spc',
    title: 'Industrial Crane Systems — Sea Ports Corporation',
    category: 'Industrial Experience / Automation',
    status: 'Completed',
    shortDescription:
      'Industrial exposure in the Cranes Department at Sea Ports Corporation, covering ship-to-shore and rubber-tyred gantry crane systems.',
    description:
      'Industrial exposure in the Cranes Department at Sea Ports Corporation in Port Sudan, Sudan, involving ship-to-shore (STS) and rubber-tyred gantry (RTG) cranes. This was a learning placement focused on observing and supporting maintenance and engineering work on large industrial crane systems.',
    myContribution:
      'Observed and assisted maintenance and engineering personnel. I did not independently design or maintain entire crane systems; my involvement was as a trainee learning from experienced engineers and technicians.',
    technologies: [
      'PLCs and control systems',
      'Variable-frequency drives',
      'Siemens / Fuji equipment',
      'PROFIBUS communication',
      'Encoders',
      'HMI / CMS fault information',
      'Electrical measurements',
    ],
    technicalDecisions:
      'Topics encountered during the placement included PLCs and control systems, variable-frequency drives, Siemens- and Fuji-related tools and equipment, PROFIBUS communication, encoders, HMI/CMS fault information, troubleshooting, and electrical measurements.',
    outcomes:
      'Gained practical understanding of industrial crane automation and control systems through observation and assistance. This is presented as industrial exposure and practical learning, and clearly distinguishes between observing, assisting, and personally performing activities. No confidential company information or unauthorized photographs are included.',
    image: 'assets/20260128_075728.jpg',
    github: '',
    demo: '',
    report: '',
  },
  {
    id: 'hydraulic-sequential-control',
    title: 'Automatic Hydraulic Sequential Control Circuit',
    category: 'Fluid Power / Hydraulic Systems / Simulation',
    status: 'Completed',
    shortDescription:
      'Designed and simulated a four-stage hydraulic cylinder sequence in FluidSIM using pressure-controlled valves.',
    description:
      'A FluidSIM design and simulation study using two double-acting cylinders and pressure-controlled sequence valves to achieve the automatic sequence A+ → B+ → B− → A−.',
    myContribution:
      'Designed the circuit, configured the sequence valves, and investigated how supply pressure, flow, valve opening, load, and cylinder bore affect operation.',
    technologies: ['FluidSIM', 'Hydraulic systems', 'Sequence valves', 'Double-acting cylinders', 'Pressure control'],
    technicalDecisions:
      'The recommended operating condition was approximately 650 psi supply pressure, with sequence valves at 500, 600, and 600 psi and the relief valve at 700 psi.',
    detailSections: [
      {
        heading: 'Operating sequence',
        bullets: [
          'Cylinder A extends.',
          'A pressure condition opens the first sequence valve, allowing Cylinder B to extend.',
          'A second pressure condition causes Cylinder B to retract.',
          'The final sequence valve allows Cylinder A to retract to its initial position.',
        ],
      },
      {
        heading: 'Performance investigation',
        bullets: [
          'Supply pressure influences cylinder force and sequencing reliability.',
          'Pump flow rate affects cylinder speed and total cycle time.',
          'Flow-control opening regulates movement speed.',
          'Load and cylinder bore affect required pressure, force, and speed.',
        ],
      },
    ],
    outcomes:
      'Strengthened understanding of pressure-controlled sequencing, double-acting cylinders, sequence valves, relief valves, and the relationship between pressure, flow, force, and cylinder speed.',
    image: 'assets/image copy 2.png',
    github: '',
    demo: '',
    report: '',
  },
  {
    id: 'plc-hydraulic-cylinder-control',
    title: 'PLC-Based Hydraulic Cylinder Control System',
    category: 'PLC Programming / Industrial Automation / Fluid Power',
    status: 'Completed',
    shortDescription:
      'Developed and simulated a PLC-controlled hydraulic cylinder system with manual and automatic modes, HMI monitoring, and a five-cycle counter.',
    description:
      'A PLC and fluid power control project designed and simulated with an OMRON CJ1M PLC and the CX-One software environment. The system combines ladder logic, hydraulic control, limit-switch feedback, and HMI monitoring.',
    myContribution:
      'Developed the PLC logic and HMI concept, configured manual and automatic operation, and simulated the interaction between control logic, feedback, and hydraulic actuation.',
    technologies: ['OMRON CJ1M PLC', 'CX-One', 'CX-Programmer', 'CX-Designer', 'Ladder Logic', 'HMI'],
    technicalDecisions:
      'The automatic sequence used timers, a shift register (SFT), limit-switch feedback, and counter instructions. The five-cycle counter activated a buzzer and indicator at completion and required a reset before another sequence.',
    detailSections: [
      {
        heading: 'Operating modes',
        bullets: [
          'Manual mode: the cylinder is controlled with an Advance Button and position feedback from a limit switch.',
          'Automatic mode: shift-register, timer, and counter logic coordinates the programmed sequence.',
        ],
      },
      {
        heading: 'Simulation observations',
        bullets: [
          'Timer settings changed the waiting period between sequence stages and the frequency of the sequence.',
          'Timer changes did not directly increase physical cylinder speed when hydraulic supply conditions stayed unchanged.',
          'The design was simulated in CX-One and does not claim physical manufacturing or commissioning.',
        ],
      },
    ],
    outcomes:
      'Built practical understanding of OMRON PLC programming, HMI development, shift registers, timers, counters, limit-switch feedback, and PLC integration with fluid power systems.',
    image: 'assets/image copy 3.png',
    github: '',
    demo: '',
    report: '',
  },
  {
    id: 'web-development',
    title: 'Web Development',
    category: 'Software Development',
    status: 'Completed',
    shortDescription:
      'A selected collection of web development work across frontend and backend technologies.',
    description:
      'A selected collection of web development work demonstrating my experience building web applications and learning across frontend and backend technologies. This section is kept intentionally smaller than the engineering projects so the portfolio stays focused on mechatronics.',
    myContribution:
      'Built and maintained selected web applications as personal and learning projects.',
    technologies: ['PHP', 'Laravel', 'JavaScript', 'Bootstrap', 'WordPress', 'React'],
    technicalDecisions:
      'Technologies shown here are limited to those relevant to the actual projects. Only technologies I can discuss confidently are listed.',
    outcomes:
      'Practiced full-stack web development alongside my engineering studies, which has supported my understanding of software systems and version control.',
    image: 'assets/image copy.png',
    github: '',
    demo: '',
    report: '',
  },
];
