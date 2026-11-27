import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/common/Header'
import BottomNav from './components/common/BottomNav'
import HomePage from './pages/HomePage'
import LearnPage from './pages/LearnPage'
import LessonPage from './pages/LessonPage'
import QuizPage from './pages/QuizPage'
import PracticePage from './pages/PracticePage'
import ChallengesPage from './pages/ChallengesPage'
import GalleryPage from './pages/GalleryPage'
import DashboardPage from './pages/DashboardPage'
import { LearningProvider } from './context'

// Automatically scrolls to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <LearningProvider>
      <div className="min-h-screen bg-[#F2EBDD] text-[#242321] flex flex-col justify-between overflow-x-hidden w-full max-w-full selection:bg-[#C77B43] selection:text-[#242321]">
        <ScrollToTop />
        
        {/* Editorial Top Masthead */}
        <Header />

        {/* Main Editorial Canvas Container */}
        <main className="max-w-7xl mx-auto px-3.5 sm:px-8 py-5 sm:py-10 flex-1 w-full max-w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/learn/:courseId/:lessonId" element={<LessonPage />} />
            <Route path="/learn/:courseId/quiz" element={<QuizPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>

        {/* Editorial Colophon / Footer */}
        <footer className="border-t border-[#DCD3C4] bg-[#F2EBDD] py-6 sm:py-8 px-4 sm:px-8 text-xs text-[#6E675D] mb-16 md:mb-0 w-full">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
              <span className="font-mono text-xs text-[#C77B43] font-semibold">ƒ/1.8</span>
              <span className="font-serif font-bold text-[#242321] tracking-wide">PHOTOGRAPHY ACADEMY</span>
              <span className="hidden sm:inline">&bull;</span>
              <span className="font-sans italic text-[#6E675D]">Learn to See Differently.</span>
            </div>

            <div className="font-mono text-[10px] sm:text-[11px] text-[#6E675D]">
              ARCHIVAL PRINT EDITION &bull; 2026
            </div>
          </div>
        </footer>

        {/* Mobile Persistent Navigation */}
        <BottomNav />
      </div>
    </LearningProvider>
  )
}
