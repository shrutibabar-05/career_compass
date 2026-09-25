import React, { useState, useEffect } from 'react';
import { CareerOption, ActiveTab } from '../types';
import { CAREERS_DATA } from '../data/careersData';
import {
  Briefcase,
  ArrowRight,
  ArrowLeft,
  GraduationCap,
  Wrench,
  Lightbulb,
  Info,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Target,
  Sparkles,
  Layers,
  ChevronRight,
} from 'lucide-react';

interface CareerExplorerProps {
  selectedCareer: CareerOption;
  onSelectCareer: (career: CareerOption) => void;
  onGoToGapAnalysis: (career: CareerOption) => void;
  onGoToRoadmap: (career: CareerOption) => void;
  setActiveTab: (tab: ActiveTab) => void;
}

// Exactly the 6 target careers in specified order
const TARGET_CAREER_IDS = [
  'data-analyst',
  'accountant',
  'banking-finance',
  'marketing-specialist',
  'human-resources',
  'entrepreneurship',
];

export const CareerExplorer: React.FC<CareerExplorerProps> = ({
  selectedCareer,
  onSelectCareer,
  onGoToGapAnalysis,
  onGoToRoadmap,
}) => {
  // Filter exactly the 6 target careers
  const explorerCareers = TARGET_CAREER_IDS.map(
    (id) => CAREERS_DATA.find((c) => c.id === id)!
  ).filter(Boolean);

  // Active view: 'grid' (all 6 cards) or 'detail' (detailed single career view)
  const [viewMode, setViewMode] = useState<'grid' | 'detail'>('grid');
  const [activeCareerId, setActiveCareerId] = useState<string>(
    selectedCareer?.id && TARGET_CAREER_IDS.includes(selectedCareer.id)
      ? selectedCareer.id
      : 'data-analyst'
  );

  useEffect(() => {
    if (selectedCareer?.id && TARGET_CAREER_IDS.includes(selectedCareer.id)) {
      setActiveCareerId(selectedCareer.id);
    }
  }, [selectedCareer?.id]);

  const currentCareer =
    explorerCareers.find((c) => c.id === activeCareerId) || explorerCareers[0];

  const handleExploreCareer = (career: CareerOption) => {
    setActiveCareerId(career.id);
    onSelectCareer(career);
    setViewMode('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToGrid = () => {
    setViewMode('grid');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>CAREER EXPLORER · 6 CORE DOMAINS</span>
          </div>

          {/* Quick View Mode Toggle */}
          <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-medium">
            <button
              onClick={handleBackToGrid}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All 6 Career Cards
            </button>
            <button
              onClick={() => setViewMode('detail')}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                viewMode === 'detail'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Detailed View ({currentCareer.name})
            </button>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Explore Career Areas Worth Exploring
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          Review core foundational career paths, realistic day-to-day typical work, entry skill requirements, and practical beginner project ideas to help you discover what resonates with your interests and abilities.
        </p>

        {/* Guidance Reference Notice Banner */}
        <div className="p-3.5 sm:p-4 bg-teal-50/70 border border-teal-200 rounded-xl flex items-start gap-3">
          <Info className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
          <div className="text-xs text-teal-950 space-y-0.5">
            <span className="font-semibold block">Guidance & Reference Information:</span>
            <p className="text-teal-900/90 leading-relaxed">
              All career descriptions, skill benchmarks, and sample educational trajectories in this explorer are provided strictly as exploratory reference guidance. No career is guaranteed or labeled as perfect for any student. The final decision remains completely with you.
            </p>
          </div>
        </div>
      </div>

      {/* VIEW MODE 1: 6 CAREER CARDS GRID */}
      {viewMode === 'grid' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {explorerCareers.map((career) => (
              <div
                key={career.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group"
              >
                {/* Card Top / Header */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Status & Industry badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-teal-50 text-teal-800 border border-teal-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                      Career area worth exploring
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">
                      {career.industry.split('&')[0]}
                    </span>
                  </div>

                  {/* Career Name & Short Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-900 transition-colors">
                      {career.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {career.shortDescription || career.tagline}
                    </p>
                  </div>

                  {/* Important Skills */}
                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-800 flex items-center gap-1.5">
                        <Wrench className="w-3.5 h-3.5 text-teal-600" />
                        Important Skills
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wide">
                        Reference
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {career.importantSkills.map((sk) => (
                        <span
                          key={sk}
                          className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[11px] font-medium border border-slate-200"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Typical Work */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <span className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-slate-600" />
                      Typical Work
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      {career.typicalWork || career.involves.slice(0, 140) + '...'}
                    </p>
                  </div>

                  {/* Skills You May Need to Develop */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <span className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                      Skills You May Need to Develop
                    </span>
                    <ul className="space-y-1.5">
                      {career.skillsToDevelop.slice(0, 3).map((item, idx) => (
                        <li
                          key={idx}
                          className="text-[11px] text-slate-600 flex items-start gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-5 sm:p-6 pt-0 flex items-center gap-2">
                  <button
                    onClick={() => handleExploreCareer(career)}
                    className="flex-1 py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs group-hover:bg-teal-700"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                  <button
                    onClick={() => onGoToGapAnalysis(career)}
                    className="py-2.5 px-3 bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-200 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    title="Check My Skill Gap for this career"
                  >
                    <Target className="w-3.5 h-3.5 text-teal-600" />
                    <span>Check Skill Gap</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Prominent Final Decision Notice Box */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 sm:p-6 text-amber-950 space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0" />
              <h4 className="text-sm font-bold text-amber-900">
                Final Decision Notice & Counselor Guidance
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-amber-950/90 leading-relaxed">
              Career Compass provides guidance based on your responses. It does not make the final career decision for you. Your final decision should consider your interests, abilities, education, opportunities and guidance from teachers, parents or qualified career counsellors.
            </p>
          </div>
        </div>
      )}

      {/* VIEW MODE 2: DETAILED CAREER VIEW */}
      {viewMode === 'detail' && (
        <div className="space-y-6">
          {/* Top Navigation & Career Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200">
            <button
              onClick={handleBackToGrid}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-2xs self-start"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All 6 Career Cards</span>
            </button>

            {/* Quick Switcher Between the 6 Careers */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
              <span className="text-[11px] font-semibold text-slate-500 whitespace-nowrap mr-1">
                Switch:
              </span>
              {explorerCareers.map((c) => {
                const isSelected = c.id === currentCareer.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => {
                      setActiveCareerId(c.id);
                      onSelectCareer(c);
                    }}
                    className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer border ${
                      isSelected
                        ? 'bg-slate-900 text-white border-slate-900 font-semibold shadow-xs'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {c.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Detailed Card Container */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-8 shadow-xs">
            {/* 1. CAREER OVERVIEW */}
            <div className="border-b border-slate-100 pb-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                      Career area worth exploring
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {currentCareer.industry}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {currentCareer.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                    {currentCareer.shortDescription || currentCareer.tagline}
                  </p>
                </div>

                {/* Primary Action Button directly in overview header */}
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <button
                    onClick={() => onGoToGapAnalysis(currentCareer)}
                    className="px-4 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Target className="w-3.5 h-3.5" />
                    <span>Check My Skill Gap</span>
                  </button>
                  <button
                    onClick={() => onGoToRoadmap(currentCareer)}
                    className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    View Roadmap
                  </button>
                </div>
              </div>

              {/* Reference Label Notice */}
              <div className="text-[11px] text-slate-500 bg-slate-50 px-3.5 py-2 rounded-lg border border-slate-200 flex items-center gap-2">
                <Info className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>
                  <strong>Reference Guidance:</strong> Information below illustrates typical entry requirements and projects for exploratory research.
                </span>
              </div>
            </div>

            {/* 2. WHAT THIS CAREER INVOLVES & TYPICAL WORK */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Briefcase className="w-4 h-4 text-slate-700" />
                <span>What This Career Involves</span>
              </div>

              <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 space-y-3">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {currentCareer.involves}
                </p>

                {currentCareer.typicalWork && (
                  <div className="pt-3 border-t border-slate-200/80">
                    <span className="text-xs font-bold text-slate-900 block mb-1">
                      Day-to-Day Typical Work:
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {currentCareer.typicalWork}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* 3. IMPORTANT SKILLS & SKILLS TO DEVELOP */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Important Skills */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Wrench className="w-4 h-4 text-teal-600" />
                    <span>Important Skills</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Core Requirements</span>
                </div>
                <div className="space-y-2">
                  {currentCareer.importantSkills.map((sk) => {
                    const benchmark = currentCareer.benchmarks.find((b) => b.skill === sk);
                    return (
                      <div
                        key={sk}
                        className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                          <span className="font-semibold text-slate-900">{sk}</span>
                        </div>
                        {benchmark && (
                          <span className="text-[11px] px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200 font-medium shrink-0">
                            {benchmark.importance}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Skills You May Need to Develop */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span>Skills You May Need to Develop</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Growth Focus</span>
                </div>
                <div className="space-y-2">
                  {currentCareer.skillsToDevelop.map((sk, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-3 rounded-xl border border-slate-200 flex items-start gap-2.5 text-xs text-slate-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span className="leading-snug">{sk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. EXAMPLE EDUCATIONAL PATH */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <GraduationCap className="w-4 h-4 text-slate-700" />
                <span>Example Educational Path</span>
              </div>

              <div className="p-4 sm:p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <div className="text-xs sm:text-sm font-semibold text-slate-900 flex flex-wrap items-center gap-2">
                  {currentCareer.exampleEduPath.split('→').map((step, idx, arr) => (
                    <React.Fragment key={idx}>
                      <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-800 shadow-2xs font-medium">
                        {step.trim()}
                      </span>
                      {idx < arr.length - 1 && (
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <p className="text-[11px] text-slate-500 italic leading-relaxed pt-1">
                  * Note: This is an illustrative reference trajectory. Students from diverse educational backgrounds can transition into this field through focused skill development, certifications, and portfolio projects.
                </p>
              </div>
            </div>

            {/* 5. SUGGESTED BEGINNER PROJECT IDEA */}
            <div className="bg-teal-50/60 rounded-xl p-5 sm:p-6 border border-teal-200 space-y-4">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-teal-700 shrink-0" />
                <div>
                  <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wide block">
                    Beginner Project Idea
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-teal-950">
                    {currentCareer.suggestedBeginnerProject.title}
                  </h4>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-teal-950/85 leading-relaxed">
                {currentCareer.suggestedBeginnerProject.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-teal-200/70 text-xs">
                <div>
                  <span className="font-semibold text-teal-950">Recommended Tools:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {currentCareer.suggestedBeginnerProject.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="bg-white px-2.5 py-1 rounded-md text-teal-900 border border-teal-200 font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-semibold text-teal-950">Tangible Portfolio Deliverable:</span>
                  <p className="mt-1 text-teal-900/90 leading-relaxed font-medium">
                    {currentCareer.suggestedBeginnerProject.deliverable}
                  </p>
                </div>
              </div>
            </div>

            {/* 6. SKILL REQUIREMENTS (GUIDANCE / REFERENCE INFORMATION) */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Layers className="w-4 h-4 text-slate-700" />
                  <span>Skill Requirements (Reference Benchmarks)</span>
                </div>
                <span className="text-[11px] text-teal-700 font-semibold">
                  Reference Guidance · Not Rigid Criteria
                </span>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                    <tr>
                      <th className="py-2.5 px-3.5">Skill Area</th>
                      <th className="py-2.5 px-3.5">Importance</th>
                      <th className="py-2.5 px-3.5">Reference Benchmark</th>
                      <th className="py-2.5 px-3.5">What Entry Roles Look For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {currentCareer.benchmarks.map((bm) => (
                      <tr key={bm.skill} className="hover:bg-slate-50/50">
                        <td className="py-2.5 px-3.5 font-bold text-slate-900 whitespace-nowrap">
                          {bm.skill}
                        </td>
                        <td className="py-2.5 px-3.5 whitespace-nowrap">
                          <span
                            className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                              bm.importance === 'Essential'
                                ? 'bg-teal-50 text-teal-800 border border-teal-200'
                                : 'bg-slate-100 text-slate-700 border border-slate-200'
                            }`}
                          >
                            {bm.importance}
                          </span>
                        </td>
                        <td className="py-2.5 px-3.5 font-semibold text-slate-700 whitespace-nowrap">
                          {bm.requiredPercent}% Benchmark
                        </td>
                        <td className="py-2.5 px-3.5 text-slate-600 leading-snug">
                          {bm.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[11px] text-slate-500 italic">
                * Skill requirements reflect reference proficiency targets observed in entry-level hiring rubrics, intended to guide student preparation.
              </p>
            </div>

            {/* Bottom Actions & "Check My Skill Gap" Button */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-600 text-center sm:text-left">
                Curious to see where your current skills stand compared to this role?
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={handleBackToGrid}
                  className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  Back to All 6 Cards
                </button>
                <button
                  onClick={() => onGoToGapAnalysis(currentCareer)}
                  className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
                >
                  <Target className="w-3.5 h-3.5" />
                  <span>Check My Skill Gap</span>
                </button>
              </div>
            </div>
          </div>

          {/* Prominent Final Decision Notice Box */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 sm:p-6 text-amber-950 space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0" />
              <h4 className="text-sm font-bold text-amber-900">
                Final Decision Notice & Student Ownership
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-amber-950/90 leading-relaxed">
              Career Compass provides guidance based on your responses. It does not make the final career decision for you. Your final decision should consider your interests, abilities, education, opportunities and guidance from teachers, parents or qualified career counsellors.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
