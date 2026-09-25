import React from 'react';
import { CareerOption, RoadmapStep, StudentBackground } from '../types';
import { CAREERS_DATA } from '../data/careersData';
import {
  CheckCircle2,
  ArrowDown,
  ArrowLeft,
  FileText,
  BookOpen,
  ShieldCheck,
  Target,
  Clock,
  HelpCircle,
} from 'lucide-react';

interface PersonalizedRoadmapProps {
  selectedCareer: CareerOption;
  onSelectCareer: (career: CareerOption) => void;
  background: StudentBackground;
  roadmapSteps: RoadmapStep[];
  onToggleStepCompletion: (stepId: string) => void;
  onBackToExplorer?: () => void;
  onViewMyResults?: () => void;
  onGoToDashboard?: () => void;
}

export const PersonalizedRoadmap: React.FC<PersonalizedRoadmapProps> = ({
  selectedCareer,
  onSelectCareer,
  background,
  roadmapSteps,
  onToggleStepCompletion,
  onBackToExplorer,
  onViewMyResults,
  onGoToDashboard,
}) => {
  const completedCount = roadmapSteps.filter((s) => s.completed).length;
  const progressPercent = roadmapSteps.length > 0
    ? Math.round((completedCount / roadmapSteps.length) * 100)
    : 0;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
      {/* SECTION 1: HEADER */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
            <Target className="w-3.5 h-3.5 text-blue-600" />
            <span>PERSONALIZED LEARNING & EXPERIENCE PATHWAY</span>
          </div>

          {/* Quick Navigation Buttons */}
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
          My Personalized Roadmap
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          Generated based on your target career of <strong className="text-slate-900">{selectedCareer.name}</strong> and your identified priority skills. Follow this practical 9-step progression from your current degree ({background.currentCourse || 'B.Com'}) through verified project and internship experience.
        </p>

        {/* MANDATORY DISCLAIMER */}
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

      {/* SECTION 2: CAREER SELECTOR & PROGRESS OVERVIEW */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 block">
              Viewing Roadmap For:
            </label>
            <select
              value={selectedCareer.id}
              onChange={(e) => {
                const found = CAREERS_DATA.find((c) => c.id === e.target.value);
                if (found) onSelectCareer(found);
              }}
              className="px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              {CAREERS_DATA.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.industry.split('&')[0]})
                </option>
              ))}
            </select>
          </div>

          <div className="text-left sm:text-right space-y-1.5">
            <div className="text-xs text-slate-600 font-medium">
              Roadmap Progress: <span className="font-bold text-slate-900">{completedCount} of {roadmapSteps.length} Steps Completed</span>
            </div>
            <div className="w-full sm:w-56 bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-[11px] font-mono font-bold text-blue-700 block">
              {progressPercent}% Pathway Completed
            </span>
          </div>
        </div>
      </div>

      {/* SECTION 3: STEP-BY-STEP ROADMAP FLOW */}
      <div className="space-y-4">
        {roadmapSteps.map((step, index) => {
          const isLast = index === roadmapSteps.length - 1;

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
                  {/* Left: Step details & Checkbox */}
                  <div className="flex items-start gap-3.5">
                    {/* Checkbox / Mark complete */}
                    <button
                      type="button"
                      onClick={() => onToggleStepCompletion(step.id)}
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

                  {/* Right: Duration & Mark complete toggle */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{step.suggestedDuration}</span>
                    </span>

                    <button
                      type="button"
                      onClick={() => onToggleStepCompletion(step.id)}
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

                {/* Action Items */}
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

                {/* Recommended Resources */}
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

              {/* Visual Down Arrow Connector */}
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

      {/* SECTION 4: REQUIRED ACTION BUTTONS */}
      <div className="p-5 sm:p-6 bg-white border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
        <div className="text-xs text-slate-600 text-center sm:text-left">
          Review other career avenues or check your full multi-dimensional assessment breakdown.
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

          {onGoToDashboard && (
            <button
              type="button"
              onClick={onGoToDashboard}
              className="w-full sm:w-auto px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              <span>Progress Dashboard</span>
            </button>
          )}
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
