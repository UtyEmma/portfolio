export const skills = [
  ['Laravel', 'laravel'],
  ['PHP', 'php'],
  ['Node.js', 'nodedotjs'],
  ['TypeScript', 'typescript'],
  ['React', 'react'],
  ['Vue.js', 'vuedotjs'],
  ['Inertia.js', 'inertia'],
  ['Livewire', 'livewire'],
  ['Filament', 'filament'],
  ['MySQL', 'mysql'],
  ['PostgreSQL', 'postgresql'],
  ['MongoDB', 'mongodb'],
  ['Redis', 'redis'],
  ['Linux', 'linux'],
  ['Docker', 'docker'],
  ['Coolify', 'coolify'],
  ['Git/GitHub', 'git'],
  ['Bitbucket', 'bitbucket'],
  ['Postman', 'postman']
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
  {
    company: 'Grandscale Digital',
    role: 'Senior Full-Stack Engineer',
    period: 'Jan 2023 – Present',
    summary: 'I lead end-to-end client application development, from architecture and integrations through deployment. My work includes hospitality, blood bank, and school management systems, plus Linux infrastructure and ongoing maintenance.'
  },
  {
    company: 'OnlySocial',
    role: 'Senior Full-Stack Developer · Full-time',
    period: 'Mar 2024 – Aug 2026',
    summary: 'I developed AI-assisted content, social integrations, messaging, and automated publishing, and improved backend workers and production reliability as the platform grew from 13,000+ to 40,000+ users.'
  },
  {
    company: 'Health Bubba',
    role: 'Senior Full-Stack Developer · Part-time',
    period: 'Jun 2024 – Present',
    summary: 'I lead web platform development and build sponsor, affiliate, and admin workflows, working with mobile and backend engineers on a healthcare platform serving 5,000+ doctors and patients.'
  },
  {
    company: 'Xtravalueadded Telecom',
    role: 'Full-Stack Web Developer',
    period: 'Apr 2023 – Sep 2024',
    summary: 'I delivered a bill-payment and utility platform that processed over ₦20 million across 4,000+ users in its first year, including token-authenticated APIs and payment gateway integrations.'
  },
  {
    company: 'Techocraft ICT',
    role: 'Full-Stack Developer / Tutor',
    period: 'Nov 2019 – Dec 2022',
    summary: 'I delivered up to 10 client applications and mentored 30+ developers through practical projects and software engineering best practices.'
  }
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
    lede: 'I’m building Lodge Deck at Grandscale Digital: hotel management software for property operations, reservations, and reporting.',
    role: 'Senior Full-Stack Engineer · Grandscale Digital',
    industry: 'Hospitality SaaS',
    period: 'Jan 2023 – Present',
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
      'Lead end-to-end development of the hospitality management SaaS, from architecture through feature implementation and production deployment.',
      'Build reservation, property operations, and reporting workflows for hotel teams.',
      'Integrate intelligent automation while managing Linux infrastructure, deployments, security, and ongoing maintenance.'
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
      'Took ownership of development in an established production SaaS codebase serving 13,000+ users, contributing to continued growth as the platform passed 40,000 users.',
      'Developed scheduling, content calendars, and analytics for the social publishing platform.',
      'Built AI-powered content creation, Bluesky and Telegram integrations, unified messaging, folder management, and automated publishing workflows.',
      'Integrated Facebook, Instagram and LinkedIn APIs through OAuth 2.0 for connected-account publishing and engagement workflows.',
      'Optimized backend processes, background workers, and infrastructure for performance and production reliability.',
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
    period: '2024–Present',
    product: 'https://healthbubba.com',
    productLabel: 'Visit product',
    image: '/assets/previews/healthbubba.png',
    imageAlt: 'Health Bubba’s public video consultation artwork',
    imageSize: [931, 545],
    imageCaption: 'Public product artwork from',
    highlight: '5,000+',
    highlightNote: 'Patients & clinicians on platform',
    tools: ['Laravel', 'React', 'FilamentPHP', 'Inertia.js', 'Product delivery'],
    challenge: 'Making digital healthcare workflows understandable and useful for patients, clinicians and supporting partners.',
    contributions: [
      'Contributed to product strategy, technical planning, and architecture for a healthcare platform serving over 5,000 doctors and patients.',
      'Led development of the web platform and supporting applications, including sponsor accounts.',
      'Built affiliate management systems and administrative dashboards for transactions and reporting.',
      'Coordinated with mobile and backend engineers to align APIs, business logic, and product functionality.'
    ],
    focus: ['Cross-functional delivery', 'Product ownership', 'Admin tooling'],
    outcome: 'Contributed to a healthcare platform serving more than 5,000 doctors and patients.',
    note: 'The 5,000+ figure describes total platform users, not users personally acquired by me.',
    next: ['CAMI Africa School Portal', '/work/cami-school-portal/']
  },
  'cami-school-portal': {
    title: 'CAMI Africa School Portal',
    status: 'Active development',
    lede: 'Purpose-built school portal development for education workflows',
    role: 'Senior Full-Stack Engineer · Grandscale Digital',
    industry: 'Education',
    period: 'Jan 2023 – Present',
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
