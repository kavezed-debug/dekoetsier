import WeeklyAgenda from '../../components/WeeklyAgenda';

export const metadata = {
  title: 'Agenda | Café De Koetsier',
  description: 'Bekijk de weekplanning van De Koetsier. Van biefstukavond tot live muziek.',
};

export default function AgendaPage() {
  return (
    <div className="pt-24">
      <WeeklyAgenda />
    </div>
  );
}