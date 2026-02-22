'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '../data/siteContent';

const MenuHighlights: React.FC = () => {
  return (
    <section className="py-24 bg-koetsier-panel text-white">
      <div className="container mx-auto px-4 sm:px-6">

        <div className="text-center mb-16">
          <span className="text-koetsier-gold uppercase tracking-widest text-sm font-bold">De Hardlopers</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2">
            Proef de <span className="italic text-koetsier-gold">Ambacht</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {siteContent.highlights.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-sm mb-6 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-4 right-4 bg-koetsier-gold text-white font-bold px-3 py-1 rounded-sm shadow-md">
                  {item.price}
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-koetsier-gold transition-colors">{item.title}</h3>
              <p className="text-stone-400 leading-relaxed mb-4">{item.description}</p>
              <span className="inline-flex items-center text-koetsier-gold text-sm font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                Probeer nu <ArrowRight size={16} className="ml-2" />
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-stone-400 text-sm mb-4">Kom langs voor onze volledige kaart</p>
          <a href="#contact" className="border-2 border-koetsier-cream text-koetsier-cream hover:bg-koetsier-cream hover:text-koetsier-dark font-bold py-4 px-10 rounded-sm uppercase tracking-widest transition-all duration-300 inline-block">
            Reserveer een tafel
          </a>
        </div>

      </div>
    </section>
  );
};

export default MenuHighlights;