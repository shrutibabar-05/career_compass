import React, { useState } from 'react';
import { StudentBackground } from '../types';
import { EDUCATION_LEVELS, PRESET_SUBJECTS, PRESET_HOBBIES, PRESET_INTEREST_AREAS } from '../data/questionsData';
import { ArrowRight, UserCheck, Plus, X } from 'lucide-react';

interface BackgroundFormProps {
  background: StudentBackground;
  onChange: (updated: StudentBackground) => void;
  onNext: () => void;
  onLoadSample: () => void;
}

export const BackgroundForm: React.FC<BackgroundFormProps> = ({
  background,
  onChange,
  onNext,
  onLoadSample,
}) => {
  const [customSubject, setCustomSubject] = useState('');
  const [customHobby, setCustomHobby] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleFieldChange = (field: keyof StudentBackground, value: any) => {
    onChange({
      ...background,
      [field]: value,
    });
    if (errorMsg) setErrorMsg('');
  };

  const toggleArrayItem = (field: 'favouriteSubjects' | 'hobbies' | 'areasOfInterest', item: string) => {
    const list = background[field];
    if (list.includes(item)) {
      handleFieldChange(
        field,
        list.filter((x) => x !== item)
      );
    } else {
      handleFieldChange(field, [...list, item]);
    }
  };

  const addCustomSubject = () => {
    if (customSubject.trim() && !background.favouriteSubjects.includes(customSubject.trim())) {
      handleFieldChange('favouriteSubjects', [...background.favouriteSubjects, customSubject.trim()]);
      setCustomSubject('');
    }
  };

  const addCustomHobby = () => {
    if (customHobby.trim() && !background.hobbies.includes(customHobby.trim())) {
      handleFieldChange('hobbies', [...background.hobbies, customHobby.trim()]);
      setCustomHobby('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!background.name.trim()) {
      setErrorMsg('Please enter your name to proceed.');
      return;
    }
    if (!background.currentCourse.trim()) {
      setErrorMsg('Please specify your current course or stream.');
      return;
    }
    onNext();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Title & Introduction */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <span className="text-xs font-bold text-teal-700 tracking-wide uppercase">
            STEP 1 OF 5 · STUDENT BACKGROUND
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 mt-1 tracking-tight">
            Tell Us About Your Academic Background
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            This information allows Career Compass to personalize reference roadmaps and career examples.
          </p>
        </div>

        <button
          type="button"
          onClick={onLoadSample}
          className="self-start sm:self-auto px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors border border-slate-200 cursor-pointer shadow-2xs"
        >
          ⚡ Auto-fill Sample Data
        </button>
      </div>

      {errorMsg && (
        <div className="p-3 text-xs bg-rose-50 border border-rose-200 text-rose-700 rounded-lg">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Age */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2 space-y-1.5">
            <label className="block text-xs font-semibold text-slate-800">
              Student Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Shruti Sharma"
              value={background.name}
              onChange={(e) => handleFieldChange('name', e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-800">
              Age
            </label>
            <input
              type="number"
              min="14"
              max="45"
              placeholder="e.g. 19"
              value={background.age}
              onChange={(e) => handleFieldChange('age', e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800"
            />
          </div>
        </div>

        {/* Education Level & Course */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-800">
              Education Level
            </label>
            <select
              value={background.educationLevel}
              onChange={(e) => handleFieldChange('educationLevel', e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800"
            >
              {EDUCATION_LEVELS.map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-800">
              Current Course / Stream <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. B.Com (Accounts & Finance), BBA, BCA, B.Sc"
              value={background.currentCourse}
              onChange={(e) => handleFieldChange('currentCourse', e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800"
            />
          </div>
        </div>

        {/* Favourite Subjects */}
        <div className="space-y-2 bg-white p-4 rounded-xl border border-slate-200">
          <label className="block text-xs font-semibold text-slate-800">
            Favourite Subjects (Select or type custom)
          </label>
          <p className="text-[11px] text-slate-500">
            Choose the academic disciplines where you feel most engaged or excel.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {PRESET_SUBJECTS.map((subj) => {
              const isSelected = background.favouriteSubjects.includes(subj);
              return (
                <button
                  type="button"
                  key={subj}
                  onClick={() => toggleArrayItem('favouriteSubjects', subj)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors border cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {subj} {isSelected && '✓'}
                </button>
              );
            })}
          </div>

          {/* Add custom subject */}
          <div className="flex items-center gap-2 pt-2 max-w-sm">
            <input
              type="text"
              placeholder="Other subject..."
              value={customSubject}
              onChange={(e) => setCustomSubject(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addCustomSubject();
                }
              }}
              className="flex-1 px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-slate-700"
            />
            <button
              type="button"
              onClick={addCustomSubject}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              Add
            </button>
          </div>
        </div>

        {/* Hobbies */}
        <div className="space-y-2 bg-white p-4 rounded-xl border border-slate-200">
          <label className="block text-xs font-semibold text-slate-800">
            Hobbies & Extracurricular Activities
          </label>
          <p className="text-[11px] text-slate-500">
            What do you do naturally when you have free time? Hobbies reveal valuable intrinsic motivations.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {PRESET_HOBBIES.map((hobby) => {
              const isSelected = background.hobbies.includes(hobby);
              return (
                <button
                  type="button"
                  key={hobby}
                  onClick={() => toggleArrayItem('hobbies', hobby)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors border cursor-pointer ${
                    isSelected
                      ? 'bg-teal-700 text-white border-teal-700'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {hobby} {isSelected && '✓'}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 pt-2 max-w-sm">
            <input
              type="text"
              placeholder="Other hobby..."
              value={customHobby}
              onChange={(e) => setCustomHobby(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addCustomHobby();
                }
              }}
              className="flex-1 px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-slate-700"
            />
            <button
              type="button"
              onClick={addCustomHobby}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              Add
            </button>
          </div>
        </div>

        {/* Areas of Interest */}
        <div className="space-y-2 bg-white p-4 rounded-xl border border-slate-200">
          <label className="block text-xs font-semibold text-slate-800">
            Broad Areas of Career Interest
          </label>
          <p className="text-[11px] text-slate-500">
            Select domains that sound exciting or curious to explore.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {PRESET_INTEREST_AREAS.map((area) => {
              const isSelected = background.areasOfInterest.includes(area);
              return (
                <button
                  type="button"
                  key={area}
                  onClick={() => toggleArrayItem('areasOfInterest', area)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors border cursor-pointer ${
                    isSelected
                      ? 'bg-blue-800 text-white border-blue-800'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {area} {isSelected && '✓'}
                </button>
              );
            })}
          </div>
        </div>

        {/* Submit */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          <p className="text-xs text-slate-500">
            Next: 8-question Interest Survey
          </p>

          <button
            type="submit"
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Proceed to Interest Survey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};
