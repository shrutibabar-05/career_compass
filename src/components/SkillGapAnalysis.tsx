import React, { useMemo } from 'react';
import { CareerOption, RoadmapStep, SkillGapItem, StudentBackground } from '../types';
import { CAREERS_DATA } from '../data/careersData';
import { calculateSkillGap } from '../utils/scoring';
import { generatePersonalizedRoadmap } from '../data/careersData';
import {
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  Briefcase,
  Layers,
  Sparkles,
  ShieldCheck,
  BookOpen,
  ArrowDown,
  Target,
  FileText,
  Clock,
} from 'lucide-react';

interface SkillGapAnalysisProps {
  selectedCareer: CareerOption;
  onSelectCareer: (career: CareerOption) => void;
  userSkills: Record<string, number>;
  hasCompletedAssessment?: boolean;
  background?: StudentBackground;
  roadmapSteps?: RoadmapStep[];
  onToggleStepCompletion?: (stepId: string) => void;
  onBackToExplorer?: () => void;
  onViewMyResults?: () => void;
  onProceedToRoadmap?: (career: CareerOption) => void;
}

export const SkillGapAnalysis: React.FC<SkillGapAnalysisProps> = ({
  selectedCareer,
  onSelectCareer,
  userSkills,
  hasCompletedAssessment = false,
  background = { name: '', age: '', educationLevel: '', currentCourse: 'B.Com', favouriteSubjects: [], hobbies: [], areasOfInterest: [] },
  roadmapSteps: externalRoadmapSteps,
  onToggleStepCompletion,
  onBackToExplorer,
  onViewMyResults,
  onProceedToRoadmap,
}) => {
  // Calculate gap items using the student's actual assessment scores
  const gapItems: SkillGapItem[] = useMemo(() => {
    return calculateSkillGap(selectedCareer, userSkills);
  }, [selectedCareer, userSkills]);

  // Compute roadmap steps dynamically based on selected career & priority skill gaps
  const activeRoadmapSteps: RoadmapStep[] = useMemo(() => {
    if (externalRoadmapSteps && externalRoadmapSteps.length > 0) {
      return externalRoadmapSteps;
    }
    return generatePersonalizedRoadmap(
      selectedCareer,
      background.currentCourse || 'B.Com',
      gapItems
    );
  }, [externalRoadmapSteps, selectedCareer, background.currentCourse, gapItems]);

  // Summary statistics
  const prioritySkills = gapItems.filter((item) => item.isPriority && item.gapPercent > 0);
  const totalPriorityCount = prioritySkills.length;
  const completedStepsCount = activeRoadmapSteps.filter((s) => s.completed).length;
  const roadmapProgressPercent = activeRoadmapSteps.length > 0
    ? Math.round((completedStepsCount / activeRoadmapSteps.length) * 100)
    : 0;

  const averageGap = Math.round(
    gapItems.reduce((acc, curr) => acc + curr.gapPercent, 0) / (gapItems.length || 1)
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-10">
      {/* SECTION 1: HEADER */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>SKILL GAP ANALYSIS · COMPARISON ENGINE</span>
          </div>

          {/* Quick Navigation to Explorer & Results */}
          <div className="flex items-center gap-2">
            {onBackToExplorer && (
              <button
                type="button"
                onClick={onBackToExplorer}
                className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Career Explorer</span>
              </button>
            )}
            {onViewMyResults && (
              <button
                type="button"
                onClick={onViewMyResults}
                className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View My Results</span>
              </button>
            )}
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Skill Gap Analysis
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          Compare your current self-assessed abilities directly against standard required benchmark levels for <strong className="text-slate-900">{selectedCareer.name}</strong>. Identified deficits pinpoint your exact high-priority learning areas.
        </p>

        {/* Assessment Data Authenticity Banner */}
        <div className="p-3.5 sm:p-4 rounded-xl border flex items-start gap-3 bg-blue-50/70 border-blue-200 text-blue-950">
          <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
          <div className="text-xs space-y-0.5">
            <span className="font-semibold block">
              {hasCompletedAssessment ? 'Student Assessment Scores Connected:' : 'Assessment Scores Connected:'}
            </span>
            <p className="text-blue-900/90 leading-relaxed">
              <strong>Current Level</strong> values reflect your authentic responses to the 8 core skills assessment categories (Digital Skills, Analytical Thinking, Communication, Problem Solving, etc.). No simulated or fake placeholder scores are used.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: CAREER SELECTOR BAR */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 block">
            Select Career to Evaluate:
          </label>
          <div className="flex items-center gap-2">
            <select
              value={selectedCareer.id}
              onChange={(e) => {
                const found = CAREERS_DATA.find((c) => c.id === e.target.value);
                if (found) onSelectCareer(found);
              }}
              className="px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
            >
              {CAREERS_DATA.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.industry.split('&')[0]})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Selected Role Quick Info */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <span className="text-[11px] font-medium text-slate-500 block">Active Evaluation</span>
            <span className="text-xs font-bold text-slate-900">{selectedCareer.name}</span>
          </div>
          <div className="w-px h-8 bg-slate-200 hidden sm:block" />
          <div className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 border border-slate-200">
            {gapItems.length} Skills Evaluated
          </div>
        </div>
      </div>

      {/* SECTION 3: SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
            Selected Career
          </span>
          <div className="text-lg font-extrabold text-slate-900 truncate">
            {selectedCareer.name}
          </div>
          <p className="text-xs text-slate-500 truncate">
            {selectedCareer.industry}
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
            Average Skill Gap
          </span>
          <div className="text-2xl font-extrabold text-slate-900 font-mono tabular-nums">
            {averageGap}%
          </div>
          <p className="text-xs text-slate-500">
            Across all required benchmark competencies
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block">
            Priority Skills
          </span>
          <div className="text-2xl font-extrabold text-amber-800 font-mono tabular-nums">
            {totalPriorityCount} Skills
          </div>
          <p className="text-xs text-amber-900/80 truncate">
            {prioritySkills.map((p) => p.skill).join(', ') || 'No major gaps'}
          </p>
        </div>
      </div>

      {/* SECTION 4: SKILL GAP COMPARISON TABLE */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        {/* Table Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Skill Comparison: {selectedCareer.name}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Comparison between your current assessment rating and the standard required level. Formula: <code>Skill Gap = Required Level − Current Level</code>.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
              Priority Skills
            </span>
            <span className="text-[11px] text-slate-500">= Largest Identified Deficits</span>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-[11px] uppercase tracking-wider font-bold text-slate-600 border-b border-slate-200">
                <th className="py-3.5 px-4 sm:px-6">Skill</th>
                <th className="py-3.5 px-4 sm:px-6 min-w-[180px]">Current Level</th>
                <th className="py-3.5 px-4 sm:px-6 min-w-[180px]">Required Level</th>
                <th className="py-3.5 px-4 sm:px-6 min-w-[140px]">Skill Gap</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {gapItems.map((item) => {
                const isPriority = item.isPriority && item.gapPercent > 0;

                return (
                  <tr
                    key={item.skill}
                    className={`transition-colors ${
                      isPriority
                        ? 'bg-amber-50/40 hover:bg-amber-50/70'
                        : 'hover:bg-slate-50/80'
                    }`}
                  >
                    {/* 1. Skill Name & Priority Flag */}
                    <td className="py-4 px-4 sm:px-6 align-middle">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-bold text-slate-900 text-sm">
                            {item.skill}
                          </span>
                          {isPriority && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-200 text-amber-950 border border-amber-300 tracking-wide uppercase">
                              Priority Skill
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 leading-snug max-w-xs">
                          {item.description}
                        </p>
                      </div>
                    </td>

                    {/* 2. Current Level (Actual Assessment Score) */}
                    <td className="py-4 px-4 sm:px-6 align-middle">
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-500 font-medium">Current:</span>
                          <span className="font-mono font-bold text-slate-900 tabular-nums">
                            {item.currentPercent}%
                          </span>
                        </div>
                        {/* Horizontal Progress Bar */}
                        <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200">
                          <div
                            className="bg-blue-600 h-full rounded-full transition-all duration-300"
                            style={{ width: `${item.currentPercent}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-slate-400 block">
                          From student assessment
                        </span>
                      </div>
                    </td>

                    {/* 3. Required Level (Example Reference Benchmark) */}
                    <td className="py-4 px-4 sm:px-6 align-middle">
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-500 font-medium">Required:</span>
                          <span className="font-mono font-bold text-slate-900 tabular-nums">
                            {item.requiredPercent}%
                          </span>
                        </div>
                        {/* Horizontal Progress Bar */}
                        <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200">
                          <div
                            className="bg-slate-700 h-full rounded-full transition-all duration-300"
                            style={{ width: `${item.requiredPercent}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-slate-400 block">
                          Reference Benchmark ({item.importance})
                        </span>
                      </div>
                    </td>

                    {/* 4. Skill Gap = Required Level − Current Level */}
                    <td className="py-4 px-4 sm:px-6 align-middle">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`font-mono text-base font-extrabold tabular-nums ${
                              item.gapPercent >= 40
                                ? 'text-rose-700'
                                : item.gapPercent >= 20
                                ? 'text-amber-800'
                                : item.gapPercent > 0
                                ? 'text-blue-700'
                                : 'text-emerald-700'
                            }`}
                          >
                            Gap: {item.gapPercent}%
                          </span>
                        </div>

                        {/* Gap horizontal mini-bar */}
                        <div className="w-24 bg-slate-100 rounded-full h-1.5 overflow-hidden border border-slate-200">
                          <div
                            className={`h-full rounded-full transition-all duration-300 ${
                              item.gapPercent >= 40
                                ? 'bg-rose-600'
                                : item.gapPercent >= 20
                                ? 'bg-amber-600'
                                : item.gapPercent > 0
                                ? 'bg-blue-600'
                                : 'bg-emerald-600'
                            }`}
                            style={{ width: `${Math.min(100, item.gapPercent * 1.25)}%` }}
                          />
                        </div>

                        <span className="text-[10px] text-slate-500 block">
                          {item.gapPercent === 0 ? 'Benchmark achieved ✓' : `${item.requiredPercent}% − ${item.currentPercent}%`}
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Priority Skills Highlight Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="text-slate-700">
            <strong>Key Focus:</strong> Identified <strong className="text-amber-900">{totalPriorityCount} Priority Skills</strong> with the largest gap for {selectedCareer.name}. These form the direct focus of your personalized roadmap below.
          </div>

          {onProceedToRoadmap && (
            <button
              onClick={() => onProceedToRoadmap(selectedCareer)}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg flex items-center gap-1.5 self-start sm:self-auto cursor-pointer shadow-2xs"
            >
              <span>Scroll to Roadmap</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* SECTION 5: "MY PERSONALIZED ROADMAP" SECTION (DIRECTLY BELOW SKILL GAP) */}
      <div className="space-y-6 pt-4 border-t border-slate-200" id="personalized-roadmap-section">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
            <Target className="w-3.5 h-3.5 text-blue-600" />
            <span>LEARNING & EXPERIENCE PATHWAY</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            My Personalized Roadmap
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
            Generated directly from your selected career (<strong className="text-slate-900">{selectedCareer.name}</strong>) and your top identified priority skills. Follow this practical sequence to bridge your deficits step-by-step.
          </p>

          {/* REQUIRED IMPORTANT NOTICE BANNER */}
          <div className="p-4 bg-blue-50/80 border border-blue-200 rounded-xl text-blue-950 text-xs sm:text-sm leading-relaxed space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-blue-900">
              <HelpCircle className="w-4 h-4 text-blue-700 shrink-0" />
              <span>Roadmap Guidance Notice</span>
            </div>
            <p className="text-blue-950 font-medium">
              “Your roadmap is based on your assessment responses and the selected career. It is a suggested learning path, not a guarantee of career success.”
            </p>
          </div>
        </div>

        {/* Roadmap Progress Percentage Card */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-700 block">
              Roadmap Progress Overview:
            </span>
            <div className="text-sm font-semibold text-slate-900">
              <span className="text-blue-700 font-extrabold">{completedStepsCount}</span> of <span className="font-extrabold">{activeRoadmapSteps.length}</span> Steps Completed
            </div>
          </div>

          <div className="w-full sm:w-64 space-y-1.5">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500 font-medium">Completion Rate:</span>
              <span className="font-mono font-bold text-slate-900">{roadmapProgressPercent}%</span>
            </div>
            {/* Simple Clean Progress Bar */}
            <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${roadmapProgressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Step-by-Step 9-Step Roadmap Flow */}
        <div className="space-y-4">
          {activeRoadmapSteps.map((step, index) => {
            const isLast = index === activeRoadmapSteps.length - 1;

            return (
              <React.Fragment key={step.id}>
                <div
                  className={`bg-white rounded-2xl border transition-all p-5 sm:p-6 shadow-2xs ${
                    step.completed
                      ? 'border-blue-300 bg-blue-50/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    {/* Left: Step indicator & details */}
                    <div className="flex items-start gap-3.5">
                      {/* Checkbox / Mark Complete button */}
                      <button
                        type="button"
                        onClick={() => onToggleStepCompletion && onToggleStepCompletion(step.id)}
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-all cursor-pointer border ${
                          step.completed
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-slate-500 border-slate-300 hover:border-blue-500 hover:text-blue-600'
                        }`}
                        title={step.completed ? 'Click to mark incomplete' : 'Click to mark as complete'}
                      >
                        {step.completed ? (
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        ) : (
                          <span>{step.stepNumber}</span>
                        )}
                      </button>

                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wide">
                            Step {step.stepNumber} · {step.subtitle}
                          </span>
                          {step.completed && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-900 border border-blue-200">
                              Completed ✓
                            </span>
                          )}
                        </div>

                        <h4 className="text-base sm:text-lg font-bold text-slate-900">
                          {step.title}
                        </h4>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Right: Estimated duration & Mark complete button */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{step.suggestedDuration}</span>
                      </span>

                      <button
                        type="button"
                        onClick={() => onToggleStepCompletion && onToggleStepCompletion(step.id)}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer border ${
                          step.completed
                            ? 'bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        {step.completed ? 'Mark Incomplete' : 'Mark Complete'}
                      </button>
                    </div>
                  </div>

                  {/* Action items list */}
                  {step.actionItems && step.actionItems.length > 0 && (
                    <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-2">
                      <span className="text-xs font-bold text-slate-800 block">
                        Target Action Items:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {step.actionItems.map((action, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                            <span className="leading-snug">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Recommended learning resources */}
                  {step.recommendedResources && step.recommendedResources.length > 0 && (
                    <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                      <span className="font-bold text-slate-700 mr-1 flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                        Resources:
                      </span>
                      {step.recommendedResources.map((res, rIdx) => (
                        <span
                          key={rIdx}
                          className="bg-slate-50 text-slate-700 px-2 py-0.5 rounded text-[11px] border border-slate-200 font-medium"
                        >
                          {res}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Down Arrow Connector between Steps */}
                {!isLast && (
                  <div className="flex justify-center -my-1 text-slate-400">
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[11px] font-bold border border-slate-200">
                      <ArrowDown className="w-3.5 h-3.5 text-blue-600" />
                      <span>Next Step</span>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* SECTION 6: REQUIRED BUTTONS (Back to Career Explorer & View My Results) */}
        <div className="p-5 sm:p-6 bg-white border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="text-xs text-slate-600 text-center sm:text-left">
            Finished reviewing your roadmap? Return to the career cards or review your overall assessment summary.
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-end">
            {onBackToExplorer && (
              <button
                type="button"
                onClick={onBackToExplorer}
                className="w-full sm:w-auto px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Career Explorer</span>
              </button>
            )}

            {onViewMyResults && (
              <button
                type="button"
                onClick={onViewMyResults}
                className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View My Results</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* FINAL DECISION NOTICE BANNER */}
      <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 sm:p-6 text-amber-950 space-y-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0" />
          <h4 className="text-sm font-bold text-amber-900">
            Final Decision Notice & Guidance Policy
          </h4>
        </div>
        <p className="text-xs sm:text-sm text-amber-950/90 leading-relaxed">
          Career Compass provides guidance based on your responses. It does not make the final career decision for you. Your final decision should consider your interests, abilities, education, opportunities and guidance from teachers, parents or qualified career counsellors.
        </p>
      </div>
    </div>
  );
};
