import React, { useState } from 'react';
import {
  Compass,
  ArrowLeft,
  ArrowRight,
  User,
  GraduationCap,
  ClipboardCheck,
  TrendingUp,
  Target,
  AlertCircle,
  MapPin,
  CheckCircle2,
  Clock,
  Briefcase,
  Layers,
  BarChart3,
  Award,
  BookOpen,
  Eye,
  Sparkles,
} from 'lucide-react';
import { ActiveTab } from '../types';

interface JudgeDemoSectionProps {
  onReturnHome: () => void;
  onStartAssessment: () => void;
  onExploreCareers: () => void;
  onLoadRealProfileIntoState?: () => void;
}

export const JudgeDemoSection: React.FC<JudgeDemoSectionProps> = ({
  onReturnHome,
  onStartAssessment,
  onExploreCareers,
  onLoadRealProfileIntoState,
}) => {
  // Demo interactive checklist state for Step 7 (Progress)
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({
    'demo-1': true,
    'demo-2': true,
    'demo-3': true,
    'demo-4': false,
    'demo-5': false,
    'demo-6': false,
  });

  const toggleDemoStep = (id: string) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const totalStepsCount = 6;
  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalStepsCount) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
      {/* Top Navigation & Return */}
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
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
            <Eye className="w-3.5 h-3.5 text-amber-600" />
            <span>Judge Demo · 1–2 Min Walkthrough</span>
          </span>
        </div>
      </div>

      {/* ============================================================== */}
      {/* HEADER & DEMO BANNER */}
      {/* ============================================================== */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-bold text-slate-800 uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-teal-600" />
            <span>Project Presentation</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Career Compass — Project Demonstration
          </h1>
          <p className="text-sm sm:text-base text-slate-700 font-medium">
            An example journey showing how the prototype guides a Commerce student.
          </p>
        </div>

        {/* Mandatory Note */}
        <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3 text-amber-900">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm leading-relaxed">
            <span className="font-bold block">Important Demo Notice</span>
            <p className="text-amber-800">
              “This demonstration uses sample data to explain the working of the prototype. It is not a real student's assessment result.”
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* STEP 1 — Student Profile */}
      {/* ============================================================== */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
              01
            </span>
            <div>
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">
                Step 1 of 7
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Student Profile
              </h2>
            </div>
          </div>
          <span className="text-[11px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full uppercase">
            DEMO DATA
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600">
          The student begins by entering academic details and baseline career aspirations:
        </p>

        {/* Profile Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="space-y-1">
            <span className="text-slate-500 font-medium block">Sample Student:</span>
            <span className="font-bold text-slate-900 text-sm">Aditya S. (Demo Student)</span>
          </div>

          <div className="space-y-1">
            <span className="text-slate-500 font-medium block">Degree & Stream:</span>
            <span className="font-bold text-slate-900 text-sm">Bachelor of Commerce (B.Com.)</span>
          </div>

          <div className="space-y-1">
            <span className="text-slate-500 font-medium block">Current Year:</span>
            <span className="font-bold text-slate-900 text-sm">2nd Year (Semester 4)</span>
          </div>

          <div className="space-y-1">
            <span className="text-slate-500 font-medium block">College / Institution:</span>
            <span className="font-bold text-slate-900 text-sm">City College of Commerce</span>
          </div>

          <div className="space-y-1">
            <span className="text-slate-500 font-medium block">Broad Career Interest:</span>
            <span className="font-bold text-slate-900 text-sm">Business Analytics & Financial Data</span>
          </div>

          <div className="space-y-1">
            <span className="text-slate-500 font-medium block">Primary Motivation:</span>
            <span className="font-bold text-slate-900 text-sm">Bridge degree with corporate tech skills</span>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* STEP 2 — Assessment */}
      {/* ============================================================== */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
              02
            </span>
            <div>
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">
                Step 2 of 7
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Assessment Responses
              </h2>
            </div>
          </div>
          <span className="text-[11px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full uppercase">
            DEMO DATA
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600">
          The student rates their interest levels across commerce domains and self-evaluates core competencies:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Sample Interests */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <ClipboardCheck className="w-4 h-4 text-teal-600" />
              <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                Sample Interest Responses (Rated 1–5)
              </h3>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-200">
                <span className="text-slate-700">Financial Modeling & Spreadsheets</span>
                <span className="font-bold text-teal-700">5 / 5 (Very High)</span>
              </div>
              <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-200">
                <span className="text-slate-700">Data Analytics & Dashboards</span>
                <span className="font-bold text-teal-700">5 / 5 (Very High)</span>
              </div>
              <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-200">
                <span className="text-slate-700">Corporate Finance & Auditing</span>
                <span className="font-bold text-slate-700">4 / 5 (High)</span>
              </div>
              <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-200">
                <span className="text-slate-700">Marketing & Consumer Research</span>
                <span className="font-bold text-slate-500">3 / 5 (Moderate)</span>
              </div>
              <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-200">
                <span className="text-slate-700">People Management & HR Operations</span>
                <span className="font-bold text-slate-500">2 / 5 (Low)</span>
              </div>
            </div>
          </div>

          {/* Sample Self-Assessed Skills */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-blue-600" />
              <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                Sample Self-Assessed Skills (Rated 1–5)
              </h3>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-200">
                <span className="text-slate-700">Advanced Excel (Formulas, Pivot)</span>
                <span className="font-bold text-blue-700">4 / 5 (Proficient)</span>
              </div>
              <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-200">
                <span className="text-slate-700">Business Accounting Principles</span>
                <span className="font-bold text-blue-700">4 / 5 (Proficient)</span>
              </div>
              <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-200">
                <span className="text-slate-700">Business Communication</span>
                <span className="font-bold text-slate-700">3 / 5 (Intermediate)</span>
              </div>
              <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-200">
                <span className="text-slate-700">SQL & Databases</span>
                <span className="font-bold text-amber-700">2 / 5 (Beginner)</span>
              </div>
              <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-200">
                <span className="text-slate-700">Power BI / Visualization</span>
                <span className="font-bold text-amber-700">2 / 5 (Beginner)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* STEP 3 — Career Suggestions */}
      {/* ============================================================== */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
              03
            </span>
            <div>
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">
                Step 3 of 7
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Career Suggestions
              </h2>
            </div>
          </div>
          <span className="text-[11px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full uppercase">
            DEMO / REFERENCE DATA
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600">
          The system calculates alignment scores based on the demo responses, highlighting suitable commerce paths:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">
          {/* 1. Data Analyst */}
          <div className="bg-teal-50/60 border-2 border-teal-600 rounded-xl p-4 space-y-2 relative">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">Data Analyst</span>
              <span className="px-2 py-0.5 rounded-full bg-teal-600 text-white font-extrabold text-[11px]">
                86% Match
              </span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Interprets complex datasets to provide strategic business recommendations.
            </p>
            <div className="pt-2 text-[10px] font-bold text-teal-800 uppercase flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-teal-600" />
              <span>Selected for Demo Walkthrough</span>
            </div>
          </div>

          {/* 2. Accounting & Finance */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">Accounting & Finance</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-800 font-bold text-[11px] border border-slate-200">
                82% Match
              </span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Financial auditing, tax compliance, and corporate financial reporting.
            </p>
          </div>

          {/* 3. Banking & Finance */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">Banking & Finance</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-800 font-bold text-[11px] border border-slate-200">
                78% Match
              </span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Credit analysis, commercial banking operations, and investment advisory.
            </p>
          </div>

          {/* 4. Marketing */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">Marketing</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-800 font-bold text-[11px] border border-slate-200">
                70% Match
              </span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Brand management, digital customer campaigns, and market trends analysis.
            </p>
          </div>

          {/* 5. Human Resources */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">Human Resources</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-800 font-bold text-[11px] border border-slate-200">
                65% Match
              </span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Talent acquisition, organizational culture, employee relations and HR policies.
            </p>
          </div>

          {/* 6. Entrepreneurship */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">Entrepreneurship</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-800 font-bold text-[11px] border border-slate-200">
                62% Match
              </span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Venture planning, product development, fundraising and new business management.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* STEP 4 — Skill Gap */}
      {/* ============================================================== */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
              04
            </span>
            <div>
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">
                Step 4 of 7
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Skill Gap Analysis for “Data Analyst”
              </h2>
            </div>
          </div>
          <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full uppercase">
            Demo / Reference Data
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600">
          Comparing the demo student's current proficiency with standard reference requirements for an entry-level Data Analyst:
        </p>

        {/* Skill Gap Comparison Table */}
        <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
          <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 grid grid-cols-12 font-bold text-slate-700">
            <span className="col-span-5 sm:col-span-4">Skill Name</span>
            <span className="col-span-3 sm:col-span-2 text-center">Current Level</span>
            <span className="col-span-4 sm:col-span-2 text-center">Reference Required</span>
            <span className="hidden sm:block sm:col-span-4 text-right">Calculated Gap</span>
          </div>

          <div className="divide-y divide-slate-100">
            {/* Skill 1: Advanced Excel */}
            <div className="px-4 py-3 grid grid-cols-12 items-center hover:bg-slate-50/50">
              <span className="col-span-5 sm:col-span-4 font-semibold text-slate-900">
                Advanced Excel & Formulas
              </span>
              <span className="col-span-3 sm:col-span-2 text-center text-slate-700 font-bold">
                75%
              </span>
              <span className="col-span-4 sm:col-span-2 text-center text-slate-900 font-bold">
                85%
              </span>
              <div className="col-span-12 sm:col-span-4 flex items-center justify-end gap-2 mt-1 sm:mt-0">
                <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                  10% Gap (Minor)
                </span>
              </div>
            </div>

            {/* Skill 2: SQL & Databases */}
            <div className="px-4 py-3 grid grid-cols-12 items-center bg-rose-50/30 hover:bg-rose-50/50">
              <span className="col-span-5 sm:col-span-4 font-semibold text-slate-900">
                SQL & Relational Databases
              </span>
              <span className="col-span-3 sm:col-span-2 text-center text-slate-700 font-bold">
                35%
              </span>
              <span className="col-span-4 sm:col-span-2 text-center text-slate-900 font-bold">
                80%
              </span>
              <div className="col-span-12 sm:col-span-4 flex items-center justify-end gap-2 mt-1 sm:mt-0">
                <span className="text-[11px] font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                  45% Gap (High Priority)
                </span>
              </div>
            </div>

            {/* Skill 3: Power BI / Visualization */}
            <div className="px-4 py-3 grid grid-cols-12 items-center bg-rose-50/30 hover:bg-rose-50/50">
              <span className="col-span-5 sm:col-span-4 font-semibold text-slate-900">
                Power BI & Data Visualization
              </span>
              <span className="col-span-3 sm:col-span-2 text-center text-slate-700 font-bold">
                30%
              </span>
              <span className="col-span-4 sm:col-span-2 text-center text-slate-900 font-bold">
                75%
              </span>
              <div className="col-span-12 sm:col-span-4 flex items-center justify-end gap-2 mt-1 sm:mt-0">
                <span className="text-[11px] font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                  45% Gap (High Priority)
                </span>
              </div>
            </div>

            {/* Skill 4: Business Statistics */}
            <div className="px-4 py-3 grid grid-cols-12 items-center hover:bg-slate-50/50">
              <span className="col-span-5 sm:col-span-4 font-semibold text-slate-900">
                Business Statistics & Logic
              </span>
              <span className="col-span-3 sm:col-span-2 text-center text-slate-700 font-bold">
                60%
              </span>
              <span className="col-span-4 sm:col-span-2 text-center text-slate-900 font-bold">
                75%
              </span>
              <div className="col-span-12 sm:col-span-4 flex items-center justify-end gap-2 mt-1 sm:mt-0">
                <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  15% Gap (Moderate)
                </span>
              </div>
            </div>

            {/* Skill 5: Financial Acumen */}
            <div className="px-4 py-3 grid grid-cols-12 items-center hover:bg-slate-50/50">
              <span className="col-span-5 sm:col-span-4 font-semibold text-slate-900">
                Financial Acumen & Context
              </span>
              <span className="col-span-3 sm:col-span-2 text-center text-slate-700 font-bold">
                80%
              </span>
              <span className="col-span-4 sm:col-span-2 text-center text-slate-900 font-bold">
                70%
              </span>
              <div className="col-span-12 sm:col-span-4 flex items-center justify-end gap-2 mt-1 sm:mt-0">
                <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                  Meets Requirement (+10%)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[11px] text-slate-500 italic">
          * Note: Percentages and reference values displayed above are Demo/Reference Data to showcase the skill comparison model.
        </div>
      </section>

      {/* ============================================================== */}
      {/* STEP 5 — Priority Skills */}
      {/* ============================================================== */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
              05
            </span>
            <div>
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">
                Step 5 of 7
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Priority Skills for Development
              </h2>
            </div>
          </div>
          <span className="text-[11px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full uppercase">
            TARGET FOCUS
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600">
          The system highlights skills with the largest gaps so students avoid spreading their learning efforts too thin:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Priority 1 */}
          <div className="bg-slate-50 border-2 border-rose-300 rounded-xl p-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 bg-rose-600 text-white text-[10px] font-extrabold rounded uppercase">
                Priority 1
              </span>
              <span className="text-xs font-bold text-rose-700">45% Gap</span>
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm">
              SQL & Databases
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Writing SELECT queries, aggregate functions, and JOIN operations on sales data.
            </p>
          </div>

          {/* Priority 2 */}
          <div className="bg-slate-50 border-2 border-rose-300 rounded-xl p-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 bg-rose-600 text-white text-[10px] font-extrabold rounded uppercase">
                Priority 2
              </span>
              <span className="text-xs font-bold text-rose-700">45% Gap</span>
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm">
              Power BI Dashboards
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Building interactive reports, visual KPI cards, and sharing drill-down summaries.
            </p>
          </div>

          {/* Priority 3 */}
          <div className="bg-slate-50 border-2 border-amber-300 rounded-xl p-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 bg-amber-600 text-white text-[10px] font-extrabold rounded uppercase">
                Priority 3
              </span>
              <span className="text-xs font-bold text-amber-700">15% Gap</span>
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm">
              Applied Statistics
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Moving from theoretical commerce maths to real hypothesis testing and trend analysis.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* STEP 6 — Career Roadmap */}
      {/* ============================================================== */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
              06
            </span>
            <div>
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">
                Step 6 of 7
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Personalized Career Roadmap
              </h2>
            </div>
          </div>
          <span className="text-[11px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full uppercase">
            ACTION PLAN
          </span>
        </div>

        {/* Visual Roadmap Sequence Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
          <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block">
            Roadmap Sequence
          </span>
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-800">
            <span className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg shadow-2xs">B.Com.</span>
            <span className="text-slate-400">→</span>
            <span className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg shadow-2xs">Learn Skills</span>
            <span className="text-slate-400">→</span>
            <span className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg shadow-2xs">Complete Project</span>
            <span className="text-slate-400">→</span>
            <span className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg shadow-2xs">Build Portfolio</span>
            <span className="text-slate-400">→</span>
            <span className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg shadow-2xs">Internship</span>
            <span className="text-slate-400">→</span>
            <span className="px-2.5 py-1 bg-teal-50 border border-teal-300 text-teal-900 rounded-lg shadow-2xs">Explore Opportunities</span>
          </div>
        </div>

        {/* Roadmap Milestones */}
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shrink-0">1</span>
            <div className="space-y-0.5">
              <span className="font-bold text-slate-900 text-xs sm:text-sm">B.Com. Academic Foundation</span>
              <p className="text-xs text-slate-600">Maintain strong scores in Financial Accounting, Costing, and Business Statistics.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shrink-0">2</span>
            <div className="space-y-0.5">
              <span className="font-bold text-slate-900 text-xs sm:text-sm">Learn Priority Technical Skills</span>
              <p className="text-xs text-slate-600">Complete 4-week structured courses in SQL databases and Power BI dashboarding.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shrink-0">3</span>
            <div className="space-y-0.5">
              <span className="font-bold text-slate-900 text-xs sm:text-sm">Complete Real-World Project</span>
              <p className="text-xs text-slate-600">Analyze an FMCG sales dataset to find top performing categories and margin leakage.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shrink-0">4</span>
            <div className="space-y-0.5">
              <span className="font-bold text-slate-900 text-xs sm:text-sm">Build Interactive Portfolio</span>
              <p className="text-xs text-slate-600">Publish interactive dashboards and case studies to a public portfolio / LinkedIn.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shrink-0">5</span>
            <div className="space-y-0.5">
              <span className="font-bold text-slate-900 text-xs sm:text-sm">Summer Analyst Internship</span>
              <p className="text-xs text-slate-600">Apply for entry-level analyst or MIS intern roles during summer vacation.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shrink-0">6</span>
            <div className="space-y-0.5">
              <span className="font-bold text-slate-900 text-xs sm:text-sm">Explore Graduate Opportunities</span>
              <p className="text-xs text-slate-600">Campus placements, graduate trainee programs, or specialized certifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* STEP 7 — Progress Tracking */}
      {/* ============================================================== */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
              07
            </span>
            <div>
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">
                Step 7 of 7
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Progress Tracking Demonstration
              </h2>
            </div>
          </div>
          <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full uppercase">
            Interactive Prototype
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600">
          Career Compass allows students to mark milestones as completed and monitor tangible progress over time:
        </p>

        {/* Progress Bar Display */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
          <div className="flex items-center justify-between text-xs sm:text-sm font-bold">
            <span className="text-slate-800">
              Demo Roadmap Completion: {completedCount} of {totalStepsCount} Milestones
            </span>
            <span className="text-teal-700 font-extrabold text-base">
              {progressPercent}%
            </span>
          </div>

          <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-teal-600 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500">
            <span>Click checkboxes below to demonstrate real-time tracking:</span>
            <span>{progressPercent >= 50 ? 'Strong Steady Momentum' : 'Initiation Phase'}</span>
          </div>
        </div>

        {/* Interactive Checkbox Items */}
        <div className="space-y-2 text-xs">
          <div
            onClick={() => toggleDemoStep('demo-1')}
            className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
              completedSteps['demo-1']
                ? 'bg-emerald-50/50 border-emerald-200 text-emerald-900'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <input
              type="checkbox"
              checked={completedSteps['demo-1']}
              onChange={() => {}}
              className="w-4 h-4 rounded text-teal-600 focus:ring-teal-500 cursor-pointer"
            />
            <span className={completedSteps['demo-1'] ? 'line-through font-medium' : 'font-medium'}>
              B.Com. Academic Year 2 coursework & statistics module
            </span>
          </div>

          <div
            onClick={() => toggleDemoStep('demo-2')}
            className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
              completedSteps['demo-2']
                ? 'bg-emerald-50/50 border-emerald-200 text-emerald-900'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <input
              type="checkbox"
              checked={completedSteps['demo-2']}
              onChange={() => {}}
              className="w-4 h-4 rounded text-teal-600 focus:ring-teal-500 cursor-pointer"
            />
            <span className={completedSteps['demo-2'] ? 'line-through font-medium' : 'font-medium'}>
              Learn SQL fundamentals and query relational tables
            </span>
          </div>

          <div
            onClick={() => toggleDemoStep('demo-3')}
            className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
              completedSteps['demo-3']
                ? 'bg-emerald-50/50 border-emerald-200 text-emerald-900'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <input
              type="checkbox"
              checked={completedSteps['demo-3']}
              onChange={() => {}}
              className="w-4 h-4 rounded text-teal-600 focus:ring-teal-500 cursor-pointer"
            />
            <span className={completedSteps['demo-3'] ? 'line-through font-medium' : 'font-medium'}>
              Build first Power BI dashboard for retail commerce
            </span>
          </div>

          <div
            onClick={() => toggleDemoStep('demo-4')}
            className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
              completedSteps['demo-4']
                ? 'bg-emerald-50/50 border-emerald-200 text-emerald-900'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <input
              type="checkbox"
              checked={completedSteps['demo-4']}
              onChange={() => {}}
              className="w-4 h-4 rounded text-teal-600 focus:ring-teal-500 cursor-pointer"
            />
            <span className={completedSteps['demo-4'] ? 'line-through font-medium' : 'font-medium'}>
              Assemble GitHub / LinkedIn portfolio case studies
            </span>
          </div>

          <div
            onClick={() => toggleDemoStep('demo-5')}
            className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
              completedSteps['demo-5']
                ? 'bg-emerald-50/50 border-emerald-200 text-emerald-900'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <input
              type="checkbox"
              checked={completedSteps['demo-5']}
              onChange={() => {}}
              className="w-4 h-4 rounded text-teal-600 focus:ring-teal-500 cursor-pointer"
            />
            <span className={completedSteps['demo-5'] ? 'line-through font-medium' : 'font-medium'}>
              Secure summer corporate analyst internship
            </span>
          </div>

          <div
            onClick={() => toggleDemoStep('demo-6')}
            className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
              completedSteps['demo-6']
                ? 'bg-emerald-50/50 border-emerald-200 text-emerald-900'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <input
              type="checkbox"
              checked={completedSteps['demo-6']}
              onChange={() => {}}
              className="w-4 h-4 rounded text-teal-600 focus:ring-teal-500 cursor-pointer"
            />
            <span className={completedSteps['demo-6'] ? 'line-through font-medium' : 'font-medium'}>
              Apply for full-time business analyst entry roles
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* BOTTOM ACTIONS FOR JUDGES & USERS */}
      {/* ============================================================== */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-extrabold text-slate-900 text-base">
            Ready to test with your own profile?
          </h3>
          <p className="text-xs text-slate-500">
            Take the self-assessment to generate your own personalized roadmap.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={onReturnHome}
            className="flex-1 sm:flex-initial px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold rounded-xl transition-all border border-slate-300 cursor-pointer shadow-2xs"
          >
            Return to Home
          </button>

          <button
            type="button"
            onClick={onExploreCareers}
            className="flex-1 sm:flex-initial px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-all border border-slate-200 cursor-pointer"
          >
            Explore Careers
          </button>

          <button
            type="button"
            onClick={onStartAssessment}
            className="flex-1 sm:flex-initial px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <span>Start Real Assessment</span>
            <ArrowRight className="w-4 h-4 text-teal-400" />
          </button>
        </div>
      </section>
    </div>
  );
};
