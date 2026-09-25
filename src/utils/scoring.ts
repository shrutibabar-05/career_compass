import {
  AssessmentResult,
  CareerOption,
  CareerSuggestion,
  InterestArea,
  SkillGapItem,
  StudentBackground,
} from '../types';
import { CAREERS_DATA } from '../data/careersData';
import { INTEREST_STATEMENTS, SKILL_CATEGORIES } from '../data/questionsData';

/**
 * Transparent Scoring Engine
 * 
 * 1. Interest Scoring:
 *    Groups questions into 4 core areas:
 *    - Analytical: numbers, problem solving, analysing information, technology
 *    - People: communication, helping people, teamwork
 *    - Creative: creating ideas, marketing, creativity
 *    - Business: business, entrepreneurship, leadership
 *    Calculates a score (percentage 20%–100%) for each area.
 * 
 * 2. Skill Scoring:
 *    Calculates percentage for 8 foundational competencies (20%–100%):
 *    - Communication, Digital Skills, Analytical Thinking, Problem Solving,
 *      Teamwork, Leadership, Creativity, Continuous Learning.
 * 
 * 3. Career Suggestions:
 *    Uses interest scores, skill scores, and stated student preferences to rank careers.
 *    Returns top 3 to 4 career areas worth exploring, including:
 *    - Career name
 *    - Why it may match the student's responses
 *    - Important skills
 *    - Skills to improve
 */
