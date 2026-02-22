import AboutUs from '../../components/AboutUs';

export const metadata = {
  title: 'Over Ons | Café De Koetsier',
  description: 'Het verhaal van Gijs en de historie van De Koetsier.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 bg-stone-100 min-h-screen">
      <AboutUs />
    </div>
  );
}