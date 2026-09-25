import { CareerOption, RoadmapStep, SkillGapItem } from '../types';

export const CAREERS_DATA: CareerOption[] = [
  {
    id: 'data-analyst',
    name: 'Data Analyst',
    industry: 'Technology & Business Intelligence',
    tagline: 'Transform raw numbers into strategic actionable business insights.',
    shortDescription: 'Analyze data to find trends, create visual dashboards, and help businesses make informed decisions.',
    typicalWork: 'Cleaning raw datasets, writing SQL queries to retrieve metrics, building interactive charts in Excel and Power BI, and sharing insights with managers.',
    involves:
      'Data analysts inspect, clean, transform, and model data to discover useful patterns, inform business conclusions, and support decision-making. You will build dashboards, run queries on databases, and communicate findings to marketing, finance, or operations teams.',
    importantSkills: ['Excel', 'SQL', 'Statistics', 'Power BI', 'Communication'],
    exampleEduPath: 'B.Com / related degree → Skill development → Projects → Internship → Career opportunities',
    skillsToDevelop: [
      'Mastering SQL joins, aggregations, and subqueries',
      'Data modeling and DAX measures in Power BI',
      'Descriptive and inferential statistics for business',
      'Translating messy datasets into clean executive summaries',
    ],
    suggestedBeginnerProject: {
      title: 'Sales-Data Dashboard in Excel or Power BI',
      description: 'Create a simple sales-data dashboard using Excel or Power BI.',
      toolsUsed: ['Excel', 'Power BI'],
      deliverable: 'A clean interactive sales-data dashboard summarizing monthly revenue, top-selling products, and regional sales trends.',
    },
    benchmarks: [
      {
        skill: 'Excel',
        requiredPercent: 90,
        defaultCurrentPercent: 65,
        importance: 'Essential',
        description: 'VLOOKUP/XLOOKUP, index-match, pivot tables, nested IFs, and data cleaning formulas.',
      },
      {
        skill: 'SQL',
        requiredPercent: 80,
        defaultCurrentPercent: 40,
        importance: 'Essential',
        description: 'SELECT queries, multiple JOINs, GROUP BY, aggregations, and subqueries.',
      },
      {
        skill: 'Statistics',
        requiredPercent: 80,
        defaultCurrentPercent: 50,
        importance: 'Important',
        description: 'Mean, median, variance, standard deviation, hypothesis testing, and correlation analysis.',
      },
      {
        skill: 'Power BI',
        requiredPercent: 75,
        defaultCurrentPercent: 25,
        importance: 'Essential',
        description: 'Connecting data sources, DAX calculations, interactive slicers, and visual storytelling.',
      },
      {
        skill: 'Communication',
        requiredPercent: 70,
        defaultCurrentPercent: 60,
        importance: 'Important',
        description: 'Explaining technical charts clearly to non-technical stakeholders and managers.',
      },
    ],
    primaryTraits: ['analytical', 'technical'],
    secondaryTraits: ['problem_solving', 'numerical'],
  },
  {
    id: 'accountant',
    name: 'Accountant',
    industry: 'Accounting, Audit & Corporate Compliance',
    tagline: 'Ensure financial integrity, legal compliance, and accurate ledger reporting.',
    shortDescription: 'Manage financial transactions, verify bookkeeping records, prepare tax returns, and ensure statutory compliance.',
    typicalWork: 'Recording journal and ledger entries, performing monthly bank reconciliations, calculating tax liabilities (GST/TDS), and preparing balance sheets.',
    involves:
      'Accountants prepare, examine, and maintain financial records. They ensure that financial statements comply with laws and regulations, calculate taxes owed, prepare tax returns, and inspect book balances for accuracy.',
    importantSkills: ['Accounting', 'Excel', 'Taxation', 'Financial Analysis', 'Communication'],
    exampleEduPath: 'B.Com / related degree → Accounting & Taxation skill development → Practical accounting projects → Internship / Articleship → Career opportunities',
    skillsToDevelop: [
      'Hands-on mastery of double-entry ledger bookkeeping and trial balance',
      'Practical filing procedures for GST and TDS returns',
      'Bank reconciliation and financial statement finalization techniques',
      'Communicating audit findings to business management',
    ],
    suggestedBeginnerProject: {
      title: 'Small Business Financial Statement & Tax Calculation Workbook',
      description: 'Create a simple financial statement workbook for a small business or retail store, documenting journal entries, ledger accounts, profit & loss, and GST liability.',
      toolsUsed: ['Excel', 'Accounting Software (Tally / ERP)'],
      deliverable: 'Audited balance sheet workbook with documented reconciliation notes and tax computation schedule.',
    },
    benchmarks: [
      {
        skill: 'Accounting',
        requiredPercent: 90,
        defaultCurrentPercent: 65,
        importance: 'Essential',
        description: 'Double-entry mechanics, trial balance, depreciation schedules, P&L, and balance sheet preparation.',
      },
      {
        skill: 'Excel',
        requiredPercent: 85,
        defaultCurrentPercent: 60,
        importance: 'Essential',
        description: 'Financial formulas, lookup tables, formatting statements, and automated reconciliation sheets.',
      },
      {
        skill: 'Taxation',
        requiredPercent: 80,
        defaultCurrentPercent: 35,
        importance: 'Important',
        description: 'Direct and indirect taxes (GST rates, input tax credits, TDS deductions, and corporate tax compliance).',
      },
      {
        skill: 'Financial Analysis',
        requiredPercent: 80,
        defaultCurrentPercent: 50,
        importance: 'Essential',
        description: 'Interpreting financial statements, variance analysis, ratio analysis, and operating cash flows.',
      },
      {
        skill: 'Communication',
        requiredPercent: 75,
        defaultCurrentPercent: 60,
        importance: 'Important',
        description: 'Explaining financial balances, audit observations, and statutory guidelines to stakeholders.',
      },
    ],
    primaryTraits: ['analytical', 'numerical'],
    secondaryTraits: ['business', 'problem_solving'],
  },
  {
    id: 'banking-finance',
    name: 'Banking & Finance',
    industry: 'Financial Services & Investment Banking',
    tagline: 'Manage capital, evaluate investment risks, and guide wealth generation.',
    shortDescription: 'Manage capital, evaluate credit risk, guide investments, and deliver financial solutions to clients.',
    typicalWork: 'Reviewing credit and loan applications, analyzing market trends, building financial valuation models, and advising clients on banking products.',
    involves:
      'Banking and finance professionals manage loans, assess creditworthiness, advise on investments, conduct equity research, or supervise treasury and risk operations. They evaluate market trends to allocate capital efficiently.',
    importantSkills: ['Financial Knowledge', 'Excel', 'Communication', 'Analytical Thinking', 'Customer Service'],
    exampleEduPath: 'B.Com / related degree → Financial concepts & certifications (NISM / CFA L1 / MBA) → Financial modeling projects → Banking internship → Career opportunities',
    skillsToDevelop: [
      'Building dynamic 3-statement forecast models in Excel',
      'Understanding equity valuation techniques and financial ratios',
      'Evaluating loan applications using debt-service coverage and liquidity ratios',
      'Advisory diplomacy and handling customer financial needs',
    ],
    suggestedBeginnerProject: {
      title: 'Company Financial Ratio Analysis & Investment Report',
      description: 'Select a publicly traded company, examine its annual report, calculate profitability and liquidity ratios in Excel, and write a concise financial evaluation report.',
      toolsUsed: ['Excel', 'Financial Reports (BSE/NSE/SEC EDGAR)', 'Google Finance'],
      deliverable: '5-page equity research report complete with valuation sensitivity table and buy/hold/sell justification.',
    },
    benchmarks: [
      {
        skill: 'Financial Knowledge',
        requiredPercent: 85,
        defaultCurrentPercent: 45,
        importance: 'Essential',
        description: 'Banking products, money markets, central bank interest rates, credit analysis, and valuation.',
      },
      {
        skill: 'Excel',
        requiredPercent: 85,
        defaultCurrentPercent: 60,
        importance: 'Essential',
        description: 'Advanced financial formulas (IRR, NPV, XNPV), shortcuts, and dynamic 3-statement models.',
      },
      {
        skill: 'Communication',
        requiredPercent: 80,
        defaultCurrentPercent: 65,
        importance: 'Essential',
        description: 'Advisory diplomacy, regulatory compliance, and explaining investment risk transparently.',
      },
      {
        skill: 'Analytical Thinking',
        requiredPercent: 85,
        defaultCurrentPercent: 55,
        importance: 'Essential',
        description: 'Evaluating credit risk, balance sheet liquidity, profitability drivers, and market shifts.',
      },
      {
        skill: 'Customer Service',
        requiredPercent: 75,
        defaultCurrentPercent: 60,
        importance: 'Important',
        description: 'Understanding client financial goals, relationship management, and resolving banking inquiries.',
      },
    ],
    primaryTraits: ['analytical', 'numerical', 'business'],
    secondaryTraits: ['problem_solving', 'people'],
  },
  {
    id: 'marketing-specialist',
    name: 'Marketing',
    industry: 'Brand Strategy, Media & Digital Growth',
    tagline: 'Connect customer desires with compelling brand stories and measurable campaigns.',
    shortDescription: 'Create promotional campaigns, analyze consumer behavior, and grow brand presence across digital channels.',
    typicalWork: 'Planning social media content, creating advertising copy, setting up search and social ad campaigns, and measuring audience engagement.',
    involves:
      'Marketing specialists plan and execute campaigns across digital and traditional media channels. They conduct consumer research, create content strategies, manage search/social ads, and measure customer acquisition cost (CAC) and return on ad spend (ROAS).',
    importantSkills: ['Communication', 'Creativity', 'Digital Marketing', 'Market Research', 'Analytical Thinking'],
    exampleEduPath: 'B.Com / related degree → Digital marketing certifications (Google, Meta, HubSpot) → Campaign portfolio projects → Marketing internship → Career opportunities',
    skillsToDevelop: [
      'Creating high-converting ad copy and visual content hooks',
      'Setting up search engine marketing (SEM) campaigns and keyword clusters',
      'Analyzing web visitor behavior with Google Analytics 4 (GA4)',
      'Customer persona mapping and email funnel automation',
    ],
    suggestedBeginnerProject: {
      title: 'Product Launch & Digital Marketing Campaign Plan',
      description: 'Develop a 30-day go-to-market plan for a consumer product, creating customer personas, sample ad creatives, a content calendar, and budget metrics.',
      toolsUsed: ['Canva / Figma', 'Meta Ads Library', 'Google Analytics Demo'],
      deliverable: 'A 10-slide campaign pitch deck with creatives, content calendar, and KPI measurement framework.',
    },
    benchmarks: [
      {
        skill: 'Communication',
        requiredPercent: 85,
        defaultCurrentPercent: 65,
        importance: 'Essential',
        description: 'Persuasive copywriting, brand storytelling, campaign messaging, and clear presentation.',
      },
      {
        skill: 'Creativity',
        requiredPercent: 85,
        defaultCurrentPercent: 60,
        importance: 'Essential',
        description: 'Originating fresh concepts, visual hierarchy, aesthetic layouts, and engaging hooks.',
      },
      {
        skill: 'Digital Marketing',
        requiredPercent: 80,
        defaultCurrentPercent: 40,
        importance: 'Essential',
        description: 'Meta Business Suite, Google Search Ads, SEO fundamentals, and social media scheduling.',
      },
      {
        skill: 'Market Research',
        requiredPercent: 75,
        defaultCurrentPercent: 50,
        importance: 'Important',
        description: 'Customer persona mapping, competitor benchmarking, surveys, and pain-point identification.',
      },
      {
        skill: 'Analytical Thinking',
        requiredPercent: 75,
        defaultCurrentPercent: 55,
        importance: 'Important',
        description: 'Evaluating campaign ROI, conversion rates, CTR, CPC, and web analytics insights.',
      },
    ],
    primaryTraits: ['creative', 'people'],
    secondaryTraits: ['business', 'analytical'],
  },
  {
    id: 'human-resources',
    name: 'Human Resources',
    industry: 'People Operations & Organizational Development',
    tagline: 'Cultivate talent, nurture company culture, and drive employee engagement.',
    shortDescription: 'Recruit skilled talent, organize employee onboarding, support team welfare, and foster a productive company culture.',
    typicalWork: 'Screening candidate resumes, conducting structured interviews, managing employee onboarding, drafting workplace policies, and resolving team issues.',
    involves:
      'Human Resources professionals recruit top talent, coordinate onboarding and training programs, administer compensation and benefits, resolve workplace conflicts, and ensure compliance with employment legislation.',
    importantSkills: ['Communication', 'Teamwork', 'Problem Solving', 'Leadership', 'People Skills'],
    exampleEduPath: 'B.Com / related degree → Human resources certifications or diplomas → HR simulation projects → HR internship → Career opportunities',
    skillsToDevelop: [
      'Conducting structured behavioral interviews (STAR method)',
      'Drafting employee handbooks and company policy frameworks',
      'Understanding employment contracts, statutory benefits, and labor laws',
      'Measuring employee retention, attrition rate, and engagement scores',
    ],
    suggestedBeginnerProject: {
      title: 'Student Organization Recruitment & Onboarding Blueprint',
      description: 'Design an end-to-end recruitment process for a college society or campus placement cell, complete with job descriptions, interview scorecards, and a 5-day welcome schedule.',
      toolsUsed: ['Google Forms / Typeform', 'Notion / Google Docs', 'Excel for HR Metrics'],
      deliverable: 'A complete HR toolkit containing job descriptions, interview scorecards, and an onboarding roadmap.',
    },
    benchmarks: [
      {
        skill: 'Communication',
        requiredPercent: 90,
        defaultCurrentPercent: 65,
        importance: 'Essential',
        description: 'Active listening, conducting structured interviews, drafting policies, and compassionate feedback.',
      },
      {
        skill: 'Teamwork',
        requiredPercent: 85,
        defaultCurrentPercent: 70,
        importance: 'Essential',
        description: 'Fostering cross-departmental collaboration, morale, and organizational culture building.',
      },
      {
        skill: 'Problem Solving',
        requiredPercent: 80,
        defaultCurrentPercent: 60,
        importance: 'Essential',
        description: 'Resolving workplace conflicts, addressing employee grievances, and streamlining HR workflows.',
      },
      {
        skill: 'Leadership',
        requiredPercent: 80,
        defaultCurrentPercent: 50,
        importance: 'Important',
        description: 'Mentoring teammates, taking initiative on culture programs, and driving HR goals.',
      },
      {
        skill: 'People Skills',
        requiredPercent: 90,
        defaultCurrentPercent: 65,
        importance: 'Essential',
        description: 'High empathy, interpersonal tact, building mutual trust, and fair employee advocacy.',
      },
    ],
    primaryTraits: ['people'],
    secondaryTraits: ['business', 'problem_solving'],
  },
  {
    id: 'entrepreneurship',
    name: 'Entrepreneurship',
    industry: 'New Venture Creation & Business Innovation',
    tagline: 'Identify unsolved customer problems and build sustainable commercial solutions.',
    shortDescription: 'Identify customer problems, build innovative products or services, and launch sustainable new business ventures.',
    typicalWork: 'Speaking with prospective customers, designing minimum viable products (MVPs), testing marketing channels, managing cash flow, and pitching to partners.',
    involves:
      'Entrepreneurs turn ideas into viable businesses. They validate market needs, build minimum viable products (MVPs), pitch to investors and early adopters, manage cash flows, and build and inspire a multidisciplinary founding team.',
    importantSkills: ['Leadership', 'Communication', 'Business Knowledge', 'Creativity', 'Problem Solving'],
    exampleEduPath: 'B.Com / related degree → Lean startup & business skill development → MVP validation projects → Incubator / Accelerator participation → Career opportunities',
    skillsToDevelop: [
      'Formulating a Lean Business Canvas and validating problem-solution fit',
      'Constructing a 10-slide investor pitch deck with credible unit economics',
      'Running low-cost experiments and pre-order landing pages to test demand',
      'Leading under high uncertainty and managing team morale',
    ],
    suggestedBeginnerProject: {
      title: 'Campus Problem-Solution Validation & Prototype Pilot',
      description: 'Identify a common problem on your campus, survey 30 peers to validate demand, design a simple pilot service, and test customer willingness to purchase.',
      toolsUsed: ['Lean Canvas Template', 'Google Forms / WhatsApp Business', 'Canva', 'Excel Cash Ledger'],
      deliverable: 'Venture review report documenting customer feedback, unit economics, gross margins, and lessons learned.',
    },
    benchmarks: [
      {
        skill: 'Leadership',
        requiredPercent: 90,
        defaultCurrentPercent: 55,
        importance: 'Essential',
        description: 'Recruiting co-founders, setting ambitious goals, driving team alignment, and resilience.',
      },
      {
        skill: 'Communication',
        requiredPercent: 85,
        defaultCurrentPercent: 65,
        importance: 'Essential',
        description: 'Pitching to investors, customer interviews, sales negotiations, and articulating vision.',
      },
      {
        skill: 'Business Knowledge',
        requiredPercent: 85,
        defaultCurrentPercent: 45,
        importance: 'Essential',
        description: 'Business model canvas, cash burn rate, runway, unit economics, and pricing strategy.',
      },
      {
        skill: 'Creativity',
        requiredPercent: 85,
        defaultCurrentPercent: 60,
        importance: 'Essential',
        description: 'Uncovering unserved market niches, innovative product concepts, and rapid prototyping.',
      },
      {
        skill: 'Problem Solving',
        requiredPercent: 85,
        defaultCurrentPercent: 60,
        importance: 'Essential',
        description: 'Overcoming unexpected roadblocks, pivoting strategies, and lean experimentation.',
      },
    ],
    primaryTraits: ['business', 'creative'],
    secondaryTraits: ['problem_solving', 'people'],
  },
  {
    id: 'business-management',
    name: 'Business Management & Operations',
    industry: 'Corporate Management & Strategy Consulting',
    tagline: 'Optimize organizational systems, drive operational efficiency, and lead teams.',
    involves:
      'Business managers oversee daily operational activities, align departmental efforts with corporate targets, analyze process bottlenecks, optimize resource utilization, and formulate growth plans.',
    importantSkills: ['Leadership', 'Communication', 'Business Knowledge', 'Problem Solving', 'Teamwork'],
    exampleEduPath: 'BBA / B.Com / B.Tech / BA Economics → Corporate Graduate Trainee Program / MBA → Management Associate / Operations Manager',
    skillsToDevelop: [
      'Workflow process mapping (Value Stream Mapping, SIPOC diagrams)',
      'Managing project timelines and milestones using Gantt charts or Kanban',
      'Root-cause analysis (5 Whys, Fishbone diagrams) to solve operating bottlenecks',
      'Negotiation and cross-departmental coordination skills',
    ],
    suggestedBeginnerProject: {
      title: 'College Annual Festival Operational Blueprint & Resource Plan',
      description:
        'Assume the role of Operations Lead for a 3-day college festival with 1,000 expected attendees. Develop a work breakdown structure (WBS), risk mitigation matrix, vendor selection criteria, and a real-time event day volunteer schedule.',
      toolsUsed: ['Trello / Asana / Notion', 'Microsoft Excel Gantt Charts', 'Process Mapping Software'],
      deliverable: 'Comprehensive 15-page operations manual with risk contingency plan and volunteer shift roster.',
    },
    benchmarks: [
      {
        skill: 'Leadership',
        requiredPercent: 85,
        defaultCurrentPercent: 60,
        importance: 'Essential',
        description: 'Assigning responsibilities, tracking accountability, and motivating cross-functional teams.',
      },
      {
        skill: 'Communication',
        requiredPercent: 85,
        defaultCurrentPercent: 65,
        importance: 'Essential',
        description: 'Executive reporting, leading department meetings, and negotiating with external vendors.',
      },
      {
        skill: 'Business Knowledge',
        requiredPercent: 80,
        defaultCurrentPercent: 50,
        importance: 'Essential',
        description: 'Strategic planning, operational KPI tracking, budgeting, and cost variance analysis.',
      },
      {
        skill: 'Problem Solving',
        requiredPercent: 80,
        defaultCurrentPercent: 55,
        importance: 'Essential',
        description: 'Resolving supply delays, eliminating process bottlenecks, and streamlining workflows.',
      },
      {
        skill: 'Teamwork',
        requiredPercent: 80,
        defaultCurrentPercent: 65,
        importance: 'Essential',
        description: 'Facilitating collaboration among disparate functions to meet organizational targets.',
      },
    ],
    primaryTraits: ['business', 'problem_solving'],
    secondaryTraits: ['analytical', 'people'],
  },
];

