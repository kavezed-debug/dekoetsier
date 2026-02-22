import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import WeeklyAgenda from '../components/WeeklyAgenda';
import Reservations from '../components/Reservations';
import MenuHighlights from '../components/MenuHighlights';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <WeeklyAgenda />
      <Reservations />
      <MenuHighlights />
    </>
  );
}