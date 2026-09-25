import React, { useMemo } from 'react';
import {
  AssessmentResult,
  CareerOption,
  StudentBackground,
  RoadmapStep,
  InterestArea,
} from '../types';
import { CAREERS_DATA } from '../data/careersData';
import { calculateSkillGap } from '../utils/scoring';
import { generatePersonalizedRoadmap } from '../data/careersData';
import {
  Compass,
  Printer,
  User,
  Heart,
  Award,
  Briefcase,
  Layers,
  Target,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  RotateCcw,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

interface ResultsViewProps {
  result: AssessmentResult;
  background: StudentBackground;
  selectedCareer?: CareerOption;
  onSelectCareer?: (career: CareerOption) => void;
  roadmapSteps?: RoadmapStep[];
  onStartAgain?: () => void;
  onReturnHome?: () => void;
  onExploreCareers?: () => void;
  onReviewSkillGap?: () => void;
  onContinueRoadmap?: () => void;
  onSelectCareerForGap?: (career: CareerOption) => void;
  onSelectCareerForRoadmap?: (career: CareerOption) => void;
  onSelectCareerForExplorer?: (career: CareerOption) => void;
  setActiveTab?: (tab: any) => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  result,
  background,
  selectedCareer = CAREERS_DATA[0],
  onSelectCareer,
  roadmapSteps: externalRoadmapSteps,
  onStartAgain,
  onReturnHome,
  onExploreCareers,
  onReviewSkillGap,
  onContinueRoadmap,
  onSelectCareerForGap,
  onSelectCareerForRoadmap,
  onSelectCareerForExplorer,
  setActiveTab,
}) => {
  // 1. Skill Gap calculation for selected career using student's real assessment scores
  const gapItems = useMemo(() => {
    return calculateSkillGap(selectedCareer, result.skillScores);
  }, [selectedCareer, result.skillScores]);

  // Priority skills (largest deficits)
  const prioritySkills = useMemo(() => {
    return gapItems.filter((item) => item.isPriority && item.gapPercent > 0);
  }, [gapItems]);

  // 2. Personalized Roadmap calculation
  const activeRoadmapSteps = useMemo(() => {
    if (externalRoadmapSteps && externalRoadmapSteps.length > 0) {
      return externalRoadmapSteps;
    }
    return generatePersonalizedRoadmap(
      selectedCareer,
      background.currentCourse || 'B.Com',
      gapItems
    );
  }, [externalRoadmapSteps, selectedCareer, background.currentCourse, gapItems]);

  const completedStepsCount = activeRoadmapSteps.filter((s) => s.completed).length;
  const roadmapProgressPercent = activeRoadmapSteps.length > 0
    ? Math.round((completedStepsCount / activeRoadmapSteps.length) * 100)
    : 0;

  // 4 Interest areas
  const interestAreasList: { name: InterestArea; description: string }[] = [
    { name: 'Analytical', description: 'Working with numbers, solving problems, analysing info & technology' },
    { name: 'People', description: 'Communicating with people, helping & guiding, and teamwork' },
    { name: 'Creative', description: 'Creating new ideas, marketing, and innovative problem solving' },
    { name: 'Business', description: 'Business operations, entrepreneurship, and leadership' },
  ];

  // 8 Skill competencies
  const skillCompetenciesList = [
    'Communication',
    'Digital Skills',
    'Analytical Thinking',
    'Problem Solving',
    'Teamwork',
    'Leadership',
    'Creativity',
    'Continuous Learning',
  ];

  // 3-5 Practical Next Steps based on priority skills
  const nextSteps = useMemo(() => {
    const steps: { title: string; detail: string }[] = [];
    const topDeficits = prioritySkills.slice(0, 3);

    topDeficits.forEach((item) => {
      const lower = item.skill.toLowerCase();
      if (lower.includes('excel')) {
        steps.push({
          title: 'Practise Excel',
          detail: 'Master essential formulas (SUMIFS, XLOOKUP), Pivot Tables, data cleaning, and conditional formatting.',
        });
      } else if (lower.includes('sql')) {
        steps.push({
          title: 'Learn SQL basics',
          detail: 'Practise foundational queries: SELECT, WHERE filters, GROUP BY aggregations, and multi-table INNER/LEFT JOINs.',
        });
      } else if (lower.includes('power bi')) {
        steps.push({
          title: 'Explore Power BI',
          detail: 'Download Power BI Desktop, connect a sample business spreadsheet, and build an interactive 3-card KPI dashboard.',
        });
      } else if (lower.includes('statistics')) {
        steps.push({
          title: 'Strengthen Statistics',
          detail: 'Review core descriptive statistics: mean, median, standard deviation, probability distributions, and hypothesis tests.',
        });
      } else if (lower.includes('financial') || lower.includes('accounting')) {
        steps.push({
          title: 'Review Financial Statements & Ratios',
          detail: 'Practise analyzing balance sheets, income statements, cash flow statements, and key profitability ratios.',
        });
      } else if (lower.includes('taxation')) {
        steps.push({
          title: 'Learn Practical Taxation Concepts',
          detail: 'Study direct & indirect tax fundamentals, GST filing principles, and basic corporate tax computations.',
        });
      } else if (lower.includes('marketing')) {
        steps.push({
          title: 'Practise Digital Marketing Tools',
          detail: 'Familiarize yourself with search engine optimization, audience segmentation, and performance analytics.',
        });
      } else {
        steps.push({
          title: `Strengthen ${item.skill}`,
          detail: `Dedicate focused study sessions to bridge your ${item.gapPercent}% gap in ${item.skill}.`,
        });
      }
    });

    // Ensure we always have Beginner Project and Mentorship steps
    steps.push({
      title: 'Complete a beginner project',
      detail: `Build a starter portfolio artifact for ${selectedCareer.name} (e.g. ${selectedCareer.suggestedBeginnerProject.title}).`,
    });

    steps.push({
      title: 'Talk with a teacher or career counsellor',
      detail: 'Share your Career Compass report with a mentor or academic advisor to discuss relevant electives and internship plans.',
    });

    return steps.slice(0, 5);
  }, [prioritySkills, selectedCareer]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8 font-sans print:py-0 print:px-0 print:max-w-none">
      {/* ============================================================== */}
      {/* REPORT TITLE BANNER & CONTROLS */}
      {/* ============================================================== */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4 print:border-none print:shadow-none print:p-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-xs">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-blue-700 tracking-wider uppercase block">
                CAREER COUNSELLING SUMMARY
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                My Career Compass Report
              </h1>
            </div>
          </div>

          {/* Print / Save Report & Home Buttons */}
          <div className="flex items-center gap-2 print:hidden self-start sm:self-center">
            {onReturnHome && (
              <button
                type="button"
                onClick={onReturnHome}
                className="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
                title="Return to Home Screen"
              >
                <span>← Home</span>
              </button>
            )}
            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              title="Print or save this comprehensive report as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save Report</span>
            </button>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
          This comprehensive guidance report combines your background, interest survey scores, skill competency self-ratings, career exploration options, skill gap analysis, and personalized learning roadmap into a single view.
        </p>
      </div>

      {/* ============================================================== */}
      {/* 1. STUDENT PROFILE */}
      {/* ============================================================== */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <User className="w-4 h-4 text-blue-600" />
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            1. STUDENT PROFILE
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Student Name */}
          <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/80 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">
              Student Name
            </span>
            <div className="text-base font-extrabold text-slate-900">
              {background.name || 'Student'}
            </div>
            {background.age && (
              <span className="text-xs text-slate-500 block">Age: {background.age}</span>
            )}
          </div>

          {/* Education */}
          <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/80 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">
              Education Level & Stream
            </span>
            <div className="text-base font-extrabold text-slate-900">
              {background.currentCourse || 'B.Com'}
            </div>
            <span className="text-xs text-slate-500 block truncate">
              {background.educationLevel || 'Undergraduate'}
            </span>
          </div>

          {/* Main Interests */}
          <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/80 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">
              Main Interests
            </span>
            <div className="text-base font-extrabold text-slate-900 truncate">
              {background.areasOfInterest && background.areasOfInterest.length > 0
                ? background.areasOfInterest.join(', ')
                : 'Commerce & Analytics'}
            </div>
            <span className="text-xs text-slate-500 block truncate">
              Subjects: {background.favouriteSubjects && background.favouriteSubjects.length > 0
                ? background.favouriteSubjects.join(', ')
                : 'Accounts, Economics, Math'}
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. INTEREST PROFILE */}
      {/* ============================================================== */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-blue-600" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              2. INTEREST PROFILE
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-medium">Calculated from 5-point statement survey</span>
        </div>

        <p className="text-xs text-slate-600">
          Scores calculated from your survey responses across the four workplace interest domains:
        </p>

        {/* Visual Progress Bars for 4 Areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {interestAreasList.map((areaItem) => {
            const score = result.interestAreaScores[areaItem.name] ?? 60;

            return (
              <div
                key={areaItem.name}
                className="bg-slate-50/70 border border-slate-200 rounded-xl p-4 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">
                    {areaItem.name}
                  </span>
                  <span className="text-sm font-mono font-extrabold text-slate-900 tabular-nums">
                    {score}%
                  </span>
                </div>

                {/* Simple Visual Progress Bar */}
                <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-blue-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${score}%` }}
                  />
                </div>

                <p className="text-[11px] text-slate-500 leading-snug">
                  {areaItem.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. SKILL PROFILE */}
      {/* ============================================================== */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-600" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              3. SKILL PROFILE
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-medium">Calculated percentages from 1–5 self-ratings</span>
        </div>

        <p className="text-xs text-slate-600">
          Your self-assessed percentage ratings across the eight core foundational competencies:
        </p>

        {/* 8 Competencies Grid with simple horizontal progress bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {skillCompetenciesList.map((skillName) => {
            const score = result.skillScores[skillName] ?? 60;

            return (
              <div
                key={skillName}
                className="bg-slate-50/80 border border-slate-200 rounded-xl p-3.5 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 truncate mr-1">
                    {skillName}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-900 tabular-nums">
                    {score}%
                  </span>
                </div>

                {/* Simple Horizontal Visual Progress Bar */}
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-blue-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${score}%` }}
                  />
                </div>

                <div className="text-[10px] text-slate-500">
                  {score >= 80 ? 'Proficient / Strong' : score >= 60 ? 'Competent' : 'Developing'}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. CAREER AREAS TO EXPLORE */}
      {/* ============================================================== */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-5">
        <div className="border-b border-slate-100 pb-3 space-y-1">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-blue-600" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              4. CAREER AREAS TO EXPLORE
            </h2>
          </div>
          <p className="text-xs text-slate-600">
            Top 3–4 career areas aligned with your interest profile and skill ratings. These represent suggested areas to research, not mandatory paths.
          </p>
        </div>

        <div className="space-y-4">
          {result.suggestedCareers.slice(0, 4).map((item) => {
            const { career, matchReasons, importantSkills } = item;
            const isCurrentlySelected = career.id === selectedCareer.id;

            return (
              <div
                key={career.id}
                className={`p-5 rounded-xl border transition-all ${
                  isCurrentlySelected
                    ? 'border-blue-400 bg-blue-50/20 shadow-2xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-blue-700">
                        {career.industry}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                        Career area worth exploring
                      </span>
                      {isCurrentlySelected && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-600 text-white">
                          Currently Selected
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 mt-1">
                      {career.name}
                    </h3>
                  </div>

                  {onSelectCareer && !isCurrentlySelected && (
                    <button
                      type="button"
                      onClick={() => onSelectCareer(career)}
                      className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-semibold rounded-lg transition-colors cursor-pointer self-start sm:self-center shrink-0 print:hidden"
                    >
                      Select for Gap & Roadmap
                    </button>
                  )}
                </div>

                {/* Match explanation based on student's responses */}
                <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5">
                  <span className="text-xs font-bold text-slate-800 block">
                    Why it may match your responses:
                  </span>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {matchReasons.map((reason, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Important Skills */}
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-800 mr-1">
                    Important Skills:
                  </span>
                  {importantSkills.map((sk) => (
                    <span
                      key={sk}
                      className="px-2 py-0.5 bg-slate-50 border border-slate-200 rounded text-[11px] font-medium text-slate-800"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. SELECTED CAREER */}
      {/* ============================================================== */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-blue-600" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              5. SELECTED CAREER
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-medium">Selected for deep-dive evaluation</span>
        </div>

        <div className="bg-blue-50/40 rounded-xl p-5 border border-blue-200 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold text-blue-800 block uppercase tracking-wide">
                Active Selection
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">
                {selectedCareer.name}
              </h3>
            </div>
            <span className="text-xs font-medium text-slate-600">
              Industry: <strong className="text-slate-800">{selectedCareer.industry}</strong>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {selectedCareer.typicalWork}
          </p>

          <div className="text-xs text-slate-600 pt-1">
            <strong>Example Educational Path:</strong> {selectedCareer.exampleEduPath}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. SKILL GAP SUMMARY */}
      {/* ============================================================== */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              6. SKILL GAP SUMMARY
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-medium">For {selectedCareer.name}</span>
        </div>

        <p className="text-xs text-slate-600">
          Comparison between your current assessment score and the standard reference benchmark for entry-level roles:
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-[11px] uppercase tracking-wider font-bold text-slate-600 border-b border-slate-200">
                <th className="py-3 px-3 sm:px-4">Skill</th>
                <th className="py-3 px-3 sm:px-4 min-w-[140px]">Current Level</th>
                <th className="py-3 px-3 sm:px-4 min-w-[140px]">Required Level</th>
                <th className="py-3 px-3 sm:px-4 min-w-[120px]">Gap</th>
                <th className="py-3 px-3 sm:px-4">Priority Skills</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {gapItems.map((item) => {
                const isPriority = item.isPriority && item.gapPercent > 0;

                return (
                  <tr
                    key={item.skill}
                    className={`transition-colors ${
                      isPriority ? 'bg-amber-50/40' : 'hover:bg-slate-50/60'
                    }`}
                  >
                    <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">
                      {item.skill}
                    </td>

                    {/* Current Level */}
                    <td className="py-3 px-3 sm:px-4">
                      <div className="space-y-1">
                        <div className="font-mono font-bold text-slate-900 text-xs">
                          {item.currentPercent}%
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
                          <div
                            className="bg-blue-600 h-full rounded-full"
                            style={{ width: `${item.currentPercent}%` }}
                          />
                        </div>
                      </div>
                    </td>

                    {/* Required Level */}
                    <td className="py-3 px-3 sm:px-4">
                      <div className="space-y-1">
                        <div className="font-mono font-bold text-slate-900 text-xs">
                          {item.requiredPercent}%
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
                          <div
                            className="bg-slate-700 h-full rounded-full"
                            style={{ width: `${item.requiredPercent}%` }}
                          />
                        </div>
                      </div>
                    </td>

                    {/* Gap */}
                    <td className="py-3 px-3 sm:px-4 font-mono font-extrabold">
                      <span
                        className={
                          item.gapPercent >= 30
                            ? 'text-rose-700'
                            : item.gapPercent >= 15
                            ? 'text-amber-800'
                            : item.gapPercent > 0
                            ? 'text-blue-700'
                            : 'text-emerald-700'
                        }
                      >
                        Gap: {item.gapPercent}%
                      </span>
                    </td>

                    {/* Priority Skills Tag */}
                    <td className="py-3 px-3 sm:px-4">
                      {isPriority ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-200 text-amber-950 border border-amber-300 uppercase tracking-wide inline-block">
                          Priority Skill
                        </span>
                      ) : item.gapPercent === 0 ? (
                        <span className="text-[11px] font-semibold text-emerald-700">
                          Benchmark Met ✓
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-500">
                          Secondary
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. PERSONALIZED ROADMAP */}
      {/* ============================================================== */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-blue-600" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              7. PERSONALIZED ROADMAP
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600">Completion:</span>
            <span className="text-xs font-bold font-mono text-blue-700">
              {completedStepsCount} of {activeRoadmapSteps.length} Steps ({roadmapProgressPercent}%)
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5">
          <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200">
            <div
              className="bg-blue-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${roadmapProgressPercent}%` }}
            />
          </div>
        </div>

        {/* Roadmap Steps Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
          {activeRoadmapSteps.map((step) => (
            <div
              key={step.id}
              className={`p-3.5 rounded-xl border text-xs space-y-1 ${
                step.completed
                  ? 'bg-blue-50/40 border-blue-200 text-blue-950'
                  : 'bg-slate-50/70 border-slate-200 text-slate-800'
              }`}
            >
              <div className="flex items-center justify-between font-bold">
                <span className="text-[11px] text-blue-700">Step {step.stepNumber}</span>
                {step.completed ? (
                  <span className="text-[10px] text-emerald-700 font-extrabold flex items-center gap-0.5">
                    <CheckCircle2 className="w-3 h-3" /> Done
                  </span>
                ) : (
                  <span className="text-[10px] text-slate-400">Pending</span>
                )}
              </div>
              <div className="font-bold text-slate-900 leading-tight">
                {step.title}
              </div>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. NEXT STEPS */}
      {/* ============================================================== */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <TrendingUp className="w-4 h-4 text-blue-600" />
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            8. NEXT STEPS
          </h2>
        </div>

        <p className="text-xs text-slate-600">
          Practical next steps based on your priority skills and career milestones:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {nextSteps.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50/80 border border-slate-200 rounded-xl p-4 space-y-1 flex items-start gap-3"
            >
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {index + 1}
              </span>
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-slate-900">
                  {item.title}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. FINAL DECISION MESSAGE (MANDATORY EXACT WORDING) */}
      {/* ============================================================== */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-3.5 border border-slate-800 shadow-md">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wide">
          <ShieldCheck className="w-4 h-4 text-blue-400" />
          <span>9. FINAL DECISION MESSAGE</span>
        </div>

        <div className="text-base sm:text-lg font-bold text-white leading-relaxed">
          “Career Compass provides guidance based on your responses. It does not make the final career decision for you.”
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
          “Use these results as a starting point. Consider your interests, abilities, education, opportunities and guidance from teachers, parents or qualified career counsellors before making your decision.”
        </p>
      </section>

      {/* ============================================================== */}
      {/* REQUIRED BUTTONS */}
      {/* ============================================================== */}
      <div className="p-6 bg-white border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs print:hidden">
        <div className="text-xs text-slate-600 text-center sm:text-left">
          Take action on your report through these modules:
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 w-full sm:w-auto">
          {onReturnHome && (
            <button
              type="button"
              onClick={onReturnHome}
              className="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-semibold rounded-xl transition-colors cursor-pointer shadow-2xs"
            >
              ← Back to Home
            </button>
          )}

          {onExploreCareers && (
            <button
              type="button"
              onClick={onExploreCareers}
              className="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-2xs"
            >
              Explore Careers
            </button>
          )}

          {onReviewSkillGap && (
            <button
              type="button"
              onClick={onReviewSkillGap}
              className="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-2xs"
            >
              Review Skill Gap
            </button>
          )}

          {onContinueRoadmap && (
            <button
              type="button"
              onClick={onContinueRoadmap}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-2xs flex items-center gap-1.5"
            >
              <span>Continue My Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          {onStartAgain && (
            <button
              type="button"
              onClick={onStartAgain}
              className="px-3.5 py-2 bg-white hover:bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-2xs flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Start Assessment Again</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
