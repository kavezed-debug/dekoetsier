'use client';

import React, { useState, useEffect } from 'react';
import { CalendarCheck } from 'lucide-react';

const FloatingReservationBtn: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToReservation = () => {
        const element = document.getElementById('reserveren');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50'
                }`}
        >
            <button
                onClick={scrollToReservation}
                className="group relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-koetsier-gold text-white rounded-full shadow-[0_10px_40px_rgba(200,166,104,0.4)] hover:bg-koetsier-gold-light hover:scale-110 active:scale-95 transition-all duration-300"
                aria-label="Online Reserveren"
            >
                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-full bg-koetsier-gold animate-ping opacity-25"></div>

                <CalendarCheck size={28} className="relative z-10 md:hidden" />
                <CalendarCheck size={32} className="relative z-10 hidden md:block" />

                {/* Tooltip */}
                <div className="absolute right-full mr-4 bg-koetsier-dark text-white px-4 py-2 rounded-sm text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap border border-koetsier-gold/30">
                    Reserveer Online
                </div>
            </button>
        </div>
    );
};

export default FloatingReservationBtn;
