import React, { useEffect, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Below-the-fold components code-split for minimal initial bundle size
const CursorGlow = lazy(() => import('./components/CursorGlow'));
const SplashScreen = lazy(() => import('./components/SplashScreen'));
const ScrollProgress = lazy(() => import('./components/ScrollProgress'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const DigitalWeddingCard = lazy(() => import('./components/DigitalWeddingCard'));
const Gallery = lazy(() => import('./components/Gallery'));
const VideoHighlights = lazy(() => import('./components/VideoHighlights'));
const WhyUs = lazy(() => import('./components/WhyUs'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const FloatingButtons = lazy(() => import('./components/FloatingButtons'));

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0518] text-slate-100 font-sans selection:bg-[#d4af37] selection:text-[#0d0518] relative">
      <Suspense fallback={null}>
        <ScrollProgress />
        <CursorGlow />
        <SplashScreen duration={2500} />
      </Suspense>

      {/* Sticky Header Navbar & Instant Hero Render */}
      <Navbar />

      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-[300px] bg-[#0d0518]" />}>
          <About />
          <Services />
          <DigitalWeddingCard />
          <Gallery />
          <VideoHighlights />
          <WhyUs />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <FloatingButtons />
      </Suspense>
    </div>
  );
}

export default App;
