'use client';

import React from 'react';
import { Phone, Mail, CalendarCheck } from 'lucide-react';
import { siteContent } from '../data/siteContent';

const Reservations: React.FC = () => {
    return (
        <section id="reserveren" className="py-24 bg-koetsier-dark relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-koetsier-gold font-bold uppercase tracking-[0.3em] text-sm mb-4 block animate-fade-in">Gastvrijheid</span>
                        <h2 className="font-serif text-4xl md:text-6xl text-koetsier-cream mb-8 leading-tight">
                            Reserveer uw <span className="italic text-koetsier-gold">Tafel</span>
                        </h2>
                        <div className="w-32 h-1 bg-koetsier-gold mx-auto mb-10"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                        {/* Direct Contact Column */}
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-sm shadow-2xl flex flex-col justify-between">
                            <div>
                                <h3 className="font-serif text-2xl text-koetsier-cream mb-6 border-b border-koetsier-gold/30 pb-4">
                                    Direct contact
                                </h3>
                                <p className="text-stone-300 text-lg leading-relaxed mb-8 font-light italic">
                                    "{siteContent.reservation.description}"
                                </p>
                            </div>

                            <div className="space-y-4">
                                <a
                                    href={`tel:${siteContent.contact.phone.replace(/-/g, '')}`}
                                    className="flex items-center gap-4 text-koetsier-cream hover:text-koetsier-gold transition-colors group p-3 bg-black/30 rounded-sm border border-white/5"
                                >
                                    <div className="p-3 bg-koetsier-gold/10 rounded-full text-koetsier-gold group-hover:bg-koetsier-gold group-hover:text-white transition-all">
                                        <Phone size={20} />
                                    </div>
                                    <span className="text-lg font-bold">{siteContent.contact.phone}</span>
                                </a>

                                <a
                                    href={`mailto:${siteContent.contact.email}`}
                                    className="flex items-center gap-4 text-koetsier-cream hover:text-koetsier-gold transition-colors group p-3 bg-black/30 rounded-sm border border-white/5"
                                >
                                    <div className="p-3 bg-koetsier-gold/10 rounded-full text-koetsier-gold group-hover:bg-koetsier-gold group-hover:text-white transition-all">
                                        <Mail size={20} />
                                    </div>
                                    <span className="text-lg font-bold">{siteContent.contact.email}</span>
                                </a>
                            </div>
                        </div>

                        {/* Online Booking Info Column */}
                        <div className="bg-koetsier-gold/5 border border-koetsier-gold/20 p-10 rounded-sm shadow-2xl flex flex-col items-center justify-center text-center">
                            <div className="p-6 bg-koetsier-gold/20 rounded-full text-koetsier-gold mb-8 animate-pulse">
                                <CalendarCheck size={48} />
                            </div>
                            <h3 className="font-serif text-3xl text-koetsier-cream mb-6">Online Boeken</h3>
                            <p className="text-stone-300 text-lg leading-relaxed mb-10 font-light">
                                {siteContent.reservation.onlineInfo}
                            </p>
                            <button
                                onClick={() => {
                                    // Functionality for the online button if any, 
                                    // for now just aesthetic or smooth scroll to bottom if needed
                                    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                                }}
                                className="w-full bg-koetsier-gold hover:bg-koetsier-gold-light text-koetsier-dark font-bold py-5 px-8 rounded-sm uppercase tracking-widest transition-all duration-300 shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Reserveer nu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reservations;
