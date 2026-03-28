import React from 'react';
import './index.css';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';

import Curriculum from './components/Curriculum';
import LearningMethod from './components/LearningMethod';
import Projects from './components/Projects';
import Instructors from './components/Instructors';
import TargetAudience from './components/TargetAudience';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <Curriculum />
        <LearningMethod />
        <Projects />
        <Instructors />
        <TargetAudience />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;
