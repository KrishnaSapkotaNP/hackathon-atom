import DashboardLayout from '../../components/layout/DashboardLayout';
import StatCard from '../../components/cards/StatCard';
import AuditTable from '../../components/tables/AuditTable';

const auditRows = [
  { id: 1, action: 'Role updated', actor: 'Admin', time: '09:14' },
  { id: 2, action: 'Goal shared', actor: 'System', time: '10:02' },
];

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <section className='dashboard-section'>
        <div className='stat-grid'>
          <StatCard label='Active users' value='128' trend='+6 this month' />
          <StatCard label='Shared goals' value='34' trend='Stable' />
          <StatCard label='Audit alerts' value='2' trend='Needs review' />
        </div>
      </section>
      <section className='dashboard-section'>
        <h2>Recent audit events</h2>
        <AuditTable rows={auditRows} />
      </section>
    </DashboardLayout>
  );
}
