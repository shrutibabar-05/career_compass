import React from 'react';
import { ActiveTab } from '../types';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentTab: ActiveTab;
  onNavigateTab: (tab: ActiveTab) => void;
  completedSteps: Record<string, boolean>;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentTab,
  onNavigateTab,
  completedSteps,
}) => {
  const steps: { key: string; num: number; label: string; tab: ActiveTab }[] = [
    { key: 'background', num: 1, label: 'Background', tab: 'background' },
    { key: 'interests', num: 2, label: 'Interest Survey', tab: 'interests' },
    { key: 'skills', num: 3, label: 'Workplace Skills', tab: 'skills' },
    { key: 'preferences', num: 4, label: 'Career Preferences', tab: 'preferences' },
    { key: 'results', num: 5, label: 'My Report', tab: 'results' },
  ];

  const assessmentTabs = ['background', 'interests', 'skills', 'preferences', 'results'];
  if (!assessmentTabs.includes(currentTab)) {
    return null;
  }

  const activeIndex = steps.findIndex((s) => s.tab === currentTab);
  const currentStep = activeIndex >= 0 ? steps[activeIndex] : steps[0];
  const progressPercent = Math.round(((activeIndex + 1) / steps.length) * 100);

  return (
    <div className="bg-white border-b border-slate-200 py-3.5 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-2.5">
        {/* Step X of 5 Header */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-900 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
              Step {currentStep.num} of 5
            </span>
            <span className="font-bold text-slate-700 hidden sm:inline">
              {currentStep.label}
            </span>
          </div>

          <span className="text-xs font-mono font-bold text-teal-700">
            {progressPercent}% Complete
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
          <div
            className="bg-slate-900 h-full transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Step pills */}
        <div className="flex items-center justify-between gap-1 pt-1 overflow-x-auto no-scrollbar">
          {steps.map((step, idx) => {
            const isActive = currentTab === step.tab;
            const isCompleted = completedSteps[step.key];

            return (
              <button
                key={step.key}
                type="button"
                onClick={() => onNavigateTab(step.tab)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white font-bold shadow-2xs'
                    : isCompleted
                    ? 'text-teal-800 bg-teal-50 hover:bg-teal-100 font-semibold'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100 font-medium'
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isActive
                      ? 'bg-teal-400 text-slate-950'
                      : isCompleted
                      ? 'bg-teal-700 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {isCompleted && !isActive ? <Check className="w-2.5 h-2.5" /> : step.num}
                </span>
                <span className="hidden md:inline">{step.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

