/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import {
  ActiveTab,
  StudentBackground,
  CareerOption,
  RoadmapStep,
  AssessmentResult,
} from './types';
import { CAREERS_DATA, generatePersonalizedRoadmap } from './data/careersData';
import { INTEREST_STATEMENTS, SKILL_CATEGORIES } from './data/questionsData';
import { calculateAssessment, calculateSkillGap } from './utils/scoring';
import { Compass } from 'lucide-react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StepIndicator } from './components/StepIndicator';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { ResearchMethodology } from './components/ResearchMethodology';
import { JudgeDemoSection } from './components/JudgeDemoSection';
import { BackgroundForm } from './components/BackgroundForm';
import { InterestSurvey } from './components/InterestSurvey';
import { SkillsAssessment } from './components/SkillsAssessment';
import { CareerPreferences } from './components/CareerPreferences';
import { ResultsView } from './components/ResultsView';
import { CareerExplorer } from './components/CareerExplorer';
import { SkillGapAnalysis } from './components/SkillGapAnalysis';
import { PersonalizedRoadmap } from './components/PersonalizedRoadmap';
import { ProgressDashboard } from './components/ProgressDashboard';

const STORAGE_KEY = 'career_compass_session_v1';

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');

  // Student Background State
  const [background, setBackground] = useState<StudentBackground>(() => {
    try {
      const saved = sessionStorage.getItem(`${STORAGE_KEY}_bg`);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // fallback
    }
    return {
      name: '',
      age: '',
      educationLevel: 'Undergraduate (1st / 2nd Year - B.Com, BBA, B.Sc, BCA, BA)',
      currentCourse: 'B.Com',
      favouriteSubjects: ['Accountancy', 'Mathematics', 'Economics'],
      hobbies: ['Analyzing Stocks & Finance', 'Puzzle & Strategy Games'],
      areasOfInterest: ['Data Analytics', 'Accounting'],
    };
  });

  // Interest Survey State (statementId -> 1..5)
  const [interests, setInterests] = useState<Record<string, number>>(() => {
    try {
      const saved = sessionStorage.getItem(`${STORAGE_KEY}_int`);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {};
  });

  // Skills Assessment State (skillId -> 1..5)
  const [skills, setSkills] = useState<Record<string, number>>(() => {
    try {
      const saved = sessionStorage.getItem(`${STORAGE_KEY}_skl`);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {};
  });

  // Career Preferences Selected
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>(() => {
    try {
      const saved = sessionStorage.getItem(`${STORAGE_KEY}_pref`);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return ['Data Analytics', 'Accounting', 'Banking & Finance'];
  });

  // Active Selected Career for deep dive (Gap & Roadmap)
  const [selectedCareer, setSelectedCareer] = useState<CareerOption>(CAREERS_DATA[0]);

  // Roadmap Steps with completion flags
  const [roadmapSteps, setRoadmapSteps] = useState<RoadmapStep[]>(() => {
    return generatePersonalizedRoadmap(CAREERS_DATA[0].id, 'B.Com');
  });

  // Assessment Result
  const [result, setResult] = useState<AssessmentResult | null>(() => {
    try {
      const saved = sessionStorage.getItem(`${STORAGE_KEY}_res`);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return null;
  });

  // Save changes to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem(`${STORAGE_KEY}_bg`, JSON.stringify(background));
      sessionStorage.setItem(`${STORAGE_KEY}_int`, JSON.stringify(interests));
      sessionStorage.setItem(`${STORAGE_KEY}_skl`, JSON.stringify(skills));
      sessionStorage.setItem(`${STORAGE_KEY}_pref`, JSON.stringify(selectedPreferences));
      if (result) {
        sessionStorage.setItem(`${STORAGE_KEY}_res`, JSON.stringify(result));
      }
    } catch (e) {}
  }, [background, interests, skills, selectedPreferences, result]);

  // Regenerate roadmap when selected career or background course changes
  const updateSelectedCareer = (career: CareerOption) => {
    setSelectedCareer(career);
    const gaps = calculateSkillGap(
      career,
      result
        ? result.skillScores
        : {
            'Digital Skills': 60,
            Communication: 60,
            'Analytical Thinking': 60,
            'Problem Solving': 60,
            Leadership: 60,
            Creativity: 60,
            Teamwork: 60,
            'Continuous Learning': 60,
          }
    );
    setRoadmapSteps(generatePersonalizedRoadmap(career, background.currentCourse || 'B.Com', gaps));
  };

  // Step Completion Map
  const completedSteps = useMemo(() => {
    return {
      background: Boolean(background.name && background.currentCourse),
      interests: Object.keys(interests).length === INTEREST_STATEMENTS.length,
      skills: Object.keys(skills).length === SKILL_CATEGORIES.length,
      preferences: selectedPreferences.length > 0,
      results: Boolean(result),
    };
  }, [background, interests, skills, selectedPreferences, result]);

  const hasStartedAssessment =
    Boolean(background.name) ||
    Object.keys(interests).length > 0 ||
    Object.keys(skills).length > 0;

  const hasCompletedAssessment = Boolean(result);

  // Handlers
  const handleTogglePreference = (name: string) => {
    if (selectedPreferences.includes(name)) {
      setSelectedPreferences(selectedPreferences.filter((p) => p !== name));
    } else {
      setSelectedPreferences([...selectedPreferences, name]);
    }
  };

  const handleRateSkill = (skillId: string, rating: number) => {
    setSkills((prev) => ({
      ...prev,
      [skillId]: rating,
    }));
  };

  const handleAnswerInterest = (statementId: string, rating: number) => {
    setInterests((prev) => ({
      ...prev,
      [statementId]: rating,
    }));
  };

  const handleToggleStepCompletion = (stepId: string) => {
    setRoadmapSteps((prev) =>
      prev.map((step) =>
        step.id === stepId ? { ...step, completed: !step.completed } : step
      )
    );
  };

  const handleCalculateResults = () => {
    const calculated = calculateAssessment(
      interests,
      skills,
      selectedPreferences,
      background
    );
    setResult(calculated);

    // If top suggested career exists, select it as primary default for roadmap & gap
    if (calculated.suggestedCareers.length > 0) {
      const topCareer = calculated.suggestedCareers[0].career;
      setSelectedCareer(topCareer);
      const gaps = calculateSkillGap(topCareer, calculated.skillScores);
      setRoadmapSteps(
        generatePersonalizedRoadmap(topCareer, background.currentCourse || 'B.Com', gaps)
      );
    }
    setActiveTab('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Preload a comprehensive, realistic sample student profile (B.Com student)
  const handleLoadSampleProfile = () => {
    const sampleBg: StudentBackground = {
      name: 'Shruti Sharma',
      age: '19',
      educationLevel: 'Undergraduate (1st / 2nd Year - B.Com, BBA, B.Sc, BCA, BA)',
      currentCourse: 'B.Com (Accounts & Analytics)',
      favouriteSubjects: ['Accountancy', 'Mathematics', 'Statistics', 'Economics'],
      hobbies: [
        'Analyzing Stocks & Finance',
        'Exploring New Software Tools',
        'Puzzle & Strategy Games',
      ],
      areasOfInterest: ['Data Analytics', 'Accounting', 'Banking & Finance'],
    };

    const sampleInterests: Record<string, number> = {
      int_numbers: 5,
      int_problem_solving: 5,
      int_analysing_info: 5,
      int_technology: 4,
      int_communication: 4,
      int_helping_people: 3,
      int_teamwork: 4,
      int_creating_ideas: 4,
      int_marketing: 3,
      int_creativity: 3,
      int_business: 5,
      int_entrepreneurship: 4,
      int_leadership: 4,
    };

    const sampleSkills: Record<string, number> = {
      communication: 3.5,
      digital_skills: 3.5,
      analytical_thinking: 3,
      problem_solving: 3,
      teamwork: 4,
      leadership: 3,
      creativity: 3,
      continuous_learning: 4,
    };

    const samplePrefs = ['Data Analytics', 'Accounting', 'Banking & Finance'];

    setBackground(sampleBg);
    setInterests(sampleInterests);
    setSkills(sampleSkills);
    setSelectedPreferences(samplePrefs);

    const calculated = calculateAssessment(
      sampleInterests,
      sampleSkills,
      samplePrefs,
      sampleBg
    );
    setResult(calculated);

    const topCareer = calculated.suggestedCareers[0]?.career || CAREERS_DATA[0];
    setSelectedCareer(topCareer);
    const gaps = calculateSkillGap(topCareer, calculated.skillScores);
    setRoadmapSteps(generatePersonalizedRoadmap(topCareer, sampleBg.currentCourse, gaps));

    setActiveTab('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartAgain = () => {
    if (window.confirm('Do you want to reset your answers and start the assessment again?')) {
      setBackground({
        name: '',
        age: '',
        educationLevel: 'Undergraduate (1st / 2nd Year - B.Com, BBA, B.Sc, BCA, BA)',
        currentCourse: '',
        favouriteSubjects: [],
        hobbies: [],
        areasOfInterest: [],
      });
      setInterests({});
      setSkills({});
      setSelectedPreferences([]);
      setResult(null);
      setSelectedCareer(CAREERS_DATA[0]);
      setRoadmapSteps(generatePersonalizedRoadmap(CAREERS_DATA[0].id, 'Degree'));
      sessionStorage.clear();
      setActiveTab('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Header (3-zone Top Bar Contract) */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        hasStartedAssessment={hasStartedAssessment}
        hasCompletedAssessment={hasCompletedAssessment}
        onStartAssessment={() => {
          if (!background.name) {
            setActiveTab('background');
          } else if (Object.keys(interests).length < INTEREST_STATEMENTS.length) {
            setActiveTab('interests');
          } else if (Object.keys(skills).length < SKILL_CATEGORIES.length) {
            setActiveTab('skills');
          } else {
            setActiveTab('preferences');
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Step Indicator (Visible during assessment flow) */}
      <StepIndicator
        currentTab={activeTab}
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        completedSteps={completedSteps}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {activeTab === 'home' && (
          <HomeSection
            onStartAssessment={() => {
              setActiveTab('background');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onExploreDirectly={() => {
              setActiveTab('explorer');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onLoadSampleProfile={handleLoadSampleProfile}
            hasStartedAssessment={hasStartedAssessment}
            hasCompletedAssessment={hasCompletedAssessment}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'about' && (
          <AboutSection
            onReturnHome={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onStartAssessment={() => {
              setActiveTab('background');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onExploreCareers={() => {
              setActiveTab('explorer');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onViewMethodology={() => {
              setActiveTab('methodology');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'methodology' && (
          <ResearchMethodology
            onReturnHome={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onStartAssessment={() => {
              setActiveTab('background');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onExploreCareers={() => {
              setActiveTab('explorer');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onViewAbout={() => {
              setActiveTab('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'demo' && (
          <JudgeDemoSection
            onReturnHome={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onStartAssessment={() => {
              setActiveTab('background');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onExploreCareers={() => {
              setActiveTab('explorer');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onLoadRealProfileIntoState={handleLoadSampleProfile}
          />
        )}

        {activeTab === 'background' && (
          <BackgroundForm
            background={background}
            onChange={setBackground}
            onNext={() => {
              setActiveTab('interests');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onLoadSample={handleLoadSampleProfile}
          />
        )}

        {activeTab === 'interests' && (
          <InterestSurvey
            interests={interests}
            onAnswer={handleAnswerInterest}
            onPrev={() => {
              setActiveTab('background');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNext={() => {
              setActiveTab('skills');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'skills' && (
          <SkillsAssessment
            skills={skills}
            onRateSkill={handleRateSkill}
            onPrev={() => {
              setActiveTab('interests');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNext={() => {
              setActiveTab('preferences');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'preferences' && (
          <CareerPreferences
            selectedPreferences={selectedPreferences}
            onTogglePreference={handleTogglePreference}
            onPrev={() => {
              setActiveTab('skills');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onCalculateResults={handleCalculateResults}
          />
        )}

        {activeTab === 'results' && result && (
          <ResultsView
            result={result}
            background={background}
            selectedCareer={selectedCareer}
            onSelectCareer={updateSelectedCareer}
            roadmapSteps={roadmapSteps}
            onStartAgain={handleStartAgain}
            onExploreCareers={() => {
              setActiveTab('explorer');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onReviewSkillGap={() => {
              setActiveTab('skill-gap');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onContinueRoadmap={() => {
              setActiveTab('roadmap');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectCareerForGap={(c) => {
              updateSelectedCareer(c);
              setActiveTab('skill-gap');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectCareerForRoadmap={(c) => {
              updateSelectedCareer(c);
              setActiveTab('roadmap');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectCareerForExplorer={(c) => {
              updateSelectedCareer(c);
              setActiveTab('explorer');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'results' && !result && (
          <div className="max-w-lg mx-auto px-4 py-16 text-center space-y-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Assessment In Progress
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Complete the self-assessment to view your personalized Career Compass Report with genuine calculated scores, or load sample student data to preview the full report immediately.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('background');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-2xs"
              >
                Start Assessment
              </button>
              <button
                type="button"
                onClick={handleLoadSampleProfile}
                className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-2xs"
              >
                Load Sample Student Assessment
              </button>
            </div>
          </div>
        )}

        {activeTab === 'explorer' && (
          <CareerExplorer
            selectedCareer={selectedCareer}
            onSelectCareer={updateSelectedCareer}
            onGoToGapAnalysis={(c) => {
              updateSelectedCareer(c);
              setActiveTab('skill-gap');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onGoToRoadmap={(c) => {
              updateSelectedCareer(c);
              setActiveTab('roadmap');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'skill-gap' && (
          <SkillGapAnalysis
            selectedCareer={selectedCareer}
            onSelectCareer={updateSelectedCareer}
            userSkills={
              result
                ? result.skillScores
                : {
                    'Digital Skills': 60,
                    Communication: 60,
                    'Analytical Thinking': 60,
                    'Problem Solving': 60,
                    Leadership: 60,
                    Creativity: 60,
                    Teamwork: 60,
                    'Continuous Learning': 60,
                  }
            }
            hasCompletedAssessment={Boolean(result)}
            background={background}
            roadmapSteps={roadmapSteps}
            onToggleStepCompletion={handleToggleStepCompletion}
            onBackToExplorer={() => {
              setActiveTab('explorer');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onViewMyResults={() => {
              setActiveTab('results');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onProceedToRoadmap={(c) => {
              updateSelectedCareer(c);
              const roadmapEl = document.getElementById('personalized-roadmap-section');
              if (roadmapEl) {
                roadmapEl.scrollIntoView({ behavior: 'smooth' });
              } else {
                setActiveTab('roadmap');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          />
        )}

        {activeTab === 'roadmap' && (
          <PersonalizedRoadmap
            selectedCareer={selectedCareer}
            onSelectCareer={updateSelectedCareer}
            background={background}
            roadmapSteps={roadmapSteps}
            onToggleStepCompletion={handleToggleStepCompletion}
            onBackToExplorer={() => {
              setActiveTab('explorer');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onViewMyResults={() => {
              setActiveTab('results');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onGoToDashboard={() => {
              setActiveTab('dashboard');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'dashboard' && (
          <ProgressDashboard
            background={background}
            result={result}
            selectedCareer={selectedCareer}
            roadmapSteps={roadmapSteps}
            hasCompletedAssessment={hasCompletedAssessment}
            onExploreCareersAgain={() => {
              setActiveTab('explorer');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onReviewSkillGap={() => {
              setActiveTab('skill-gap');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onViewMyRoadmap={() => {
              setActiveTab('roadmap');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onStartAgain={handleStartAgain}
            setActiveTab={setActiveTab}
          />
        )}
      </main>

      {/* Footer (Story Presentation · Presenter: Shruti Babar) */}
      <Footer onNavigateTab={setActiveTab} />
    </div>
  );
}
