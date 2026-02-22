'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { siteContent } from '../data/siteContent';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-koetsier-dark pt-20 pb-10 border-t border-stone-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Column 1: Address */}
          <div className="text-center md:text-left">
            <h4 className="font-serif text-2xl text-koetsier-gold mb-6">Locatie</h4>
            <div className="flex flex-col items-center md:items-start gap-4 text-stone-400">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-koetsier-gold" size={20} />
                <p>
                  {siteContent.contact.address}<br />
                  {siteContent.contact.city}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-koetsier-gold" size={20} />
                <p>{siteContent.contact.phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-koetsier-gold" size={20} />
                <p>{siteContent.contact.email}</p>
              </div>
            </div>
          </div>

          {/* Column 2: Hours */}
          <div className="text-center">
            <h4 className="font-serif text-2xl text-koetsier-gold mb-6">Openingstijden</h4>
            <div className="inline-block text-left text-stone-400 space-y-2 w-full max-w-[240px]">
              {siteContent.openingHours.map((item) => (
                <div key={item.day} className="flex justify-between border-b border-stone-800/50 pb-1.5 text-sm">
                  <span className="text-stone-500">{item.day}</span>
                  <span className={item.hours === 'Gesloten' ? 'text-stone-600 italic' : 'text-koetsier-cream font-medium'}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Socials & Logo */}
          <div className="text-center md:text-right flex flex-col items-center md:items-end">
            <div className="mb-6">
              <span className="font-serif text-3xl font-bold text-koetsier-cream block">DE KOETSIER</span>
              <span className="text-xs uppercase tracking-[0.2em] text-koetsier-gold-light">Sinds 1994</span>
            </div>
            <div className="flex gap-4">
              <a
                href={siteContent.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-koetsier-gold hover:text-white transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href={siteContent.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-koetsier-gold hover:text-white transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-stone-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Café De Koetsier. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;