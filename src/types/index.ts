export type EducationLevel =
  | 'Higher Secondary (11th/12th)'
  | 'Undergraduate (1st / 2nd Year)'
  | 'Final Year Undergraduate (B.Com, BBA, B.Sc, BCA, etc.)'
  | 'Postgraduate'
  | 'Other';

export interface StudentBackground {
  name: string;
  age: string;
  educationLevel: string;
  currentCourse: string;
  favouriteSubjects: string[];
  hobbies: string[];
  areasOfInterest: string[];
}

export type LikertRating = 1 | 2 | 3 | 4 | 5;

export type InterestArea = 'Analytical' | 'People' | 'Creative' | 'Business';

export interface InterestStatement {
  id: string;
  statement: string;
  area: InterestArea;
  subTopic: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  anchors: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
}

export interface CareerSkillBenchmark {
  skill: string;
  requiredPercent: number;
  importance: 'Essential' | 'Important' | 'Bonus';
  description: string;
  defaultCurrentPercent?: number;
}

export interface CareerOption {
  id: string;
  name: string;
  industry: string;
  tagline: string;
  shortDescription?: string;
  typicalWork?: string;
  involves: string;
  importantSkills: string[];
  exampleEduPath: string;
  skillsToDevelop: string[];
  suggestedBeginnerProject: {
    title: string;
    description: string;
    toolsUsed: string[];
    deliverable: string;
  };
  benchmarks: CareerSkillBenchmark[];
  primaryTraits: string[];
  secondaryTraits: string[];
}

export interface SkillGapItem {
  skill: string;
  currentPercent: number;
  requiredPercent: number;
  gapPercent: number;
  importance: 'Essential' | 'Important' | 'Bonus';
  description: string;
  isPriority?: boolean;
}

export interface RoadmapStep {
  id: string;
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  actionItems: string[];
  suggestedDuration: string;
  recommendedResources: string[];
  completed: boolean;
}

export interface CareerSuggestion {
  career: CareerOption;
  matchScore: number;
  matchReasons: string[];
  importantSkills: string[];
  skillsToImprove: string[];
}

export interface AssessmentResult {
  interestAreaScores: Record<InterestArea, number>;
  interestScores: Record<string, number>;
  skillScores: Record<string, number>;
  strongSkills: string[];
  developmentSkills: string[];
  suggestedCareers: CareerSuggestion[];
}

export type ActiveTab =
  | 'home'
  | 'about'
  | 'methodology'
  | 'demo'
  | 'background'
  | 'interests'
  | 'skills'
  | 'preferences'
  | 'results'
  | 'explorer'
  | 'skill-gap'
  | 'roadmap'
  | 'dashboard';
