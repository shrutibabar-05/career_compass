import React from 'react';
import {
  Compass,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  ShieldCheck,
  ClipboardList,
  Search,
  Scale,
  Milestone,
  CheckSquare,
  Sparkles,
  Info,
  Lightbulb,
  TrendingUp,
  Map,
} from 'lucide-react';
import { ActiveTab } from '../types';

interface HomeSectionProps {
  onStartAssessment: () => void;
  onExploreDirectly: () => void;
  onLoadSampleProfile: () => void;
  hasStartedAssessment: boolean;
  hasCompletedAssessment: boolean;
  setActiveTab: (tab: ActiveTab) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  onStartAssessment,
  onExploreDirectly,
  onLoadSampleProfile,
  hasStartedAssessment,
  hasCompletedAssessment,
  setActiveTab,
}) => {
  return (
    <div className="space-y-16 py-8 sm:py-12 max-w-5xl mx-auto px-4 sm:px-6 font-sans">
      {/* ============================================================== */}
      {/* 1. HERO SECTION */}
      {/* ============================================================== */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xs space-y-6 text-center sm:text-left relative overflow-hidden">
        {/* Subtle decorative background accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-50/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="relative z-10 space-y-5 max-w-3xl">
          {/* Project Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            <span>COLLEGE CAREER-COUNSELLING PROJECT · PRESENTER: SHRUTI BABAR</span>
          </div>

          {/* Exact Hero Header */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              CAREER COMPASS
            </h1>

            {/* Exact Tagline */}
            <p className="text-lg sm:text-2xl font-bold text-blue-700 tracking-tight leading-snug">
              “Know Yourself → Find Your Gap → Build Your Skills → Reach Your Career”
            </p>
          </div>

          {/* Exact Supporting Text */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            “Explore your interests, understand your skills, discover career areas and build a practical roadmap.”
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3 justify-center sm:justify-start">
            {/* Prominent "Start Your Assessment" button */}
            <button
              type="button"
              onClick={onStartAssessment}
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition-all shadow-sm flex items-center gap-2 cursor-pointer hover:shadow-md"
            >
              <span>
                {hasCompletedAssessment
                  ? 'Review Assessment Results'
                  : hasStartedAssessment
                  ? 'Continue Your Assessment'
                  : 'Start Your Assessment'}
              </span>
              <ArrowRight className="w-4 h-4 text-teal-400" />
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('demo');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-3.5 bg-teal-50 hover:bg-teal-100 text-teal-950 font-bold text-sm rounded-xl transition-all border border-teal-300 cursor-pointer shadow-2xs flex items-center gap-2 hover:shadow-xs"
            >
              <Compass className="w-4 h-4 text-teal-600" />
              <span>View Project Demo</span>
            </button>

            <button
              type="button"
              onClick={onExploreDirectly}
              className="px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm rounded-xl transition-colors border border-slate-300 cursor-pointer shadow-2xs"
            >
              Explore Careers
            </button>

            <button
              type="button"
              onClick={onLoadSampleProfile}
              className="px-4 py-3.5 bg-teal-50/70 hover:bg-teal-100 text-teal-900 font-semibold text-xs rounded-xl transition-colors border border-teal-200 cursor-pointer"
              title="Loads sample B.Com 2nd year student data to review full flow instantly"
            >
              ⚡ Load Sample Profile
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition-colors border border-slate-200 cursor-pointer"
            >
              About Project
            </button>
          </div>

          {/* Non-prescriptive Guidance note */}
          <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 justify-center sm:justify-start">
            <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
            <span>Guiding tool only · Final career decisions always remain with you.</span>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. HOW CAREER COMPASS WORKS (5 STAGES & VISUAL FLOW) */}
      {/* ============================================================== */}
      <section className="space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>5-STAGE GUIDANCE JOURNEY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            How Career Compass Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            “Career Compass guides a student through a simple journey from understanding themselves to planning their career development.”
          </p>
        </div>

        {/* Visual Flow Banner (ASSESS ↓ EXPLORE ↓ COMPARE ↓ PLAN ↓ TRACK) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center mb-4">
            Guidance Progression Flow
          </div>

          {/* Desktop & Tablet Horizontal Flow */}
          <div className="hidden md:flex items-center justify-between max-w-4xl mx-auto px-4">
            <div className="flex flex-col items-center">
              <span className="w-10 h-10 rounded-xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                01
              </span>
              <span className="mt-2 text-xs font-extrabold text-slate-900 tracking-wider">
                ASSESS
              </span>
            </div>

            <div className="flex-1 flex items-center justify-center text-slate-300 px-2">
              <span className="h-0.5 w-full bg-slate-200 mx-2" />
              <ArrowRight className="w-5 h-5 text-slate-400 shrink-0" />
            </div>

            <div className="flex flex-col items-center">
              <span className="w-10 h-10 rounded-xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                02
              </span>
              <span className="mt-2 text-xs font-extrabold text-slate-900 tracking-wider">
                EXPLORE
              </span>
            </div>

            <div className="flex-1 flex items-center justify-center text-slate-300 px-2">
              <span className="h-0.5 w-full bg-slate-200 mx-2" />
              <ArrowRight className="w-5 h-5 text-slate-400 shrink-0" />
            </div>

            <div className="flex flex-col items-center">
              <span className="w-10 h-10 rounded-xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                03
              </span>
              <span className="mt-2 text-xs font-extrabold text-slate-900 tracking-wider">
                COMPARE
              </span>
            </div>

            <div className="flex-1 flex items-center justify-center text-slate-300 px-2">
              <span className="h-0.5 w-full bg-slate-200 mx-2" />
              <ArrowRight className="w-5 h-5 text-slate-400 shrink-0" />
            </div>

            <div className="flex flex-col items-center">
              <span className="w-10 h-10 rounded-xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                04
              </span>
              <span className="mt-2 text-xs font-extrabold text-slate-900 tracking-wider">
                PLAN
              </span>
            </div>

            <div className="flex-1 flex items-center justify-center text-slate-300 px-2">
              <span className="h-0.5 w-full bg-slate-200 mx-2" />
              <ArrowRight className="w-5 h-5 text-slate-400 shrink-0" />
            </div>

            <div className="flex flex-col items-center">
              <span className="w-10 h-10 rounded-xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                05
              </span>
              <span className="mt-2 text-xs font-extrabold text-slate-900 tracking-wider">
                TRACK
              </span>
            </div>
          </div>

          {/* Mobile Vertical Flow (ASSESS ↓ EXPLORE ↓ COMPARE ↓ PLAN ↓ TRACK) */}
          <div className="flex md:hidden flex-col items-center space-y-2 py-1">
            <div className="flex items-center gap-3 w-48 justify-center bg-slate-50 py-1.5 px-3 rounded-xl border border-slate-200">
              <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-extrabold text-[11px] flex items-center justify-center">01</span>
              <span className="text-xs font-extrabold text-slate-900 tracking-wider">ASSESS</span>
            </div>
            <ArrowDown className="w-4 h-4 text-slate-400" />

            <div className="flex items-center gap-3 w-48 justify-center bg-slate-50 py-1.5 px-3 rounded-xl border border-slate-200">
              <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-extrabold text-[11px] flex items-center justify-center">02</span>
              <span className="text-xs font-extrabold text-slate-900 tracking-wider">EXPLORE</span>
            </div>
            <ArrowDown className="w-4 h-4 text-slate-400" />

            <div className="flex items-center gap-3 w-48 justify-center bg-slate-50 py-1.5 px-3 rounded-xl border border-slate-200">
              <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-extrabold text-[11px] flex items-center justify-center">03</span>
              <span className="text-xs font-extrabold text-slate-900 tracking-wider">COMPARE</span>
            </div>
            <ArrowDown className="w-4 h-4 text-slate-400" />

            <div className="flex items-center gap-3 w-48 justify-center bg-slate-50 py-1.5 px-3 rounded-xl border border-slate-200">
              <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-extrabold text-[11px] flex items-center justify-center">04</span>
              <span className="text-xs font-extrabold text-slate-900 tracking-wider">PLAN</span>
            </div>
            <ArrowDown className="w-4 h-4 text-slate-400" />

            <div className="flex items-center gap-3 w-48 justify-center bg-slate-50 py-1.5 px-3 rounded-xl border border-slate-200">
              <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-extrabold text-[11px] flex items-center justify-center">05</span>
              <span className="text-xs font-extrabold text-slate-900 tracking-wider">TRACK</span>
            </div>
          </div>
        </div>

        {/* 5 Stages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Stage 01 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
                  01
                </span>
                <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200 uppercase tracking-wider">
                  Assess
                </span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                01 — TAKE THE ASSESSMENT
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The student answers questions about their background, interests and skills.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
              <span>Background · Interests · Skills</span>
            </div>
          </div>

          {/* Stage 02 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
                  02
                </span>
                <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200 uppercase tracking-wider">
                  Explore
                </span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                02 — EXPLORE CAREERS
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The student explores different career areas based on their interests and preferences.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
              <span>6 Target Corporate Career Profiles</span>
            </div>
          </div>

          {/* Stage 03 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
                  03
                </span>
                <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200 uppercase tracking-wider">
                  Compare
                </span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                03 — COMPARE YOUR SKILLS
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The system compares the student's current skills with example requirements for the selected career.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
              <span>Skill Gap = Required − Current</span>
            </div>
          </div>

          {/* Stage 04 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
                  04
                </span>
                <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200 uppercase tracking-wider">
                  Plan
                </span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                04 — GET YOUR ROADMAP
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The system identifies priority skills and creates a suggested learning roadmap.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
              <span>Sequential 9-Step Pathway</span>
            </div>
          </div>

          {/* Stage 05 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all shadow-xs flex flex-col justify-between space-y-4 md:col-span-2 lg:col-span-1">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
                  05
                </span>
                <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200 uppercase tracking-wider">
                  Track
                </span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                05 — TRACK YOUR PROGRESS
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The student can mark roadmap steps as completed and monitor their progress.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
              <span>Interactive Checklist & Dashboard</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. WHY CAREER COMPASS? */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-800 border border-teal-200">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>VALUE & PURPOSE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Career Compass?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Built specifically to help students bridge the gap between classroom education and industry requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Point 1: Self Understanding */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-slate-300 transition-all shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900">
              • Self Understanding
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Helps students reflect on their interests, strengths and skills.
            </p>
          </div>

          {/* Point 2: Skill Gap Awareness */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-slate-300 transition-all shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900">
              • Skill Gap Awareness
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Helps students understand which skills may need further development.
            </p>
          </div>

          {/* Point 3: Career Roadmap */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-slate-300 transition-all shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
              <Map className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900">
              • Career Roadmap
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Turns a broad career goal into smaller and practical learning steps.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. IMPORTANT NOTE */}
      {/* ============================================================== */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-slate-900 text-teal-400 flex items-center justify-center shrink-0">
          <Info className="w-5 h-5" />
        </div>
        <div className="space-y-1.5">
          <h3 className="font-extrabold text-slate-900 text-base">
            Important Note
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            “Career Compass is a student guidance prototype. It provides suggestions based on the information entered by the student. It does not replace professional career counselling or make the final career decision.”
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. READY TO BEGIN CTA */}
      {/* ============================================================== */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
        <div>
          <h4 className="font-bold text-slate-900 text-base">Ready to evaluate your career direction?</h4>
          <p className="text-xs text-slate-500">Takes about 3 to 5 minutes to complete the self-assessment.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={onStartAssessment}
            className="flex-1 sm:flex-initial px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-xs"
          >
            Start Your Assessment
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('demo');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex-1 sm:flex-initial px-4 py-2.5 bg-teal-50 hover:bg-teal-100 text-teal-950 text-xs font-bold rounded-xl transition-colors border border-teal-300 cursor-pointer shadow-2xs"
          >
            View Project Demo
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('skill-gap')}
            className="flex-1 sm:flex-initial px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl transition-colors border border-slate-300 cursor-pointer"
          >
            Preview Skill Gap
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex-1 sm:flex-initial px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors border border-slate-200 cursor-pointer"
          >
            About Project
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('methodology');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex-1 sm:flex-initial px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors border border-slate-200 cursor-pointer"
          >
            Methodology
          </button>
        </div>
      </div>
    </div>
  );
};


