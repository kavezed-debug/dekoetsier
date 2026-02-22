import React from 'react';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingCTA from '../components/FloatingCTA';

export const metadata = {
  title: 'Café De Koetsier | De Huiskamer van Loenen',
  description: 'Gezelligheid, borrelen en heerlijk dineren bij Gijs in Loenen aan de Vecht.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
        {/* Tailwind CDN for quick styling if local build isn't set up, though globals.css is preferred in Next.js */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'koetsier-dark': '#1c1917',
                    'koetsier-panel': '#292524',
                    'koetsier-gold': '#d97706',
                    'koetsier-gold-light': '#f59e0b',
                    'koetsier-cream': '#f5f5f4',
                  },
                  fontFamily: {
                    serif: ['"Playfair Display"', 'serif'],
                    sans: ['"Lato"', 'sans-serif'],
                  }
                }
              }
            }
          `
        }} />
      </head>
      <body className="bg-koetsier-dark text-koetsier-cream antialiased font-sans selection:bg-koetsier-gold selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}