export function calculateAssessment(
  interests: Record<string, number>,
  skills: Record<string, number>,
  selectedPreferences: string[],
  background: StudentBackground
): AssessmentResult {
  // 1. Calculate Interest area scores (Analytical, People, Creative, Business)
  const interestScores: Record<string, number> = {};
  const areaSums: Record<InterestArea, { sum: number; count: number }> = {
    Analytical: { sum: 0, count: 0 },
    People: { sum: 0, count: 0 },
    Creative: { sum: 0, count: 0 },
    Business: { sum: 0, count: 0 },
  };

  INTEREST_STATEMENTS.forEach((stmt) => {
    const rawVal = interests[stmt.id] !== undefined ? interests[stmt.id] : 3; // neutral default
    const pct = Math.round((rawVal / 5) * 100);
    interestScores[stmt.id] = pct;

    if (areaSums[stmt.area]) {
      areaSums[stmt.area].sum += pct;
      areaSums[stmt.area].count += 1;
    }
  });

  const interestAreaScores: Record<InterestArea, number> = {
    Analytical: areaSums.Analytical.count > 0 ? Math.round(areaSums.Analytical.sum / areaSums.Analytical.count) : 60,
    People: areaSums.People.count > 0 ? Math.round(areaSums.People.sum / areaSums.People.count) : 60,
    Creative: areaSums.Creative.count > 0 ? Math.round(areaSums.Creative.sum / areaSums.Creative.count) : 60,
    Business: areaSums.Business.count > 0 ? Math.round(areaSums.Business.sum / areaSums.Business.count) : 60,
  };

  // 2. Calculate Skill scores for the 8 competencies
  const skillScores: Record<string, number> = {};
  const strongSkills: string[] = [];
  const developmentSkills: string[] = [];

  SKILL_CATEGORIES.forEach((cat) => {
    const rawVal = skills[cat.id] !== undefined ? skills[cat.id] : 3;
    const percent = Math.round((rawVal / 5) * 100);
    skillScores[cat.name] = percent;

    if (rawVal >= 4) {
      strongSkills.push(cat.name);
    } else {
      developmentSkills.push(cat.name);
    }
  });

  // 3. Compute Career Exploration match using Interest Area scores + Skill scores
  const careerEvaluations = CAREERS_DATA.map((career) => {
    // A. Interest Alignment (50% weight)
    let areaWeightSum = 0;
    let areaWeightTotal = 0;

    if (career.id === 'data-analyst') {
      areaWeightSum += interestAreaScores.Analytical * 0.7 + interestAreaScores.Business * 0.3;
      areaWeightTotal = 1.0;
    } else if (career.id === 'accountant') {
      areaWeightSum += interestAreaScores.Analytical * 0.6 + interestAreaScores.Business * 0.4;
      areaWeightTotal = 1.0;
    } else if (career.id === 'banking-finance') {
      areaWeightSum += interestAreaScores.Analytical * 0.5 + interestAreaScores.Business * 0.5;
      areaWeightTotal = 1.0;
    } else if (career.id === 'marketing-specialist') {
      areaWeightSum += interestAreaScores.Creative * 0.5 + interestAreaScores.People * 0.3 + interestAreaScores.Business * 0.2;
      areaWeightTotal = 1.0;
    } else if (career.id === 'human-resources') {
      areaWeightSum += interestAreaScores.People * 0.7 + interestAreaScores.Business * 0.3;
      areaWeightTotal = 1.0;
    } else if (career.id === 'entrepreneurship') {
      areaWeightSum += interestAreaScores.Business * 0.5 + interestAreaScores.Creative * 0.3 + interestAreaScores.People * 0.2;
      areaWeightTotal = 1.0;
    } else {
      areaWeightSum += interestAreaScores.Business * 0.5 + interestAreaScores.Analytical * 0.3 + interestAreaScores.People * 0.2;
      areaWeightTotal = 1.0;
    }
    const avgInterestScore = areaWeightSum / areaWeightTotal;

    // B. Skill Alignment (40% weight)
    let relevantSkillSum = 0;
    let relevantSkillCount = 0;

    if (career.id === 'data-analyst') {
      relevantSkillSum += (skillScores['Analytical Thinking'] || 60) * 1.5;
      relevantSkillSum += (skillScores['Digital Skills'] || 60) * 1.5;
      relevantSkillSum += (skillScores['Problem Solving'] || 60) * 1.2;
      relevantSkillSum += (skillScores['Communication'] || 60) * 0.8;
      relevantSkillCount += 5.0;
    } else if (career.id === 'accountant') {
      relevantSkillSum += (skillScores['Analytical Thinking'] || 60) * 1.5;
      relevantSkillSum += (skillScores['Problem Solving'] || 60) * 1.2;
      relevantSkillSum += (skillScores['Digital Skills'] || 60) * 1.2;
      relevantSkillSum += (skillScores['Communication'] || 60) * 0.8;
      relevantSkillCount += 4.7;
    } else if (career.id === 'banking-finance') {
      relevantSkillSum += (skillScores['Analytical Thinking'] || 60) * 1.5;
      relevantSkillSum += (skillScores['Problem Solving'] || 60) * 1.2;
      relevantSkillSum += (skillScores['Communication'] || 60) * 1.1;
      relevantSkillSum += (skillScores['Digital Skills'] || 60) * 1.0;
      relevantSkillCount += 4.8;
    } else if (career.id === 'marketing-specialist') {
      relevantSkillSum += (skillScores['Communication'] || 60) * 1.5;
      relevantSkillSum += (skillScores['Creativity'] || 60) * 1.5;
      relevantSkillSum += (skillScores['Digital Skills'] || 60) * 1.0;
      relevantSkillSum += (skillScores['Analytical Thinking'] || 60) * 0.8;
      relevantSkillCount += 4.8;
    } else if (career.id === 'human-resources') {
      relevantSkillSum += (skillScores['Communication'] || 60) * 1.6;
      relevantSkillSum += (skillScores['Teamwork'] || 60) * 1.4;
      relevantSkillSum += (skillScores['Problem Solving'] || 60) * 1.0;
      relevantSkillSum += (skillScores['Leadership'] || 60) * 1.0;
      relevantSkillCount += 5.0;
    } else if (career.id === 'entrepreneurship') {
      relevantSkillSum += (skillScores['Leadership'] || 60) * 1.4;
      relevantSkillSum += (skillScores['Communication'] || 60) * 1.3;
      relevantSkillSum += (skillScores['Creativity'] || 60) * 1.3;
      relevantSkillSum += (skillScores['Problem Solving'] || 60) * 1.2;
      relevantSkillCount += 5.2;
    } else {
      relevantSkillSum += (skillScores['Leadership'] || 60) * 1.4;
      relevantSkillSum += (skillScores['Communication'] || 60) * 1.2;
      relevantSkillSum += (skillScores['Problem Solving'] || 60) * 1.2;
      relevantSkillSum += (skillScores['Teamwork'] || 60) * 1.0;
      relevantSkillCount += 4.8;
    }
    const avgSkillScore = relevantSkillSum / relevantSkillCount;

    // C. Student Preference Bonus (10% weight)
    const isPreferred =
      selectedPreferences.includes(career.name) ||
      selectedPreferences.some(
        (p) =>
          career.name.toLowerCase().includes(p.toLowerCase()) ||
          p.toLowerCase().includes(career.name.toLowerCase())
      );
    const preferenceBonus = isPreferred ? 10 : 0;

    // Composite Calculation (50% interest, 40% skills, 10% preference)
    const compositeScore = Math.round(avgInterestScore * 0.5 + avgSkillScore * 0.4 + preferenceBonus);
    const clampedScore = Math.min(98, Math.max(38, compositeScore));

    // Match rationale generator ("Why it may match the student's responses")
    const matchReasons: string[] = [];
    if (isPreferred) {
      matchReasons.push('Directly matches your stated career interest selection');
    }
    if (career.id === 'data-analyst' && interestAreaScores.Analytical >= 65) {
      matchReasons.push(`High Analytical interest score (${interestAreaScores.Analytical}%) in numbers and problem solving`);
    }
    if (career.id === 'accountant' && interestAreaScores.Analytical >= 60 && interestAreaScores.Business >= 60) {
      matchReasons.push(`Balanced combination of Analytical (${interestAreaScores.Analytical}%) and Business (${interestAreaScores.Business}%) interests`);
    }
    if (career.id === 'banking-finance' && interestAreaScores.Analytical >= 60) {
      matchReasons.push(`Strong quantitative interest (${interestAreaScores.Analytical}%) paired with commerce awareness`);
    }
    if (career.id === 'marketing-specialist' && interestAreaScores.Creative >= 65) {
      matchReasons.push(`High Creative interest score (${interestAreaScores.Creative}%) in generating ideas and campaigns`);
    }
    if (career.id === 'human-resources' && interestAreaScores.People >= 65) {
      matchReasons.push(`High People interest score (${interestAreaScores.People}%) in helping and communicating with others`);
    }
    if (career.id === 'entrepreneurship' && interestAreaScores.Business >= 65) {
      matchReasons.push(`High Business interest score (${interestAreaScores.Business}%) in enterprise and venture creation`);
    }
    if (strongSkills.length > 0) {
      matchReasons.push(`Capitalizes on your high self-ratings in ${strongSkills.slice(0, 2).join(' & ')}`);
    }
    if (matchReasons.length === 0) {
      matchReasons.push('Aligns with your balanced foundational skill and curiosity profile');
    }

    // Determine Skills to Improve for this specific career
    const gaps = calculateSkillGap(career, skillScores);
    const skillsToImprove = gaps
      .filter((g) => g.gapPercent > 0)
      .sort((a, b) => b.gapPercent - a.gapPercent)
      .slice(0, 3)
      .map((g) => `${g.skill} (${g.gapPercent}% gap)`);

    return {
      career,
      matchScore: clampedScore,
      matchReasons: matchReasons.slice(0, 3),
      importantSkills: career.importantSkills,
      skillsToImprove: skillsToImprove.length > 0 ? skillsToImprove : ['Advanced domain mastery'],
    };
  });

  // Sort descending by matchScore
  careerEvaluations.sort((a, b) => b.matchScore - a.matchScore);

  // Return top 3 to 4 suggestions
  const topSuggestions = careerEvaluations.slice(0, 4);

  return {
    interestAreaScores,
    interestScores,
    skillScores,
    strongSkills,
    developmentSkills,
    suggestedCareers: topSuggestions,
  };
}

