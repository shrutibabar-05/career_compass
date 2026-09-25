import React from 'react';
import {
  Compass,
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  TrendingUp,
  Map,
  ClipboardList,
  Target,
  Layers,
  GraduationCap,
  ShieldCheck,
  User,
  BookOpen,
  Info,
} from 'lucide-react';
import { ActiveTab } from '../types';

interface AboutSectionProps {
  onReturnHome: () => void;
  onStartAssessment: () => void;
  onExploreCareers: () => void;
  onViewMethodology?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onReturnHome,
  onStartAssessment,
  onExploreCareers,
  onViewMethodology,
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
      {/* Return to Home Top Bar */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <button
          type="button"
          onClick={onReturnHome}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition-colors cursor-pointer border border-slate-200 shadow-2xs"
        >
          <ArrowLeft className="w-4 h-4 text-slate-600" />
          <span>Return to Home</span>
        </button>

        <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
          <Compass className="w-3.5 h-3.5 text-teal-600" />
          <span>Project Overview & Vision</span>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 1. ABOUT CAREER COMPASS */}
      {/* ============================================================== */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-5">
        <div className="space-y-2">
          <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
            Section 01 · Background & Purpose
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Career Compass
          </h1>
        </div>

        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
          Career Compass is a student-focused career readiness and skill-gap guidance system designed especially for Commerce students.
        </p>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Transitioning from academic coursework to professional careers often leaves students unsure of industry requirements. Career Compass provides clear, structured self-assessment and practical guidance tailored to commerce degrees like B.Com, BBA, BMS, and allied disciplines.
        </p>
      </section>

      {/* ============================================================== */}
      {/* 2. WHY WE CREATED IT */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="space-y-1.5">
          <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
            Section 02 · The Challenge
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Why We Created It
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Many commerce undergraduates face common hurdles during their college years:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Problem 1 */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-extrabold text-slate-900">
                Career Confusion
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Students often feel confused about career choices and diverse corporate paths available after graduation.
              </p>
            </div>
          </div>

          {/* Problem 2 */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-extrabold text-slate-900">
                Unclear Skill Requirements
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                They may know their interests but not the exact technical or workplace skills required for a career.
              </p>
            </div>
          </div>

          {/* Problem 3 */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-extrabold text-slate-900">
                The Preparation Gap
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                There can be a gap between their current academic skills and real-world corporate entry-level requirements.
              </p>
            </div>
          </div>

          {/* Problem 4 */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
              <Layers className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-extrabold text-slate-900">
                Scattered Career Information
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Career information is often scattered, generic, and difficult to compare side by side in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. OUR APPROACH */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="space-y-1.5">
          <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
            Section 03 · Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Approach
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            A continuous, transparent 5-phase student progression:
          </p>
        </div>

        {/* Process Flow */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          {/* Desktop Process Flow */}
          <div className="hidden lg:flex items-center justify-between text-center gap-2">
            <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1">
              <div className="text-[10px] font-extrabold text-slate-500 uppercase">Phase 1</div>
              <div className="text-xs font-extrabold text-slate-900">Understand Yourself</div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />

            <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1">
              <div className="text-[10px] font-extrabold text-slate-500 uppercase">Phase 2</div>
              <div className="text-xs font-extrabold text-slate-900">Explore Careers</div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />

            <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1">
              <div className="text-[10px] font-extrabold text-slate-500 uppercase">Phase 3</div>
              <div className="text-xs font-extrabold text-slate-900">Identify Skill Gaps</div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />

            <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1">
              <div className="text-[10px] font-extrabold text-slate-500 uppercase">Phase 4</div>
              <div className="text-xs font-extrabold text-slate-900">Build a Roadmap</div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />

            <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1">
              <div className="text-[10px] font-extrabold text-slate-500 uppercase">Phase 5</div>
              <div className="text-xs font-extrabold text-slate-900">Track Progress</div>
            </div>
          </div>

          {/* Mobile / Tablet Process Flow */}
          <div className="flex lg:hidden flex-col space-y-2">
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="w-6 h-6 rounded-lg bg-slate-900 text-white text-xs font-extrabold flex items-center justify-center shrink-0">1</span>
              <span className="text-xs font-extrabold text-slate-900">Understand Yourself</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="w-6 h-6 rounded-lg bg-slate-900 text-white text-xs font-extrabold flex items-center justify-center shrink-0">2</span>
              <span className="text-xs font-extrabold text-slate-900">Explore Careers</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="w-6 h-6 rounded-lg bg-slate-900 text-white text-xs font-extrabold flex items-center justify-center shrink-0">3</span>
              <span className="text-xs font-extrabold text-slate-900">Identify Skill Gaps</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="w-6 h-6 rounded-lg bg-slate-900 text-white text-xs font-extrabold flex items-center justify-center shrink-0">4</span>
              <span className="text-xs font-extrabold text-slate-900">Build a Roadmap</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="w-6 h-6 rounded-lg bg-slate-900 text-white text-xs font-extrabold flex items-center justify-center shrink-0">5</span>
              <span className="text-xs font-extrabold text-slate-900">Track Progress</span>
            </div>
          </div>

          {onViewMethodology && (
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs text-slate-500">
                Want to review the academic and system design framework?
              </span>
              <button
                type="button"
                onClick={onViewMethodology}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <span>View 6-Step Research Methodology</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. WHAT CAREER COMPASS PROVIDES (5 CLEAN CARDS) */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="space-y-1.5">
          <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
            Section 04 · Key Features
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            What Career Compass Provides
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Five comprehensive modules built to guide student career preparation:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1: Interest & Strength Assessment */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <ClipboardList className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900">
              Interest & Strength Assessment
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Calculates scores across 4 key interest areas (Analytical, People, Creative, Business) and self-evaluates 8 workplace competencies.
            </p>
          </div>

          {/* Card 2: Career Exploration */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900">
              Career Exploration
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Provides detailed profiles across 6 core domains: Data Analyst, Accountant, Banking & Finance, Marketing, Human Resources, and Entrepreneurship.
            </p>
          </div>

          {/* Card 3: Skill Gap Analysis */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900">
              Skill Gap Analysis
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Uses an objective formula: Skill Gap = Required Level − Current Level to clearly identify priority development areas.
            </p>
          </div>

          {/* Card 4: Personalized Career Roadmap */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
              <Map className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900">
              Personalized Career Roadmap
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Structures a sequenced 9-step learning pathway from college coursework through tools, mini-projects, resume building, and internships.
            </p>
          </div>

          {/* Card 5: Progress Tracking */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all shadow-xs space-y-3 md:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900">
              Progress Tracking
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Enables students to check off completed milestones, track real-time completion percentages, and print or save summary reports.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. PROJECT PURPOSE */}
      {/* ============================================================== */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-3">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-teal-700" />
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            5. Project Purpose
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          This is an educational student project/prototype created to demonstrate how digital guidance can help students make more informed career decisions.
        </p>
        <p className="text-xs text-slate-500 leading-relaxed">
          By presenting clear career options, honest benchmark expectations, and practical milestone roadmaps, the application aims to empower commerce students with actionable self-awareness during their degree studies.
        </p>
      </section>

      {/* ============================================================== */}
      {/* 6. IMPORTANT NOTE */}
      {/* ============================================================== */}
      <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-3">
        <div className="flex items-center gap-2 text-slate-900">
          <ShieldCheck className="w-5 h-5 text-teal-600" />
          <h3 className="text-base sm:text-lg font-extrabold">
            6. Important Note
          </h3>
        </div>
        <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed italic bg-white p-4 rounded-xl border border-slate-200">
          “Career Compass is a guidance and self-assessment prototype. It is not a professionally validated psychometric test and does not guarantee a particular career outcome. The final career decision should be made by the student after considering their interests, abilities, education, opportunities and professional guidance.”
        </blockquote>
      </section>

      {/* ============================================================== */}
      {/* 7. PROJECT INFORMATION */}
      {/* ============================================================== */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Info className="w-5 h-5 text-slate-900" />
          <h2 className="text-xl font-extrabold text-slate-900">
            7. Project Information
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
              Project Name
            </span>
            <div className="text-base font-extrabold text-slate-900">
              Career Compass
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
              Presenter
            </span>
            <div className="text-base font-extrabold text-slate-900">
              Shruti Babar
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
              Theme
            </span>
            <div className="text-base font-extrabold text-slate-900">
              Career Readiness & Skill-Gap Guidance System
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
              Audience
            </span>
            <div className="text-base font-extrabold text-slate-900">
              Commerce Students
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Action Buttons: Return Home & Start Assessment */}
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
