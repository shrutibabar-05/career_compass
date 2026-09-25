import React from 'react';
import { INTEREST_STATEMENTS, LIKERT_OPTIONS } from '../data/questionsData';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface InterestSurveyProps {
  interests: Record<string, number>;
  onAnswer: (id: string, value: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

export const InterestSurvey: React.FC<InterestSurveyProps> = ({
  interests,
  onAnswer,
  onPrev,
  onNext,
}) => {
  const answeredCount = Object.keys(interests).length;
  const isComplete = answeredCount === INTEREST_STATEMENTS.length;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-5 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-teal-700 tracking-wide uppercase">
            STEP 2 OF 5 · INTEREST SURVEY
          </span>
          <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
            {answeredCount} of {INTEREST_STATEMENTS.length} Answered
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          How Much Do You Enjoy These Activities?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          Be honest! There are no right or wrong answers. Choose how much you genuinely enjoy each type of task or activity.
        </p>

        {/* Progress bar */}
        <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden mt-3">
          <div
            className="bg-slate-900 h-full transition-all duration-300"
            style={{ width: `${(answeredCount / INTEREST_STATEMENTS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Statements List */}
      <div className="space-y-4">
        {INTEREST_STATEMENTS.map((item, index) => {
          const currentVal = interests[item.id];

          return (
            <div
              key={item.id}
              className={`p-4 sm:p-5 rounded-xl border transition-all ${
                currentVal !== undefined
                  ? 'bg-white border-slate-300 shadow-xs'
                  : 'bg-white/80 border-slate-200'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                        {item.area} · {item.subTopic}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                      “{item.statement}”
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>

                {currentVal !== undefined && (
                  <span className="shrink-0 text-teal-600 text-xs font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Answered</span>
                  </span>
                )}
              </div>

              {/* 5-point Likert response buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
                {LIKERT_OPTIONS.map((opt) => {
                  const isSelected = currentVal === opt.value;
                  return (
                    <button
                      type="button"
                      key={opt.value}
                      onClick={() => onAnswer(item.id, opt.value)}
                      className={`px-2.5 py-2 rounded-lg text-xs font-medium text-center transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs font-semibold'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-200">
        <button
          type="button"
          onClick={onPrev}
          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Background</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className={`px-6 py-2.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm ${
            isComplete
              ? 'bg-slate-900 hover:bg-slate-800 text-white'
              : 'bg-slate-200 text-slate-500 hover:bg-slate-300'
          }`}
        >
          <span>Proceed to Skills Assessment</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
