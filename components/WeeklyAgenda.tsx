import React from 'react';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/siteContent';

const getUpcomingDates = () => {
  const dates = [];
  const today = new Date();
  const dayOfWeek = today.getDay();

  let daysUntilWed = (3 - dayOfWeek + 7) % 7;

  const startDate = new Date(today);
  startDate.setDate(today.getDate() + daysUntilWed);

  for (let i = 0; i < 5; i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    dates.push({
      dayNum: d.getDate(),
      month: d.toLocaleString('nl-NL', { month: 'short' }).replace('.', '').toUpperCase()
    });
  }
  return dates;
};

const dateList = getUpcomingDates();

const WeeklyAgenda: React.FC = () => {
  return (
    <section id="agenda" className="py-20 bg-koetsier-dark relative min-h-[60vh]">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-koetsier-gold mb-3">
            <CalendarDays size={20} />
            <span className="uppercase tracking-widest text-sm font-bold">Weekplanning</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-koetsier-cream mb-4">
            De Koetsier <span className="italic text-koetsier-gold">Agenda</span>
          </h2>
          <div className="w-24 h-1 bg-koetsier-gold mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          {siteContent.agenda.map((item, index) => {
            const date = dateList[index];
            return (
              <div
                key={index}
                className={`group relative flex flex-col md:flex-row gap-10 p-10 md:p-12 rounded-sm transition-all duration-500 hover:transform hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-stone-800/80 hover:border-koetsier-gold/60 ${item.color} ${item.highlight ? 'shadow-2xl shadow-amber-900/30 ring-2 ring-koetsier-gold/40' : 'bg-stone-900/20'}`}
              >
                {/* Date Column */}
                <div className="flex-shrink-0 flex md:flex-col items-center justify-center md:justify-center gap-4 md:gap-2 md:w-40 border-b md:border-b-0 md:border-r border-stone-800 pb-8 md:pb-0 md:pr-10">
                  <span className="font-serif text-6xl md:text-7xl font-bold text-koetsier-cream group-hover:text-koetsier-gold transition-colors">{date.dayNum}</span>
                  <div className="flex flex-col items-center md:items-start">
                    <span className="text-lg font-bold uppercase tracking-[0.3em] text-koetsier-gold">{date.month}</span>
                    <span className="text-stone-500 text-sm font-semibold uppercase tracking-widest hidden md:block">{item.day}</span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="flex-grow py-3">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                    <h3 className={`font-serif text-4xl md:text-5xl font-bold transition-all duration-300 ${item.highlight ? 'text-koetsier-gold-light' : 'text-koetsier-cream group-hover:text-koetsier-gold'}`}>
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-4 text-stone-200 bg-white/10 py-2 px-5 rounded-full text-base font-bold border border-white/20 shrink-0">
                      <Clock size={20} className="text-koetsier-gold" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                  <p className="text-stone-300 text-xl leading-relaxed max-w-3xl font-light italic">
                    {item.description}
                  </p>
                </div>

                {/* Action/Icon Column */}
                <div className="flex-shrink-0 flex items-center justify-center md:w-32 mt-6 md:mt-0">
                  <div className="p-7 bg-stone-900/90 rounded-sm text-koetsier-gold border border-stone-700/50 group-hover:bg-koetsier-gold group-hover:text-white group-hover:border-koetsier-gold transition-all duration-700 shadow-2xl scale-110">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 40 })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="inline-block border border-koetsier-gold text-koetsier-gold hover:bg-koetsier-gold hover:text-white px-8 py-3 rounded-sm uppercase tracking-widest transition-all duration-300 font-bold">
            Reserveer een tafel
          </a>
        </div>
      </div>
    </section>
  );
};

export default WeeklyAgenda;