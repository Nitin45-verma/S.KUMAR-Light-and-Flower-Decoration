import React from 'react';
import CursorGlow from './components/CursorGlow';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import VideoHighlights from './components/VideoHighlights';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen bg-[#0d0518] text-slate-100 font-sans selection:bg-[#d4af37] selection:text-[#0d0518] relative">
      {/* Golden Glowing Cursor Aura */}
      <CursorGlow />

      {/* 2.5s Full Screen Royal Splash Animation */}
      <SplashScreen duration={2500} />

      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <VideoHighlights />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>

      {/* Royal Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingButtons />
    </div>
  );
}

export default App;
