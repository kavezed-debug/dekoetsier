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
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-white drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]">
              Welkom in de <br />
              <span className="italic text-koetsier-gold-light text-4xl md:text-6xl lg:text-7xl">huiskamer van Loenen</span>
            </h1>
          </div>

          <p className="text-lg md:text-2xl text-stone-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
            Gezelligheid, borrelen en heerlijk dineren bij Gijs. <br className="hidden md:block" />
            Dé plek waar Loenen thuiskomt en geniet.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <a href="#contact" className="bg-koetsier-gold hover:bg-amber-700 text-white font-bold py-5 px-14 rounded-sm uppercase tracking-widest transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 text-lg">
              Reserveer Tafel
            </a>
            <a href="#/menu" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold py-5 px-12 rounded-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:border-koetsier-gold/50 text-lg">
              <Utensils size={22} className="text-koetsier-gold" />
              Menukaart
            </a>
          </div>
        </div>
      </div>

      {/* Floating Activity Card - Responsive: Centered botton on mobile, Right-floating on desktop */}
      <div className="absolute bottom-24 left-4 right-4 xl:bottom-auto xl:left-auto xl:right-16 xl:top-1/2 xl:-translate-y-1/2 w-full max-w-[calc(100%-2rem)] md:max-w-md xl:max-w-[550px] mx-auto xl:mx-0 z-30">
        <div key={currentActivityIndex} className="animate-card bg-black/70 backdrop-blur-3xl border border-white/10 p-6 md:p-8 xl:p-16 rounded-sm shadow-[0_40px_100px_rgba(0,0,0,0.9)] relative overflow-hidden group">
          {/* Very subtle glow */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-koetsier-gold/5 rounded-full blur-3xl group-hover:bg-koetsier-gold/10 transition-colors"></div>

          <div className="flex justify-between items-start mb-4 md:mb-6 xl:mb-10 relative z-10">
            <div className="space-y-1 xl:space-y-2">
              <span className="text-koetsier-gold text-[10px] md:text-xs xl:text-sm font-bold uppercase tracking-[0.3em]">Binnenkort</span>
              <div className="flex items-center gap-2 xl:gap-3 text-stone-300 text-xs md:text-sm xl:text-lg font-semibold">
                <span>{currentActivity.day}</span>
                <span className="w-1 xl:w-1.5 h-1 xl:h-1.5 bg-koetsier-gold rounded-full"></span>
                <span className="text-koetsier-gold-light">{dateList[currentActivityIndex]}</span>
              </div>
            </div>
            <div className="p-2 md:p-3 xl:p-4 bg-koetsier-gold/20 rounded-full text-koetsier-gold shadow-2xl">
              {React.cloneElement(currentActivity.icon as React.ReactElement<any>, { size: 24, className: "xl:hidden" })}
              {React.cloneElement(currentActivity.icon as React.ReactElement<any>, { size: 32, className: "hidden xl:block" })}
            </div>
          </div>

          <h2 className="font-serif text-2xl md:text-3xl xl:text-5xl font-bold text-koetsier-cream mb-2 xl:mb-4 group-hover:text-koetsier-gold transition-colors duration-500 leading-tight">
            {currentActivity.title}
          </h2>

          <div className="flex items-center gap-2 md:gap-4 text-stone-300 text-xs md:text-sm xl:text-lg mb-4 md:mb-6 xl:mb-10 border-b border-white/20 pb-4 md:pb-6 xl:pb-10">
            <Clock size={16} className="text-koetsier-gold xl:hidden" />
            <Clock size={20} className="text-koetsier-gold hidden xl:block" />
            <span>{currentActivity.time}</span>
          </div>

          <p className="text-white/80 text-xs md:text-sm xl:text-xl leading-relaxed mb-6 md:mb-8 xl:mb-12 italic line-clamp-2 xl:line-clamp-none">
            "{currentActivity.description}"
          </p>

          <button
            onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 md:gap-4 text-koetsier-gold font-bold uppercase tracking-widest text-[10px] md:text-xs xl:text-sm hover:text-white transition-all duration-300 transform hover:translate-x-2"
          >
            Bekijk volledige agenda <ArrowRight size={16} className="xl:hidden group-hover:translate-x-2 transition-transform" />
            <ArrowRight size={20} className="hidden xl:block group-hover:translate-x-3 transition-transform" />
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