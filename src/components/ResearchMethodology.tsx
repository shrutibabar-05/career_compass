import React from 'react';
import {
  Compass,
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  HelpCircle,
  ClipboardList,
  BarChart3,
  Search,
  Target,
  Map,
  ShieldCheck,
  GraduationCap,
  Info,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import { ActiveTab } from '../types';

interface ResearchMethodologyProps {
  onReturnHome: () => void;
  onStartAssessment: () => void;
  onExploreCareers: () => void;
  onViewAbout: () => void;
}

export const ResearchMethodology: React.FC<ResearchMethodologyProps> = ({
  onReturnHome,
  onStartAssessment,
  onExploreCareers,
  onViewAbout,
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
      {/* Top Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <button
          type="button"
          onClick={onReturnHome}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition-colors cursor-pointer border border-slate-200 shadow-2xs"
        >
          <ArrowLeft className="w-4 h-4 text-slate-600" />
          <span>Return to Home</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onViewAbout}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 hover:bg-slate-50 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            About Project
          </button>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 bg-teal-50 px-3 py-1.5 rounded-full border border-teal-200">
            <Compass className="w-3.5 h-3.5 text-teal-600" />
            <span>Academic Methodology</span>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 1. HEADER & INTRODUCTION */}
      {/* ============================================================== */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-4">
        <div className="space-y-2">
          <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
            Project Framework & System Architecture
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Research Methodology
          </h1>
        </div>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
          The Career Compass framework follows a structured, transparent 6-step methodology engineered to bridge academic learning with professional workplace expectations for undergraduate students.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-teal-600" />
            <span>Student-Focused Prototype</span>
          </div>
          <span className="text-slate-300">•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Objective Transparent Formulas</span>
          </div>
          <span className="text-slate-300">•</span>
          <div className="flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-slate-600" />
            <span>Step-by-Step Guidance</span>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. SIMPLE VISUAL FLOW BANNER */}
      {/* ============================================================== */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Methodology Architecture Flow
          </span>
          <h2 className="text-lg font-extrabold text-slate-900">
            System Workflow Overview
          </h2>
        </div>

        {/* Desktop Visual Flow: PROBLEM → STUDENT INPUT → ANALYSIS → CAREER EXPLORATION → SKILL GAP → ROADMAP */}
        <div className="hidden lg:flex items-center justify-between gap-1 text-center py-3">
          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase">Step 1</span>
            <div className="text-xs font-extrabold text-slate-900">PROBLEM</div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />

          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase">Step 2</span>
            <div className="text-xs font-extrabold text-slate-900">STUDENT INPUT</div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />

          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase">Step 3</span>
            <div className="text-xs font-extrabold text-slate-900">ANALYSIS</div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />

          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase">Step 4</span>
            <div className="text-xs font-extrabold text-slate-900 leading-tight">CAREER EXPLORATION</div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />

          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase">Step 5</span>
            <div className="text-xs font-extrabold text-slate-900">SKILL GAP</div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />

          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase">Step 6</span>
            <div className="text-xs font-extrabold text-slate-900">ROADMAP</div>
          </div>
        </div>

        {/* Tablet & Mobile Stacked Flow */}
        <div className="flex lg:hidden flex-col items-center space-y-2 py-2">
          <div className="flex items-center gap-3 w-56 justify-center bg-slate-50 py-2 px-3 rounded-xl border border-slate-200">
            <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-extrabold text-[11px] flex items-center justify-center">1</span>
            <span className="text-xs font-extrabold text-slate-900 tracking-wider">PROBLEM</span>
          </div>
          <ArrowDown className="w-4 h-4 text-slate-400" />

          <div className="flex items-center gap-3 w-56 justify-center bg-slate-50 py-2 px-3 rounded-xl border border-slate-200">
            <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-extrabold text-[11px] flex items-center justify-center">2</span>
            <span className="text-xs font-extrabold text-slate-900 tracking-wider">STUDENT INPUT</span>
          </div>
          <ArrowDown className="w-4 h-4 text-slate-400" />

          <div className="flex items-center gap-3 w-56 justify-center bg-slate-50 py-2 px-3 rounded-xl border border-slate-200">
            <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-extrabold text-[11px] flex items-center justify-center">3</span>
            <span className="text-xs font-extrabold text-slate-900 tracking-wider">ANALYSIS</span>
          </div>
          <ArrowDown className="w-4 h-4 text-slate-400" />

          <div className="flex items-center gap-3 w-56 justify-center bg-slate-50 py-2 px-3 rounded-xl border border-slate-200">
            <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-extrabold text-[11px] flex items-center justify-center">4</span>
            <span className="text-xs font-extrabold text-slate-900 tracking-wider text-center">CAREER EXPLORATION</span>
          </div>
          <ArrowDown className="w-4 h-4 text-slate-400" />

          <div className="flex items-center gap-3 w-56 justify-center bg-slate-50 py-2 px-3 rounded-xl border border-slate-200">
            <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-extrabold text-[11px] flex items-center justify-center">5</span>
            <span className="text-xs font-extrabold text-slate-900 tracking-wider">SKILL GAP</span>
          </div>
          <ArrowDown className="w-4 h-4 text-slate-400" />

          <div className="flex items-center gap-3 w-56 justify-center bg-slate-50 py-2 px-3 rounded-xl border border-slate-200">
            <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-extrabold text-[11px] flex items-center justify-center">6</span>
            <span className="text-xs font-extrabold text-slate-900 tracking-wider">ROADMAP</span>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. 6-STEP PROCESS DETAILS */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="space-y-1.5">
          <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
            Detailed Step-by-Step Breakdown
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            The 6-Step Research Methodology
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Each phase addresses a specific need in the student career guidance lifecycle:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Step 1: Identify the Problem */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all shadow-xs space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
                  01
                </span>
                <span className="text-[11px] font-bold text-rose-800 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200 uppercase tracking-wider">
                  Phase 1 · Problem
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                1. Identify the Problem
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Understand common career confusion and the difficulty students face in identifying required career skills.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
              <HelpCircle className="w-3.5 h-3.5 text-rose-600" />
              <span>Addresses uncertainty in post-graduation paths</span>
            </div>
          </div>

          {/* Step 2: Collect Student Inputs */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all shadow-xs space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
                  02
                </span>
                <span className="text-[11px] font-bold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 uppercase tracking-wider">
                  Phase 2 · Input
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                2. Collect Student Inputs
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Use the website assessment to collect student responses about interests, strengths, skills and career preferences.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
              <ClipboardList className="w-3.5 h-3.5 text-blue-600" />
              <span>Background, 8 interests, 8 self-assessed skills</span>
            </div>
          </div>

          {/* Step 3: Analyse the Responses */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all shadow-xs space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
                  03
                </span>
                <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200 uppercase tracking-wider">
                  Phase 3 · Analysis
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                3. Analyse the Responses
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Convert the student's responses into simple interest and skill profiles.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
              <BarChart3 className="w-3.5 h-3.5 text-teal-600" />
              <span>Categorization into Analytical, People, Creative & Business</span>
            </div>
          </div>

          {/* Step 4: Explore Career Options */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all shadow-xs space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
                  04
                </span>
                <span className="text-[11px] font-bold text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200 uppercase tracking-wider">
                  Phase 4 · Exploration
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                4. Explore Career Options
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Compare the student's profile with the skills and requirements associated with different career areas.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
              <Search className="w-3.5 h-3.5 text-indigo-600" />
              <span>Exploration across 6 corporate career options</span>
            </div>
          </div>

          {/* Step 5: Identify Skill Gaps */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all shadow-xs space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
                  05
                </span>
                <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 uppercase tracking-wider">
                  Phase 5 · Skill Gap
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                5. Identify Skill Gaps
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Compare the student's current skill level with the reference skill requirements for the selected career.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
              <Target className="w-3.5 h-3.5 text-amber-600" />
              <span>Skill Gap = Required Level − Current Level</span>
            </div>
          </div>

          {/* Step 6: Create a Career Roadmap */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all shadow-xs space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
                  06
                </span>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 uppercase tracking-wider">
                  Phase 6 · Roadmap
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                6. Create a Career Roadmap
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Generate a step-by-step learning and development roadmap based on the identified priority skills.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
              <Map className="w-3.5 h-3.5 text-emerald-600" />
              <span>Actionable 9-step timeline from degree to career</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. IMPORTANT RESEARCH NOTE */}
      {/* ============================================================== */}
      <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-3">
        <div className="flex items-center gap-2 text-slate-900">
          <ShieldCheck className="w-5 h-5 text-teal-600" />
          <h3 className="text-base sm:text-lg font-extrabold">
            Important Research Note
          </h3>
        </div>
        <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed italic bg-white p-4 rounded-xl border border-slate-200">
          “The Career Compass prototype demonstrates a digital approach to career-readiness guidance. Any example career requirements or percentages shown in the prototype are reference values for demonstration and should not be presented as scientifically validated benchmarks.”
        </blockquote>
        <p className="text-xs text-slate-500 leading-relaxed">
          This system is built as an educational demonstration of how structured digital workflows can assist students in self-reflection and proactive career planning. It does not replace professional guidance counsellors or psychometric testing.
        </p>
      </section>

      {/* ============================================================== */}
      {/* 5. SUMMARY FOR PRESENTATION & JUDGES */}
      {/* ============================================================== */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Info className="w-5 h-5 text-slate-900" />
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
            Presentation Highlights for Judges
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
              Transparent Logic
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              No black-box algorithms or opaque scoring. Every calculation is clear, explainable, and reproducible.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
              Actionable Output
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Instead of stopping at generic labels, it provides concrete skill benchmarks, project ideas, and learning steps.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
              Student-Centered Design
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tailored specifically to commerce disciplines (B.Com, BBA) with printable PDF reports and milestone checklists.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Action Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <button
          type="button"
          onClick={onReturnHome}
          className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Home</span>
        </button>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={onExploreCareers}
            className="w-full sm:w-auto px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Careers</span>
          </button>

          <button
            type="button"
            onClick={onStartAssessment}
            className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <span>Start Assessment</span>
            <ArrowRight className="w-4 h-4 text-teal-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
