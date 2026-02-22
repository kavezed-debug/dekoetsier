import React from 'react';
import { CalendarCheck, MapPin } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-40 md:hidden bg-koetsier-dark border-t border-stone-800 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
      <div className="flex h-16">
        {/* Linker Knop: Direct Reserveren (Groen/Opvallend) */}
        <a 
          href="#reserveren" 
          className="flex-1 flex flex-col items-center justify-center bg-green-700 text-white hover:bg-green-800 transition-colors"
        >
          <CalendarCheck size={20} className="mb-1" />
          <span className="text-xs font-bold uppercase tracking-wider">Reserveer</span>
        </a>
        
        {/* Rechter Knop: Routebeschrijving (Neutraal) */}
        <a 
          href="https://www.google.com/maps/dir//Rijksstraatweg+106A,+3632+AD+Loenen+aan+de+Vecht" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-white transition-colors border-l border-stone-700"
        >
          <MapPin size={20} className="mb-1" />
          <span className="text-xs font-bold uppercase tracking-wider">Route</span>
        </a>
      </div>
    </div>
  );
};

export default FloatingCTA;