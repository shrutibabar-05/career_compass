import React from 'react';
import { CAREERS_DATA } from '../data/careersData';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CareerPreferencesProps {
  selectedPreferences: string[];
  onTogglePreference: (careerName: string) => void;
  onPrev: () => void;
  onCalculateResults: () => void;
}

export const CareerPreferences: React.FC<CareerPreferencesProps> = ({
  selectedPreferences,
  onTogglePreference,
  onPrev,
  onCalculateResults,
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-5 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-teal-700 tracking-wide uppercase">
            STEP 4 OF 5 · CAREER PREFERENCES
          </span>
          <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
            {selectedPreferences.length} Selected
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Which Career Domains Interest You?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          Select one or more areas you are curious to explore. You can also explore all 6 domains in the Career Explorer.
        </p>
      </div>

      {/* Career Preferences Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CAREERS_DATA.map((career) => {
          const isSelected = selectedPreferences.includes(career.name);

          return (
            <div
              key={career.id}
              onClick={() => onTogglePreference(career.name)}
              className={`p-5 rounded-xl border transition-all cursor-pointer text-left space-y-3 ${
                isSelected
                  ? 'bg-white border-slate-900 shadow-md ring-1 ring-slate-900'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[11px] font-semibold text-teal-700">
                    {career.industry}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5">
                    {career.name}
                  </h3>
                </div>

                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center border text-xs ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'border-slate-300 text-transparent'
                  }`}
                >
                  ✓
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {career.tagline}
              </p>

              <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5 text-[11px] text-slate-500">
                {career.importantSkills.slice(0, 3).map((sk) => (
                  <span key={sk} className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to action */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-200">
        <button
          type="button"
          onClick={onPrev}
          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Skills</span>
        </button>

        <button
          type="button"
          onClick={onCalculateResults}
          className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-md"
        >
          <span>Calculate My Career Compass Results</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
