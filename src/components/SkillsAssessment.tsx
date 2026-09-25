import React from 'react';
import { SKILL_CATEGORIES } from '../data/questionsData';
import { ArrowLeft, ArrowRight, CheckCircle2, Info } from 'lucide-react';

interface SkillsAssessmentProps {
  skills: Record<string, number>;
  onRateSkill: (skillId: string, rating: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

export const SkillsAssessment: React.FC<SkillsAssessmentProps> = ({
  skills,
  onRateSkill,
  onPrev,
  onNext,
}) => {
  const answeredCount = Object.keys(skills).length;
  const isComplete = answeredCount === SKILL_CATEGORIES.length;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-5 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-teal-700 tracking-wide uppercase">
            STEP 3 OF 5 · SKILLS ASSESSMENT
          </span>
          <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
            {answeredCount} of {SKILL_CATEGORIES.length} Evaluated
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Rate Your Current Workplace Competencies
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          Estimate where you stand today on a scale of 1 (Novice) to 5 (Advanced). Identifying areas that need development is the first step toward building your skills.
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden mt-3">
          <div
            className="bg-slate-900 h-full transition-all duration-300"
            style={{ width: `${(answeredCount / SKILL_CATEGORIES.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Skills Grid */}
      <div className="space-y-5">
        {SKILL_CATEGORIES.map((skill, index) => {
          const currentRating = skills[skill.id] || 0;
          const currentAnchorText =
            currentRating > 0 ? skill.anchors[currentRating as 1 | 2 | 3 | 4 | 5] : '';

          return (
            <div
              key={skill.id}
              className="bg-white rounded-xl p-5 border border-slate-200 hover:border-slate-300 transition-shadow space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    {skill.name}
                  </h3>
                </div>

                {currentRating > 0 && (
                  <span className="text-xs font-semibold text-teal-700">
                    Rating: {currentRating} / 5 ({currentRating * 20}%)
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-600">
                {skill.description}
              </p>

              {/* 1 to 5 selector */}
              <div className="pt-2">
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((lvl) => {
                    const isSelected = currentRating === lvl;
                    const labels = ['1 (Novice)', '2 (Basic)', '3 (Competent)', '4 (Proficient)', '5 (Advanced)'];

                    return (
                      <button
                        type="button"
                        key={lvl}
                        onClick={() => onRateSkill(skill.id, lvl)}
                        className={`py-2 px-1 text-center rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <div className="text-sm font-bold">{lvl}</div>
                        <div className="text-[10px] hidden sm:block truncate opacity-85">
                          {labels[lvl - 1].split(' ')[1].replace(/[()]/g, '')}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Selected anchor description callout */}
                {currentAnchorText && (
                  <div className="mt-2.5 px-3 py-2 bg-slate-50 rounded-lg text-xs text-slate-600 border border-slate-200 flex items-start gap-2">
                    <Info className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{currentAnchorText}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-200">
        <button
          type="button"
          onClick={onPrev}
          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Interests</span>
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
          <span>Proceed to Career Preferences</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
