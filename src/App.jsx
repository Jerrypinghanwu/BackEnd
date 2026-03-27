import React, { Suspense, lazy } from 'react';
import './index.css';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';

// Lazy loaded components (below the fold)
const Curriculum = lazy(() => import('./components/Curriculum'));
const LearningMethod = lazy(() => import('./components/LearningMethod'));
const Projects = lazy(() => import('./components/Projects'));
const Instructors = lazy(() => import('./components/Instructors'));
const TargetAudience = lazy(() => import('./components/TargetAudience'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Footer = lazy(() => import('./components/Footer'));

// Simple loading placeholder
const SectionLoader = () => (
  <div style={{ padding: '60px 0', textAlign: 'center', color: '#94a3b8' }}>
    載入中...
  </div>
);

function App() {
  return (
    <>
      <Header />
      <main>
        {/* HeroBanner is critical for LCP, so it's loaded eagerly */}
        <HeroBanner />
        
        {/* Defer non-critical sections */}
        <Suspense fallback={<SectionLoader />}>
          <Curriculum />
          <LearningMethod />
          <Projects />
          <Instructors />
          <TargetAudience />
          <Testimonials />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
