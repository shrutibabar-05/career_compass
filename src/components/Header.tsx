import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { Compass, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  hasStartedAssessment: boolean;
  hasCompletedAssessment: boolean;
  onStartAssessment: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  hasStartedAssessment,
  hasCompletedAssessment,
  onStartAssessment,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAssessmentActive = ['background', 'interests', 'skills', 'preferences'].includes(activeTab);
  const isResultsActive = activeTab === 'results' || activeTab === 'dashboard';

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAssessmentClick = () => {
    setMobileMenuOpen(false);
    if (!hasStartedAssessment) {
      onStartAssessment();
    } else {
      setActiveTab('interests');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left text-lg font-bold tracking-tight text-slate-900 hover:text-slate-700 transition-colors focus:outline-none cursor-pointer"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-teal-400 font-extrabold text-sm shadow-xs">
            CC
          </span>
          <span className="text-slate-900 font-extrabold tracking-tight">Career Compass</span>
        </button>

        {/* Desktop Navigation: Career Compass | Home | About | Assessment | Careers | My Results */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors hover:text-slate-900 cursor-pointer ${
              activeTab === 'home' ? 'text-slate-900 font-bold border-b-2 border-slate-900 pb-0.5' : ''
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`transition-colors hover:text-slate-900 cursor-pointer ${
              activeTab === 'about' ? 'text-slate-900 font-bold border-b-2 border-slate-900 pb-0.5' : ''
            }`}
          >
            About
          </button>

          <button
            onClick={() => handleNavClick('methodology')}
            className={`transition-colors hover:text-slate-900 cursor-pointer ${
              activeTab === 'methodology' ? 'text-slate-900 font-bold border-b-2 border-slate-900 pb-0.5' : ''
            }`}
          >
            Methodology
          </button>

          <button
            onClick={handleAssessmentClick}
            className={`transition-colors hover:text-slate-900 cursor-pointer ${
              isAssessmentActive ? 'text-slate-900 font-bold border-b-2 border-slate-900 pb-0.5' : ''
            }`}
          >
            Assessment
          </button>

          <button
            onClick={() => handleNavClick('explorer')}
            className={`transition-colors hover:text-slate-900 cursor-pointer ${
              activeTab === 'explorer' ? 'text-slate-900 font-bold border-b-2 border-slate-900 pb-0.5' : ''
            }`}
          >
            Careers
          </button>

          <button
            onClick={() => handleNavClick('results')}
            className={`transition-colors hover:text-slate-900 cursor-pointer ${
              isResultsActive ? 'text-slate-900 font-bold border-b-2 border-slate-900 pb-0.5' : ''
            }`}
          >
            My Results
          </button>

          {/* Quick links to Gap and Roadmap for seamless navigation */}
          <div className="h-4 w-px bg-slate-200" />

          <button
            onClick={() => handleNavClick('skill-gap')}
            className={`text-xs transition-colors hover:text-slate-900 cursor-pointer ${
              activeTab === 'skill-gap' ? 'text-teal-700 font-bold' : 'text-slate-500'
            }`}
          >
            Skill Gap
          </button>

          <button
            onClick={() => handleNavClick('roadmap')}
            className={`text-xs transition-colors hover:text-slate-900 cursor-pointer ${
              activeTab === 'roadmap' ? 'text-teal-700 font-bold' : 'text-slate-500'
            }`}
          >
            Roadmap
          </button>
        </nav>

        {/* Action Button: Clear "Start Assessment" button */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={() => handleNavClick('demo')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all border cursor-pointer ${
              activeTab === 'demo'
                ? 'bg-teal-100 text-teal-900 border-teal-400 font-extrabold shadow-2xs'
                : 'bg-teal-50/70 hover:bg-teal-100 text-teal-900 border-teal-200'
            }`}
          >
            Demo
          </button>

          <button
            onClick={onStartAssessment}
            className="px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all whitespace-nowrap shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <span>{hasStartedAssessment && !hasCompletedAssessment ? 'Continue Assessment' : 'Start Assessment'}</span>
            <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
              activeTab === 'home' ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
              activeTab === 'about' ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            About Career Compass
          </button>

          <button
            onClick={() => handleNavClick('methodology')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
              activeTab === 'methodology' ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            Research Methodology
          </button>

          <button
            onClick={() => handleNavClick('demo')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
              activeTab === 'demo' ? 'bg-teal-50 text-teal-900 font-bold' : 'text-teal-700 hover:bg-teal-50'
            }`}
          >
            Project Demo (Judge Walkthrough)
          </button>

          <button
            onClick={handleAssessmentClick}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
              isAssessmentActive ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            Assessment
          </button>

          <button
            onClick={() => handleNavClick('explorer')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
              activeTab === 'explorer' ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            Careers
          </button>

          <button
            onClick={() => handleNavClick('results')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
              isResultsActive ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            My Results
          </button>

          <button
            onClick={() => handleNavClick('skill-gap')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
              activeTab === 'skill-gap' ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            Skill Gap Analysis
          </button>

          <button
            onClick={() => handleNavClick('roadmap')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
              activeTab === 'roadmap' ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            Personalized Roadmap
          </button>

          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartAssessment();
              }}
              className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>{hasStartedAssessment && !hasCompletedAssessment ? 'Continue Assessment' : 'Start Assessment'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