/**
 * Skill-specific learning guidance database
 */
const SKILL_GUIDANCE_MAP: Record<
  string,
  {
    actionItems: string[];
    duration: string;
    resources: string[];
  }
> = {
  Excel: {
    actionItems: [
      'Master essential lookup formulas: XLOOKUP, INDEX/MATCH, and nested IF statements',
      'Build dynamic Pivot Tables, calculated fields, and conditional formatting rules',
      'Practice data cleaning: text-to-columns, deduplication, and handling blank cells',
    ],
    duration: '3–4 Weeks',
    resources: ['ExcelIsFun YouTube Channel', 'Microsoft Learn Excel Track', 'Chandoo.org'],
  },
  SQL: {
    actionItems: [
      'Master SELECT, WHERE, GROUP BY, HAVING, and ORDER BY query clauses',
      'Practice table relationships: INNER, LEFT, RIGHT, and FULL OUTER JOINs',
      'Learn aggregate functions, date formatting, and subqueries on real datasets',
    ],
    duration: '4–5 Weeks',
    resources: ['Mode Analytics SQL Tutorial', 'SQLZoo.net', 'LeetCode SQL 50 (Easy)'],
  },
  Statistics: {
    actionItems: [
      'Understand central tendency (mean, median, mode) and dispersion (variance, standard deviation)',
      'Learn normal distributions, sampling methods, and confidence intervals',
      'Perform correlation analysis and basic A/B hypothesis tests on business cases',
    ],
    duration: '3–4 Weeks',
    resources: ['StatQuest with Josh Starmer', 'Khan Academy College Statistics', 'OpenStax Statistics'],
  },
  'Power BI': {
    actionItems: [
      'Import, clean, and transform messy tables using Power Query',
      'Write fundamental DAX formulas: CALCULATE, SUM, RELATED, and DIVIDE',
      'Design clean interactive reports with slicers, drill-throughs, and KPI cards',
    ],
    duration: '3–4 Weeks',
    resources: ['Microsoft Power BI Guided Learning', 'Enterprise DNA Tutorials', 'Workout Wednesday Power BI'],
  },
  Communication: {
    actionItems: [
      'Practice structured communication: bottom-line first (Minto Pyramid Principle)',
      'Prepare 5-minute concise presentations summarizing complex reports for peers',
      'Write clean, professional emails with clear action items and headings',
    ],
    duration: '2–3 Weeks',
    resources: ['Toastmasters International Guide', 'HBR Guide to Better Business Writing'],
  },
  Accounting: {
    actionItems: [
      'Master double-entry mechanics: debit and credit rules across all ledger categories',
      'Practice posting journal entries, updating T-accounts, and balancing the Trial Balance',
      'Prepare full Profit & Loss statements and Balance Sheets from scratch',
    ],
    duration: '4 Weeks',
    resources: ['AccountingCoach.com Free Tutorials', 'ICAI Foundation Learning Material'],
  },
  Taxation: {
    actionItems: [
      'Study direct tax vs indirect tax structures (GST slabs, input tax credits, TDS)',
      'Practice invoice compliance rules and computing net tax liability on sample transactions',
      'Simulate filing monthly returns using educational sandbox templates',
    ],
    duration: '3–4 Weeks',
    resources: ['GSTN Educational Portal', 'ClearTax Student Guides', 'Income Tax India Tutorials'],
  },
  'Financial Analysis': {
    actionItems: [
      'Calculate liquidity, profitability, solvency, and operating turnover ratios',
      'Conduct 3-year horizontal and vertical percentage analyses on company balance sheets',
      'Interpret cash flow from operations compared to reported net profits',
    ],
    duration: '3 Weeks',
    resources: ['Corporate Finance Institute (CFI)', 'Investopedia Financial Ratios Track'],
  },
  'Financial Knowledge': {
    actionItems: [
      'Study banking functions, money market instruments, central bank repo rates, and inflation',
      'Learn how commercial loans are evaluated using debt-service coverage ratio (DSCR)',
      'Follow financial market daily news on Bloomberg, CNBC, or Economic Times',
    ],
    duration: '3–4 Weeks',
    resources: ['Khan Academy Finance & Capital Markets', 'Aswath Damodaran Online Lectures'],
  },
  'Customer Service': {
    actionItems: [
      'Learn active listening and de-escalation techniques for difficult client conversations',
      'Practice asking probing questions to diagnose customer financial needs accurately',
      'Draft standardized response templates for common customer requests and complaints',
    ],
    duration: '2 Weeks',
    resources: ['Coursera Customer Service Fundamentals', 'Service Design Network Case Studies'],
  },
  'Digital Marketing': {
    actionItems: [
      'Understand the digital customer acquisition funnel (Awareness, Consideration, Conversion)',
      'Set up mock search ad campaigns with targeted keyword match types and negative keywords',
      'Learn social ad campaign structures: objectives, targeting, bidding, and creative formats',
    ],
    duration: '4 Weeks',
    resources: ['Google Skillshop Ads Certification', 'Meta Blueprint Free Courses', 'HubSpot Digital Marketing'],
  },
  Creativity: {
    actionItems: [
      'Practice creative brainstorming using SCAMPER and mind-mapping techniques',
      'Design visual social carousels and infographics using Canva or Figma',
      'Analyze 10 award-winning brand campaigns to decode what made them memorable',
    ],
    duration: '2–3 Weeks',
    resources: ['Canva Design School', 'Marketing Examples by Harry Dry', 'Creative Thinking by Edward de Bono'],
  },
  'Market Research': {
    actionItems: [
      'Draft a 10-question customer discovery survey using Google Forms or Typeform',
      'Conduct 5 in-depth user interviews to uncover unmet pain points and buying motivations',
      'Create a competitive positioning matrix comparing 4 direct and indirect market rivals',
    ],
    duration: '3 Weeks',
    resources: ['Qualtrics Research Guides', 'Steve Blank Customer Development Methodology'],
  },
  'Analytical Thinking': {
    actionItems: [
      'Practice structured problem solving: break ambiguous challenges into MECE components',
      'Critique marketing or financial reports to spot misleading charts or false correlations',
      'Use data visualization to support recommendations rather than relying on gut feelings',
    ],
    duration: '3 Weeks',
    resources: ['McKinsey Problem Solving Framework', 'Thinking, Fast and Slow by Daniel Kahneman'],
  },
  Teamwork: {
    actionItems: [
      'Take proactive roles in student club committees or group study projects',
      'Practice clear task assignment and peer feedback using collaborative tools (Slack, Trello)',
      'Help resolve team scheduling and role conflicts constructively',
    ],
    duration: '2 Weeks',
    resources: ['Google Re:Work Guide to Effective Teams', 'The Five Dysfunctions of a Team'],
  },
  'Problem Solving': {
    actionItems: [
      'Apply the 5 Whys and Fishbone diagram techniques to diagnose root causes of inefficiencies',
      'Generate at least 3 viable alternatives before settling on a single solution',
      'Evaluate trade-offs between speed, cost, and quality for each proposed fix',
    ],
    duration: '3 Weeks',
    resources: ['Lean Six Sigma Problem Solving Kit', 'MindTools Problem Solving Track'],
  },
  Leadership: {
    actionItems: [
      'Volunteer to lead a college event, workshop, or project workstream from start to finish',
      'Practice delegating responsibilities with clear milestone expectations and check-ins',
      'Provide encouragement and recognize teammates who contribute outstanding work',
    ],
    duration: '3 Weeks',
    resources: ['Simon Sinek Start With Why', 'Harvard Business Review On Leadership'],
  },
  'People Skills': {
    actionItems: [
      'Practice empathetic listening: summarize what the other person said before replying',
      'Learn non-verbal communication cues and how to facilitate inclusive group discussions',
      'Handle sensitive disagreements with mutual respect and solutions-oriented negotiation',
    ],
    duration: '2–3 Weeks',
    resources: ['Crucial Conversations Guide', 'How to Win Friends and Influence People by Dale Carnegie'],
  },
  'Business Knowledge': {
    actionItems: [
      'Fill out a Lean Canvas for 3 different real-world businesses you interact with daily',
      'Understand unit economics: Customer Acquisition Cost (CAC), Lifetime Value (LTV), and Gross Margin',
      'Read annual shareholder letters (e.g. Berkshire Hathaway, Amazon) to understand corporate strategy',
    ],
    duration: '3–4 Weeks',
    resources: ['Strategyzer Business Model Generation', 'Y Combinator Startup School Library'],
  },
};

