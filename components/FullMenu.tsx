import React from 'react';

const menuData = {
    plank: {
        title: "Plank",
        subtitle: "Ideal om mee te beginnen",
        items: [
            {
                name: "De Koetsier mega borrelplank",
                description: "Chefs keuze! Onweerstaanbare borrelplank met wisselende lekkernijen te bestellen vanaf 2 personen",
                price: "19.50",
                perPerson: true
            }
        ]
    },
    voorgerechten: {
        title: "Voorgerechten",
        items: [
            { name: "Soep van de dag", description: "Dagelijks wisselende soep van de chef", price: "8.00" },
            { name: "Beef Tataki", description: "Met bladgember, wasabi en soja saus", price: "16.00" },
            { name: "Trio van zalm", description: "Zalm op drie manieren: gerookt, tartaar en sashimi", price: "16.00" },
            { name: "Camembert met korstje van Panko", description: "En een compot van blauwe bessen", price: "15.00" },
            { name: "Steak tartare", description: "Rundertartaar met in zout gedroogd eigeel, kappertjes, sjalotten en augurk", price: "16.00" },
            { name: "Gamba Pil Pil", description: "Met een pepertje gebakken geserveerd in een knoflookolie", price: "16.00" },
            { name: "Carpaccio van biet", description: "Met geitenkaas, ingelegde rode ui en balsamico siroop", price: "15.00" }
        ]
    },
    hoofdgerechten: {
        title: "Hoofdgerechten",
        items: [
            { name: "‘Steak frites’", description: "Met pepersaus of kruidenboter", price: "25.00" },
            { name: "Caraïbische kabeljauw", description: "Met mango-maissalsa en zwarte bonen rijst", price: "24.00" },
            { name: "Kaasfondue", description: "Met stokbrood, cherrytomaatjes en komkommer", price: "22.00" },
            { name: "Coquelet uit de oven", description: "Piepkuiken met Roseval aardappels en een saus van paddenstoelen en rode wijn", price: "25.00" },
            { name: "Lasagne", description: "Met Franse groente", price: "20.00" },
            { name: "Tagliata di manzo", description: "Runderbavette met rucola en Parmezaanse kaas", price: "25.00" },
            { name: "Saté de Koetsier", description: "Kippendij met frites en onze eigen overheerlijke satésaus", price: "18.00" }
        ]
    },
    erbij: {
        title: "Erbij",
        items: [
            { name: "Brood met boerenkruidenboter", price: "5.00" },
            { name: "Friet met mayonaise", price: "6.00" },
            { name: "Groene salade", price: "6.00" }
        ]
    },
    kleineKoetsier: {
        title: "KLEINE Koetsier",
        subtitle: "Voor onze kleinste gasten",
        items: [
            { name: "Frites met vissticks", price: "12.00" },
            { name: "Frites met bitterballen", price: "12.00" }
        ]
    },
    nagerechten: {
        title: "Nagerechten",
        items: [
            { name: "Bavaroise taart van mango", description: "Met ijs van passievrucht", price: "8.00" },
            { name: "Moelleux au chocolat", description: "Chocolade lava cakeje met vanille-roomijs en een brownie", price: "9.00" },
            { name: "Affogato", description: "Vanille-ijs en notenkruim, overgoten met espresso", price: "9.00" },
            { name: "Dame-Blanche", description: "Vanille-roomijs overgoten met warme chocoladesaus", price: "8.00" },
            { name: "Crème brûleé", description: "Met Grand Marnier", price: "8.00" },
            { name: "Scroppino", description: "Wodka, prosecco en citroenijs", price: "8.00", extra: "Karaf 1 lt - 35.00" }
        ]
    }
};

