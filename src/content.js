export const skills = [
  ['Laravel', 'laravel'],
  ['PHP', 'php'],
  ['Node.js', 'nodedotjs'],
  ['JavaScript', 'javascript'],
  ['TypeScript', 'typescript'],
  ['React', 'react'],
  ['React Native', 'react'],
  ['Vue.js', 'vuedotjs'],
  ['Inertia.js', 'inertia'],
  ['Livewire', 'livewire'],
  ['Filament', 'filament'],
  ['Docker', 'docker'],
  ['Linux', 'linux'],
  ['MySQL', 'mysql'],
  ['PostgreSQL', 'postgresql'],
  ['Redis', 'redis'],
  ['Git', 'git']
];

export const selectedProjects = [
  {
    name: 'Lodge Deck',
    href: 'https://lodgedeck.com',
    description: 'I’m leading a full-stack product for property, room, and daily hotel operations.',
    stack: 'Laravel · TypeScript'
  },
  {
    name: 'OnlySocial',
    href: 'https://onlysocial.io',
    description: 'I developed scheduling, publishing queues, and OAuth integrations for a production SaaS platform.',
    stack: 'Laravel · APIs'
  },
  {
    name: 'Health Bubba',
    href: 'https://healthbubba.com',
    description: 'I led web frontend delivery and built sponsor, referral, and administrative workflows.',
    stack: 'Laravel · React'
  },
  {
    name: 'CAMI Africa School Portal',
    href: 'https://portal.camiafrica.org',
    description: 'I’m developing a full-stack school system spanning administration and education workflows.',
    stack: 'Full-stack'
  }
];

export const moreProjects = [
  ['Vital Sync', 'https://vitalsync.bloodrescue.org', 'Laravel · Livewire'],
  ['Jocoh Farms', 'https://jocohfarms.com', 'Laravel · React · Filament'],
  ['Jocoh Stores', 'https://jocohstores.com', 'Laravel · React · Filament'],
  ['Jocoh Group', 'https://jocohgroups.com', 'Laravel · Inertia'],
  ['Bezalel Frontiers', 'https://bezalelfrontiers.com', 'Laravel · Vue · Filament'],
  ['Vemdot', 'https://vemdot.com', 'Laravel · APIs'],
  ['Freelance Gadgets', 'https://freelancegadgets.com', 'Laravel · Vue'],
  ['Moniest', 'https://moniest.com', 'Laravel · Livewire'],
  ['Blood Cells Rescue Initiative', 'https://bloodrescue.org', 'PHP · WordPress'],
  ['Ariselight Properties', 'https://ariselightproperties.com.ng', 'Laravel · Tailwind'],
  ['Student Founders Platform', 'https://studentfoundersplatform.org', 'WordPress · PHP'],
  ['FGC Ibillo Alumni Association', 'https://fgcibilloalumni.com', 'Laravel · Alpine.js'],
  ['CAMI Africa public website', 'https://camiafrica.org', 'WordPress · PHP'],
  ['Leadaa Commerce', 'https://leadaa.vercel.app', 'Node.js · React · MongoDB'],
  ['Ikenna Ugwu Portfolio', 'https://ikennaugwuc.com', 'WordPress · PHP']
];

export const experience = [
  ['Grandscale Digital', 'Founder & CEO · Full-Stack Developer', 'Current'],
  ['OnlySocial', 'Senior Full-Stack Developer', 'Mar 2024 – Aug 2026'],
  ['Health Bubba', 'Senior Full-Stack Developer · Part-time', 'Jun 2024 – Jul 2025'],
  ['Techocraft ICT & other engagements', 'Full-Stack Developer / Technical Tutor', '2019 – 2022']
];

export const writing = [
  {
    topic: 'Laravel · Open source',
    title: 'Introducing LaraNotice: Simplify Laravel Notifications & Emails',
    summary: 'How I approached dynamic notifications and emails with a small, expressive Laravel package.',
    href: 'https://utyemma.medium.com/introducing-laranotice-simplify-laravel-notifications-emails-b6edb0836bff'
  },
  {
    topic: 'Laravel · APIs',
    title: 'How to Efficiently Handle Route Grouping in Your Laravel Application',
    summary: 'A practical way to organise related Laravel routes as an application grows.',
    href: 'https://utyemma.medium.com/how-to-efficiently-handle-route-grouping-in-your-laravel-application-c17b18df9332'
  }
];

