import React, { useEffect, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';
import GhostCursor from './components/GhostCursor';
import SplashCursor from './components/SplashCursor';

// Below-the-fold components code-split for minimal initial bundle size
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
    <div className="min-h-screen bg-purple-950 text-slate-100 font-sans selection:bg-amber-400 selection:text-purple-950 relative">
      {/* Ghost Cursor Ethereal Fluid Trail */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <GhostCursor
          color="#f5c451"
          brightness={1.15}
          edgeIntensity={0}
          trailLength={50}
          inertia={0.5}
          grainIntensity={0.04}
          bloomStrength={0.12}
          bloomRadius={1.0}
          bloomThreshold={0.025}
          mixBlendMode="screen"
          zIndex={10}
        />
      </div>

      {/* Root Custom Animated Cursor */}
      <CustomCursor />

      {/* Interactive WebGL Fluid Splash Cursor */}
      <SplashCursor
        SIM_RESOLUTION={64}
        DYE_RESOLUTION={512}
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        RAINBOW_MODE={true}
        COLOR="#f5c451"
      />

      <Suspense fallback={null}>
        <ScrollProgress />
        <SplashScreen duration={950} />
      </Suspense>

      {/* Sticky Header Navbar & Hero */}
      <Navbar />

      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-[300px] bg-purple-950" />}>
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