const FullMenu: React.FC = () => {
    return (
        <section className="py-20 bg-koetsier-dark min-h-screen text-koetsier-cream selection:bg-koetsier-gold relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-koetsier-gold/5 to-transparent pointer-events-none"></div>

            <style>
                {`
          @keyframes reveal-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-reveal {
            opacity: 0;
            animation: reveal-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          }
          .menu-item-hover:hover .item-line {
            width: 100%;
            background-color: rgba(212, 175, 55, 0.5);
          }
        `}
            </style>

            <div className="container mx-auto px-4 max-w-5xl relative z-10">

                {/* Header */}
                <div className="text-center mb-20 animate-reveal" style={{ animationDelay: '100ms' }}>
                    <div className="flex justify-center items-center gap-4 mb-4">
                        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-koetsier-gold"></div>
                        <span className="text-koetsier-gold uppercase tracking-[0.4em] text-xs font-bold block">Gastvrij & Eerlijk</span>
                        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-koetsier-gold"></div>
                    </div>
                    <h1 className="font-serif text-5xl md:text-8xl font-bold mb-6 text-white tracking-tight">De Menukaart</h1>
                    <div className="flex justify-center items-center gap-2">
                        <div className="w-12 h-[2px] bg-koetsier-gold"></div>
                        <div className="w-2 h-2 rotate-45 border border-koetsier-gold"></div>
                        <div className="w-12 h-[2px] bg-koetsier-gold"></div>
                    </div>
                </div>

                {/* Borrelplank Special */}
                <div
                    className="mb-20 bg-stone-900/30 backdrop-blur-sm border border-koetsier-gold/10 p-8 md:p-10 rounded-sm relative overflow-hidden group animate-reveal shadow-xl"
                    style={{ animationDelay: '300ms' }}
                >
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                        <span className="font-serif text-[8rem] italic leading-none">P</span>
                    </div>
                    <div className="relative z-10 text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                            <h2 className="font-serif text-3xl text-koetsier-gold">{menuData.plank.title}</h2>
                            <div className="hidden md:block flex-grow h-[1px] bg-gradient-to-r from-koetsier-gold/20 to-transparent"></div>
                        </div>
                        <p className="text-stone-500 uppercase tracking-[0.3em] text-[10px] mb-8 font-medium">{menuData.plank.subtitle}</p>
                        {menuData.plank.items.map((item, i) => (
                            <div key={i} className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
                                <div className="flex-grow max-w-xl">
                                    <h3 className="text-xl font-bold mb-2 text-white">{item.name}</h3>
                                    <p className="text-stone-400 font-light italic text-base leading-relaxed">{item.description}</p>
                                </div>
                                <div className="text-center md:text-right">
                                    <div className="text-2xl font-serif text-koetsier-gold mb-1">€ {item.price}</div>
                                    <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold border-t border-stone-800/50 pt-1 block">p.p. vanaf 2 pers.</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Regular Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-28">

                    {/* Voorgerechten */}
                    <div className="animate-reveal" style={{ animationDelay: '500ms' }}>
                        <div className="flex items-center gap-4 mb-10">
                            <h2 className="font-serif text-3xl text-white whitespace-nowrap">Voorgerechten</h2>
                            <div className="flex-grow h-[1px] bg-koetsier-gold/30"></div>
                        </div>
                        <div className="space-y-10">
                            {menuData.voorgerechten.items.map((item, i) => (
                                <div key={i} className="group menu-item-hover relative" style={{ animationDelay: `${600 + (i * 100)}ms` }}>
                                    <div className="flex justify-between items-end mb-2 relative z-10">
                                        <div className="flex flex-col">
                                            {item.name === "Steak tartare" && (
                                                <span className="text-[9px] uppercase tracking-[0.2em] text-koetsier-gold font-bold mb-1">Chefs keuze</span>
                                            )}
                                            <h3 className="font-bold text-lg text-stone-200 group-hover:text-koetsier-gold transition-all duration-300 transform group-hover:translate-x-1">{item.name}</h3>
                                        </div>
                                        <div className="flex-grow mx-4 h-[1px] border-b border-dotted border-stone-700 mb-1"></div>
                                        <span className="text-koetsier-gold font-serif text-lg">€ {item.price}</span>
                                    </div>
                                    <p className="text-sm text-stone-500 font-light leading-relaxed max-w-[85%]">{item.description}</p>
                                    <div className="item-line absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-500"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hoofdgerechten */}
                    <div className="animate-reveal" style={{ animationDelay: '700ms' }}>
                        <div className="flex items-center gap-4 mb-10">
                            <h2 className="font-serif text-3xl text-white whitespace-nowrap">Hoofdgerechten</h2>
                            <div className="flex-grow h-[1px] bg-koetsier-gold/30"></div>
                        </div>
                        <div className="space-y-10">
                            {menuData.hoofdgerechten.items.map((item, i) => (
                                <div key={i} className="group menu-item-hover relative" style={{ animationDelay: `${800 + (i * 100)}ms` }}>
                                    <div className="flex justify-between items-end mb-2 relative z-10">
                                        <div className="flex flex-col">
                                            {item.name === "Tagliata di manzo" && (
                                                <span className="text-[9px] uppercase tracking-[0.2em] text-koetsier-gold font-bold mb-1">Chefs keuze</span>
                                            )}
                                            <h3 className="font-bold text-lg text-stone-200 group-hover:text-koetsier-gold transition-all duration-300 transform group-hover:translate-x-1">{item.name}</h3>
                                        </div>
                                        <div className="flex-grow mx-4 h-[1px] border-b border-dotted border-stone-700 mb-1"></div>
                                        <span className="text-koetsier-gold font-serif text-lg">€ {item.price}</span>
                                    </div>
                                    <p className="text-sm text-stone-500 font-light leading-relaxed max-w-[85%]">{item.description}</p>
                                    <div className="item-line absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-500"></div>
                                </div>
                            ))}

                            {/* Erbij Selection */}
                            <div className="pt-12 mt-12 bg-stone-900/30 p-8 rounded-sm border-l-2 border-koetsier-gold/40">
                                <h3 className="font-serif text-xl text-stone-400 mb-6 uppercase tracking-[0.2em] flex items-center gap-3">
                                    <div className="w-1 h-1 bg-koetsier-gold rounded-full"></div>
                                    Erbij
                                </h3>
                                <div className="space-y-4">
                                    {menuData.erbij.items.map((item, i) => (
                                        <div key={i} className="flex justify-between items-center italic text-stone-400 hover:text-koetsier-gold transition-colors group cursor-default">
                                            <span>{item.name}</span>
                                            <div className="flex-grow mx-3 h-[1px] bg-stone-800 group-hover:bg-koetsier-gold/20 transition-colors"></div>
                                            <span className="text-sm">€ {item.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Kleine Koetsier */}
                    <div className="animate-reveal" style={{ animationDelay: '900ms' }}>
                        <div className="flex items-center gap-4 mb-2">
                            <h2 className="font-serif text-3xl text-white whitespace-nowrap">{menuData.kleineKoetsier.title}</h2>
                            <div className="flex-grow h-[1px] bg-koetsier-gold/30"></div>
                        </div>
                        <p className="text-stone-500 uppercase tracking-[0.3em] text-xs mb-10 font-medium">{menuData.kleineKoetsier.subtitle}</p>
                        <div className="space-y-10">
                            {menuData.kleineKoetsier.items.map((item, i) => (
                                <div key={i} className="group menu-item-hover relative">
                                    <div className="flex justify-between items-end mb-2 relative z-10">
                                        <h3 className="font-bold text-lg text-stone-200 group-hover:text-koetsier-gold transition-all duration-300 transform group-hover:translate-x-1">{item.name}</h3>
                                        <div className="flex-grow mx-4 h-[1px] border-b border-dotted border-stone-700 mb-1"></div>
                                        <span className="text-koetsier-gold font-serif text-lg">€ {item.price}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Nagerechten */}
                    <div className="animate-reveal" style={{ animationDelay: '1000ms' }}>
                        <div className="flex items-center gap-4 mb-10">
                            <h2 className="font-serif text-3xl text-white whitespace-nowrap">Nagerechten</h2>
                            <div className="flex-grow h-[1px] bg-koetsier-gold/30"></div>
                        </div>
                        <div className="space-y-10">
                            {menuData.nagerechten.items.map((item, i) => (
                                <div key={i} className="group menu-item-hover relative">
                                    <div className="flex justify-between items-end mb-2 relative z-10">
                                        <div className="flex flex-col">
                                            {item.name === "Moelleux au chocolat" && (
                                                <span className="text-[9px] uppercase tracking-[0.2em] text-koetsier-gold font-bold mb-1">Chefs keuze</span>
                                            )}
                                            <h3 className="font-bold text-lg text-stone-200 group-hover:text-koetsier-gold transition-all duration-300 transform group-hover:translate-x-1">{item.name}</h3>
                                        </div>
                                        <div className="flex-grow mx-4 h-[1px] border-b border-dotted border-stone-700 mb-1"></div>
                                        <span className="text-koetsier-gold font-serif text-lg">€ {item.price}</span>
                                    </div>
                                    {item.description && <p className="text-sm text-stone-500 font-light leading-relaxed max-w-[85%]">{item.description}</p>}
                                    {item.extra && <div className="mt-3 inline-block px-3 py-1 bg-koetsier-gold/10 rounded-full"><p className="text-[10px] text-koetsier-gold font-bold uppercase tracking-widest leading-none">{item.extra}</p></div>}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Footer info */}
                <div className="mt-40 text-center border-t border-koetsier-gold/10 pt-16 animate-reveal" style={{ animationDelay: '1200ms' }}>
                    <div className="inline-flex items-center gap-3 mb-6 bg-stone-900/50 px-6 py-2 rounded-full border border-stone-800">
                        <div className="w-2 h-2 bg-koetsier-gold rounded-full animate-pulse"></div>
                        <p className="text-stone-400 text-sm italic">Heeft u een allergie? Meld het ons!</p>
                        <div className="w-2 h-2 bg-koetsier-gold rounded-full animate-pulse"></div>
                    </div>
                    <br />
                    <a
                        href="#contact"
                        className="bg-koetsier-gold hover:bg-amber-700 text-white font-bold py-5 px-14 rounded-sm uppercase tracking-[0.2em] transition-colors duration-300 inline-block"
                    >
                        Reserveer een tafel
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FullMenu;