export const caseStudies = {
  lodgedeck: {
    title: 'Lodge Deck',
    status: 'Active development',
    lede: 'I’m currently building Lodge Deck at Grandscale Digital: hotel management software for properties, rooms, and daily operations.',
    role: 'Founder & CEO · Grandscale Digital',
    industry: 'Hospitality SaaS',
    period: 'Current',
    product: 'https://lodgedeck.com',
    productLabel: 'Visit product',
    image: '/assets/previews/lodgedeck.png',
    imageAlt: 'Lodge Deck’s connected hotel management product artwork',
    imageSize: [1200, 630],
    imageCaption: 'Public product artwork from',
    highlight: 'Hospitality operations',
    highlightNote: 'Product focus',
    tools: ['Laravel', 'PHP', 'TypeScript', 'SaaS', 'Product engineering'],
    challenge: 'Hospitality teams need a coherent way to manage properties and everyday hotel workflows without moving between disconnected tools.',
    contributions: [
      'Developing full-stack product functionality and operational workflows for the Lodge Deck platform.',
      'Building and refining property, hotel and room-related user experiences as part of the ongoing product.',
      'Collaborating on product implementation and deployment decisions as features move toward production use.'
    ],
    focus: ['Product workflows', 'Full-stack delivery', 'Iterative releases'],
    outcome: 'An active hospitality software product at Grandscale Digital.',
    note: 'Work is ongoing. Technical implementation details shown here are limited to publicly shareable responsibilities.',
    next: ['OnlySocial', '/work/onlysocial/']
  },
  onlysocial: {
    title: 'OnlySocial',
    status: 'Shipped',
    lede: 'Automation, integrations and backend workflows at production scale',
    role: 'Senior Full-Stack Developer',
    industry: 'Social SaaS',
    period: '2024–2026',
    product: 'https://onlysocial.io',
    productLabel: 'Visit product',
    image: '/assets/previews/onlysocial.png',
    imageAlt: 'OnlySocial’s publishing composer and social post previews',
    imageSize: [1024, 878],
    imageCaption: 'Public product preview from',
    highlight: '40k+',
    highlightNote: 'Total users including white-label',
    tools: ['Laravel', 'OAuth 2.0', 'Queues', 'APIs', 'AI integrations'],
    challenge: 'Publishing to multiple social platforms introduces API differences, asynchronous jobs, account authorization and production reliability concerns.',
    contributions: [
      'Developed scheduling, content calendars and analytics for a platform serving 17,000+ direct users and 40,000+ users overall, including white-label accounts.',
      'Integrated Facebook, Instagram and LinkedIn APIs through OAuth 2.0 for connected-account publishing and engagement workflows.',
      'Built and maintained queued and scheduled processes for publishing, notifications and media operations, while investigating performance bottlenecks.',
      'Led end-to-end development of a lead-collection and email-verification product with API integrations, webhooks and a companion Chrome extension.'
    ],
    focus: ['Asynchronous work', 'External APIs', 'Operational reliability'],
    outcome: 'Contributed to an established SaaS product supporting 40,000+ total users, with production publishing and integration workflows.',
    note: 'User numbers describe the platform, not a claim that I individually built or acquired every user.',
    next: ['Health Bubba', '/work/healthbubba/']
  },
  healthbubba: {
    title: 'Health Bubba',
    status: 'Shipped',
    lede: 'Developing patient-facing products and the supporting business systems',
    role: 'Senior Full-Stack Developer · Part-time',
    industry: 'Health Tech',
    period: '2024–2025',
    product: 'https://healthbubba.com',
    productLabel: 'Visit product',
    image: '/assets/previews/healthbubba.png',
    imageAlt: 'Health Bubba’s public video consultation artwork',
    imageSize: [931, 545],
    imageCaption: 'Public product artwork from',
    highlight: '3,000+',
    highlightNote: 'Patients & clinicians on platform',
    tools: ['Laravel', 'React', 'FilamentPHP', 'Inertia.js', 'Product delivery'],
    challenge: 'Making digital healthcare workflows understandable and useful for patients, clinicians and supporting partners.',
    contributions: [
      'Contributed as part of the early team to product planning, prioritisation and technical feasibility discussions.',
      'Led development of the web frontend and supporting full-stack products, including sponsor account workflows.',
      'Developed affiliate/referral tracking, earnings estimates and administrative dashboards for transactions and reporting.',
      'Collaborated with mobile and backend engineers to deliver responsive, integrated product experiences.'
    ],
    focus: ['Cross-functional delivery', 'Product ownership', 'Admin tooling'],
    outcome: 'Supported a health-tech product serving more than 3,000 patients and clinicians.',
    note: 'The 3,000+ figure describes overall platform users.',
    next: ['CAMI Africa School Portal', '/work/cami-school-portal/']
  },
  'cami-school-portal': {
    title: 'CAMI Africa School Portal',
    status: 'Active development',
    lede: 'Purpose-built school portal development for education workflows',
    role: 'Senior Full-Stack Developer · Grandscale Digital',
    industry: 'Education',
    period: 'Current',
    product: 'https://portal.camiafrica.org',
    productLabel: 'Visit school portal',
    highlight: 'EdTech',
    highlightNote: 'Product domain',
    tools: ['Full-stack', 'Education software', 'Web applications'],
    scope: [
      ['School operations', 'Practical administration workflows'],
      ['Web application', 'User-facing portal development'],
      ['Product iteration', 'Feedback from stakeholders']
    ],
    challenge: 'Education programmes benefit from integrated tools for internal operations and learning-related workflows.',
    contributions: [
      'Developing the school portal as a Grandscale Digital engineering project.',
      'Implementing application functionality and user-facing workflows as the product evolves.',
      'Aligning features with the practical needs and constraints of the client organisation.'
    ],
    focus: ['Product development', 'Workflow design', 'Stakeholder feedback'],
    outcome: 'Ongoing engineering work; published outcomes will be added when the product milestones are confirmed.',
    note: 'This is a separate project from the existing CAMI Africa public website.',
    next: ['Lodge Deck', '/work/lodgedeck/']
  }
};
