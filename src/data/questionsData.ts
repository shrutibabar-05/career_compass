import { InterestStatement, SkillCategory } from '../types';

export const INTEREST_STATEMENTS: InterestStatement[] = [
  // Analytical Group (numbers, problem solving, analysing information, technology)
  {
    id: 'int_numbers',
    statement: 'I enjoy working with numbers.',
    area: 'Analytical',
    subTopic: 'numbers',
    description: 'Doing math, calculating totals, finding patterns in figures, and financial budgeting.',
  },
  {
    id: 'int_problem_solving',
    statement: 'I enjoy solving problems.',
    area: 'Analytical',
    subTopic: 'problem solving',
    description: 'Breaking down complex challenges, troubleshooting hurdles, and finding logical answers.',
  },
  {
    id: 'int_analysing_info',
    statement: 'I enjoy analysing information.',
    area: 'Analytical',
    subTopic: 'analysing information',
    description: 'Examining reports, identifying patterns, spotting trends, and comparing alternatives critically.',
  },
  {
    id: 'int_technology',
    statement: 'I enjoy working with technology.',
    area: 'Analytical',
    subTopic: 'technology',
    description: 'Exploring computer software, modern digital tools, spreadsheets, coding or apps.',
  },

  // People Group (communication, helping people, teamwork)
  {
    id: 'int_communication',
    statement: 'I like communicating with people.',
    area: 'People',
    subTopic: 'communication',
    description: 'Expressing ideas, conversing, presenting, listening, and explaining concepts to others.',
  },
  {
    id: 'int_helping_people',
    statement: 'I enjoy helping and guiding people.',
    area: 'People',
    subTopic: 'helping people',
    description: 'Supporting classmates, counseling peers, teaching, or resolving interpersonal needs.',
  },
  {
    id: 'int_teamwork',
    statement: 'I enjoy working in teams.',
    area: 'People',
    subTopic: 'teamwork',
    description: 'Collaborating smoothly in groups, sharing responsibilities, and achieving mutual goals.',
  },

  // Creative Group (creating ideas, marketing, creativity)
  {
    id: 'int_creating_ideas',
    statement: 'I like creating new ideas.',
    area: 'Creative',
    subTopic: 'creating ideas',
    description: 'Brainstorming original concepts, inventing alternatives, and coming up with fresh approaches.',
  },
  {
    id: 'int_marketing',
    statement: 'I am interested in marketing.',
    area: 'Creative',
    subTopic: 'marketing',
    description: 'Promoting products, storytelling, understanding why people buy, and social campaigns.',
  },
  {
    id: 'int_creativity',
    statement: 'I enjoy creative thinking.',
    area: 'Creative',
    subTopic: 'creativity',
    description: 'Designing visual or strategic solutions, thinking outside traditional constraints.',
  },

  // Business Group (business, entrepreneurship, leadership)
  {
    id: 'int_business',
    statement: 'I like business and commerce.',
    area: 'Business',
    subTopic: 'business',
    description: 'Understanding how companies operate, make profit, trade products, and grow markets.',
  },
  {
    id: 'int_entrepreneurship',
    statement: 'I am interested in entrepreneurship.',
    area: 'Business',
    subTopic: 'entrepreneurship',
    description: 'Building new ventures, starting projects from scratch, and seizing commercial opportunities.',
  },
  {
    id: 'int_leadership',
    statement: 'I enjoy leadership and taking initiative.',
    area: 'Business',
    subTopic: 'leadership',
    description: 'Guiding a group toward a goal, initiating actions, and coordinating projects.',
  },
];

