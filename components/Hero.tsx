'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Utensils, Clock, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/siteContent';

const Hero: React.FC = () => {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

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
    setIsMounted(true);
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
      <div className="relative z-30 w-full h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-center">
        {/* Main Text Content */}
        <div className="text-center space-y-8 max-w-4xl relative z-40">
          <div className="space-y-4">
            <span className="block text-koetsier-gold uppercase tracking-[0.5em] text-xs md:text-sm animate-fade-in-up font-bold">
              Sinds 1994 <span className="text-[8px] opacity-20">(v1.1)</span>
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-white drop-shadow-2xl">
              Welkom in de <br />
              <span className="italic text-koetsier-gold-light text-4xl md:text-6xl lg:text-7xl">huiskamer van Loenen</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-stone-200 max-w-lg mx-auto font-light leading-relaxed drop-shadow-lg">
            Gezelligheid, borrelen en heerlijk dineren bij Gijs. <br className="hidden md:block" />
            Dé plek waar Loenen thuiskomt en geniet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a href="#contact" className="bg-koetsier-gold hover:bg-amber-700 text-white font-bold py-4 px-12 rounded-sm uppercase tracking-widest transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 text-base">
              Reserveer Tafel
            </a>
            <a href="#/menu" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold py-4 px-10 rounded-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:border-koetsier-gold/50 text-base">
              <Utensils size={20} className="text-koetsier-gold" />
              Menukaart
            </a>
          </div>
        </div>
      </div>

      {/* Floating Activity Card - Responsive: Centered botton on mobile, Right-floating on desktop */}
      {/* Floating Activity Card - Responsive: Centered bottom on mobile, Right-floating on desktop */}
      <div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-10 lg:top-1/2 lg:-translate-y-1/2 w-[calc(100%-2rem)] md:max-w-sm lg:max-w-[360px] xl:max-w-[420px] z-50 transition-all duration-500">
        <div key={currentActivityIndex} className="animate-card bg-black/70 backdrop-blur-3xl border border-white/10 p-5 md:p-6 lg:p-7 xl:p-10 rounded-sm shadow-[0_40px_100px_rgba(0,0,0,0.9)] relative overflow-hidden group">
          {/* Very subtle glow */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-koetsier-gold/5 rounded-full blur-3xl group-hover:bg-koetsier-gold/10 transition-colors"></div>

          <div className="flex justify-between items-start mb-4 md:mb-5 lg:mb-6 xl:mb-10 relative z-10">
            <div className="space-y-1 lg:space-y-1.5 xl:space-y-2">
              <span className="text-koetsier-gold text-[10px] md:text-[11px] lg:text-xs xl:text-sm font-bold uppercase tracking-[0.3em]">Binnenkort</span>
              <div className="flex items-center gap-2 lg:gap-2.5 xl:gap-3 text-stone-300 text-[10px] md:text-xs lg:text-sm xl:text-lg font-semibold h-6">
                {isMounted && (
                  <>
                    <span>{currentActivity.day}</span>
                    <span className="w-1 lg:w-1.25 xl:w-1.5 h-1 lg:h-1.25 xl:h-1.5 bg-koetsier-gold rounded-full"></span>
                    <span className="text-koetsier-gold-light">{dateList[currentActivityIndex]}</span>
                  </>
                )}
              </div>
            </div>
            <div className="p-2.5 md:p-3 lg:p-4 xl:p-5 bg-koetsier-gold/20 rounded-full text-koetsier-gold shadow-2xl">
              {React.cloneElement(currentActivity.icon as React.ReactElement<any>, { size: 28 })}
            </div>
          </div>

          <h2 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-koetsier-cream mb-2 lg:mb-2.5 xl:mb-3 group-hover:text-koetsier-gold transition-colors duration-500 leading-tight">
            {currentActivity.title}
          </h2>

          <div className="flex items-center gap-2 md:gap-3 lg:gap-4 text-stone-300 text-[10px] md:text-xs lg:text-sm xl:text-lg mb-3 md:mb-4 lg:mb-6 xl:mb-10 border-b border-white/20 pb-3 md:pb-4 lg:pb-6 xl:pb-10">
            <Clock size={14} className="text-koetsier-gold" />
            <span>{currentActivity.time}</span>
          </div>

          <p className="text-white/80 text-[10px] md:text-xs lg:text-sm xl:text-base leading-relaxed mb-4 md:mb-6 lg:mb-8 xl:mb-10 italic line-clamp-2">
            "{currentActivity.description}"
          </p>

          <button
            onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 md:gap-3 lg:gap-4 text-koetsier-gold font-bold uppercase tracking-widest text-[9px] md:text-[10px] lg:text-xs xl:text-sm hover:text-white transition-all duration-300 transform hover:translate-x-2"
          >
            Bekijk volledige agenda <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#contact"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-koetsier-gold transition-colors animate-bounce cursor-pointer z-40"
      >
        <ChevronDown size={40} />
      </a>
    </section>
  );
};

export default Hero;