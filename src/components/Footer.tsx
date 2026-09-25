import React from 'react';
import { Compass, ShieldCheck } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  onNavigateTab?: (tab: ActiveTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab }) => {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 mt-20 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-6 text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-900 text-teal-400 font-extrabold text-xs">
              CC
            </span>
            <span className="font-bold text-slate-900 text-sm">
              Career Compass • Story Presentation
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 text-slate-700 font-medium">
            <span className="px-3 py-1 bg-slate-100 text-slate-900 rounded-full font-semibold border border-slate-200">
              Presenter: Shruti Babar
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            {onNavigateTab ? (
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    onNavigateTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-teal-700 hover:text-teal-900 font-semibold cursor-pointer underline underline-offset-2"
                >
                  About Project
                </button>
                <span className="text-slate-300">•</span>
                <button
                  type="button"
                  onClick={() => {
                    onNavigateTab('methodology');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-teal-700 hover:text-teal-900 font-semibold cursor-pointer underline underline-offset-2"
                >
                  Research Methodology
                </button>
                <span className="text-slate-300">•</span>
                <button
                  type="button"
                  onClick={() => {
                    onNavigateTab('demo');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-teal-700 hover:text-teal-900 font-semibold cursor-pointer underline underline-offset-2"
                >
                  Project Demo
                </button>
              </div>
            ) : (
              <span className="text-slate-500">College Project Prototype</span>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
            “Career Compass is a student guidance prototype. Results are suggestions based on user responses and are not a guaranteed career decision.”
          </p>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 shrink-0">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>Designed for Student Guidance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