export const LIKERT_OPTIONS = [
  { value: 5, label: 'Strongly Like', shortLabel: 'Strongly Like', color: 'text-teal-700 bg-teal-50 border-teal-300' },
  { value: 4, label: 'Like', shortLabel: 'Like', color: 'text-blue-700 bg-blue-50 border-blue-200' },
  { value: 3, label: 'Neutral', shortLabel: 'Neutral', color: 'text-slate-700 bg-slate-100 border-slate-200' },
  { value: 2, label: 'Dislike', shortLabel: 'Dislike', color: 'text-amber-700 bg-amber-50 border-amber-200' },
  { value: 1, label: 'Strongly Dislike', shortLabel: 'Strongly Dislike', color: 'text-rose-700 bg-rose-50 border-rose-200' },
] as const;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'communication',
    name: 'Communication',
    description: 'Expressing ideas clearly in writing, presentations, and verbal discussions.',
    anchors: {
      1: 'Novice: Hesitant speaking or drafting formal messages',
      2: 'Basic: Can communicate routine messages with guidance',
      3: 'Competent: Expresses ideas clearly in common situations',
      4: 'Proficient: Articulate presenter, persuasive writer, good listener',
      5: 'Advanced: Inspiring speaker, handles sensitive discussions effortlessly',
    },
  },
  {
    id: 'digital_skills',
    name: 'Digital Skills',
    description: 'Comfort with computers, office tools (Excel/Docs), internet research, and software.',
    anchors: {
      1: 'Novice: Very limited computer usage beyond web browsing',
      2: 'Basic: Simple word processing and basic spreadsheet entry',
      3: 'Competent: Formulas, slide decks, productivity cloud tools',
      4: 'Proficient: Advanced formulas (VLOOKUP/XLOOKUP), pivot tables, workflow tools',
      5: 'Advanced: Scripting, complex data systems, rapid adoption of new software',
    },
  },
  {
    id: 'analytical_thinking',
    name: 'Analytical Thinking',
    description: 'Evaluating data, spotting inconsistencies, and drawing sound conclusions.',
    anchors: {
      1: 'Novice: Prefer following fixed instructions without analysis',
      2: 'Basic: Can understand basic graphs and summaries',
      3: 'Competent: Identifies trends and compares options systematically',
      4: 'Proficient: Deeply analyzes datasets, draws actionable insights',
      5: 'Advanced: Synthesizes multi-variable evidence, forecasts accurately',
    },
  },
  {
    id: 'problem_solving',
    name: 'Problem Solving',
    description: 'Addressing hurdles step-by-step with persistence and structured logic.',
    anchors: {
      1: 'Novice: Often get stuck when unexpected obstacles arise',
      2: 'Basic: Tries known standard fixes; asks for help quickly',
      3: 'Competent: Diagnoses root causes and tests logical alternatives',
      4: 'Proficient: Handles ambiguous, multi-step challenges calmly',
      5: 'Advanced: Anticipates problems in advance and creates lasting solutions',
    },
  },
  {
    id: 'teamwork',
    name: 'Teamwork',
    description: 'Collaborating smoothly with peers, respecting diverse opinions, sharing credit.',
    anchors: {
      1: 'Novice: Strongly prefer working alone on every task',
      2: 'Basic: Participates in groups when assigned specific duties',
      3: 'Competent: Dependable team player, contributes equally',
      4: 'Proficient: Bridges differences, encourages peers, coordinates well',
      5: 'Advanced: Builds high team trust, resolves conflicts productively',
    },
  },
  {
    id: 'leadership',
    name: 'Leadership',
    description: 'Guiding a group toward a goal, initiating actions, taking responsibility.',
    anchors: {
      1: 'Novice: Uncomfortable directing others or initiating projects',
      2: 'Basic: Can lead small 1-day tasks with clear instructions',
      3: 'Competent: Takes initiative on college projects and keeps peers aligned',
      4: 'Proficient: Motivates peers, delegates effectively, achieves group targets',
      5: 'Advanced: Strategic leader, inspires vision, mentors and empowers others',
    },
  },
  {
    id: 'creativity',
    name: 'Creativity',
    description: 'Generating novel ideas, visual thinking, and approaching challenges uniquely.',
    anchors: {
      1: 'Novice: Stick strictly to existing conventions and formulas',
      2: 'Basic: Occasionally adapts an existing idea with minor tweaks',
      3: 'Competent: Frequently comes up with practical original ideas',
      4: 'Proficient: Highly inventive, designs engaging visuals or fresh concepts',
      5: 'Advanced: Visionary thinker who regularly originates breakthrough approaches',
    },
  },
  {
    id: 'continuous_learning',
    name: 'Continuous Learning',
    description: 'Curiosity to learn new subjects, reading books/articles, taking online courses.',
    anchors: {
      1: 'Novice: Study only what is mandatory for exams',
      2: 'Basic: Occasionally watch an informative video when curious',
      3: 'Competent: Regularly read or practice outside syllabus topics',
      4: 'Proficient: Actively takes online certificates and reads industry news',
      5: 'Advanced: Relentless self-learner who consistently masters new domains',
    },
  },
];

export const PRESET_SUBJECTS = [
  'Accountancy',
  'Mathematics',
  'Economics',
  'Business Studies',
  'Statistics',
  'Computer Science',
  'Information Technology',
  'English & Communication',
  'Psychology',
  'Marketing Principles',
  'Finance & Banking',
  'Social Sciences',
];

export const PRESET_HOBBIES = [
  'Analyzing Stocks & Finance',
  'Reading Non-Fiction / Case Studies',
  'Coding & Web Projects',
  'Graphic Design & Canva',
  'Debating & Public Speaking',
  'Content Creation & Writing',
  'Organizing College Events',
  'Puzzle & Strategy Games',
  'Volunteering & Community Service',
  'Exploring New Software Tools',
];

export const PRESET_INTEREST_AREAS = [
  'Data Analytics',
  'Accounting',
  'Banking & Finance',
  'Marketing',
  'Human Resources',
  'Business Management',
  'Entrepreneurship',
];

export const EDUCATION_LEVELS = [
  'Higher Secondary (11th / 12th Grade)',
  'Undergraduate (1st / 2nd Year - B.Com, BBA, B.Sc, BCA, BA)',
  'Final Year Undergraduate (Approaching Graduation)',
  'Postgraduate (M.Com, MBA, M.Sc, etc.)',
  'Diploma / Certificate Student',
];
