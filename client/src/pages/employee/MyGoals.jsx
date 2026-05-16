import DashboardLayout from '../../components/layout/DashboardLayout';
import GoalTable from '../../components/tables/GoalTable';

const rows = [
  { id: 1, title: 'Improve customer onboarding', owner: 'You', status: 'On track' },
  { id: 2, title: 'Ship analytics refresh', owner: 'You', status: 'At risk' },
];

export default function MyGoals() {
  return (
    <DashboardLayout>
      <section className='dashboard-section'>
        <h1>My goals</h1>
        <GoalTable rows={rows} />
      </section>
    </DashboardLayout>
  );
}
