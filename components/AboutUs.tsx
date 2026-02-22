import React from 'react';
import { siteContent } from '../data/siteContent';

const AboutUs: React.FC = () => {
  return (
    <section className="py-20 bg-stone-100 text-koetsier-dark overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="/gijs.webp"
                alt="Gijs Vermeulen, eigenaar van Café De Koetsier"
                className="w-full h-auto object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-koetsier-gold/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            {/* Decoration box */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-koetsier-gold/5 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-koetsier-gold/30 z-0 hidden md:block group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-3 text-koetsier-gold mb-4">
              <div className="w-10 h-px bg-koetsier-gold"></div>
              <span className="uppercase tracking-[0.3em] text-xs font-bold">Onze Historie</span>
            </div>

            <h2 className="font-serif text-4xl lg:text-6xl font-bold mt-2 mb-10 text-koetsier-dark leading-[1.1]">
              Welkom bij <br />
              <span className="italic text-stone-400 font-light">De Koetsier</span>
            </h2>

            <div className="relative">
              {/* Large quotation mark decoration */}
              <div className="absolute -top-10 -left-8 text-8xl text-koetsier-gold/10 font-serif select-none">"</div>

              <p className="text-xl md:text-2xl text-stone-700 leading-relaxed font-light italic mb-10">
                {siteContent.about.description}
              </p>

              {/* Personal Introduction Section */}
              <div className="pt-8 border-t border-stone-200 mt-10">
                <h3 className="font-serif text-2xl text-koetsier-gold mb-4 italic">
                  {siteContent.about.introTitle}
                </h3>
                <div className="space-y-4">
                  {siteContent.about.introText.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-lg text-stone-600 leading-relaxed font-light">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8 pt-10 mt-10 border-t border-stone-200">
                <div className="flex flex-col">
                  <p className="font-serif text-3xl text-koetsier-dark">Gijs Vermeulen</p>
                  <p className="text-koetsier-gold text-sm font-bold uppercase tracking-widest mt-1">Eigenaar & Gastheer</p>
                </div>

                <a
                  href="#/menu"
                  className="bg-koetsier-dark hover:bg-koetsier-gold text-white px-8 py-4 rounded-sm uppercase tracking-widest font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block sm:ml-auto"
                >
                  Bekijk het menu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;