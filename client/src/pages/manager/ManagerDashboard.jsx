import DashboardLayout from '../../components/layout/DashboardLayout';
import StatCard from '../../components/cards/StatCard';
import ApprovalTable from '../../components/tables/ApprovalTable';

const approvals = [
  { id: 1, request: 'Goal update', requestedBy: 'A. Singh', status: 'Pending' },
  { id: 2, request: 'Check-in summary', requestedBy: 'J. Chen', status: 'Pending' },
];

export default function ManagerDashboard() {
  return (
    <DashboardLayout>
      <section className='dashboard-section'>
        <div className='stat-grid'>
          <StatCard label='Team goals' value='12' trend='3 due this week' />
          <StatCard label='Reviews' value='4' trend='2 waiting' />
          <StatCard label='Approvals' value='2' trend='Pending' />
        </div>
      </section>
      <section className='dashboard-section'>
        <h2>Approvals</h2>
        <ApprovalTable rows={approvals} />
      </section>
    </DashboardLayout>
  );
}
