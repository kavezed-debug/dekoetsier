import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WeeklyAgenda from './components/WeeklyAgenda';
import AboutUs from './components/AboutUs';
import MenuHighlights from './components/MenuHighlights';
import Reservations from './components/Reservations';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import FloatingReservationBtn from './components/FloatingReservationBtn';
import FullMenu from './components/FullMenu';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  // Handle scroll for navbar transparency effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple routing logic based on hash or state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';

      if (hash === '#agenda') {
        setCurrentPath('/');
        // Small delay to ensure render is complete before scrolling
        setTimeout(() => {
          const element = document.getElementById('agenda');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
        return;
      }

      const path = hash.replace('#', '');
      if (path === '/menu' || path === '/over-ons') {
        setCurrentPath(path);
      } else {
        setCurrentPath('/');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (path: string) => {
    if (path === '/') {
      window.location.hash = '';
    } else {
      window.location.hash = path;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans selection:bg-koetsier-gold selection:text-white">
      <Navbar scrolled={scrolled} currentPath={currentPath} onNavigate={navigateTo} />

      <main className="flex-grow">
        {currentPath === '/menu' ? (
          <div className="pt-24 min-h-screen bg-koetsier-dark">
            <FullMenu />
          </div>
        ) : currentPath === '/over-ons' ? (
          <div className="pt-24 min-h-screen bg-stone-100">
            <AboutUs />
          </div>
        ) : (
          <>
            <Hero />
            <AboutUs />
            <WeeklyAgenda />
            <Reservations />
            <MenuHighlights />
          </>
        )}
      </main>

      <Footer />
      <FloatingCTA />
      <FloatingReservationBtn />
    </div>
  );
}