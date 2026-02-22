import FullMenu from '../../components/FullMenu';

export const metadata = {
  title: 'Menukaart | Café De Koetsier',
  description: 'Onze volledige menukaart: Gastvrij, eerlijk en ambachtelijk.',
};

export default function MenuPage() {
  return (
    <div className="pt-24 bg-koetsier-dark min-h-screen">
      <FullMenu />
    </div>
  );
}