/**
 * Generates an end-to-end 9-step Personalized Roadmap based on:
 * 1. Complete [Degree] / current education
 * ↓
 * 2-5. Priority Skills (dynamically ordered by largest identified gap)
 * ↓
 * 6. Complete a beginner [domain] project
 * ↓
 * 7. Build a portfolio
 * ↓
 * 8. Look for internship/practical experience
 * ↓
 * 9. Explore [Career] opportunities
 */
export function generatePersonalizedRoadmap(
  careerInput: CareerOption | string,
  currentDegree: string = 'B.Com',
  prioritySkillGaps?: SkillGapItem[]
): RoadmapStep[] {
  const career =
    typeof careerInput === 'string'
      ? CAREERS_DATA.find((c) => c.id === careerInput) || CAREERS_DATA[0]
      : careerInput;

  const degree = currentDegree.trim() || 'B.Com';

  // Determine skill gaps (sorted by largest gap percentage descending)
  let sortedGaps: { skill: string; gapPercent: number; currentPercent?: number; description?: string }[] = [];

  if (prioritySkillGaps && prioritySkillGaps.length > 0) {
    sortedGaps = [...prioritySkillGaps].sort((a, b) => b.gapPercent - a.gapPercent);
  } else {
    sortedGaps = career.benchmarks.map((b) => ({
      skill: b.skill,
      gapPercent: Math.max(10, b.requiredPercent - (b.defaultCurrentPercent || 50)),
      currentPercent: b.defaultCurrentPercent || 50,
      description: b.description,
    })).sort((a, b) => b.gapPercent - a.gapPercent);
  }

  // Ensure at least 4 priority skills for steps 2 to 5
  const prioritySkills = sortedGaps.slice(0, 4);
  if (prioritySkills.length < 4) {
    career.benchmarks.forEach((b) => {
      if (prioritySkills.length < 4 && !prioritySkills.some((p) => p.skill === b.skill)) {
        prioritySkills.push({
          skill: b.skill,
          gapPercent: Math.max(10, b.requiredPercent - (b.defaultCurrentPercent || 50)),
          currentPercent: b.defaultCurrentPercent || 50,
          description: b.description,
        });
      }
    });
  }

  const getGuidance = (skillName: string) => {
    return (
      SKILL_GUIDANCE_MAP[skillName] || {
        actionItems: [
          `Study foundational principles and documentation for ${skillName}`,
          `Complete hands-on practice exercises and mini assignments regularly`,
          `Apply ${skillName} in an academic or personal project to cement understanding`,
        ],
        duration: '3–4 Weeks',
        resources: ['Online tutorials', 'Industry documentation', 'Campus library materials'],
      }
    );
  };

  const getSkillVerb = (skillName: string, gapPercent: number, currentPercent?: number) => {
    if (currentPercent !== undefined) {
      if (currentPercent < 45) return 'Learn';
      if (currentPercent < 75) return 'Improve';
      return 'Strengthen';
    }
    if (gapPercent > 35) return 'Learn';
    if (gapPercent > 15) return 'Improve';
    return 'Strengthen';
  };

  const projectTitleMap: Record<string, string> = {
    'data-analyst': 'Complete a beginner data-analysis project',
    'accountant': 'Complete a beginner accounting project',
    'banking-finance': 'Complete a beginner banking & financial analysis project',
    'marketing-specialist': 'Complete a beginner marketing campaign project',
    'human-resources': 'Complete a beginner HR recruitment & onboarding project',
    'entrepreneurship': 'Complete a beginner startup business plan project',
  };

  const steps: RoadmapStep[] = [];

  // Step 1: Education
  steps.push({
    id: 'step-1-education',
    stepNumber: 1,
    title: `Complete ${degree} / current education`,
    subtitle: 'Academic Foundation & Core Coursework',
    description: `Leverage your current academic coursework in ${degree} to build fundamental understanding of commercial, analytical, and professional principles essential for a future in ${career.name}.`,
    actionItems: [
      `Identify subjects in your ${degree} curriculum that directly relate to ${career.name}`,
      'Engage actively in lectures, seminar discussions, and elective coursework',
      'Maintain a strong academic track record while setting aside 5–7 hours weekly for targeted skill acquisition',
    ],
    suggestedDuration: 'Ongoing / Current Academic Year',
    recommendedResources: ['College syllabus', 'Reference textbooks', 'Academic faculty guidance'],
    completed: true,
  });

  // Steps 2 to 5: 4 Priority Skills ordered by largest gap
  prioritySkills.forEach((item, idx) => {
    const stepNum = idx + 2;
    const verb = getSkillVerb(item.skill, item.gapPercent, item.currentPercent);
    const guidance = getGuidance(item.skill);

    steps.push({
      id: `step-${stepNum}-skill-${item.skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      stepNumber: stepNum,
      title: `${verb} ${item.skill}`,
      subtitle: `Priority Skill (${item.gapPercent}% Identified Gap)`,
      description: `Target ${item.skill} as a priority development area. Closing this ${item.gapPercent}% gap directly aligns your capabilities with entry-level benchmarks in ${career.name}.`,
      actionItems: guidance.actionItems,
      suggestedDuration: guidance.duration,
      recommendedResources: guidance.resources,
      completed: false,
    });
  });

  // Step 6: Beginner Project
  const step6Num = steps.length + 1;
  const projectTitle = projectTitleMap[career.id] || `Complete a beginner ${career.name.toLowerCase()} project`;
  steps.push({
    id: 'step-6-beginner-project',
    stepNumber: step6Num,
    title: projectTitle,
    subtitle: `Hands-on Portfolio Capstone: ${career.suggestedBeginnerProject.title}`,
    description: career.suggestedBeginnerProject.description,
    actionItems: [
      `Utilize recommended tools: ${career.suggestedBeginnerProject.toolsUsed.join(', ')}`,
      `Complete final tangible deliverable: ${career.suggestedBeginnerProject.deliverable}`,
      'Write a clear README / project summary explaining your business rationale and methods',
    ],
    suggestedDuration: '2–3 Weeks',
    recommendedResources: [
      'Public datasets / case repositories',
      'Project documentation template',
      'Kaggle / GitHub examples',
    ],
    completed: false,
  });

  // Step 7: Build a Portfolio
  const step7Num = steps.length + 1;
  steps.push({
    id: 'step-7-build-portfolio',
    stepNumber: step7Num,
    title: 'Build a portfolio',
    subtitle: 'Showcase Your Projects & Practical Artifacts',
    description: 'Consolidate your project deliverables, code files, spreadsheets, or dashboard links into a public, professional showcase to prove your practical capability to prospective employers.',
    actionItems: [
      'Publish your project on GitHub, a personal website, or a shared cloud drive',
      'Write clean case summaries explaining the business problem, method, and results achieved',
      'Add prominent links to your portfolio in your resume header and LinkedIn profile',
    ],
    suggestedDuration: '1–2 Weeks',
    recommendedResources: ['GitHub Pages', 'LinkedIn Featured section', 'Notion portfolio template'],
    completed: false,
  });

  // Step 8: Internship / Practical Experience
  const step8Num = steps.length + 1;
  steps.push({
    id: 'step-8-internship',
    stepNumber: step8Num,
    title: 'Look for internship/practical experience',
    subtitle: `Workplace Application in ${career.name} or Related Team`,
    description: `Gain hands-on professional exposure by interning at a corporate firm, startup, agency, or college placement desk. Applying your skills under real business constraints accelerates growth.`,
    actionItems: [
      `Tailor your resume highlighting your ${degree}, top skills, and portfolio project`,
      `Apply for junior internship openings in ${career.name}, operations, or financial services`,
      'Work closely with experienced seniors and ask for feedback on your deliverables',
      'Document quantifiable contributions (e.g., "streamlined reports by 20%")',
    ],
    suggestedDuration: '2–6 Months',
    recommendedResources: ['College Placement Cell', 'Internshala', 'LinkedIn Jobs', 'Alumni referrals'],
    completed: false,
  });

  // Step 9: Explore Career Opportunities
  const step9Num = steps.length + 1;
  steps.push({
    id: 'step-9-explore-opportunities',
    stepNumber: step9Num,
    title: `Explore ${career.name} opportunities`,
    subtitle: `Targeting Entry-Level Roles in ${career.name}`,
    description: `With foundational education, closed skill gaps, a verified portfolio project, and practical experience, you are prepared to pursue entry-level opportunities across the industry.`,
    actionItems: [
      `Target entry-level roles such as ${career.exampleEduPath.split('→').pop()?.trim() || career.name}`,
      'Network with alumni on LinkedIn and request 15-minute informational interviews',
      'Practice structured situational and technical interview questions',
      'Commit to continuous learning as industry technologies and standards evolve',
    ],
    suggestedDuration: 'Career Launch Milestone',
    recommendedResources: ['Campus placements', 'Professional industry associations', 'Alumni network'],
    completed: false,
  });

  return steps;
}
