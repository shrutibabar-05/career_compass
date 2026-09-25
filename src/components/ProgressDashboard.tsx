import React from 'react';
import {
  AssessmentResult,
  CareerOption,
  RoadmapStep,
  StudentBackground,
  ActiveTab,
} from '../types';
import {
  CheckCircle2,
  TrendingUp,
  AlertCircle,
  Award,
  Compass,
  RotateCcw,
  BookOpen,
  Printer,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

interface ProgressDashboardProps {
  background: StudentBackground;
  result: AssessmentResult | null;
  selectedCareer: CareerOption;
  roadmapSteps: RoadmapStep[];
  hasCompletedAssessment: boolean;
  onExploreCareersAgain: () => void;
  onReviewSkillGap: () => void;
  onViewMyRoadmap: () => void;
  onStartAgain: () => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  background,
  result,
  selectedCareer,
  roadmapSteps,
  hasCompletedAssessment,
  onExploreCareersAgain,
  onReviewSkillGap,
  onViewMyRoadmap,
  onStartAgain,
  setActiveTab,
}) => {
  const completedSteps = roadmapSteps.filter((s) => s.completed);
  const roadmapProgressPercent = Math.round(
    (completedSteps.length / roadmapSteps.length) * 100
  );

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-10">
      {/* Printable Header (Visible only when printing) */}
      <div className="hidden print-only mb-6">
        <h1 className="text-2xl font-bold">Career Compass — Student Guidance Summary</h1>
        <p className="text-sm text-slate-600">Student: {background.name || 'Student'} | Stream: {background.currentCourse || 'General'}</p>
        <p className="text-xs text-slate-500">Selected Career Target: {selectedCareer.name}</p>
        <hr className="my-3 border-slate-300" />
      </div>

      {/* Top Banner & Print Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 no-print">
        <div>
          <span className="text-xs font-semibold text-teal-700 tracking-wide">
            PROGRESS & CAREER DASHBOARD
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-0.5">
            Student Journey & Milestone Tracker
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            A single unified view of your assessment status, competencies evaluated, skill priorities, and roadmap progress.
          </p>
        </div>

        <button
          onClick={handlePrint}
          className="self-start sm:self-auto px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Print / Save PDF</span>
        </button>
      </div>

      {/* 4 Dashboard Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Assessment Status */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">Assessment Status</span>
            <CheckCircle2
              className={`w-4 h-4 ${
                hasCompletedAssessment ? 'text-teal-600' : 'text-slate-400'
              }`}
            />
          </div>
          <div className="text-lg font-bold text-slate-900">
            {hasCompletedAssessment ? 'Completed ✓' : 'In Progress'}
          </div>
          <p className="text-[11px] text-slate-500">
            {hasCompletedAssessment
              ? 'Profile, 8 interests & 8 skills recorded'
              : 'Complete remaining assessment questions'}
          </p>
        </div>

        {/* Card 2: Skills Assessed */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">Skills Assessed</span>
            <Award className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-lg font-bold text-slate-900">
            {result ? Object.keys(result.skillScores).length : 0} of 8 Skills
          </div>
          <p className="text-[11px] text-teal-700 font-medium">
            {result ? `${result.strongSkills.length} Strong Areas Identified` : 'Not evaluated'}
          </p>
        </div>

        {/* Card 3: Skills to Improve */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">Skills to Improve</span>
            <AlertCircle className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-lg font-bold text-slate-900">
            {result ? result.developmentSkills.length : 0} Areas
          </div>
          <p className="text-[11px] text-amber-700 font-medium">
            {result && result.developmentSkills.length > 0
              ? `Priority: ${result.developmentSkills[0]}`
              : 'All rated 80%+'}
          </p>
        </div>

        {/* Card 4: Roadmap Progress */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">Roadmap Progress</span>
            <TrendingUp className="w-4 h-4 text-teal-600" />
          </div>
          <div className="text-lg font-bold text-slate-900 font-mono tabular-nums">
            {roadmapProgressPercent}% Done
          </div>
          <p className="text-[11px] text-slate-500">
            {completedSteps.length} of {roadmapSteps.length} Milestones Achieved
          </p>
        </div>
      </div>

      {/* Progress Bars & Roadmap Status Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Roadmap Progress Overview */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">
              Active Roadmap: {selectedCareer.name}
            </h3>
            <span className="text-xs font-mono font-semibold text-teal-700">
              {roadmapProgressPercent}%
            </span>
          </div>

          <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
            <div
              className="bg-teal-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${roadmapProgressPercent}%` }}
            />
          </div>

          <div className="space-y-2 pt-2">
            <div className="text-xs font-semibold text-slate-700">
              Completed Steps ({completedSteps.length}):
            </div>
            {completedSteps.length > 0 ? (
              <ul className="space-y-1.5 text-xs text-slate-600">
                {completedSteps.map((step) => (
                  <li key={step.id} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span className="font-medium text-slate-800">{step.title}</span>
                    <span className="text-slate-400">· {step.suggestedDuration}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-slate-500 italic">
                No steps marked completed yet. Open the Roadmap to mark your current achievements!
              </p>
            )}
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              {roadmapSteps.length - completedSteps.length} steps remaining
            </span>
            <button
              onClick={onViewMyRoadmap}
              className="text-xs font-semibold text-teal-700 hover:text-teal-900 cursor-pointer"
            >
              Open Full Interactive Roadmap →
            </button>
          </div>
        </div>

        {/* Skills Assessed & Growth Priorities */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">
              Competencies & Targeted Development
            </h3>
            <span className="text-xs text-slate-500">Rated out of 100%</span>
          </div>

          {result ? (
            <div className="space-y-2.5">
              {Object.entries(result.skillScores).map(([skill, score]) => (
                <div key={skill} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-slate-700">{skill}</span>
                    <span className="font-mono text-slate-900 tabular-nums font-semibold">
                      {score}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        score >= 80 ? 'bg-teal-600' : 'bg-slate-400'
                      }`}
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-xs text-slate-500 italic py-6 text-center">
              Complete the assessment to view your detailed competency ratings.
            </div>
          )}
        </div>
      </div>

      {/* FINAL GUIDANCE SECTION (Exact Final Decision Requirement) */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-md border border-slate-800">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-400">
            <Compass className="w-4 h-4" />
            <span>FINAL GUIDANCE & DECISION NOTICE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Your Career Compass Result
          </h3>
          <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed max-w-3xl">
            “Career Compass provides guidance based on your responses. It does not make the final career decision for you. Your final decision should consider your interests, abilities, education, opportunities and guidance from teachers, parents or qualified career counsellors.”
          </p>
        </div>

        <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700 text-xs text-slate-300 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
          <span>
            Remember: Career interests evolve as you gain more real-world projects and exposure. Use this dashboard as your personal compass to guide your semester goals, course choices, and internship applications.
          </span>
        </div>

        {/* 4 Required Functional Buttons */}
        <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center gap-3">
          <button
            onClick={onExploreCareersAgain}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-colors border border-slate-700 cursor-pointer"
          >
            Explore Careers Again
          </button>

          <button
            onClick={onReviewSkillGap}
            className="px-4 py-2.5 bg-teal-600 hover:bg-teal-500 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
          >
            Review Skill Gap
          </button>

          <button
            onClick={onViewMyRoadmap}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-colors border border-slate-700 cursor-pointer"
          >
            View My Roadmap
          </button>

          <button
            onClick={onStartAgain}
            className="px-4 py-2.5 bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 border border-rose-900/50 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ml-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Start Again</span>
          </button>
        </div>
      </div>
    </div>
  );
};
