'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Utensils, Clock, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/siteContent';

const Hero: React.FC = () => {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  // Date calculation logic
  const getUpcomingDates = () => {
    const dates = [];
    const today = new Date();
    const dayOfWeek = today.getDay();
    let daysUntilWed = (3 - dayOfWeek + 7) % 7;
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + daysUntilWed);

    for (let i = 0; i < siteContent.agenda.length; i++) {
      const d = new Date(startDate);
      d.setDate(startDate.getDate() + i);
      dates.push(`${d.getDate()} ${d.toLocaleString('nl-NL', { month: 'short' }).replace('.', '').toUpperCase()}`);
    }
    return dates;
  };

  const dateList = getUpcomingDates();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentActivityIndex((prev) => (prev + 1) % siteContent.agenda.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentActivity = siteContent.agenda[currentActivityIndex];

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Multi-stage Cinematic Animation */}
      <style>
        {`
          @keyframes exterior-zoom {
            0% { opacity: 0; transform: scale(1); }
            5% { opacity: 1; }
            30% { opacity: 1; transform: scale(1.3); }
            35% { opacity: 0; transform: scale(1.5); }
            100% { opacity: 0; }
          }
          @keyframes interior-reveal {
            0% { opacity: 0; transform: scale(1.1); }
            30% { opacity: 0; transform: scale(1.1); }
            35% { opacity: 1; transform: scale(1.05); }
            60% { opacity: 1; transform: scale(1); }
            65% { opacity: 0; transform: scale(1); }
            100% { opacity: 0; }
          }
          @keyframes terrace-walkback {
            0% { opacity: 0; transform: scale(1.4); }
            60% { opacity: 0; transform: scale(1.4); }
            65% { opacity: 1; transform: scale(1.2); }
            95% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(1); }
          }

          @keyframes card-fly-in {
            0% { opacity: 0; transform: translate(150px, 150px) scale(0.8) rotate(10deg); }
            15% { opacity: 1; transform: translate(-20px, -10px) scale(1.05) rotate(-2deg); }
            25% { transform: translate(0, 0) scale(1) rotate(0deg); }
            90% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: translateY(-20px) scale(0.95); }
          }

          .animate-exterior { animation: exterior-zoom 24s infinite; }
          .animate-interior { animation: interior-reveal 24s infinite; }
          .animate-terrace { animation: terrace-walkback 24s infinite; }
          .animate-card { animation: card-fly-in 4s infinite cubic-bezier(0.34, 1.56, 0.64, 1); }
        `}
      </style>

      {/* Background Layers - Darkened */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-koetsier-dark">
        <img src="/fotobuitenkant.webp" alt="" className="absolute inset-0 w-full h-full object-cover animate-exterior" />
        <img src="/interieur.webp" alt="" className="absolute inset-0 w-full h-full object-cover animate-interior" />
        <img src="/terras.webp" alt="" className="absolute inset-0 w-full h-full object-cover animate-terrace" />
        <div className="absolute inset-0 bg-black/65 z-10"></div>
      </div>

      {/* Main Content Container - Perfectly Centered */}
      <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-center">
        {/* Main Text Content */}
        <div className="text-center space-y-8 max-w-4xl relative z-10">
          <div className="space-y-4">
            <span className="block text-koetsier-gold uppercase tracking-[0.5em] text-xs md:text-sm animate-fade-in-up font-bold">
              Sinds 1994
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-white drop-shadow-2xl">
              Welkom in de <br />
              <span className="italic text-koetsier-gold-light text-4xl md:text-6xl lg:text-7xl">huiskamer van Loenen</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-stone-200 max-w-lg mx-auto font-light leading-relaxed drop-shadow-md">
            Gezelligheid, borrelen en heerlijk dineren bij Gijs. <br className="hidden md:block" />
            Dé plek waar Loenen thuiskomt en geniet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a href="#contact" className="bg-koetsier-gold hover:bg-amber-700 text-white font-bold py-4 px-12 rounded-sm uppercase tracking-widest transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95">
              Reserveer Tafel
            </a>
            <a href="#/menu" className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold py-4 px-10 rounded-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:border-koetsier-gold/50">
              <Utensils size={18} className="text-koetsier-gold" />
              Menukaart
            </a>
          </div>
        </div>
      </div>

      {/* Floating Activity Card - Anchored to Viewport Edge (Desktop Only) */}
      <div className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 hidden xl:block w-full max-w-[280px] z-30">
        <div key={currentActivityIndex} className="animate-card bg-black/40 backdrop-blur-md border border-white/10 p-5 rounded-sm shadow-2xl relative overflow-hidden group">
          {/* Very subtle glow */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-koetsier-gold/5 rounded-full blur-3xl group-hover:bg-koetsier-gold/10 transition-colors"></div>

          <div className="flex justify-between items-start mb-3 relative z-10">
            <div className="space-y-0.5">
              <span className="text-koetsier-gold text-[9px] font-bold uppercase tracking-[0.2em]">Binnenkort</span>
              <div className="flex items-center gap-1 text-stone-400 text-[10px] font-semibold">
                <span>{currentActivity.day}</span>
                <span className="w-0.5 h-0.5 bg-stone-600 rounded-full"></span>
                <span className="text-koetsier-gold-light">{dateList[currentActivityIndex]}</span>
              </div>
            </div>
            {currentActivity?.icon && (
              <div className="p-1.5 bg-koetsier-gold/10 rounded-full text-koetsier-gold">
                {React.isValidElement(currentActivity.icon) && React.cloneElement(currentActivity.icon as any, { size: 14 })}
              </div>
            )}
          </div>

          <h2 className="font-serif text-lg font-bold text-koetsier-cream mb-1.5 truncate">
            {currentActivity?.title}
          </h2>

          <div className="flex items-center gap-2 text-stone-500 text-[10px] mb-3 border-b border-white/5 pb-3">
            <Clock size={10} className="text-koetsier-gold/50" />
            <span>{currentActivity?.time}</span>
          </div>

          <p className="text-white/60 text-[11px] leading-relaxed mb-5 italic line-clamp-2">
            "{currentActivity?.description}"
          </p>

          <button
            onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 text-koetsier-gold/80 font-bold uppercase tracking-widest text-[9px] hover:text-white transition-colors"
          >
            Alle activiteiten <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#contact"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-koetsier-gold transition-colors animate-bounce cursor-pointer z-20"
      >
        <ChevronDown size={40} />
      </a>
    </section>
  );
};

export default Hero;