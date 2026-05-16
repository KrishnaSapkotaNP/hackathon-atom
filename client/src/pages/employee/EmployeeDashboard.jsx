import DashboardLayout from '../../components/layout/DashboardLayout';
import StatCard from '../../components/cards/StatCard';
import GoalCard from '../../components/cards/GoalCard';
import ProgressChart from '../../components/charts/ProgressChart';
import PieStatusChart from '../../components/charts/PieStatusChart';
import TeamHeatmap from '../../components/charts/TeamHeatmap';

const goals = [
  { title: 'Launch onboarding refresh', owner: 'You', status: 'On track', due: 'May 30' },
  { title: 'Finish Q2 OKRs', owner: 'You', status: 'Needs focus', due: 'Jun 10' },
];

const statusSegments = [
  { label: 'On track', value: 5 },
  { label: 'At risk', value: 2 },
  { label: 'Done', value: 3 },
];

const heatmapCells = [
  { id: 1, value: 3 },
  { id: 2, value: 4 },
  { id: 3, value: 1 },
  { id: 4, value: 2 },
];

export default function EmployeeDashboard() {
  return (
    <DashboardLayout>
      <section className='dashboard-section'>
        <div className='stat-grid'>
          <StatCard label='Active goals' value='4' trend='+1 this week' />
          <StatCard label='Check-ins' value='2' trend='Due today' />
          <StatCard label='Peer feedback' value='5' trend='Awaiting review' />
        </div>
      </section>
      <section className='dashboard-section'>
        <div className='card-grid'>
          {goals.map((goal, index) => (
            <GoalCard key={index} {...goal} />
          ))}
        </div>
      </section>
      <section className='dashboard-section chart-grid'>
        <ProgressChart value={68} />
        <PieStatusChart segments={statusSegments} />
        <TeamHeatmap cells={heatmapCells} />
      </section>
    </DashboardLayout>
  );
}
