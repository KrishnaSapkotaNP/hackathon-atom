import DashboardLayout from '../../components/layout/DashboardLayout';
import GoalTable from '../../components/tables/GoalTable';

const rows = [
  { id: 1, title: 'Security compliance', owner: 'Leadership', status: 'On track' },
  { id: 2, title: 'Customer delight', owner: 'All teams', status: 'At risk' },
];

export default function SharedGoals() {
  return (
    <DashboardLayout>
      <section className='dashboard-section'>
        <h1>Shared goals</h1>
        <GoalTable rows={rows} />
      </section>
    </DashboardLayout>
  );
}
