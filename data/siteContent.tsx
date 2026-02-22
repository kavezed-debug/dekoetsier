import React from 'react';
import { UtensilsCrossed, Beer, Music } from 'lucide-react';

// ==============================================================================
// HIER AANPASSEN: Beheer hier eenvoudig uw agenda en menu
// ==============================================================================

export const siteContent = {
  // 1. WEEKAGENDA (Woensdag t/m Zondag)
  agenda: [
    {
      day: "Woensdag",
      title: "Biefstukavond",
      time: "17:00 - 22:00",
      description: "Onze klassieke malse kogelbiefstuk met brood en jus voor een vriendenprijs.",
      icon: <UtensilsCrossed size={20} />,
      color: "bg-stone-800",
      highlight: false
    },
    {
      day: "Donderdag",
      title: "Speciaalbier Proeverij",
      time: "16:00 - 00:00",
      description: "Laat je verrassen door Gijs met 3 seizoensbieren van de tap.",
      icon: <Beer size={20} />,
      color: "bg-stone-800",
      highlight: false
    },
    {
      day: "Vrijdag",
      title: "Vrijmibo Deluxe",
      time: "16:00 - 01:00",
      description: "Start het weekend goed! Bittergarnituur van het huis bij je eerste rondje.",
      icon: <Beer size={20} />,
      color: "bg-gradient-to-r from-stone-800 to-stone-900 border-l-4 border-koetsier-gold",
      highlight: true // Dit zorgt voor de gouden rand/highlight stijl
    },
    {
      day: "Zaterdag",
      title: "Diner & Sfeer",
      time: "16:00 - 01:00",
      description: "De keuken draait op volle toeren. Reserveren aanbevolen!",
      icon: <UtensilsCrossed size={20} />,
      color: "bg-stone-800",
      highlight: false
    },
    {
      day: "Zondag",
      title: "Live Muziek / Jam Sessie",
      time: "16:00 - 22:00",
      description: "Lokale helden en spontane jamsessies. Kom luisteren of doe mee.",
      icon: <Music size={20} />,
      color: "bg-stone-800",
      highlight: false
    }
  ],

  // 2. UITGELICHTE GERECHTEN (Specials)
  highlights: [
    {
      title: "De Koetsier Mega Borrelplank",
      description: "Rijkelijk gevuld met lokale kazen, worsten, bitterballen en huisgemaakte dips.",
      image: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=600&auto=format&fit=crop",
      price: "€ 24,50"
    },
    {
      title: "Saté de Koetsier",
      description: "Malse kippendijen gemarineerd in onze geheime ketjap-mix. Geserveerd met frites.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop",
      price: "€ 19,50"
    },
    {
      title: "Steak Frites",
      description: "Perfect gebakken tournedos met pepersaus en verse seizoensgroenten.",
      image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?q=80&w=600&auto=format&fit=crop",
      price: "€ 26,00"
    }
  ],

  // 3. CONTACT & OPENINGSTIJDEN
  contact: {
    address: "Rijksstraatweg 106A",
    city: "3632 AG Loenen aan de Vecht",
    phone: "0294-761242",
    email: "info@dekoetsier.com"
  },
  openingHours: [
    { day: "Maandag", hours: "Gesloten" },
    { day: "Dinsdag", hours: "Gesloten" },
    { day: "Woensdag", hours: "16:00 - 01:00" },
    { day: "Donderdag", hours: "16:00 - 01:00" },
    { day: "Vrijdag", hours: "16:00 - 02:00" },
    { day: "Zaterdag", hours: "16:00 - 02:00" },
    { day: "Zondag", hours: "16:00 - 01:00" }
  ],
  socials: {
    instagram: "https://www.instagram.com/dekoetsier_loenen/",
    facebook: "https://www.facebook.com/profile.php?id=61553241475185"
  },

  // 4. OVER ONS & RESERVEREN TEXTS
  about: {
    title: "Welkom bij De Koetsier",
    description: "Al sinds jaar en dag dé plek waar mensen samenkomen. Héél lang geleden de koetsiers en vandaag iedereen die in is voor gezelligheid. Wij zijn de woonkamer van Loenen en omgeving. Hier geniet je van zowel een borrel als diner. Waar met veel passie alles in het teken staat van gezelligheid en mooi eten.",
    introTitle: "Even voorstellen",
    introText: "Ik ben Gijs Vermeulen, een horecaondernemer in hart en nieren. Met veel passie werk ik al meer dan 30 jaar in het horeca vak.\n\nIk heb enorm veel zin om mijn krachten te bundelen op deze mooie plek in ons eigen dorp!"
  },
  reservation: {
    title: "Reserveren",
    description: "De Koetsier, een gezellig eetcafé gelegen in het schilderachtige Loenen aan de Vecht, neemt telefonische reserveringen en reserveringen per email aan voor een heerlijke culinaire ervaring. Ons telefoonnummer is 0294-761242 en/of email naar info@dekoetsier.com .Wij reageren dan zo snel mogelijk!",
    onlineInfo: "Online reserveren is natuurlijk ook mogelijk, klik hiervoor op de reserveringsbutton rechtsonder."
  }
};