/**
 * Calculates skill gap between student's actual assessment scores and example/reference benchmark levels.
 * Skill Gap = Required Level − Current Level (clamped to 0 if current >= required)
 * Clearly highlights the largest deficits as "Priority Skills".
 */
export function calculateSkillGap(
  career: CareerOption,
  userSkills: Record<string, number>, // percentage 0-100 from student assessment
  customCurrentOverrides?: Record<string, number>
): SkillGapItem[] {
  const digital = userSkills['Digital Skills'] !== undefined ? userSkills['Digital Skills'] : 60;
  const analytical = userSkills['Analytical Thinking'] !== undefined ? userSkills['Analytical Thinking'] : 60;
  const problemSolving = userSkills['Problem Solving'] !== undefined ? userSkills['Problem Solving'] : 60;
  const communication = userSkills['Communication'] !== undefined ? userSkills['Communication'] : 60;
  const creativity = userSkills['Creativity'] !== undefined ? userSkills['Creativity'] : 60;
  const teamwork = userSkills['Teamwork'] !== undefined ? userSkills['Teamwork'] : 60;
  const leadership = userSkills['Leadership'] !== undefined ? userSkills['Leadership'] : 60;
  const continuous = userSkills['Continuous Learning'] !== undefined ? userSkills['Continuous Learning'] : 60;

  const items = career.benchmarks.map((benchmark) => {
    let current = benchmark.defaultCurrentPercent || 50;

    // 1. If manual override provided
    if (customCurrentOverrides && customCurrentOverrides[benchmark.skill] !== undefined) {
      current = customCurrentOverrides[benchmark.skill];
    } else {
      // 2. Compute directly from student's actual assessment scores
      const bLower = benchmark.skill.toLowerCase();

      if (bLower === 'communication') {
        current = communication;
      } else if (bLower === 'analytical thinking') {
        current = analytical;
      } else if (bLower === 'problem solving') {
        current = problemSolving;
      } else if (bLower === 'teamwork') {
        current = teamwork;
      } else if (bLower === 'leadership') {
        current = leadership;
      } else if (bLower === 'creativity') {
        current = creativity;
      } else if (bLower === 'continuous learning') {
        current = continuous;
      } else if (bLower === 'excel') {
        // Excel proficiency maps directly from student's Digital Skills evaluation
        current = Math.round(digital * 0.95 + analytical * 0.05);
      } else if (bLower === 'sql') {
        // SQL querying derives from Digital Skills and Analytical Thinking
        current = Math.round(digital * 0.4 + analytical * 0.2);
      } else if (bLower === 'statistics') {
        // Statistics derives from Analytical Thinking and Problem Solving
        current = Math.round(analytical * 0.7 + problemSolving * 0.3);
      } else if (bLower === 'power bi' || bLower.includes('power bi')) {
        // Power BI visual analytics derives from Digital Skills and Creative presentation
        current = Math.round(digital * 0.2 + creativity * 0.1);
      } else if (bLower === 'accounting') {
        current = Math.round(analytical * 0.5 + continuous * 0.25);
      } else if (bLower === 'taxation') {
        current = Math.round(analytical * 0.4 + continuous * 0.2);
      } else if (bLower === 'financial analysis') {
        current = Math.round(analytical * 0.6 + problemSolving * 0.25);
      } else if (bLower === 'financial knowledge') {
        current = Math.round(analytical * 0.5 + continuous * 0.25);
      } else if (bLower === 'customer service') {
        current = Math.round(communication * 0.6 + teamwork * 0.4);
      } else if (bLower === 'digital marketing') {
        current = Math.round(digital * 0.5 + creativity * 0.4);
      } else if (bLower === 'market research') {
        current = Math.round(analytical * 0.5 + communication * 0.3);
      } else if (bLower === 'people skills') {
        current = Math.round(communication * 0.5 + teamwork * 0.5);
      } else if (bLower === 'business knowledge') {
        current = Math.round(analytical * 0.3 + leadership * 0.3 + continuous * 0.2);
      }
    }

    // Clamp current between 10% and 100%
    current = Math.min(100, Math.max(10, current));
    const required = benchmark.requiredPercent;
    // Skill Gap = Required Level − Current Level (clamped to 0 if current >= required)
    const gap = Math.max(0, required - current);

    return {
      skill: benchmark.skill,
      currentPercent: current,
      requiredPercent: required,
      gapPercent: gap,
      importance: benchmark.importance,
      description: benchmark.description,
      isPriority: false, // will mark top gaps below
    };
  });

  // Clearly highlight the student's largest gaps as "Priority Skills"
  const sortedGaps = [...items].filter((i) => i.gapPercent > 0).sort((a, b) => b.gapPercent - a.gapPercent);
  const prioritySkillNames = new Set(sortedGaps.slice(0, 3).map((g) => g.skill));

  return items.map((item) => ({
    ...item,
    isPriority: prioritySkillNames.has(item.skill),
  }));
}
